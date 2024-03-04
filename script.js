const productList = document.getElementById("product-list");

// Fetch data from endpoint using Axios
axios
  .get("https://s3.amazonaws.com/open-to-cors/assignment.json")
  .then((response) => {
    const products = response.data;
    console.log(products);

    // Sort products based on descending popularity
    Object.values(products.products).sort(
      (a, b) => b.Popularity - a.Popularity
    );

    // Display each product
    Object.values(products.products).forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("card");
      var randomNumber = Math.floor(Math.random() * 1000);
      productElement.style.backgroundImage =
        "url('https://picsum.photos/200/300?random=" + randomNumber + "')";
      productElement.style.backgroundSize = "cover"; // Cover the entire card
      productElement.style.backgroundPosition = "center"; // Center the background image

      // Create components for each record
      productElement.innerHTML = `
      <div class="subcategory"> ${product.subcategory}</div>
      <div class="title">${product.title}</div>
      <div class="price">$${product.price}</div>
      <div class="popularity"><span>&#x2605;</span> ${product.popularity}</div>
      `;

      productList.appendChild(productElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
