let dataArr=[
    {
        image:"https://www.dominos.co.in/files/items/cornncheesepp.jpg",
        head:"CORN N CHEESE PARATHA PIZZA",
        para:"A crazy fusion like never before. A delicious fusion of corn stuffed paratha and cheesy pizza.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/paneerparatha.jpg",
        head:"PANEER PARATHA PIZZA",
        para:"An epic fusion of paratha and pizza with melting cheese & soft paneer fillings to satisfy all your indulgent cravings",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/chickenkeemaparatha.jpg",
        head:"CHICKEN KEEMA PARATHA PIZZA",
        para:"Flavourful & meaty chicken keema paratha and goodness of cheesy pizza coming together in an epic crossover!",
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


