angular.module('video-player')

  .component('app', {
    controller: function (youTube) {
      this.key = window.YOUTUBE_API_KEY;
      this.video = exampleVideoData[0];
      this.videos = window.exampleVideoData;

      this.selectVideo = () => { };

      this.updateVideos = (videos) => {
        this.video = videos[0];
        this.videos = videos;
      }

      this.searchOnClick = (query) => {
        youTube.search({ query: query, maxResults: 5, key: this.key },
          this.updateVideos
        )
      }

      this.onClick = (index) => {
        this.video = exampleVideoData[index]
      };



    },
    templateUrl: 'src/templates/app.html'
  });
