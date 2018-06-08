import React, {Component} from 'react'

export default WrappedComponent => class Accordion extends Component {
  state = {
    openItemId: ''
  }

  handleToggleItem = id => {
    this.setState((prevState) => ({openItemId: id === prevState.openItemId ? '' : id}))
  }

  render() {
    const {openItemId} = this.state
    return(
      <WrappedComponent
        openItemId={openItemId}
        handleToggleItem={this.handleToggleItem}
        {...this.props}
      />
    )
  }
}
