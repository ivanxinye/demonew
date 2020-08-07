var express = require('express');
var router = express.Router();
var handler = require('./dbhandler.js');

router.get('/showAllCards', function(req, res, next) {

    const get = data => {
      if(data.length===0){
          res.end('{"err":"Sorry, you donot have a card!"}');
      }else{
          var str = JSON.stringify(data)
          res.end(str);
      }
      
    }
    handler['get'](get);  
});

router.post('/updateCard', function(req,res,next) {

    handler['update'](req,req.body.id,function(){         
          res.end('{"success":"true"}');
    });
  })

module.exports = router;