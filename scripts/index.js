const showimg1 = ()=>{
    const imgView1=document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText =document.querySelector("#imgViewText");
    imgView1.setAttribute("src","./images/cityFlower.png");
    imgViewText.innerHTML = "동백꽃";
    txtWrap.style.display ="block";
    console.log(imgView1)
}
//   innerHTML = <시작태그>__<종료태그> 의 __를 고침
//  setAttribute = 태그내의 요소를 고침
    
const showimg2 = ()=>{
    const imgView1=document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText =document.querySelector("#imgViewText");
    imgView1.setAttribute("src","./images/cityBird.png");
    imgViewText.innerHTML = "갈매기";
    txtWrap.style.display ="block";
    
    }

const showimg3 = ()=>{
    const imgView1=document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText =document.querySelector("#imgViewText");
    imgView1.setAttribute("src","./images/cityFish.png");
    imgViewText.innerHTML = "고등어";
    txtWrap.style.display ="block";
    }
// 함수로 처리하기
const show=(idx)=>{
    const pngName = ['cityFlower','cityBird','cityFish'];
    const txt = ['동백꽃','갈매기','고등어'];

    console.log(pngName[idx], txt[idx]);

    const imgView1=document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText =document.querySelector("#imgViewText");
    imgView1.setAttribute("src",`./images/${pngName[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display ="block";
}

    //DOM 로드 후
document.addEventListener("DOMContentLoaded",()=>{
    /*
    const imgIcon1 = document.querySelector("#imgIcon1");
    //쿼리 셀렉터랑 엘레멘트 ID 로 안의 내용물 따내기
    const imgIcon2 = document.getElementById("imgIcon2");
    const imgIcon3 = document.querySelector("#imgIcon3");

    imgIcon1.addEventListener("mouseover",()=>show(0));
    imgIcon2.addEventListener("mouseover",()=>show(1));
    imgIcon3.addEventListener("mouseover",()=>show(2));
    */
   const imgIconItems = document.querySelectorAll(".imgIconItem");
   console.log(imgIconItems);

   for (let[k, item] of imgIconItems.entries()) {
    console.log(k,item);
    item.addEventListener("mouseover",()=>show(k));
   }
});