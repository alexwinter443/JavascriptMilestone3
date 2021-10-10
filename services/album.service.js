const db = require("../config/db.config");
const mySqlConnect = require("../connection/mysql_connect");

// Gets All Artists DISTINCT
exports.getAllArtist = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      connection.query(        
        "SELECT DISTINCT ARTIST from album",  // only interested in the key to productlines
        (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};


// Return all albums for a give artist
// GET /albums/{artist} 
exports.getAllAlbumsForArtist = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      connection.query(connection.format( 
        'SELECT TITLE from album WHERE ARTIST = ? ', 
        [
          req.params.id,  // parameters matched by position to the question marks
        ]
        ), (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};

// !! name of service !!
exports.getAllAlbums = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      // !! Query !!
      connection.query(
        'SELECT TITLE from album', 
        (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};

exports.getAlbumID = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      // !! Query !!
      connection.query(connection.format( 
        'SELECT * from album WHERE ID = ?', 
        [
          req.params.id,  // parameters matched by position to the question marks
        ]
      ),
      (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};


// return list of albums search by artist
// Album search but for a particular artist
// /albums/search/artist/{search} 
exports.getArtistAlbum = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      // !! Query !!
      connection.query(connection.format( 
        'SELECT * from album WHERE ARTIST = ? AND TITLE = ?', 
        [
          req.params.artist,  // parameters matched by position to the question marks
          req.params.title,
        ]
      ),
      (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};

exports.getAlbumByDescription = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      // !! Query !!
      connection.query(connection.format( 
        "SELECT * from album WHERE Description = ?", 
        [
          req.params.desc,  // parameters matched by position to the question marks
        ]
      ),
      (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};

exports.createAlbumPost = (data, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      // The ?? operator puts the id in backtics so the MySQL server won't see the values as Strings
      let insertQuery = connection.format(
        'INSERT INTO album (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)',
        [
          "ID",
          "TITLE",
          "ARTIST",
          "YEAR",
          "IMAGE_NAME",
          "DESCRIPTION",
          data.ID,
          data.TITLE,
          data.ARTIST,
          data.YEAR,
          data.IMAGE_NAME,
          data.DESCRIPTION
        ]);

      // This will give you a query that's ready to run in Workbench
      // Good for debugging  
      console.log(insertQuery);
      connection.query(insertQuery, (error, data) => {
        connection.release();
        callback(error, data);
      });
    }
  });
};



exports.deleteAlbum1 = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      // !! Query !!
      let insertQuery = connection.query(connection.format( 
        "DELETE from album WHERE ARTIST = ? AND ID = ?", 
        [
          req.params.artist,  // parameters matched by position to the question marks
          req.params.id
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

exports.updateAlbum1 = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      // !! Query !!
      let insertQuery = connection.query(connection.format( 
        "UPDATE album SET TITLE = ? , ARTIST = ?, YEAR = ?, IMAGE_NAME = ?, DESCRIPTION = ? WHERE ID = ?", 
        [
          req.params.title,  // parameters matched by position to the question marks
          req.params.artist,
          req.params.year,
          req.params.imgname,
          req.params.desc,
          req.params.id

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