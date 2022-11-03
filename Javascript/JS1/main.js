malitos = ['carlitos','fran','richi','gafas','paco','juanmita','andrea','manolito','pablito','pedrito']

function generaDatos(filas,columnas) {

 tablita = document.getElementById('tablita');

 let generarTabla = ''
  for (let i = 0; i < filas; i++) {
       generarTabla += `<tr>`
      
      for (let j = 0; j < columnas; j++) {

        generarTabla += `<td>${malitos[Math.floor(Math.random() * malitos.length )]}</td>` 

      }
      generarTabla += `</tr>`
    }
    
    tablita.innerHTML += generarTabla;
} 
  generaDatos(12,8);