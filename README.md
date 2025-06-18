# Password Generator Web App - CI/CD Pipeline

This project is a simple **Password Generator** web application built with **HTML**, **CSS**, and **JavaScript**, packaged using **Docker**, and automated through a **CI pipeline with Jenkins**.

[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-ahmedmagdyy%2Fpassword--generator-blue?logo=docker)](https://hub.docker.com/r/ahmedmagdyy/password-generator)

---

## 📦 Project Structure

```plaintext
├── app/                    # Frontend source code
├── Dockerfile              # Containerizes the app with Nginx
├── docker-compose.yml      # Manages container lifecycle
├── jenkins-pipeline.sh     # Jenkins shell script for CI pipeline
````

---

## 🌐 Application Features

* Generates secure random passwords in the browser.
* Fully static frontend — no backend logic required.
* Hosted inside an **Nginx container**.
* Available at: `http://localhost:9090`

---

## 🐳 Dockerized Setup

The application is containerized using a multi-file Docker setup:

* `Dockerfile` uses the lightweight `nginx:alpine` image.
* Static assets are served by Nginx from `/usr/share/nginx/html`.

**Dockerfile Highlights:**

```dockerfile
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY app/ .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔁 docker-compose.yml

Simplifies local development and container orchestration:

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "9090:80"
    container_name: password-generator
```

---

## ⚙️ CI/CD Pipeline with Jenkins

Changes pushed to GitHub trigger an automated Jenkins pipeline via a **webhook**. The pipeline:

1. Stops and removes the old container and image.
2. Rebuilds the image using the latest code.
3. Spins up a new container with updated content.

**Shell Script (`jenkins-pipeline.sh`):**

```bash
#!/bin/bash
set -xe

IMAGE_NAME=password-generator

docker compose down || true
docker rmi -f $IMAGE_NAME || true
docker compose build --no-cache
docker compose up -d
```

---

## ☁️ Docker Hub

The Docker image is also published on Docker Hub for easy reuse and deployment:

🔗 [https://hub.docker.com/r/ahmedmagdyy/password-generator](https://hub.docker.com/r/ahmedmagdyy/password-generator)

To pull and run it:

```bash
docker pull ahmedmagdyy/password-generator
docker run -d -p 9090:80 --name password-generator ahmedmagdyy/password-generator
```

---

## 🔄 GitHub Webhook

A GitHub webhook is configured to automatically notify Jenkins of code changes. Once triggered, the Jenkins job performs a **rebuild and redeploy**, ensuring zero manual intervention.

---

## 👨‍💻 Author

**Ahmed Magdy**
Built as part of my DevOps learning journey. Open to feedback, collaboration, and improvements!
