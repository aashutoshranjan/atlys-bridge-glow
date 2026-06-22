# Nginx + Ubuntu Deployment

This is a standard React + Vite SPA. After `npm run build` the static
site lives in `dist/`.

## Build

```bash
npm install
npm run build
```

## Nginx config

```nginx
server {
    listen 80;
    server_name atlysbridge.com www.atlysbridge.com;
    root /var/www/atlysbridge/dist;
    index index.html;

    # SPA fallback so client routes (/about, /form, /enroll, …) work
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Long-cache hashed assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Then:

```bash
sudo rsync -a --delete dist/ /var/www/atlysbridge/dist/
sudo nginx -t && sudo systemctl reload nginx
```

## Update company branding

Edit `src/config/company.ts` (name, domain, emails, WhatsApp, QR path,
logo, LinkedIn, etc.) and rebuild. Or use the helper script:

```bash
./change-company.sh "Atlys Integrated Infotech"
# or
npm run change-company "Atlys Integrated Infotech"
```
