import React, {Component} from 'react'
import {addComment} from '../../AC/index'
import {connect} from 'react-redux'
import {Consumer as LangConsumer} from '../../LocalizationContext'

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
  getInitialState = () => ({
    user: '',
    text: ''
  })

  state = this.getInitialState()

  handleFieldChange = fieldName => e => {
    this.setState({
      [fieldName]: e.target.value
    })
  }

  validateFields = fields => (
    fields.every(({name, min, max}) => (
      this.state[name].length > min && this.state[name].length < max
    ))
  )

  getClassName = ({name, min, max}) => (
    !this.state[name].length ||
    this.state[name].length > min &&
    this.state[name].length < max
      ? '' : 'validate-error'
  )

  handleFormSubmit = e => {
    if (!this.validateFields(FIELDS)) return

    const {user, text} = this.state
    this.props.addComment({user, text}, this.props.articleId)

    this.setState(this.getInitialState())
  }

  render () {
    return (
      <ul className='commentForm'>
        {FIELDS.map(field => (
          <li key={field.name}>
            <input
              className={this.getClassName(field)}
              value={this.state[field.name]}
              placeholder={field.name}
              onChange={this.handleFieldChange(field.name)}
            />
          </li>
        ))}
        <li>
          <button onClick={this.handleFormSubmit}>
            <LangConsumer>
              {({language}) => language.submitComment}
            </LangConsumer>
          </button>
        </li>
      </ul>
    )
  }
}

export default connect(null, {addComment})(CommentForm)
