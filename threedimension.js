"use strict"
var images = [
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_02.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_03.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_04.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_05.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_06.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_07.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_08.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_09.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_10.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_11.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_12.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_13.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_14.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_15.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_16.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_17.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_18.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_19.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_20.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_21.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_22.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_23.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_24.jpg",
  "http://barrychampion.com/prototypes/dd/360/images/sm/640511_01.jpg"
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0001.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0002.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0003.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0004.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0005.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0006.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0007.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0008.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0009.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0010.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0011.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0012.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0013.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0014.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0015.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0016.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0017.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0018.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0019.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0020.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0021.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0022.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0023.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0024.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0025.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0026.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0027.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0028.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0029.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0030.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0031.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0032.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0033.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0034.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0035.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0036.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0037.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0038.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0039.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0040.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0041.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0042.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0043.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0044.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0045.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0046.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0046.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0048.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0049.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0050.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0051.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0052.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0053.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0054.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0055.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0056.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0057.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0058.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0059.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0060.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0061.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0062.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0063.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0064.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0065.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0066.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0067.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0068.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0069.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0070.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0071.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0072.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0073.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0074.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0075.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0076.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0077.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0078.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0079.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0080.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0081.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0082.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0083.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0084.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0085.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0086.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0087.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0088.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0089.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0090.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0091.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0092.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0093.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0094.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0095.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0096.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0097.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0098.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0099.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0100.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0101.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0102.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0103.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0104.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0105.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0106.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0107.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0108.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0109.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0110.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0111.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0112.png',
  // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0113.png',
  // // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0114.png',
  // // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0115.png',
  // // 'C:/Users/jacob.adams/Documents/imagesets/out/test_lg_0116.png'
]

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var imageSet = [],
    loaded = 0,
    currentFrame = 0,
    clicked = false,
    totalFrames = images.length,
    oldDate,
    oldTime,
    originalPosition
const division = 360 / totalFrames
loadImages()
// loads all received images to new imageSet
function loadImages() {
    let image = new Image()
    image.src = images[loaded]
    image.onload = function() {
      loaded++
      if (loaded === totalFrames) {
        // start360()
      } else {
        loadImages()
      }
    }
    imageSet[loaded] = image.src
}

// draws images on canvas
function drawImages() {
  let img = new Image()
  img.onload = function() {
    ctx.drawImage(img, 0, 0)
  }
  img.src = imageSet[currentFrame]
}

// onload do a twirl for everybody
function start360() {
  update360(0)
  let rotationInterval = setInterval(() => {
    if (currentFrame === totalFrames - 1) {
      clearInterval(rotationInterval)
    }
    variableScrollSpeed(1)
  }, 15)
}
// if direction is -1 rotate clockwise, if direction is 1 rotate counter-clockwise

// let time
// if (speed >= 200) {
//   time = 100
// } else if (speed >= 100) {
//   time = 150
// } else if (speed >= 50) {
//   time = 300
// } else {
//   time = 400
// }

var int = 0
var incre = 0.2
var speedInterval
function update360(dir, speed) {
  let normalSpeed = division / 2
  let halfSpeed = division / 6
  let quarterSpeed = division / 10
  if (speed > 500) {
    int += normalSpeed
  } else if (speed < 500) {
    int += halfSpeed
  } else if (speed < 300) {
    int += quarterSpeed
  }
  if (int >= 360) {
    int = 0
  }
  variableScrollSpeed(dir, int)
}

// var int = 0.00
// var incre = 0.5

// variable speed function!!!!!!
function variableScrollSpeed (dir, int) {
  let math
  if (dir < 0) {
    let newMath
    let newInt = int * 2
    int -= newInt
    math = Math.round(int / division)
    console.log('old', math)
    // currentFrame = math
  }
  if (dir > 0) {
    math = Math.round(int / division)
    currentFrame = math
  }
  // currentFrame += dir
  if (currentFrame < 0) {
    currentFrame = totalFrames - 1
  } else if (currentFrame > totalFrames - 1) {
    currentFrame = 0
  }
  drawImages()
}

// catches mouse events and calls necessary functions
canvas.addEventListener("mousedown", function (e) {
  clicked = true
  initPositionTime(e)
}, false)

canvas.addEventListener("mousemove", function (e) {
  getSpeed(e)
}, false)

canvas.addEventListener("mouseup", function(e) {  
  clicked = false
})


function initPositionTime(e) {
  oldDate = new Date()
  oldTime = oldDate.getTime()
  originalPosition = event.clientX
}

var tracker = Math.sign(0)
function getSpeed(e) {
  if(clicked === true) {
    let newDate = new Date()
    let speed
    let currTime
    let difference
    let scrollPosition
    var distanceCovered
    // if mouse direction changes; reset time and original position to keep accurate speed tracking.
    if (Math.sign(event.movementX) !== tracker) {
      oldDate = new Date()
      oldTime = oldDate.getTime()
      originalPosition = event.clientX
    }
    /**
    * HandleMouse()
    * handles getting speed:
    * current time - begin time = difference
    * current mouse position - original position = distance
    * distance / difference * 1000 = distance traveled per second.
    */
    function handleMouse (e) {
      currTime = newDate.getTime()
      scrollPosition = event.clientX
      difference = currTime - oldTime
      distanceCovered = (scrollPosition - originalPosition)
      speed = (distanceCovered / difference) * 1000
      speed = Math.abs(Math.round(speed))
      if (Number.isNaN(speed)) {
        speed = 0
      }
      // console.log('speed', speed)
    }
    let interval = setInterval(handleMouse(e), 50)
    tracker = Math.sign(event.movementX)
    
    clearInterval(interval)
    update360(tracker, speed)
  }
}
// function handleSpeed(speed) {
//   console.log('being called')
//   let timer
//   if (speed > 100) {
//     timer = 10
//   } else if ( speed < 100 ) {
//     timer = 500
//   }
//   console.log(timer)
//   // setInterval(update360(tracker), timer)
// }

// console.log(getspeed())
// handles the scroll effect of the image viewer
function mouseMoved() {
  if (clicked === true) {    
    let tracker = event.movementX
    let direction
    if (tracker > 0) {
      direction = 1
      update360(direction)
    } else if (tracker < 0) {
      direction = -1
      update360(direction)
    }
  }
}