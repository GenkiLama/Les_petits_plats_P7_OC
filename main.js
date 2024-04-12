import header from './components/header'
import renderCards from './components/card'
import {setAppFilter, setIngFilter, setInputFilter,setUstFilter} from './api/setFilter'
import getData from './api/getData'
import displayCount from './components/count'
import {displayFilterTags , displayAppFilterTags, displayUstFilterTags} from './components/dropdown'

document.querySelector('header').innerHTML= header()
const searchInput = document.querySelector('#search-recipe')
searchInput.addEventListener('input',function(){
    const inputValue = searchInput.value
    setInputFilter(inputValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    getData()
    init()
})
function init(){
    document.querySelector('section').innerHTML= renderCards().join(' ')
    document.querySelector('.filterList').innerHTML= displayFilterTags()
    document.querySelectorAll('.ingFilter').forEach(ing=>{
        ing.addEventListener('click',function(e){
            setIngFilter(e.target.id)
            init()
        })
    })
    document.querySelector('.appList').innerHTML= displayAppFilterTags()
    document.querySelectorAll('.appFilter').forEach(app=>{
        app.addEventListener('click',function(e){
            setAppFilter(e.target.id)
            init()
        })
    })
    document.querySelector('.ustList').innerHTML = displayUstFilterTags()
    document.querySelectorAll('.ustFilter').forEach(app=>{
        app.addEventListener('click',function(e){
            setUstFilter(e.target.id)
            init()
        })
    })
    displayCount(getData().length, searchInput.value)
}
init()
