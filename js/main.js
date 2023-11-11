var productName = document.getElementById("names")
var productPrice = document.getElementById("price")
var productCateg = document.getElementById("categ")
var productDescription = document.getElementById("description")
var count = document.getElementById("count")
var count1 = document.getElementById("count1")
var btn = document.getElementById("btn")
var mood = "crt"
var test;
var productContainer;

if (localStorage.getItem("ourProduct") == null) {
  var productContainer = []
}
else {
  productContainer = JSON.parse(localStorage.getItem("ourProduct"))
  displayProduct()
}

function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    categ: productCateg.value,
    description: productDescription.value,
    count: count.value
  }

  if (mood === "crt") {
    if (product.count > 1) {
      for (var i = 0; i < count.value; i++) {
        productContainer.push(product)
      }
    }
    else {
      productContainer.push(product)
    }
  }
  else {
    productContainer[test] = product
    btn.innerHTML = "Add product"
    count.style.display = "block"
    count1.style.display = "block"
    btn.className = "btn btn-primary my-3 mr-3"
    mood = "crt"
  }

  localStorage.setItem("ourProduct", JSON.stringify(productContainer))



  displayProduct()
  clearVal()
  console.log(productContainer);

}

function displayProduct() {
  var productBox = ""
  for (var i = 0; i < productContainer.length; i++) {
    productBox += `<tr>
                    <td>${i + 1}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].categ}</td>
                    <td>${productContainer[i].description}</td>
                    <td><button class="btn btn-danger" onclick=" deleteRow(${i})">delete</button></td>
                    <td><button class="btn btn-warning"  onclick=" editRow(${i})">Edit</button></td>
                  </tr>`
  }
  document.getElementById("t-body").innerHTML = productBox
}

function clearVal() {
  productName.value = ""
  productPrice.value = ""
  productCateg.value = ""
  productDescription.value = ""
  count.value = ""
}

function deleteAll() {
  productContainer.splice(0)
  localStorage.setItem("ourProduct", JSON.stringify(productContainer))

  displayProduct()
}

function deleteRow(i) {
  productContainer.splice(i, 1)
  localStorage.setItem("ourProduct", JSON.stringify(productContainer))
  displayProduct()
}

function editRow(i) {
  productName.value = productContainer[i].name
  productPrice.value = productContainer[i].price
  productCateg.value = productContainer[i].categ
  productDescription.value = productContainer[i].description
  count.style.display = "none"
  count1.style.display = "none"
  btn.innerHTML = "Update"
  btn.className = "btn btn-warning my-3 mr-3"
  mood = "update"
  test = i
}

function searchProduct(term){
  var productBox2 =""
  for (var i = 0; i < productContainer.length; i++) {
    if (productContainer[i].name.includes(term.trim())  == true){
    productBox2 += `<tr>
                    <td>${i + 1}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].categ}</td>
                    <td>${productContainer[i].description}</td>
                    <td><button class="btn btn-danger" onclick=" deleteRow(${i})">delete</button></td>
                    <td><button class="btn btn-warning"  onclick=" editRow(${i})">Edit</button></td>
                  </tr>`
  }
  }
  document.getElementById("t-body").innerHTML = productBox2
}
var x ="mohamed"
x.includes
