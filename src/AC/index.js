import {
  SET_SELECT_FILTER,
  SET_DATE_FILTER,
  DELETE_ARTICLE,
  LOAD_ALL_ARTICLES,
  ADD_COMMENT
} from '../constants/actions'

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  }
}

export function setSelectFilter(selectedArticles) {
  return {
    type: SET_SELECT_FILTER,
    payload: {
      selectedArticles
    }
  }
}

export function setDateFilter(date) {
  return {
    type: SET_DATE_FILTER,
    payload: {date}
  }
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    generateId: true,
    payload: {
      comment,
      articleId
    }
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callApi: '/api/article'
  }
}
