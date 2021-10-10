import { observable, observe } from './store/observer'

export default class Component {
  constructor(target, props, isBehindAdd = false) { 
    this.target = target
    this.props = props
    this.setup()
    this.render(isBehindAdd)
    this.setEvent()
  }
  
  setup() {
    this.state = observable(this.initState())
    observe(() => {
      this.render()
      this.setEvent()
    })
  }

  initState() { return {} }

  mounted () {}

  template() { return '' }

  render() {
    this.target.innerHTML = this.template()
    this.mounted()
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.render()
  }

  addEvent (eventType, selector, callback, capture = false) {
    const children = [ ...this.target.querySelectorAll(selector) ]
    const isTarget = target => children.includes(target) || target.closest(selector)
    this.target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false
      callback(event)
    }, capture)
  }
}