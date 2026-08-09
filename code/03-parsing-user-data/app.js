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
   console.log(userName);
   res.send('<h1>Username stored!</h1>');
});

app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
}); 