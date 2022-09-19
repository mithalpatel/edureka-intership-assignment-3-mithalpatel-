//restaurantList
 let restaurantList = [{
   name: 'Apoorva Restaurant',
   address: 'PB Road',
   city:'Davangere'
},{
   name:'Jungle Restaurant',
   address:'Gokul Road',
   city: 'Hubli'
},{
   name:'Sai Restaurant',
   address:'BH Road',
   city: 'Puna'
},{  
   name:'Karavalli Restaurant',
   address:'Dr. Rajkumar Road',
   city:'Bangalore'
},{
   name:'Ziya Restaurant',
   address:'Bandra East',
   city:'Mumbai'
},{ 
   name:'By the way Restaurant',
   address:'Ring Road',
   city:'Mysore'
}]
console.log("restaurantList");
console.log(restaurantList);

//ResturantManager class, Type- Array 
class restaurantManager {
   constructor(restaurantList) {
      this.restaurantList = restaurantList;
   }

//printAllRestaurantNames
   printAllRestaurantNames() {
      let restaurantListonconsole =[];
      for (let i =0; i< this.restaurantList.length; i++) {
         restaurantListonconsole.push(this.restaurantList[i].name);
      }
      return `${restaurantListonconsole}`;
   }

   //"filterRestaurantByCity"
   filterRestaurantByCity(cityName) {
      return this.restaurantList.filter((obj) => obj.city == cityName);
   }
}

//   Resturant city
 const Restaurant = new restaurantManager(restaurantList);
 console.log("PrintAllRestaurantNames");
 console.log(Restaurant.printAllRestaurantNames("printAllRestaurantNames"));
 console.log("filterRestaurantByCity");
 console.log(Restaurant.filterRestaurantByCity("Davangere"));
 console.log(Restaurant.filterRestaurantByCity("Hubli"));
 console.log(Restaurant.filterRestaurantByCity("Puna"));
 console.log(Restaurant.filterRestaurantByCity("Bangalore"));
 console.log(Restaurant.filterRestaurantByCity("Mumbai"));
 console.log(Restaurant.filterRestaurantByCity("Mysore"));

 //2. Please find order details for Punjabi Tadka restaurant in Delhi as:

 const orderData = {
   "Below 500": 20,
   "500-1000": 29,
   "1000-1500": 30,
   "1500-2000": 44,
   "Above 2000": 76,
 };



//a. Calculate the total number of orders placed for the restaurant?

  let totalOrderPlaced = 0;
  const totalOrderArray = Object.values(orderData);
  for (let i = 0; i < totalOrderArray.length; i++) {
    totalOrderPlaced += totalOrderArray[i];
  }
  console.log(`Total number of orders placed = ${totalOrderPlaced}`);


  
//b. Calculate the number of order proportion option.

  const proportion = Object.keys(orderData).length;
  console.log(`Total number of order proportions = ${proportion}`);
  
  
//c. Calculate the percentage of each proportion in below format:
  
  let outputArray = [];
  let idd = 1;
  for (let i in orderData) {
    let o = new Object();
  
//id
    o.id = idd;
    idd += 1;
  
//order
    o.order = i;
  
//order-percentages
    let ans = (orderData[i] * 100) / totalOrderPlaced;
    o["order percentage"] = ans.toFixed(2);
  
//restaurant
    o.restaurant = "Punjabi Tadka";
    outputArray.push(o);
  }
  console.log("Array of Objects");
  for (let i = 0; i < outputArray.length; i++) {
    console.log(outputArray[i]);
  }

 
