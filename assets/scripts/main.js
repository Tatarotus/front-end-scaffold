import Hello from './components/hello';
import '../styles/main.scss';


const components = [
  {
    class: Hello,
    selector: '.hello'
  },
]

components.forEach(component => {
  if(document.querySelector(component.selector) !== null) {
    document.querySelectorAll(component.selector).forEach(
      element => new component.class(element, component.options)
    )
  }
})
