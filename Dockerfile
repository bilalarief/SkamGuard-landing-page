# Stage 1: Build the React application
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code and build
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config template (uses ${PORT} placeholder)
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy the build output to the Nginx html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Cloud Run provides PORT env var (default 8080)
ENV PORT=8080

# Start Nginx — the official nginx image auto-runs envsubst
# on files in /etc/nginx/templates/ and outputs to /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
