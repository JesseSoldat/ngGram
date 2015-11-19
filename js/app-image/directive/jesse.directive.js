let jesseImage = function($state, ImageService) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '=image'
    },
    template: `
      <div class="imageWrapper">
        
        <h5>{{ image.Nihongo}} {{ image.firstname}} {{ image.lastname}}</h5>
        <img ng-src="{{ image.url2 }}">
        <button>Like <span>{{image.likes}}</button>
      </div>
      
     
      
     `,
     link: function(scope, element, attrs) {
        element.on('click', function() {
          // console.log('clicked');
          element.addClass('heart');
          ImageService.like(scope.image);
          

        });
     }   
  }
  

};

jesseImage.$inject = ['$state', 'ImageService'];

export default jesseImage;