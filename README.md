# 🍽️ Food Order Management System - MongoDB

A complete MongoDB database system for managing food orders, customers, and restaurant operations.


## 👨‍💻 Author
**Masoud Ghasemi**

- **GitHub**: [sorna-fast](https://github.com/sorna-fast)
- **Email**: [masudpythongit@gmail.com](mailto:masudpythongit@gmail.com)
- **linkedin**: [masoud-ghasemi](https://www.linkedin.com/in/masoud-ghasemi-748412381)
- **Telegram**: [@Masoud_Ghasemi_sorna_fast](https://t.me/Masoud_Ghasemi_sorna_fast)

---

## 📁 Project Structure

```
food-order-mongodb/
├── database/
│   └── food_orders.js          # Complete MongoDB database setup
├── README.md                   # Project documentation
└── queries_examples.js         # Sample queries and operations
```

## 🗄️ File Contents

### 1. `database/food_orders.js`
Contains the complete MongoDB database setup including:
- Database and collection creation
- Sample data insertion for Foods, Customers, and Orders
- Collection relationships and aggregations
- All business queries and operations

### 2. `queries_examples.js` 
Contains practical query examples:
- Basic CRUD operations
- Advanced aggregations
- Business intelligence queries
- Sales reports and analytics

## 🗃️ Database Collections

### 📋 Food Collection
- Stores restaurant menu items
- Fields: `_id`, `foodname`, `price`
- 10 sample food items with Persian and international cuisine

### 👥 Customer Collection  
- Manages customer information
- Fields: `_id`, `name`, `family`, `age`, `numberphone`, `active`
- 20 sample customers with active/inactive status

### 📦 Order Collection
- Tracks customer orders
- Fields: `_id`, `CodeCustomer`, `codefood`, `date`
- 30 sample orders with food arrays and dates

## 🔍 Key Features

### Basic Operations
- **Food Management**: Sort by price, filter by price range
- **Customer Management**: Active customer queries, contact info
- **Order Processing**: Date-based order filtering

### Advanced Analytics  
- **Sales Reporting**: Daily sales aggregation
- **Customer Insights**: Order counts per customer
- **Relationship Mapping**: Join operations between collections

### Business Intelligence
- Popular food items analysis
- Customer ordering patterns
- Revenue tracking by date

## 🚀 Quick Start

1. **Start MongoDB**
```bash
mongod
```
To run this project, you will need:
- Install **MongoDB** (version 4.0 or higher).
- A database management tool such as **MongoDB Compass** or **Mongo Shell**.

2. **Run Database Setup**
```bash
mongo
use preparing_food
load('database/food_orders.js')
```

3. **Execute Queries**
```bash
# Run individual queries from food_orders.js
# Or load queries_examples.js for sample operations
```

## 📊 Sample Queries Included

1. **Food listings** sorted by price
2. **Active customers** with contact information  
3. **Price range filtering** for menu items
4. **Date-specific orders** retrieval
5. **Daily sales aggregation**
6. **Customer order statistics**

This project provides a complete foundation for a food ordering system using MongoDB with practical, real-world queries and data relationships.