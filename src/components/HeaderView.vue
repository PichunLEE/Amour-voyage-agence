<template>
     <header class='mymenu'>
        <nav>
          <link rel="icon" type="image/x-icon" href="img/logo.jpg">
          <title>Amour voyage agence</title>

         <a class="navbar-brand" href="#" style="color:#0275d8;">
           <img src="img/logo.jpg" width="80" height="80" class="d-inline-block align-top; serif" alt="Amour">Amour
      voyage</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>

          <ul class='mymenu'>
             <li v-for="(menu,idx) in menuLinks" :key="idx">
               <router-link :to="{name:menu.routeName}">{{menu.label}}</router-link> 
             </li>      
          </ul>

          <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>


        </nav>         
              
    </header>  
    
     
</template>

<script>
export default{
     name:'HeaderView',
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