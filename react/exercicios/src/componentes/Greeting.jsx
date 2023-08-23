import React, { Component } from "react"

export default class Greeting extends Component {
    
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        this.setType = this.setType.bind(this)
    }

    setType(e) { 
        this.setState({ tipo: e.target.value})
    }

    setName(e) {
        this.setState({ nome: e.target.value})
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setType}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setName(e)}/>
            </div>
        )
    }
}