# Step 1: Use Node as base image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install deps
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the code
COPY . .

# Step 5: Build the app
RUN npm run build

# Step 6: Expose preview port
EXPOSE 4173

# Step 7: Run the production preview server
CMD ["npm", "run", "preview", "--", "--host"]
