function Hug(){
  const hugGifs = ['x', 'd']
  const hug = hugGifs[Math.floor(Math.random() * hugGifs.length)];
  console.log(hug)
}

module.exports = {
  Hug
}