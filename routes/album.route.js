const musicController = require("../controllers/album.controller");

const AllArtists = "/allartists/";
const AllAlbumsForArtist = "/allartistAlbums/:id/";
const AllAlbums = "/allalbums";
const AlbumID = "/album/:id";
const ArtistAlbum = "/:artist/:title";
const AlbumByDesc = "/:desc";
const postAlbum1 = "/postAlbum";
const deleteAlbum = "/deleteAlbum/:artist/:id";
const updateAlbum = "/updateAlbum/:title/:artist/:year/:imgname/:desc/:id";
const root = "/";

var express = require("express");


var router = express.Router();

router
  .get(AllArtists, musicController.getAllArtist)
  .get(AllAlbumsForArtist, musicController.getAllAlbumsForArtist2)
  .get(AllAlbums, musicController.getAllAlbums)
  .get(AlbumID, musicController.getAlbumID2)
  .get(ArtistAlbum, musicController.getArtistAlbum)
  .get(AlbumByDesc, musicController.getAlbumByDesc)
  .post(postAlbum1, musicController.postAlbumC)
  .delete(deleteAlbum, musicController.deleteAlbum)
  .put(updateAlbum, musicController.updateAlbum)
  
  ;

// add the product line rounter to export
//
module.exports = router;