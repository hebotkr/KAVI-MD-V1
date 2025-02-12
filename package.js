{
  "name": "KAVI-MD",
  "version": "1.0.1",
  "description": "A WhatsApp bot created using Node.js",
  "main": "index.js",
  "scripts": {
    "start": "pm2 start index.js --deep-monitoring --attach --name 'KAVI-MD'",
    "stop": "pm2 stop 'KAVI-MD'",
    "restart": "pm2 restart 'KAVI-MD'"
  },
  "dependencies": {
    "@whiskeysockets/baileys": "^6.7.12",
    "pino": "^9.6.0",
    "pm2": "^5.4.3",
    "util": "^0.12.5",
    "express": "^4.21.2",
    "axios": "^1.7.9",
    "file_size_url": "^1.0.6",
    "fs-extra": "^11.2.0",
    "path": "^0.12.7",
    "node-fetch": "^3.3.2",
    "megajs": "^1.3.5",
    "vm": "^0.1.0",
    "qrcode-terminal": "^0.12.0",
    "yt-search": "^2.12.1",
    "api-dylux": "^1.8.5",
    "mongoose": "^8.9.4",
    "fb-downloader-scrapper": "^2.0.0",
    "canvas": "^3.0.1",
    "@vreden/youtube_scraper": "^1.2.5",
    "wa-sticker-formatter": "^4.4.4",
    "cheerio": "^1.0.0",
    "os": "^0.1.2"
  }
}
