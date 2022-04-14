<template>
          <footer>   
          
             <ul class='mymenu'>
             <li v-for="(menu,idx) in menuLinks" :key="idx">
               <router-link :to="{name:menu.routeName}">{{menu.label}}</router-link> 
             </li>      
            </ul>

             <p>Copyright © 2020 Amour Voyage Agence</p>  
          
          </footer>
     
     
</template>

<script>
export default{
     name:'FooterView',
     data:()=>({
      menuLinks:[
        {
          routeName:'Home',
          label:'Home'
        },         
        {
          routeName:'Destination',
          label:"Destination"
        },                 
        {
          routeName:'About',
          label:"About"
        },
        {
          routeName:'Contact',
          label:"Contact"
        },
      ]
    })
}
</script>

<style>
@import "~/assets/css/Index.css";
</style>