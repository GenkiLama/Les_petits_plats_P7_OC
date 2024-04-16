import header from './components/header'
import renderCards from './components/card'
import {filter, setAppFilter, setIngFilter, setInputFilter,setUstFilter} from './api/setFilter'
import getData from './api/getData'
import displayCount from './components/count'
import {displayFilterTags , displayAppFilterTags, displayUstFilterTags , getUniqIngList , getUniqAppList , getUniqUstList} from './components/dropdown'
import { renderIngTags , renderAppTags , renderUstTags } from './components/tag'

//Affichage du header
document.querySelector('header').innerHTML= header()

//Gestion de l'input utilisateur dans la recherche 
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

//Affichage conditionnel de la croix de suppression dans l'input, 
//Gestion du reset de l'input au clic
document.querySelector('.clearCross').addEventListener('click',function(){
    searchInput.value = ""
    document.querySelector('.clearCross').style.display='none'
    setInputFilter(searchInput.value)
    getData()
    init()
})

//Gestion du déroulé des dropdown TAGS
document.querySelectorAll('.filterButton').forEach(btn=>{
    btn.addEventListener('click',function(e){
        document.getElementById(`${e.target.id}_unfoldable`).classList.toggle('unfold')
        document.querySelector(`.filtrIcon_${e.target.id}`).classList.toggle('rotate')
    })
})


export let inputIngredientValue =''
export let inputApplianceValue =''
export let inputUstensilsValue =''

//Gestion de la croix de suppression des inputs de recherche par tags
const filterIngInput = document.getElementById('filterIngInput')
filterIngInput.addEventListener('input', function() {
    const { value } = filterIngInput;
    document.querySelector('#filterIngInput_resetInp').style.display = value.length > 0 ? 'block' : 'none';
    inputIngredientValue = value;
    init();
});
const filterAppInput = document.getElementById('filterAppInput')
filterAppInput.addEventListener('input',function(){
    const { value } = filterAppInput
    document.querySelector('#filterAppInput_resetInp').style.display = value.length > 0 ? 'block' : 'none'
    inputApplianceValue = filterAppInput.value
    init()
})
const filterUstInput = document.getElementById('filterUstInput')
filterUstInput.addEventListener('input',function(){
    const { value } = filterUstInput
    document.querySelector('#filterUstInput_resetInp').style.display = value.length > 0 ? 'block' : 'none'
    inputUstensilsValue = filterUstInput.value
    init()
})


function init(){
    //affichage des recettes
    document.querySelector('section').innerHTML= renderCards().join(' ')
    //affichage des filtres par tags
    document.querySelector('.filterList').innerHTML= displayFilterTags()
    //ajout de l'element aux filtres au clic
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
    //affichage du nombre de recettes
    displayCount(getData().length, searchInput.value)

    //affichage des tags selectionnés
    document.querySelector('.ingTagsContainer').innerHTML = renderIngTags()
    //retrait du tag / filtre au clic 
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
    //affichage  croix et reset des inputs de tags
    document.querySelectorAll('.vectorCrossInput').forEach(el=>{
        el.addEventListener('click',function(e){
            const targetID = e.target.id.replace('_resetInp','')
            if(targetID==="filterIngInput"){
                inputIngredientValue = ''
                document.querySelector('#filterIngInput_resetInp').style.display='none'
            }
            if(targetID==="filterAppInput"){
                inputApplianceValue = ''
                document.querySelector('#filterAppInput_resetInp').style.display='none'
            }
            if(targetID==="filterUstInput"){
                inputUstensilsValue = ''
                document.querySelector('#filterUstInput_resetInp').style.display='none'
            }
            document.querySelector(`#${targetID}`).value = ''
            init()
        })
    })
}
init()
