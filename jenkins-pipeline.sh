#!/bin/bash
set -xe

# Define image name
IMAGE_NAME=password-generator

# Stop and remove old containers
docker compose down || true

# Remove the old image (if it exists)
docker rmi -f $IMAGE_NAME || true

# Rebuild the image with fresh code
docker compose build --no-cache

# Start the container again
docker compose up -d