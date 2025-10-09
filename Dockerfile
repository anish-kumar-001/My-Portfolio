# Use a lightweight official Nginx image as the base
FROM nginx:alpine

# Remove the default Nginx html directory
RUN rm -rf /usr/share/nginx/html/*

# Copy your portfolio file (index.html) into the Nginx public folder
# Since this is a single static file, we rename it to index.html during copy
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 to the outside world
EXPOSE 80

# Nginx starts automatically as the default command
CMD ["nginx", "-g", "daemon off;"]
