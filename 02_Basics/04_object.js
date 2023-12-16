// const tinderUser = new Object()
const tinderUser= {}
tinderUser.id = "123456abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email :"some@gamil.com",
    fullname:{
        userFullName:{
            firstname: "Rajiv",
            lasrname: "MAhato"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj5 = {7: "a", 8: "b", 9: "f", 10:"g"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4, obj5)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },{
        id: 1,
        email: "h@gmail.com"
    },{
        id: 1,
        email: "h@gmail.com"
    },{
        id: 1,
        email: "h@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor} =course
// console.log(courseInstructor);
console.log(instructor);
// api format 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


