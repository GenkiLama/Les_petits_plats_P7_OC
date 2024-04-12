import getData from "../api/getData";

function displayFilterTags(){
    const listHTML = getUniqIngList().map(item=>{
        return `
        <li class='ingFilter' id="${item}">${item}</li>
        `
    }).join(' ')
    return listHTML
}

function displayAppFilterTags(){
    const appHtml = getUniqAppList().map(item=>{
        return `
        <li class="appFilter" id="${item}">${item}</li>
        `
    }).join(' ')
    return appHtml
}
function displayUstFilterTags(){
    const ustHtml = getUniqUstList().map(item=>{
        return `
        <li class="ustFilter" id="${item}">${item}</li>
        `
    }).join(' ')
    return ustHtml
}
function getUniqIngList(){
    let ingredientsList = []
    getData().forEach(recipe => {
        recipe.ingredients.forEach(ing => ingredientsList.push(ing.ingredient))
    })
    let uniqIngList = [...new Set(ingredientsList)].sort()
    console.log('ING LIST', uniqIngList)
    return uniqIngList
}

function getUniqAppList(){
    let appList = []
    getData().forEach(recipe=>{
        appList.push(recipe.appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    })
    let uniqAppList = [...new Set(appList)].sort()
    console.log('APP LIST', uniqAppList)
    return uniqAppList
}

function getUniqUstList(){
    let ustList = []
    getData().forEach(recipe=>{
        recipe.ustensils.forEach(ust=>ustList.push(ust.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
    })
    let uniqUstList = [...new Set(ustList)].sort()
    console.log('USTLIST',ustList )
    return uniqUstList
}


export {displayAppFilterTags, displayFilterTags, displayUstFilterTags}