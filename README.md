### Backend project
This assigment requires teamwork. Your team has been assigned one of two topics: 
1. Library management system
Main path:
- Users
- Admin (or Admins if you decide to have multiple site admins)
- Books
- Authors
- Carts
- Optional paths: Reviews
2. Ecommerce Website
Main paths:
- Users
- Admin (or Admins if you decide to have multiple site admins)
- Products
- Categories
- Carts
- Optional paths: Reviews
---
## Requirements
*For team assignment, only 1 member in the team should fork the repo. Then, admin can invite other members to contribute in the same repo. Remember to have develop branch before merging to main. And each feature/schema/bug/issue should have it's own branch, and taken by only 1 member. Before making any new branch, make sure you run `git pull` to avoid the conflicts with the remote repo. If neccessary, check the Git lecture again.*
1. Design the API endpoints, following REST API architecture (if you team has done this part in the rest-api assignment, you can copy the swagger folder here, as well as the codes). Change the  api document path to '/', so it will be the first page when users visit.
2. Set up exress server and create CRUD endpoints for all the schema:
- Create routers for the main paths, and use the router in the app.
- Add error handler middlewares (authentication middlewares can be delayed till we reach that lecture).
3. Create controller folder and the controller file for each route. Add request handlers of each route to it's controller file.
4. Create ERD diagram
5. Set up Mongo DB in your project and create all the mongoose schema according to your ERD diagram. You can use local mongodb for development, but in production, switch to Mongo Atlas
6. Create a separate services folder and create service file for each schema. The service file will contains expensive functions which interact with MongoDB. Later on in controller, we will import the functions there and use.
7. Add authentication middleware using passport, google and jwt strategy.
8. Add tests for your controllers and services. Remember to create the jwt token for your tests, because if your controller is protected, then the test should send the token also.
9. When your project is about to complete, deploy it to online platform of your choice. Rewrite the README.md file with your own introduction, tech stack, project details, contributors, and link to the online demo.
