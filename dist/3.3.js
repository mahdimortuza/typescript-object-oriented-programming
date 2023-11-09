"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(3, 9);
    const result2 = add("6", "6");
    console.log(result1);
    console.log(result2);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`my name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`my name is ${user.name}`);
        }
    };
    const normalUser = {
        name: " mr. normal bhai"
    };
    const adminUser = {
        name: "mr. admin bhai",
        role: "admin"
    };
    getUser(adminUser);
}
