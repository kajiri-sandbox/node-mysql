const express = require('express')
const app = express()

var mysql = require('mysql');
var mysqlConnection = {
  host : 'mysql',
  port : 3306,
  user : 'root',
  password : 'password',
  database : 'testdb'
}
var connection = mysql.createConnection(mysqlConnection);
connection.connect(function(err){
  if (err) throw err;
  console.log('Connected!!')
});


app.get('/', (req, res) => {
  console.log('req /')
  res.send('Hello World!!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))


app.get('/db', (req, res) => {
  try {
    const query = 'select * from mydata;'
    connection.query(query, function (err, results, fields) {
      if (err) throw err
      console.log('results: ', results);
      res.send(JSON.stringify(results))
    });
  } catch(e) {
    console.log(e)
  }
})
