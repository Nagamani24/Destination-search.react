// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="input-text"
            placeholder="search"
            value={searchInput}
            onChange={this.onChangeInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search"
            alt="Search icon"
          />
        </div>

        <ul className="items-container">
          {searchResults.map(eachItem => (
            <DestinationItem itemsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
