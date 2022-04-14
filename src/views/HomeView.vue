<template>
           
   <!-- Caserol -->

  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/Taiwan2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h3 style="color: #FFB400;">Taiwan</h3>
          <p style="color: #FFB400; font-weight: 700;">Taidong-Sanxiantai</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/antelope-canyon.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h3 style="color: #FFB400;">USA</h3>
          <p style="color: #FFB400; font-weight: 700;">Arizona-antelope-canyon</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/Japon2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h3 style="color: #FFB400;">Japon</h3>
          <p style="color: #FFB400; font-weight: 700;">Kyoto</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/Greece.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h3 style="color: #FFB400;">Greece</h3>
          <p style="color: #FFB400; font-weight: 700;">Archipel de Santorin</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/taj-mahal-Inde.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h3 style="color: #FFB400;">Inde</h3>
          <p style="color: #FFB400; font-weight: 700;">Delhi-taj-mahal</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- Pourquoi -->

  <section class="nouveaute">
    <div class="container">
      <div class="row">
        <h1>Pourquoi voyager avec nous</h1>
      </div>
      <div class="row">
        <h5>Soyons honnête, nous ne sommes pas les seuls à proposer des voyages sur mesure,
          mais nous avons quelques atouts qui font incontestablement la différence.</h5>
      </div>
      <div class="row">
        <div class="col-12 col-md-2 ml-auto">
          <img src="img/Luciole.jpg" alt="Luciole" style="border-radius: 90px;">
          <p>LUCIOLE</p>
          <p>Notre appli voyage avec GPS, bonnes adresses et carte interactive</p>
        </div>
        <div class="col-12 col-md-2 ml-auto">
          <img src="img/greeters.png" alt="Luciole" style="border-radius: 90px;">
          <p>GREETERS </p>
          <p> À travers le monde, des locaux qui vous donnent les clés de leur pays</p>
        </div>
        <div class="col-12 col-md-2 ml-auto">
          <img src="img/expériences.jpg" alt="Luciole" style="border-radius: 90px;">
          <p>EXPÉRIENCES </p>
          <p> D'autres quotidiens, à vivre, partager, expérimenter</p>
        </div>
        <div class="col-12 col-md-2 ml-auto">
          <img src="img/hospitalité.jpg" alt="Luciole" style="border-radius: 90px;">
          <p>HOSPITALITÉ </p>
          <p> Des hébergements sélectionnés pour privilégier la rencontre</p>
        </div>
        <div class="col-12 col-md-2 ml-auto">
          <img src="img/Carbone.jpg" alt="Luciole" style="border-radius: 90px;">
          <p>CARBONE NEUTRE </p>
          <p> L'absorption à 100% des émissions de CO2 de votre voyage</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MOODBOARD -->

  <section class="moodboard">
    <div class="container flex-center">
      <img src="img/Group.jpg" alt="Moin cher" class="img-fluid">
    </div>
  </section>  
    
     
</template>

<script>
export default{
     name:'HeaderView',
}
</script>

<style>
@import "./assets/css/Index.css";
</style>