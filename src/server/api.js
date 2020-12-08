const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
var Promise = require('promise');



function apiTest() {
  return new Promise((resolve,reject) => { 
    discovery.listEnvironments()
    .then(listEnvironmentsResponse => {
      resolve(listEnvironmentsResponse)
    })
    .catch(err => {
      console.log('error:', err);
      reject()
    })
  })
  
}

module.exports.apiTest = apiTest;