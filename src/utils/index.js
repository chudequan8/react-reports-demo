export function formatNumber(num) {
  let retNum = Number(num)
  return parseInt(retNum) === retNum ? retNum : retNum.toFixed(1)
}

export function forMatDate (date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      .map(n => (n < 10 ? "0" + n : n))
      .join("-");
}


/* 深拷贝 */
export function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

/**
 * 随机获得一个范围内的整数
 * @param start
 * @param end
 * @returns {*}
 */
export function randInt(start, end) {
  return Math.floor(Math.random() * (end - start)) + start
}