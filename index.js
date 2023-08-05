document.addEventListener("DOMContentLoaded", fetch("http://localhost:3000/fruits")
.then(resp =>{
    return resp.json();
})
.then(data =>{
    (data);
    //getting persimmon data from API and editing DOM
    let persimmon =data[0];
    document.getElementById("persimmon").innerText= (persimmon.name);
    for(let key in persimmon){
        let list =(`${key}:${persimmon[key]}`);
        delete (persimmon.nutritions);
        let newList= document.createElement("li");
        newList.innerText= list;
        document.getElementById('persimmon-description').append(newList);
        }
         //getting strawberry data from API and editing DOM
    let strawberry =data[1];
    document.getElementById("strawberry").innerText= (strawberry.name);
    for(let key in strawberry){
       let list1 =(`${key}:${strawberry[key]}`);
        delete (strawberry.nutritions);
        let newList1= document.createElement("li");
        newList1.innerText= list1;
        document.getElementById('strawberry-description').append(newList1);
    }
    //getting banana data from API and editing DOM
    let banana =data[2];
    document.getElementById("banana").innerText= (banana.name);
    for(let key in banana){
       let list2 =(`${key}:${banana[key]}`);
        delete (banana.nutritions);
        let newList2= document.createElement("li");
        newList2.innerText= list2;
        document.getElementById('banana-description').append(newList2);
    }
    //getting tomato data from API and editing DOM
    let tomato =data[3];
    document.getElementById("tomato").innerText= (tomato.name);
    for(let key in tomato){
       let list3 =(`${key}:${tomato[key]}`);
        delete (tomato.nutritions);
        let newList3= document.createElement("li");
        newList3.innerText= list3;
        document.getElementById('tomato-description').append(newList3);
    }
    //getting pear data from API and editing DOM
    let pear =data[4];
    document.getElementById("pear").innerText= (pear.name);
    for(let key in pear){
       let list4 =(`${key}:${pear[key]}`);
        delete (pear.nutritions);
        let newList4= document.createElement("li");
        newList4.innerText= list4;
        document.getElementById('pear-description').append(newList4);
    }
    //getting durian data from API and editing DOM
    let durian =data[5];
    document.getElementById("durian").innerText= (durian.name);
    for(let key in durian){
       let list5 =(`${key}:${durian[key]}`);
        delete (durian.nutritions);
        let newList5= document.createElement("li");
        newList5.innerText= list5;
        document.getElementById('durian-description').append(newList5);
    }
})
.catch(error =>{
    console.log(error);
}))
document.getElementById("yes").addEventListener("click", ()=>{
    alert("We are glad this website was helpful!");
})
document.getElementById("no").addEventListener("click", ()=>{
    alert("We are sorry this website was not helpful.");
})
document.getElementById("nav").addEventListener("mouseover", (e)=>{
    e.target.style.color = "aqua";
})