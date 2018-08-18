angular.module('video-player')

  .component('app', {
    controller: function() {
      this.selectVideo = () => {};
      this.exampleVideoData = window.exampleVideoData;
      this.onClick = function (index) {
        console.log(index, ' clicked video!');
        return {};
      };
    },
    templateUrl: 'src/templates/app.html'
  });
