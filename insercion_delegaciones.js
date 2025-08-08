// Insercion de las delegaciones y su informacion pertinente a Mongo DB

db.delegaciones.insertMany(
    [{
  "nombre": "Campeones de Medellín",
  "pais": "Colombia",
  "delegado_general": {
    "nombre": "Carlos Martínez",
    "documento": "123456789"
  },
  "equipos": [
    {
      "nombre": "Atlético Tiner",
      "disciplina": "Atletismo",
      "categoria": "Sub-17",
      "miembros": [
        {
          "nombre": "Julian Páez",
          "edad": 17,
          "sexo": "Masculino",
          "documento": "1002003001"
        },
        {
          "nombre": "Camilo Bernal",
          "edad": 16,
          "sexo": "Masculino",
          "documento": "1002003002"
        },
        {
          "nombre": "Andrés Suárez",
          "edad": 17,
          "sexo": "Masculino",
          "documento": "1002003003"
        }
      ]
    },
    {
      "nombre": "Leonas Doradas",
      "disciplina": "Baloncesto",
      "categoria": "Femenino Mayores",
      "miembros": [
        {
          "nombre": "María López",
          "edad": 22,
          "sexo": "Femenino",
          "documento": "1003004001"
        },
        {
          "nombre": "Andrea Torres",
          "edad": 25,
          "sexo": "Femenino",
          "documento": "1003004002"
        },
        {
          "nombre": "Paola Jiménez",
          "edad": 23,
          "sexo": "Femenino",
          "documento": "1003004003"
        },
        {
          "nombre": "Valentina Ruiz",
          "edad": 21,
          "sexo": "Femenino",
          "documento": "1003004004"
        }
      ]
    },
    {
      "nombre": "Tigres del Tatami",
      "disciplina": "Judo",
      "categoria": "Masculino Juvenil",
      "miembros": [
        {
          "nombre": "Felipe Mendoza",
          "edad": 18,
          "sexo": "Masculino",
          "documento": "1004005001"
        },
        {
          "nombre": "Samuel Pérez",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "1004005002"
        },
        {
          "nombre": "David Castro",
          "edad": 18,
          "sexo": "Masculino",
          "documento": "1004005003"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 3,
    "plata": 4,
    "bronce": 5
  }
},
{
  "nombre": "Fuerza del Caribe",
  "pais": "Colombia",
  "delegado_general": {
    "nombre": "Jorge Herrera",
    "documento": "1109876543"
  },
  "equipos": [
    {
      "nombre": "Velocistas del Atlántico",
      "disciplina": "Atletismo",
      "categoria": "Sub-20",
      "miembros": [
        {
          "nombre": "Luis Ramírez",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "2001001001"
        },
        {
          "nombre": "Carlos Pérez",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "2001001002"
        },
        {
          "nombre": "Andrés Cárdenas",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "2001001003"
        },
        {
          "nombre": "Fernando Gómez",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "2001001004"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 1,
    "plata": 0,
    "bronce": 2
  }
},
{
  "nombre": "Águilas Andinas",
  "pais": "Colombia",
  "delegado_general": {
    "nombre": "Ricardo Salazar",
    "documento": "1012456789"
  },
  "equipos": [
    {
      "nombre": "Relámpagos de Boyacá",
      "disciplina": "Ciclismo",
      "categoria": "Masculino Elite",
      "miembros": [
        {
          "nombre": "Juan Camilo Rojas",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "2103001001"
        },
        {
          "nombre": "Santiago Vargas",
          "edad": 28,
          "sexo": "Masculino",
          "documento": "2103001002"
        },
        {
          "nombre": "David Murcia",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "2103001003"
        },
        {
          "nombre": "Esteban López",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "2103001004"
        },
        {
          "nombre": "Felipe Rincón",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "2103001005"
        },
        {
          "nombre": "Andrés Melo",
          "edad": 29,
          "sexo": "Masculino",
          "documento": "2103001006"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 2,
    "plata": 1,
    "bronce": 0
  }
},
{
  "nombre": "Guerreras del Norte",
  "pais": "México",
  "delegado_general": {
    "nombre": "María Fernanda Cortés",
    "documento": "MX987654321"
  },
  "equipos": [
    {
      "nombre": "Estrellas del Pacífico",
      "disciplina": "Natación",
      "categoria": "Femenino Juvenil",
      "miembros": [
        {
          "nombre": "Sofía Ramírez",
          "edad": 16,
          "sexo": "Femenino",
          "documento": "3102002001"
        },
        {
          "nombre": "Valeria Torres",
          "edad": 17,
          "sexo": "Femenino",
          "documento": "3102002002"
        },
        {
          "nombre": "Camila Herrera",
          "edad": 16,
          "sexo": "Femenino",
          "documento": "3102002003"
        },
        {
          "nombre": "Andrea Soto",
          "edad": 17,
          "sexo": "Femenino",
          "documento": "3102002004"
        },
        {
          "nombre": "Gabriela Morales",
          "edad": 16,
          "sexo": "Femenino",
          "documento": "3102002005"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 0,
    "plata": 1,
    "bronce": 3
  }
},
{
  "nombre": "Espada Dorada",
  "pais": "España",
  "delegado_general": {
    "nombre": "Javier López",
    "documento": "ES445566778"
  },
  "equipos": [
    {
      "nombre": "Maestros del Acero",
      "disciplina": "Esgrima",
      "categoria": "Masculino Mayores",
      "miembros": [
        {
          "nombre": "Pablo Fernández",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "4101003001"
        },
        {
          "nombre": "Álvaro Martín",
          "edad": 23,
          "sexo": "Masculino",
          "documento": "4101003002"
        },
        {
          "nombre": "Carlos Ibáñez",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "4101003003"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 1,
    "plata": 0,
    "bronce": 1
  }
},
{
  "nombre": "Jaguares Amazónicos",
  "pais": "Brasil",
  "delegado_general": {
    "nombre": "Renato Oliveira",
    "documento": "BR112233445"
  },
  "equipos": [
    {
      "nombre": "Furia Verde",
      "disciplina": "Fútbol",
      "categoria": "Sub-20",
      "miembros": [
        {
          "nombre": "Lucas Silva",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "5104001001"
        },
        {
          "nombre": "Matheus Pereira",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "5104001002"
        },
        {
          "nombre": "João Mendes",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "5104001003"
        },
        {
          "nombre": "Gabriel Costa",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "5104001004"
        },
        {
          "nombre": "Rafael Santos",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "5104001005"
        },
        {
          "nombre": "Diego Carvalho",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "5104001006"
        },
        {
          "nombre": "Pedro Gomes",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "5104001007"
        },
        {
          "nombre": "Henrique Lima",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "5104001008"
        },
        {
          "nombre": "Thiago Barbosa",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "5104001009"
        },
        {
          "nombre": "Igor Alves",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "5104001010"
        },
        {
          "nombre": "Felipe Moreira",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "5104001011"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 3,
    "plata": 2,
    "bronce": 0
  }
},
{
  "nombre": "Titanes del Sur",
  "pais": "Argentina",
  "delegado_general": {
    "nombre": "Martín Cabrera",
    "documento": "AR998877665"
  },
  "equipos": [
    {
      "nombre": "Cóndores Patagónicos",
      "disciplina": "Judo",
      "categoria": "Masculino Juvenil",
      "miembros": [
        {
          "nombre": "Santiago López",
          "edad": 18,
          "sexo": "Masculino",
          "documento": "6103002001"
        },
        {
          "nombre": "Facundo Díaz",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "6103002002"
        },
        {
          "nombre": "Lucas Martínez",
          "edad": 18,
          "sexo": "Masculino",
          "documento": "6103002003"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 0,
    "plata": 1,
    "bronce": 2
  }
},
{
  "nombre": "Lobos del Altiplano",
  "pais": "Colombia",
  "delegado_general": {
    "nombre": "Héctor Morales",
    "documento": "1029384756"
  },
  "equipos": [
    {
      "nombre": "Corredores de Tunja",
      "disciplina": "Atletismo",
      "categoria": "Masculino Mayores",
      "miembros": [
        {
          "nombre": "Miguel Suárez",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "7201001001"
        },
        {
          "nombre": "Oscar Cárdenas",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "7201001002"
        },
        {
          "nombre": "Julián Moreno",
          "edad": 23,
          "sexo": "Masculino",
          "documento": "7201001003"
        },
        {
          "nombre": "Kevin Hernández",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "7201001004"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 1,
    "plata": 0,
    "bronce": 1
  }
},
{
  "nombre": "Tiburones del Caribe",
  "pais": "Cuba",
  "delegado_general": {
    "nombre": "Ernesto Valdés",
    "documento": "CU556677889"
  },
  "equipos": [
    {
      "nombre": "Olas de La Habana",
      "disciplina": "Natación",
      "categoria": "Masculino Juvenil",
      "miembros": [
        {
          "nombre": "Alejandro Torres",
          "edad": 17,
          "sexo": "Masculino",
          "documento": "8202001001"
        },
        {
          "nombre": "Javier López",
          "edad": 18,
          "sexo": "Masculino",
          "documento": "8202001002"
        },
        {
          "nombre": "Luis Fernández",
          "edad": 17,
          "sexo": "Masculino",
          "documento": "8202001003"
        },
        {
          "nombre": "Diego Rodríguez",
          "edad": 18,
          "sexo": "Masculino",
          "documento": "8202001004"
        },
        {
          "nombre": "Manuel García",
          "edad": 17,
          "sexo": "Masculino",
          "documento": "8202001005"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 2,
    "plata": 1,
    "bronce": 0
  }
},
{
  "nombre": "Centellas del Desierto",
  "pais": "Chile",
  "delegado_general": {
    "nombre": "Camila Oyarzo",
    "documento": "CL778899001"
  },
  "equipos": [
    {
      "nombre": "Viento del Norte",
      "disciplina": "Esgrima",
      "categoria": "Femenino Mayores",
      "miembros": [
        {
          "nombre": "Fernanda Soto",
          "edad": 22,
          "sexo": "Femenino",
          "documento": "9203001001"
        },
        {
          "nombre": "Antonia Díaz",
          "edad": 23,
          "sexo": "Femenino",
          "documento": "9203001002"
        },
        {
          "nombre": "Josefa Herrera",
          "edad": 21,
          "sexo": "Femenino",
          "documento": "9203001003"
        }
      ]
    },
    {
      "nombre": "Garras del Sur",
      "disciplina": "Judo",
      "categoria": "Femenino Juvenil",
      "miembros": [
        {
          "nombre": "Valentina Rojas",
          "edad": 18,
          "sexo": "Femenino",
          "documento": "9203002001"
        },
        {
          "nombre": "Constanza Pérez",
          "edad": 19,
          "sexo": "Femenino",
          "documento": "9203002002"
        },
        {
          "nombre": "Isidora Vargas",
          "edad": 18,
          "sexo": "Femenino",
          "documento": "9203002003"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 0,
    "plata": 2,
    "bronce": 1
  }
},
{
  "nombre": "Toros del Centro",
  "pais": "Paraguay",
  "delegado_general": {
    "nombre": "Gustavo Benítez",
    "documento": "PY445566778"
  },
  "equipos": [
    {
      "nombre": "Guerreros de Asunción",
      "disciplina": "Baloncesto",
      "categoria": "Masculino Mayores",
      "miembros": [
        {
          "nombre": "Rodrigo Gómez",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "1020304001"
        },
        {
          "nombre": "Martín López",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "1020304002"
        },
        {
          "nombre": "Carlos Medina",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "1020304003"
        },
        {
          "nombre": "Jorge Aguilar",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "1020304004"
        },
        {
          "nombre": "Hugo Duarte",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "1020304005"
        }
      ]
    },
    {
      "nombre": "Rápidos de Luque",
      "disciplina": "Ciclismo",
      "categoria": "Masculino Elite",
      "miembros": [
        {
          "nombre": "Eduardo Rivas",
          "edad": 28,
          "sexo": "Masculino",
          "documento": "1020305001"
        },
        {
          "nombre": "Daniel Acosta",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "1020305002"
        },
        {
          "nombre": "Oscar Benítez",
          "edad": 29,
          "sexo": "Masculino",
          "documento": "1020305003"
        },
        {
          "nombre": "Javier Cardozo",
          "edad": 28,
          "sexo": "Masculino",
          "documento": "1020305004"
        },
        {
          "nombre": "Pedro Giménez",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "1020305005"
        },
        {
          "nombre": "Adrián Ayala",
          "edad": 29,
          "sexo": "Masculino",
          "documento": "1020305006"
        }
      ]
    },
    {
      "nombre": "Fuerza Guaraní",
      "disciplina": "Judo",
      "categoria": "Masculino Mayores",
      "miembros": [
        {
          "nombre": "Luis Villalba",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "1020306001"
        },
        {
          "nombre": "Marcos Cáceres",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "1020306002"
        },
        {
          "nombre": "Enrique Rojas",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "1020306003"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 3,
    "plata": 1,
    "bronce": 2
  }
},
{
  "nombre": "Cóndores Dorados",
  "pais": "Perú",
  "delegado_general": {
    "nombre": "Alonso Vega",
    "documento": "PE112233445"
  },
  "equipos": [
    {
      "nombre": "Truenos de Lima",
      "disciplina": "Fútbol",
      "categoria": "Masculino Sub-20",
      "miembros": [
        {
          "nombre": "Diego Paredes",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "1122334401"
        },
        {
          "nombre": "Álvaro Herrera",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "1122334402"
        },
        {
          "nombre": "Luis Ramírez",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "1122334403"
        },
        {
          "nombre": "Jorge Campos",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "1122334404"
        },
        {
          "nombre": "Pedro Salazar",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "1122334405"
        },
        {
          "nombre": "Andrés Torres",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "1122334406"
        },
        {
          "nombre": "Gonzalo Núñez",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "1122334407"
        },
        {
          "nombre": "Sergio Quispe",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "1122334408"
        },
        {
          "nombre": "Rodrigo Chávez",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "1122334409"
        },
        {
          "nombre": "Francisco Ruiz",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "1122334410"
        },
        {
          "nombre": "César Mendoza",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "1122334411"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 1,
    "plata": 3,
    "bronce": 0
  }
},
{
  "nombre": "Panteras Negras",
  "pais": "Uruguay",
  "delegado_general": {
    "nombre": "Marcelo Fernández",
    "documento": "UY556644332"
  },
  "equipos": [
    {
      "nombre": "Rugido Oriental",
      "disciplina": "Baloncesto",
      "categoria": "Masculino Mayores",
      "miembros": [
        {
          "nombre": "Sebastián Rodríguez",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "2111001001"
        },
        {
          "nombre": "Martín Pereyra",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "2111001002"
        },
        {
          "nombre": "Diego Castro",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "2111001003"
        },
        {
          "nombre": "Facundo Silva",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "2111001004"
        },
        {
          "nombre": "Pablo Méndez",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "2111001005"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 0,
    "plata": 1,
    "bronce": 2
  }
},
{
  "nombre": "Huracanes del Caribe",
  "pais": "República Dominicana",
  "delegado_general": {
    "nombre": "Carlos Santana",
    "documento": "DO778899665"
  },
  "equipos": [
    {
      "nombre": "Olas Furiosas",
      "disciplina": "Natación",
      "categoria": "Masculino Elite",
      "miembros": [
        {
          "nombre": "Juan García",
          "edad": 23,
          "sexo": "Masculino",
          "documento": "3112001001"
        },
        {
          "nombre": "Miguel Reyes",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "3112001002"
        },
        {
          "nombre": "Luis Rodríguez",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "3112001003"
        },
        {
          "nombre": "Andrés López",
          "edad": 23,
          "sexo": "Masculino",
          "documento": "3112001004"
        },
        {
          "nombre": "José Martínez",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "3112001005"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 2,
    "plata": 0,
    "bronce": 1
  }
},
{
  "nombre": "Fuerza del Volcán",
  "pais": "Ecuador",
  "delegado_general": {
    "nombre": "Luis Paredes",
    "documento": "EC665544332"
  },
  "equipos": [
    {
      "nombre": "Escarlatas de Quito",
      "disciplina": "Fútbol",
      "categoria": "Femenino Mayores",
      "miembros": [
        {
          "nombre": "María López",
          "edad": 24,
          "sexo": "Femenino",
          "documento": "4113001001"
        },
        {
          "nombre": "Daniela Pérez",
          "edad": 25,
          "sexo": "Femenino",
          "documento": "4113001002"
        },
        {
          "nombre": "Sofía Morales",
          "edad": 23,
          "sexo": "Femenino",
          "documento": "4113001003"
        },
        {
          "nombre": "Carolina Torres",
          "edad": 24,
          "sexo": "Femenino",
          "documento": "4113001004"
        },
        {
          "nombre": "Valeria Jiménez",
          "edad": 26,
          "sexo": "Femenino",
          "documento": "4113001005"
        },
        {
          "nombre": "Andrea Romero",
          "edad": 25,
          "sexo": "Femenino",
          "documento": "4113001006"
        },
        {
          "nombre": "Gabriela Álvarez",
          "edad": 24,
          "sexo": "Femenino",
          "documento": "4113001007"
        },
        {
          "nombre": "Isabel Castillo",
          "edad": 23,
          "sexo": "Femenino",
          "documento": "4113001008"
        },
        {
          "nombre": "Camila Mendoza",
          "edad": 25,
          "sexo": "Femenino",
          "documento": "4113001009"
        },
        {
          "nombre": "Fernanda Ruiz",
          "edad": 24,
          "sexo": "Femenino",
          "documento": "4113001010"
        },
        {
          "nombre": "Patricia Ortega",
          "edad": 26,
          "sexo": "Femenino",
          "documento": "4113001011"
        }
      ]
    },
    {
      "nombre": "Pumas de Guayaquil",
      "disciplina": "Atletismo",
      "categoria": "Masculino Sub-20",
      "miembros": [
        {
          "nombre": "Jorge Salinas",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "4113002001"
        },
        {
          "nombre": "Andrés Castillo",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "4113002002"
        },
        {
          "nombre": "Pedro Zambrano",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "4113002003"
        },
        {
          "nombre": "Cristian Gutiérrez",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "4113002004"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 3,
    "plata": 1,
    "bronce": 0
  }
},
{
  "nombre": "Truenos del Oeste",
  "pais": "Venezuela",
  "delegado_general": {
    "nombre": "José Contreras",
    "documento": "VE556677889"
  },
  "equipos": [
    {
      "nombre": "Centellas de Maracaibo",
      "disciplina": "Ciclismo",
      "categoria": "Femenino Elite",
      "miembros": [
        {
          "nombre": "Yulimar Pérez",
          "edad": 28,
          "sexo": "Femenino",
          "documento": "5114001001"
        },
        {
          "nombre": "Mariana Gómez",
          "edad": 27,
          "sexo": "Femenino",
          "documento": "5114001002"
        },
        {
          "nombre": "Ana Rodríguez",
          "edad": 29,
          "sexo": "Femenino",
          "documento": "5114001003"
        },
        {
          "nombre": "Patricia Fernández",
          "edad": 28,
          "sexo": "Femenino",
          "documento": "5114001004"
        },
        {
          "nombre": "Lorena Martínez",
          "edad": 27,
          "sexo": "Femenino",
          "documento": "5114001005"
        },
        {
          "nombre": "Carmen Rivas",
          "edad": 28,
          "sexo": "Femenino",
          "documento": "5114001006"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 1,
    "plata": 2,
    "bronce": 1
  }
},
{
  "nombre": "Dragones del Este",
  "pais": "Japón",
  "delegado_general": {
    "nombre": "Takeshi Nakamura",
    "documento": "JP123456789"
  },
  "equipos": [
    {
      "nombre": "Samuráis del Tatami",
      "disciplina": "Judo",
      "categoria": "Masculino Elite",
      "miembros": [
        {
          "nombre": "Hiroshi Tanaka",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "6115001001"
        },
        {
          "nombre": "Kenji Sato",
          "edad": 28,
          "sexo": "Masculino",
          "documento": "6115001002"
        },
        {
          "nombre": "Takumi Yamamoto",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "6115001003"
        }
      ]
    },
    {
      "nombre": "Rápidos de Osaka",
      "disciplina": "Natación",
      "categoria": "Masculino Mayores",
      "miembros": [
        {
          "nombre": "Daichi Suzuki",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "6115002001"
        },
        {
          "nombre": "Kenta Mori",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "6115002002"
        },
        {
          "nombre": "Yuto Kobayashi",
          "edad": 23,
          "sexo": "Masculino",
          "documento": "6115002003"
        },
        {
          "nombre": "Shota Fujimoto",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "6115002004"
        },
        {
          "nombre": "Ren Hayashi",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "6115002005"
        }
      ]
    },
    {
      "nombre": "Espadas de Tokio",
      "disciplina": "Esgrima",
      "categoria": "Femenino Mayores",
      "miembros": [
        {
          "nombre": "Aiko Watanabe",
          "edad": 23,
          "sexo": "Femenino",
          "documento": "6115003001"
        },
        {
          "nombre": "Haruka Ito",
          "edad": 24,
          "sexo": "Femenino",
          "documento": "6115003002"
        },
        {
          "nombre": "Miyu Shimizu",
          "edad": 22,
          "sexo": "Femenino",
          "documento": "6115003003"
        }
      ]
    }
  ],
  "medallas": {
    "oro": 4,
    "plata": 0,
    "bronce": 2
  }
}]
)

