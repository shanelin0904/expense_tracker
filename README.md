![MyImage](https://scontent.ftpe3-2.fna.fbcdn.net/v/t39.30808-6/314583328_5572139462881020_2876098392908596237_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=5CijwUz-fa4AX86WrJr&_nc_ht=scontent.ftpe3-2.fna&oh=00_AfChDLhPjwqZCB1Ovjp2ew1clhqRzQKurw2yGL3_dan35A&oe=63724E06)
![MyImage](https://scontent.ftpe3-2.fna.fbcdn.net/v/t39.30808-6/313413788_5572141182880848_7119289719666991247_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=TxplNNOpM3QAX8X-WZk&_nc_ht=scontent.ftpe3-2.fna&oh=00_AfCjN4WHr6pbeoVp-gyboEYeoRcuCdEJ4UFVw-DRGX_JSQ&oe=637269D8)
![MyImage](https://scontent.ftpe3-1.fna.fbcdn.net/v/t39.30808-6/313412241_5572142596214040_8272210503398886529_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=FnweQG2OZPYAX9CZBcD&_nc_oc=AQmIgnN0RTKQe5n0pRI5PVlxWlSk-6G_9bU1lwvKmXWhCLAZNAD8j4SnxNLJCTthUH8&_nc_ht=scontent.ftpe3-1.fna&oh=00_AfAEtvBILGuRrQ280IvjyxD-vUNFEse0OMMDhNnGtRJoRA&oe=637248BE)
![MyImage](https://scontent.ftpe3-1.fna.fbcdn.net/v/t39.30808-6/315172585_5572143709547262_600190250745231552_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=xfXf_cfWJNkAX96t5XZ&_nc_ht=scontent.ftpe3-1.fna&oh=00_AfDEYdowTBycp6mNI0iF8EysfPdmS4HBvhanHFmYEClklw&oe=63721C4E)
![MyImage](https://scontent.ftpe3-1.fna.fbcdn.net/v/t39.30808-6/315072722_5572145196213780_4271670546257919277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=-zOCu_eZlSEAX9QUmj7&_nc_ht=scontent.ftpe3-1.fna&oh=00_AfAVlut5dFWiFG-Hp2fqtU2sgJBHa7MXs79VxvE847z8dA&oe=6372CE83)
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
