document.querySelector('h1').innerHTML += '<i style="color:purple;"> - Como estan!</i>'

document.querySelector('p').style.color = "red"

let ul = docuemnt.createElement('ul')
for(var i=0; i<5; i++) {
    ul.innerHTML +=  `<li>Item ${i+1}</i>`
}
document.body.appendChild(ul)