import React from "react"
import ReactDOM from "react-dom"

import Multi, { GoodEvening } from "./componentes/Multiples"


ReactDOM.render(
    <div>
        <Multi.GoodAfternoon nome="Leo" />
        <GoodEvening nome="Leo" />
    </div>
, document.getElementById('root'))
