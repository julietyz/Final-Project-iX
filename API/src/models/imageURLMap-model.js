var mysqlConn = require("../database/database");

module.exports = class ImageURLMap {

    constructor(newListingID, newImageURL) {
      this.id;
      this.listingID = newListingID;
      this.imageURL = newImageURL;
    }

    getAll() {
        return new Promise((resolve, reject) => {
          mysqlConn.query("Select * from listing_image_mapping", function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                console.log("URLs : ", res);
                resolve(res);
              }
            });
          });
      }

      create(newListing){
        return new Promise((resolve, reject) => {
          mysqlConn.query("INSERT INTO listing_image_mapping set ?", newListing, function(err, res) {
            if (err) {
              console.log("error: ", err);
              reject(err);
            } else {
              console.log(res);
              resolve(res);
            }
          });
        });
      }

      deleteByListingID(listingID){
        return new Promise((resolve, reject) => {
          mysqlConn.query("DELETE FROM listing_image_mapping WHERE listingID = ?", listingID, function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                resolve(res);
              }
            });
      });
      }

      deleteByImageID(id){
        return new Promise((resolve, reject) => {
          mysqlConn.query("DELETE FROM listing_image_mapping WHERE id = ?", id, function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                resolve(res);
              }
            });
      });
      }

      deleteByListingIDAndURL(listingID, url) {
        return new Promise((resolve, reject) => {
          mysqlConn.query("Select * from listing_image_mapping WHERE listingID = ?", listingID, function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                res.forEach(imageEntry => {
                  console.log("this is an image entry " + imageEntry);
                  if(imageEntry.imageURL == url)
                  {
                    mysqlConn.query("DELETE FROM listing_image_mapping WHERE id = ?", imageEntry.id, function(err, res) {
                      if (err) {
                        console.log("error: ", err);
                        reject(err);
                      } else {
                        resolve(res);
                      }
                    });
                    resolve(imageEntry);
                  }
                })
                console.log(url);
                //console.log("URLs : ", res);
                resolve(res);
              }
            });
          });
      }

      deleteByImageURL(url){
        return new Promise((resolve, reject) => {
          mysqlConn.query("DELETE FROM listing_image_mapping WHERE imageURL = ?", url, function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                resolve(res);
              }
            });
      });
      }
};
