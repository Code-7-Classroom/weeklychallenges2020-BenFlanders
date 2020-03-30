loadAll();

function loadAll() {
  var x, i;
  x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "show");
  }
}

function check(){
  var checkApparel = document.getElementById('apparel').checked;
  var checkHats = document.getElementById('hats').checked;
  var checkAccessories = document.getElementById('accessories').checked;
  var checkLow = document.getElementById('low-cost').checked;
  var checkMedium = document.getElementById('medium-cost').checked;
  var checkHigh = document.getElementById('high-cost').checked;
  
  let categoryFilters = [];
  let costFilters = [];

  if (checkApparel) {
    categoryFilters.push('apparel');
  }
  if (checkHats) {
    categoryFilters.push('hats');
  }
  if (checkAccessories) {
    categoryFilters.push('accessories');
  }
  if (checkLow) {
    costFilters.push('low-cost');
  }
  if (checkMedium) {
    costFilters.push('medium-cost');
  }
  if (checkHigh) {
    costFilters.push('high-cost');
  }
  
  
  if (categoryFilters.length == 0 && costFilters.length == 0) {
    loadAll();
  } else {
    customFunction(categoryFilters, costFilters);
  }
  
}

function customFunction(categoryFilters, costFilters) {
  var x, i;
  x = document.getElementsByClassName("product");
  document.getElementById('no-results').style.display = 'none';

    if (categoryFilters.length == 0){
        categoryFilters.push('');
    }

  for (i = 0; i < x.length; i++) {
    let matchesFilter = false;
    w3RemoveClass(x[i], "show");
    //console.log(x[i].className);
    for (var filter in categoryFilters) {
      console.log(categoryFilters[filter]);
      if (costFilters.length > 0){
        for (var c in costFilters){
            console.log(costFilters[c]);
            if ((x[i].className.indexOf(categoryFilters[filter]) > -1) && (x[i].className.indexOf(costFilters[c]) > -1)){
                matchesFilter=true;
            }
        }
      } 
      else {
          if (x[i].className.indexOf(categoryFilters[filter]) > -1) matchesFilter=true;
    }

  }
    
    if (matchesFilter) {
      w3AddClass(x[i], "show");
      //console.log("Filter added to box #" + i);
    }
  }

  checkForNoMatches();
}


// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function checkForNoMatches(){
  var x = document.getElementsByClassName('show');
  if(x.length == 0){
    document.getElementById('no-results').style.display = 'block';
  }
}