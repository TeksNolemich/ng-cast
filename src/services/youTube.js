angular.module('video-player')
  .service('youTube', function ($http) {
    this.search = ({ query, maxResults, key }, callBack) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          'key': key,
          'part': 'snippet',
          'q': query,
          'maxResults': maxResults,
          'videoEmbeddable': 'true',
          'type': 'video'
        }
      }).then(function successCallback(response) {
        console.log("SUCCESS FOO!")
        callBack(response.data.items);
      }), function errorCallBack() {
        console.log("ERROR FOO!")
      }
    }
  });
