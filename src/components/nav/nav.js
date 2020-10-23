import "./nav.css"
import { h, text } from "hyperapp"
import html from 'hyperlit'
import { activateSike } from "./navActions"


const nav = (props) => {
  return html`
  <div class="header">
    <a class="nijo"><b>Nicola</b>Urlicic</a>
    <nav>
    <a href="#work" >View My Work</a>
    <button onclick=${activateSike}>${props.sike}</button>
    </nav>
  </div>
  `
}

export default nav