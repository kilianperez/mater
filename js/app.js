'use strict'

const todosTabs__li          = document.querySelectorAll('.tabs__li')
const todosTabs__contenido   = document.querySelectorAll('.tabs__contenido')

todosTabs__li.forEach( function( cadaTabLi , i ){
     cadaTabLi.addEventListener('click', ()=>{

         todosTabs__li.forEach( function( cadaTabLi , i ){
             todosTabs__li[i].classList.remove('ver')
             todosTabs__contenido[i].classList.remove('ver')
         })
        
         todosTabs__li[i].classList.add('ver')
         todosTabs__contenido[i].classList.add('ver')
     })
 })

/* 

    cuando hago click en slid__item
        desplazo en Y a TODOS los de slid__img
        desplazo en Y a TODOS los de slid__contnt

        elimino la clase ver de TODOS los slid__btn
        elimino la clase ver de TODOS los slid__img
        elimino la clase ver de TODOS los slid__item
        elimino la clase ver de TODOS los slid__contnt

        añado la clase ver a slid__btn[i]
        añado la clase ver a slid__img[i]
        añado la clase ver a slid__item[i]
        añado la clase ver a slid__contnt[i]


*/
let slid__contnt    = document.querySelectorAll('.slid__contnt')
let slid__img       = document.querySelectorAll('.slid__img')
let slid__btn       = document.querySelectorAll('.slid__btn')
let slid__item      = document.querySelectorAll('.slid__item')
let posicion = 0

let menu__hamb  = document.querySelector('.menu__hamb')
let active      = document.querySelector('.active')
let menu__vh    = document.querySelector('.menu__vh')

let menu__li    = document.querySelectorAll('.menu__li')
let menu__items     = document.querySelectorAll('.menu__items')
let menu__item     = document.querySelectorAll('.menu__item')
let menu__img   = document.querySelectorAll('.menu__img')


slid__item.forEach((item, i) => {
    item.addEventListener('click', ()=> {


        posicion = i ///


        slid__item.forEach((item, i) => {

            slid__contnt[i].classList.remove('ver')
            slid__img[i].classList.remove('ver')
            slid__btn[i].classList.remove('ver')
            slid__item[i].classList.remove('ver')
            slid__img[i].style.transform = `translateY(${ (-100) * posicion }%)`   ///  
            slid__contnt[i].style.transform = `translateY(${ (-100) * posicion }%)` /// 

        })

        
        slid__contnt[i].classList.add('ver')
        slid__img[i].classList.add('ver')
        slid__btn[i].classList.add('ver')
        slid__item[i].classList.add('ver')

        
    })
});

function pasarFoto(){
    slid__img[i].style.transform = `translateY(${ (-100) * posicion }%)`
}
posicion = 0
slid__item.forEach((item,i) => {
    item.addEventListener('click', ()=> {

    })
});

/* 

    cuando hago click en la clase menu__hamb
        añado la clase toogle a  active menu__hamb 
        añado la clase toogle a  active menu__ul 

*/


let menu__logo = document.querySelector('.menu__logo')
menu__hamb.addEventListener('click', ()=> {
    menu__hamb.classList.toggle('active')
    menu__vh.classList.toggle('active')
    menu__logo.classList.toggle('active')

})

/*

    cuando haga mouseover sobre menu__li[i]
        elimino la clase ver de TODOS los menu__items
        añado la clase ver a [i]

    cuando haga mouseover sobre menu__items[i]
        elimino la clase ver de TODOS los menu__img
        añado la clase ver a [i]

*/


menu__li.forEach((item,i) => {
    menu__li[i].addEventListener('mouseover', ()=> {
        menu__items[i].classList.add('ver')
    })
    menu__li[i].addEventListener('mouseout', ()=> {
        menu__items[i].classList.remove('ver')

    }) 
});




menu__item.forEach((item,i) => {

    menu__item[i].addEventListener('mouseover', ()=> {

        menu__img[i].classList.add('ver')

    })
    
    menu__item[i].addEventListener('mouseout', ()=> {
        menu__img[i].classList.remove('ver')

    })
    
});