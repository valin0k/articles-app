import {
  SET_SELECT_FILTER,
  SET_DATE_FILTER,
  DELETE_ARTICLE
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
