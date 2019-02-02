window.onscroll = function() {myFunction()};

// Get the header


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function onLoad() {
    /*(dropDowns[4]).onmouseover = function() {myMouseEnter1()};
    (dropDowns[4]).onmouseout = function() {myMouseLeave1()};
    (dropDowns[4].nextSibling.nextSibling).onmouseover = function() {myMouseEnter1()};
    (dropDowns[4].nextSibling.nextSibling).onmouseout = function() {myMouseLeave1()};
    (dropDowns[7]).onmouseover = function() {myMouseEnter2()};
    (dropDowns[7]).onmouseout = function() {myMouseLeave2()};
    (dropDowns[7].nextSibling.nextSibling).onmouseover = function() {myMouseEnter2()};
    (dropDowns[7].nextSibling.nextSibling).onmouseout = function() {myMouseLeave2()};*/
}
/*
function myMouseEnter1() {
    elements = document.getElementsByClassName("PsKE7e qV4dIc Qrrb5");
    element = elements[4];
    drop = element.nextSibling.nextSibling;
    drop.classList.add("FWGjId");
    drop.classList.add("jymhMd");
    drop.setAttribute("style", "display:block;");
}

function myMouseLeave1() {
    elements = document.getElementsByClassName("PsKE7e qV4dIc Qrrb5");
    element = elements[4];
    drop = element.nextSibling.nextSibling;
    drop.classList.remove("FWGjId");
    drop.classList.remove("jymhMd");
    drop.setAttribute("style", "display:none;");
}

function myMouseEnter2() {
    elements = document.getElementsByClassName("PsKE7e qV4dIc Qrrb5");
    element = elements[7];
    drop = element.nextSibling.nextSibling;
    drop.classList.add("FWGjId");
    drop.classList.add("jymhMd");
    drop.setAttribute("style", "display:block;");
}

function myMouseLeave2() {
    elements = document.getElementsByClassName("PsKE7e qV4dIc Qrrb5");
    element = elements[7];
    drop = element.nextSibling.nextSibling;
    drop.classList.remove("FWGjId");
    drop.classList.remove("jymhMd");
    drop.setAttribute("style", "display:none;");
}*/

function myFunction() {
    var header = document.getElementsByClassName("fktJzd AKpWA G9Qloe XeSM4")[0];
  if (window.pageYOffset > 56) {
    header.classList.remove("fOU46b");
  } else {
    header.classList.add("fOU46b");
  }
}