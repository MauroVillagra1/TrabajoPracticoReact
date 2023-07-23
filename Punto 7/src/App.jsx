import React from 'react';
import EmpleadoList from './componentes/EmpleadoList';
import empleado01 from './images/empleado01.png';
import empleado02 from './images/empleado02.png';
import empleado03 from './images/empleado03.png';
import empleado04 from './images/empleado04.png';
import empleado05 from './images/empleado05.png';
import empleado06 from './images/empleado06.png';
import empleado07 from './images/empleado07.png';
import empleado08 from './images/empleado08.png';
import empleado09 from './images/empleado09.png';

import 'bootstrap/dist/css/bootstrap.min.css'; 


const empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: empleado01 },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: empleado02 },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: empleado03 },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: empleado04 },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: empleado05 },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: empleado06 },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: empleado07 },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: empleado08 },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: empleado09 },
];

function App() {
  return <EmpleadoList empleados={empleados} />;
}

export default App;
