//Consultas complejas

//1.Delegaciones de Colombia con al menos 1 medalla de oro

db.delegaciones.find(
  { $and: [
      { pais:"Colombia"},
      { "medallas.oro": { $gt: 0 } }
    ]
  },
  { _id: 0, nombre: 1, medallas: 1,pais:1}
)

//2.Competencias con fecha posterior al 15 de agosto de 2025

db.competencias.find(
  { $and: [
      { fecha: { $gt: "2025-08-15" } }
    ]
  },
  { _id: 0, nombre_competencia: 1, fecha: 1 }
)

//3.Jugadores de 20 años o menores

db.delegaciones.find(
  { $and: [
      { "equipos.miembros.edad": { $lt: 20 } }
    ]
  },
  { _id: 0, "equipos.miembros": 1 }
)

//4.Delegaciones con mas de 3 medallas de oro

db.delegaciones.find(
  { "medallas.oro": { $gt: 3 } },
  { _id: 0, nombre: 1, medallas: 1 }
)

//5.Delegaciones donde haya un jugador menor de 17 años

db.delegaciones.find({ "equipos.miembros.edad": { $lt: 17 } },
    {_id:0,nombre:1}
)

//6.Delegaciones que tengan equipos con 11 

db.delegaciones.find(
  { "equipos.miembros": { $size: 11 } },
  { _id: 0, nombre: 1}
)

//7.Delegaciones cuyas medallas de plata sean exactamente 2

db.delegaciones.find({ "medallas.plata": { $eq: 2 } },
    {_id:0,nombre:1,medallas:1}
)

//8.Competencias cuya disciplina no sea Baloncesto

db.competencias.find({ disciplina: { $ne: "Baloncesto" } },{_id:0,nombre_competencia:1,fecha:1})

//9.Competencias donde su categoria este en esta lista ["Masculino Mayores","Femenino Elite","Masculino Elite"]

db.competencias.find({ categoria: { $in: ["Masculino Mayores","Femenino Elite","Masculino Elite"] } },
    {_id:0,nombre_competencia:1,categoria:1,fecha:1}
)

//10.Competencias donde su disciplina sea futbol o su estado sea finalizado

db.competencias.find({
  $or: [
    { disciplina: { $eq: "Fútbol" } },
    { estado: { $eq: "Finalizado" } }
  ]
},
{_id:0,nombre_competencia:1,disciplina:1,estado:1})