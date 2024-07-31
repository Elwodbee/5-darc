fetch("https://fakestoreapi.com/products?limit=10")
.then(savol => savol.json())
.then(javob =>{
    javob.forEach( item => {
        const wrapper = document.createElement("div");

        wrapper.style.width = "400px";
        wrapper.style.border = "3px solid black"
        
        
        const newTitle = document.createElement("h1");
        const newprice = document.createElement("h2");
        const newImage = document.createElement("img");
        newImage.style.width = "200px"
        
        newTitle.textContent = item.title;
        newprice.textContent =`Price: ${item.price}`;
        newImage.src = item.image;

        wrapper.append(newTitle,newImage,newprice);
        document.body.appendChild(wrapper);
    });
})