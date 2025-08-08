//CONSULTA

//1.Consultar los equipos de la disciplina "futbol"

db.delegaciones.find(
  { "equipos.disciplina": "Fútbol" },
  { _id: 0, "equipos.nombre": 1, "equipos.disciplina": 1 }
)

//2.Lista de competencias en la fecha "2025-07-15"

db.competencias.find(
  { fecha: "2025-07-15" },
  { _id: 0, nombre_competencia: 1, fecha: 1 }
)

//3.Delegaciones del país "Colombia"

db.delegaciones.find(
  { pais:"Colombia"},
  { _id: 0, nombre: 1 }
)

//4.Delegacion donde se encuentra el jugador con el documento "7201001003"

db.delegaciones.find(
    {"equipos.miembros.documento":"7201001003"},
    {_id:0,nombre:1}
)

//5.Delegaciones que tengan medallas de oro

db.delegaciones.find(
  { "medallas.oro": { $gt: 0 } },
  { _id: 0, nombre: 1, medallas: 1 }
)