export default async function fetchProducts() {
  const data = await fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`)
      } else {
        return response
      }
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return data;
}