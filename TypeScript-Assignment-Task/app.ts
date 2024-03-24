// Question-31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var users = ["misbah", "kinza", "kainat", "komal", "haniya"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("Hello admin, Would you like to see a status report");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
// Question -32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var current_users = ["misbah", "kinza", "kainat", "komal", "haniya"];
var new_users = ["ramsha", "liza", "minsa", "komal", "haniya"];
new_users.forEach(function (newusername) {
    var lowerCase = newusername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase().includes(lowerCase); })) {
        console.log("thw username ".concat(newusername, " is not available . Please take other name"));
    }
    else {
        console.log("the username ".concat(newusername, "is available"));
    }
});
// Question -33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, number_1 = number; _a < number_1.length; _a++) {
    var num = number_1[_a];
    var ordinalEnding = void 0;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
}
// Question -34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var Pizzas = ["pepperoni ", "BBA Chicken", "Cuban "];
for (var _b = 0, Pizzas_1 = Pizzas; _b < Pizzas_1.length; _b++) {
    var Pizza = Pizzas_1[_b];
    console.log("I like ".concat(Pizza, " pizza"));
}
console.log("I reallty like pizza!");
// Question 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var Animals = ["dog", "cat", " rabbit "];
for (var _c = 0, Animals_1 = Animals; _c < Animals_1.length; _c++) {
    var animal = Animals_1[_c];
    console.log("A ".concat(animal, " would  make a great pet "));
}
console.log(" Any of these  animal would make a great pet ");
