import header from './components/header'
import renderCards from './components/card'

document.querySelector('header').innerHTML= header()
document.querySelector('section').innerHTML=renderCards()