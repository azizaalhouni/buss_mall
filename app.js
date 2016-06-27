
var imgNameArray = [];
function productImg(name, path) {
  this.name = name;
  this.path = path;
  this.randomArray = [];
  imgNameArray.push(this);
}
var newImg = new productImg ('bag', 'bag.jpg');
var newImg1 = new productImg ('banana', 'banana.jpg');
var newImg2 = new productImg ('chair', 'chair.jpg');
var newImg3 = new productImg('boots', 'boots.jpg');
var newImg4 = new productImg('pen','pen.jpg');

productImg.prototype.randomPicture = function() {
  for(var i = 0; i < imgNameArray.length; i++) {
    var randomImg = Math.floor(Math.random() * 2 ) + 1;

    // this.randomArray.push(randomImg);
    // return;
  }
};
productImg.prototype.render = function() {
  //this.name.src = imgNameArray[this.randomPicture()];
  console.log(imgNameArray[this.randomPicture]);
  var attachPic = document.getElementById('img1');
  attachPic.src = imgNameArray[this.randomPicture()];
  // if(event.target.id === 'bag') {
  //   console.log('bag');
  //   bag.src = imgNameArray[1];
  //   banana.src = 'bag.jpg';
  // }
  // if(event.target.id === 'banana') {
  //   console.log('banana');
  //   banana.src = imgNameArray[0];
  //   bag.src = 'banana.jpg';
  // }
};
document.getElementById('container').addEventListener('click', function(){
  for(var i = 0 ; i < imgNameArray.length ; i++) {
    imgNameArray[i].render();
  }
  console.log('The body also heard the click because bubblng');
});
