let errorArea = document.getElementById("errorArea");
let a = document.getElementById("user");

const checkPass = (user) => {
  let minPassLength = 8;
  let minUppercase = 2;
  let minLowercase = 2;
  let minNumber = 2;
  let minSpecial = 2;

  let cantUppercase = 0;
  let cantLowercase = 0;
  let cantNumber = 0;
  let cantSpecial = 0;

  let checkedArray = user.split("");

  checkedArray.map((e) => {
    if (e === e.toUpperCase() && isNaN(e) === true) {
      cantUppercase++;
    }
    if (e === e.toLowerCase() && isNaN(e) === true) {
      cantLowercase++;
    }
    if (isNaN(e) === false) {
      cantNumber++;
    }
    if (
      (e.charCodeAt(0) >= 33 && e.charCodeAt(0) <= 47) ||
      (e.charCodeAt(0) >= 58 && e.charCodeAt(0) <= 64) ||
      (e.charCodeAt(0) >= 91 && e.charCodeAt(0) <= 96)
    ) {
      cantSpecial++;
    }
  });

  if (user == "") {
    errorArea.innerHTML = ``;
    errorArea.innerHTML += `<p id="error">Ingrese su contraseña</p><br>`;
  } else {
    if (user.length < minPassLength) {
      errorArea.innerHTML = ``;
      errorArea.innerHTML += `<p id="error">La contraseña debe ser mayor a ${minPassLength} caracteres</p><br>`;
    } else {
      if (cantUppercase < minUppercase) {
        errorArea.innerHTML = ``;
        errorArea.innerHTML += `<p id="error">La contraseña debe contener al menos ${minUppercase} mayuscula(s)</p><br>`;
      } else {
        if (cantLowercase < minLowercase) {
          errorArea.innerHTML = ``;
          errorArea.innerHTML += `<p id="error">La contraseña debe contener al menos ${minLowercase} minuscula(s)</p><br>`;
        } else {
          if (cantNumber < minNumber) {
            errorArea.innerHTML = ``;
            errorArea.innerHTML += `<p id="error">La contraseña debe contener al menos ${minNumber} número(s)</p><br>`;
          } else {
            if (cantSpecial < minSpecial) {
              errorArea.innerHTML = ``;
              errorArea.innerHTML += `<p id="error">La contraseña debe contener al menos ${minSpecial} caracter(es) especiale(s)</p><br>`;
            } else {
              if (
                checkedArray.length >= minPassLength &&
                cantUppercase >= minUppercase &&
                cantLowercase >= minLowercase &&
                cantNumber >= minNumber &&
                cantSpecial >= minSpecial
              ) {
                errorArea.innerHTML = ``;
                errorArea.innerHTML += `<p id="correct">La contraseña es segura</p>`;
              }
            }
          }
        }
      }
    }
  }
  a.focus();
};
