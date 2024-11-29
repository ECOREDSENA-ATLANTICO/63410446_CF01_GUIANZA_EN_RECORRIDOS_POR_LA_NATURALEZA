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
      
      .video.mb-5
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6AGqGgSEQ2g?si=ErpkvXxiI8TMyktw" title="Ecología y conducción de grupos turísticos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
            
  
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
