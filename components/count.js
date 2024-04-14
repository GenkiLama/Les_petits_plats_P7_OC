export default function displayCount(count,filterInput){
    if(count > 0){
        document.querySelector('.count').innerHTML = `<p class="maxi">${count} ${count>1?'recettes':"recette"}</p>` 
        document.querySelector('.count0').innerHTML =''
    }else{
        document.querySelector('.count').innerHTML = `<p class="maxi">Dommage...</p>` 
        document.querySelector('.count0').innerHTML = `<p class='zeroRecipes'>Aucune recette ne contient <span class="zeroRecipes_content">" ${filterInput} " </span>
        vous pouvez chercher «
        tarte aux pommes », « poisson », etc. </p>`
    }
    
}