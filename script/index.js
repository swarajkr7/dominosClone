let divObj=[
    {
        img:"https://www.dominos.co.in/assets/menu.png",
        head1:"OUR MENU",
        para:"Explore our range of delicious Pizzas,delivered in 30 minutes",
        head2:"Discover Pizza"
    },
    {
        img:"https://www.dominos.co.in/assets/store.png",
        head1:"OUR MENU",
        para:"Explore our range of delicious Pizzas,delivered in 30 minutes",
        head2:"Discover Pizza"
    },
    {
        img:"https://www.dominos.co.in/assets/birthday.png",
        head1:"OUR MENU",
        para:"Explore our range of delicious Pizzas,delivered in 30 minutes",
        head2:"Discover Pizza"
    },
    {
        img:"https://www.dominos.co.in/assets/catering.png",
        head1:"OUR MENU",
        para:"Explore our range of delicious Pizzas,delivered in 30 minutes",
        head2:"Discover Pizza"
    },
];

divObj.map(function(elem){
    let div=document.createElement("div");
    div.style.border="1px";
    div.style.borderStyle="dotted";
    div.style.textAlign="center";
    div.style.paddingTop="30px";
    let div1=document.createElement("div");
    div1.style.height="30%";
    let div2=document.createElement("div");
    div2.style.height="70%";
    let image=document.createElement("img");
    image.setAttribute("src",elem.img);
    let head1=document.createElement("h3");
    head1.innerText=elem.head1;
    head1.style.margin="19px 0px";
    head1.style.webkitTextFillColor="#2B4547"
    let para=document.createElement("p");
    para.innerText=elem.para;
    para.style.webkitTextFillColor="#2B4547"
    para.style.margin="16px 0px"
    let head2=document.createElement("h3");
    head2.style.webkitTextFillColor="#DE042E";
    head2.innerText=elem.head2;
    head2.style.padding="20px";
    head2.style.border="1px"
    head2.style.borderStyle="dotted";
    head2.style.borderLeft="0px"
    head2.style.borderRight="0px"
    head2.style.borderBottom="0px"
    div1.append(image);
    div2.append(head1,para,head2);
    div.append(div1,div2);
    

    document.querySelector(".exploreDiv").append(div);
});

let contentObj=[
    {
      head:"Domino's Pizza: Delivering Happiness",
      para:"What’s better than having a crispy melty pizza, you ask?Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.There is something for everyone here. The vegetarians, non-vegetarians, the sides’ lovers and also the ones who love to have something sweet by the time they reach the last bite of the last slice of pizza slice."
    },
    {
      head:"What We Need - More Choice. More Fun.",
      para:"No matter what the situation, pizza always helps. Especially a pizza that gives you the freedom to choose your toppings - from paneer, crisp capsicum, onion, grilled mushroom, golden corn, black olives, fresh tomato, red paprika, jalapeno, paneer tikka and extra cheese to non-veg toppings such as pepper barbeque chicken, peri-peri chicken, grilled chicken rasher, chicken sausage or chicken tikka- the options are almost endless, anything and everything you can think of that too on top of the crust of your choice - New hand-tossed crust, wheat thin crust, cheese burst crust, classic hand-tossed crust or a fresh pan pizza. Because just like a pizza, Domino's understands you.And to shoo away those end-of-the-month blues while placing your order with our pizza restaurant, check out the everyday pizzas from pizza mania combos with everyday value offer of 2 pizzas starting at just ₹99 (regular size) and ₹199 (medium size) each."
    },
    {
      head:"The Promise Of 30-Minute Delivery",
      para:"The icing on the cake or more aptly the extra cheese on your already fabulous pizza is that Domino’s takes only half an hour for its pizza delivery service. Don’t believe us? Time it if you please. With 1250+ stores present all over India, you can have a Domino’s pizza even while traveling on a train. Yes, you are reading it right, you can enjoy pizza on train too.So stop googling for the “pizza shops near me” and order from your nearest pizza outlet to have a hot box of pizza on your table in the next 30 minutes, or berth at the next halting station."
    },
    { 
      head:"Franchise Information",
      para:"Jubilant FoodWorks Limited is the Master Franchisee of Domino’s Pizza in India, Bangladesh, Sri Lanka and Nepal with sole and exclusive rights to own and operate Domino’s Pizza restaurants in these territories. For any franchise-related queries, kindly email us directly at dominos.franchise@jublfood.com We have come across a few instances of fraudsters posing as Jubilant FoodWorks and asking for payment from gullible investors against the promise of a Domino’s franchise. We therefore caution and urge all interested parties to be careful and vigilant and interact only with the email id mentioned above. Anyone dealing with such fraudsters shall be doing so on their own peril, risk and consequences.Neither Jubilant FoodWorks nor its Directors/Officers shall be responsible for any loss, harm, damage or fraud that occurs or may occur or arise to any person who decides to access such fake websites, or deal with them."
    },
];

contentObj.map(function(elem){
 let div=document.createElement("div");
 let head=document.createElement("h1");
 head.style.marginBottom="30px";
 head.style.color="#006491";
 head.innerText=elem.head;
 let para=document.createElement("p");
 para.innerText=elem.para;
 para.style.marginBottom="20px";
 div.append(head,para);
 document.querySelector(".contentDiv").append(div);
});
