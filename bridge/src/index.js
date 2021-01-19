if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// function Members(
//   userid,
//   username,
//   userempno,
//   deptid,
//   deptname,
//   deptcode,
//   email,
//   jobtitle
// ) {
//   this.userid = userid;
//   this.username = username;
//   this.userempno = userempno;
//   this.deptid = deptid;
//   this.deptname = deptname;
//   this.deptcode = deptcode;
//   this.email = email;
//   this.jobtitle = jobtitle;
// }

// var bridgecont = document.getElementById("makeBridgeLine");

var bardown = document.querySelectorAll("#makeBridgeLine .bardown");
var itemRight = document.querySelectorAll("#makeBridgeLine .itemRight");

//아래 화살 버튼
bardown.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector("#makeBridgeLine .show"));
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
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
    bror(document.querySelector("#makeBridgeLine .show"));
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
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

function deleteBridgeNode() {
  //
  var showItem = document.querySelector("#makeBridgeLine .show");
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
  var showDivItem = document.querySelector("#makeBridgeLine .showDivItem");
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
}

var buttonDiv = document.querySelector(".buttonDelDiv");
buttonDiv.addEventListener("click", function (e) {
  deleteBridgeNode();
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
var subDivItem = document.querySelectorAll("#makeBridgeLine .subDivItem");

subDivItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
    bror(document.querySelector("#makeBridgeLine .show"));
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

// ========여기서 부터 추가 버튼으로 동적 생성
var buttonAddDiv = document.querySelector(".buttonAddDiv");

buttonAddDiv.addEventListener("click", function (e) {
  addBridgeNode();
});

function addBridgeNode() {
  //tt\
  //div.memberCheckBox > input[type='checkbox']:checked
  //memberCheckBox클레스를 가진 DIV안에 check되어진 checkbox input 을 가져옴
  var memberCheckBox = document.querySelectorAll(
    "div.memberCheckBox > input[type='checkbox']:checked"
  );
  //선택된 member가 없으면 리턴
  if (memberCheckBox.length === 0) return;
  //조직도 트리에서 수신자와 참조자는 여러명이 선택 가능 하기에
  //결재선에서 우선 여러개 선택으로 받고 하나 이상인 경우 리턴
  if (memberCheckBox.length > 1) {
    alert("하나만 선택 하세요.");
    return;
  }
  var paramValue = memberCheckBox[0].value;

  var selectArrow = document.querySelector("#makeBridgeLine .show");
  if (!selectArrow) return;
  //아래 화살일 경우
  if (selectArrow.classList.contains("bardown")) {
    //
    var beforNode = findclassName(selectArrow, "subList");
    if (beforNode) {
      var addNode = makeSubList(paramValue);
      beforNode.parentNode.insertBefore(addNode, beforNode.nextSibling);
      console.log(addNode);
    }
  }
  //오른쪽 화살일 경우
  if (selectArrow.classList.contains("itemRight")) {
    var addNodeItem = makeSubDivItem(paramValue);
    selectArrow.parentNode.insertBefore(addNodeItem, selectArrow);
    console.log(selectArrow);
    // var beforNodechild = findclassName(selectArrow, "subDivItem");
    // if (beforNodechild) {
    //   var addNodeItem = makeSubDivItem(paramValue);
    //   beforNodechild.parentNode.insertBefore(
    //     addNodeItem,
    //     beforNodechild.nextSibling
    //   );
    //   console.log(addNodeItem);
    // }
  }

  console.log(memberCheckBox);
}

function makeSubList(paramValue) {
  //subList 생성
  var reMakeSubList = document.createElement("div");
  reMakeSubList.classList.add("subList");

  var reMakeBardown = document.createElement("div");
  reMakeBardown.classList.add("bardown");
  reMakeBardown.innerText = "▼";
  reMakeBardown.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector("#makeBridgeLine .show"));
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
    e.currentTarget.classList.toggle("show");

    // const marker = e.currentTarget.querySelector(".marker");
    // marker.classList.toggle("hide");
    // console.log(e.currentTarget);
  });

  var reMakeSubDiv = document.createElement("div");
  reMakeSubDiv.classList.add("subDiv");

  var reMakeSubDivItem = makeSubDivItem(paramValue);
  reMakeSubDiv.appendChild(reMakeSubDivItem);

  var reMakeItemRight = document.createElement("div");
  reMakeItemRight.classList.add("itemRight");
  reMakeItemRight.innerText = "▶";
  reMakeItemRight.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector("#makeBridgeLine .show"));
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
    e.currentTarget.classList.toggle("show");
    // const marker = e.currentTarget.querySelector(".marker");
    // marker.classList.toggle("hide");
    // console.log(e.currentTarget);
  });

  reMakeSubDiv.appendChild(reMakeItemRight);

  reMakeSubList.appendChild(reMakeSubDiv);
  reMakeSubList.appendChild(reMakeBardown);

  return reMakeSubList;
}

function makeSubDivItem(paramValue) {
  //
  var reMakeSubDiv = document.createElement("div");
  reMakeSubDiv.classList.add("subDivItem");
  reMakeSubDiv.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
    bror(document.querySelector("#makeBridgeLine .show"));
    e.currentTarget.classList.remove("subDivItem");
    reMakeSubDiv.classList.add("showDivItem");
  });

  return reMakeSubDiv;
}

