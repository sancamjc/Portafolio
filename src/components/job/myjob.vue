<template>
    <div class="container text-ternary-dark dark:text-ternary-light text-lg text-align-justify">
        <h1 class="text-6xl">Experiencia Laboral</h1>
      <ul class="list-group">
        <li v-for="job in jobs" :key="job.id" class="list-group-item">
          <h3 class="mb-1 text-ternary-dark dark:text-ternary-light text-lg text-align-justify">{{ job.title }}</h3>
          <h4 class="mb-2 text-ternary-dark dark:text-ternary-light text-lg text-align-justify">{{ job.company }}</h4>
          <p 
          class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-align-justify"
			>{{ job.duration }}
        
        </p>
          <ul class="list-group text-ternary-dark dark:text-ternary-light text-lg text-align-justify">
            <li v-for="responsibility in job.responsibilities" :key="responsibility" class="list-group-item">{{ responsibility }}</li>
            <br>
            <br>
          </ul>
        </li>
       </ul>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        jobs: [
          {
            id: 1,
            title: 'Gestor de Sistema SAP',
            company: 'Grupo Campestre S.A. de C.V.',
            duration: 'enero 2023 - Presente',
            responsibilities: [
              'Desarrollo y mantenimiento de sistema ERP SAP R3',
              'Colaboración con el equipo de desarrollo interno y exteno',
              'Implementación de nuevas funcionalidades y procesos',
              'Configuraciones del sistema'
            ]
          },
          {
            id: 2,
            title: 'Gestor de modulo SD SAP',
            company: 'Grupo Campestre S.A. de C.V.',
            duration: '2020 - 2022',
            responsibilities: [
              'Mantenimiento y configuración del modulo SD SAP',
              'Implementación de nuevos procesos moludo SD SAP',
              'Gestión de precios de venta y clientes'
            ]
          },
          {
            id: 3,
            title: 'Liquidador de ventas y CXC',
            company: 'Grupo Campestre S.A. de C.V.',
            duration: '2017 - 2020',
            responsibilities: [
              'Liquidador de ventas',
              'Gestión de cuentas por cobrar',
              'Facturador de servicios'
            ]
          },
          {
            id: 4,
            title: 'Encargado de Libreria',
            company: 'Libreria Santa Fé.',
            duration: '2014 - 2017',
            responsibilities: [
              'Encargado',
              'Gestión de compras y ventas',
              'Gestor de caja crédito'
            ]
          },
          {
            id: 5,
            title: 'Facturador',
            company: 'Sello de Oro',
            duration: '2013 - 2014',
            responsibilities: [
              'Facturador',
              'Cambios de precio de ventas',
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped></style>
  