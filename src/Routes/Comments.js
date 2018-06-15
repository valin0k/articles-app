import React, {Component, Fragment} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import CommentList from '../Components/CommentList'
import Pagination from '../Components/Pagination'

class Comments extends Component{

  getComments = ({match}) => {
    return <CommentList page={match.params.page} />
  }

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
        <Redirect from='/comments' to='/comments/1' exact />
        <Route path='/comments/:page' render={this.getComments}/>
        <Route path='*' render={this.getPagination}/>
      </Fragment>
    )
  }
}

export default connect(state => ({
  total: state.comments.total
}))(Comments)
