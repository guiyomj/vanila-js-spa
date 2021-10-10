import Component from './common/component'
import { store } from './common/store'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

export default class App extends Component {
    template() {
        return `
            <header></header>
            <div id="body-content"></div>
            <footer></footer>
        `
    }

    mounted() {
        new Header(this.target.querySelector('header'))
        new Body(this.target.querySelector('#body-content'))
        new Footer(this.target.querySelector('footer'))
    }
}