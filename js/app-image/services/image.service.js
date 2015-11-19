let ImageService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/bleach';

  this.getImages = getImages;
  this.addImage = addImage;
  this.like = like;


  //Get Images
  function getImages() {
    return $http.get(url, PARSE.CONFIG);
  }

  //Add Images
  function Image (imgObj) {
    this.Nihongo = imgObj.Nihongo;
    this.firstname = imgObj.firstname;
    this.lastname = imgObj.lastname;
    this.url2 = imgObj.url2;
  }

  function addImage(imgObj) {
    let img = new Image(imgObj);
    return $http.post(url, img, PARSE.CONFIG);
  }

  function like(obj) {
    // console.log(obj);
    // let update = obj.likes++;
    // console.log(update);
    updateLikes(obj);
    

  }
  function updateLikes (obj) {
    console.log(obj);
    obj.likes = obj.likes + 1;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  }


};

ImageService.$inject = ['$http', 'PARSE'];

export default ImageService;