let search=document.getElementById("searchs")
let listcon=document.getElementById("list-con")
function task(){
    
    if(search.value===''){
        alert("You Have To Write Something HEMA 😉")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=search.value;
        listcon.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="&#x2715"
        li.appendChild(span)
    }
    search.value='';
    savedata();
}
listcon.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata(){
    localStorage.setItem("data",listcon.innerHTML)
}
function showdata(){
listcon.innerHTML=localStorage.getItem("data")
}
showdata();