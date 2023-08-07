const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    //Esto me va a regresar un listado de llaves
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    //El forEach ya tiene un indce en el segundo argumento, el cual empieza desde 0
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
    // for (const tareas of this.listadoArr) {
    //   if (tareas.completadoEn !== null) {
    //     console.log(`${tareas.desc} :: ${"COMPLETADO".green}`);
    //   } else {
    //     console.log(`${tareas.desc} :: ${"PENDIENTE".red}`);
    //   }
    // }
  }
}

module.exports = Tareas;
