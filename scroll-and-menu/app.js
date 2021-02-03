
//본문내용 
let context=`
<H1>블락1</H1>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<H1>블락2</H1>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<H1>블락3</H1>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<H1>블락4</H1>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<H1>블락5</H1>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
<p>아아아아아앙아아아아</p>
`;

//메뉴 자리를 가져오고
let menuDiv = document.querySelector('#menuDiv')
//본문의 자리를 가져오고
let viewDiv = document.querySelector('#viewDiv')

window.addEventListener('load',()=>{
    //본문공간에 본문을 넣고
    viewDiv.innerHTML=context;

    //본문에 H1 태그를 가져와서
    let viewDivHtage = viewDiv.querySelectorAll('h1,h2,h3');
    
    viewDivHtage.forEach((item,index)=>{
        //새로운 div를 만들고
        let addMenuSub = document.createElement('div');
        //내용과 ID는 H태그안의 내용으로 넣고 H태그의 ID도 동일하게 주자
        //지금은 그냥 하는데 공백인 경우 특문 처리 작업이 필요하다.
        addMenuSub.innerHTML = item.innerText;
        addMenuSub.setAttribute('id',item.innerText);
        item.setAttribute('id',item.innerText);
        //index가 0이면 첫번째 항목이니 메뉴에 하이라이트 효과를 주자 
        if(index===0) addMenuSub.classList.add('highlights') ;
        //역으로 메뉴를 누르면 스크롤이 이동되도록
        addMenuSub.addEventListener('click',(e)=>{
            //매칭되는 본문 h값 가져 온다.
            let id = viewDiv.querySelector('#' + e.currentTarget.id);
            //해당 객체의 위치를 가져온다.
            let scrollPosition = id.offsetTop-30;
            //이동시킨다.
            window.scrollTo({top:scrollPosition, left:0, behavior:'smooth'});
        })
        //메뉴를 만들자
        menuDiv.appendChild(addMenuSub);
    })
    
})


window.addEventListener('scroll', e=>{
    //화면의 높이를 가져와서 3등분 한다.
    //2등분해도 되고 항목이 3등분 지점안으로 올때 하이라이트를 줄려고 계산
    let windowHeight = (window.innerHeight/3).toFixed(0);
    //본문에 다시 h태그를 가져온다.
    let viewDivHtage = viewDiv.querySelectorAll('h1,h2,h3');
    viewDivHtage.forEach((item)=>{
        //h태그 객체가 화면의 상단에서 얼마큼 떨어져 있는지 가져와서
        let myPosition=item.getBoundingClientRect().top;
        //그 거리가 -30에서 이전 화면의 높이 3등분 한 값보다 작으면 
        //함수실행 화면 상단에서 3분지1 지점 안으로 들어오면 작동하게끔
        if (myPosition>-30 && myPosition < windowHeight){
            togglCss(item.id);
        }
    })
})

function togglCss(targetId){
    //class name이 highlights인걸 다 가져와서 
    let highlights = document.querySelectorAll('.highlights');
    highlights.forEach((item)=>{
        //있으면 highlights를 없에버린다.
        item.classList.remove('highlights');
    })
    //받아온 아이디값으로 메뉴에서 해당 아이디를 가진 객체에 highlights를 넣어준다.
    document.querySelector('#menuDiv #'+targetId).classList.add('highlights');
}
