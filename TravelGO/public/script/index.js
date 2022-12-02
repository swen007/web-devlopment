
function loadPackages(jsonObject) {
    let container = document.querySelector(".box-container");
    console.log(jsonObject)
    for (let package of jsonObject) {
        console.log(package)
        let box = document.createElement('div');
        container.append(box);
        box.setAttribute('class', 'box');

        // image 
        let img = document.createElement('img');
        img.setAttribute('src', package["image"]);
        box.append(img);

        // content
        let content = document.createElement('div');
        content.setAttribute('class', 'content');
        box.append(content);

        // h3
        let h3 = document.createElement('h3');
        h3.textContent = package["content"]["h3"];
        content.append(h3);

        // p
        let p = document.createElement('p');
        p.textContent = package["content"]["p"];
        content.append(p);

        // price
        let price = document.createElement('div');
        price.className = "price";
        content.append(price);
        price.innerHTML = `${package["content"]["oldprice"]} <span>${package["content"]["newprice"]}</span>`;

        // button
        let a = document.createElement('a');
        a.setAttribute('href', "#");
        a.setAttribute("class", "btn");
        a.textContent = package["content"]["button"];
        content.append(a);
    }
}

function loadhome(jsonobject){
    let content=document.createElement("div")
    let home=document.querySelector("#home")
    home.append(content)
    content.className="content"
    
    //h3
    let h3=document.createElement("h3")
    content.append(h3)
    h3.textContent=jsonobject["h3"]

    //p
    let p=document.createElement("p")
    content.append(p)
    p.textContent=jsonobject["p"]

    let a=document.createElement("a")
    content.append(a)
    a.textContent=jsonobject["a"]
    a.className=jsonobject["class"]
    a.href=jsonobject["href"]
    
}

async function loadPage() {
    let req = new Request("/json/index.json");
    let res = await fetch(req);

    let jsonObject = await res.json();

    loadPackages(jsonObject["packages"]);
    loadhome(jsonObject["home"])
}

loadPage()