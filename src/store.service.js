function generateProducts() {
  const skills = ['JavaScript', 'CSS', 'SASS', 'Node', 'Angular 2', 'VUE'];

  return skills.map(generateProduct);
}

function generateProduct( skill, i )  {
    return {
      id         : i + 1,
      title      : `Mastering ${skill}`,
      description: `${skill} lorem  ipsum dkhd daklhd dakhdk dakhdk da`,
      price      : (i + 1) * 10
    }
  }

var products = [];

function getProducts() {
  return new Promise(resolve => {
    // simple caching mechanism
    if( products.length ) {
      resolve(products);
    }
    else {
      setTimeout(() => {
        products = generateProducts();
        resolve(products);
      }, 2000);
    }

  });
}

function getProductById( productId ) {
  return getProducts().then(products => {
    const product = products.find(product => productId === product.id);
    return product;
  });
}

function addProduct(productName) {
  products.push(generateProduct(productName, products.length));
}

export default {
  getProducts,
  getProductById,
  addProduct
}