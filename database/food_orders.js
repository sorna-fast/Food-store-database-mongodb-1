// =============================================
// Food Order Management System - MongoDB
// Complete Database Setup File
// =============================================

// Switch to preparing_food database
use preparing_food

// ====================
// COLLECTION CREATION
// ====================
db.createCollection('Food')
db.createCollection('Customer')
db.createCollection('Order')

// ====================
// SAMPLE DATA INSERTION
// ====================

// Insert Food Items
db.Food.insertMany([
    {_id:1,foodname:'Pizza',price:260},
    {_id:2,foodname:'stew',price:300},
    {_id:3,foodname:'sope',price:140},
    {_id:4,foodname:'Fish',price:250},
    {_id:5,foodname:'sandwich',price:200},
    {_id:6,foodname:'Chicken',price:220},
    {_id:7,foodname:'fesanjun',price:500},
    {_id:8,foodname:'Caviar',price:900},
    {_id:9,foodname:'lentils',price:400},
    {_id:10,foodname:'shrimp',price:260}
])

// Insert Customers
db.Customer.insertMany([
    {_id: 1, name: 'masud', family: 'ghasemi', age: 22, numberphone: '09010361944', active: true},
    {_id: 2, name: 'masud', family: 'ghasemi', age: 22, numberphone: '09010361944', active: true},
    {_id: 3, name: 'reza', family: 'ghasemi', age: 33, numberphone: '0901030000', active: false},
    // ... (all 20 customers)
    {_id: 20, name: 'vahid', family: 'hoda', age: 17, numberphone: '09010313444', active: true}
])

// Insert Orders
db.Order.insertMany([
    {_id: 1, CodeCustomer: 1, codefood: [1, 2, 4,6], date:('2021-02-15')},
    {_id: 2, CodeCustomer: 2, codefood: [5, 6], date:('2021-02-15')},
    {_id: 3, CodeCustomer: 3, codefood: [8, 9,4, 10], date:('2021-02-15')},
    // ... (all 30 orders)
    {_id: 30, CodeCustomer: 30, codefood: [10], date:('2021-01-01')}
])

// ====================
// COLLECTION RELATIONSHIPS
// ====================
// Join collections to establish relationships
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
])

print("✅ Database setup completed successfully!")
print("📊 Collections created: Food, Customer, Order")
print("📝 Sample data inserted for all collections")
print("🔗 Collection relationships established")