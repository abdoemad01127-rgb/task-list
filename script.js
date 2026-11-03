const inp=document.getElementById("display")
const btn=document.getElementById("button")
const list=document.getElementById("list")

btn.addEventListener("click" , function(){
    switch (inp.value) {
        case "":
            break;
        default:
            let addtask=document.createElement("li")
            list.appendChild(addtask)
            addtask.textContent =inp.value;
            inp.value= "";
            break;
    }
})
