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
// addButton=document.getElementsByClassName("btn")
// console.log(addButton)
let calendarTime
let listInput

// addButton.addEventListener('click',function(event){
//     console.log(event)
// })

// practiceButton=document.getElementById('button-addon2')
// console.log(practiceButton)

// practiceButton.addEventListener('click',function(event){
//     console.log(event)
// })



var momentTime= moment().format("dddd MMM Do");
//console.log(moment())
console.log(momentTime)

var currentDay=document.getElementById("currentDay")

var currentTime = new Date();
currentTime.getHours();

console.log(currentTime)
console.log(currentDay)

currentDay.textContent=momentTime

if (currentTime==calendarTime){
    console.log('time is now')
     inputAreas.setAttribute("style","background-color:beige")
}else if (currentTime < calendarTime){
    console.log('time has passed')
    inputAreas.setAttribute("style","background-color:red")
}else if (currentTime > calendarTime){
    ('the futrue is coming')
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
//      inputAreas.styl 





btn09=document.getElementById('btn09')
console.log(btn09)

btn09.addEventListener('click',function(event){
    console.log(event)
    console.log(area09.value)
    localStorage.setItem(0900, area09.value)
    area09.innerHtml=localStorage.getItem(0900)
    console.log(area09.innerText)

})

btn10=document.getElementById('btn10')
console.log(btn10)

btn10.addEventListener('click',function(event){
    console.log(event)
    console.log(area10.value)
    area10V=area10.value
    console.log(area10V)
    localStorage.setItem(1000, area10V)
    area10V.innerHtml=localStorage.getItem(1000)
    area09.innerText=area10V

 })

btn11=document.getElementById('btn11')
console.log(btn11)

btn11.addEventListener('click',function(event){
    console.log(event)
    console.log(area11.value)
    localStorage.setItem(1100, area11.value)
    area11.innerHtml=localStorage.getItem(1100)
    console.log(area11.innerText)
})

btn12=document.getElementById('btn12')
console.log(btn12)

btn12.addEventListener('click',function(event){
    console.log(event)
    console.log(area12.value)
    localStorage.setItem(1200, area12.value)
    area12.innerHtml=localStorage.getItem(1200)
    console.log(area12.innerText)
})

btn13=document.getElementById('btn13')
console.log(btn13)

btn13.addEventListener('click',function(event){
    console.log(event)
    console.log(area13.value)
    localStorage.setItem(1300, area13.value)
    area13.innerHtml=localStorage.getItem(1300)
    console.log(area13.innerText)
})

btn14=document.getElementById('btn14')
console.log(btn14)

btn14.addEventListener('click',function(event){
    console.log(event)
    console.log(area14.value)
    localStorage.setItem(1400, area14.value)
    area14.innerHtml=localStorage.getItem(1400)
    console.log(area14.innerText)
})

btn15=document.getElementById('btn15')
console.log(btn15)

btn15.addEventListener('click',function(event){
    console.log(event)
     console.log(area15.value)
     localStorage.setItem(1500, area15.value)
     area15.innerHtml=localStorage.getItem(1500)
    console.log(area15.innerText)
})

btn16=document.getElementById('btn16')
console.log(btn16)


btn16.addEventListener('click',function(event){
    console.log(event)
    console.log(area16.value)
    localStorage.setItem(1600, area16.value)
    area16.innerHtml=localStorage.getItem(1600)
    console.log(area16.innerText)
})

btn17=document.getElementById('btn17')
console.log(btn17)

btn17.addEventListener('click',function(event){
    console.log(event)
    console.log(area17.value)
    localStorage.setItem(1700, area17.value)
    area17.innerHtml=localStorage.getItem(1700)
    console.log(area17.innerText)
})

// area10V.innerHtml=localStorage.getItem(1000)
//     area09.innerText=area10V

// function handleSubmit(event){
//     // event.preventDefault()
//     console.log(listInput)
// }

// console.log(listInput)
// let blockValue=listInput.value()
// console.log(blockValue)




//$('<h3>').text(moment).appendTo('currentDay')
//console.log(h3)

// var h3= document.createElement('h3')
// h3.textContent=momentTime
// console.log(h3)
// console.log(momentTime)
// document.body.appendChild[2](h3)
