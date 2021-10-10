const db = require("../config/db.config");
const mySqlConnect = require("../connection/mysql_connect");

exports.getProducts = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      connection.query(
        "SELECT * from products",  // only interested in the key to productlines
        (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};

exports.deleteProduct = (req, callback) => {
    let error = false;
    mySqlConnect.acquire((error, connection) => {
      // failed to acquire connection from pool
      if (error) {
        callback(error, null);
      } else {
        // !! Query !!
        let insertQuery = connection.query(connection.format( 
          "DELETE from products WHERE ID = ?", 
          [
            req.params.id       // parameters matched by position to the question marks
          ]
        ),
        
        (error, data) => {
            // put the connection back in the pool
            connection.release();
            console.log(insertQuery);
            callback(error, data);
          }
        );
        
      }
    });
};

exports.postProduct1 = (data, callback) => {
    mySqlConnect.acquire((error, connection) => {
      if (error) {
        callback(error, null);
      } else {
        // The ?? operator puts the id in backtics so the MySQL server won't see the values as Strings
        let insertQuery = connection.format(
          'INSERT INTO products (??, ??) VALUES (?, ?)',
          [
            "name",
            "description",
            data.params.name,
            data.params.desc,
          ]);
  
        // This will give you a query that's ready to run in Workbench
        // Good for debugging  
        //console.log(insertQuery);
        connection.query(insertQuery, (error, data) => {
          connection.release();
          callback(error, data);
        });
      }
    });
  };


  exports.updateProduct = (data, callback) => {
    mySqlConnect.acquire((error, connection) => {
      if (error) {
        callback(error, null);
      } else {
        // The ?? operator puts the id in backtics so the MySQL server won't see the values as Strings
        let insertQuery = connection.format(
          'UPDATE products SET name = ?, description = ? WHERE ID = ?',
          [
            data.params.name,
            data.params.desc,
            data.params.id,
          ]);
  
        // This will give you a query that's ready to run in Workbench
        // Good for debugging  
        //console.log(insertQuery);
        connection.query(insertQuery, (error, data) => {
          connection.release();
          callback(error, data);
        });
      }
    });
  };
  