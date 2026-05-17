import fs from "fs";

const data = JSON.parse(fs.readFileSync("../data/nutritions.json", "utf8"));

const provinceMnMap = {
  Uvs: "Увс",
};

const foodGroupMnMap = {
  "Cereals and Cereal products": "Үр тариа ба үр тариан бүтээгдэхүүн",
};

const output = data.map((item) => {
  const newItem = { ...item };

  newItem.food_group = {
    en: item.food_group,
    mn: foodGroupMnMap[item.food_group] || "",
  };

  newItem.food_name = {
    en: item.food_name,
    mn: item.native_name || "",
  };

  newItem.province = {
    en: item.province,
    mn: provinceMnMap[item.province] || "",
  };

  delete newItem.native_name;

  return newItem;
});

fs.writeFileSync("./data/output.json", JSON.stringify(output, null, 2), "utf8");

console.log("Амжилттай хөрвүүллээ!");
