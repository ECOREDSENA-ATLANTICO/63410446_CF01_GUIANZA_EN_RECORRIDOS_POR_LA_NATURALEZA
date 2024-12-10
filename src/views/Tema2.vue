<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Historia y geografía turística
      
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-12.mb-3
        p La historia, así como la geografía son relevantes dentro del concepto del manejo turístico de un atractivo. El texto siguiente busca definir parámetros sobre estos temas.
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g--inverso.bg-09.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es la narración fiel y ordenada de acontecimientos notables destinados a perpetuarse con el tiempo y que han influido en los destinos de una comunidad local, regional, nacional, e internacional. Con injerencia sociocultural. <br>La historia está dividida por épocas. Se llama época al intervalo de tiempo (un siglo que son cien años), comprendido entre dos acontecimientos relevantes, de los cuales uno sirve de punto de partida y el otro de término. Sin contar los tiempos prehistóricos y antes de hablar de la conquista, es necesario referenciar la época del descubrimiento: 12 de octubre de 1492. 

    .bg_img
      .row.justify-content-center.align-items-center.mb-4
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_3.position-relative Concepto
              img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='Imagen Descriptiva')

        .col-lg-12.mb-3
          p Nuestra historia está enmarcada por cuatro épocas, a saber:

        .col-md-6.col-lg-3.mb-4.h-100
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img_2.svg", alt='Imagen Descriptiva').img90.mx-auto
            h4.text-center Conquista española
            p.text-center.mb-0 1499 a 1550
        .col-md-6.col-lg-3.mb-4.h-100
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img_3.svg", alt='Imagen Descriptiva').img90.mx-auto
            h4.text-center Colonia
            p.text-center.mb-0 1550 a 1810
        .col-md-6.col-lg-3.mb-4.h-100
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img_4.svg", alt='Imagen Descriptiva').img90.mx-auto
            h4.text-center Independencia
            p.text-center.mb-0 1810 a 1819
        .col-md-6.col-lg-3.mb-4.h-100
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img_5.svg", alt='Imagen Descriptiva').img90.mx-auto
            h4.text-center República
            p.text-center.mb-0 1819 hasta nuestros días

    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Hechos históricos
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='Imagen Descriptiva')
    
      .col-lg-8.mb-3
        h5 Concepto
        p Son los acontecimientos de gran relevancia que conforman la historia y son de connotación política, social, económica y cultural.

        h5 Protagonistas
        p Son los personajes, que están relacionados de manera directa e indirecta con hechos históricos, de gran importancia para una localidad, región o nación.

      .col-md-7.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img_6.png', alt='Imagen Descriptiva')

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Geografía Turística
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='Imagen Descriptiva')

      .col-md-8.col-lg-5.mb-2
        figure
          img(src="@/assets/curso/temas/tema2/img_7.png", alt='Imagen Descriptiva')
      .col-lg-7.mb-2

        .cajon.bg-1.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Es el estudio de áreas geográficas y de la organización de territorios, teniendo en cuenta los elementos de geografía física destinados a las actividades de explotación turística en todas las unidades y áreas que lo componen, así como sus implicaciones sociales, económicas y físicas.

        p La geografía turística es el estudio del viaje y del turismo, tanto como industria como actividad social y cultural. Esta disciplina abarca una amplia gama de intereses, entre ellos el impacto medioambiental, la economía del ocio y la sociología del turismo, respondiendo a las preocupaciones relacionadas con la gestión y la industria turística. La geografía es fundamental para este estudio, ya que involucra movimientos y actividades en el espacio geográfico.
        p Además, es una actividad en la que tanto las características de los lugares como las identidades personales se forman a través de las relaciones creadas entre estos, los paisajes y las personas.

    .row.justify-content-center.align-items-center.mb-2.ordenar_tarjetas(data-aos="fade-right")
      .col-lg-8.mb-2.pos_2.pos_1
        p Los desarrollos recientes en la geografía humana han dado como resultado acercamientos de geografía cultural que toman más acercamientos teóricamente diversos para el turismo, incluyendo una sociología que se extiende más allá como una actividad esporádica, o ver no sólo como un consuntivo de lugares, sino que también produce el sentido de lugar en un destino.
        .cajon.bg-2.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p En la actualidad existe una geografía del turismo que comprende una geografía de mercado, de tráfico de turismo y de núcleo receptores. Actualmente está definido en zonas emisoras y receptoras, pero, esa división no es tan clara; pues, se mezclan entre ellas. Existen muchos estudios sobre la geografía turística, pero, sin embargo, es una ciencia muy reciente, puesto que solo tiene 50 años, que resulta insignificante si se compara con las ciencias tradicionales.

      .col-md-8.col-lg-4.mb-2
        figure
          img(src="@/assets/curso/temas/tema2/img_8.png", alt='Imagen Descriptiva')

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.bg-13.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_9.png')})`}"
          )
          .bloque-texto-g__texto.p-4.bg-transparente.text-white
            p.mb-0 El turismo actual aparece muy definido en una corriente turística que se puede llamar de tradiciones (carreteras, ferrocarriles, avión); y también en una corriente con origen estrictamente turístico (itinerarios, vuelo chárter, cruceros). Existen pocos estudios sobre ésta, porque es un fenómeno relativamente reciente. Las primeras obras que tenemos sobre geografía turística serían las de Charles Réau, que en su revista “Repertorio de viajes”, hizo una serie de estudios de los años 50, los cuales constituyen la base de lo que hoy llamamos geografía turística. 
      
      .col-lg-12
        p Pierre Defert, sigue la misma línea que el anterior, ambos son considerados los primeros iniciadores de la geografía turística como ciencia compleja. (Urry y Axhausen, 2006).

</template>

<script>
export default {
  name: 'Tema2',
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
