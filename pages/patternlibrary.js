
var removeLeading = function(frag){
  var leading = (frag.length - frag.trimLeft().length - 1);
  return frag.split("\n").reduce(function(a, c){
    return a + c.substring(leading) + "\n";
  })
}

var atomsContainer = document.querySelector("#atoms");
var atomComponents = document.querySelectorAll(".component");

atomComponents.forEach(function(component){
  var title = component.getAttribute("title");
  var version = component.getAttribute("version");
  var meta = (component.querySelector("includes"));
  var css = removeLeading((component.querySelector("style") || false).innerHTML);
  var markupEl = (component.querySelector("markup") || false);
  var demoStyles = markupEl.getAttribute("demoStyles") || "";
      demoStyles = "border: dashed 1px blue;margin: 0 auto;" + demoStyles;
  var markup = removeLeading(markupEl.innerHTML);
  // start building HTML string to insert into component container
  var componentHTML = "";

  // add title
  componentHTML += `<h3>${title}</h3>`;

  // insert demo section
  componentHTML += `<div class="demo-container">`;
    componentHTML += `<h4>Live Demo</h4>`;
    componentHTML += `<div class="demo">`;
    if (meta) {
      document.querySelector("head").appendChild(meta);
    }
    if (css) {
      componentHTML += `<style>`;
      componentHTML += css;
      componentHTML += `</style>`;
    }
    if (markup) {componentHTML += `<div style="${demoStyles}">${markup}</div>`;}
    componentHTML += `</div>`;
  componentHTML += `</div>`;

  // insert code container
  componentHTML += `<div class="code-container">`;

  // // insert meta code section
  if (meta) {
    componentHTML += `<div class="code code-meta">`;
    componentHTML += `<h4>Meta Code</h4>`;
    componentHTML += `<textarea>`;
    componentHTML += `<!-- ${title} ${version} -->\n`;
    componentHTML += removeLeading(meta.innerHTML);
    componentHTML += `</textarea>`;
    componentHTML += `</div>`;
  }

  // insert CSS code section
  if (css) {
    componentHTML += `<div class="code code-style">`;
    componentHTML += `<h4>CSS</h4>`;
    componentHTML += `<textarea>`;
    componentHTML += `/* ${title} ${version} */\n`;
    componentHTML += css;
    componentHTML += `</textarea>`;
    componentHTML += `</div>`;
  }

  // insert HTML code section
  if (markup) {
    componentHTML += `<div class="code code-html">`;
    componentHTML += `<h4>HTML</h4>`;
    componentHTML += `<textarea>`;
    componentHTML += `<!-- ${title} ${version} -->\n`;
    componentHTML += markup;
    componentHTML += `</textarea>`;
    componentHTML += `</div>`;
  }

  // close code section tag
  componentHTML += `</div>`;

  //put component in the page
  component.innerHTML = componentHTML;

});
