//Ejericio de Switch

let SignoHoroscopo = prompt("Ingresa tu signo para conocer tu horoscopo");

switch (SignoHoroscopo) {
    //para jugar con nuestros casos, el tipo de dato debe coincidir para que se ajecute correctamente

    case "Aries":
        console.log("Hoy vas a encontrar $50 pesos de la buena suerte, abre bien los ojos.")
        break;

    case "Tauro":
        console.log("Hoy vas a a recibir una noticia que te va a cambiar la vida.");
        break;

    case "Géminis":
        console.log("Hoy vas a vivir una pelea con alguien importante en tu vida, trata de ser muy sincero y empatico.");
        break;

    case "Cáncer":
        console.log("Esta semana vas a recibir la oferta laboral que tanto estabas esperando.");
        break;

    case "Leo":
        console.log("Esta semana vas a tomar desiciones muy importantes, descansa bien.");
        break;

        case "Virgo":
            console.log("Esta semana vas a encontrarte con una persona del pasado, ambos estan listos para tomar un camino juntos.");
            break;
    
        case "Libra":
            console.log("Hoy vas a conocer a una persona que se volvera muy importante en tu vida.");
            break;
    
        case "Escorpio":
            console.log("Hoy vas a encontrar $5 pesos de la buena suerte.");
            break;
    
        case "Sagitario":
            console.log("Esta semana te daras cuenta lo importante que son algunas personas en tu vida, deja de hacerlas de menos más tiempo o te arrepentiras.");
            break;
    
        case "Capricornio":
            console.log("Hoy te daras cuenta que es más importante dar que recibir, regala algo a alguna persona que quieres y date cuenta de ese sentimiento tan especial.");
            break;

            case "Acuario":
            console.log("Hoy vas a conocer el amor de tu vida, abre bien los ojos.");
            break;

            case "Piscis":
            console.log("Esta semana vas a conocer a alguien muy especial, permitete conocer a las personas.");
            break;

    default:
        console.log("Ingresaste un signo que no es valido");

    }