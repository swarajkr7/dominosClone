let dataArr=[
    {
        image:"https://www.dominos.co.in/files/items/Margherit.jpg",
        head:"MARGHERITA",
        para:"A hugely popular margherita, with a deliciously tangy single cheese topping",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg",
        head:"DOUBLE CHEESE MARGHERITA",
        para:"The ever-popular Margherita - loaded with extra cheese... oodies of it!",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/Farmhouse.jpg",
        head:"FARM HOUSE",
        para:"A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
        head:"PEPPY PANEER",
        para:"Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
        btn:"ORDER NOW"
    },
    {
        image:"https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
        head:"MEXICAN GREEN WAVE",
        para:"A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
        btn:"ORDER NOW"  
    },
    {
        image:"https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg",
        head:"DELUXE VEGGIE",
        para:"For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.",
        btn:"ORDER NOW"
     },
     {
         image:"https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg",
         head:"VEG EXTRAVAGANZA",
         para:"A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.",
         btn:"ORDER NOW"
     },
     {
         image:"https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg",
         head:"CHEESE N CORN",
         para:"Cheese I Golden Corn | Cheese n Corn Pizza",
         btn:"ORDER NOW"
     },
     {
         image:"https://www.dominos.co.in/files/items/Fresh_Veggie.jpg",
         head:"FRESH VEGGIE",
         para:"Onion & Capsicum",
         btn:"ORDER NOW"
     },
     {
         image:"https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg",
         head:"VEGGIE PARADISE",
         para:"Goldern Corn, Black Olives, Capsicum & Red Paprika",
         btn:"ORDER NOW"  
     },
     {
        image:"https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
        head:"PANEER MAKHANI",
        para:"Paneer and Capsicum on Makhani Sauce",
        btn:"ORDER NOW"
     },
     {
         image:"https://www.dominos.co.in/files/items/IndianTandooriPaneer.jpg",
         head:"INDI TANDOORI PANEER",
         para:"It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo",
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




