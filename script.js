let btn = document.getElementById("btn");

let joke = document.getElementById("joke");

btn.addEventListener("click", getJoke)

// function getJoke(){

//     fetch("https://icanhazdadjoke.com/slack")

//     .then(function(res){
//        return res.json()
//     })
//     .then(function(data){
//         return data.attachments.forEach(function(j){
//             joke.innerHTML=j.text
//         })
//     })
// }

// another solve
async function getJoke(){
    
    let config = {
       
        headers : {
            Accept: "application/json"
        }
    }

   let res = await fetch("https://icanhazdadjoke.com/",config)

   let data = await res.json();

         joke.innerHTML = data.joke
    
}