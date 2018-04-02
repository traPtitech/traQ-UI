let once = {}
let on = {}
let listeningEventList = {}
let source = null

const baseURL = process.env.NODE_ENV === 'development'
  ? 'https://traq-dev.tokyotech.org'
  : ''

if (process.env.NODE_ENV === 'development') {
  window.sseCheck = () => {
    console.log(source)
  }
}

const callFunction = (eventName, json) => {
  if (process.env.NODE_ENV === 'development') {
    console.info('sse:' + eventName, json)
  }

  if (Array.isArray(on[eventName])) {
    on[eventName].forEach(fn => {
      fn(json)
    })
  }

  if (Array.isArray(once[eventName])) {
    once[eventName].forEach(fn => {
      fn(json)
    })
    once[eventName] = []
  }
}

const sse = {
  startListen (cb) {
    if (source) {
      source.close()
    }
    source = new EventSource(baseURL + '/api/1.0/notification', {withCredentials: true})
    source.onopen = cb
  },
  stopListen () {
    source.close()
    source = null
    listeningEventList = {}
  },
  isListening () {
    console.log(source)
    return !!source && source.readyState < 2
  },
  on (eventName, cb) {
    if (!listeningEventList[eventName]) {
      source.addEventListener(eventName, data => {
        const json = JSON.parse(data.data)
        callFunction(eventName, json)
      })
      listeningEventList[eventName] = true
    }
    if (!Array.isArray(on[eventName])) {
      on[eventName] = []
    }
    on[eventName].push(cb)
  },
  onOnce (eventName, cb) {
    if (!listeningEventList[eventName]) {
      source.addEventListener(eventName, data => {
        const json = JSON.parse(data)
        callFunction(eventName, json)
      })
      listeningEventList[eventName] = true
    }
    if (!Array.isArray(on[eventName])) {
      once[eventName] = []
    }
    once[eventName].push(cb)
  },
  resetEventListener () {
    listeningEventList = {}
    once = {}
    on = {}
  }
}

export default sse
