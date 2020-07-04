const {HOST, USER, PASSWORD, DATABASE} = process.env
if (!HOST || !USER || !PASSWORD || !DATABASE) throw new Error('env require')

const express = require('express')
const app = express()

// mysqlに接続
var mysql = require('mysql');
var mysqlConnection = {
  host : HOST,
  user : USER,
  password : PASSWORD,
  database : DATABASE
}

// PROTOCOL_CONNECTION_LOSTエラーが起きたら再接続してくれるらっしい
// http://ninna2.hatenablog.com/entry/2017/02/22/node-mysql%E3%81%A7%E6%8E%A5%E7%B6%9A%E3%81%8C%E5%88%87%E3%82%8C%E3%82%8B%E7%82%B9%E3%82%92%E6%94%B9%E5%96%84
var connection
function handleDisconnect() {
    console.log('INFO.CONNECTION_DB: ');
    connection = mysql.createConnection(mysqlConnection);
    
    //connection取得
    connection.connect(function(err) {
        if (err) {
            console.log('ERROR.CONNECTION_DB: ', err);
            setTimeout(handleDisconnect, 1000);
        }
    });
    
    //error('PROTOCOL_CONNECTION_LOST')時に再接続
    connection.on('error', function(err) {
        console.log('ERROR.DB: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('ERROR.CONNECTION_LOST: ', err);
            handleDisconnect();
        } else {
            throw err;
        }
    });
}
handleDisconnect();
app.listen(3000, () => console.log(`Example app listening on 3000 ${3000}!`))

// 接続確認用
app.get('/', (req, res) => {
  console.log('req /')
  res.send('Hello World!!')
})

// dbの中身を返す
app.get('/db', (req, res) => {
  try {
    const query = 'select * from mydata;'
    connection.query(query, function (err, results, fields) {
      if (err) throw err
      console.log('results: ', results);
      res.send(JSON.stringify(results))
    });
  } catch (e) {
    console.log(e)
  }
})
