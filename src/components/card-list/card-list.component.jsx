import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const {pokemons} = this.props;
        return (
            <div className='card-list'>
                {pokemons.map((pokemon) => {
                    return (<CardContainer pokemon={pokemon} key={pokemon.id}/>)
                })}
            </div>
        )
    }
}

export default CardList;