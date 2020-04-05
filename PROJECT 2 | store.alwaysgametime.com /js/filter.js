loadAll();

// Applies the 'show' class to each product element by default
function loadAll() {
  var x, i;
  x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    addClass(x[i], "show");
  }
}

// Gets the checked state of our checkboxes and determines which 'filter classes' to push into the arrays
function check() {
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

  // If no boxes are checked run 'loadAll' function. Otherwise pass filter arrays into 'filterFunction'.
  if (categoryFilters.length == 0 && costFilters.length == 0) {
    loadAll();
  } else {
    filterFunction(categoryFilters, costFilters);
  }

}

// Checks 'product' elements against filter arrays to determine which products should be showing.
function filterFunction(categoryFilters, costFilters) {
  var x, i;
  x = document.getElementsByClassName("product");
  document.getElementById('no-results').style.display = 'none';

  // Add empty string to categoryFilters array to detect all product elements.
  if (categoryFilters.length == 0) {
    categoryFilters.push('');
  }

  // Loops through 'product' elements
  for (i = 0; i < x.length; i++) {
    let matchesFilter = false;
    // removes show class for all products
    removeClass(x[i], "show");
    // Loops through 'categoryFilters'
    for (var filter in categoryFilters) {
      if (costFilters.length > 0) {
        // Loops through 'costFilters'
        for (var c in costFilters) {
          if ((x[i].className.indexOf(categoryFilters[filter]) > -1) && (x[i].className.indexOf(costFilters[c]) > -1)) {
            matchesFilter = true;
          }
        }
      }
      else {
        if (x[i].className.indexOf(categoryFilters[filter]) > -1) matchesFilter = true;
      }

    }

    if (matchesFilter) {
      addClass(x[i], "show");
    }
  }

  checkForNoMatches();
}


// Checks to see if 'name' is present on the element, applies 'name' if not present.
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Checks to see if 'name' is present on the element, removes 'name' if present.
function removeClass(element, name) {
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

// Applies block display styling to the 'no-results' element if there are no products with the 'show' class.
function checkForNoMatches() {
  var x = document.getElementsByClassName('show');
  if (x.length == 0) {
    document.getElementById('no-results').style.display = 'block';
  }
}