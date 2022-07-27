<template>
  <div id="app">    
      <HeaderView/>
    <main>
      <router-view/>

    </main>>   
  

   
    <FooterView/>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

export default{
    name:'App',
    components:{
        HeaderView,
        FooterView,
    }
}
</script>

<style>
@import "./assets/css/Index.css";
/*@import "~/assets/static/css/home.css"; */
</style>