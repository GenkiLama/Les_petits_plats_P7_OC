export default function displayCount(count,filterInput){
    document.querySelector('.count').innerHTML = count > 0 && 
    `<p class="maxi">${count} recettes</p>` || `<p>Aucune recette ne contient "${filterInput}" 
    vous pouvez chercher «
    tarte aux pommes », « poisson », etc. </p>`
}