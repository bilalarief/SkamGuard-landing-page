# Stage 1: Build the React application
FROM node:20-alpine as build-stage

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code and build
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy the build output to the Nginx html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy a custom nginx configuration to handle SPA routing
COPY nginx.conf

EXPOSE 8080

# Configure Nginx to listen on the port provided by Cloud Run
CMD ["nginx", "-g", "daemon off;"]
