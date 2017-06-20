module.exports = {

  getClarifaiData: (url) => {

    return new Promise((resolve, reject) => {

      // instantiate a new Clarifai app passing in your clientId and clientSecret
      var app = new Clarifai.App(
        'FVTbO2wMgN1ovmKN2td8PRPz-lT_rv3p7XCGmqTf',
        '7xSrYMq2KsDhuZ966gUH0A3ItfjBeN4MgWNLpLCw'
      );

      // predict the contents of an image by passing in a url
      app.models.predict(Clarifai.GENERAL_MODEL, url)
      .then(
        function(response) {
          resolve(response);
        },
        function(err) {
          reject(err);
        }
      )

    });
  },

  getClarifaiFoodData: (url) => {

    return new Promise((resolve, reject) => {

      // instantiate a new Clarifai app passing in your clientId and clientSecret
      var app = new Clarifai.App(
        'WR7A0Cr1AnDfdTm_dLtyBisbxlNagHYV0_EiD17M',
        'Yhatk7XLzphmwYHz-G_OQNLR8hVOHoffJBdYL8Ds'
      );

      // predict the contents of an image by passing in a url
      app.models.predict(Clarifai.GENERAL_MODEL, url)
      .then(
        function(response) {
          resolve(response);
        },
        function(err) {
          reject(err);
        }
      )

    });
  },


  // get the name of property and value of the property of the image given
  parseOneData: (imageUrl, response) => {
    var concepts = response.outputs[0].data.concepts;
    for (let i = 0; i < concepts.length; i++) {
      console.log(concepts[i].name," ", concepts[i].value);
    }
  }

};