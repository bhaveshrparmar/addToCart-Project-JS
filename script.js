const addItemForm = document.getElementById('addItemForm');
const addArray = JSON.parse(localStorage.getItem("newObj")) || [];


addItemForm.addEventListener('submit', (e) => {

    e.preventDefault();


    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productUrl = document.getElementById('productUrl').value;
    const category = document.getElementById('category').value;

    let id = addArray.length + 1;

    const obj = {
        id,
        productName,
        productPrice,
        productUrl,
        category
    }

    addArray.push(obj);


    let clutter = "";

    clutter = `
         <div class="card border-0 shadow mx-auto mt-5" style="width: 18rem;">
           <img src="${productUrl}" class="card-img-top" alt="Not Show Image" style="height: 200px;">
           <div class="card-body">
           <h4>Name : ${productName}</h4>
           <h4 class="card-title">Catogary : ${category}</h4>
             <h4 class="card-text">Price : ₹${productPrice}</h4>
         <button class="btn btn-primary " onclick="addTocart(${obj.id})" >Add To Cart</button>
         </div>
    </div>`


    document.querySelector("#cardContainer").innerHTML += clutter;


    localStorage.setItem("newObj", JSON.stringify(addArray));

})


function addTocart(id) {


    const singalProduct = addArray.find((product) => {
        return product.id === id;
    })


    let cartArray = JSON.parse(localStorage.getItem("cartList")) || [];


    const singalCart = cartArray.find((product) => {
        return product.id === id;
    })


    if (singalCart) {
        alert("Product Added To Cart");
        singalCart.count += 1;
    } else {
        const productObj = {
            ...singalProduct,
            count: 1
        }

        cartArray.push(productObj)
        alert("Product Added To Cart");

    }

    localStorage.setItem("cartList", JSON.stringify(cartArray));


    document.querySelector("#cartCounter").innerHTML = cartArray.length;

}
