async function loadProducts() {
  try {
    const res = await fetch('/products/index.json');
    if (!res.ok) throw new Error('Failed to load products');
    const products = await res.json();
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `<h2>${p.title}</h2><p>${p.description}</p><strong>$${p.price}</strong>`;
      container.appendChild(div);
    });
  } catch (err) {
    document.getElementById('product-list').innerText = 'No products found.';
  }
}
loadProducts();