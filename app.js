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
//var counterImg1 = randomNumber();
//var counterImg2 = randomNumber();
//var counterImg3 = randomNumber();

//when the app loading
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
  // if(i === 0) {
  //   imgNameArray[counterImg1].numberOfTimesIthasBeenClicked ++;
  //   console.log(imgNameArray[counterImg1].nameImg, imgNameArray[counterImg1].numberOfTimesIthasBeenClicked ++);
  // }
  var attachPic1 = document.getElementById('img1');
  var attachPic2 = document.getElementById('img2');
  var attachPic3 = document.getElementById('img3');
  var imgOneCounter1 = randomNumber();
  var picSelected1 = imgNameArray[imgOneCounter1].path;
  imgNameArray[imgOneCounter1].numberOfTimesIthasBeenClicked ++;
  console.log(imgNameArray[imgOneCounter1].nameImg,imgNameArray[imgOneCounter1].numberOfTimesIthasBeenClicked);
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
  console.log('img2',picSelected1);
  console.log('img3', picSelected3);
  attachPic2.src = picSelected2;
  attachPic3.src = picSelected3;
};
  //img 2
var renderPicture2 = function() {
  var attachPic1 = document.getElementById('img1');
  var attachPic2 = document.getElementById('img2');
  var attachPic3 = document.getElementById('img3');
  var imgOneCounter2 = randomNumber();
  imgNameArray[imgOneCounter2].numberOfTimesIthasBeenClicked ++;
  console.log(imgNameArray[imgOneCounter2].nameImg,imgNameArray[imgOneCounter2].numberOfTimesIthasBeenClicked);
  var picSelected2 = imgNameArray[imgOneCounter2].path;
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
//img 3
var renderPicture3 = function() {
  var attachPic1 = document.getElementById('img1');
  var attachPic2 = document.getElementById('img2');
  var attachPic3 = document.getElementById('img3');
  var imgOneCounter3 = randomNumber();
  imgNameArray[imgOneCounter3].numberOfTimesIthasBeenClicked ++;
  console.log(imgNameArray[imgOneCounter3].nameImg,imgNameArray[imgOneCounter3].numberOfTimesIthasBeenClicked);
  var picSelected3 = imgNameArray[imgOneCounter3].path;
  attachPic3.src = picSelected3;
  console.log('img3',picSelected3);
  var picSelected1 = imgNameArray[randomNumber()].path;
  var picSelected2 = imgNameArray[randomNumber()].path;
  if(picSelected3 === picSelected2 )
  {
    while(picSelected3 === picSelected2) {
      picSelected2 = imgNameArray[randomNumber()].path;
    }
  } else {
    if(picSelected3 === picSelected1) {
      while(picSelected3 === picSelected1)
        picSelected1 = imgNameArray[randomNumber()].path;
    }
  }
  if(picSelected2 === picSelected1) {
    while(picSelected2 === picSelected1) {
      picSelected1 = imgNameArray[randomNumber()].path;
    }
  }
  //console.log('img1',picSelected1);
  //console.log('img2', picSelected2);
  attachPic2.src = picSelected2;
  attachPic1.src = picSelected1;
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
