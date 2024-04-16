import header from './components/header'
import renderCards from './components/card'
import {filter, setAppFilter, setIngFilter, setInputFilter,setUstFilter} from './api/setFilter'
import getData from './api/getData'
import displayCount from './components/count'
import {displayFilterTags , displayAppFilterTags, displayUstFilterTags , getUniqIngList , getUniqAppList , getUniqUstList} from './components/dropdown'
import { renderIngTags , renderAppTags , renderUstTags } from './components/tag'

//Affichage du header
document.querySelector('header').innerHTML= header()

//Gestion de l'input utilisateur dans la recherche principale
const searchInput = document.querySelector('#search-recipe')
searchInput.addEventListener('input',function(){
        const inputValue = searchInput.value
        //Si la longueur de la chaine de caractère est inférieure à 3, on cache la croix de suppression
        if(inputValue.length<3){
            document.querySelector('.clearCross').style.display='none'
        }else{
            document.querySelector('.clearCross').style.display='block'
        }
        //On setup le filtre de données en fonction de la valeur de l'input
        setInputFilter(inputValue.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").replace(/'/g, " "))
        init()
})

//Gestion de la suppression de l'input utilisateur
document.querySelector('.clearCross').addEventListener('click',function(){
    searchInput.value = ""
    document.querySelector('.clearCross').style.display='none'
    setInputFilter(searchInput.value)
    getData()
    init()
})

//Gestion du déroulé des dropdowns + animation V
document.querySelectorAll('.filterButton').forEach(btn=>{
    btn.addEventListener('click',function(e){
        document.getElementById(`${e.target.id}_unfoldable`).classList.toggle('unfold')
        document.querySelector(`.filtrIcon_${e.target.id}`).classList.toggle('rotate')
    })
})



export let inputIngredientValue =''
export let inputApplianceValue =''
export let inputUstensilsValue =''

//Affichage ou non de la croix de suppression de l'input utilisateur dans les dropdowns
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
    //Affichage des recettes
    document.querySelector('section').innerHTML= renderCards().join(' ')
    //Affichage des filtres
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
    //Affichage du nombre de recettes
    displayCount(getData().length, searchInput.value)
    //Affichage des tags
    document.querySelector('.ingTagsContainer').innerHTML = renderIngTags()
    //Gestion des clics sur les tags
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
