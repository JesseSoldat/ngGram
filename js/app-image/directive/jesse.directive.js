let jesseImage = function($state, ImageService) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '=image'
    },
    template: `
      <div class="imageWrapper">
        <h5>{{ image.Nihongo}} {{ image.firstname}}{{ image.lastname}}</h5>
        <img ng-src="{{ image.url2 }}">
      </div>
      
     `,
     link: function(scope, element, attrs) {
      
     }   
  }
  

};

jesseImage.$inject = ['$state', 'ImageService'];

export default jesseImage;