import { h, text } from "hyperapp"
import html from 'hyperlit'
import "./book.css"

export const aboutBook = (props) => {
  return html`
  <section class="bookDescription">
    <div>
    <h1>Is That An O'Reilly Book Generator?</h1>
    <p>That's right, after extensively researching hyperapp and the hyperstart's single blog post (RIP Blog), I decided to steal your entire work.</p>
    <p><b>I created this entire site using hyperapp.</b></p>
    <p>However, that wasn't enough. Within this stroke of genius, I also found hyperapp examples you hadn't implemented yet. Naturally, I had to steal that too.</p>
    <p>And so, I present you the <b>O'Reilly book cover generator™</b></p>
    </div>
    <a href="https://github.com/DevMozgus/hyperstart">View This Sites Code</a>
    </section>
  `
}