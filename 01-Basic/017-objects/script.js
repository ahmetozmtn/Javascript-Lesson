let user1 = {
    name: "Uğur",
    lastname: "Fayton",
    age: 19,
    address: {
        city: "Unknown",
        state: "Unknown",
    },
    hobbies: ["VM's Setup", "Web Server Setup"],
};

let user2 = {
    name: "Uğur",
    lastname: "Fayton",
    age: 19,
    address: {
        city: "Unknown",
        state: "Unknown",
    },
    hobbies: ["VM's Setup", "Web Server Setup"],
};

let result;

result = user1.name;
result = user1.lastname;
result = user1["age"];
result = user1.address.city;
result = user1.address.state;
result = user1.hobbies[0];
result = user1.hobbies[1];

let users = [user1, user2];
result = users[1].name;

let products = [
    {
        productName: "Iphone 14",
        productPrice: 40000,
    },
    {
        productName: "Iphone 15",
        productPrice: 50000,
    },
];

result = products[0].productName;
result = products[0].productPrice;

console.log(result);
