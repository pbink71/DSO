# Use a lightweight base image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static website
RUN rm -rf ./*

# Copy the static website files from the repository into the container
COPY . .

# Expose port 80 to allow outside access to your website
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
