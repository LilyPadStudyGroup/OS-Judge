window.addEventListener("load", function() {
  init();
});

var osName = ["Mac OS", "Windows", "Linux", "UNIX", "*BSD"];
var osIndex = 0;

var rouletteInterval;

function ssButtonAction(ssButton){
  if(ssButton.textContent == 'スタート'){
    rouletteInterval = setInterval(roulette, 100);
    ssButton.textContent = 'ストップ';
  } else if(ssButton.textContent == 'ストップ'){
    ssButton.textContent = '判定中';
    clearInterval(rouletteInterval);
    var sleepTime = 150;
    for(var i = 0; i < 20; i++){
      rouletteInterval = setTimeout(roulette, sleepTime);
      sleepTime = sleepTime + 100 * i;
    }
    setTimeout(setStart, sleepTime);
  }
}

function setStart(){
    document.getElementById("ssButton").textContent = 'スタート';
}

function roulette(){
    document.getElementById("OS").textContent = osName[osIndex];
    osIndex++;
    osIndex %= osName.length;
}

function init(){
  var ssButton = document.getElementById("ssButton");
  ssButton.onclick = function(){
    ssButtonAction(ssButton);
  };
}