document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projeto-1-co.firebaseio.com/')

  db.download('/', function(data) {
    context=data
    coDesReplace('.menu', context)
    coDesReplace('.menu-secao', context)
    coDesReplace('.secao-titulo-items',context)
    coDesReplace('secao-menu-imagem',context)
  })
})