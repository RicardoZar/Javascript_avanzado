/* Switch, estructura de control de flujo (tipo if) nos ayuda a tomar deciciones con la evaluación de una condición */
/*
const edad=parseInt(prompt("Ingresa tu edad"));
let mensaje="";

switch (edad){
    case 18:
        mensaje="Acaba de cumplir la mayoria de edad";
        break;
        case 25:
            mensaje="Ya eres adulto";
            break;
        case 70:
            mensaje="Ya eres de la tercera edad";
            break;
        default:
            mensaje="Estas fuera del rango de edad";
            break;
}
document.write(`<p>${mensaje}</p>`);
*/

const nombre=prompt("Ingresa tu nombre");
let mensaje="";

switch (nombre){
    case "ricardo":
        mensaje ="Eres administrador";
        break;
    case "juan":
        mensaje="Eres usuario";
        break;
    default:
        mensaje="No tienes permisos para usar el sistema";
        break;
}

document.write(`<p>${mensaje}</p>`);