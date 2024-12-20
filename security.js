const boxs = document.querySelectorAll("#cards")



const options = {}
const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            el.target.classList.toggle("slide", el.isIntersecting)
        })
    },
    options)
boxs.forEach(box => {
    observer.observe(box)
})




const cardss = document.querySelectorAll("#cardss")


const card = {}
const carde = new IntersectionObserver((entries) => {
        entries.forEach(elm => {
            elm.target.classList.toggle("slides", elm.isIntersecting)
        })
    },
    card)
cardss.forEach(boxs => {
    carde.observe(boxs)
})
const car = document.querySelectorAll("#car")


const cars = {}
const carss = new IntersectionObserver((entriess) => {
        entriess.forEach(elms => {
            elms.target.classList.toggle("slider", elms.isIntersecting)
        })
    },
    cars)
car.forEach(boxsr => {
    carss.observe(boxsr)
})