let vetor = [10,20,30,40,50,60,70,80,90];

for(let numero of vetor){
    console.log(numero);
}

for(let indice in vetor){
    console.log(vetor[indice])
}

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for(let linha of matriz){
    for(let elemento of linha){
        console.log(elemento)
    }
}


/*
    adicionar um elemento ao final
    vetor.push(novo_elemento);
    
    remover um elemento do final
    vetor.pop();

    para adicionar ao comeco
    vetor.unshift(novo_elemento);

    para remover do comeco 
    vetor.shift();                  */


