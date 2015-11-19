let AddImageContrller = function(ImageService) {
  
  let vm = this;
  vm.addImg = addImg;

  function addImg (imgObj) {
    ImageService.addImage(imgObj).then( (res) => {
      // console.log(res);
    })
  }

};
 AddImageContrller.$inject = ['ImageService'];

export default AddImageContrller;