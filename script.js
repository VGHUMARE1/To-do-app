let list=document.querySelector('ul');
let tastList=document.querySelector('li');


let saveBtn=document.querySelector('.save-btn');

saveBtn.addEventListener("click",()=>{
   let title=document.querySelector("#title-input").value;
   let des=document.querySelector("#desc-input").value;
    if(title=="" || des==""){
        let meg;
        if(title==""){
           alert(`please add something in title box`);
        }
        else{
            alert(`please add something in Description box`);
        }



    }else{
        addTask(title,des);
        document.querySelector("#title-input").value="";
        document.querySelector("#desc-input").value="";
    }
})

const addTask=(title,des)=>{
     let btn=document.createElement('button');
     btn.innerText="X";
     btn.type="delete";
     let titEle=document.createElement('div');
     let desEle=document.createElement('div');
     titEle.classList.add("title-list");
     desEle.classList.add("des-list");
     titEle.innerText=title;
     desEle.innerText=des;
     let div=document.createElement('li');
     div.classList.add('task');
     div.appendChild(titEle);
     div.appendChild(desEle);
     div.appendChild(btn);
     list.appendChild(div);
}

let reset=document.querySelector('.reset');

reset.addEventListener("click",()=>{
    let task=document.querySelectorAll('.task');
     for(li of task){
        li.remove();
     }
})

let task=document.querySelector('ul');
task.addEventListener("click",(e)=>{
    console.dir(e.target);
    let target=e.target;
    let nodeName=e.target.nodeName;
    console.log(nodeName);
    if(nodeName=='BUTTON'){
        let par=target.parentNode;
        par.remove();
    }
})