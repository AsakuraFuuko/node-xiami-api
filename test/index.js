const crawler = require('../src/crawler')

// crawler.getFeaturedCollection(154166515).then((collection) => {
//   console.log(collection)
// }).catch((e) => {
//   console.log(e)
// })

// const name = '西沢幸奏'

// crawler.getArtistIdByName(name).then((id) => {
//   console.log('byName: ' + id)
// }).catch((e) => {
//   console.log(e)
// })

// crawler.getArtistIdBySearch(name).then((id) => {
//   console.log('bySearch: ' + id)
// }).catch((e) => {
//   console.log(e)
// })

// crawler.getArtistIdByNameOrSearch(name).then((id) => {
//   console.log('byNameOrSearch: ' + id)
// }).catch((e) => {
//   console.log(e)
// })

// crawler.getArtistProfile(88987).then((profile) => {
//   console.log(profile)
// }).catch((e) => {
//   console.log(e)
// })

// crawler.searchArtists('周杰伦').then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

// crawler.getArtistTop100Songs(83497).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

// crawler.getFeaturedCollection(774491).then((collection) => {
//   console.log(collection.introduction)
// }).catch((e) => {
//   console.log(e)
// })

// crawler.getArtistIdByName('周杰伦').then((id) => {
//   if (id === null) return
//   crawler.getArtistProfile(id).then((profile) => {
//     console.log(profile.introduction)
//   }).catch((e) => {
//     console.log(e)
//   })
// }).catch((e) => {
//   console.log(e)
// })

crawler.getAlbum('kj2lb3d2c').then((album) => {
  console.log(album)
}).catch((e) => {
  console.log(e)
})
