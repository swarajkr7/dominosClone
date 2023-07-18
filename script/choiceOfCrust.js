let dataArr=[
    {
        image:"https://www.dominos.co.in/files/items/_1346164951.jpg",
        head:"CHEESE BURST",
        para:"Crust with oodles of yummy liquid Dairy cheese sauce filled inside.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/_1346165278.jpg",
        head:"CLASSIC HAND TOSSED",
        para:"Dominos traditional hand stretched crust, crisp on outside, soft & light inside.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/thin-crust.jpg",
        head:"WHEAT THIN CRUST",
        para:"Presenting the light healthier and delicious light wheat thin crust from Domino.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/FPP_(1).jpg",
        head:"FRESH PAN PIZZA",
        para:"Tastiest Pan Pizza.Ever.Domino's freshly made pan-baked pizza; deliciously soft ,buttery,extra cheesy and delightfully crunchy.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/Crust_272X272.jpg",
        head:"NEW HAND TOSSED",
        para:"Classic Domino's crust. Fresh, hand stretched.",
        btn:"ORDER NOW"  
    },
];

dataArr.forEach(function(elem,index){
    let div=document.createElement("div");
    div.id="container";
    if(index%2==0)
    {
        div.style.backgroundColor="#E61A39";
    }else{
        div.style.backgroundColor="#D41B35";
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


