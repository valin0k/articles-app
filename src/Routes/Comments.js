import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import CommentList from '../CommentList'
import Pagination from '../Pagination'

class Comments extends Component{

  getComments = ({match}) => {
    return <CommentList page={match.params.page} />
  }

  getIndex = () => (
    <h3>Please, select comments page</h3>
  )

  getPagination = ({match}) => {
    return <Pagination
      total={this.props.total || 5}
      page={match.params.page}
      itemsPerPage={5}
    />
  }

  render() {
    return (
      <Fragment>
        <Route path='/comments' render={this.getIndex} exact />
        <Route path='/comments/:page' render={this.getComments}/>
        <Route path='*' render={this.getPagination}/>
      </Fragment>
    )
  }
}

export default connect(state => ({
  total: state.comments.total
}))(Comments)
