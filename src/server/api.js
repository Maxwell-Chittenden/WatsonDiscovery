const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
var Promise = require('promise');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: '',
  }),
  serviceUrl: '',
});

const listCollectionsParams = {
  environmentId: '',
};

const queryParams = {
  environmentId: '',
  collectionId: '{collection_id}',
};

function getCollections() {
  return new Promise((resolve, reject) => {
    discovery.listCollections(listCollectionsParams)
      .then(listCollectionsResponse => {
        resolve(listCollectionsResponse)
      })
      .catch(err => {
        console.log('error:', err);
        reject()
      });
  })
}

function queryData(query) {
  var queryParams = {
    environmentId: '',
    collectionId: '',
    naturalLanguageQuery: query,
    highlight: 'true',
  }
  return new Promise((resolve, reject) => {
    discovery.query(queryParams)
      .then(queryResponse => {
        resolve(queryResponse.result)
      })
      .catch(err => {
        console.log('error:', err);
        reject()
      });
  })
}



module.exports.getCollections = getCollections;
module.exports.queryData = queryData;