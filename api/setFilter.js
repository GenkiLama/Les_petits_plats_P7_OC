let filter = {
    inputFilter: '',
    ingFilter:[],
    appFilter:[],
    ustFilter:[]
}
function setInputFilter(input) {
    filter = {
        ...filter,
        inputFilter: input.length > 2 ? input : ''
    };
}
function setIngFilter(ing){
    filter.ingFilter.includes(ing) ? 
    filter.ingFilter.splice(filter.ingFilter.indexOf(ing),1)
    : 
    filter.ingFilter.push(ing)
}
function setAppFilter(app){
    filter.appFilter.includes(app) ? 
    filter.appFilter.splice(filter.appFilter.indexOf(app),1)
    : 
    filter.appFilter.push(app)
    
}
function setUstFilter(ust){
    filter.ustFilter.includes(ust) ? 
    filter.ustFilter.splice(filter.ustFilter.indexOf(ust),1)
    : 
    filter.ustFilter.push(ust)
}

export {filter, setInputFilter,setIngFilter,setAppFilter, setUstFilter}