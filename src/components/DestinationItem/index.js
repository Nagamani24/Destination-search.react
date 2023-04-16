// Write your code here

import './index.css'

const DestinationItem = props => {
  const {itemsList} = props
  const {name, imgUrl} = itemsList

  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
