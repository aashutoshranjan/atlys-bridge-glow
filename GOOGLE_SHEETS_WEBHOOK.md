# Google Sheets Webhook for Enrollment Form

The enrollment form on `/form` posts submissions to a Google Apps Script Web
App, which appends a row to a Google Sheet. The webhook URL is read from
`src/config/company.ts → googleSheetsWebhookUrl`. Leave that field empty to
disable webhook posting (the form will still navigate to `/enroll`).

## Fields posted

| Column      | Source field    |
|-------------|-----------------|
| Timestamp   | server-side     |
| Name        | `fullName`      |
| Email       | `email`         |
| Contact     | `contactNumber` |
| Position    | `position`      |
| Location    | `location`      |
| Starting Date | `startDate`   |
| Batch Code  | `batchCode`     |

## 1. Create the Sheet

1. Create a new Google Sheet (e.g. `Atlys Enrollments`).
2. Add a header row (row 1):
   `Timestamp | Name | Email | Contact | Position | Location | Starting Date | Batch Code`
3. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`.

## 2. Add the Apps Script

In the Sheet: **Extensions → Apps Script**, replace `Code.gs` with:

```javascript
const SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.contactNumber || '',
      data.position || '',
      data.location || '',
      data.startDate || '',
      data.batchCode || '',
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy

1. **Deploy → New deployment → Type: Web app**.
2. Execute as: **Me**. Who has access: **Anyone**.
3. Click **Deploy**, authorize, copy the **Web app URL**.

## 4. Paste into the project

Open `src/config/company.ts` and set:

```ts
googleSheetsWebhookUrl: "https://script.google.com/macros/s/AKfycb.../exec",
```

Rebuild: `npm run build`.

## Notes

- The browser fires the request as `text/plain` (no preflight) so Apps Script
  receives it without CORS issues. Response is opaque — that's fine, we only
  need the row to land in the Sheet.
- Submissions still navigate to `/enroll` even if the webhook fails, so
  candidates are never blocked.
