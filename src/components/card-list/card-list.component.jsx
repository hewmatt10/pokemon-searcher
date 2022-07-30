import { Component } from "react";
import CardContainer from "../card-container/card-container.component";

class CardList extends Component {
    render() {
        const {pokemons} = this.props;
        return (
            <div className='card-list'>
                <CardContainer pokemons={pokemons}/>
            </div>
        )
    }
}

export default CardList;