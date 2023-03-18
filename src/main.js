let usuarioIngreado,
  claveIngresada,
  saldo,
  intentos,
  usuarioGuardado,
  claveGuardada;

saldo = 10000;
usuarioGuardado = "mreyes";
claveGuardada = "1234";
intentos = 0;

for (let i = 1; i < 4; i++) {
  usuarioIngreado = prompt("Ingrese nombre de usuario: ");
  claveIngresada = prompt("Ingrese contraseña: ");
  if (usuarioIngreado == usuarioGuardado && claveIngresada == claveGuardada) {
    alert("Ingreso autorizado. Su saldo es: $" + saldo);
    break;
  } else {
    alert("Usuario o clave incorrecto.");
    intentos = i;
  }
}

if (intentos == 3) {
  alert(
    "Cumplio el máximo de intentos. Por su seguridad la cuenta se ha bloqueado."
  );
}
