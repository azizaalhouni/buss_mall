'use strict';
var imgNameArray = [];
// var productImgName = ['bag','banana','chair','boots','pen','bathroom','breakfast','bubblegum',
// 'cthulhu' , 'dog-duck','dragon' , 'pet-sweep' , 'scissors'];
var numberOfTimesIthasBeenClicked = 0;
var counter = 0;
function productImg(nameImg, path) {
  this.nameImg = nameImg;
  this.path = path;
  this.numberOfTimesIthasBeenClicked = numberOfTimesIthasBeenClicked;
  imgNameArray.push(this);
}

var newImg = new productImg ('bag', 'bag.jpg');
var newImg1 = new productImg ('banana', 'banana.jpg');
var newImg2 = new productImg ('chair', 'chair.jpg');
var newImg3 = new productImg('boots', 'boots.jpg');
var newImg4 = new productImg('pen','pen.jpg');
var newImg5 = new productImg ('bathroom', 'bathroom.jpg');
var newImg6 = new productImg ('breakfast', 'breakfast.jpg');
var newImg7 = new productImg ('bubblegum', 'bubblegum.jpg');
var newImg8 = new productImg('cthulhu', 'cthulhu.jpg');
var newImg9 = new productImg('dog-duck','dog-duck.jpg');
var newImg10 = new productImg ('dragon', 'dragon.jpg');
var newImg11 = new productImg ('pet-sweep', 'pet-sweep.jpg');
var newImg12 = new productImg ('scissors', 'scissors.jpg');
var newImg13 = new productImg('shark', 'shark.jpg');
var newImg14 = new productImg('sweep','sweep.png');
var newImg15 = new productImg ('tauntaun', 'tauntaun.jpg');
var newImg16 = new productImg ('unicorn', 'unicorn.jpg');
var newImg17 = new productImg ('usb', 'usb.gif');
var newImg18 = new productImg ('boots','boots.jpg');
var newImg19 = new productImg('pen','pen.jpg');
var newImg20 = new productImg('water-can','water-can.jpg');

var randomNumber = function() {
  return Math.floor(Math.random() * (19 - 0) + 0);
};
var renderPicture = function() {
  var attachPic1 = document.getElementById('img1');
  var attachPic2 = document.getElementById('img2');
  var attachPic3 = document.getElementById('img3');
  var picSelected1 = imgNameArray[randomNumber()].path;
  attachPic1.src = picSelected1;
  console.log('img1Intial',picSelected1);
  var picSelected2 = imgNameArray[randomNumber()].path;
  var picSelected3 = imgNameArray[randomNumber()].path;
  if(picSelected1 === picSelected2 )
  {
    while(picSelected1 === picSelected2) {
      picSelected2 = imgNameArray[randomNumber()].path;
    }
  } else {
    if(picSelected1 === picSelected3) {
      while(picSelected1 === picSelected3)
        picSelected3 = imgNameArray[randomNumber()].path;
    }
  }
  if(picSelected2 === picSelected3) {
    while(picSelected2 === picSelected3) {
      picSelected3 = imgNameArray[randomNumber()].path;
    }
  }
  console.log('img2  ',picSelected2);
  console.log('img3  ', picSelected3);
  attachPic2.src = picSelected2;
  attachPic3.src = picSelected3;
};
renderPicture();

//img 1
var renderPicture1 = function() {
  var attachPic1 = document.getElementById('img1');
  var attachPic2 = document.getElementById('img2');
  var attachPic3 = document.getElementById('img3');
  console.log(attachPic1);
  imgNameArray[m].numberOfTimesIthasBeenClicked ++;
  console.log(imgNameArray[m].nameImg,imgNameArray[m].numberOfTimesIthasBeenClicked);

  var imgOneCounter = randomNumber();
  console.log('random Number', imgOneCounter);
  picSelected1 = imgNameArray[imgOneCounter].path;
  // imgNameArray[imgOneCounter].numberOfTimesIthasBeenClicked ++;
  // console.log(imgNameArray[imgOneCounter].nameImg,imgNameArray[imgOneCounter].numberOfTimesIthasBeenClicked);
  attachPic1.src = picSelected1;
  console.log('img1',picSelected1);
  var picSelected2 = imgNameArray[randomNumber()].path;
  var picSelected3 = imgNameArray[randomNumber()].path;
  if(picSelected1 === picSelected2 )
  {
    while(picSelected1 === picSelected2) {
      picSelected2 = imgNameArray[randomNumber()].path;
    }
  } else {
    if(picSelected1 === picSelected3) {
      while(picSelected1 === picSelected3)
        picSelected3 = imgNameArray[randomNumber()].path;
    }
  }
  if(picSelected2 === picSelected3) {
    while(picSelected2 === picSelected3) {
      picSelected3 = imgNameArray[randomNumber()].path;
    }
  }
//   console.log('img2',picSelected2);
//   console.log('img3', picSelected3);
//   attachPic2.src = picSelected2;
//   attachPic3.src = picSelected3;
};
//img 2
var renderPicture2 = function() {
  var m = 0;
  console.log('img2Intial',picSelected2);
  while( m < imgNameArray.length) {
    if(imgNameArray[m].path === picSelected2) {
      imgNameArray[m].numberOfTimesIthasBeenClicked ++;
      console.log(imgNameArray[m].nameImg,imgNameArray[m].numberOfTimesIthasBeenClicked);
    }
    m++;
  }
  var attachPic1 = document.getElementById('img1');
  var attachPic2 = document.getElementById('img2');
  var attachPic3 = document.getElementById('img3');
  console.log('attachPic2',attachPic2);
  var imgOneCounter2 = randomNumber();
  picSelected2 = imgNameArray[imgOneCounter2].path;
  attachPic2.src = picSelected2;
  console.log('img2',picSelected2);
  var picSelected1 = imgNameArray[randomNumber()].path;
  var picSelected3 = imgNameArray[randomNumber()].path;
  if(picSelected2 === picSelected1 )
  {
    while(picSelected2 === picSelected1) {
      picSelected1 = imgNameArray[randomNumber()].path;
    }
  } else {
    if(picSelected2 === picSelected3) {
      while(picSelected2 === picSelected3)
        picSelected3 = imgNameArray[randomNumber()].path;
    }
  }
  if(picSelected1 === picSelected3) {
    while(picSelected1 === picSelected3) {
      picSelected3 = imgNameArray[randomNumber()].path;
    }
  }
  console.log('img1',picSelected1);
  console.log('img3', picSelected3);
  attachPic1.src = picSelected1;
  attachPic3.src = picSelected3;
};
var i = 0;
document.getElementById('img1').addEventListener('click',function(){
  if ( i < 25) {
    renderPicture1();
    i++;
  } else {
    alert('game over');
  }
});
document.getElementById('img2').addEventListener('click',function(){
  if( i < 25 ){
    renderPicture2();
    i++;
  } else {
    alert('game over');
  }
});
document.getElementById('img3').addEventListener('click',function(){
  if( i < 25 ){
    renderPicture3();
    i++;
  } else {
    alert('game over');
  }
});
