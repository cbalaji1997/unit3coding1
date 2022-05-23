//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",myfunction)

function add(types,Description, price,image){
      this.types=types;
      this.Description=Description;
      this.price=price;
      this.image=image;
}

 function myfunction (){
     event.preventDefault()
    var types=document.querySelector("#type").value
    var Description=document.querySelector("#desc").value
    var price=document.querySelector("#price").value
    var image=document.querySelector("#image").value

    var obj=new add(types,Description, price,image)
    var arr=JSON.parse(localStorage.getItem("products")) ||[]
    arr.push(obj)
    localStorage.setItem("products",JSON.stringify(arr))
    console.log(obj)
}