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
var newImg18 = new productImg ('wine-glass','wine-glass.jpg');
var newImg19 = new productImg('water','water.jpg');

var randomNumber = function() {
  return Math.floor(Math.random() * imgNameArray.length);
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
  console.log('views',imgNameArray[one].nameImg,imgNameArray[one].views);
  attachPic2.src = imgNameArray[two].path;
  imgNameArray[two].views ++;
  console.log('views',imgNameArray[two].nameImg,imgNameArray[two].views);
  attachPic3.src = imgNameArray[three].path;
  imgNameArray[three].views ++;
  console.log('views',imgNameArray[three].nameImg,imgNameArray[three].views);
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
    //Local Storage
  }
  return clicks;
};
var viewsCounter = function() {
  var views = [];
  for ( var a = 0 ; a < imgNameArray.length ; a ++)
  {
    views[a] = imgNameArray[a].views;
    console.log('view',views[a]);
  }
  return views;
};
// set local storage
var setingLocalStorage = function() {
  var nameArray = labelsArray();
  console.log(nameArray);
  localStorage.setItem('clicks', JSON.stringify(nameArray));
};
var setingDataLocalStorage = function() {
  var dataArray = dataCounter();
  console.log(dataArray);
  localStorage.setItem('numberOfClicks',JSON.stringify(dataArray));
};
var settingViewsLocalStorage = function() {
  var viewsArray = viewsCounter();
  console.log('views Array',viewsArray);
  localStorage.setItem('numberOfViews',JSON.stringify(viewsArray));
};

var gettingLocalStorage = function() {
  var localData = JSON.parse(localStorage.getItem('numberOfClicks'));
  console.log(localData);
};
var calculateThePercentage = function() {
  var percentage = [];
  for (var j = 0 ; j < imgNameArray.length ; j ++) {
    var k = parseFloat(imgNameArray[j].numberOfTimesIthasBeenClicked / imgNameArray[j].views);
    percentage[j] = (k * 100).toFixed(2);
    if(imgNameArray[j].views === 0) {
      percentage[j] == 0;
    }}
  return percentage;
};
var gettingChartArray = function() {
  var ctx = document.getElementById('canvasPlace2');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsArray(),
      datasets: [{
        label: '# of views',
        //data: dataCounter(),
        data : viewsCounter(),
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
      }, {
        label: '# of clicks',
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
var tableDrown = document.getElementById('drowTablePercentage');
var tableHeader = ['Item', 'Views','Clicks','% of Clicks when viewd','Recommended'];
var drowTable = function() {
  var trEl = document.createElement('tr');
  for(var m = 0 ; m < tableHeader.length ; m++ ) {
    var thEl = document.createElement('th');
    thEl.textContent = tableHeader[m];
    trEl.appendChild(thEl);
  }
  tableDrown.appendChild(trEl);
  var tablePercentage = [];
  tablePercentage = calculateThePercentage();
  for(var l = 0 ; l < imgNameArray.length ; l ++)
  {
    var trEl1 = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = imgNameArray[l].nameImg;
    trEl1.appendChild(tdEl);
    var tdEl1 = document.createElement('td');
    tdEl1.textContent = imgNameArray[l].views;
    trEl1.appendChild(tdEl1);
    var tdEl2 = document.createElement('td');
    tdEl2.textContent = imgNameArray[l].numberOfTimesIthasBeenClicked;
    trEl1.appendChild(tdEl2);
    var tdEl3 = document.createElement('td');
    tdEl3.textContent = tablePercentage[l];
    trEl1.appendChild(tdEl3);
    var tdEl4 = document.createElement('td');
    if(tablePercentage[l] < 20 ) {
      tdEl4.textContent = 'No';
    } else {
      tdEl4.textContent = 'yes';
    }
    trEl1.appendChild(tdEl4);
    tableDrown.appendChild(trEl1);
  }
};
function hideChart(){
  document.getElementById('canvasPlace').hidden = true;
}
//Clicks********************************************************
var i = 0;
document.getElementById('img1').addEventListener('click',function(){
  if ( i < 25) {
    var pictureClicked = document.getElementById('img1');
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
    setingDataLocalStorage();
    setingLocalStorage();
    settingViewsLocalStorage();
    i++;
  } else {
    document.getElementById ('drowChart').style.visibility = 'visible';
    document.getElementById('drowTable').style.visibility = 'visible';
    document.getElementById('container').style.display = 'none';
    document.getElementById('Container1').style.display = 'none';
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
      if(splitPhotoPath[splitPhotoPath.length - 1] === imgNameArray[j].path) {
        imgNameArray[j].numberOfTimesIthasBeenClicked ++;
        console.log('numberofClicks',imgNameArray[j].path,imgNameArray[j].numberOfTimesIthasBeenClicked);
      }
    }
    console.log(photoPath);
    setingDataLocalStorage();
    setingLocalStorage();
    settingViewsLocalStorage();
    renderPicture();
    i++;
  } else {
    document.getElementById ('drowChart').style.visibility = 'visible';
    document.getElementById('drowTable').style.visibility = 'visible';
    document.getElementById('container').style.display = 'none';
    document.getElementById('Container1').style.display = 'none';
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
    settingViewsLocalStorage();
    setingDataLocalStorage();
    setingLocalStorage();
    renderPicture();
    i++;
  } else {
    document.getElementById ('drowChart').style.visibility = 'visible';
    document.getElementById('drowTable').style.visibility = 'visible';
    document.getElementById('container').style.display = 'none';
    document.getElementById('Container1').style.display = 'none';
  }
});
document.getElementById('drowChart').addEventListener('click', function(){
  gettingLocalStorage();
  gettingChartArray();
});
document.getElementById('drowTable').addEventListener('click', function() {
  drowTable();
});
