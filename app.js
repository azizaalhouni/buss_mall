'use strict';
var imgNameArray = [];
function productImg(nameImg, path) {
  this.nameImg = nameImg;
  this.path = path;
  this.numberOfTimesIthasBeenClicked = 0 ;
  this.views = 0;
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
  var one = randomNumber();
  var two = randomNumber();
  var three = randomNumber();
  if(one === two ) {
    while(one === two) {
      two = randomNumber();
    }
  }
  if(one === three || two === three) {
    while(one === three || two === three) {
      three = randomNumber();
    }
  }
  attachPic1.src = imgNameArray[one].path;
  imgNameArray[one].views ++;
  //console.log('views',imgNameArray[one].nameImg,imgNameArray[one].views);
  attachPic2.src = imgNameArray[two].path;
  imgNameArray[two].views ++;
  attachPic3.src = imgNameArray[three].path;
  imgNameArray[three].views ++;
};
renderPicture();
var labelsArray = function() {
  var title = [];
  for( var a = 0 ; a < imgNameArray.length ; a ++) {
    title[a] = imgNameArray[a].nameImg;
  }
  return title;
};
var dataCounter = function() {
  var clicks = [];
  for( var a = 0 ; a < imgNameArray.length ; a++ ) {
    clicks[a] = imgNameArray[a].numberOfTimesIthasBeenClicked;
  }
  return clicks;
};
var updateChartArray = function() {
  var ctx = document.getElementById('canvasPlace');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsArray(),
      datasets: [{
        label: '# of Votes',
        data: dataCounter(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
};
var i = 0;
document.getElementById('img1').addEventListener('click',function(){
  if ( i < 25) {
    var pictureClicked = document.getElementById('img1');
    var photoPath = pictureClicked.src;
    var splitPhotoPath = photoPath.split('/');
    splitPhotoPath[splitPhotoPath.length - 1];
    //console.log('split',splitPhotoPath[splitPhotoPath.length - 1]);
    for(var j = 0 ; j < imgNameArray.length ; j++)
    {
      //console.log("for loop");
      if(splitPhotoPath[splitPhotoPath.length - 1] === imgNameArray[j].path) {
        imgNameArray[j].numberOfTimesIthasBeenClicked ++;
        console.log('numberofClicks',imgNameArray[j].path,imgNameArray[j].numberOfTimesIthasBeenClicked);
      }
    }
    renderPicture();
    i++;
  } else {
    document.getElementById ('drowChart').style.visibility = 'visible';
    updateChartArray();
    alert('game over');
  }
});
document.getElementById('img2').addEventListener('click',function(){
  if( i < 25 ){
    var pictureClicked = document.getElementById('img2');
    var photoPath = pictureClicked.src;
    var splitPhotoPath = photoPath.split('/');
    splitPhotoPath[splitPhotoPath.length - 1];
    for(var j = 0 ; j < imgNameArray.length ; j++)
    {
      //console.log("for loop");
      if(splitPhotoPath[splitPhotoPath.length - 1] === imgNameArray[j].path) {
        imgNameArray[j].numberOfTimesIthasBeenClicked ++;
        console.log('numberofClicks',imgNameArray[j].path,imgNameArray[j].numberOfTimesIthasBeenClicked);
      }
    }
    console.log(photoPath);
    renderPicture();
    i++;
  } else {
    document.getElementById ('drowChart').style.visibility = 'visible';
    updateChartArray();
    alert('game over');
  }
});
document.getElementById('img3').addEventListener('click',function(){
  if( i < 25 ){
    var pictureClicked = document.getElementById('img3');
    var photoPath = pictureClicked.src;
    var splitPhotoPath = photoPath.split('/');
    splitPhotoPath[splitPhotoPath.length - 1];
    for(var j = 0 ; j < imgNameArray.length ; j++)
    {
      if(splitPhotoPath[splitPhotoPath.length - 1] === imgNameArray[j].path) {
        imgNameArray[j].numberOfTimesIthasBeenClicked ++;
        console.log('numberofClicks',imgNameArray[j].path,imgNameArray[j].numberOfTimesIthasBeenClicked);
      }
    }
    renderPicture();
    i++;
  } else {
    document.getElementById ('drowChart').style.visibility = 'visible';
    updateChartArray();
    alert('game over');
  }
});
