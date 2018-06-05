import Memorize from '../../../index.js'
import request from './request'

class Test {
  @Memorize({})
  find () {
    return request('/test')
  }
}

let test = new Test()
console.log(test.find())
