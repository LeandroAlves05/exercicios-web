import React from "react"
import ReactDOM from "react-dom"

import Father from "./componentes/Father"
import Son from "./componentes/Son"

ReactDOM.render(
    <div>
        <Father firstName="Paulo" lastName="Silva">
            <Son firstName="Pedro" lastName="Silva" />
            <Son firstName="Paulo" lastName="Silva" />
            <Son firstName="Carla" lastName="Silva" />
        </Father>
    </div>
, document.getElementById('root'))
