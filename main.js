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

const filterIngInput = document.getElementById('filterIngInput')
filterIngInput.addEventListener('input',function(){
    inputIngredientValue = filterIngInput.value
    init()
})
const filterAppInput = document.getElementById('filterAppInput')
filterAppInput.addEventListener('input',function(){
    inputApplianceValue = filterAppInput.value
    init()
})
const filterUstInput = document.getElementById('filterUstInput')
filterUstInput.addEventListener('input',function(){
    inputUstensilsValue = filterUstInput.value
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
    document.querySelectorAll('.vectorCrossInput').forEach(el=>{
        el.addEventListener('click',function(e){
            const targetID = e.target.id.replace('_resetInp','')
            if(targetID==="filterIngInput"){
                inputIngredientValue = ''
            }
            if(targetID==="filterAppInput"){
                inputApplianceValue = ''
            }
            if(targetID==="filterUstInput"){
                inputUstensilsValue = ''
            }
            document.querySelector(`#${targetID}`).value = ''
            init()
        })
    })
}
init()
