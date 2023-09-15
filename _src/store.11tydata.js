const { client } = require("./lib/commerce");

module.exports = async () => {
  const { data: products } = await client.products.list();

  return products;
};
