const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "dinner",
      price: 6.99,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "dinner",
      price: 18.99,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "dinner",
      price: 16.99,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "drinks",
      price: 22.99,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  document.getElementById("displayItems").innerText = "";
    menu.forEach((item)=>{
        document.getElementById("displayItems").innerText += item.title+'\n';
    });

  allItems = document.getElementById("allItems").addEventListener("click", ()=>{displayItems("all")});
  breakfastItems = document.getElementById("breakfastItems").addEventListener("click", ()=>{displayItems("breakfast")});
  lunchItems = document.getElementById("lunchItems").addEventListener("click", ()=>{displayItems("lunch")});
  dinnerItems = document.getElementById("dinnerItems").addEventListener("click", ()=>{displayItems("dinner")});
  drinkItems = document.getElementById("drinkItems").addEventListener("click", ()=>{displayItems("drinks")});

  function displayItems(category){
    document.getElementById("displayItems").innerText = "";
    if(category=="all"){
      menu.forEach((item)=>{
              document.getElementById("displayItems").innerText += item.title+'\n';
          });
    } else {
      menu.forEach((item)=>{
              if(item.category==category){
                  document.getElementById("displayItems").innerText += item.title+'\n';
              }
          });
    }    
  }

  function sortByPrice(){
    document.getElementById("displayItems").innerText = "";
    let sortedMenu =
    menu.sort((p1,p2)=>(p1.category < p2.category) ? 1 : (p1.category > p2.category) ? -1 : 0);
    console.log(sortedMenu);
    sortedMenu.forEach((item)=>{
      document.getElementById("displayItems").innerText += item.title+'\n';
  });
  }

    



  // function showBreakfastItems(){
  //   document.getElementById("displayItems").innerText = "";
  //   menu.forEach((item)=>{
  //       if(item.category=="breakfast"){
  //           document.getElementById("displayItems").innerText += item.title+'\n';
  //       }
  //   });
  // }

  // function showLunchItems(){
  //   document.getElementById("displayItems").innerText = "";
  //   menu.forEach((item)=>{
  //       if(item.category=="lunch"){
  //           document.getElementById("displayItems").innerText += item.title+'\n';
  //       }
  //   });
  // }

  // function showDinnerItems(){
  //   document.getElementById("displayItems").innerText = "";
  //   menu.forEach((item)=>{
  //       if(item.category=="dinner"){
  //           document.getElementById("displayItems").innerText += item.title+'\n';
  //       }
  //   });
  // }

