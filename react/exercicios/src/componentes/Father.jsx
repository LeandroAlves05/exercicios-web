import React from "react";
import { childrenWithProps } from "../usefuls/usefuls";

export default props =>
    <div>
        <h1>{props.firstName} {props.lastName}</h1>
        <h2>Filhos</h2>
        <ul>
            { childrenWithProps(props) }
        </ul>
    </div>