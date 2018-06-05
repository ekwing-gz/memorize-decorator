function request (url) {

  if (url === '/test') {
    return new Promise(resolve => {
      setTimeout(() => {
	resolve('Testing data')
      }, 2000)
    })
  }
}

export default request
