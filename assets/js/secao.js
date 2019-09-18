document.addEventListener('DOMContentLoaded', function() {

  let db = coDesConnect('https://projeto-1-co-design.firebaseio.com/')
  let params = coDesExtract()
  let value = params['key']
  db.download('/', function(data) {

    context = data['portfolio']
    console.log(context)
    coDesReplace('.menu', context)
    coDesReplace('.menu-secao', context)

    context = data['biblioteca'][value]
    coDesReplace('.call', context)

    context = data['biblioteca'][value] 
    coDesReplace('.book-list', context)
  })
})
