import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [

      ],
      searchField: ''
    }
  }
  async componentDidMount() {
    let fetchedPokemon = await fetch('https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=898');
    fetchedPokemon = await fetchedPokemon.json();
    fetchedPokemon = fetchedPokemon.results;
    for(let i = 0; i < fetchedPokemon.length; i++){
      fetchedPokemon[i].id = i+1;
      let name = fetchedPokemon[i].name
      name = name.charAt(0).toUpperCase() + name.slice(1);
      if (name.includes('n-m')) {
        name = name.replace('-m', '♂'); // Nidoran♂ Case
      }
      else if(name.includes('n-f')) {
        name = name.replace('-f', '♀'); // Nidoran♀ Case
      }
      else if(name.includes('-m')) {
        name = name.replace('-m', '. M'); // Mr. Mime Case
      }
      fetchedPokemon[i].name = name;
    }
    console.log(fetchedPokemon)
    this.setState({
      pokemon: fetchedPokemon,
    })
  }
  onSearch = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({
      searchField,
    })
  }

  render() {
    const {pokemon, searchField} = this.state;
    const {onSearch} = this;
    const filteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
      <h1 className='app-title'>Pokemon Searcher</h1>
      <SearchBox handleChange={onSearch}/>
      <CardList pokemons={filteredPokemon} />
      </div>
    );
  }
}

export default App;
