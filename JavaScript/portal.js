
// function inicio() {
//     $("#btn-ingresar").click(check);
// }


// function check() {
//   checkUser();
//   checkPassword();
//   login();
// }

// /* validar usuario*/

// function checkUser() {
//   var texto = $("#emailLog").val();
//   $("#emailLog").removeClass("input-invalido");
//   $("#emailLog").parent().removeClass("invalido");
//   $("#emailLog").next().remove();
//   if (texto === "") {
//     $("#emailLog").addClass("input-invalido");
//     $("#emailLog").parent().addClass("invalido");
//     $("#emailLog").after(
//       '<p class="font-weight-light mt-3">olvidaste poner tu usuario</p>'
//     );
//   }
// }

// /* validar password vacio*/
// function checkPassword() {
//     var texto = $("#passLog").val();
//     $("#passLog").removeClass("input-invalido");
//     $("#passLog").parent().removeClass("invalido");
//     $("#passLog").next().remove();
//     if (texto === "") {
//         $("#passLog").addClass("input-invalido");
//         $("#passLog").parent().addClass("invalido");
//         $("#passLog").after('<p class="font-weight-light mt-3">olvidaste poner tu contraseña</p>');
//     }
// }

// function login() {
//     if (checked === true) {
//         var username = $("#emailLog").val();
//         var password = $("#passLog").val();
//         $.ajax({
//             type: 'GET',
//             localStorage.getItem("password"),
//             dataType: 'json',
//             headers: {
//                 'Authorization': 'Basic ' + btoa(username + password)
//             },
//             success: function (exito) {
//             url: '../ingresoPortal.html'  //a donde iria  
//             },
//             complete: function (jqXHR) {
//                 if (jqXHR.status === '401') {
//                     $("form").addClass("input-invalido");
//                     $("form").addClass("invalido");
//                     $("#passLog").after('<p class="font-weight-light mt-3">lo sentimos pero no encontramos la cuenta a la que quiere acceder</p>');
//                 }
//             }
//         });
//     }
// }



//const inputsPortal = document.querySelectorAll("#form input");

// inputsPortal.forEach((input) => {
//   input.addEventListener("keyup", checkUser);
//   input.addEventListener("blur", checkUser);
// });

// let boton = document.getElementById("btn-ingresar");
// boton.onclick = () => {
//   for (let i = 0; i, localStorage.length; i++) {
//     let clave = localStorage.checkPassword(i);
//     console.log("valor:" + localStorage.getItem(clave));
//   }

//   if (clave == true) {
//     location.href = "../ingresoPortal.html";
//   } else {
//     alert("Datos Incorrectos");
//   }
// };



