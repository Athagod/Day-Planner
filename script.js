var saveBtn = document.querySelector("#saveBtn")
var msgDiv = document.querySelector("#text")

saveBtn.addEventListener("click")
 console.log(saveBtn)


 var notes = {

    text: msgDiv.value
 }

localStorage.setItem("notes", notes)
