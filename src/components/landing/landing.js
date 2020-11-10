import "./landing.css"
import { h, text } from "hyperapp"
import html from 'hyperlit'
import { activeCardOne, activeCardTwo } from "./landingActions"

const landing = (props) => {
  return html`
  <div id="landing" class="landing">
  <div class="introduction">
    <h1>CODE JAVASCRIPT APPS FASTER USING NICOLA</h1>
    <h2>Nicola allows you to create awesome websites with all the modern frameworks. A completely self taught web developer fueled by coffee.</h2>
    <h2><b>Send a free email and try him out. No hidden costs, just coffee.</b></h2>
  </div>
  <div class="cards">
    <h3>NICOLA IS A</h3>
    <div class=${props.activeCard === 1 ? "active" : "notActive"}
    onclick=${activeCardOne} >
    <h4>WEB DEVELOPER</h4>
    <p>I immediately fell in love with JS and all the modern frameworks around it. That includes frontend as well as backend.</p>
    </div>
    <div class=${props.activeCard === 2 ? "active" : "notActive"}
    onclick=${activeCardTwo} >
    <h4>WEB DESIGNER</h4>
    <p>I love design and always have. There is nothing more rewarding to me than creating great products that look even better.</p>
    </div>
  </div>
  </div>
  `
}


export default landing