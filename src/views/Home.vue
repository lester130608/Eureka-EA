<template>
  <div class="home">
      <Slides/>

      <!-- Contenedor de la imagen flotante -->
      <div id="floating-image-container" class="floating-image-container">
          <button id="close-button" class="close-button">Cerrar</button>
          <img src="/default/images/flyer.jpg" class="floating-image" alt="Flyer">
      </div>

      <div class="site-section">
          <div class="container-fluid">
              <div class="row d-flex">
                  <div class="col-md-6">
                    <p>{{ $t('view_home.first_block')}}</p>
                    <input v-on:click="$router.push('/theraphy')"  class="bottom-button btn btn-primary py-3 px-5" v-bind:value=" $t('readmore')">
                  </div>
                  <div class="col-md-6">
                    <div>
                      <p>{{ $t('view_home.second_block') }}</p>
                      <ul>
                        <li>{{ $t('view_scholarships.florida_tax_credit') }}</li>
                        <li>{{ $t('view_scholarships.gardiner_scholarship') }}</li>
                        <li>{{ $t('view_scholarships.john_mcKay_scholarship') }}</li>
                      </ul>
                      <input v-on:click="$router.push('/scholarships')"  class="bottom-button button-how-apply btn btn-primary py-3 px-5" v-bind:value=" $t('how_to_apply')">
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Slides from '@/views/Slides.vue'
  import SendEmailContactCmp from '@/components/SendEmailContactCmp'
  import SendEmailRequestInfo from "@/components/SendEmailRequestInfo";

  export default {
      name: 'Home',
      components: {
        SendEmailRequestInfo,
        Slides,
        SendEmailContactCmp
      },
      mounted() {
          const floatingImageContainer = document.getElementById('floating-image-container');
          const closeButton = document.getElementById('close-button');

          // Mostrar la imagen flotante al cargar la página
          floatingImageContainer.style.display = 'block';

          // Cerrar la imagen flotante al hacer clic en el botón
          closeButton.addEventListener('click', function() {
              floatingImageContainer.style.display = 'none';
          });
      }
  }
</script>

<style lang="scss">
.contact-form{
   p strong{
       font-weight: 700;
   }
}
p{
 font-size: 1.2em !important;
}
ul{
 margin: 0 0 1rem 0 !important;
 padding: 0 !important;
 font-size: 1em !important;
 list-style: none;
}
.button-how-apply{
 width: 55%;
}
.bottom-button {
 margin-bottom: 20px;
}
.site-section .bg-light{
 background-color: #e0f0ff!important;
}

@media screen and (max-width: 425px){
 .button-how-apply{
   width: 100%;
 }
}

.floating-image-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
  display: none; /* Oculto por defecto */
}

.floating-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80vw;
  max-height: 80vh;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
  50% {
    transform: translate(-50%, -50%) translateY(10px);
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1001;
}
</style>