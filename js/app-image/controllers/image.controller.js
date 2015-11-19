let ImageController = function(ImageService) {
  
  let vm = this;
  vm.images = [];
  vm.title = "Bleach";


  getImages();

  function getImages() {
    ImageService.getImages().then( (res) => {
      console.log(res);
      vm.images = res.data.results;
    })
  }
  

};

ImageController.$inject = ['ImageService'];

export default ImageController;