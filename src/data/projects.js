// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Crear Barra de Progreso',
		category: 'Tarea 1',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Crear Portafolio con vue.js',
		category: 'Tarea 2',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Portada Programacion IV',
		category: 'Tarea 3',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Calenderización',
		category: 'Tarea 4',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'CV Julio Sanchez',
		category: 'Tarea 5',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'Apuntes',
		category: 'Tarea 6',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
