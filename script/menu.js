let dataArr=[
    {
       head:"VEG PIZZA",
       image:"https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp",
       para:"A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier",
       btn:"VIEW ALL"
    },
    {
        head:"NON-VEG PIZZA",
        image:"https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp",
        para:"Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings",
        btn:"VIEW ALL"
    },
    {
        head:"PIZZA MANIA",
        image:"https://www.dominos.co.in/theme2/front/images/menu-images/my-pizzamania.webp",
        para:"Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings",
        btn:"VIEW ALL"
    },
    {
        head:"SIDES & BEVERAGES",
        image:"https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.webp",
        para:"Complement your pizza with wide range of sides & beverages available at Domino's Pizza India",
        btn:"VIEW ALL"
    },
    {
        head:"PASTA",
        image:"https://www.dominos.co.in/theme2/front/images/menu-images/pasta_new.webp",
        para:"Choose your favourite pizza pasta from the Domino's pasta menu. Get fresh non-veg pasta with your choice with creamy tomato, tikka masala, cheesy jalapeno and more.",
        btn:"VIEW ALL"  
    },
];

dataArr.forEach(function(elem,index){
    let div=document.createElement("div");
    div.style.backgroundColor="#D41B35"
    div.style.backgroundImage="url(https://www.dominos.co.in/theme2/front/images/menu-images/darkred.png)";
    div.style.marginBottom="10px";
    let head=document.createElement("p");
    head.style.color="white"
    head.style.fontFamily="Proxima"
    head.style.fontSize="28px"
    head.style.marginTop="40px"
    head.style.marginBottom="40px";
    head.innerText=elem.head;
    let image=document.createElement("img");
    image.style.marginBottom="5px"
    image.src=elem.image;
    if(index==4)
    {
         image.style.marginBottom="170px";
    }
    let para=document.createElement("p");
    para.innerText=elem.para;
    para.style.color="white"
    para.style.padding="0px 20px"
    para.style.fontSize="14px";
    para.style.fontFamily="Proxima"
    let btn=document.createElement("button");
    btn.style.marginTop="30px"
    btn.style.marginBottom="10px"
    btn.innerText=elem.btn;
    btn.style.padding="10px 40px";
    btn.style.borderRadius="5px"
    btn.style.border="0px"
    btn.style.color="#D41B35"
    btn.style.fontFamily="Proxima"
    btn.style.fontWeight="500"
    div.append(head,image,para,btn);
    document.querySelector("#lower").append(div);
    
});


