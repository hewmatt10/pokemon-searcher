import { Component } from "react";
import './card.styles.css'

class Card extends Component {

    render () {
        const {name, id} = this.props.pokemon;
        return (
            <div className='card-container'>
                <h1>{name}</h1>
                <p>Pokedex Number: {id}</p>
                <img alt={`${name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
            </div>
        )
    }
}

export default Card;