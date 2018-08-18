angular.module('video-player')
  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    bindings: {
      videos: '<',
      onClick: '<'
    },
    controller: function() {
    // this.onClick = function (index) {
    //   console.log(index, ' clicked video!');
    //   return {};
    // };
    }
  });
