import Memorize from '../../../index.js'

class Test {
  @Memorize({})
  fib ({ n }) {
    if (n < 3) {
      return 1
    } else {
      let i = 3
      let a = 1, b = 1
      while (i <= n) {
	[a, b] = [b, a + b]
	i ++
      }
      return b
    }
  }
}

function fib (n) {
  if (n < 3) {
    return 1
  } else {
    let i = 3
    let a = 1, b = 1
    while (i <= n) {
      [a, b] = [b, a + b]
      i ++
    }
    return b
  }
}


let test = new Test()
let start = Date.now()
let num = 3000

for (let i = 0; i < num; i++) {
  fib(1000)
}

console.log(`Executing fact ${num} times needs ${Date.now() - start}ms`)
start = Date.now()

for (let i = 0; i < num; i++) {
  test.fib({n: 1000})
}
console.log(`Executing test.fact ${num} times needs ${Date.now() - start}ms`)
