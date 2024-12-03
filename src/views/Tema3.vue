<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Legislación ambiental
      
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-lg-12.mb-3
        figure
          img(src="@/assets/curso/temas/tema3/img_1.png", alt="alt").mx-auto

      .col-lg-12.mb-3
        p La legislación ambiental o derecho ambiental es un complejo conjunto de tratados, convenios, estatutos, reglamentos, y el derecho común que, de manera muy amplia, funcionan para regular la interacción de la humanidad y el resto de los componentes biofísicos o el medio ambiente natural, hacia el fin de reducir los impactos de la actividad humana, tanto en el medio natural y en la humanidad misma.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-md-8.col-lg-4.mb-2
        figure
          img(src="@/assets/curso/temas/tema3/img_2.png", alt="alt")
      .col-lg-8.mb-2
        p El tema puede ser dividido en dos áreas principales: control de la contaminación y la remediación, y conservación de los recursos y la gestión. Las leyes que tratan con la contaminación son a menudo medios de comunicación limitados – es decir, pertenecen sólo a un solo medio ambiental, como el aire, el agua (ya sean aguas superficiales, aguas subterráneas o los océanos), suelo, etc., y controlan tanto las emisiones de contaminantes en el medio ambiente, así como la responsabilidad por exceder las emisiones permitidas y la responsabilidad de la limpieza.
        .cajon.bg-1.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Las leyes sobre conservación de los recursos y la gestión se centran generalmente en un solo recurso – por ejemplo, los recursos naturales como los bosques, yacimientos minerales o animales, o más recursos intangibles tales como las zonas especialmente escénicas o los sitios de alto valor arqueológico y proporcionan directrices y limitaciones sobre la conservación, alteración y uso de esos recursos. Muchas leyes que no son exclusivamente “ambientales” sin embargo, contienen importantes componentes del medio ambiente e integran las decisiones de política ambiental. Las leyes municipales, estatales y nacionales en materia de desarrollo, uso del suelo y la infraestructura son algunos ejemplos.

    .bg_img_3_1
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
        .col-lg-12.mb-3
          .bloque-texto-g.bloque-texto-g--inverso.bg-09.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_3.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El derecho ambiental se nutre de la influencia de los principios del ambientalismo, ecología, conservación, administración, responsabilidad y sostenibilidad. Respecto al control de la contaminación en general, las leyes tienen por objeto (a menudo con distintos grados de énfasis del autor) proteger y preservar el ambiente natural y la salud humana. La conservación de los recursos y las leyes de equilibrio general de gestión (una vez más, a menudo con distintos grados de énfasis) tienen como beneficios la conservación y la explotación económica de los recursos. 
      

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-lg-12.mb-3
        p.mb-3 Desde una perspectiva económica legislación ambiental puede ser entendida como interesada en la prevención de las externalidades presentes y futuras, y la preservación de los recursos comunes del agotamiento individual.
        p Las limitaciones y los gastos que tales leyes pueden imponer sobre el comercio y los beneficios no cuantificables a menudo (no monetarios) de la protección del medio ambiente, han generado y siguen generando gran controversia.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-md-8.col-lg-5.mb-3
        figure
          img(src="@/assets/curso/temas/tema3/img_4.png", alt="alt")

      .col-lg-7.mb-3
        h5 Dado el amplio alcance del derecho ambiental, no hay una lista totalmente definitiva de las leyes ambientales, sin embargo, a nivel nacional se consideran las siguientes normas:
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            |	Política Nacional de Biodiversidad 
          li 
            i.fas.fa-check-circle
            |	Ley 1558 de 10 de Julio de 2012 
          li 
            i.fas.fa-check-circle
            |	Decreto 2372 de 1 de Julio de 2010 
          li 
            i.fas.fa-check-circle
            |	Decreto 1996 de 1999 
          li 
            i.fas.fa-check-circle
            |	Sistema Nacional Ambiental (SINA) ley 99 de 1993 
          li 
            i.fas.fa-check-circle
            |	Decreto 2811 de 1974 
          li 
            i.fas.fa-check-circle
            |	Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente. Ley 0023 de 1973.
      
      .col-lg-12.mb-0
        p.text-center Partiendo de dicha normatividad es importante resaltar el artículo 26 de la ley 1558 de 2012, el cual define el rol de Guía Turístico. 
         
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
