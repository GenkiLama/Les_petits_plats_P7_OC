export default function header(){
   
    const headerHtml = `
    <div class="banner">
        <a href="../index.html">
           <img src='../images/Logo.png' class='banner_logo' alt='logo'/>
        </a>
        <div class='banner_container'>
            <h1 class='banner_title'>CHERCHEZ PARMI LES PLUS DE 1500 RECETTES <br> DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES</h1>
            <div class="container_search">
                <input 
                class='container_input'
                type='text'
                id='search-recipe'
                placeholder='Rechercher une recette, un ingrédient,...'
                maxlength='50'>
                <svg class="clearCross" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15L8.5 8.5M8.5 8.5L2 2M8.5 8.5L15 2M8.5 8.5L2 15" stroke="#7A7A7A" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="loop"></div>
            </div>
        </div>
    </div>
    `
    return headerHtml
}