angular.module('video-player')

  .component('app', {
    controller: function() {
      this.video = window.exampleVideoData[0];

      this.selectVideo = () => {};

      this.exampleVideoData = window.exampleVideoData;

      this.onClick = (index) => {
        console.log(index, ' clicked video!');
        return {};
      };
    },
    templateUrl: 'src/templates/app.html'
  });
