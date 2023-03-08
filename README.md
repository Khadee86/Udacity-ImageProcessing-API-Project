# Udacity-ImageProcessing-API-Project

This is a project from the Udacity Full Stack Developer Program, that using sharp api to resize an image. The resized image is saved in a thumb folder, and a buffer is used to display resized image without reload of browser.

The project was completed using express, sharp, prettier, ESLint, jasmine and TypeScript.Although it was not a complex project, I found it a challenging process to learn how to sue all these technologies and concepts together. However, it required a lot of research and backtracking of the tutorial modules and I was able to Successfully Complete the project.


##API/PATH

* /api/image?filename=sample.jpg

This path is used to display the original image in the full folder.

2. /api/images?filename=sample.jpg&height=100&width=200

This sample path will resize the image if it exists in the full folder, and save the resized copy in the thumb folder. It returns resized image to the client.

3. /api/
This is the welcome page that shows the list of .jpg images that can be resized.

Install Dependencies

Run npm install 

To Run Scripts

1. npm run prettier -To run Prettier
2. npm run lint -To run ESLint
3. npm run test -To run tests
4. npm run build -To build the project
5. npm run start -To run the application on port
