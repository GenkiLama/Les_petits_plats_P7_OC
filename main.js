import header from './components/header'
import renderCards from './components/card'
import {filter, setAppFilter, setIngFilter, setInputFilter,setUstFilter} from './api/setFilter'
import getData from './api/getData'
import displayCount from './components/count'
import {displayFilterTags , displayAppFilterTags, displayUstFilterTags , getUniqIngList , getUniqAppList , getUniqUstList} from './components/dropdown'
import { renderIngTags , renderAppTags , renderUstTags } from './components/tag'

document.querySelector('header').innerHTML= header()
const searchInput = document.querySelector('#search-recipe')
searchInput.addEventListener('input',function(){
        const inputValue = searchInput.value
        if(inputValue.length<3){
            document.querySelector('.clearCross').style.display='none'
        }else{
            document.querySelector('.clearCross').style.display='block'
        }
        setInputFilter(inputValue.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").replace(/'/g, " "))
        init()
})
document.querySelectorAll('.filterButton').forEach(btn=>{
    btn.addEventListener('click',function(e){
        document.getElementById(`${e.target.id}_unfoldable`).classList.toggle('unfold')
        document.querySelector(`.filtrIcon_${e.target.id}`).classList.toggle('rotate')
    })
})

document.querySelector('.clearCross').addEventListener('click',function(){
    searchInput.value = ""
    document.querySelector('.clearCross').style.display='none'
    setInputFilter(searchInput.value)
    getData()
    init()
})

export let inputIngredientValue =''
export let inputApplianceValue =''
export let inputUstensilsValue =''

const filterIngInp = document.getElementById('filterIngInput')
filterIngInp.addEventListener('input',function(){
    inputIngredientValue = filterIngInp.value
    init()
})
const filterAppInp = document.getElementById('filterAppInput')
filterAppInp.addEventListener('input',function(){
    inputApplianceValue = filterAppInp.value
    init()
})
const filterUstInp = document.getElementById('filterUstInput')
filterUstInp.addEventListener('input',function(){
    inputUstensilsValue = filterUstInp.value
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
    document.querySelectorAll('.ustFilter').forEach(ust=>{
        ust.addEventListener('click',function(e){
            setUstFilter(e.target.id)
            init()
        })
    })
    displayCount(getData().length, searchInput.value)

    document.querySelector('.ingTagsContainer').innerHTML = renderIngTags()
    document.querySelectorAll('.ingTag').forEach(tag=>{
        tag.addEventListener('click', function(e){
            const targetID = e.target.id.replace('tag-','')
            setIngFilter(targetID)
            init()
        })
    })
    document.querySelector('.appTagsContainer').innerHTML = renderAppTags()
    document.querySelectorAll('.appTag').forEach(tag=>{
        tag.addEventListener('click', function(e){
            const targetID = e.target.id.replace('tag-','')
            setAppFilter(targetID)
            init()
        })
    })
    document.querySelector('.ustTagsContainer').innerHTML = renderUstTags()
    document.querySelectorAll('.ustTag').forEach(tag=>{
        tag.addEventListener('click', function(e){
            const targetID = e.target.id.replace('tag-','')
            setUstFilter(targetID)
            init()
        })
    })
}
init()
