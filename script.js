// how do I create the 9-5, text box and save box //
// how do get the current hour 
// how do i determin the current future and past hours 
// how do I save my input text 
function loadPage() {
   var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

   var currentHour = moment().hour()

   var color = "green"


   for (let index = 0; index < workHours.length; index++) {
      var inputGroup = $("<div class='input-group'>")

      var dayTime = " am"
      if ((workHours[index] +12) >= 12) {
         dayTime = " pm"
      }
      var label = $("<label>").text(workHours[index] + dayTime)

      console.log((workHours[index] + 12))

      if (workHours[index] >= 1 && workHours[index] <= 5) { //future
         color = "green"
      }
      else if (currentHour > workHours[index]) {  //past
         color = "grey"
      }

      else if (currentHour === workHours[index]  ) { //current
         color = "red"
      }
     else{
      color = "green"
     }

      var input = $(`<input type='text' style ='background-color:${color}  ' >`)

      var button = $("<button id='saveBtn'>").text("Save")

      inputGroup.append(label, input, button)

      $("#display").append(inputGroup)
   }
}

loadPage()

// var saveBtn = document.querySelector("#saveBtn")
// var msgDiv = document.querySelector("#text")

// saveBtn.addEventListener("click")
//  console.log(saveBtn)


//  var notes = {

//     text: msgDiv.value
//  }

// localStorage.setItem("notes", notes)
