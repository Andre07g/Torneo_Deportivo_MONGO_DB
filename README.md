# 🏆 Torneo Deportivo – MongoDB

Este proyecto contiene datos y consultas para gestionar un **torneo deportivo** en una base de datos **MongoDB**.  
Incluye scripts de inserción y ejemplos de consultas simples y avanzadas (con operadores).

---

## 📂 Estructura del repositorio

```
torneo_deportivo_mongo_db/
│
├── inserciones_delegaciones.js   # Inserción de datos de delegaciones, equipos y medallas
├── inserciones_competencias.js   # Inserción de datos de competencias y fechas
├── consultas_sencillas.js        # Consultas básicas sin operadores
├── consultas_complejas.js        # Consultas con operadores de comparación, arrays y lógicas
└── README.md                     # Documentación del proyecto
```

---

## 📜 Descripción de los archivos

- **`inserciones_delegaciones.js`** → Contiene los datos de las delegaciones participantes, sus equipos, miembros y medallas.
- **`inserciones_competencias.js`** → Contiene los datos de las competencias programadas, disciplinas y fechas.
- **`consultas_sencillas.js`** → Consultas con filtros básicos en MongoDB, sin uso de operadores avanzados.
- **`consultas_complejas.js`** → Consultas que utilizan operadores como:
  - `$gt`, `$lt`, `$gte`, `$lte`
  - `$eq`, `$ne`
  - `$in`, `$nin`
  - `$and`, `$or`
  - `$elemMatch`, `$size`

---

## ⚙️ Requisitos

- Tener instalado **MongoDB** en tu máquina o acceso a una instancia remota.
- Tener instalado **Mongo Shell** o usar **MongoDB Compass**.
- Tener instalado **Node.js** si planeas ejecutar los scripts `.js` desde consola usando `mongosh`.

---

## ▶️ Cómo ejecutar este proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Andre07g/Torneo_Deportivo_MONGO_DB.git
   cd Torneo_Deportivo_MONGO_DB
   ```

2. **Abrir la consola de MongoDB**
   ```bash
   mongosh
   ```

3. **Crear o usar la base de datos**
   ```js
   use torneo_deportivo
   ```

4. **Insertar los datos**
   - Delegaciones:
     ```bash
     load("inserciones_delegaciones.js")
     ```
   - Competencias:
     ```bash
     load("inserciones_competencias.js")
     ```

5. **Ejecutar las consultas**
   - Consultas sencillas:
     ```bash
     load("consultas_sencillas.js")
     ```
   - Consultas complejas:
     ```bash
     load("consultas_complejas.js")
     ```

---

## 📌 Notas
- Las **consultas sencillas** no usan operadores avanzados, ideales para principiantes.
- Las **consultas complejas** incluyen operadores de comparación, lógicos y sobre arrays, perfectas para prácticas más avanzadas.
- Puedes modificar los datos de inserción para personalizar tu propio torneo.

---

## 📄 Licencia
Este proyecto se distribuye bajo la licencia MIT.
