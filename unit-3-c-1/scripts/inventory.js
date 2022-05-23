var data=JSON.parse(localStorage.getItem("products")) ||[]

data.map(function(elem,i){
    var div=document.createElement("div")

    var p=document.createElement("p")
    p.innerText=elem.types

    var p1=document.createElement("p")
    p1.innerText=elem.Description

    var p2=document.createElement("p")
    p2.innerText=elem.price

    console.log(p,p1,p2)

    let btn=document.createElement("button");
    
    btn.setAttribute("id","remove_product")
    btn.innerText="Remove"
    btn.addEventListener("click",function()
    {
        remove(elem,i)
    })

    var img=document.createElement("img")
    img.src=elem.image
    div.append(img,p,p1,p2,btn)
    document.querySelector("#all_products").append(div)
})

function  remove(elem,i){
    console.log(elem)
    data.splice(i,1)
    console.log(data)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload()
}