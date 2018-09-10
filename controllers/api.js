const { promisify } = require('util');
const request = require('request');
const yelp = require('yelp-fusion');


/**
 * GET /api
 * List of API examples.
 */
exports.index = (req, res) => {
  return res.render('api/index', {
      title: 'API: Integration with Yelp',
      context: 'api'
    });

};

/**
*
*
*/
exports.doYelpSearch = async (req, res, next) => {

  // Place holder for Yelp Fusion's API Key. Grab them
  // from https://www.yelp.com/developers/v3/manage_app
  const apiKey = 'qPxl-79zfo6oUXkhz4tFKNU_8WcSxv7ntzNtYSEnhGFDHXktdVWvPwzMedOmrcGLTHsHjWMroaBzVq919asiZ2bOOzDeTQmv8H-8Zd2bsiZJEm0jBrS6IIaItp_iWHYx';
  
  var sampleData = [];

  for(var i = 0; i < 20; i++){
    sampleData.push({
      name: 'Sample Store ' + i,
      phone: 'Fake Phone Number ' + i
    })
  }
   


  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(sampleData));


};
