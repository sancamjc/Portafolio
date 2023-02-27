<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Proyectos',
				singleProjectDate: 'Enero a Febrero de 2023',
				singleProjectTag: 'Tareas',
			},
			projectImages: [
				{
					id: 1,
					title: 'Tarea 1',
					img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 2,
					title: 'tarea 2',
					img: require('@/assets/images/web-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Tarea 3',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'Generalidades',
				companyInfos: [
					{
						id: 1,
						title: 'Nombre',
						details: 'Universidad Gerardo Barrios',
					},
					{
						id: 2,
						title: 'Carrera',
						details: 'Ingenieria en Sistemas Informaticos',
					},
					{
						id: 3,
						title: 'Docente',
						details: 'Gisela Espinoza',
					},
					{
						id: 4,
						title: 'Laboratorio 2',
						details: 'Portafolio',
					},
				],
				objectivesHeading: 'Objetivo',
				objectivesDetails:
					'Poner en practica el aprendizaje durante el primer computo de la asignatura',
				technologies: [
					{
						title: 'Tecnologias',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.js',
							'Node.js',
							],
					},
				],
				projectDetailsHeading: 'Agradecimiento',
				projectDetails: [
					{
						id: 1,
						details:
							'Primero y, antes que nada, dar Gracias a Dios por estar con nosotros en cada paso que damos, por fortalecer nuestros corazones e iluminar nuestras mentes y por poner en nuestro camino aquellas personas que son nuestro soporte y compañía durante el periodo de estudio.',
					},
					{
						id: 2,
						details:
							'Nuestro objetivo es integrar conocimiento informático a través de los proyectos y tareas Tecnológicas, con la finalidad de proporcionarles herramientas que les faciliten los procesos y el manejo de información para un mejor desenvolvimiento en todas las áreas de estudios de la Ingeniería en Sistema.',
					},
					
				],
				
			},
			relatedProject: {
				relatedProjectsHeading: 'Otras Tareas',
				relatedProjects: [
					{
						id: 1,
						title: 'Tarea 1',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Tarea 2',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'Tarea 3',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Tarea 4',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
