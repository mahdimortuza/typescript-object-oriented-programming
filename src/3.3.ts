{
    // type guards

    // typeOf --> type guard
    type AlphaNumeric = string | number
    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }
    const result1 = add(3, 9)
    const result2 = add("6", "6")
    console.log(result1);
    console.log(result2);

    // in --> type guard
type NormalUser = {
    name: string
}

type AdminUser = {
    name: string
    role: "admin"
}

const getUser = (user: NormalUser | AdminUser) => {
    if("role" in user){
        console.log(`my name is ${user.name} and my role is ${user.role}`);
    }else{
        console.log(`my name is ${user.name}`);
    }
}

const normalUser: NormalUser ={
    name: " mr. normal bhai"
}
const adminUser: AdminUser = {
    name: "mr. admin bhai",
    role: "admin"
}
getUser(adminUser)



}