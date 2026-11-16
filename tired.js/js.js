// Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ
console.log("Task 1");
console.log("1. ===>>");


const user1 = {
    name: "Ivan",
    age: 20,
    hobby: "football",
    premium: true
};

user1.mood = "happy";
user1.hobby = "skydiving";
user1.premium = false;

const { name, age, hobby, premium, mood } = user1;

let keys = Object.keys(user1);

for (let key of keys) {
    console.log(key + ": " + user1[key]);
}

console.log("2. ===>>");

function countProps(obj) {
    const { name, age, city } = obj;

    return Object.keys(obj).length;
}

const user2 = {
    name: "Ivan",
    age: 20,
    city: "Kyiv"
};

console.log(countProps(user2));

console.log("3. ===>>");

function findBestEmployee(employees) {
    let bestEmployee = "";
    let maxTasks = 0;

    for (let name in employees) {
        let { } = employees;

        if (employees[name] > maxTasks) {
            maxTasks = employees[name];
            bestEmployee = name;
        }
    }

    return bestEmployee;
}

const employees = {
    Ivan: 10,
    Petro: 15,
    Oleg: 8
};

console.log(findBestEmployee(employees));


console.log("4. ===>>");

function countTotalSalary(employees) {
    let total = 0;

    const { Ivan, Petro, Oleg } = employees;

    total = Ivan + Petro + Oleg;

    return total;
}

const employees2 = {
    Ivan: 1000,
    Petro: 2000,
    Oleg: 1500
};

console.log(countTotalSalary(employees2));

console.log("5. ===>>");

function getAllPropValues(arr, prop) {
    let values = [];

    for (let item of arr) {
        const { name, price } = item;

        if (item[prop] !== undefined) {
            values.push(item[prop]);
        }
    }

    return values;
}

const products = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 30 },
    { name: "Orange", price: 40 }
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));

console.log("6. ===>>");

function calculateTotalPrice(allProducts, productName) {
    let total = 0;

    for (let product of allProducts) {
        const { name, price, quantity } = product;

        if (name == productName) {
            total = total + price * quantity;
        }
    }

    return total;
}

const allProducts = [
    { name: "Apple", price: 20, quantity: 3 },
    { name: "Banana", price: 30, quantity: 2 },
    { name: "Apple", price: 20, quantity: 2 }
];

console.log(calculateTotalPrice(allProducts, "Apple"));
console.log(calculateTotalPrice(allProducts, "Banana"));

// 2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

console.log("2 Task");

const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw"
};

const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        const id = this.transactions.length + 1;

        const transaction = {
            id: id,
            type: type,
            amount: amount
        };

        return transaction;
    },

    deposit(amount) {
        this.balance = this.balance + amount;

        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

        this.transactions.push(transaction);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів!");
        } else {
            this.balance = this.balance - amount;

            const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

            this.transactions.push(transaction);
        }
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (let transaction of this.transactions) {
            const { id: transactionId } = transaction;

            if (transactionId == id) {
                return transaction;
            }
        }
    },

    getTransactionTotal(type) {
        let total = 0;

        for (let transaction of this.transactions) {
            const { type: transactionType, amount } = transaction;

            if (transactionType == type) {
                total = total + amount;
            }
        }

        return total;
    }
};


account.deposit(676767);
account.deposit(831);
account.withdraw(200);

console.log("Баланс:", account.getBalance());
console.log("Історія транзакцій:", account.transactions);
console.log("Транзакція номер 1:", account.getTransactionDetails(1));
console.log("Всього поповнено:", account.getTransactionTotal(Transaction.DEPOSIT));
console.log("Всього знято:", account.getTransactionTotal(Transaction.WITHDRAW));
