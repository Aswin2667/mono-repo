# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .
EXPOSE 8000
# Build the project
CMD ["npm", "run", "dev"]