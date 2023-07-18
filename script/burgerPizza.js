let dataArr=[
    {
        image:"https://www.dominos.co.in/files/items/160790_Burger_Pizza_427X298_Pixel.jpg",
        head:"BURGER PIZZA- CLASSIC VEG",
        para:"Bite into delight! Witness the epic combination of pizza and burger with our classic Burger Pizza, that looks good and tastes great!",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/160790_Burger_Pizza_427X298_Pixel.jpg",
        head:"BURGER PIZZA- PREMIUM VEG",
        para:"For all the meat cravers, try the classic non-veg Burger Pizza loaded with the goodness of burger and the greatness of pizza.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/Burger_Pizza_Non.jpg",
        head:"BURGER PIZZA- CLASSIC NON VEG",
        para:"A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
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


