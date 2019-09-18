document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://projeto-1-co.firebaseio.com/')

  let strlink = "projeto.html?pai=" + value + "&key={{@key}}"
  let link = document.querySelector('.categoria-titulo-items')
  console.log(link)
  link.href = strlink



  
  db.download('/', function(data) {

    context = data
    console.log(context)
    coDesReplace('.menu', context)

    context = data['portfolio'][value]
    coDesReplace('.categoria-secao',context)
    coDesReplace('.titulo',context)
    console.log(context)
  })
})
