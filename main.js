import header from './components/header'
import renderCards from './components/card'
import {filter} from './api/setFilter'
import getData from './api/getData'

document.querySelector('header').innerHTML= header()


const searchInput = document.querySelector('#search-recipe')
 
searchInput.addEventListener('input',function(){
    const inputValue = searchInput.value
    filter.inputFilter = inputValue.length>2 && inputValue.toLowerCase()
    getData()
    init()
})



function init(){
    document.querySelector('section').innerHTML= renderCards()
}

init()
