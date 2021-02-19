// quique.gq project loader

(function () {
  'use strict';

  var table = document.getElementById('project-table');
  var row =
    '<tr>' +
    '<td><a href="%url%" target="_blank">%name%</a></td>' +
    '<td>%desc%</td>' +
    '<td>%updated%</td>' +
    '<td>%created%</td>' +
    '</tr>';

  loadJSON('./projects.json', function (json) {
    var list = {};
    for (var i = 0; i < json.projects.length; i++) {
      var cur = json.projects[i];
      list[i] = null;
      (function () {
        var pos = i;
        loadJSON(cur, function (proj) {
          var name = proj.name;
          var desc = proj.description;
          var url = proj.homepage;
          var updated = proj.updated_at;
          var created = proj.created_at;
          var newRow = row.replace('%name%', name)
            .replace('%desc%', desc)
            .replace('%url%', url)
            .replace('%updated%', updated)
            .replace('%created%', created);
          list[pos] = newRow;
          table.innerHTML = '';
          for (var l in list) table.innerHTML += list[l];
        });
      })();
    }
  });
})();

function loadJSON(url, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}
