fetch("/fazenda.json")
  .then(function(res){
    return res.json();
  }).then(function(res) {
    var template = '{{#.}}<li>' +
      '<div class="img-list">' +
        '<img src="{{picture}}" alt="">' +
        '<p class="rank-position">{{rank}}</p>' +
      '</div>' +
      '<div class="candidate">' +
        '<h2>{{name}}</h2>' +
        '<p class="description">{{{description}}}</p>' +
      '</div>' +
      '<div class="score">' +
        '<div class="box-like-line">' +
          '<h2 class="h2-like">GOSTAM</h2>' +
          '<p class="p-like">{{liked}}%</p>' +
        '</div><div class="box-like">' +
          '<h2 class="h2-dislike">NÃO GOSTAM</h2>' +
          '<p class="p-dislike">{{desliked}}%</p>' +
        '</div>' +
      '</div>' +
    '</li> {{/.}}';

    var list = res.data.map(function(elm) {
      var positive = parseInt(elm.positive);
      var negative = parseInt(elm.negative);

      var total = positive + negative;
      elm.liked =  positive ? Number((positive / total) * 100).toFixed(0) : 0;
      elm.desliked =  positive ? 100 - elm.liked : 0;
      return elm;
    }).sort(function(a, b) {
      return a.liked < b.liked;
    }).map(function(elm, i) {
      elm.rank = i + 1;
      return elm;
    })

    var container = document.getElementById('rank-list');
    container.innerHTML = Mustache.render(template, list);
  })
