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
            </div>
        </div>
    </div>
    `
    return headerHtml
}