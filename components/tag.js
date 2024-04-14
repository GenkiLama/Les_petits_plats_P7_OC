import { filter } from "../api/setFilter"
import { getUniqAppList , getUniqIngList , getUniqUstList } from '../components/dropdown'

function renderIngTags(){
    const ingTagHtml = getUniqIngList().map(item=>{
        console.log('IDDDDDICICIICCIC',item)
        let plop = item.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").replace(/'/g, " ");
        return filter.ingFilter.includes(item) ?
        `
        <button class="ingTag" id='tag-${plop}'>${item}</button>
        `:
        ''
    }).join(' ')
    return ingTagHtml
}
function renderAppTags(){
    const appTagHtml = getUniqAppList().map(item=>{
        return filter.appFilter.includes(item) ?
        `
        <button class="appTag" id='tag-${item}'>${item}</button>
        `:
        ''
    }).join(' ')
    return appTagHtml
}
function renderUstTags(){
    const ustTagHtml = getUniqUstList().map(item=>{
        return filter.ustFilter.includes(item) ?
        `
        <button class="ustTag" id='tag-${item}'>${item}</button>
        `:
        ''
    }).join(' ')
    return ustTagHtml
}

export { renderIngTags, renderAppTags , renderUstTags}
