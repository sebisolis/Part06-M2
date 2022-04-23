var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let found = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...found];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  
  if(selector[0] === "#") return "id";
  if(selector[0] === ".") return "class";
  if(selector.split(".").length === 2) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(element) {
     // Verificamos si [element] tiene el ID que pasé en el selector.
     return '#' + element.id === selector;
   }
  } else if (selectorType === "class") {
    matchFunction = function(element) {
      // Verificamos si [element] tiene la CLASE que pasé en el selector.
      let classes = element.classList;
      for (let i = 0; i < classes.length; i++) {
        if('.' + classes[i] === selector) {
          return true;
        };
      }
      return false;
    }    
  } else if (selectorType === "tag.class") {
    matchFunction = function(element) {
      // Verificamos si [element] tiene el TAG y la CLASE que pasé en el selector.
      let [t, c] = selector.split('.'); // ['tag', 'class']
      return matchFunctionMaker(t)(element) && matchFunctionMaker('.' + c)(element);
    }
  } else if (selectorType === "tag") {
    matchFunction = function(element) {
      // Verificamos si [element] tiene el TAG que pasé en el selector.
      return element.tagName === selector.toUpperCase();
    }    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

document.querySelector('#idOne'); // id
document.querySelector('.classOne'); // class one
document.querySelector('div'); // tag
document.querySelector('div.classOne'); // tag.class