# node-mysql

# 起動コマンド node-server

```
docker run -p 3000:3000 -d kajiri
```

# gcp gce 作成
よしなに

# nginx 設定

```bash
sudo apt-get install nginx
cd /etc/nginx/sites-available/
sudo vi default
```

```bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  index index.html;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

```bash
sudo nginx -s reload
```
