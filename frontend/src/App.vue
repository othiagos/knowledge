<template>
	<div id="app">
		<Header title="Base de Conhecimento" :hideToggle="false"/>
		<Menu />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/templates/Header'
import Menu from '@/components/templates/Menu'
import Content from '@/components/templates/Content'
import Footer from '@/components/templates/Footer'

export default {
	name: "App",
	components: { Header, Menu, Content, Footer }
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: "Lato", sans-serif;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osz-font-smoothing: grayscale;
		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas: 
			"header header"
			"menu content"
			"menu footer";
	}

</style>