import {recipes} from '../data/recipes'

export default function renderCards(){
    const cardsListHtml = recipes.map(recipe=>{
        return `
            <article>
                <img src='./images/${recipe.image}' alt='${recipe.name}' class='article_img' />
                <div class="article_content">
                    <h2>${recipe.name}</h2>
                    <div class="article_details">
                    <h3 class='sub_title'>RECETTE</h3>
                    <p class='description'>${recipe.description}</p>
                    </div>
                    <div class='article_ingredients'>
                    <h3 class='sub_title'>INGRÉDIENTS</h3>
                        <div class='ingredients_container'>
                            ${recipe.ingredients.map(ingredient=>{
                                return `
                                    <div class="ingredient">
                                        <p class='ingredient_txt'>${ingredient.ingredient}<p>
                                        <p class='ingredient_txt grey'>${ingredient.quantity} ${ingredient.unit || ''}</p>
                                    </div>
                                `
                            }).join(' ')}
                        </div>
                    </div>
                </div>
            </article>
        `
    }).join(' ')
    return  cardsListHtml
}