import getData from "../api/getData";
import { filter } from "../api/setFilter";
import {inputIngredientValue, inputApplianceValue,inputUstensilsValue} from '../main'

function displayFilterTags(){
    const listHTML = getUniqIngList().map(item=>{
        const styling = item.includes(inputIngredientValue) ? 'displayOn' : 'displayOff'
        return filter.ingFilter.includes(item) ?
        `<li class='ingFilter ${styling} active' id="${item}">${item}</li>` 
        : 
        `<li class='ingFilter ${styling} ' id="${item}">${item}</li>`
        
    }).join(' ')
    return listHTML
}

function displayAppFilterTags(){
    const appHtml = getUniqAppList().map(item=>{
        const styling = item.includes(inputApplianceValue) ? 'displayOn' : 'displayOff'
        
        return filter.appFilter.includes(item) ?
        `<li class="appFilter ${styling} active" id="${item}">${item}</li>`
        :
        `<li class="appFilter ${styling}" id="${item}">${item}</li>`
    }).join(' ')
    return appHtml
}
function displayUstFilterTags(){
    const ustHtml = getUniqUstList().map(item=>{
        const styling = item.includes(inputUstensilsValue) ? 'displayOn' : 'displayOff'
        
        return filter.ustFilter.includes(item) ?
        `<li class="ustFilter ${styling} active" id="${item}">${item}</li>`
        :
        `<li class="ustFilter ${styling}" id="${item}">${item}</li>`
    }).join(' ')
    return ustHtml
}
function getUniqIngList(){
    let ingredientsList = []
    getData().forEach(recipe => {
        recipe.ingredients.forEach(ing => ingredientsList.push(ing.ingredient.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").replace(/'/g, " ")))
    })
    let uniqIngList = [...new Set(ingredientsList)].sort()
    return uniqIngList
}

function getUniqAppList(){
    let appList = []
    getData().forEach(recipe=>{
        appList.push(recipe.appliance.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").replace(/'/g, " "))
    })
    let uniqAppList = [...new Set(appList)].sort()
    return uniqAppList
}

function getUniqUstList(){
    let ustList = []
    getData().forEach(recipe=>{
        recipe.ustensils.forEach(ust=>ustList.push(ust.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").replace(/'/g, " ")))
    })
    let uniqUstList = [...new Set(ustList)].sort()
    return uniqUstList
}


export {displayAppFilterTags, displayFilterTags, displayUstFilterTags , getUniqIngList , getUniqAppList , getUniqUstList}