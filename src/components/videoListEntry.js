angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<',
      index: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controller: function() {
      debugger;
    // this.img = this.video.snippet.thumbnails.default.url
    // console.log(this);
    }

  });
