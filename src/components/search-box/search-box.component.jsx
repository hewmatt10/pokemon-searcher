import {Component} from 'react'

class SearchBox extends Component {
    render() {
        return (
            <input 
            className='search-box' 
            type='search' 
            placeholder='Search Pokemon' 
            onChange={this.props.handleChange}/>
            
        )
    }
}

export default SearchBox;