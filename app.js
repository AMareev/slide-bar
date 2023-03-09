const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
// const mainSlide.querySelectorAll('div')
const slidesCount = mainSlide.querySelectorAll('div').length
const height = container.clientHeight
let activeSlideIndex = 0

sidebar.style.top = `-${( slidesCount -1) * 100}vh`



upBtn.addEventListener('click', () => {
    changeSlide('up')
} )

downBtn.addEventListener('click', () => {
changeSlide('down')
} )


function changeSlide(direction) {
    if (direction === 'up') {
        console.log('up')
        activeSlideIndex++
        console.log(activeSlideIndex)
        console.log(`translateY(-${activeSlideIndex * height}px)`)
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
        console.log('!!!', activeSlideIndex)
        console.log('123', mainSlide.style.transform)
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }


    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px`
}
// mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
// mainSlide.style.transform = translateY(-${activeSlideIndex * height}px);

// mainSlide.style.transform = `translateY(-2000px)`
// console.log(`translateY(-${activeSlideIndex * 10090}px)`)

// console.log(`translateY(-3000px)`)
console.log('count', slidesCount)
// console.log('123', mainSlide.style.transform)