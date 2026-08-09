const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false})); //bodyparser middleware - it parses all the form-data and traslated into the javascipt object

app.get('/currenttime', (req, res) => {
   res.send('<h1>' + new Date().toISOString() + '</h1>'); //localhost:3000/currenttime
});

app.get('/', (req, res) => { //localhost:3000
   res.send(`
      <form action="/store-user" method="POST">
         <label>Your Name</label>
         <input type="text" name="username" />
         <button>Submit</button>
      </form>
      `); //user should input his or her name
});

app.post('/store-user', function(req, res) {
   const userName = req.body.username;

   /**
    * filePath shows the path where the file is saved
    * with fs.readFileSync() -> we get the raw datas which should be write
    * with fs.wirteFileSync() -> we can write the data into the file which is discribed by filePath 
    */
   const filePath = path.join(__dirname, 'data', 'users.json');

   const fileData = fs.readFileSync(filePath); //return raw text 
   const existingUsers = JSON.parse(fileData); //parsed raw text and transform it into javascript array
   existingUsers.push(userName); 

   fs.writeFileSync(filePath, JSON.stringify(existingUsers)); //it need raw text, which write back into the file

   res.send('<h1>Username stored!</h1>');
});

app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
}); 