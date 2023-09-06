// export async function getProducts() {
//   const res = await fetch("https://dummyjson.com/products");
//   if (!res.ok) {
//     throw {
//       message: " Failed to fetch products",
//       statusText: res.statusText ,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.products;
// }

// export async function getProductsDetails(id) {
//   const res = await fetch(`https://dummyjson.com/products/${id}`);
//   if (!res.ok) {
//     throw {
//       message: " Failed to fetch products",
//       statusText: res.statusText ,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data;
// }

export async function getProducts(id) {
  const url = id
    ? `https://dummyjson.com/products/${id}`
    : "https://dummyjson.com/products";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: " Failed to fetch products",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return id ? data : data.products;
}

export async function loginUser(creds) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}
