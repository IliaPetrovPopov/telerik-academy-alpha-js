let input = ["10",
"AddWish Electric Scooter 2000Z;1536.50;Stefan",
"AddWish Fortnite Skin;3000;Stefan",
"AddWish AMD Radeon;4099.99;Pesho" ,
"AddWish Apple AirPods;200000;Kiril",
"AddWish Socks;10000;Tosho",
"AddWish Swater;999;Stefan",
"FindWishesByChild Stefan",
"DeleteWishes Stefan",
"FindWishesByChild Stefan",
"FindWishesByPriceRange 100000;200000"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

  const numOfCommands = +gets();
  const wishes = new Map();
  
  for(let i = 0; i < numOfCommands; i++) {
      const [command, ...data] = gets().split(' ');
  
        if (command === 'AddWish') {
            const [item_name, estimated_price, child_name] = data.join(' ').split(';');
        
            if (!wishes.has(child_name)) {
                wishes.set(child_name, []);
            }
        
            wishes.get(child_name).push({
              item_name: item_name,
              price: Number(estimated_price).toFixed(2),
              name: child_name,
            });
            console.log('Wish added');
          }
  
          if (command === 'DeleteWishes') {
            const joinedData = data.join(' ');
            if (wishes.has(joinedData)) {
              const numberOfWishes = wishes.get(joinedData).length;
              wishes.delete(joinedData);
              console.log(`${numberOfWishes} Wishes deleted`);
            } else {
              console.log('No Wishes found');
            }
          }
      
      if (command === 'FindWishesByPriceRange') {
        const itemsInPriceRange = [];
        const [min, max] = data[0].split(';');
    
        wishes.forEach((wishes) => {
          wishes.forEach((wish) => {

            if (
              Number(wish.price) <= Number(max) &&
              Number(wish.price) >= Number(min)
            ) {
              itemsInPriceRange.push(wish);
            }
          });
        });

        if (itemsInPriceRange.length > 0) {
          itemsInPriceRange
            .sort((a, b) => a.item_name.localeCompare(b.item_name))
            .forEach((element) =>
              console.log(`{${element.item_name};${element.name};${element.price}}`)
            );
        } else {
          console.log('No Wishes found');
        }
      }
      if (command === 'FindWishesByChild') {
        const nameOfPerson = data.join(' ');
        if (wishes.has(nameOfPerson)) {
          wishes
            .get(nameOfPerson)
            .sort((a, b) => a.item_name.localeCompare(b.item_name))
            .forEach((element) =>
              console.log(`{${element.item_name};${element.name};${element.price}}`)
            );
        } else {
          console.log('No Wishes found');
        }
      }      
  }
