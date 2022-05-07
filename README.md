# e-commerce-company-back-end

## Description
This application is the back-end of an e-commerce site. Using an Express.js API that uses Sequelize to interact with the data inside of the MySQL database.

## Table of Contents

- [Github](#github)
- [Video](#video)
- [Installation](#installation)
- [Usage](#usage)
- [Instructions](#instructions)
- [Technologies](#technologies)
- [Screenshots](#screenshots)

## Github
Here is the link to the GitHub URL:

Here is the link to clone for the GitHub repository:

# Video
Here is the link to the video demonstration:

## Installation
The user should git clone the repository from GitHub. This application requires Node.js, Express, MySQL2, and Sequelize. Make sure to install those dependencies at the root directory of the repository. To view the database from MySQL run `mysql -u root -p`. Login with your password. Run `source db/schema.sql` to use the schema. Enter `quit` to exit the MySQL shell. Then you will run the command `npm run seed` in your terminal to seed the database. To begin the application run `node server.js` or `npm start`.
* More detailed installation instructions under [Instructions](#instructions)

## Usage
* Connect to a database using Sequelize by adding the database name, MySQL username, and MySQL password to an environment variable file.
* Entering schema and seed commands will create a development database and is seeded with test data.
* Entering a command to invoke the application will start the server and the Sequelize models and synced to the MySQL database.
* Opening API GET routes in Insomnia for categories, products, or tags will display the data for each of the routes in a formatted JSON
* Testing API POST, PUT, and DELETE routes in Insomnia will be able to successfully create, update, and delete data in the database.

## Technologies
* Express
* MySQL2
* Sequelize
* Node.js
* Insomnia
* dotenv
* Npm

## Instructions
1. Clone the repository.
2. Install the dependencies- Express, Sequelize, mysql, and dotenv.
3. Create .env file and add the following- `DB_USER=root, DB_PW=YourPassword, DB_NAME='ecommerce_db'`
4. View the database by running `mysql -u root -p`, enter your MySQL password, and run `source db/schema.sql` to use the schema. Exit the MySQL shell by entering the command `quit`.
5. Run `npm run seed` to seed the database.
6. Start the server by running `node server.js` or `npm start` in the terminal
7. Test routes using Insomnia!

## Screenshots

## Author
Madison Kendall
