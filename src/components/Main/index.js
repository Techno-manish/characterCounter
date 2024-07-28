import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Main extends Component {
  state = {inputVal: '', listItem: []}

  onChangeInput = event => {
    const input = event.target.value
    this.setState({inputVal: input})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {inputVal, listItem} = this.state
    const charLen = inputVal.length
    const charData = {
      inputVal,
      charLen,
    }
    this.setState({inputVal: '', listItem: [...listItem, charData]})
  }

  RenderLeftSection = () => {
    const {listItem} = this.state
    const lengthOfList = listItem.length
    return (
      <div className="leftSectionContainer">
        <h1>Count the characters like a Boss...</h1>
        {lengthOfList === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="image"
          />
        ) : (
          <ul>
            {listItem.map(each => (
              <li key={uuidv4()} className="listItem">
                <p>{`${each.inputVal}: ${each.charLen}`}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  RenderRightSection = () => {
    const {inputVal} = this.state
    return (
      <div className="rightSectionContainer">
        <h1 className="rightHeading">Character Counter</h1>
        <form className="inputContainer" onSubmit={this.onClickAdd}>
          <input
            type="text"
            placeholder="Enter the Characters here"
            className="inputBar"
            value={inputVal}
            onChange={this.onChangeInput}
          />
          <button type="submit" className="button">
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    const leftSection = this.RenderLeftSection()
    const righSection = this.RenderRightSection()
    return (
      <div className="contentContainer">
        {leftSection}
        {righSection}
      </div>
    )
  }
}
export default Main
