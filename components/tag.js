import { filter } from "../api/setFilter"
import { getUniqAppList , getUniqIngList , getUniqUstList } from '../components/dropdown'

function renderIngTags(){
    const ingTagHtml = getUniqIngList().map(item=>{
        return filter.ingFilter.includes(item) ?
        `
        <div class="ingTag"><p>${item}</p> <i id='tag-${item}' class="fa-solid fa-xmark"></i></div>
        `:
        ''
    }).join(' ')
    return ingTagHtml
}
function renderAppTags(){
    const appTagHtml = getUniqAppList().map(item=>{
        return filter.appFilter.includes(item) ?
        `
        <div class="appTag"><p>${item}</p><i id='tag-${item}' class="fa-solid fa-xmark"></i></div>
        `:
        ''
    }).join(' ')
    return appTagHtml
}
function renderUstTags(){
    const ustTagHtml = getUniqUstList().map(item=>{
        return filter.ustFilter.includes(item) ?
        `
        <div class="ustTag"><p>${item}</p><i id='tag-${item}' class="fa-solid fa-xmark"></i></div>
        `:
        ''
    }).join(' ')
    return ustTagHtml
}

export { renderIngTags, renderAppTags , renderUstTags}
