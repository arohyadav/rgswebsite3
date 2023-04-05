const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
// create an instance of express app
const app = express();

// use body-parser middleware to parse incoming request bodies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create a pool of database connections
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'arohyadav',
  port: 5432,
});

// define a route for submitting the form data
app.post('/submit-form', (req, res) => {
  const { firstname, lastname, workemail, phonenumber, jobtitle ,company , messagebox } = req.body;

  // execute a database query to insert the form data into the table
  pool.query(
    'INSERT INTO public.users (firstname, lastname, workemail, phonenumber, jobtitle, company, messagebox) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [firstname, lastname, workemail, phonenumber, jobtitle, company , messagebox],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error inserting form data into database');
      } else {
        res.send('Form data inserted into database');
      }
    }
  );
});

// start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});


