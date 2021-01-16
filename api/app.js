
function newNonDiv(){
    return document.createElement('div');
}

function newTextBoxSet(title){
    let returnNewTextBoxSet = document.createElement('input');
    let titleSet = document.createElement('label');
    let divSet = document.createElement('div');
    
    titleSet.innerText = `${title} : `;

    returnNewTextBoxSet.setAttribute('type','text');
    returnNewTextBoxSet.classList.add('textbox');
    returnNewTextBoxSet.classList.add(`${title}`);

    divSet.appendChild(titleSet);
    divSet.appendChild(returnNewTextBoxSet);
    return divSet;
}

let divRoot = document.querySelector("#root");

let loginIdBox = new newTextBoxSet('ID');

let loginPassBox = new newTextBoxSet('PASS');

let subButton = document.createElement("button");
subButton.setAttribute("type","button");
subButton.innerText="눌러 주세요.";
subButton.classList.add('button');

divRoot.appendChild(loginIdBox);

divRoot.appendChild(loginPassBox);
divRoot.appendChild((new newNonDiv));
divRoot.appendChild(subButton);

function getLogin(e){
    let id = document.querySelector('.ID');
    let pass = document.querySelector('.PASS');
    if (!id.value || !pass.value) return;

    let submit = async () => {
        let replaceTitle = json => target.innerHTML = json.title;
        let url = `https://api.dittybox.net/members/${id}`
        let options = { 
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
        try {
          let response = await fetch(url, options);
          let json = await response.json();
          let task = await replaceTitle(json);
        } catch (err) {
          console.log(err);
        }
      }
      console.log(submit());
    console.log(id.value);
    console.log(pass.value);
    //console.log(e.target);
    //console.log(e.currentTarget);
};

subButton.addEventListener('click', getLogin);


