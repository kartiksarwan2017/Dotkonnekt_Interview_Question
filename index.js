const express = require('express');
const users = require('./users.json');
const port = 8000;


const app = express();


app.get('/filtered-sorted-users-list', (req, res) => {
    function sortUsers(users){

        const filteredUsers = users.filter((user, index) => {
         return user.age < 30;
        })
 
        filteredUsers.sort((a, b) => {
         return a.age - b.age
        });
 
       
        return res.status(200).json({
            filteredUsers: filteredUsers,
            message: "Users Lists filtered and sorted Successfully!"
        })
     
     }
 
     sortUsers(users);
})


app.get('/users', (req, res) => {

    return res.status(200).json({
        users: users,
        message: "users displayed successfully"
    })
});


app.listen(port, (err) => {
    if(err){
        console.log("error while running server");
    }

    console.log(`server is running on port : ${port}`);
})