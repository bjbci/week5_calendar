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
console.log(momentTime)

var momentHour=moment().format('k')
console.log(momentHour)

currentDay.textContent=momentTime

// console.log(area09[0].name)//.attributes.nodeValue
// console.log(area10[0].name)
//console.log(input[0].name)

var inputs=$('input')
console.log(inputs)
console.log(inputs.val())


// allInputs=inputs.name
// console.log(allInputs)

for (let i=0; i<9;i++){
    console.log(inputAreas[i].name)
    calendarTime=inputAreas[i].name
    console.log(calendarTime)

    if (momentHour==calendarTime){
        console.log('time is now')
        inputAreas.attr("style","background-color:red")
    }else if (momentHour > calendarTime){
        console.log('time has passed')
        inputAreas.attr("style","background-color:grey")
    }else {
        console.log('the futrue is coming')
        inputAreas.attr("style","background-color:green")
    }

}

// $.each(inputs,function(){
//     console.log($(this).val())
//     allInputs=$(this).val().name
//     console.log(allInputs)
    
// })


var btn09=$('#btn09')
console.log(btn09)

// btn09.click(function(){
//     console.log('clicked',this)
//     var inputVal=$('input[name="09"]').val()
//     console.log(inputVal)
//     localStorage.setItem(0900,text09)
//     inputVal.innerHtml=localStorage.getItem(0900)
  
// })
btn09.click(function(){

    console.log('clicked',this)
    let area09Input=area09.val()
    console.log(area09)
    localStorage.setItem(0900,area09Input)
    
})
// btn09.click(function(){
//     console.log('clicked',this)
//     var text09=$('input[name="09"]').val()
//     console.log(text09)
//     localStorage.setItem(0900,text09)
    
// })

var btn10=$('#btn10')
console.log(btn10)

btn10.click(function(){

    console.log('clicked',this)
    var area10Input=area10.val()
    console.log(area09)
    localStorage.setItem(1000, area10Input)
    area10.innerHtml=localStorage.getItem(1000)
    
    
})
// btn10.click(function(){
//     console.log('clicked',this)
//     var text10=$('input[name="10"]').val()
//     // var inputVal=area10.val()
//     // console.log(inputVal)
//     // console.log(text10)
//     localStorage.setItem(1000, text10)
//     area10.innerHtml=localStorage.getItem(1000)
    
    
// })

var btn11=$('#btn11')
console.log(btn11)

btn11.click(function(){

    console.log('clicked',this)
    var area11Input=area10.val()
    console.log(area11Input)    
    localStorage.setItem(1100, area11Input)
    area11.innerHtml=localStorage.getItem(1100)
    
})

var btn12=$('#btn12')
console.log(btn12)

btn12.click(function(){

    console.log('clicked',this)
    var area12Input=area12.val()
    console.log(area12Input)
    localStorage.setItem(1200, area12Input)
    area12.innerHtml=localStorage.getItem(1200)
    
})

var btn13=$('#btn13')
console.log(btn13)

btn13.click(function(){
  
    console.log('clicked',this)
    var area13Input=area13.val()
    console.log(area13Input)
    localStorage.setItem(1300, area13Input)
    area13.innerHtml=localStorage.getItem(1300)
    
})

var btn14=$('#btn14')
console.log(btn14)

btn14.click(function(){
    
    console.log('clicked',this)
    var area14Input=area14.val()
    console.log(area14Input)
    localStorage.setItem(1400, area12Input)
    area14.innerHtml=localStorage.getItem(1400)
})

var btn15=$('#btn15')
console.log(btn15)

btn15.click(function(){
   
    console.log('clicked',this)
    var area15Input=area15.val()
    console.log(area15Input)
    localStorage.setItem(1500, area15Input)
    area15.innerHtml=localStorage.getItem(1500)
    
})

var btn16=$('#btn16')
console.log(btn16)


btn16.click(function(){
  
    console.log('clicked',this)
    var area16Input=area16.val()
    console.log(area16Input)
    localStorage.setItem(1600, area12Input)
    area16.innerHtml=localStorage.getItem(1600)
    
})

var btn17=$('#btn17')
console.log(btn17)

btn17.click(function(){
    console.log('clicked',this)
    var area17Input=area17.val()
    console.log(area17Input)
    localStorage.setItem(1700, area17Input)
    area17.innerHtml=localStorage.getItem(1700)

})
// let onPage09=area09.innerHtml.localStorage.getItem(0900)
let onPage09= localStorage.getItem(0900)
console.log(onPage09)
area09.innerHtml=onPage09
console.log(area09.innerHtml)
//??CLEAR OUT INPUTS 
//  $('input[type="text"}').val('') 
// area09.append(onPage09)


