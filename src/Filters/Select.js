import React, {Component} from 'react'
import ReactSelect from 'react-select'
import {connect} from 'react-redux'
import {setSelectFilter} from '../AC'
import {mapToArr} from '../helpers'

import 'react-select/dist/react-select.css'

class Select extends Component {
  handleChange = (selectedOptions) => {
    this.props.setSelectFilter(selectedOptions)
  }

  render() {
    const {articles, selectedOptions} = this.props
    const options = articles.map(article => ({
      value: article.id,
      label: article.title
    }))

    return(
      <ReactSelect
        onChange={this.handleChange}
        value={selectedOptions}
        options={options}
        multi
      />
    )
  }
}

export default connect(({articles, filters}) => ({
  articles: mapToArr(articles),
  selectedOptions: filters.select
}), {setSelectFilter})(Select)
