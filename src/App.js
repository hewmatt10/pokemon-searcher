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

      if (name.includes('-')) console.log(name);

      if (name.includes('Tapu-')) { // Tapu cases
        name = name.split('-')
        name = name.map((part) => {
          return part.charAt(0).toUpperCase() + part.slice(1);
        })
        name = name.join(' ');
      }
      else if (name.includes('Mr-')) { // Mr. Mime and Mr. Rime Cases
        name = name.split('-')
        name = name.map((part) => {
          return part.charAt(0).toUpperCase() + part.slice(1);
        })
        name[0] = name[0] + '.';
        name = name.join(' ');
      }
      else if (name.includes('n-m')) {
        name = name.replace('-m', '♂'); // Nidoran♂ Case
      }
      else if(name.includes('n-f')) {
        name = name.replace('-f', '♀'); // Nidoran♀ Case
      }
      else if(name.includes('-z')) {
        name = name.replace('z', 'Z'); // Porygon-Z Case
      }
      else if(name.includes('-jr')) {
        name = name.replace('-jr', ' Jr.'); // Mime Jr. Case
      }
      else if(name.includes('Type-')) { // Type: Null Case
        name = name.split('-')
        name = name.map((part) => {
          return part.charAt(0).toUpperCase() + part.slice(1);
        })
        name[0] = name[0] + ':';
        name = name.join(' ');
      }
      else if(name === 'Ho-oh'){
        name = name.split('')
        name[3] = 'O';
        name = name.join('');
      }
      
      fetchedPokemon[i].name = name;
    }
    console.log(fetchedPokemon)
    this.setState({
      pokemon: fetchedPokemon,
    })
  }
  onSearch = (event) => {
    const searchField = event.target.value.toLocaleLowerCase().replace(/[^a-z0-9]/gi, '');
    this.setState({
      searchField,
    })
  }

  render() {
    const {pokemon, searchField} = this.state;
    const {onSearch} = this;
    const filteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().replace(/[^a-z0-9]/gi, '').includes(searchField);
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
