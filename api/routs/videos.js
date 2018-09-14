module.exports = function(app){
  const axios = require('axios');

  app.get('/categories/' ,function(req, res) {
    axios.get('https://api.redtube.com/?data=redtube.Categories.getCategoriesList&output=json')
      .then(categories => {
        res.send(categories.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get('/tags/' ,function(req, res) {    
    axios.get('https://api.redtube.com/?data=redtube.Tags.getTagList&output=json')
      .then(tags => {
        res.send(tags.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get('/videos/' ,function(req, res) {    
    axios.get('https://api.redtube.com/?data=redtube.Videos.getVideoById&video_id=15485&output=json&thumbsize=all')
      .then(tags => {
        res.send(tags.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

//4858-0709
  
  




  } 