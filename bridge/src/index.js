if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var members = [];
var membersRef = [];
var membersRec = [];
var subDivItemIndex = 0;

membersRef = [
  "0~|1~|윤수용~|과장~|부서팀~|sooyong.youn",
  "1~|3~|부서시스템~|부서명~|부서시스템~|555555",
  "2~|4~|부서도움방~|부서명~|부서도움방~|1111111"
];

membersRec = [
  "0~|2~|윤수용~|과장~|부서팀~|sooyong.youn",
  "1~|5~|부서시스템~|부서명~|부서시스템~|555555",
  "1~|5~|부서기획~|부서명~|부서기획~|222222",
  "2~|6~|부서도움방~|부서명~|부서도움방~|1111111"
];

members = [["0~|0~|윤수용~|과장~|부서시스템~|sooyong.youn"]];

members = [
  ["0~|0~|윤수용~|과장~|부서시스템~|sooyong.youn"],
  ["1~|1~|윤수용~|과장~|부서2팀~|sooyong.youn"],
  [
    "2~|1~|윤수용~|과장~|부서팀~|sooyong.youn",
    "2~|2~|윤수용~|과장~|부서시스템~|sooyong.youn",
    "2~|1~|윤수용~|과장~|부서2팀~|sooyong.youn"
  ],
  [
    "3~|1~|윤수용~|과장~|부서1팀~|sooyong.youn",
    "3~|1~|윤수용~|과장~|부서2팀~|sooyong.youn"
  ]
];

addDataToBridgeNodes(members);
CreatAppLine(members);
setRefLists(membersRef);
setRecLists(membersRec);
CreatRefLine(membersRef);
CreatRecLine(membersRec);

//기본 셋팅으로 결재창은 보이고 참조수신창은 안보이게
var bridgecont = document.getElementById("makeBridgeLine");
var makeBridgeRefcLine = document.getElementById("makeBridgeRefcLine");
bridgecont.classList.remove("displayNone");
makeBridgeRefcLine.classList.add("displayNone");

//기본 셋팅으로 결재 버튼 보이고 참조수신 버튼 안보이게
var buttonAddDiv = document.querySelector(".buttonAddDiv");
var buttonDelDiv = document.querySelector(".buttonDelDiv");
buttonAddDiv.classList.remove("displayNone");
buttonDelDiv.classList.remove("displayNone");

var buttonAddRefDiv = document.querySelector(".buttonAddRefDiv");
var buttonDelRefDiv = document.querySelector(".buttonDelRefDiv");
var buttonAddRecDiv = document.querySelector(".buttonAddRecDiv");
var buttonDelRecDiv = document.querySelector(".buttonDelRecDiv");
buttonAddRefDiv.classList.add("displayNone");
buttonDelRefDiv.classList.add("displayNone");
buttonAddRecDiv.classList.add("displayNone");
buttonDelRecDiv.classList.add("displayNone");

//결재 와 참조/수신 버튼 토글
var appViewLi = document.querySelector(".bridgeMemberViewUl #appViewLi");
var refiewLi = document.querySelector(".bridgeMemberViewUl #refiewLi");

appViewLi.addEventListener("click", function (e) {
  //결재창 보이기
  appViewLi.classList.add("bridgeMemberViewActive");
  refiewLi.classList.remove("bridgeMemberViewActive");

  makeBridgeRefcLine.classList.add("displayNone");
  bridgecont.classList.remove("displayNone");

  buttonAddDiv.classList.remove("displayNone");
  buttonDelDiv.classList.remove("displayNone");
  buttonAddRefDiv.classList.add("displayNone");
  buttonDelRefDiv.classList.add("displayNone");
  buttonAddRecDiv.classList.add("displayNone");
  buttonDelRecDiv.classList.add("displayNone");
  //console.log(e.currentTarget);
});

refiewLi.addEventListener("click", function (e) {
  //참조수신창 보이기
  refiewLi.classList.add("bridgeMemberViewActive");
  appViewLi.classList.remove("bridgeMemberViewActive");

  bridgecont.classList.add("displayNone");
  makeBridgeRefcLine.classList.remove("displayNone");

  buttonAddDiv.classList.add("displayNone");
  buttonDelDiv.classList.add("displayNone");
  buttonAddRefDiv.classList.remove("displayNone");
  buttonDelRefDiv.classList.remove("displayNone");
  buttonAddRecDiv.classList.remove("displayNone");
  buttonDelRecDiv.classList.remove("displayNone");
  //console.log(bridgecont);
});

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
    //console.log(nodeParentElement.querySelectorAll(".subDivItem").length);
    if (nodeParentElement.querySelectorAll(".subDivItem").length === 0) {
      //subList 삭제
      var deleteNodeItem = findclassName(nodeParentElement, "subList");
      if (deleteNodeItem) {
        deleteNodeItem.parentElement.removeChild(deleteNodeItem);
      }
    }
  }
  //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
  viewWidthEdit();
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
    "div.memberCheckBox > input[type='radio']:checked"
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
  if (!selectArrow) {
    //어느것도 선택이 안된 경우 가장 아래에 추가
    var makeBridgeLine = document.querySelector("#makeBridgeLine");
    var addNode = makeSubList(paramValue);
    makeBridgeLine.appendChild(addNode);
    //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
    viewWidthEdit();
    return;
  }

  //!!!!!아직 안함
  //!!!!! 가지고 온 데이터의 임직원이 이미 포함되어 있으면 경고창을 띄운다. 진행 or stop

  //아래 화살일 경우
  if (selectArrow.classList.contains("bardown")) {
    //
    var beforNode = findclassName(selectArrow, "subList");
    if (beforNode) {
      var addNode = makeSubList(paramValue);
      beforNode.parentNode.insertBefore(addNode, beforNode.nextSibling);
      //console.log(addNode);
      //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
      viewWidthEdit();
      return;
    }
  }
  //오른쪽 화살일 경우
  if (selectArrow.classList.contains("itemRight")) {
    var addNodeItem = makeSubDivItem(paramValue);
    selectArrow.parentNode.insertBefore(addNodeItem, selectArrow);
    //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
    viewWidthEdit();
    return;
  }

  //console.log(memberCheckBox);
}

//makeBridgeLine 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
function viewWidthEdit() {
  var nodeSubDiv = document.querySelectorAll("#makeBridgeLine .subDiv");
  var maxWidth = 0;
  //가장 긴 노드maxWidth 가져온다.
  nodeSubDiv.forEach(function (item) {
    var itemNodeChild = item.querySelectorAll(".subDivItem");
    var nodeMaxWidth = 0;
    itemNodeChild.forEach(function (item) {
      var itemNodeWidth = item.scrollWidth;
      nodeMaxWidth += itemNodeWidth + 10;
    });
    maxWidth = maxWidth > nodeMaxWidth ? maxWidth : nodeMaxWidth;
  });
  //console.log("maxWidth : ", maxWidth);
  //모든 subList 값을 가장 긴 노드값으로 변경한다.
  console.log(maxWidth);
  maxWidth = maxWidth < 420 ? 400 : maxWidth;
  var nodeSubList = document.querySelectorAll("#makeBridgeLine .subList");
  nodeSubList.forEach(function (item) {
    item.style.width = maxWidth + "px";
  });
}
function makeDragSubList(dragEl) {
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

  reMakeBardown.addEventListener("dragover", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
  });

  reMakeBardown.addEventListener("dragenter", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.add("dragoverActive");
  });

  reMakeBardown.addEventListener("dragleave", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.remove("dragoverActive");
  });

  reMakeBardown.addEventListener("drop", function (evEl) {
    evEl.preventDefault();
    evEl.currentTarget.classList.remove("dragoverActive");

    var dragTargetId = evEl.dataTransfer.getData("text");
    var dragTarget = document.getElementById(dragTargetId);

    if (dragTarget.id === evEl.currentTarget.id) return;
    var delPnode = findclassName(dragTarget, "subList");

    var beforNode = findclassName(evEl.currentTarget, "subList");
    if (beforNode) {
      var addNode = makeDragSubList(dragTarget);
      beforNode.parentNode.insertBefore(addNode, beforNode.nextSibling);
    }

    if (delPnode.querySelectorAll(".subDivItem").length === 0) {
      delPnode.parentNode.removeChild(delPnode);
    }
    //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
    viewWidthEdit();
  });

  var reMakeSubDiv = document.createElement("div");
  reMakeSubDiv.classList.add("subDiv");

  reMakeSubDiv.appendChild(dragEl);

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
  // 드래그 객체가 여기 위로 올때
  reMakeItemRight.addEventListener("dragover", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
  });
  // 드래그 객체가 여기 위로 올때
  reMakeItemRight.addEventListener("dragenter", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    evEl.currentTarget.classList.add("dragoverActive");
  });
  // 드래그 객체가 여기 위를 벗어 날때
  reMakeItemRight.addEventListener("dragleave", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.remove("dragoverActive");
  });
  // Drop
  reMakeItemRight.addEventListener("drop", function (evEl) {
    evEl.preventDefault();
    evEl.currentTarget.classList.remove("dragoverActive");

    var dragTargetId = evEl.dataTransfer.getData("text");
    var dragTarget = document.getElementById(dragTargetId);

    if (dragTarget.id === evEl.currentTarget.id) return;
    var delPnode = findclassName(dragTarget, "subList");

    evEl.currentTarget.parentNode.insertBefore(dragTarget, evEl.currentTarget);

    if (delPnode.querySelectorAll(".subDivItem").length === 0) {
      delPnode.parentNode.removeChild(delPnode);
    }
  });

  reMakeSubDiv.appendChild(reMakeItemRight);

  reMakeSubList.appendChild(reMakeSubDiv);
  reMakeSubList.appendChild(reMakeBardown);

  return reMakeSubList;
}

function makeSubList(paramValue, types) {
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

  reMakeBardown.addEventListener("dragover", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
  });

  reMakeBardown.addEventListener("dragenter", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.add("dragoverActive");
  });

  reMakeBardown.addEventListener("dragleave", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.remove("dragoverActive");
  });

  reMakeBardown.addEventListener("drop", function (evEl) {
    evEl.preventDefault();
    evEl.currentTarget.classList.remove("dragoverActive");

    var dragTargetId = evEl.dataTransfer.getData("text");
    var dragTarget = document.getElementById(dragTargetId);

    if (dragTarget.id === evEl.currentTarget.id) return;
    var delPnode = findclassName(dragTarget, "subList");

    var beforNode = findclassName(evEl.currentTarget, "subList");
    if (beforNode) {
      var addNode = makeDragSubList(dragTarget);
      beforNode.parentNode.insertBefore(addNode, beforNode.nextSibling);
    }

    if (delPnode.querySelectorAll(".subDivItem").length === 0) {
      delPnode.parentNode.removeChild(delPnode);
    }
    //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
    viewWidthEdit();
  });

  var reMakeSubDiv = document.createElement("div");
  reMakeSubDiv.classList.add("subDiv");

  var reMakeSubDivItem = makeSubDivItem(paramValue, types);
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
  // 드래그 객체가 여기 위로 올때
  reMakeItemRight.addEventListener("dragover", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
  });
  // 드래그 객체가 여기 위로 올때
  reMakeItemRight.addEventListener("dragenter", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    evEl.currentTarget.classList.add("dragoverActive");
  });
  // 드래그 객체가 여기 위를 벗어 날때
  reMakeItemRight.addEventListener("dragleave", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.remove("dragoverActive");
  });
  // Drop
  reMakeItemRight.addEventListener("drop", function (evEl) {
    evEl.preventDefault();
    evEl.currentTarget.classList.remove("dragoverActive");

    var dragTargetId = evEl.dataTransfer.getData("text");
    var dragTarget = document.getElementById(dragTargetId);

    if (dragTarget.id === evEl.currentTarget.id) return;
    var delPnode = findclassName(dragTarget, "subList");

    evEl.currentTarget.parentNode.insertBefore(dragTarget, evEl.currentTarget);

    if (delPnode.querySelectorAll(".subDivItem").length === 0) {
      delPnode.parentNode.removeChild(delPnode);
    }
  });

  reMakeSubDiv.appendChild(reMakeItemRight);

  reMakeSubList.appendChild(reMakeSubDiv);
  reMakeSubList.appendChild(reMakeBardown);

  return reMakeSubList;
}

function makeSubDivItem(paramValue, type) {
  //
  var reMakeSubDiv = document.createElement("div");
  reMakeSubDiv.classList.add("subDivItem");
  reMakeSubDiv.setAttribute("draggable", "true");
  reMakeSubDiv.setAttribute("id", "suDivItem" + subDivItemIndex);
  console.log(subDivItemIndex);
  subDivItemIndex++;
  reMakeSubDiv.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
    bror(document.querySelector("#makeBridgeLine .show"));
    e.currentTarget.classList.remove("subDivItem");
    reMakeSubDiv.classList.add("showDivItem");
  });
  //항목의 드래그 시작
  reMakeSubDiv.addEventListener("dragstart", function (evEl) {
    //console.log(evEl.target);
    //console.log(evEl.currentTarget);
    evEl.dataTransfer.setData("text", evEl.target.id);
    evEl.dataTransfer.dropEffect = "move";
  });
  // 드래그 객체가 여기 위로 올때
  reMakeSubDiv.addEventListener("dragover", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
  });
  // 드래그 객체가 여기 위로 올때
  reMakeSubDiv.addEventListener("dragenter", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    evEl.currentTarget.classList.add("dragoverActive");
  });
  // 드래그 객체가 여기 위를 벗어 날때
  reMakeSubDiv.addEventListener("dragleave", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.remove("dragoverActive");
  });
  // Drop
  reMakeSubDiv.addEventListener("drop", function (evEl) {
    evEl.preventDefault();
    evEl.currentTarget.classList.remove("dragoverActive");

    var dragTargetId = evEl.dataTransfer.getData("text");
    var dragTarget = document.getElementById(dragTargetId);

    if (dragTarget.id === evEl.currentTarget.id) return;
    var delPnode = findclassName(dragTarget, "subList");

    evEl.currentTarget.parentNode.insertBefore(dragTarget, evEl.currentTarget);

    if (delPnode.querySelectorAll(".subDivItem").length === 0) {
      delPnode.parentNode.removeChild(delPnode);
    }
  });

  var reMakeItemHead = document.createElement("div");
  reMakeItemHead.classList.add("itemHead");
  reMakeItemHead.classList.add("defaultFontSet");

  var reMakeSelect = document.createElement("select");
  reMakeSelect.classList.add("itemSelect");
  reMakeSelect[0] = new Option(
    "일반결재",
    "1",
    false,
    type === "1" ? true : false
  );
  reMakeSelect[1] = new Option(
    "협조결재",
    "2",
    false,
    type === "2" ? true : false
  );
  reMakeItemHead.appendChild(reMakeSelect);

  var reMakeItemBody = document.createElement("div");
  reMakeItemBody.classList.add("itemBody");
  reMakeItemBody.classList.add("defaultFontSet");

  var reMakeItemBodyDept = document.createElement("div");
  var reMakeItemBodyMember = document.createElement("div");
  reMakeItemBodyMember.classList.add("bfont");

  //받아온 paramValue 내용 뿌림
  //창원1사업장체계기술1팀|윤수용|과장
  //console.log(paramValue.split("|")[0]);
  reMakeItemBodyDept.innerText = paramValue.split("~|")[2];
  reMakeItemBodyMember.innerText =
    paramValue.split("~|")[0] + "(" + paramValue.split("~|")[1] + ")";

  reMakeItemBody.appendChild(reMakeItemBodyDept);
  reMakeItemBody.appendChild(reMakeItemBodyMember);

  var reMakeHiddenMembers = document.createElement("div");
  var reMakeInput = document.createElement("input");
  reMakeInput.classList.add("hiddenMembers");
  reMakeInput.setAttribute("type", "hidden");
  reMakeInput.setAttribute("value", paramValue);
  reMakeHiddenMembers.appendChild(reMakeInput);

  reMakeItemBody.appendChild(reMakeHiddenMembers);

  reMakeSubDiv.appendChild(reMakeItemHead);
  reMakeSubDiv.appendChild(reMakeItemBody);

  return reMakeSubDiv;
}

//데이터 뽑기 버튼
var buttonMakedataDiv = document.querySelector(".buttonMakedataDiv");
buttonMakedataDiv.addEventListener("click", function () {
  //결재 노드 뽑기
  returnBridgelineData();
  //참조 노드 뽑기
  getRefList();
  //수신 노드 뽑기
  getRecList();
  //참조 테이블형식으로
  CreatRefLine(membersRef);
  //수신 테이블형식으로
  CreatRecLine(membersRec);
});

//데이터 뽑기 버튼
var buttonMakeDiv = document.querySelector(".buttonMakeDiv");
buttonMakeDiv.addEventListener("click", function () {
  addDataToBridgeNodes(members);
  CreatAppLine(members);
  //참조 테이블형식으로
  CreatRefLine(membersRef);
  //수신 테이블형식으로
  CreatRecLine(membersRec);
});

//기안자 만들기
function addFirstNode(subList, el) {
  //
  var memberItemSlit = el.split("~|");
  //기안자 라인 셋팅

  var subDiv = document.createElement("div");
  subDiv.classList.add("subDiv");
  subDiv.classList.add("topDivDefault");
  subDiv.classList.add("bridgeTop");

  var subDivItem = document.createElement("div");
  subDivItem.classList.add("subDivItem");
  subDivItem.classList.add("topDivDefault");
  subDivItem.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
    bror(document.querySelector("#makeBridgeLine .show"));
    e.currentTarget.classList.remove("subDivItem");
    e.currentTarget.classList.add("showDivItem");
  });

  var itemHead = document.createElement("div");
  itemHead.classList.add("itemHead");
  itemHead.classList.add("defaultFontSet");

  var itemSelect = document.createElement("select");
  itemSelect.classList.add("itemSelect");
  itemSelect[0] = new Option("기안자", "0", false, true);

  itemHead.appendChild(itemSelect);

  var itemBody = document.createElement("div");
  itemBody.classList.add("itemBody");
  itemBody.classList.add("defaultFontSet");

  var subitemDivDept = document.createElement("div");
  subitemDivDept.innerText = memberItemSlit[2];
  var subitemDivName = document.createElement("div");
  subitemDivName.classList.add("bfont");
  subitemDivName.innerText = memberItemSlit[0] + "(" + memberItemSlit[1] + ")";
  var subitemDivData = document.createElement("div");
  var hiddenMembers = document.createElement("input");
  hiddenMembers.classList.add("hiddenMembers");
  hiddenMembers.setAttribute("type", "hidden");
  hiddenMembers.setAttribute("value", el);
  subitemDivData.appendChild(hiddenMembers);

  itemBody.appendChild(subitemDivDept);
  itemBody.appendChild(subitemDivName);
  itemBody.appendChild(subitemDivData);

  subDivItem.appendChild(itemHead);
  subDivItem.appendChild(itemBody);

  subDiv.appendChild(subDivItem);

  var bardown = document.createElement("div");
  bardown.classList.add("bardown");
  bardown.classList.add("topDivDefault");
  bardown.innerText = "▼";
  bardown.addEventListener("click", function (e) {
    // const dropdown = e.currentTarget.parentNode.querySelector(".dropdown");
    // dropdown.classList.toggle("show");
    bror(document.querySelector("#makeBridgeLine .show"));
    brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
    e.currentTarget.classList.toggle("show");

    // const marker = e.currentTarget.querySelector(".marker");
    // marker.classList.toggle("hides");
    // console.log(e.currentTarget);d
  });

  bardown.addEventListener("dragover", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
  });

  bardown.addEventListener("dragenter", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.add("dragoverActive");
  });

  bardown.addEventListener("dragleave", function (evEl) {
    //console.log(evEl.currentTarget);
    evEl.preventDefault();
    //console.log(evEl.target);
    evEl.currentTarget.classList.remove("dragoverActive");
  });

  bardown.addEventListener("drop", function (evEl) {
    evEl.preventDefault();
    evEl.currentTarget.classList.remove("dragoverActive");

    var dragTargetId = evEl.dataTransfer.getData("text");
    var dragTarget = document.getElementById(dragTargetId);

    if (dragTarget.id === evEl.currentTarget.id) return;
    var delPnode = findclassName(dragTarget, "subList");

    var beforNode = findclassName(evEl.currentTarget, "subList");
    if (beforNode) {
      var addNode = makeDragSubList(dragTarget);
      beforNode.parentNode.insertBefore(addNode, beforNode.nextSibling);
    }

    if (delPnode.querySelectorAll(".subDivItem").length === 0) {
      delPnode.parentNode.removeChild(delPnode);
    }
    //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
    viewWidthEdit();
  });

  subList.appendChild(subDiv);
  subList.appendChild(bardown);

  return subList;
}

function addDataToBridgeNodes(el) {
  //
  var makeBridgeLine = document.getElementById("makeBridgeLine");
  makeBridgeLine.innerHTML = "";

  el.forEach(function (item, index) {
    //d
    var subList = document.createElement("div");
    subList.classList.add("subList");

    item.forEach(function (itemSub, indexSub) {
      //
      //console.log("indexSub : ", indexSub);
      var memberItemSlit = itemSub.split("~|");
      var paramValue =
        memberItemSlit[2] +
        "~|" +
        memberItemSlit[3] +
        "~|" +
        memberItemSlit[4] +
        "~|" +
        memberItemSlit[5];

      if (memberItemSlit[1] === "0") {
        makeBridgeLine.appendChild(addFirstNode(subList, paramValue));
      } else if (indexSub === 0) {
        subList = makeSubList(paramValue, memberItemSlit[1]);
      } else {
        var arr = subList.querySelector(".itemRight");
        var addNodeItem = makeSubDivItem(paramValue, memberItemSlit[1]);
        arr.parentNode.insertBefore(addNodeItem, arr);
      }
    });
    makeBridgeLine.appendChild(subList);
  });
  //해당 결재라인의 갯수만큼 width을 늘이거나 줄여야 한다.
  viewWidthEdit();
}

//생성된 노드들의 데이터를 뽑는다.
function returnBridgelineData() {
  brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
  bror(document.querySelector("#makeBridgeLine .show"));

  var returnData = "";
  var makeBridgeLine = document.querySelectorAll("#makeBridgeLine .subList");

  //members 초기화
  members = [];

  makeBridgeLine.forEach(function (item, index) {
    //
    var memberMake = [];

    var itemSubDivItem = item.querySelectorAll(".subDivItem");
    itemSubDivItem.forEach(function (subItem) {
      var itemHeadSelectType = subItem.querySelector(".itemSelect");
      var hiddenMembers = subItem.querySelector(".hiddenMembers");
      memberMake.push(
        index + "~|" + itemHeadSelectType.value + "~|" + hiddenMembers.value
      );
    });
    members.push(memberMake);
  });
  //console.log(members);
  CreatAppLine(members);
  return returnData;
}

//테이블 형식 결재라인 셋팅
function CreatAppLine(el) {
  brorItem(document.querySelector("#makeBridgeLine .showDivItem"));
  bror(document.querySelector("#makeBridgeLine .show"));

  //bridgeViewLine 최상위 가져옴
  var bridgeViewLine = document.getElementById("bridgeViewLine");
  bridgeViewLine.innerText = "";
  //결재 라인 셋팅
  var bridgeAppLine = document.createElement("div");
  bridgeAppLine.classList.add("bridgeAppLine");

  el.forEach(function (item) {
    //bridgeAppLineNode
    var bridgeAppLineNode = document.createElement("div");
    bridgeAppLineNode.classList.add("bridgeAppLineNode");

    item.forEach(function (itemSub) {
      //
      var memberItemSlit = itemSub.split("~|");

      var bridgeAppLineItem = document.createElement("div");
      bridgeAppLineItem.classList.add("bridgeAppLineItem");

      var bridgeAppLineItemType = document.createElement("div");
      bridgeAppLineItemType.classList.add("bridgeAppLineItemType");
      bridgeAppLineItemType.classList.add("bridgeNomalFont");
      bridgeAppLineItemType.classList.add("bridgeBoldFont");
      bridgeAppLineItemType.innerText = returnBridgeType(memberItemSlit[1]);

      var bridgeAppLineItemName = document.createElement("div");
      bridgeAppLineItemName.classList.add("bridgeAppLineItemName");
      bridgeAppLineItemName.classList.add("bridgeNomalFont");
      bridgeAppLineItemName.innerText = memberItemSlit[2];

      var bridgeAppLineItemPosition = document.createElement("div");
      bridgeAppLineItemPosition.classList.add("bridgeAppLineItemPosition");
      bridgeAppLineItemPosition.classList.add("bridgeNomalFont");
      bridgeAppLineItemPosition.innerText = memberItemSlit[3];

      var bridgeAppLineItemDept = document.createElement("div");
      bridgeAppLineItemDept.classList.add("bridgeAppLineItemDept");
      bridgeAppLineItemDept.classList.add("bridgeNomalFont");
      bridgeAppLineItemDept.innerText = memberItemSlit[4];

      bridgeAppLineItem.appendChild(bridgeAppLineItemType);
      bridgeAppLineItem.appendChild(bridgeAppLineItemName);
      bridgeAppLineItem.appendChild(bridgeAppLineItemPosition);
      bridgeAppLineItem.appendChild(bridgeAppLineItemDept);

      bridgeAppLineNode.appendChild(bridgeAppLineItem);
      //console.log(itemSub);
    });
    bridgeAppLine.appendChild(bridgeAppLineNode);
  });
  bridgeViewLine.appendChild(bridgeAppLine);
}

//결재 타입 지정
function returnBridgeType(typeCode) {
  //console.log(typeCode);
  var returnStr = "";
  switch (typeCode) {
    case "0":
      returnStr = "기안";
      break;
    case "1":
      returnStr = "일반결재";
      break;
    case "2":
      returnStr = "협조결재";
      break;
    default:
      // 모든 CASE에 부합하지 않을때 실행할 명령문
      returnStr = "Err";
      break;
  }
  return returnStr;
}

//테이블 형식 참조 셋팅
function CreatRefLine(el) {
  //
  //bridgeViewLine 최상위 가져옴
  var bridgeViewLine = document.getElementById("bridgeViewLine");
  //결재 참조 셋팅
  var bridgeRefLineNode = document.createElement("div");
  bridgeRefLineNode.classList.add("bridgeRefLineNode");

  //결재 참조 셋팅
  var bridgeRefLineItemHeader = document.createElement("div");
  bridgeRefLineItemHeader.classList.add("bridgeRefLineItemHeader");
  bridgeRefLineItemHeader.classList.add("bridgeNomalFont");
  bridgeRefLineItemHeader.classList.add("bridgeBoldFont");
  bridgeRefLineItemHeader.innerText = "참조";

  bridgeRefLineNode.appendChild(bridgeRefLineItemHeader);

  //bridgeRefLineItemBody
  var bridgeRefLineItemBody = document.createElement("div");
  bridgeRefLineItemBody.classList.add("bridgeRefLineItemBody");
  //bridgeRefLineItems
  var bridgeRefLineItems = document.createElement("div");
  bridgeRefLineItems.classList.add("bridgeRefLineItems");

  el.forEach(function (item, index) {
    var memberItemSlit = item.split("~|");


    var bridgeRefLineItem = document.createElement("div");
    bridgeRefLineItem.classList.add("bridgeRefLineItem");
    bridgeRefLineItem.classList.add("bridgeNomalFont");
    if (memberItemSlit[1] === "1") {
      bridgeRefLineItem.innerText =
        memberItemSlit[2] + "(" + memberItemSlit[4] + ")";
    } else if (memberItemSlit[1] === "3") {
      bridgeRefLineItem.innerText = memberItemSlit[2] + " 및 하위부서";
    } else if (memberItemSlit[1] === "4") {
      bridgeRefLineItem.innerText = memberItemSlit[2];
    }

    bridgeRefLineItems.appendChild(bridgeRefLineItem);

    //bridgeRefLineItemComma
    var bridgeRefLineItemComma = document.createElement("div");
    bridgeRefLineItemComma.classList.add("bridgeRefLineItemComma");
    bridgeRefLineItemComma.classList.add("bridgeNomalFont");
    bridgeRefLineItemComma.innerText = ",";
    if (index !== 0) {
      bridgeRefLineItem.parentNode.insertBefore(
        bridgeRefLineItemComma,
        bridgeRefLineItem
      );
    }
  });
  bridgeRefLineItemBody.appendChild(bridgeRefLineItems);
  bridgeRefLineNode.appendChild(bridgeRefLineItemBody);
  bridgeViewLine.appendChild(bridgeRefLineNode);
}

//테이블 형식 수신 셋팅
function CreatRecLine(el) {
  //
  //
  //bridgeViewLine 최상위 가져옴
  var bridgeViewLine = document.getElementById("bridgeViewLine");
  //결재 참조 셋팅
  var bridgeRecLineNode = document.createElement("div");
  bridgeRecLineNode.classList.add("bridgeRecLineNode");

  //결재 참조 셋팅
  var bridgeRecLineItemHeader = document.createElement("div");
  bridgeRecLineItemHeader.classList.add("bridgeRecLineItemHeader");
  bridgeRecLineItemHeader.classList.add("bridgeNomalFont");
  bridgeRecLineItemHeader.classList.add("bridgeBoldFont");
  bridgeRecLineItemHeader.innerText = "수신";

  bridgeRecLineNode.appendChild(bridgeRecLineItemHeader);

  //bridgeRecLineItemBody
  var bridgeRecLineItemBody = document.createElement("div");
  bridgeRecLineItemBody.classList.add("bridgeRecLineItemBody");
  //bridgeRecLineItems
  var bridgeRecLineItems = document.createElement("div");
  bridgeRecLineItems.classList.add("bridgeRecLineItems");

  el.forEach(function (item, index) {
    var memberItemSlit = item.split("~|");


    var bridgeRecLineItem = document.createElement("div");
    bridgeRecLineItem.classList.add("bridgeRecLineItem");
    bridgeRecLineItem.classList.add("bridgeNomalFont");
    if (memberItemSlit[1] === "2") {
      bridgeRecLineItem.innerText =
        memberItemSlit[2] + "(" + memberItemSlit[4] + ")";
    } else if (memberItemSlit[1] === "5") {
      bridgeRecLineItem.innerText = memberItemSlit[2] + " 및 하위부서";
    } else if (memberItemSlit[1] === "6") {
      bridgeRecLineItem.innerText = memberItemSlit[2];
    }

    bridgeRecLineItems.appendChild(bridgeRecLineItem);

    //bridgeRecLineItemComma
    var bridgeRecLineItemComma = document.createElement("div");
    bridgeRecLineItemComma.classList.add("bridgeRecLineItemComma");
    bridgeRecLineItemComma.classList.add("bridgeNomalFont");
    bridgeRecLineItemComma.innerText = ",";
    if (index !== 0) {
      bridgeRecLineItem.parentNode.insertBefore(
        bridgeRecLineItemComma,
        bridgeRecLineItem
      );
    }
  });
  bridgeRecLineItemBody.appendChild(bridgeRecLineItems);
  bridgeRecLineNode.appendChild(bridgeRecLineItemBody);
  bridgeViewLine.appendChild(bridgeRecLineNode);
}

//참조 추가
var buttonAddRefDiv = document.querySelector(".buttonAddRefDiv");
buttonAddRefDiv.addEventListener("click", function () {
  //
  addRefLists();
});

function addRefLists() {
  //div.memberCheckBox > input[type='checkbox']:checked
  //memberCheckBox클레스를 가진 DIV안에 check되어진 checkbox input 을 가져옴
  var memberCheckBox = document.querySelector(
    "div.memberCheckBox > input[type='radio']:checked"
  );
  if (!memberCheckBox) return;
  var paramValue = memberCheckBox.value;
  addRefList(paramValue);
}

function addRefList(el, arrType) {
  //
  var refMemberplit = el.split("~|");
  //부서일경우 true를 반환
  var typeEl = checkDeptType(el);

  var makeRefLine = document.getElementById("makeRefLine");

  var refLineItem = document.createElement("div");
  refLineItem.classList.add("refLineItem");
  refLineItem.classList.add("bridgeNomalFont");
  if (typeEl) {
    //부서인 경우
    var checkboxDeptEl = document.createElement("input");
    checkboxDeptEl.setAttribute("type", "checkbox");
    checkboxDeptEl.setAttribute("name", "checkboxRef");
    checkboxDeptEl.classList.add("checkboxRef");
    checkboxDeptEl.setAttribute("value", el);

    refLineItem.appendChild(checkboxDeptEl);

    var spanDeptEl = document.createElement("span");
    spanDeptEl.innerText = refMemberplit[0];
    refLineItem.appendChild(spanDeptEl);

    var checkboxDeptPlusEl = document.createElement("input");
    checkboxDeptPlusEl.setAttribute("type", "checkbox");
    checkboxDeptPlusEl.setAttribute("name", "subDeptPlus");
    checkboxDeptPlusEl.classList.add("subDeptPlus");
    if (arrType === "3") {
      checkboxDeptPlusEl.setAttribute("checked", "checked");
    }
    refLineItem.appendChild(checkboxDeptPlusEl);

    var spanDeptplusEl = document.createElement("span");
    spanDeptplusEl.innerText = "하위부서 포함";
    spanDeptplusEl.classList.add("fontshout");
    refLineItem.appendChild(spanDeptplusEl);
  } else {
    //사람인 경우
    var checkboxEl = document.createElement("input");
    checkboxEl.setAttribute("type", "checkbox");
    checkboxEl.setAttribute("name", "checkboxRef");
    checkboxEl.classList.add("checkboxRef");
    checkboxEl.setAttribute("value", el);

    refLineItem.appendChild(checkboxEl);

    var spanEl = document.createElement("span");
    spanEl.innerText = refMemberplit[0] + " " + refMemberplit[1];
    refLineItem.appendChild(spanEl);
  }

  makeRefLine.appendChild(refLineItem);
}
//참조 삭제
var buttonDelRefDiv = document.querySelector(".buttonDelRefDiv");
buttonDelRefDiv.addEventListener("click", function () {
  //
  delRefList();
});

function delRefList() {
  var checkedRefmembers = document.querySelectorAll(
    "div.refLineItem > input[name='checkboxRef']:checked"
  );
  checkedRefmembers.forEach(function (item) {
    //removeChild
    item.parentNode.parentNode.removeChild(item.parentNode);

    //console.log(item);
  });
}

//기존 데이터 참조 추가 setRefLists(membersRef);
function setRefLists(els) {
  //
  els.forEach(function (item) {
    var getRefDataList = item.split("~|");
    //IE11을 안쓰게 되면 간단하게 ...으로 구조분해를 하면 되는데....
    var arrSequence = getRefDataList.shift();
    var arrType = getRefDataList.shift();

    addRefList(getRefDataList.join("~|"), arrType);
  });
}
//참조 가져오기
function getRefList() {
  //makeRefLine
  var makeRefLine = document.getElementById("makeRefLine");
  var refLineItems = makeRefLine.querySelectorAll(".refLineItem");
  //기존 데이터 배열 초기화
  membersRef = [];
  //생성되는 데이터 배열 생성
  var membersRefMake = [];
  refLineItems.forEach(function (item, index) {
    var refNodeData = item.querySelector(".checkboxRef");
    var refNodePulsData = item.querySelector(".subDeptPlus:checked");
    var refType = checkDeptType(refNodeData.value)
      ? refNodePulsData
        ? "3"
        : "4"
      : "1";

    membersRefMake.push(index + "~|" + refType + "~|" + refNodeData.value);
  });
  membersRef = membersRefMake;
}
//수신 추가
var buttonAddRecDiv = document.querySelector(".buttonAddRecDiv");
buttonAddRecDiv.addEventListener("click", function () {
  //
  addRecLists();
});

function addRecLists() {
  //div.memberCheckBox > input[type='checkbox']:checked
  //memberCheckBox클레스를 가진 DIV안에 check되어진 checkbox input 을 가져옴
  var memberCheckBox = document.querySelector(
    "div.memberCheckBox > input[type='radio']:checked"
  );
  if (!memberCheckBox) return;
  var paramValue = memberCheckBox.value;
  addRecList(paramValue);
}

function addRecList(el, arrType) {
  //
  var recMemberplit = el.split("~|");
  //부서일경우 true를 반환
  var typeEl = checkDeptType(el);

  var makeRecLine = document.getElementById("makeRecLine");

  var recLineItem = document.createElement("div");
  recLineItem.classList.add("recLineItem");
  recLineItem.classList.add("bridgeNomalFont");
  if (typeEl) {
    //부서인 경우
    var checkboxDeptEl = document.createElement("input");
    checkboxDeptEl.setAttribute("type", "checkbox");
    checkboxDeptEl.setAttribute("name", "checkboxRec");
    checkboxDeptEl.classList.add("checkboxRec");
    checkboxDeptEl.setAttribute("value", el);

    recLineItem.appendChild(checkboxDeptEl);

    var spanDeptEl = document.createElement("span");
    spanDeptEl.innerText = recMemberplit[0];
    recLineItem.appendChild(spanDeptEl);

    var checkboxDeptPlusEl = document.createElement("input");
    checkboxDeptPlusEl.setAttribute("type", "checkbox");
    checkboxDeptPlusEl.setAttribute("name", "subDeptPlus");
    checkboxDeptPlusEl.classList.add("subDeptPlus");
    if (arrType === "5") {
      checkboxDeptPlusEl.setAttribute("checked", "checked");
    }

    recLineItem.appendChild(checkboxDeptPlusEl);

    var spanDeptplusEl = document.createElement("span");
    spanDeptplusEl.innerText = "하위부서 포함";
    spanDeptplusEl.classList.add("fontshout");
    recLineItem.appendChild(spanDeptplusEl);
  } else {
    //사람인 경우
    var checkboxEl = document.createElement("input");
    checkboxEl.setAttribute("type", "checkbox");
    checkboxEl.setAttribute("name", "checkboxRec");
    checkboxEl.classList.add("checkboxRec");
    checkboxEl.setAttribute("value", el);

    recLineItem.appendChild(checkboxEl);

    var spanEl = document.createElement("span");
    spanEl.innerText = recMemberplit[0] + " " + recMemberplit[1];
    recLineItem.appendChild(spanEl);
  }

  makeRecLine.appendChild(recLineItem);
}

//기존 데이터 수신 추가 setRefLists(membersRef);
function setRecLists(els) {
  //
  els.forEach(function (item) {
    var getRecDataList = item.split("~|");
    //IE11을 안쓰게 되면 간단하게 ...으로 구조분해를 하면 되는데....
    var arrSequence = getRecDataList.shift();
    var arrType = getRecDataList.shift();

    addRecList(getRecDataList.join("~|"), arrType);
  });
}
//수신 삭제
var buttonDelRecDiv = document.querySelector(".buttonDelRecDiv");
buttonDelRecDiv.addEventListener("click", function () {
  //
  delRecList();
});

function delRecList() {
  var checkedRecmembers = document.querySelectorAll(
    "div.recLineItem > input[name='checkboxRec']:checked"
  );
  checkedRecmembers.forEach(function (item) {
    //removeChild
    item.parentNode.parentNode.removeChild(item.parentNode);

    //console.log(item);
  });
}
//수신 가져오기
function getRecList() {
  //makeRefLine
  var makeRecLine = document.getElementById("makeRecLine");
  var recLineItems = makeRecLine.querySelectorAll(".recLineItem");
  //기존 데이터 배열 초기화
  membersRec = [];

  var membersRecMake = [];
  recLineItems.forEach(function (item, index) {
    var recNodeData = item.querySelector(".checkboxRec");
    var recNodePulsData = item.querySelector(".subDeptPlus:checked");
    var recType = checkDeptType(recNodeData.value)
      ? recNodePulsData
        ? "5"
        : "6"
      : "2";

    membersRecMake.push(index + "~|" + recType + "~|" + recNodeData.value);
  });
  membersRec = membersRecMake;
  console.log(membersRec);
}

//부서인지 확인 하는 함수
function checkDeptType(el) {
  var elSplit = el.split("~|");
  if (!elSplit) return false;
  return elSplit[1] === "부서명" ? true : false;
}
