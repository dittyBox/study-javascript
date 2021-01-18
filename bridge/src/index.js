if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function Members(
  userid,
  username,
  userempno,
  deptid,
  deptname,
  deptcode,
  email,
  jobtitle
) {
  this.userid = userid;
  this.username = username;
  this.userempno = userempno;
  this.deptid = deptid;
  this.deptname = deptname;
  this.deptcode = deptcode;
  this.email = email;
  this.jobtitle = jobtitle;
}

var bridgecont = document.getElementById("app");

var bardown = document.querySelectorAll(".bardown");
var itemRight = document.querySelectorAll(".itemRight");

bardown.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector(".show"));
    e.currentTarget.classList.toggle("show");

    // const marker = e.currentTarget.querySelector(".marker");
    // marker.classList.toggle("hide");
    // console.log(e.currentTarget);
  });
});

itemRight.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector(".show"));
    e.currentTarget.classList.toggle("show");

    // const marker = e.currentTarget.querySelector(".marker");
    // marker.classList.toggle("hide");
    // console.log(e.currentTarget);
  });
});

function bror(obj) {
  if (obj) {
    obj.classList.remove("show");
    //console.log(obj);
  }
}

var buttonDiv = document.querySelector(".buttonDelDiv");

buttonDiv.addEventListener("click", function (e) {
  var test = document.querySelector(".show");
  if (test) {
    console.log(test);
  }
});
