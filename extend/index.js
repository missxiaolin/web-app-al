import mpExtend from './mp-extend.js'

import simplePv from './simple/extend_pv.js'

mpExtend(simplePv)

export default {
  App: mpExtend.App
}