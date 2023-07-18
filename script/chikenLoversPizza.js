let dataArr=[
    {
        image:"https://www.dominos.co.in/files/items/chicken_feast.jpg",
        head:"THE 5 CHICKEN FEAST PIZZA",
        para:"Loaded with 5 different Chicken toppings - grilled Chicken Rashers, Chicken Meatballs, Chicken Tikka, herby Chicken Sausage and flavorful Chicken Keema",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/spiced_doubled.jpg",
        head:"SPICED DOUBLE CHICKEN",
        para:"Delightful combination of our spicy duo- Pepper Barbecue Chicken and Peri Peri Chicken for Chicken Lovers.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/chi_max.jpg",
        head:"CHICKEN MAXIMUS",
        para:"Loaded to the Max with Chicken Tikka, Chicken Keema, Chicken Sausage and a double dose of grilled Chicken Rashers.",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/ind_fus.jpg",
        head:"INDO FUSION CHICKEN PIZZA",
        para:"Relish the fusion of 5 of your favorite chicken toppings - Peri Peri Chicken, Chicken Pepperoni, Chicken Tikka, Pepper Barbecue Chicken and Chicken Meatballs",
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


