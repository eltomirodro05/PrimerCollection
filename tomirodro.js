
use ProjectBeisbol


db.Jugadores.insertMany([
  {
    nombre: "Carlos Pérez",
    edad: 14,
    posicion: "Catcher",
    equipo: "Tiburones",
    fecha_registro: ISODate("2024-01-15")
  },
  {
    nombre: "Luis González",
    edad: 13,
    posicion: "Pitcher",
    equipo: "Leones",
    fecha_registro: ISODate("2024-03-10")
  }
])


db.Entrenadores.insertMany([
  {
    nombre: "José Rodríguez",
    especialidad: "Bateo",
    telefono: "0412-1234567",
    fecha_ingreso: ISODate("2023-08-20")
  },
  {
    nombre: "Ana Morales",
    especialidad: "Defensa",
    telefono: "0414-7654321",
    fecha_ingreso: ISODate("2024-01-10")
  }
])


db.Eventos.insertMany([
  {
    nombre_evento: "Torneo Juvenil 2024",
    fecha: ISODate("2024-06-01"),
    lugar: "Estadio Municipal",
    participantes: ["Tiburones", "Leones", "Águilas"]
  },
  {
    nombre_evento: "Clínica de Béisbol",
    fecha: ISODate("2024-07-15"),
    lugar: "Campo Fundación",
    entrenadores_inv: ["José Rodríguez", "Ana Morales"]
  }
])
