import {Map, OrderedMap} from 'immutable'

export const arrToMap = (arr, DataRecord = Map) => (
  arr.reduce((acc, item) => {
    return acc.set(item.id, new DataRecord(item))
  }, new OrderedMap({}))
)

export const mapToArr = obj => (
  obj.valueSeq().toArray()
)
