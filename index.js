function Memorize (config) {

  let time = config.time ? config.time : 100000

  return function (target, name, descriptor) {
    let caches = {}
    let fn = descriptor.value

    if (typeof fn !== 'function') {
      console.error('Memorize decorator can only decorate a function!')
    }

    descriptor.value = function () {

      let currentTime = Date.now()
      let arg = arguments[0], option = arguments[1]

      if (option === 'delete') {
	delete caches[arg]
      }

      let cache = caches[arg]

      // 若存在缓存并且没有过期，直接返回缓存的值
      if (cache && currentTime < cache.expired) {
	return cache.value
      } else {
	let value = fn.apply(this, [arg])
	caches[arg] = { value, expired: Date.now() + time }
	return value
      }
    }

    return descriptor
  }
}

module.exports = Memorize
