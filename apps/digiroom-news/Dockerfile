# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json /app/

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /app/

# Build the Next.js application
RUN npm run build

# Start the Next.js application
CMD ["npm", "run", "dev"]
