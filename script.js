area09=document.getElementById('area09')
console.log(area09)
area10=document.getElementById('area10')
console.log(area10)
area11=document.getElementById('area11')
console.log(area11)
area12=document.getElementById('area12')
console.log(area12)
area13=document.getElementById('area13')
console.log(area13)
area14=document.getElementById('area14')
console.log(area14)
area15=document.getElementById('area15')
console.log(area15)
area16=document.getElementById('area16')
console.log(area16)
area17=document.getElementById('area17')
console.log(area17)
inputAreas=document.querySelectorAll('.form-control')
console.log(inputAreas)
addButton=document.getElementsByClassName("btn")
console.log(addButton)

var momentTime= moment().format("dddd MMM Do");
//console.log(moment())
console.log(momentTime)

var currentDay=document.getElementById("currentDay")

var currentTime = new Date();
currentTime.getHours();

console.log(currentTime)
console.log(currentDay)

currentDay.textContent=momentTime

if (currentTime==currentTime){
    // inputAreas.setAttribute(style,'background-color:red')
    inputAreas.setAttribute("style","background-color:beige")
}else if (currentTime < calendarTime){
    inputAreas.setAttribute("style","background-color:red")
}else if (currentTime > calendarTime){
    inputAreas.setAttribute("style","background-color:teal")
}
  
// }else if (currentTime >= 12 && currentTime<13){
//     inputAreas.style.backgroundColor="red"
// }else if (currentTime >= 13 && currentTime<14){
//     inputAreas.style.backgroundColor="red"
// }else if (currentTime >= 14 && currentTime<15){
//     inputAreas.style.backgroundColor="red"
// }else if (currentTime >= 15 && currentTime<16){
//     inputAreas.style.backgroundColor="red"
// }else if (currentTime >= 16 && currentTime<17){
//     inputAreas.style.backgroundColor="red"
// }else  {  
//      inputAreas.style.backgroundColor="blue"
//     }


addButton.addEventListener('click',function(event){
    console.log(event)

})


function handleSubmit(event){
    // event.preventDefault()
    console.log(listInput)
}

console.log(listInput)
let blockValue=listInput.value()
console.log(blockValue)




//$('<h3>').text(moment).appendTo('currentDay')
//console.log(h3)

// var h3= document.createElement('h3')
// h3.textContent=momentTime
// console.log(h3)
// console.log(momentTime)
// document.body.appendChild[2](h3)
