// =============================================
// Food Order Management System - MongoDB
// Practical Query Examples File
// =============================================

// Make sure to use the correct database
use preparing_food

// ====================
// BASIC QUERIES
// ====================

print("1. 📋 List all foods sorted by price (ascending)")
db.Food.find({},{_id:1,foodname:1,price:1}).sort({price:1})

print("\n2. 👥 List active customers with contact info")
db.Customer.find({active:{$eq:true}},{_id:1,name:1,family:1,numberphone:1,active:1})

print("\n3. 💰 Foods in price range 120 to 260")
db.Food.find({$and:[{price:{$gte:120}},{price:{$lte:260}}]})

print("\n4. 📅 Orders from specific date (2021-01-01)")
db.Order.find({date:'2021-01-01'})

// ====================
// ADVANCED ANALYTICS
// ====================

print("\n5. 📈 Daily sales aggregation")
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
            totalSales: { $sum: "$FoodInfo.price" },
            orderCount: { $sum: 1 }
        }
    }
])

print("\n6. 👤 Total orders per customer")
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
])

// ====================
// ADDITIONAL USEFUL QUERIES
// ====================

print("\n7. 🍕 Most popular food items")
db.Order.aggregate([
    { $unwind: "$codefood" },
    { 
        $group: { 
            _id: "$codefood", 
            orderCount: { $sum: 1 } 
        } 
    },
    { $sort: { orderCount: -1 } },
    {
        $lookup: {
            from: "Food",
            localField: "_id",
            foreignField: "_id",
            as: "foodDetails"
        }
    }
])

print("\n8. 📱 Customer phone number lookup")
db.Customer.find(
    { numberphone: "09010361944" },
    { name: 1, family: 1, numberphone: 1 }
)

print("\n9. 🔍 Find orders containing specific food")
db.Order.find({ codefood: { $in: [1] } }) // Find orders with Pizza (ID:1)

print("\n10. 📊 Customer age statistics")
db.Customer.aggregate([
    {
        $group: {
            _id: null,
            averageAge: { $avg: "$age" },
            minAge: { $min: "$age" },
            maxAge: { $max: "$age" },
            totalCustomers: { $sum: 1 }
        }
    }
])

print("✅ All queries executed successfully!")