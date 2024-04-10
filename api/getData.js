import {recipes} from '../data/recipes'
import { filter } from './setFilter'

export default function getData(){
    console.log('bite')
    if(filter.inputFilter.length>2){
        return inputFilter()
    }
    return recipes
}

function inputFilter(){
    const filteredArray = []
    recipes.forEach(recipe=>{
        if(recipe.name.toLowerCase().includes(filter.inputFilter) ||
        recipe.description.toLowerCase().includes(filter.inputFilter) ||
        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filter.inputFilter))
        ){
            filteredArray.push(recipe)
        }
    })
    return filteredArray
}


