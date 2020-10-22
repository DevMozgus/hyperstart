import { h, app } from "hyperapp"

import init from "./components/state"
import view from "./components/view"
import "./index.css"

const node = document.querySelector("#app")

app({init, view, node})