import mockMap from './modules'
// 使用 Mock
const Mock = require('mockjs')

Object.keys(mockMap).forEach(moduleKey => {
  const mod = mockMap[moduleKey]
  Object.keys(mod).forEach(ruleKey => {
    Mock.mock(mod[ruleKey].reg, mod[ruleKey].res)
  })
})
