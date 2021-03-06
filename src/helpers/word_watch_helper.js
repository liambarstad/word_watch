const $ = require('jquery')

class WordWatchHelper {
  
  addTopWord(response) {
    let word = Object.keys(response.word)[0]
    let value = response.word[word]
    let $topWordHeader = $('article.top-word h3')
    $topWordHeader.text($topWordHeader.text() + `${word} (${value})`)
  }

  getSubmissionText() {
    return $('.text-submission').find('textarea').val().toLowerCase()
  }

  addSubmissionResults(results) {
    let $article = $('article.word-count')
    $article.children().remove()
    Object.keys(results).forEach((word) => {
      let frequency = results[word]
      $article.append(`<p data-word=${word}>${word}</p>`)
      $article.find(`[data-word=${word}]`)[0].style = `font-size: ${frequency}em`
    })
  }

}

module.exports = new WordWatchHelper()
