


const json =
[
      {
        "pais": "España",
        "capital": "Madrid"
      },
      {
        "pais": "Albania",
        "capital": "Tirana"
      },
      {
        "pais": "Alemania",
        "capital": "Berlín"
      },
      {
        "pais": "Andorra",
        "capital": "Andorra la Vella"
      },
      {
        "pais": "Francia",
        "capital": "París"
      },
      {
        "pais": "Reino Unido",
        "capital": "Londres"
      },
      {
        "pais": "Bélgica",
        "capital": "Bruselas"
      },
      {
        "pais": "Croacia",
        "capital": "Zagreb"
      },
      {
        "pais": "Dinamarca",
        "capital": "Copenhage"
      },
      {
        "pais": "Eslovaquia",
        "capital": "Bratislava"
      },
      {
        "pais": "Estonia",
        "capital": "Tallin"
      },
      {
        "pais": "Finlandia",
        "capital": "Helsinki"
      },
      {
        "pais": "Italia",
        "capital": "Roma"
      },
      {
        "pais": "Luxemburgo",
        "capital": "Luxemburgo"
      },
      {
        "pais": "Mónaco",
        "capital": "Mónaco"
      },
      {
        "pais": "Países Bajos",
        "capital": "Ámsterdam"
      },
      {
        "pais": "Polonia",
        "capital": "Varsovia"
      },
      {
        "pais": "Portugal",
        "capital": "Lisboa"
      },
      {
        "pais": "Rusia",
        "capital": "Moscú"
      },
      {
        "pais": "Republica Checa",
        "capital": "Praga"
      }
     
    
    ]

   

  let tablas = document.getElementById("tablita");

    let generarTabla = '';

    for (x of json) {
        generarTabla += `<tr><td>${x.capital}</td><td>${x.pais}</td</tr>`
    }

    tablas.innerHTML += generarTabla;


    function myFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("inputBusqueda");
      filter = input.value;
      table = document.getElementById("tablita");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }

    function myFunction2() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("inputBusqueda2");
      filter = input.value;
      table = document.getElementById("tablita");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }