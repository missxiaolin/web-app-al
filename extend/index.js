import mpExtend from './mp-extend.js'

import simplePv from './simple/extend_pv.js'

import extendPage from './complex/extend-page.js'
import extendGlobalData from './complex/extend-globalData.js'
import extendMitt from './complex/extend-mitt.js'

// 以mpExtend(...)的形式引入多个扩展
// 如果不需要某一个混入项的功能，直接注释掉即可
mpExtend(extendPage)
mpExtend(extendGlobalData)
mpExtend(extendMitt)

mpExtend(simplePv)

export default {
  App: mpExtend.App,
  Page: mpExtend.Page
}