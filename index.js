import data from './data.json' assert {type:'json'};
const card=document.querySelector(".box-container");

$(document).ready(function(){

  
  
    $('.project').magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });
  
  });


const allImagedata=()=>{
    data.map((item)=>{
       const cards=document.createElement("div");
        cards.classList.add("box");
        cards.innerHTML=`
       <a href="${item.img}"> <img src="${item.img}" alt=""/>
       </a>
        `;

        card.appendChild(cards);
        console.log(cards)
    });
};




allImagedata();