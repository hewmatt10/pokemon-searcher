import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const {pokemons} = this.props;
        return (
            <div className='card-list'>
                {pokemons.map((pokemon) => {
                    return (<Card pokemon={pokemon} key={pokemon.id}/>)
                })}
            </div>
        )
    }
}

export default CardList;