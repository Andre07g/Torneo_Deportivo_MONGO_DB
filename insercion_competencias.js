// Insercion de las competencias del torneo con toda la informacion relacionada

db.competencias.insertMany([{
  
  "nombre_competencia": "100m Planos Masculino Sub-20",
  "disciplina": "Atletismo",
  "categoria": "Sub-20",
  "fecha": "2025-07-15",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952bc2a5bdfbf38b0e6554"
      },
      "delegacion_nombre": "Fuerza del Caribe",
      "equipo_nombre": "Velocistas del Atlántico",
      "jugadores": [
        {
          "nombre": "Luis Ramírez",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "2001001001",
          "resultado": {
            "posicion": 1,
            "tiempo": "10.08s",
            "mejor_marca_personal": true
          }
        },
        {
          "nombre": "Carlos Pérez",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "2001001002",
          "resultado": {
            "posicion": 4,
            "tiempo": "10.26s",
            "mejor_marca_personal": false
          }
        },
        {
          "nombre": "Andrés Cárdenas",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "2001001003",
          "resultado": {
            "posicion": 7,
            "tiempo": "10.38s",
            "mejor_marca_personal": false
          }
        },
        {
          "nombre": "Fernando Gómez",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "2001001004",
          "resultado": {
            "posicion": 10,
            "tiempo": "10.55s",
            "mejor_marca_personal": false
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952a47a616e60217992c3a"
      },
      "delegacion_nombre": "Campeones de Medellín",
      "equipo_nombre": "Atlético Tiner",
      "jugadores": [
        {
          "nombre": "Julian Páez",
          "edad": 17,
          "sexo": "Masculino",
          "documento": "1002003001",
          "resultado": {
            "posicion": 2,
            "tiempo": "10.12s",
            "mejor_marca_personal": true
          }
        },
        {
          "nombre": "Camilo Bernal",
          "edad": 16,
          "sexo": "Masculino",
          "documento": "1002003002",
          "resultado": {
            "posicion": 6,
            "tiempo": "10.33s",
            "mejor_marca_personal": false
          }
        },
        {
          "nombre": "Andrés Suárez",
          "edad": 17,
          "sexo": "Masculino",
          "documento": "1002003003",
          "resultado": {
            "posicion": 9,
            "tiempo": "10.49s",
            "mejor_marca_personal": false
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952c44a5bdfbf38b0e655a"
      },
      "delegacion_nombre": "Lobos del Altiplano",
      "equipo_nombre": "Corredores de Tunja",
      "jugadores": [
        {
          "nombre": "Miguel Suárez",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "7201001001",
          "resultado": {
            "posicion": 3,
            "tiempo": "10.18s",
            "mejor_marca_personal": false
          }
        },
        {
          "nombre": "Oscar Cárdenas",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "7201001002",
          "resultado": {
            "posicion": 5,
            "tiempo": "10.30s",
            "mejor_marca_personal": true
          }
        },
        {
          "nombre": "Julián Moreno",
          "edad": 23,
          "sexo": "Masculino",
          "documento": "7201001003",
          "resultado": {
            "posicion": 8,
            "tiempo": "10.42s",
            "mejor_marca_personal": false
          }
        },
        {
          "nombre": "Kevin Hernández",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "7201001004",
          "resultado": {
            "posicion": 11,
            "tiempo": "10.60s",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "condiciones_climaticas": "Despejado, viento a favor 1.2 m/s",
    "récord_competencia": "9.95s",
    "ganador": {
      "nombre": "Luis Ramírez",
      "delegacion": "Fuerza del Caribe",
      "tiempo": "10.08s"
    }
  }
},
{
  "nombre_competencia": "Baloncesto Masculino Mayores - Ronda de Grupos",
  "disciplina": "Baloncesto",
  "categoria": "Masculino Mayores",
  "fecha": "2025-06-10",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952c44a5bdfbf38b0e655d"
      },
      "delegacion_nombre": "Toros del Centro",
      "equipo_nombre": "Guerreros de Asunción",
      "resultado": {
        "puntos": 78,
        "posicion": 1
      }
    },
    {
      "delegacion_id": {
        "$oid": "68952c5da5bdfbf38b0e655f"
      },
      "delegacion_nombre": "Panteras Negras",
      "equipo_nombre": "Rugido Oriental",
      "resultado": {
        "puntos": 72,
        "posicion": 2
      }
    }
  ],
  "resumen": {
    "comentarios": "Partido reñido con victoria en los últimos minutos.",
    "ganador": {
      "delegacion": "Toros del Centro",
      "puntos": 78
    }
  }
},
{
  "nombre_competencia": "Natación 200m Estilo Libre Femenino Sub-18",
  "disciplina": "Natación",
  "categoria": "Sub-18",
  "fecha": "2025-07-20",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952c88a5bdfbf38b0e6563"
      },
      "delegacion_nombre": "Ondas del Pacífico",
      "equipo_nombre": "Sirenas de Tumaco",
      "jugadores": [
        {
          "nombre": "María Torres",
          "edad": 17,
          "sexo": "Femenino",
          "documento": "8302001001",
          "resultado": {
            "posicion": 1,
            "tiempo": "2:01.45",
            "mejor_marca_personal": true
          }
        },
        {
          "nombre": "Daniela Pineda",
          "edad": 18,
          "sexo": "Femenino",
          "documento": "8302001002",
          "resultado": {
            "posicion": 4,
            "tiempo": "2:04.32",
            "mejor_marca_personal": false
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952cb3a5bdfbf38b0e6566"
      },
      "delegacion_nombre": "Trueno del Magdalena",
      "equipo_nombre": "Río Veloz",
      "jugadores": [
        {
          "nombre": "Paola Gómez",
          "edad": 17,
          "sexo": "Femenino",
          "documento": "8403001001",
          "resultado": {
            "posicion": 2,
            "tiempo": "2:02.10",
            "mejor_marca_personal": true
          }
        },
        {
          "nombre": "Laura Ríos",
          "edad": 16,
          "sexo": "Femenino",
          "documento": "8403001002",
          "resultado": {
            "posicion": 5,
            "tiempo": "2:05.48",
            "mejor_marca_personal": false
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952cdaa5bdfbf38b0e6568"
      },
      "delegacion_nombre": "Aletas Doradas",
      "equipo_nombre": "Olas de Oro",
      "jugadores": [
        {
          "nombre": "Sofía Medina",
          "edad": 18,
          "sexo": "Femenino",
          "documento": "8504001001",
          "resultado": {
            "posicion": 3,
            "tiempo": "2:03.57",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "condiciones": "Piscina olímpica cubierta",
    "récord_competencia": "1:58.90",
    "ganador": {
      "nombre": "María Torres",
      "delegacion": "Ondas del Pacífico",
      "tiempo": "2:01.45"
    }
  }
},
{

  "nombre_competencia": "Fútbol Masculino Sub-20 - Semifinal",
  "disciplina": "Fútbol",
  "categoria": "Sub-20",
  "fecha": "2025-06-28",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952cf6a5bdfbf38b0e656b"
      },
      "delegacion_nombre": "Águilas Doradas",
      "equipo_nombre": "Juventud Dorada",
      "resultado": {
        "goles": 3,
        "posicion": 1
      }
    },
    {
      "delegacion_id": {
        "$oid": "68952d14a5bdfbf38b0e656d"
      },
      "delegacion_nombre": "Guerreros del Sur",
      "equipo_nombre": "Sur Andino",
      "resultado": {
        "goles": 1,
        "posicion": 2
      }
    }
  ],
  "resumen": {
    "comentarios": "Dominio total de Águilas Doradas en la segunda parte.",
    "ganador": {
      "delegacion": "Águilas Doradas",
      "goles": 3
    }
  }
},
{
  "nombre_competencia": "Judo Masculino Mayores - Categoría 81kg",
  "disciplina": "Judo",
  "categoria": "Masculino Mayores",
  "fecha": "2025-05-12",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952d35a5bdfbf38b0e6570"
      },
      "delegacion_nombre": "Samuráis Cafeteros",
      "equipo_nombre": "Tatami Quindío",
      "jugadores": [
        {
          "nombre": "Juan Restrepo",
          "edad": 28,
          "sexo": "Masculino",
          "documento": "8705001001",
          "resultado": {
            "posicion": 1,
            "puntuacion": "Ippon",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952d52a5bdfbf38b0e6572"
      },
      "delegacion_nombre": "Guerreros del Oriente",
      "equipo_nombre": "Dojo Arauca",
      "jugadores": [
        {
          "nombre": "Carlos Jiménez",
          "edad": 26,
          "sexo": "Masculino",
          "documento": "8806001001",
          "resultado": {
            "posicion": 2,
            "puntuacion": "Waza-ari",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Juan Restrepo",
      "delegacion": "Samuráis Cafeteros",
      "puntuacion": "Ippon"
    }
  }
},
{
  "nombre_competencia": "Esgrima Femenino Mayores - Florete Individual",
  "disciplina": "Esgrima",
  "categoria": "Femenino Mayores",
  "fecha": "2025-07-02",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952d6ca5bdfbf38b0e6575"
      },
      "delegacion_nombre": "Espada Dorada",
      "equipo_nombre": "Florete Capital",
      "jugadores": [
        {
          "nombre": "Camila Hernández",
          "edad": 24,
          "sexo": "Femenino",
          "documento": "8907001001",
          "resultado": {
            "posicion": 1,
            "puntos": 15,
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952d8ba5bdfbf38b0e6577"
      },
      "delegacion_nombre": "Filo del Caribe",
      "equipo_nombre": "Sable Barranquilla",
      "jugadores": [
        {
          "nombre": "Valentina Morales",
          "edad": 23,
          "sexo": "Femenino",
          "documento": "9008001001",
          "resultado": {
            "posicion": 2,
            "puntos": 11,
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Camila Hernández",
      "delegacion": "Espada Dorada",
      "puntos": 15
    }
  }
},
{
  "nombre_competencia": "Ciclismo Ruta Masculino Sub-23 - Etapa 1",
  "disciplina": "Ciclismo",
  "categoria": "Sub-23",
  "fecha": "2025-07-05",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952daaa5bdfbf38b0e657a"
      },
      "delegacion_nombre": "Pedales Dorados",
      "equipo_nombre": "Ruedas del Café",
      "jugadores": [
        {
          "nombre": "Andrés Londoño",
          "edad": 22,
          "sexo": "Masculino",
          "documento": "9109001001",
          "resultado": {
            "posicion": 1,
            "tiempo": "3h 12m 45s",
            "mejor_marca_personal": true
          }
        },
        {
          "nombre": "Santiago Ruiz",
          "edad": 21,
          "sexo": "Masculino",
          "documento": "9109001002",
          "resultado": {
            "posicion": 4,
            "tiempo": "3h 14m 30s",
            "mejor_marca_personal": false
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952dc8a5bdfbf38b0e657c"
      },
      "delegacion_nombre": "Ruedas del Norte",
      "equipo_nombre": "Norte Pedal",
      "jugadores": [
        {
          "nombre": "Luis Hernández",
          "edad": 22,
          "sexo": "Masculino",
          "documento": "9201001001",
          "resultado": {
            "posicion": 2,
            "tiempo": "3h 13m 02s",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Andrés Londoño",
      "delegacion": "Pedales Dorados",
      "tiempo": "3h 12m 45s"
    }
  }
},
{
  "nombre_competencia": "Baloncesto Femenino Sub-20 - Final",
  "disciplina": "Baloncesto",
  "categoria": "Femenino Sub-20",
  "fecha": "2025-08-01",
  "estado": "Programado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952de4a5bdfbf38b0e657f"
      },
      "delegacion_nombre": "Leonas Doradas",
      "equipo_nombre": "Fieras Doradas"
    },
    {
      "delegacion_id": {
        "$oid": "68952e02a5bdfbf38b0e6581"
      },
      "delegacion_nombre": "Panteras de la Montaña",
      "equipo_nombre": "Felinas del Valle"
    }
  ],
  "resumen": {
    "comentarios": "Final nacional, se espera gran afluencia de público."
  }
},
{
  "nombre_competencia": "400m Vallas Masculino Mayores",
  "disciplina": "Atletismo",
  "categoria": "Masculino Mayores",
  "fecha": "2025-06-15",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952bc2a5bdfbf38b0e6554"
      },
      "delegacion_nombre": "Fuerza del Caribe",
      "equipo_nombre": "Velocistas del Atlántico",
      "jugadores": [
        {
          "nombre": "Luis Ramírez",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "2001001001",
          "resultado": {
            "posicion": 2,
            "tiempo": "48.92s",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952c44a5bdfbf38b0e655a"
      },
      "delegacion_nombre": "Lobos del Altiplano",
      "equipo_nombre": "Corredores de Tunja",
      "jugadores": [
        {
          "nombre": "Oscar Cárdenas",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "7201001002",
          "resultado": {
            "posicion": 1,
            "tiempo": "48.75s",
            "mejor_marca_personal": true
          }
        }
      ]
    }
  ],
  "resumen": {
    "condiciones_climaticas": "Nublado, viento neutro",
    "ganador": {
      "nombre": "Oscar Cárdenas",
      "delegacion": "Lobos del Altiplano",
      "tiempo": "48.75s"
    }
  }
},
{
  "nombre_competencia": "Fútbol Femenino Mayores - Final",
  "disciplina": "Fútbol",
  "categoria": "Femenino Mayores",
  "fecha": "2025-07-18",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952de4a5bdfbf38b0e657f"
      },
      "delegacion_nombre": "Leonas Doradas",
      "equipo_nombre": "Fieras Doradas",
      "resultado": {
        "goles": 2,
        "posicion": 1
      }
    },
    {
      "delegacion_id": {
        "$oid": "68952e02a5bdfbf38b0e6581"
      },
      "delegacion_nombre": "Panteras de la Montaña",
      "equipo_nombre": "Felinas del Valle",
      "resultado": {
        "goles": 0,
        "posicion": 2
      }
    }
  ],
  "resumen": {
    "comentarios": "Victoria clara con dominio del mediocampo.",
    "ganador": {
      "delegacion": "Leonas Doradas",
      "goles": 2
    }
  }
},
{
  "nombre_competencia": "Natación 4x100m Relevo Libre Masculino Sub-20",
  "disciplina": "Natación",
  "categoria": "Sub-20",
  "fecha": "2025-05-30",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952c88a5bdfbf38b0e6563"
      },
      "delegacion_nombre": "Ondas del Pacífico",
      "equipo_nombre": "Tiburones del Pacífico",
      "jugadores": [
        {
          "nombre": "Juan Torres",
          "edad": 19,
          "sexo": "Masculino",
          "documento": "8302002001",
          "resultado": {
            "posicion": 1,
            "tiempo": "3:15.28",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952cb3a5bdfbf38b0e6566"
      },
      "delegacion_nombre": "Trueno del Magdalena",
      "equipo_nombre": "Río Veloz",
      "jugadores": [
        {
          "nombre": "Carlos López",
          "edad": 20,
          "sexo": "Masculino",
          "documento": "8403002001",
          "resultado": {
            "posicion": 2,
            "tiempo": "3:16.90",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Juan Torres",
      "delegacion": "Ondas del Pacífico",
      "tiempo": "3:15.28"
    }
  }
},
{
  "nombre_competencia": "Judo Femenino Sub-21 - Categoría 57kg",
  "disciplina": "Judo",
  "categoria": "Femenino Sub-21",
  "fecha": "2025-06-05",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952d35a5bdfbf38b0e6570"
      },
      "delegacion_nombre": "Samuráis Cafeteros",
      "equipo_nombre": "Tatami Quindío",
      "jugadores": [
        {
          "nombre": "Daniela Gómez",
          "edad": 20,
          "sexo": "Femenino",
          "documento": "8705002001",
          "resultado": {
            "posicion": 1,
            "puntuacion": "Ippon",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952d52a5bdfbf38b0e6572"
      },
      "delegacion_nombre": "Guerreros del Oriente",
      "equipo_nombre": "Dojo Arauca",
      "jugadores": [
        {
          "nombre": "Paula Ríos",
          "edad": 19,
          "sexo": "Femenino",
          "documento": "8806002001",
          "resultado": {
            "posicion": 2,
            "puntuacion": "Waza-ari",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Daniela Gómez",
      "delegacion": "Samuráis Cafeteros",
      "puntuacion": "Ippon"
    }
  }
},
{
  "nombre_competencia": "Esgrima Masculino Sub-18 - Espada Individual",
  "disciplina": "Esgrima",
  "categoria": "Masculino Sub-18",
  "fecha": "2025-08-15",
  "estado": "Programado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952d6ca5bdfbf38b0e6575"
      },
      "delegacion_nombre": "Espada Dorada",
      "equipo_nombre": "Florete Capital"
    },
    {
      "delegacion_id": {
        "$oid": "68952d8ba5bdfbf38b0e6577"
      },
      "delegacion_nombre": "Filo del Caribe",
      "equipo_nombre": "Sable Barranquilla"
    }
  ],
  "resumen": {
    "comentarios": "Se espera un enfrentamiento emocionante entre las dos mejores promesas juveniles."
  }
},
{
  "nombre_competencia": "Ciclismo Pista Masculino Elite - Velocidad Individual",
  "disciplina": "Ciclismo",
  "categoria": "Masculino Elite",
  "fecha": "2025-05-08",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952daaa5bdfbf38b0e657a"
      },
      "delegacion_nombre": "Pedales Dorados",
      "equipo_nombre": "Ruedas del Café",
      "jugadores": [
        {
          "nombre": "Javier Torres",
          "edad": 27,
          "sexo": "Masculino",
          "documento": "9109003001",
          "resultado": {
            "posicion": 1,
            "tiempo": "9.81s",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952dc8a5bdfbf38b0e657c"
      },
      "delegacion_nombre": "Ruedas del Norte",
      "equipo_nombre": "Norte Pedal",
      "jugadores": [
        {
          "nombre": "Mario Sánchez",
          "edad": 28,
          "sexo": "Masculino",
          "documento": "9201003001",
          "resultado": {
            "posicion": 2,
            "tiempo": "9.94s",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Javier Torres",
      "delegacion": "Pedales Dorados",
      "tiempo": "9.81s"
    }
  }
},
{
  "nombre_competencia": "Fútbol Masculino Elite - Partido Amistoso",
  "disciplina": "Fútbol",
  "categoria": "Masculino Elite",
  "fecha": "2025-08-05",
  "estado": "Programado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952cf6a5bdfbf38b0e656b"
      },
      "delegacion_nombre": "Águilas Doradas",
      "equipo_nombre": "Juventud Dorada"
    },
    {
      "delegacion_id": {
        "$oid": "68952d14a5bdfbf38b0e656d"
      },
      "delegacion_nombre": "Guerreros del Sur",
      "equipo_nombre": "Sur Andino"
    }
  ],
  "resumen": {
    "comentarios": "Amistoso de preparación previo a los juegos nacionales."
  }
},
{
  "nombre_competencia": "1500m Femenino Sub-20",
  "disciplina": "Atletismo",
  "categoria": "Femenino Sub-20",
  "fecha": "2025-06-12",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952bc2a5bdfbf38b0e6554"
      },
      "delegacion_nombre": "Fuerza del Caribe",
      "equipo_nombre": "Velocistas del Atlántico",
      "jugadores": [
        {
          "nombre": "Ana Pérez",
          "edad": 19,
          "sexo": "Femenino",
          "documento": "2001004001",
          "resultado": {
            "posicion": 1,
            "tiempo": "4:08.54",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952cb3a5bdfbf38b0e6566"
      },
      "delegacion_nombre": "Trueno del Magdalena",
      "equipo_nombre": "Río Veloz",
      "jugadores": [
        {
          "nombre": "Laura Ríos",
          "edad": 19,
          "sexo": "Femenino",
          "documento": "8403004001",
          "resultado": {
            "posicion": 2,
            "tiempo": "4:10.12",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Ana Pérez",
      "delegacion": "Fuerza del Caribe",
      "tiempo": "4:08.54"
    }
  }
},
{
  "nombre_competencia": "Fútbol Masculino Sub-17 - Final",
  "disciplina": "Fútbol",
  "categoria": "Masculino Sub-17",
  "fecha": "2025-07-10",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952cf6a5bdfbf38b0e656b"
      },
      "delegacion_nombre": "Águilas Doradas",
      "equipo_nombre": "Juventud Dorada",
      "resultado": {
        "goles": 4,
        "posicion": 1
      }
    },
    {
      "delegacion_id": {
        "$oid": "68952e02a5bdfbf38b0e6581"
      },
      "delegacion_nombre": "Panteras de la Montaña",
      "equipo_nombre": "Felinas del Valle",
      "resultado": {
        "goles": 2,
        "posicion": 2
      }
    }
  ],
  "resumen": {
    "ganador": {
      "delegacion": "Águilas Doradas",
      "goles": 4
    }
  }
},
{
  "nombre_competencia": "Natación 100m Mariposa Masculino Mayores",
  "disciplina": "Natación",
  "categoria": "Masculino Mayores",
  "fecha": "2025-05-18",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952c88a5bdfbf38b0e6563"
      },
      "delegacion_nombre": "Ondas del Pacífico",
      "equipo_nombre": "Tiburones del Pacífico",
      "jugadores": [
        {
          "nombre": "Pedro Martínez",
          "edad": 25,
          "sexo": "Masculino",
          "documento": "8302005001",
          "resultado": {
            "posicion": 1,
            "tiempo": "51.32s",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952d14a5bdfbf38b0e656d"
      },
      "delegacion_nombre": "Guerreros del Sur",
      "equipo_nombre": "Sur Andino",
      "jugadores": [
        {
          "nombre": "Andrés Torres",
          "edad": 24,
          "sexo": "Masculino",
          "documento": "8806005001",
          "resultado": {
            "posicion": 2,
            "tiempo": "51.90s",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Pedro Martínez",
      "delegacion": "Ondas del Pacífico",
      "tiempo": "51.32s"
    }
  }
},
{
  "nombre_competencia": "Esgrima Femenino Elite - Sable Individual",
  "disciplina": "Esgrima",
  "categoria": "Femenino Elite",
  "fecha": "2025-08-20",
  "estado": "Programado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952d6ca5bdfbf38b0e6575"
      },
      "delegacion_nombre": "Espada Dorada",
      "equipo_nombre": "Florete Capital"
    },
    {
      "delegacion_id": {
        "$oid": "68952d8ba5bdfbf38b0e6577"
      },
      "delegacion_nombre": "Filo del Caribe",
      "equipo_nombre": "Sable Barranquilla"
    }
  ],
  "resumen": {
    "comentarios": "Duelo de favoritas en la final del campeonato nacional."
  }
},
{
  "nombre_competencia": "Ciclismo Ruta Femenino Sub-23 - Etapa 3",
  "disciplina": "Ciclismo",
  "categoria": "Femenino Sub-23",
  "fecha": "2025-07-22",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952daaa5bdfbf38b0e657a"
      },
      "delegacion_nombre": "Pedales Dorados",
      "equipo_nombre": "Ruedas del Café",
      "jugadores": [
        {
          "nombre": "Mariana López",
          "edad": 21,
          "sexo": "Femenino",
          "documento": "9109005001",
          "resultado": {
            "posicion": 1,
            "tiempo": "2h 45m 15s",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952dc8a5bdfbf38b0e657c"
      },
      "delegacion_nombre": "Ruedas del Norte",
      "equipo_nombre": "Norte Pedal",
      "jugadores": [
        {
          "nombre": "Carolina Martínez",
          "edad": 22,
          "sexo": "Femenino",
          "documento": "9201005001",
          "resultado": {
            "posicion": 2,
            "tiempo": "2h 45m 59s",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Mariana López",
      "delegacion": "Pedales Dorados",
      "tiempo": "2h 45m 15s"
    }
  }
},
{
  "nombre_competencia": "Baloncesto Masculino Elite - Semifinal",
  "disciplina": "Baloncesto",
  "categoria": "Masculino Elite",
  "fecha": "2025-07-28",
  "estado": "Programado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952de4a5bdfbf38b0e657f"
      },
      "delegacion_nombre": "Leonas Doradas",
      "equipo_nombre": "Fieras Doradas"
    },
    {
      "delegacion_id": {
        "$oid": "68952e02a5bdfbf38b0e6581"
      },
      "delegacion_nombre": "Panteras de la Montaña",
      "equipo_nombre": "Felinas del Valle"
    }
  ],
  "resumen": {
    "comentarios": "Partido decisivo para definir finalistas."
  }
},
{
  "nombre_competencia": "Judo Masculino Elite - Categoría 90kg",
  "disciplina": "Judo",
  "categoria": "Masculino Elite",
  "fecha": "2025-06-25",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952d35a5bdfbf38b0e6570"
      },
      "delegacion_nombre": "Samuráis Cafeteros",
      "equipo_nombre": "Tatami Quindío",
      "jugadores": [
        {
          "nombre": "Luis Fernández",
          "edad": 29,
          "sexo": "Masculino",
          "documento": "8705006001",
          "resultado": {
            "posicion": 1,
            "puntuacion": "Ippon",
            "mejor_marca_personal": false
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952d52a5bdfbf38b0e6572"
      },
      "delegacion_nombre": "Guerreros del Oriente",
      "equipo_nombre": "Dojo Arauca",
      "jugadores": [
        {
          "nombre": "Felipe Torres",
          "edad": 30,
          "sexo": "Masculino",
          "documento": "8806006001",
          "resultado": {
            "posicion": 2,
            "puntuacion": "Waza-ari",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Luis Fernández",
      "delegacion": "Samuráis Cafeteros",
      "puntuacion": "Ippon"
    }
  }
},
{
  "nombre_competencia": "400m Libre Femenino Elite",
  "disciplina": "Natación",
  "categoria": "Femenino Elite",
  "fecha": "2025-07-17",
  "estado": "Finalizado",
  "equipos_participantes": [
    {
      "delegacion_id": {
        "$oid": "68952c88a5bdfbf38b0e6563"
      },
      "delegacion_nombre": "Ondas del Pacífico",
      "equipo_nombre": "Sirenas de Tumaco",
      "jugadores": [
        {
          "nombre": "Camila Torres",
          "edad": 24,
          "sexo": "Femenino",
          "documento": "8302006001",
          "resultado": {
            "posicion": 1,
            "tiempo": "4:05.90",
            "mejor_marca_personal": true
          }
        }
      ]
    },
    {
      "delegacion_id": {
        "$oid": "68952cb3a5bdfbf38b0e6566"
      },
      "delegacion_nombre": "Trueno del Magdalena",
      "equipo_nombre": "Río Veloz",
      "jugadores": [
        {
          "nombre": "Mariana Salazar",
          "edad": 23,
          "sexo": "Femenino",
          "documento": "8403006001",
          "resultado": {
            "posicion": 2,
            "tiempo": "4:06.85",
            "mejor_marca_personal": false
          }
        }
      ]
    }
  ],
  "resumen": {
    "ganador": {
      "nombre": "Camila Torres",
      "delegacion": "Ondas del Pacífico",
      "tiempo": "4:05.90"
    }
  }
}])