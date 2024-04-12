import {recipes} from '../data/recipes'
import { filter } from './setFilter'


export default function getData() {
    return [inputFilter, ingFiltered, appFiltered, ustFiltered].reduce((filteredRecipes, filterFunc) => {
        return filterFunc.length > 0 ? filterFunc(filteredRecipes) : filteredRecipes;
    }, recipes);
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
    const filteredArray = filteredRecipes.filter(recipe => {
        return filter.ingFilter.every(ing => {
            const isIncluded = recipe.ingredients.some(ingredient => 
                ingredient.ingredient.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(ing.toLowerCase().trim())
            );
            return isIncluded;
        });
    });
    return filteredArray;
}

function appFiltered(filteredRecipes){
    const filteredArray = filteredRecipes.filter(recipe=>{
        return filter.appFilter.every(app=>{
            const isIncluded = recipe.appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(app);
            return isIncluded;
        });
    });
    return filteredArray;
}

function ustFiltered(filteredRecipes){
    const filteredArray = filteredRecipes.filter(recipe=>{
        return filter.ustFilter.every(ustFilterItem=>{
            return recipe.ustensils.some(ustensil=>{
                const normalizedUstensil = ustensil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const normalizedUstFilterItem = ustFilterItem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return normalizedUstensil.includes(normalizedUstFilterItem);
            });
        });
    });
    return filteredArray;
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


