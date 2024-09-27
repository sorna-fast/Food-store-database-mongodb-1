//use preparing_food
//create Collection
db.createCollection('Food')
db.createCollection('Customer')
db.createCollection('Order')

//insert to Food
db.Food.insertMany([{_id:1,foodname:'Pizza',price:260},
    {_id:2,foodname:'stew',price:300},
    {_id:3,foodname:'sope',price:140},
    {_id:4,foodname:'Fish',price:250},
    {_id:5,foodname:'sandwich',price:200},
    {_id:6,foodname:'Chicken',price:220},
    {_id:7,foodname:'fesanjun',price:500},
    {_id:8,foodname:'Caviar',price:900},
    {_id:9,foodname:'lentils',price:400},
    {_id:10,foodname:'shrimp',price:260},])

//insert to buyer
db.Customer.insertMany([
    {_id: 1, name: 'masud', family: 'ghasemi', age: 22, numberphone: 09010361944, active: true},
    {_id: 2, name: 'masud', family: 'ghasemi', age: 22, numberphone: 09010361944, active: true},
    {_id: 3, name: 'reza', family: 'ghasemi', age: 33, numberphone: 0901030000, active: false},
    {_id: 4, name: 'samira', family: 'masti', age: 55, numberphone: 09010361555, active: true},
    {_id: 5, name: 'ali', family: 'mohamdi', age: 14, numberphone: 09014461944, active: true},
    {_id: 6, name: 'mhdei', family: 'rezayy', age: 15, numberphone: 09456361544, active: true},
    {_id: 7, name: 'sam', family: 'laskarii', age: 20, numberphone: 09156361944, active: true},
    {_id: 8, name: 'kyvan', family: 'akbaei', age: 26, numberphone: 09011657984, active: false}, 
    {_id: 9, name: 'mitra', family: 'abbasse', age: 25, numberphone: 09126561954, active: true},
    {_id: 10, name: 'sara', family: 'rostami', age: 42, numberphone: 09010361944, active: false},
    {_id: 11, name: 'hamid', family: 'lajmark', age: 82, numberphone: 09010361456, active: true},
    {_id: 12, name: 'ahmad', family: 'shaloii', age: 55, numberphone: 09160391134, active: true},
    {_id: 13, name: 'morteza', family: 'mosavi', age: 49, numberphone: 09010121944, active: true},
    {_id: 14, name: 'arach', family: 'movahedi', age: 37, numberphone: 09010100944, active: false},
    {_id: 15, name: 'sorena', family: 'alian', age: 29, numberphone: 09010361154, active: true},
    {_id: 16, name: 'saber', family: 'ghasemi', age: 19, numberphone: 09010361264, active: true},
    {_id: 17, name: 'saiid', family: 'khorshide', age: 16, numberphone: 09010361444, active: false},
    {_id: 18, name: 'mohsen', family: 'assli', age: 47, numberphone: 09010348944, active: true},
    {_id: 19, name: 'vahid', family: 'monjezi', age: 43, numberphone: 09010345844, active: true},
    {_id: 20, name: 'vahid', family: 'hoda', age: 17, numberphone: 09010313444, active: true}
]);

//insert Order
db.Order.insertMany([
  {_id: 1, CodeCustomer: 1, codefood: [1, 2, 4,6], date:('2021-02-15')},
  {_id: 2, CodeCustomer: 2, codefood: [5, 6], date:('2021-02-15')},
  {_id: 3, CodeCustomer: 3, codefood: [8, 9,4, 10], date:('2021-02-15')},
  {_id: 4, CodeCustomer: 4, codefood: [1, 2,7, 3], date:('2021-07-23')},
  {_id: 5, CodeCustomer: 5, codefood: [4, 5,11,6,22, 6], date:('2021-07-23')},
  {_id: 6, CodeCustomer: 6, codefood: [10, 8, 9], date:('2021-07-23')},
  {_id: 7, CodeCustomer: 7, codefood: [2, 1, 2], date:('2021-11-17')},
  {_id: 8, CodeCustomer: 8, codefood: [3, 4, 5], date:('2021-11-17')},
  {_id: 9, CodeCustomer: 9, codefood: [6,6,6,6,6, 7, 8], date:('2021-11-17')},
  {_id: 10, CodeCustomer: 10, codefood: [9, 10, 11], date:('2021-12-12')},
  {_id: 11, CodeCustomer: 11, codefood: [1, 3, 5], date:('2021-12-12')},
  {_id: 12, CodeCustomer: 12, codefood: [2, 4,5, 6], date:('2021-12-12')},
  {_id: 13, CodeCustomer: 13, codefood: [3, 5, 7], date:('2022-01-05')},
  {_id: 14, CodeCustomer: 14, codefood: [4, 6, 8], date:('2022-01-05')},
  {_id: 15, CodeCustomer: 15, codefood: [5, 7, 7,9], date:('2022-01-05')},
  {_id: 16, CodeCustomer: 16, codefood: [6, 8, 10], date:('2022-04-04')},
  {_id: 17, CodeCustomer: 17, codefood: [7, 9, 1], date:('2022-04-04')},
  {_id: 18, CodeCustomer: 18, codefood: [8, 10, 2], date:('2022-04-04')},
  {_id: 19, CodeCustomer: 19, codefood: [9, 1, 3], date:('2021-01-01')},
  {_id: 20, CodeCustomer: 20, codefood: [10, 2, 4], date:('2021-01-01')},
  {_id: 21, CodeCustomer: 21, codefood: [1, 3, 6], date:('2021-01-01')},
  {_id: 22, CodeCustomer: 22, codefood: [2, 4, 7], date:('2021-01-01')},
  {_id: 23, CodeCustomer: 23, codefood: [3, 5, 8], date:('2021-01-01')},
  {_id: 24, CodeCustomer: 24, codefood: [4, 6, 9], date:('2021-01-01')},
  {_id: 25, CodeCustomer: 25, codefood: [5, 7, 10], date:('2021-01-01')},
  {_id: 26, CodeCustomer: 26, codefood: [6, 8, 1], date:('2021-01-01')},
  {_id: 27, CodeCustomer: 27, codefood: [7, 9,4,9, 2], date:('2021-01-01')},
  {_id: 28, CodeCustomer: 28, codefood: [8, 10, 3], date:('2021-01-01')},
  {_id: 29, CodeCustomer: 29, codefood: [9, 1,1,1, 4], date:('2021-01-01')},
  {_id: 30, CodeCustomer: 30, codefood: [10], date:('2021-01-01')}
]);


//ارتباط جداول
db.Order.aggregate([
    {
      $lookup: {
        from: "Food",
        localField: "codefood",
        foreignField: "_id", 
        as: "FoodInfo" 
      }
    },
    {
      $lookup: {
        from: "Customer", 
        localField: "CodeCustomer", 
        foreignField: "_id", 
        as: "CustomerInfo" 
      }
    }
  ]);
//==================================================================================
// کوییری ها 
//1
//لیست کد و نام وقیمت همه غذاها که بر اساس قیمت غا به صورت نزولی مرتب شوند
db.Food.find({},{_id:1,foodname:1,price:1}).sort({price:1})
//---------
//2
//لیست نام و نام خانوادگی و تلفن و مشتریان فعال

db.Customer.find({active:{$eq:true}},{_id:1,name:1,family:1,numberphone:1,active:1})

//------------------------------------------
//3
//لیست نام و قیمت غذاهایی که در بازه قیمتی 120 تا 260 تومن است

db.Food.find({$and:[{price:{$gte:10}},{price:{$lte:260}}]})

//------------------------------------------------
//4
//لیست سفارشات ثبت شده در یک  روز خاص
db.Order.find({date:'2021-01-01'})
//-------------------------------
//5
//حاصل جمع فروش هر غذا در یک روز با دریافت تاریخ روز
db.Order.aggregate([
  {
    $lookup: {
      from: "Food",
      localField: "codefood",
      foreignField: "_id", 
      as: "FoodInfo" 
    }
  },
  {
    $lookup: {
      from: "Customer", 
      localField: "CodeCustomer", 
      foreignField: "_id", 
      as: "CustomerInfo" 
    }
  },
  {
    $unwind: "$FoodInfo"
  },
  { 
    $group: {
        _id: "$date", 
        price: { $sum: "$FoodInfo.price" } 
    }
  }
]);
//------------------------------------------------
//6
//تعداد کل سفارشات یک فرد
db.Order.aggregate([
  {
    $unwind: "$codefood"
  },
  {
    $group: {
      _id: "$CodeCustomer",
      totalFoodItems: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "Customer",
      localField: "_id",
      foreignField: "_id",
      as: "CustomerInfo"
    }
  },
  {
    $unwind: "$CustomerInfo"
  },
  {
    $project: {
      _id: 0,
      customerName: "$CustomerInfo.name",
      customerFamily: "$CustomerInfo.family",
      totalFoodItems: 1
    }
  }
]);

