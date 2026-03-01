# Use a lightweight Alpine-based Nginx image to minimise image size 
# and reduce the attack surface compared to Debian-based variants
FROM nginx:alpine

# Remove default Nginx static assets to prevent accidental exposure 
# and ensure only application files are served
RUN rm -rf /usr/share/nginx/html/*

# Copy static application files into the Nginx web root
# This approach embeds assets into the image, supporting immutability
COPY src/ /usr/share/nginx/html

# Document that the container listens on port 80 internally
# Actual exposure is controlled via Docker Compose
EXPOSE 80

# Implement a container health check to verify Nginx is serving content.
# This enables better monitoring and automatic recovery in orchestration environments
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget --quiet --tries=1 --spider http://localhost || exit 1

# Run Nginx in the foreground (required for Docker containers)
CMD ["nginx", "-g", "daemon off;"]