# Blog Application

## Overview

This dynamic and user-friendly Blog Application provides full CRUD functionality, allowing users to create, read, update, and delete blog posts. It follows the Model-View-Controller (MVC) architectural pattern for better organization and maintainability.

## Technologies Used

- Node.js
- MongoDB
- REST API
- EJS (Embedded JavaScript) for templating

## Intallation and Setup

1. Clone repository : `git clone <git_repo>`

2. Navigate to the Project Directory : `cd <DIR>`

3. Install Dependencies : `npm install`

4. Set up environment variables:

- Create a `.env` file in the root directory.
- Define variables like `MONGODB_URI` for MongoDB connection and other necessary configurations.

## Running the Application

1. Start the server: `npm start`

2. 2. Access the application in your browser at `http://localhost:3000`.

## Features

### 1. CRUD Functionality

- **Create:** Users can create new blog posts with title, content, and other details.
- **Read:** Users can view existing blog posts with their details.
- **Update:** Users can edit and update their existing blog posts.
- **Delete:** Users can delete blog posts they no longer wish to keep.

### 2. MVC Architecture

- **Models:** Define schemas for blog posts and handle database operations.
- **Views:** Use EJS templates for rendering dynamic content, including blog posts.
- **Controllers:** Handle user requests, interact with models, and render appropriate views.

## Development Highlights

- **Dynamic Interface:** Utilized EJS for creating dynamic and interactive web pages.
- **User-Friendly Design:** Designed the application to ensure a smooth and intuitive user experience.
- **RESTful API:** Implemented RESTful API endpoints for seamless communication between client and server.
- **CRUD Operations:** Implemented full CRUD functionality to manage blog posts efficiently.

## Deployment

The application can be deployed on any platform supporting Node.js and MongoDB, ensuring availability and accessibility for users.

## Conclusion

This Blog Application offers a comprehensive solution for managing blog posts with ease. By adhering to the MVC architectural pattern and utilizing modern web technologies like Node.js and MongoDB, it provides users with a seamless blogging experience.
