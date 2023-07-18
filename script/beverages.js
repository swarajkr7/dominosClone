let dataArr=[
    {
        image:"https://www.dominos.co.in/files/items/pepsi.png",
        head:"PEPSI(475ML)",
        para:"",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/7up.png",
        head:"7UP(475ML)",
        para:"",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/lipton.png",
        head:"LIPTON ICE TEA(250ML)",
        para:"",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/mirinda.png",
        head:"MIRINDA(475ML)",
        para:"",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/pepsi_black.png",
        head:"PEPSI BLACK CAN",
        para:"",
        btn:"ORDER NOW"  
    },
];

dataArr.forEach(function(elem,index){
    let div=document.createElement("div");
    div.id="container";
    if(index%2==0)
    {
        div.style.backgroundColor="#E61A39"
    }else{
        div.style.backgroundColor="#D41B35"
    }
    div.style.marginBottom="10px";
    let head=document.createElement("p");
    head.style.color="white"
    head.style.fontFamily="Proxima"
    head.style.fontSize="28px"
    head.style.marginTop="20px"
    head.style.marginBottom="20px";
    head.innerText=elem.head;
    let image=document.createElement("img");
    image.style.marginBottom="5px"
    image.src=elem.image;
    image.style.marginTop="60px"
    let para=document.createElement("p");
    para.innerText=elem.para;
    para.style.color="white"
    para.style.padding="0px 18px"
    para.style.fontSize="13px";
    para.style.fontFamily="Proxima"
    let btn=document.createElement("button");
    btn.id="btn"
    btn.innerText=elem.btn;
    div.append(image,head,para,btn);
    document.querySelector("#lower").append(div);
    
});


