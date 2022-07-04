//Vector contenedor de usuarios

let clientes = [
    usuario1={
        nombre: "Francisco",
        apellido: "Rodriguez",
        usuario: "frodriguez",
        contraseña: "1111",
        saldo: "500"
    },
    usuario2={
        nombre: "Luis",
        apellido: "Perez",
        usuario: "lperez",
        contraseña: "2222",
        saldo: "1000"
    },
    usuario3={
        nombre: "Esperanza",
        apellido: "Campos",
        usuario: "ecampos",
        contraseña: "3333",
        saldo: "500"
    },
    usuario4={
        nombre: "Rosa",
        apellido: "Salcedo",
        usuario: "rsalcedo",
        contraseña: "4444",
        saldo: "500"
    }
];




let registro = document.querySelector("#formulario-ingresar");

registro.addEventListener("click",ingresarUsuarios);

function ingresarUsuarios(){
    let usuario = document.querySelector("#formulario-usuario");
    let contraseña = document.querySelector("#formulario-contraseña");

    for(let i=0; i<clientes.length; i++){
        if(usuario === clientes[i].usuario && contraseña === clientes[i].contraseña){
            alert("El usuario ha sido reconocido exitosamente.");
            break;
        }else{
            alert("El usuario o la contraseña es incorrecto.");
        }
    }
}