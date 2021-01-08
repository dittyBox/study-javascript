//객체의 기본적인 사용법
//객체는 이름이 있는 정보를(함수나 변수 등) 정리정돈 하는 도구
//배열 var를 써서 선언을 했지만 let으로 사용하는 버릇을 들이기
//배열은 대괄호 사용 안에 배열의 원소값을 넣음
var memberArray = ['a','b','c'];
//배열을 호출할때 배열의 시작은 0으로 시작함
//보통 vb와 db등 count는 1로 시작 실무에서 초짜일때 이부분 실수 많이 함
console.log("memberArray[1] : ",memberArray[1]);

//object의 선언은 중괄호를 사용
var memberObject = {
    manager:'a',
    developer:'graphittie',
    designer:'leezhce'
}
//객체에 저장된 원소의 값의 UPDATA(변경)
memberObject.designer = 'leezxhe';
//객체의 원소를 읽을때 .이나 대괄호[]를 사용하여 읽을 수 있다.
console.log('memberObject.designer : ', memberObject.designer);

//객체의 원소를 DELETE(삭제)
delete memberObject.designer;

//javacript에서 특수문자를 문자열로 표연할때는 \를 붙이면 된다.
console.log('memberObject[\'designer\'] : ', memberObject['designer']);


