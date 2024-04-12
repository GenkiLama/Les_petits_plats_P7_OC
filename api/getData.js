import {recipes} from '../data/recipes'
import { filter } from './setFilter'


export default function getData(){
    let filteredRecipes = recipes
    if(filter.inputFilter.length>2){
        filteredRecipes = inputFilter(filteredRecipes)
    }
    if(filter.ingFilter.length>0){
        console.log('TAGUEULE')
        filteredRecipes = ingFiltered(filteredRecipes)
        console.log(filteredRecipes)
    }
    return filteredRecipes
    
}

 function inputFilter(filteredRecipes){
    const filteredArray = filteredRecipes.filter(recipe=>
        recipe.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filter.inputFilter) ||
        recipe.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filter.inputFilter) ||
        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filter.inputFilter))
    )
    return filteredArray
} 
function ingFiltered(filteredRecipes){
    const filteredArray = filteredRecipes.filter(recipe=>{
        recipe.ingredients.some(ingredient=> ingredient === filter.ingFilter)
    })
    console.log('FILTEREDARRAY', filteredArray)
    return filteredArray
}

/* function inputFilter(){
    const filteredArray=[]
    for( let i=0 ; i <recipes.length ; i++){
        if(recipes[i].name.toLowerCase().includes(filter.inputFilter) ||
        recipes[i].description.toLowerCase().includes(filter.inputFilter) ||
        recipes[i].ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filter.inputFilter))
        ){
            filteredArray.push(recipes[i])
        }
    }
    return filteredArray
} */


