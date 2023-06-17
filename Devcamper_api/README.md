# NODE JS API MasterClass

## About
This is a project based course where we built an extensive, in-depth backend API for DevCamper, a bootcamp directory API. We will started from scratch and end up with a professional deployed API with documentation. We dived deep into Node, Express and MongoDB. Here is some of what we'd learnt in this course and project...

## IN View
* HTTP Essentials
* Postman Client
* RESTful APIs
* Express Framework
* Routing & Controller Methods
* MongoDB Atlas & Compass
* Mongoose ODM
* Advanced Query (Pagination, filter, etc)
* Models & Relationships
* Middleware (Express & Mongoose)
* MongoDB Geospatial Index / GeoJSON
* Geocoding
* Custom Error Handling
* User Roles & Permissions
* Aggregation
* Photo Upload
* Authentication With JWT & Cookies
* Emailing Password Reset Tokens
* Custom Database Seeder Using JSON Files
* Password & Token Hashing
* Security: NoSQL Injection, XSS, etc
* Creating Documentation
* Deployment With PM2, NGINX, SSL

## HTTP Essentials
HTTP stands for Hyper Text Transfer Protocol which is used to transfer data over the internet. HTTP is a protocol that allows communication between different systems. HTTP Essentials describe the basic understanding of how HTTP request and response works.

## Postman Client
Postman Client is an application used for testing APIs. It provides features to create, test, and share APIs.

## RESTful APIs
RESTful APIs represent a standard way of designing and building web services. REST stands for Representational State Transfer, which means every unique URL is a representation of some resource.

## Express Framework
Express is a Node.js web application framework that provides a set of features to develop web and mobile applications. It is lightweight, flexible and scalable.

## Routing & Controller Methods
Routing is used to map client requests to server-side actions based on the URL path and HTTP method. The controller methods are functions that define what happens when a certain route is requested.

## MongoDB Atlas & Compass
MongoDB Atlas is a cloud-based service provided by MongoDB for hosting and managing databases. MongoDB Compass is a graphical user interface used for interacting with MongoDB databases.

## Mongoose ODM
Mongoose is an Object Document Mapping (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model data with built-in type casting, validation, query building, and more.

## Advanced Query (Pagination, filter, etc)
Advanced Query refers to techniques used to retrieve data from a database using filters, pagination, and sorting.

## Models & Relationships
Model is a JavaScript object constructor function and Instances of models are called Documents. Relationships in MongoDB are used to create a reference between two documents.

## Middleware (Express & Mongoose)
Middleware is a function that is executed before a request is handled by the server. In Express and Mongoose, middleware can be used to manipulate and validate data.

## MongoDB Geospatial Index / GeoJSON
MongoDB Geospatial Index is used to store geographic locations as latitude-longitude pairs. GeoJSON is a format for representing geospatial data in JSON format.

## Geocoding
Geocoding is the process of converting addresses into geographic coordinates (latitude and longitude).

## Custom Error Handling
Custom error handling is used to handle errors that occur in an application. It allows developers to provide meaningful error messages to users.

## User Roles & Permissions
User roles and permissions are used to control access to certain features or sections of an application. It is used to restrict access to certain resources in an application based on user roles.

## Aggregation
Aggregation is the process of grouping together data from multiple documents and performing operations on that data to return a single result.

## Photo Upload
Photo upload refers to the process of uploading images to a server. This feature is commonly used in applications that require users to submit images.

## Authentication With JWT & Cookies
JSON Web Token (JWT) is a standard used for creating tokens that authenticate users. Cookies are small pieces of data stored on the client-side browser. The combination of JWT and cookies is used for authentication.

## Emailing Password Reset Tokens
Emailing password reset tokens allows users to reset their password if they forget it. It is a security feature that is commonly used in web applications.

## Custom Database Seeder Using JSON Files
Database seeder is used to generate test data for an application. Custom database seeder using JSON files allows developers to generate test data easily.

## Password & Token Hashing
Password hashing is a technique used to convert passwords into a secret code that can't be read even by humans. Token hashing is used to secure token-based systems, like JWT.

## Security: NoSQL Injection, XSS, etc
Security is an important aspect of any application. NoSQL injection and XSS (Cross-Site Scripting) are two common security vulnerabilities in web applications.

## Creating Documentation
Creating documentation is an essential part of the development process. It allows developers to communicate the requirements, features, and functionality of an application to other team members.

## Deployment With PM2, NGINX, SSL
Deployment is the process of taking an application from a development environment to a production environment. PM2, NGINX, SSL are tools that are commonly used for deployment in Node.js applications.

### Note
Web development is changing. We used to render all of our views and templates on the server, but since the rise of frontend frameworks like React, Angular and Vue, we are now splitting projects up into backend and frontend, where the backend is doing all of the database interaction and serving JSON and the frontend is fetching that data and creating the user interface to interact with. This course will teach you the entire backend side of things so that you can build extensive APIs and then use whatever you want on the frontend.


### Hands-On
Real World Backend RESTful API For Bootcamp Directory App
HTTP Fundamentals (Req/Res Cycle, Status Codes, etc)
Advanced Mongoose Queries
JWT/Cookie Authentication
Express & Mongoose Middleware (Geocoding, Auth, Error Handling, etc)
API Security (NoSQL injection, XSS protection, Rate Limiting)
API Documentation & Deployment
Are there any course requirements or prerequisites?
Modern JavaScript (ES6)
Basic programming principles
Basic knowledge of Node helps
Who this course is for:
People that want to learn backend web development with Node
React/Vue/Angular Frontend devs that want to be full stack devs

### Installatioons 

* NodeMon
```$ npm install ---save-dev nodemon```
```$ npm start```

Use `node --trace-warnings ...` to show where the warning was created

### To fix issue with .env being pushed to the remote repository, you can follow these steps:

* Remove the file from Git cache: git rm ```--cached config/config.env.``` This will remove the file from Git cache but will keep it on your local disk.

* Commit the change: ```git commit -m "Remove config/config.env``` from Git cache".

* Make sure that ```/config/config.env``` is listed in your .gitignore file.
Push changes to the remote repository: ```git push origin <branch-name>```