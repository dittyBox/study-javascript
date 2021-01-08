//객체과 반복문
var memberArray = ['egoing','graphittie','leezche'];
//콘솔 로그를 남길때 그룹으로 지정 해서 관리 시작
console.group('array loop');

var i = 0;
//while 반복문
while(i < memberArray.length){
    console.log(i,memberArray[i]);
    i = i + 1;
}
//그룹 지정 끝
console.groupEnd('array loop');


var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezche'
}

console.group('object loop');
//for 반복문
for(var name in memberObject){
    console.log(name, memberObject[name]);
}

console.groupEnd('object loop');
