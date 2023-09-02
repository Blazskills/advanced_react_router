export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw {
      message: " Failed to fetch products",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.products;
}
