import {Map, OrderedMap} from 'immutable'
import {COMMENTS_PER_PAGE} from './constants/config'

export const arrToMap = (arr, DataRecord = Map) => (
  arr.reduce((acc, item) => {
    return acc.set(item.id, new DataRecord(item))
  }, new OrderedMap({}))
)

export const mapToArr = obj => (
  obj.valueSeq().toArray()
)

export const getPagination = page => ({
  limit: COMMENTS_PER_PAGE,
  offset: (page - 1) * COMMENTS_PER_PAGE,
  page
})
