const bodyE1 = document.querySelector("body")

bodyE1.addEventlistener("mousemove", (event)=>{
const xpos = event.offsetx
const ypos = event.offsety
const spanE1 = document.createElement("span");
spanE1.style.left = xpos + "px";
spanE1.style.top = ypos + "px";
bodyE1.appendChild(spanE1)
})