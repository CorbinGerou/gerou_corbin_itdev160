var data = [
{
    name: 'atom-beautify'
    description: 'The atom-beautify package will clean up your code, and make it more readable. It has support for a variety of programming languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, and more. It will only beautify selected text if a selection is found, otherwise the beautify command ^ + ⌥ + b, or typing “Beautify” from the Command Palette will beautify the whole file.'
    author: 'glavin001'
    url: 'https://atom.io/packages/atom-beautify'
    downloads:'6,027,959'
    stars:'5053'
    selector:'p1'
},
{
  name:'Language-Liquid'
  description:'The language-liquid package is one I can’t live without when theming for Shopify. For the most part, Atom is pretty good with out-of-the-box syntax highlighting, but it doesn’t have syntax highlighting for Liquid. This is also a great package to use if you’re using Jekyll for templating static sites or blogs.'
  author:'puranjayjain'
  url:'https://atom.io/packages/language-liquid'
  downloads:'49,413'
  stars:'87'
  selector:'p2'

},
{
  name:'Highlight-Selected'
  description:'The Highlight Selected package is super simple, it highlights the current word selected on double click. Especially useful if you’re looking for a particular method name or function within a file without having to open the find panel.'
  author:'richrace'
  url:'https://atom.io/packages/highlight-selected'
  downloads:'1,728,407'
  stars:'3054'
  selector:'p3'
}
];

function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector;

  this.getFormattedDownloads = function() {
    return this.downloads.toLocaleString();
  };

  this.getFormattedStars = function() {
    return this.stars.toLocaleString();
  };
}

function writePackageInfo(package) {
  var selector = package.selector,
  nameEl = document.getElementById(selector + '-name'),
  descEl = document.getElementById(selector + '-description');

  nameEl.textContent = package.name;
  descEl.textContent = package.description;
}

function init() {
  for (let i = 0; i < data.length; i++) {
    const package = data[i];
    writePackageInfo(package);
}

}

init();
