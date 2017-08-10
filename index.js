const rethinkdb = require('rethinkdb')

const params = {
  host: 'localhost',
  port: 28015
}
const onConnect = (err, conn) => {
  console.log(conn)
}
const db = rethinkdb.connect(params, onConnect)

