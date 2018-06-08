import React, {Component} from 'react'

import './style.css'

const FIELDS = [{
    name: 'user',
    min: 5,
    max: 10
  }, {
    name: 'text',
    min: 10,
    max: 20
  }
]

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  handleFieldChange = fieldName => e => {
    this.setState({
      [fieldName]: e.target.value
    })
  }

  getClassName = field => (
    !this.state[field.name].length
    || this.state[field.name].length > field.min
    && this.state[field.name].length < field.max
    ? '' : 'validate-error'
  )

  handleFormSubmit = e => {
    console.info("__submit form__" )
  }

  render() {
    return(
      <ul>
        {FIELDS.map(field => (
          <input
            key={field.name}
            className={this.getClassName(field)}
            value={this.state[field.name]}
            placeholder={field.name}
            onChange={this.handleFieldChange(field.name)}
          />
        ))}
        <button onClick={this.handleFormSubmit}>
          Submit comment
        </button>
      </ul>
    )
  }
}

export default CommentForm
