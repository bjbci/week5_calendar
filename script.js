var area09= $('#area09')
console.log(area09)
var area10=$('#area10')
console.log(area10)
var area11=$('#area11')
console.log(area11)
var area12=$('#area12')
console.log(area12)
var area13=$('#area13')
console.log(area13)
var area14=$('#area14')
console.log(area14)
var area15=$('#area15')
console.log(area15)
var area16=$('#area16')
console.log(area16)
var area17=$('#area17')
console.log(area17)
var inputAreas=$('.form-control')
console.log(inputAreas)
// addButton=document.getElementsByClassName("btn")
// console.log(addButton)
let calendarTime
let listInput



var momentTime= moment().format("dddd MMM Do");
//console.log(moment())
console.log(momentTime)

var momentHour=moment().format('k')
console.log(momentHour)



currentDay.textContent=momentTime

if (momentHour>25){
    console.log('over 25')
}else{
    console.log('under25')
}

if (momentHour==calendarTime){
    console.log('time is now')
     inputAreas.attr("style","background-color:beige")
}else if (momentHour > calendarTime){
    console.log('time has passed')
    inputAreas.attr("style","background-color:red")
}else {
    console.log('the futrue is coming')
    inputAreas.attr("style","background-color:teal")
}
  

var btn09=$('#btn09')
console.log(btn09)

btn09.click(function(){
    console.log('clicked',this)
    var text09=$('input[name="09"]').val()
    console.log(text09)
    localStorage.setItem(0900,text09)
    area09.innerHtml=localStorage.getItem(0900)
  
})

var btn10=$('#btn10')
console.log(btn10)

btn10.click(function(){
    console.log('clicked',this)
    var text10=$('input[name="10"]').val()
    console.log(text10)
    localStorage.setItem(1000, text10)
    area10.innerHtml=localStorage.getItem(1000)
   

 })

 var btn11=$('#btn11')
console.log(btn11)

btn11.click(function(){
    console.log('clicked',this)
    var text11=$('input[name="11"]').val()
    console.log(text11)
    
    localStorage.setItem(1100, text11)
    area11.innerHtml=localStorage.getItem(1100)
   
})

var btn12=$('#btn12')
console.log(btn12)

btn12.click(function(event){
    console.log('clicked',this)
    var text12=$('input[name="12"]').val()
    console.log(text12)
    localStorage.setItem(1200, text12)
    area12.innerHtml=localStorage.getItem(1200)
    
})

var btn13=$('#btn13')
console.log(btn13)

btn13.click(function(event){
    console.log('clicked',this)
    var text13=$('input[name="13"]').val()
    console.log(text13)
    localStorage.setItem(1300, text13)
    area13.innerHtml=localStorage.getItem(1300)
    
})

var btn14=$('#btn14')
console.log(btn14)

btn14.click(function(event){
    console.log('clicked',this)
    var text14=$('input[name="14"]').val()
    console.log(text14)
    localStorage.setItem(1400, text14)
    area14.innerHtml=localStorage.getItem(1400)
    
})

var btn15=$('#btn15')
console.log(btn15)

btn15.click(function(event){
    console.log('clicked',this)
    var text15=$('input[name="15"]').val()
    console.log(text15)
     localStorage.setItem(1500, text15)
     area15.innerHtml=localStorage.getItem(1500)
    
})

var btn16=$('#btn16')
console.log(btn16)


btn16.click(function(event){
    console.log('clicked',this)
    var text16=$('input[name="16"]').val()
    console.log(text16)
    localStorage.setItem(1600, text16)
    area16.innerHtml=localStorage.getItem(1600)
   
})

var btn17=$('#btn17')
console.log(btn17)

btn17.click(function(event){
    console.log('clicked',this)
    var text17=$('input[name="17"]').val()
    console.log(text17)
    localStorage.setItem(1700, text17)
    area17.innerHtml=localStorage.getItem(1700)
    console.log()
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
