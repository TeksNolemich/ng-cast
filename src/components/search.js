angular.module('video-player')

  .component('search', {
    bindings: {
      key: '<',
      searchOnClick: '<'
    },
    templateUrl: 'src/templates/search.html',
    controller: function (youTube) {
      this.query = '';
      this.options = {
        query: this.query,
        key: this.key,
        maxResults: 5
      }
      // search(this.options, function (videos) {
      //   this.updateVideos(videos);
      // })
    }
  });
