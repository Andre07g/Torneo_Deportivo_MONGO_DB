# 📂 Justificación del modelo de datos

Este modelo utiliza principalmente documentos embebidos para mantener un historial exacto del estado de delegaciones, equipos, jugadores y competencias en el momento en que ocurren los eventos.

## Estructura general

### Delegaciones
- Información general de la delegación (nombre, país, delegado).
- Lista de equipos con sus datos y miembros.
- Medallas obtenidas.

### Competencias
- Información de la competencia (nombre, disciplina, categoría, fecha, estado).
- Lista de equipos participantes con datos de delegación, nombre de equipo y jugadores con resultados.

## Razones del diseño
- **Historial inmutable**: los datos de una competencia se guardan tal y como estaban en ese momento.
- **Optimización de lecturas**: evita operaciones de unión (`$lookup`) para obtener datos completos.
- **Contexto completo en un documento**: cada documento contiene toda la información necesaria para mostrar el evento o delegación.

## Ventajas
- Consultas rápidas sin depender de referencias externas.
- Estructura que refleja directamente la relación entre delegación, equipos y jugadores.
- Datos listos para reportes y análisis sin reconstrucción.

## Desventajas
- Duplicación de datos entre delegaciones y competencias.
- Posible desincronización si cambian datos originales.
- Mayor tamaño de documentos.

## Índices recomendados
- `equipos.disciplina` en delegaciones.
- `pais` en delegaciones.
- `fecha` en competencias.
- `equipos_participantes.delegacion_id` en competencias.

