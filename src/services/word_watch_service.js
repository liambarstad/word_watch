class WordWatchService {
  constructor() {
    this.api_base = 'https://wordwatch-api.herokuapp.com/api/v1/'
  }

  getTopWord() {
    return fetch(this.api_base + 'top_word')
      .then(response => response.json())
  }

  postResults(results) {
    Object.keys(results).forEach((word) => {
      let payload = { word:{ value: word }}
      this.postResult(payload)
    })
  }

  postResult(payload) {
    fetch(this.api_base + 'words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  }

}

module.exports = new WordWatchService()
