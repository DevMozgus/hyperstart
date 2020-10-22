import "./landing.css"
import { h, text } from "hyperapp"
import html from 'hyperlit'
import { activeCardOne, activeCardTwo } from "./landingActions"

const landing = (props) => {
  return html`
  <div class="landing">
  <div class="introduction">
    <h1>CODE JAVASCRIPT APPS FASTER USING NICOLA</h1>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
  </div>
  <div class="cards">
    <h3>I AM AWESOME</h3>
    <div class=${props.activeCard === 1 ? "active" : "notActive"}
    onclick=${activeCardOne} >
    <h4>CARD ONE</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class=${props.activeCard === 2 ? "active" : "notActive"}
    onclick=${activeCardTwo} >
    <h4>CARD TWO</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  </div>
  `
}


export default landing