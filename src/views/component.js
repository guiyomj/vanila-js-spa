export default class {
    constructor() {}
    render() {
        this.html = this.htmlToEls(this.getHTML())
        return this.html
    }
    getHTML() {
      return `<div class='main'></div>`
    }
    replaceElm(targetKey = '', ...replaceEls) {
      if (targetKey && replaceEls) {
        const target = this.html.querySelector(targetKey)
        let insertedElms = replaceEls.map(e => target.insertAdjacentElement('beforebegin', e))
        target.remove()
  
        return insertedElms
      }
    }
    htmlToEls(html) {
      let temp = document.createElement('template')
      temp.innerHTML = html.trim()
      return temp.content.firstChild
    }
}