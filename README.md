![MyImage](https://scontent.frmq4-2.fna.fbcdn.net/v/t39.30808-6/314583328_5572139462881020_2876098392908596237_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=Dc91oXrOWyYAX-XG1m9&_nc_ht=scontent.frmq4-2.fna&oh=00_AfBOZWPJ_b_9dcr-XR-AQGYGpsufMavy6f2oJ_NirgA1-A&oe=63F4D286)
# Expense_tracker
This is a simple expense tracker
##  Dependency
This project is build by: 
* node.js: 14.16.0 
* nodemon: 2.0.20 
* bootstrap: 4.3.1 
* express: 4.16.4 
* express-session: 1.17.3
* express-handlebars: 6.0.6
* body-parser: 1.20.1 
* mongoose: 6.7.2 
* method-override: 3.0.0
* bcryptjs: 2.4.3
* connect-flash: 0.1.1
* dotenv: 16.0.3
* passport: 0.6.0
* passport-local: 1.0.0
##  Features

1. User can sign up with a new account and then login/out 

2. Index Page: user can see all expense records on index page, includes:
 * date
 * name 
 * catagory 
 * specific item's amount 
 * total amount 

 
3. User can click 編輯(edit) to  change details, includes:
 * catagory
 * date
 * specific item's amount
 
4. User can click trashcan icon to delete the record
 
5. User can create a record 

## Enviroment setup
Node.js
## Start this Project
### Before you get started,make sure you've already installed node.js and npm
1.Open your Terminal
```
git clone https://github.com/shanelin0904/expense_tracker
```
2.Change directory to expense_tracker

3.Enter following command in your terminal to install packages required
```
npm install 
```
4.Load seeddata
```
npm run seed
```
5.After that, enter following command in your terminal
```
npm run start
```

6.Check following message is shown on terminal
```
Express is listening on localhost:3000
mongodb connected!
```
7.Open your browser and type http://localhost:3000 on url input

8.If you want to stop service, please press ctrl+c/command+c on your terminal
