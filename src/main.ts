import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const pacientesAsignadosPorEspecialidad: NumeroPacientesPorEspecialidad = {
  medicoDeFamilia: 0,
  pediatria: 0,
  cardiologia: 0,
};

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Cardiólogo") {
      pacientesAsignadosPorEspecialidad.cardiologia++;
    }
    if (pacientes[i].especialidad === "Medico de familia") {
      pacientesAsignadosPorEspecialidad.medicoDeFamilia++;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsignadosPorEspecialidad.pediatria++;
    }
  }
  return pacientesAsignadosPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] | void => {
  let pacientesAsignadosAPediatría: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsignadosAPediatría.push(pacientes[i]);
    }
  }
  return pacientesAsignadosAPediatría;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] | void => {
  let pacientesAsignadosAPediatríaMenores10Años: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesAsignadosAPediatríaMenores10Años.push(pacientes[i]);
    }
  }
  return pacientesAsignadosAPediatríaMenores10Años;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // let pacientesReasignadosAMedicoFamilia: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
  }
  return pacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let mandarPediatraACasa = true;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      mandarPediatraACasa = false;
      break;
    }
  }

  return mandarPediatraACasa;
};

console.log(HayPacientesDePediatria(pacientes));
