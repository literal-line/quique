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
  var githubLink = '<img src="./assets/github_icon.svg" alt="Github Icon" width="16px" height="16px" style="padding-right: 8px; transform: translateY(2px)">Github';
  
  var req = new XMLHttpRequest();
  req.open('GET', './assets/projects.json');
  req.onload = function () {
    var json = JSON.parse(req.responseText);
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
  };
  req.send();
})();
