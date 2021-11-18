

let elements = document.getElementsByClassName('name-tag');



for(let i =0; i< elements.length; i++){
    let newElements = document.createElement('p').innerHTML='hello World';
    elements[i].append(newElements);

}






