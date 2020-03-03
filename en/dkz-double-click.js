const e3root = document.getElementsByTagName('meta').e3root.content;
console.log(`e3root:${e3root}`)
console.log(`location.pathname:`,location.pathname)
console.log(`location.origin:${location.origin}`)


$('section#new-products article').on('dblclick', function (e) {
//  console.log({e})
  const a = this.closest('article')
  console.log({a})
  const current_url = window.location.href;
  console.log({current_url})
  const server_url = (window.location.href.startsWith('file'))?
    'http://localhost:3000':'http://ultimheat.co.th:32040';
  const ai = a.dataset.sku
  console.log(`article_id/sku:${a.dataset.sku}`)
  //const fn = `eglogics/design.eglogics.website/ultimheat/en/new-products.html`
  // find the article-id
//  var win = window.open(`http://ultimheat.co.th:32040/edit-article?ai=${ai}&fn=${fn}`, '_blank');
  const new_url = `${server_url}/edit-article?ai=${ai}&fn=${e3root}${location.pathname}`;

  if (e.ctrlKey) {
    console.log(`Missing CRTL`)
    return -1;
  }


  var win = window.open(new_url, '_blank');
  console.log({new_url})
  win.focus();
  return -1;
})
