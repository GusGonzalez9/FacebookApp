
// Devolver la suma de los que son >0 y <1000

function sumBajoImportes(arrayDeImportes){
    
    let total= 0
    
    for(let i = 0 ; i < arrayDeImportes.length ; i++){
    
        if(arrayDeImportes[i]>0 && arrayDeImportes[i] <= 1000 ){
           total += arrayDeImportes[i]
        }
    }
    return  total
}


function verificadorAsientos(arrayAsientosDisponibles,asientoConsultado){

    for(let i = 0 ; i < arrayAsientosDisponibles.length ; i++){

        if(arrayAsientosDisponibles[i] == asientoConsultado){

            return 'Felicitaciones el asiento numero '+asientoConsultado+' esta disponible'

        }
    }
    return 'Lo sentimos, el asiento numero '+asientoConsultado+ ' no esta disponible, pero aun quedan '+arrayAsientosDisponibles.length+' disponibles'
}


function reporteDePasajeros(estacion){

    let respuesta = []
  

    for(let i = 0 ; i <= estacion; i++){
        let pasajeros=0; 

        if(estacion !==5){
            pasajeros = 200 + i*(50-30)
        }else{
            pasajeros = 200 + 4*(50-30) +40
        }
       
        respuesta.push('En la estacion '+i+' hay '+pasajeros+' arriba del tren')
        
    }
    return respuesta
}
