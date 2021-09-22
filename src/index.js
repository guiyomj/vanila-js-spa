import 'core-js'
import 'regenerator-runtime/runtime'
import './css/style.scss'
import { renderPage } from './js/main'

const app = async () => {
    renderPage()
}

document.addEventListener('DOMContentLoaded', app)