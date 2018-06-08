import React, {Component} from 'react'
import ReactSelect from 'react-select'

import 'react-select/dist/react-select.css'
import {articles} from '../sampleArticles'

class Select extends Component {
  state = {
    selectedOptions: []
  }

  handleChange = (selectedOptions) => {
    this.setState({selectedOptions})
  }

  render() {
    const {selectedOptions} = this.state
    const options = articles.map(article => ({
      value: article.id,
      label: article.title
    }))

    return(
      <ReactSelect
        onChange={this.handleChange}
        value={selectedOptions}
        options={options}
        multi={true}
      />
    )
  }
}

export default Select
