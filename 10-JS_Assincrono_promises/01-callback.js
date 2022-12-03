function imprimirDado(dado){
    console.log('parte 1')
    console.log(dado())
}

imprimirDado(function(){
    return('parte 2')
}
)