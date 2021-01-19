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

//아래 화살 버튼
bardown.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector(".show"));
    brorItem(document.querySelector(".showDivItem"));
    e.currentTarget.classList.toggle("show");

    // const marker = e.currentTarget.querySelector(".marker");
    // marker.classList.toggle("hide");
    // console.log(e.currentTarget);
  });
});

//오른쪽 화살 버튼
itemRight.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector(".show"));
    brorItem(document.querySelector(".showDivItem"));
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

//삭제 버튼
var buttonDiv = document.querySelector(".buttonDelDiv");
buttonDiv.addEventListener("click", function (e) {
  var showItem = document.querySelector(".show");
  if (showItem) {
    if (showItem.classList.contains("topDivDefault")) {
      alert("기안자를 삭제할 수 없습니다.");
      return;
    }
    var deleteNode = findclassName(showItem, "subList");
    if (deleteNode) {
      //console.log(findclassName(showItem, "subList"));
      deleteNode.parentElement.removeChild(deleteNode);
    }
    //test.parentElement.remove(); IE11 안쓰면 이걸로 변경
    //test.parentElement.classList.add("show");
  }
  //showDivItem 삭제
  var showDivItem = document.querySelector(".showDivItem");
  if (showDivItem) {
    if (showDivItem.classList.contains("topDivDefault")) {
      alert("기안자를 삭제할 수 없습니다.");
      return;
    }
    var nodeParentElement = showDivItem.parentNode;
    nodeParentElement.removeChild(showDivItem);
    //subDiv 아래 subDivItem 갯수가 0일때
    console.log(nodeParentElement.querySelectorAll(".subDivItem").length);
    if (nodeParentElement.querySelectorAll(".subDivItem").length === 0) {
      //subList 삭제
      var deleteNodeItem = findclassName(nodeParentElement, "subList");
      if (deleteNodeItem) {
        deleteNodeItem.parentElement.removeChild(deleteNodeItem);
      }
    }
  }
});

//sel 혹은 sel1 클레스가 포함된 상위 객체를 탐색
function findclassName(el, sel, sel1) {
  //console.log(el.parentElement.classList.contains(sel));
  do {
    if (el.parentElement.classList.contains(sel, sel1)) return el.parentElement;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}

//개별 항목 subDivItem를 선택 할때
//나중에 동적으로 코딩을 할 때 아래 내용은 subDivItem을 생성할때 click
//이벤트를 생성 해야함
var subDivItem = document.querySelectorAll(".subDivItem");

subDivItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    brorItem(document.querySelector(".showDivItem"));
    bror(document.querySelector(".show"));
    e.currentTarget.classList.remove("subDivItem");
    item.classList.add("showDivItem");
  });
});

function brorItem(obj) {
  //console.log(obj);
  if (obj) {
    obj.classList.remove("showDivItem");
    obj.classList.add("subDivItem");
    //console.log(obj);
  }
}
