const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./src/data/nutritions.json", "utf8"));
// const uniqueCollectionAreas = [...new Set(data.map((item) => item.collection_information["Additional collection information"]))];
const uniqueFields = [...new Set(data.map((item) => item.food_group))];
console.log(uniqueFields);
