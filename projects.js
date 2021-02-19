// quique.gq project loader

(function () {
  'use strict';

  var table = document.getElementById('project-table');
  var row =
    '<tr>' +
    '<td><a href="%url%" target="_blank">%name%</a></td>' +
    '<td>%desc%</td>' +
    '<td><a href="%source%" target="_blank">%sourceLink%</a></td>' +
    '</tr>';
  var githubLink = '<img src="./assets/github_icon.svg" width="16px" height="16px" style="padding-right: 8px; transform: translateY(2px)">Github';

  loadJSON('./projects.json', function (json) {
    for (var i = 0; i < json.projects.length; i++) {
      var cur = json.projects[i];
      var newRow = row
        .replace('%name%', cur.name)
        .replace('%desc%', cur.desc)
        .replace('%url%', cur.url)
        .replace('%source%', cur.source)
        .replace('%sourceLink%', cur.source.includes('github') ? githubLink : 'Link');
        table.insertAdjacentHTML('beforeend', newRow);
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
