// Question 52
console.log("\n\tQuestion 52 Starts Here\t\n");
//This code defines an object representing a smartphone with its make, 
//model, and specifications, then logs it to the console.
let smartphone = {
    make: "Iphone",
    model: "15 Pro Max",
    specs: {
        storage: "1TB",
        screenSize: "6.5 inches",
        batteryLife: "3 hours"
    }
};
console.log(smartphone);
// Question 53
console.log("\n\tQuestion 53 Starts Here\t\n");
/*This code declares an object representing a developer's skills 
with languages, frameworks, and tools, then extracts and logs t
he second item from each category.*/
let developerSkills = {
    languages: ["TypeScript", "Python", "Php"],
    frameworks: ["React", "Vue", "Express"],
    tools: ["Git", "Webpack", "Docker"]
};
let { languages, frameworks, tools } = developerSkills;
console.log(`Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[1]}`);
// Question 54
console.log("\n\tQuestion 54 Starts Here\t\n");
/*This code defines a function to create an object with a dynamic 
key-value pair, then uses it to create a user preference object 
for a specified theme, and finally logs the user preference to the console.*/
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("supercar", "bugatti");
console.log(userPreference);