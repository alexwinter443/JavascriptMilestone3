//const musictb = require("../services/productlines.service");
const musictb = require("../services/album.service");

exports.getAllArtist = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.getAllArtist(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

// getAllAlbumsArtist
exports.getAllAlbumsForArtist2 = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.getAllAlbumsForArtist(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getAllAlbums = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.getAllAlbums(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getAlbumID2 = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.getAlbumID (req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

// search albums by artist
exports.getArtistAlbum = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.getArtistAlbum(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getAlbumByDesc = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.getAlbumByDescription(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.postAlbumC = (req, res, next) => {
  // Validation area
  if (!(req.body.ID && req.body.TITLE)) {
    return res.status(400).send({ success: 0, data: "Request must specify all values" })
  }
  

  musictb.createAlbumPost (req.body, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad Request" + error});
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.deleteAlbum = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.deleteAlbum1(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.updateAlbum = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  musictb.updateAlbum1 (req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
