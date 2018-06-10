export const arrToMap = arr => (
  arr.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
)

export const mapToArr = obj => (
  Object.values(obj)
)
