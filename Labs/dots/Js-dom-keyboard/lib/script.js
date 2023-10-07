console.log("We're live!");
// document.addEventListener("keydown", (event) => {
//     if (event.isComposing || event.code === 81) {
//       return;
//     }
//     console.log("hello")
//   });

// document.addEventListener('keydown', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//   }, false);

//   document.addEventListener('keyup', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//   }, false);



const inputEl = document.querySelector('input')
const lettersEl = document.querySelectorAll('.letter')

input.addEventListener('keydown',(e) => {
  const key = e.key;
  const divEl = document.querySelector (`[data-letter="${key}"]`)

  if (divEl) {
    divEl.classList.toggle("active")
  }
})

input.addEventListener('keyup',(e) => {
  const keyUp = e.key
  const divEl = document.querySelector(`[data-letter="${keyUp}"]`)
  if (divEl){
    divEl.classList.toggle("active")
  }

})

// document.addEventListener('input', (e)){

//   for (){

//   }
// }


//   document.addEventListener('keydown', (event) => {
//     let name = event.key;
//     let code = event.code;
//     console.log("keydown")
//     if (code === "KeyQ"){
//         let element = document.querySelector('[data-letter="q"]');
//         return element.className="active";
//     }
//   })

//  document.addEventListener('keyup', (event) => {
//     let name = event.key;
//     let code = event.code;
//     if (code === "KeyQ"){
//         let element = document.querySelector('[data-letter="q"]');
//         return element.style.color="black";
//     }
//   })
