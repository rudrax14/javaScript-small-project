function main() {
  const pictures = [
    "1",
    "2",
    "3"
  ]
  const buttons = document.querySelectorAll('.btn')
  const imgDiv = document.querySelector('.container')
  let counter = 0
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (button.classList.contains('btn-left')) {
        counter--
        if (counter < 0) {
          counter = pictures.length - 1
        }
        imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
      }
      if (button.classList.contains('btn-right')) {
        counter++
        if (counter > pictures.length - 1) {
          counter = 0
        }
        imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
      }
    })
  })
}
main()