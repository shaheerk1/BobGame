var character = document.getElementById('character')
var block = document.getElementById('block')
function jump() {
  if (character.classList != 'animate') {
    character.classList.add('animate')
  }
  setTimeout(function () {
    character.classList.remove('animate')
  }, 500)
}

var checkCrash = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  )
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  )

  if (blockLeft < 70 && blockLeft > 50 && characterTop >= 130) {
    block.style.animation = 'none'
    block.style.display = 'none'

    alert('you noob')
  }
}, 10)
