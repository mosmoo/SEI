const btn = document.querySelector("button");
const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  const newCommentEl = document.createElement("li");
  const commentText = inputEl.value;
  newCommentEl.innerText = commentText;
  ulEl.append(newCommentEl);
  inputEl.value = "";
});

ulEl.addEventListener("click", handleclick) //second event is a function
function handleclick(e){
   console.log(e.target)
   e.target.style.color="blue";
   btn.removeEventListener('click', handleclick); 
}