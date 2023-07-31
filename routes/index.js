var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // Sample data for the table
  var tableData = [
    
  ];

  res.render("index", {
    title: "SIT722 DevOps Glossary",
    shortdescription:
      "Welcome to my website showing a collection of DevOps terms and their brief descriptions.",
    tableData: tableData,
  });
});

module.exports = router;
