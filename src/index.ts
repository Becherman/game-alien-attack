import '../styles.css'

/**
 *
 */
const getRandomPosition = () => Math.floor(Math.random() * 200)

document.addEventListener('DOMContentLoaded', function () {
  /**
   * Defining game variables
   */
  let alienX = 0
  let alienY = 0
  const totalShots = 5
  let remainingShots = 5
  const shipWidth = 25
  const shipHeight = 25
  let isWon = false

  /**
   * Getting elements
   */
  const displayElem = document.getElementById('display')
  const alienElem = document.getElementById('alien')
  const explosionElem = document.getElementById('explosion')
  const shipElem = document.getElementById('ship')
  const missileElem = document.getElementById('missile')
  const xCoordsElem = document.getElementById('xCoords') as HTMLInputElement
  const yCoordsElem = document.getElementById('yCoords') as HTMLInputElement
  const shotElem = document.getElementById('shot')
  const shotsNumberElem = document.getElementById('shotsNumber')
  const remainingsNumberElem = document.getElementById('remainingsNumber')

  /**
   * Audio elements
   */
  const levelAudio = new Audio('../assets/main.ogg')
  levelAudio.loop = true
  levelAudio.autoplay = true

  const missileAudio = new Audio('../assets/missile.ogg')
  const explosionAudio = new Audio('../assets/explosion.ogg')

  if (!alienElem) return
  if (!shotsNumberElem) return
  if (!remainingsNumberElem) return
  if (!shipElem) return
  if (!explosionElem) return

  shotsNumberElem.innerHTML = String(totalShots)
  remainingsNumberElem.innerHTML = String(remainingShots)

  alienElem.style.top = String(alienY)
  alienElem.style.left = String(alienX)

  const initializeGameObjects = () => {
    alienX = getRandomPosition()
    alienY = 0
    alienElem.style.top = `${alienY}px`
    alienElem.style.left = `${alienX}px`

    explosionElem.style.display = 'none'
    alienElem.style.display = 'block'

    xCoordsElem.value = '0'
    yCoordsElem.value = '0'

    shipElem.style.left = '100px'

    remainingShots = totalShots
    remainingsNumberElem.innerHTML = String(remainingShots)
  }

  const launchMissile = (x: number) => {
    if (!missileElem || !displayElem) return

    missileAudio.play()
    
    missileElem.style.opacity = '1'
    missileElem.style.left = `${x + shipWidth / 2}px`
    missileElem.style.top = `${0}px`
  }

  const moveGame = () => {
    if (
      !shipElem ||
      !missileElem ||
      !explosionElem ||
      !alienElem ||
      !displayElem ||
      !remainingsNumberElem
    ) {
      return
    }

    const { height: displayHeight } = displayElem?.getBoundingClientRect()

    missileElem.style.opacity = '0'
    missileElem.style.top = `${displayHeight - shipHeight}px`

    if (isWon) {
      explosionAudio.play()
      levelAudio.pause();
      explosionElem.style.display = 'block'
      explosionElem.style.left = `${alienX}`
      explosionElem.style.top = `${alienY}`
      alienElem.style.display = 'none'

      setTimeout(() => {
        alert('You won!')
        initializeGameObjects()
      }, 500)
    } else {      
      remainingShots = --remainingShots
      remainingsNumberElem.innerHTML = String(remainingShots)

      alienY = alienY + 30
      alienElem.style.top = `${alienY}px`

      if (remainingShots === 0) {
        setTimeout(() => {
          alert('You lose!')
          initializeGameObjects()
        }, 500)
      }
    }
  }

  function alienPositionIsGuessed(x: number, y: number): boolean {
    if (!alienElem) return false

    const { width: alienWidth, height: alienHeight } =
      alienElem.getBoundingClientRect()
    const xIsGuessed = x >= alienX && x <= alienX + alienWidth
    const yIsGuessed = y >= alienY && y <= alienY + alienHeight

    return xIsGuessed && yIsGuessed
  }

  function fireListener(event: MouseEvent | KeyboardEvent) {
    if (event.type === 'keypress' && event.which !== 13) {
      return
    }

    if (!shipElem || !missileElem) {
      return
    }

    levelAudio.play()
    
    const x = parseInt(xCoordsElem.value, 10)
    const y = parseInt(yCoordsElem.value, 10)

    shipElem.style.left = `${x}px`

    if (alienPositionIsGuessed(x, y)) {
      isWon = true
    } else {
      isWon = false
    }

    setTimeout(() => launchMissile(x), 200)
    setTimeout(moveGame, 900)
  }

  shotElem?.addEventListener('click', fireListener)
  document.addEventListener('keypress', fireListener)
})
