<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'"Soy una persona respetuosa y jovial al mismo tiempo. Encuentro soluciones, soy creativo y resuelvo problemas sin necesidad de la ayuda de compañeros de trabajo o gerentes. Sé cuándo pedir ayuda y no me quedo callado si la necesito. Pero cuando es posible manejar algo sin ocupar el tiempo de los demás, lo hago y me considero muy bueno en eso. Es una de las cosas que mi último jefe diría de mí, si les pidieras que describieran mi estilo de trabajo seria justo de esta forma, actualmente estoy estudiando Ingenieria en Sistemas y Redes Informaticas en la Universidad General Gerardo Barrios y trabajo en Grupo Campestre en el area de IT, vivo en Jucuapa, Depto de Usulutan."',
				},
				{
					id: 2,
					bio:
						'',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-align-justify"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
