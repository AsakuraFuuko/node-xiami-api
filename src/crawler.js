const http = require('http')
const cheerio = require('cheerio')

function getFeaturedCollection (id) {
  return new Promise((resolve, reject) => {
    http.get(`http://www.xiami.com/collect/${id}`, (res) => {
      const { statusCode } = res

      let error
      if (statusCode !== 200) {
        error = new Error(`Request Failed.\nStatus Code: ${statusCode}`)
      }
      if (error) {
        res.resume()
        reject(error)
        return
      }

      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', (chunk) => { rawData += chunk })
      res.on('end', () => {
        const $ = cheerio.load(rawData)

        const title = $('h2').text().trim()
        const tracklist = []
        const auther = {
          id: parseInt($('h4 > a').attr('name_card')),
          name: $('h4 > a').text().trim()
        }
        const introduction = $('.info_intro_full').text()
        const id = parseInt($('#qrcode > span').text())

        $('.quote_song_list > ul > li').each((_, element) => {
          const $element = $(element)
          const $input = $element.find('input[type="checkbox"]')

          const id = parseInt($input.attr('value'))
          const canPlay = $input.is(':checked')
          const title = canPlay
                          ? $element.find('.song_toclt').attr('title').trim().match(/^添加(.*)到歌单$/)[1]
                          : $element.find('.song_name').clone().children().remove().end().text().trim().match(/^(.*)\s--\s*;*$/)[1]
          const artists = []
          let introduction = $element.find('#des_').text().trim()
          introduction = introduction === '' ? null : introduction

          $element.find('.song_name > a[href^="/artist/"], .song_name > a[href^="http://www.xiami.com/search/find"]').each((_, element) => {
            const $element = $(element)
            const href = $element.attr('href')

            const name = $element.text().trim()
            const id = href.match(/^http:\/\/www\.xiami\.com\/search\/find.*/) === null ? null : href.match(/\w+$/)[0]
            artists.push({ name, id })
          })

          tracklist.push({ id, title, artists, introduction, canPlay })
        })
        resolve({
          id,
          title,
          auther,
          introduction,
          tracklist
        })
      })
    })
  })
}

module.exports = {
  getFeaturedCollection
}