<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />
    <div class="stats">
      <Stat title="Categorias" :value="stats.categories" 
        icon="fa fa-folder" color="#D54D50" />
      <Stat title="Artigos" :value="stats.articles" 
        icon="fa fa-file" color="#3BC480" />
      <Stat title="Usuários" :value="stats.users" 
        icon="fa fa-user" color="#3282CD" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../templates/PageTitle";
import Stat from "./Stat";
import axios from "axios";
import { baseApiUrl } from "../../global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data() {
    return {
      stats: {},
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then((res) => (this.stats = res.data));
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>

<style>
  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>