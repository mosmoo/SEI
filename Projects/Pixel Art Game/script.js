//User Selects a Color
//User clicks a box to change the color
//Take the class name from what is clicked
//Add the class name to the respective grid.

let mainColor = "#ff6961"

const colors = document.querySelectorAll('.palette')
const grids = document.getElementsByClassName('grid-item')

for (let i = 0; i < grids.length; i++){
    grids[i].addEventListener("click", onClick);
}

colors.forEach(color =>{
    color.addEventListener("click", (e) => {
        console.log(e.target.dataset)
        mainColor = e.target.dataset.color
    })
})

function onClick(e) {
    e.target.style.backgroundColor = mainColor
}

const catBtn = document.getElementById('cat')
catBtn.addEventListener('click', changeTemplate)

function changeTemplate (e){
    const grid26 = document.getElementById('grid26')
    const grid32 = document.getElementById('grid32')
    const grid45 = document.getElementById('grid45')
    const grid51 = document.getElementById('grid51')
    const grid47 = document.getElementById('grid47')
    const grid53 = document.getElementById('grid53')
    const grid48 = document.getElementById('grid48')
    const grid49 = document.getElementById('grid49')
    const grid50 = document.getElementById('grid50')
    const grid126 = document.getElementById('grid126')
    const grid133 = document.getElementById('grid133')
    const grid132 = document.getElementById('grid132')
    const grid127 = document.getElementById('grid127')
    const grid131 = document.getElementById('grid131')
    const grid67 = document.getElementById('grid67')
    const grid68 = document.getElementById('grid68')
    const grid88 = document.getElementById('grid88')
    const grid92 = document.getElementById('grid92')
    const grid72 = document.getElementById('grid72')
    const grid71 = document.getElementById('grid71')
    const grid109 = document.getElementById('grid109')
    const grid110 = document.getElementById('grid110')
    const grid65 = document.getElementById('grid65')
    const grid85 = document.getElementById('grid85')
    const grid105 = document.getElementById('grid105')
    const grid125 = document.getElementById('grid125')
    const grid73 = document.getElementById('grid73')
    const grid93 = document.getElementById('grid93')
    const grid113 = document.getElementById('grid113')
    const grid128 = document.getElementById('grid128')
    const grid129 = document.getElementById('grid129')
    const grid130 = document.getElementById('grid130')

    grid26.classList.add("topLeftAndRight");
    grid32.classList.add("topLeftAndRight");

    grid45.classList.add("topAndLeft");
    grid51.classList.add("topAndLeft");
    grid45.classList.add("topAndLeft");

    grid47.classList.add("topAndRight");
    grid53.classList.add("topAndRight");

    grid48.classList.add("bottom");
    grid49.classList.add("bottom");
    grid50.classList.add("bottom");
    grid125.classList.add("bottom");
    grid126.classList.add("bottom");
    grid133.classList.add("bottom");
    grid132.classList.add("bottom");
    grid127.classList.add("bottom");
    grid131.classList.add("bottom");
    grid67.classList.add("bottom");
    grid68.classList.add("bottom");
    grid88.classList.add("bottom");
    grid92.classList.add("bottom");
    grid72.classList.add("bottom");
    grid71.classList.add("bottom");
    grid109.classList.add("bottom");
    grid110.classList.add("bottom");
    grid128.classList.add("bottom");
    grid129.classList.add("bottom");
    grid130.classList.add("bottom");

    grid65.classList.add("left");
    grid85.classList.add("left");
    grid105.classList.add("left");
    grid125.classList.add("left");
    grid88.classList.add("left");
    grid92.classList.add("left");
    grid110.classList.add("left");

    grid73.classList.add("right");
    grid93.classList.add("right");
    grid113.classList.add("right");
    grid133.classList.add("right");
    grid88.classList.add("right");
    grid92.classList.add("right");
    
}

// const DIYbtn =document.getElementById('diy')
// catBtn.addEventListener('click', clear)

// function clear (){

//     const grid26 = document.getElementById('grid26')
//     const grid32 = document.getElementById('grid32')
//     const grid45 = document.getElementById('grid45')
//     const grid51 = document.getElementById('grid51')
//     const grid47 = document.getElementById('grid47')
//     const grid53 = document.getElementById('grid53')
//     const grid48 = document.getElementById('grid48')
//     const grid49 = document.getElementById('grid49')
//     const grid50 = document.getElementById('grid50')
//     const grid126 = document.getElementById('grid126')
//     const grid133 = document.getElementById('grid133')
//     const grid132 = document.getElementById('grid132')
//     const grid127 = document.getElementById('grid127')
//     const grid131 = document.getElementById('grid131')
//     const grid67 = document.getElementById('grid67')
//     const grid68 = document.getElementById('grid68')
//     const grid88 = document.getElementById('grid88')
//     const grid92 = document.getElementById('grid92')
//     const grid72 = document.getElementById('grid72')
//     const grid71 = document.getElementById('grid71')
//     const grid109 = document.getElementById('grid109')
//     const grid110 = document.getElementById('grid110')
//     const grid65 = document.getElementById('grid65')
//     const grid85 = document.getElementById('grid85')
//     const grid105 = document.getElementById('grid105')
//     const grid125 = document.getElementById('grid125')
//     const grid73 = document.getElementById('grid73')
//     const grid93 = document.getElementById('grid93')
//     const grid113 = document.getElementById('grid113')
//     const grid128 = document.getElementById('grid128')
//     const grid129 = document.getElementById('grid129')
//     const grid130 = document.getElementById('grid130')

//     grid26.classList.remove("topLeftAndRight");
//     grid32.classList.remove("topLeftAndRight");

//     grid45.classList.remove("topAndLeft");
//     grid51.classList.remove("topAndLeft");
//     grid45.classList.remove("topAndLeft");

//     grid47.classList.remove("topAndRight");
//     grid53.classList.remove("topAndRight");

//     grid48.classList.remove("bottom");
//     grid49.classList.remove("bottom");
//     grid50.classList.remove("bottom");
//     grid125.classList.remove("bottom");
//     grid126.classList.remove("bottom");
//     grid133.classList.remove("bottom");
//     grid132.classList.remove("bottom");
//     grid127.classList.remove("bottom");
//     grid131.classList.remove("bottom");
//     grid67.classList.remove("bottom");
//     grid68.classList.remove("bottom");
//     grid88.classList.remove("bottom");
//     grid92.classList.remove("bottom");
//     grid72.classList.remove("bottom");
//     grid71.classList.remove("bottom");
//     grid109.classList.remove("bottom");
//     grid110.classList.remove("bottom");
//     grid128.classList.remove("bottom");
//     grid129.classList.remove("bottom");
//     grid130.classList.remove("bottom");

//     grid65.classList.remove("left");
//     grid85.classList.remove("left");
//     grid105.classList.remove("left");
//     grid125.classList.remove("left");
//     grid88.classList.remove("left");
//     grid92.classList.remove("left");
//     grid110.classList.remove("left");

//     grid73.classList.remove("right");
//     grid93.classList.remove("right");
//     grid113.classList.remove("right");
//     grid133.classList.remove("right");
//     grid88.classList.remove("right");
//     grid92.classList.remove("right");

// }