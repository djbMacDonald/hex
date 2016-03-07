var hexTemplate = '({{trueX}}, {{y}}) {{#clicked}} A {{/clicked}} {{text}}';

var hexClassTemplate =
'hex ' +
'{{#offset}} offset {{/offset}} {{piece}}';

var menuTemplate =
'rows: <input type="number" value ="{{height}}" class="js-height">' +
'columns: <input type="number" value ="{{width}}" class="js-width">';

var modeClassTemplate = 'modes {{#hidden}} hidden {{/hidden}} mode-{{name}} {{#active}} active {{/active}}';

var subClassTemplate = 'subItem ' +
  '{{#hidden}} hidden {{/hidden}}' +
  '{{name}} js-{{name}} {{#checked}} active {{/checked}}';
