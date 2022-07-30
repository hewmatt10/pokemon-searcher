import { Component } from "react";

class CardContainer extends Component {
    render () {
        const {pokemons} = this.props;
        return (
            pokemons.map((pokemon) => {
                return (
                  <h1 key={pokemon.id}>{pokemon.name}</h1>
                )
            })
        )
    }
}

export default CardContainer;