"use strict"
var images = [
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_02.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_03.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_04.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_05.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_06.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_07.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_08.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_09.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_10.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_11.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_12.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_13.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_14.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_15.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_16.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_17.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_18.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_19.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_20.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_21.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_22.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_23.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_24.jpg',
  'http://barrychampion.com/prototypes/dd/360/images/sm/640511_01.jpg'
]

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var imageSet = [],
    image = '',
    loaded = 0,
    currentFrame = 0
    rotationInterval,
    startClick,
    clicked = false,
    totalFrames = images.length

loadImages()
// this function loads all received images to new imageSet
function loadImages() {
    image = new Image()
    image.src = images[loaded]
    image.onload = function() {
      loaded++
      if (loaded === totalFrames) {
        start360()
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

// after Loading display imageset in full 360 rotation
function start360() {
  update360(0)
  rotationInterval = setInterval(() => {
    if (currentFrame === totalFrames - 1) {
      clearInterval(rotationInterval)
    }
    update360(1)
  }, 25)
}

// if direction is -1 rotate clockwise, if direction is 1 rotate counter-clockwise
function update360(dir) {
  currentFrame += dir
  if (currentFrame < 0) {
    currentFrame = totalFrames - 1
  } else if (currentFrame > totalFrames - 1) {
    currentFrame = 0
  }
  drawImages()
}

// catches mouse events and calls necessary functions
var mousePos, lastPos = mousePos
canvas.addEventListener("mousedown", function (e) {
  clicked = true
  lastPos = getMousePos(canvas, e)
}, false)

canvas.addEventListener("mousemove", function(e) {
  mousePos = getMousePos(canvas, e)
  mouseMoved(mousePos - lastPos)
}, false)

canvas.addEventListener("mouseup", function(e) {
  clicked = false
})

// gets move movement position
function getMousePos(canvasDom, mouseEvent) {
  let rect = canvasDom.getBoundingClientRect()
  return mouseEvent.clientX - rect.left
}

// handles the scroll effect of the image viewer
function mouseMoved(curr) {
  if (clicked === true) {
    // console.log(event.clientX)
    let currentPos = curr
    let absolute = Math.abs(currentPos)
    if (absolute > 5) {
      update360(currentPos / absolute)
      // console.log('maths', currentPos / absolute)
      currentPos = mousePos
      // console.log('curr', currentPos)
    }
  }
}