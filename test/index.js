const xiami = require('../src')

xiami.getSong(1769386355).then((song) => {
  console.log(song.name)
}).catch((err) => {
  console.log(err)
})