let _db
let generalData, channelMessages

let request
const read = (tableName, key) => {
  return DB().then(() => {
    return new Promise((resolve, reject) => {
      const request = _db.transaction(tableName).objectStore(tableName).get(key)
      request.onsuccess = event => {
        if (process.env.NODE_ENV === 'development') {
          console.log('read db', tableName, key, event.target.result.data)
        }
        if (event.target.result && event.target.result.data) {
          resolve(event.target.result.data)
        } else {
          resolve(null)
        }
      }
      request.onerror = event => {
        resolve(event)
      }
    })
  })
}

const write = (tableName, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('write db', tableName, data)
  }
  return DB().then(() => {
    return new Promise((resolve, reject) => {
      const request = _db.transaction([tableName], 'readwrite').objectStore(tableName).put(data)
      request.onsuccess = event => {
        resolve(event.target.result.data)
      }
      request.onerror = event => {
        resolve(event)
      }
    })
  })
}

const db = {
  read,
  write
}

const DB = () => {
  if (_db) {
    return Promise.resolve(db)
  }
  return new Promise((resolve, reject) => {
    request = window.indexedDB.open('traQ-DB')

    request.onerror = event => {
      console.error('fail starting indexedDB', event)
      reject(event)
    }

    request.onsuccess = event => {
      _db = event.target.result
      resolve(db)
    }

    request.onupgradeneeded = event => {
      _db = event.target.result

      generalData = _db.createObjectStore('generalData', {keyPath: 'type'})
      generalData.createIndex('type', 'type', {unique: true})

      channelMessages = _db.createObjectStore('channelMessages', {keyPath: 'channelId'})
      channelMessages.createIndex('channelId', 'channelId', {unique: true})
    }
  })
}

export default {DB: DB, db: db}
