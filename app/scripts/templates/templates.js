var hexTemplate = '-----x: {{trueX}} y: {{y}} {{#clicked}} A {{/clicked}}';

var hexClassTemplate =
'hex ' +
'{{#offset}} offset {{/offset}}';

var menuTemplate =
'<input type="number" value ="{{height}}" class="js-height">' +
'<input type="number" value ="{{width}}" class="js-width">';

var modeTemplate = '{{name}} {{#checked }} !!! {{/checked}}';

var modeClassTemplate = 'modes {{#hidden}} hidden {{/hidden}}';

var subTemplate = '{{name}} {{#checked}} !!! {{/checked}}';

var subClassTemplate = 'subItem ' +
  '{{#hidden}} hidden {{/hidden}}' +
  '{{name}} js-{{name}}';
