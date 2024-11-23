<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-justify.align-items-justify.fondo.mb-3
      
      p.mb-4 El guía turístico desempeña un papel determínate en el desarrollo del turismo sostenible, ya que proporciona a los visitantes información valiosa sobre la cultura, la historia y las tradiciones del lugar. La actividad turística no solo genera oportunidades de empleo local, sino que también mejora la calidad de vida de los habitantes.

      p Conducir grupos de turistas requiere una planificación y ejecución precisas de cada detalle del itinerario, asegurando que los visitantes reciban apoyo constante y disfruten plenamente de su recorrido por la naturaleza. Bienvenido a este componente formativo:
      
      //- .video.mb-5
        //- <iframe width="560" height="315" src="https://www.youtube.com/embed/FxVSSZCuLLo" title="Producción pecuaria agroecológica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      figure
        img(src='@/assets/curso/introduccion/img_1.png', alt='Texto que describa la imagen').mx-auto
      
            
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
