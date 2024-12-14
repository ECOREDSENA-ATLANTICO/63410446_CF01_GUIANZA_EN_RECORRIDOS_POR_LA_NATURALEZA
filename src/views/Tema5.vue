<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fundamentación científica
      
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g.bg-15.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En los años 60 comienzan a vislumbrarse impactos desconocidos en las áreas silvestres, producto del uso recreativo comienzan a desarrollarse investigaciones para entender estos impactos de una forma integral, en un comienzo se utilizan modelos que vienen de la ganadería, la agricultura y la ingeniería forestal. Sin embargo, estos profesionales se dan cuenta que es un campo nuevo. Hoy en día la ciencia que estudia los cambios al medio ambiente producto del impacto de las actividades recreativas se denomina: Ecología de la recreación.

    .bg_img_0.mb-2
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Ecología de la recreación
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='Imagen Descriptiva')

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-down")
        .col-lg-12.col-xl-8.mb-2
          .cajon.bg-1.g_18.mb-3
            .row.mb-4
              .col-lg-12.p-4.ps-5 
                p Es la disciplina científica que describe los tipos, cantidades y velocidades de cambios ecológicos causados por el uso recreativo, en el campo de la investigación incluye la influencia del mismo uso, el ambiente específico, y factores administrativos en dichos cambios ecológicos.

          p La información que proporciona la Ecología Recreativa apoya a los administradores de ASP (áreas silvestres protegidas) de las siguientes maneras: identifica los impactos al recurso causados por la recreación, facilita un entendimiento de las causas específicas y los efectos de los impactos, y fomenta una percepción más acertada para prevenir, mitigar y manejar los impactos al recurso.
          p Por otro lado, los estudios han respaldado la creación de los principios de "No Deje Rastro" como un programa con bases sólidas del estudio a través de décadas y poder ver el comportamiento de los visitantes y sus impactos.
        
        .col-md-8.col-lg-6.col-xl-4.mb-2
          figure
            img(src="@/assets/curso/temas/tema5/img_2.png", alt='Imagen Descriptiva')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Impactos 
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='Imagen Descriptiva')
  
      .col-lg-12.mb-4
        p La definición de un "impacto al recurso", es un cambio indeseable (deterioro) de los suelos, vegetación, fauna silvestre y recursos acuáticos. En fin, un deterioro a la calidad de la experiencia recreativa.

      .col-md-8.col-lg-5.mb-3
        figure
          img(src="@/assets/curso/temas/tema5/img_3.png", alt='Imagen Descriptiva').mx-auto
      .col-lg-7.mb-3
        h4.color-primario Tipos de Impactos al Recurso
        LineaTiempoD
          row(numero="1" titulo="Vegetación") 
            p Pérdida de cobertura vegetal, cambio en composición de especies (nativas y exóticas).

          row(numero="2" titulo="Suelo") 
            p Pulverización y pérdida del humus orgánico, compactación y erosión de suelos minerales.

          row(numero="3" titulo="Fauna silvestre") 
            p Desplazamiento temporal de zonas de hábitat clave a la especie, molestias o disturbio, habituación a los seres humanos y pérdida (extinción).

          row(numero="4" titulo="Agua")
            p Contaminación química (jabones, bencina y aceites) y contaminación sedimentaria (erosión).



    .bg_img_4.mb-0.p-4
      .row.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-down")
        .col-lg-10.mb-3
          h4.mb-4.text-center.text-verde La importancia de un impacto a las áreas silvestres

          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check-circle
              div
                <span class="text-marron text-bold">Legal:</span> el apoyo de la ley para que se minimicen impactos.
            li 
              i.fas.fa-check-circle
              div
                <span class="text-marron text-bold">Ecológico:</span>  los impactos ponen en peligro la integridad y valor de las áreas silvestres protegidas, como un "control" para poder comparar a los ambientes alterados por el hombre.
            li 
              i.fas.fa-check-circle
              div
                <span class="text-marron text-bold">Social:</span>  los impactos reducen la satisfacción del visitante por dificultar el viajar (senderos erosionados) o perjudican la experiencia de la perspectiva estética. <br>De los estudios realizados podemos sacar dos conclusiones que han guiado la definición de los principios de NDR. <br>La relación entre uso e impacto es curvilínea; dispersar el uso funciona únicamente cuando el nivel de uso es bastante bajo, la concentración de uso funciona mejor para uso de moderado a alto.
          
    .row.mb-3(data-aos="zoom-in-down")
      .col-md-6.col-lg-6.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img_14.png'  alt='Imagen Descriptiva')
          .tarjeta.bg-18
            .p-4
              h5.text-center La influencia de la cantidad de uso en la cantidad de impacto
              p Relación es "asintótica"-- diferencias en la cantidad de uso tienen un fuerte efecto en la cantidad de impacto (para la mayoría de los tipos de impactos) cuando el nivel de uso es bajo, donde el uso es alto, las diferencias en cantidades de uso tienen poco efecto en la cantidad de impacto gráfico. Los impactos ocurren rápidamente, la recuperación es lenta: alternar el uso por diferentes sitios aumenta en vez de disminuir impactos al recurso.

      .col-md-6.col-lg-6.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img_15.png'  alt='Imagen Descriptiva')
          .tarjeta.bg-19
            .p-4
              h5.text-center Impactos de la recuperación
              p Más vale prevenir los impactos en un principio, que sanar las heridas que produce el uso descuidado, ya que esta recuperación, si es posible, tarda mucho más tiempo que poner en práctica los principios de “No Deje Rastro”. Entonces en la práctica, la estrategia de rotar sitios no está respaldada por la ciencia de la ecología de la recreación, como si funciona en la ganadería y la agricultura. Termina en más áreas con impacto significativo.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Factores que influyen en la cantidad de impacto
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='Imagen Descriptiva')

      .col-lg-12.mb-3
        p Bajo la normatividad colombiana estos factores de impacto se definen en el Capítulo II, articulo 4 de la ley 1558 de 10 de Julio de 2012 bajo el concepto de:

      .col-lg-12.mb-2
        .cajon.bg-1.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p <b>Capacidad de carga</b>, que es el número máximo de personas para el aprovechamiento turístico que una zona puede soportar, asegurando una máxima satisfacción a los visitantes y una mínima repercusión sobre los recursos naturales y culturales. Esta noción supone la existencia de límites al uso, determinada por factores medioambientales, sociales y de gestión que define la autoridad ambiental.
    
      .col-lg-12.mb-2
        h5.text-center.text-verde Dentro de la metodología “No deje Rastro” se tienen en cuenta los siguientes factores:

    .bg_img
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
        .tarjeta.fondo_1_2.p-4.slyder_1.bg-01.mb-3
          SlyderA(tipo="b")
            .tarjeta.bg-01.p-3
              .row.justify-content-center.align-items-center.my-lg-4.p-1
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img_6.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Cantidad/frecuencia de uso

                  p Este refiere directamente a "la curva" asintótica de arriba (donde la curva empieza a estabilizarse) es 12 noches de uso en bosques templados. Entonces en frecuencia: ¿va a haber recuperación total entre instancias de uso? o ¿Es que la frecuencia va a crear impactos cumulativos durante el año? Cantidad cuanto es el total de uso por temporada.

            .tarjeta.bg-01.p-2
              .row.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img_7.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Tipo de actividad recreativa
                  p Algunas actividades crean más impacto con menos uso que otros. La cabalgata por ejemplo es más duro en senderos y sitios de acampar que el mochilero. En ríos también, porque el uso es en una sola línea (la definida por el caudal del río) con menos personas (o cantidad de uso) hay que aplicar una estrategia de concentración que en un área de uso más bidimensional como es el excursionismo con mochila.

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img_8.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Comportamiento de los visitantes
                  p ¿Van a aplicar técnicas de impacto mínimo?
                  p ¿Llevan anafres o siempre usan fogatas? ¿Vienen en grupos grandes, o viajan en grupo pequeños? ¿Tienen la práctica de cocinar todos juntos, o acampan por grupos de carpa pequeños?

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img_9.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Distribución espacial del uso
                  p Este es donde el ejemplo del río o kayac del mar son relevantes. ¿Van a acampar en áreas limitadas, ribera, costa, cerca de atracciones esencias identificables? o va a haber una distribución más homogénea?

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img_10.png', alt='Texto que describa la imagen').mx-auto

                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Temporadas de uso
                  p Algunas áreas son más frágiles dependiendo la temporada. Por ejemplo, bosque de clima templado; los senderos pueden tener mucho barro por suelos húmedos; desierto, en épocas más secas falta de agua va a concentrar la gente y poner al visitante en competición directa con la fauna silvestre, etc.

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img_11.png', alt='Texto que describa la imagen').mx-auto

                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Vulnerabilidad de sitios
                  p Algunos ecosistemas son más frágiles que otras. Zonas alpinas, pantanosas, etc.

        .col-lg-12.mb-2
          p Los mencionados factores pueden ser manipulados por la administración para controlar los impactos. Idealmente vamos a manejar el recurso basado en información objetiva sobre la condición del recurso, pero la única manera de recibir dicha información es el monitoreo o cuantificar niveles de impacto, cada acción de la administración debe ser respaldado por resultados de monitoreo.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Evolución histórica típica por un sitio de campamento 
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='Imagen Descriptiva')

      .col-lg-8.mb-2
        p <span class="text-verde text-bold">Estado de formación:</span> impactos ocurren rápidamente cuando el sitio es utilizado por primera vez.

        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            div
              <span class="text-marron text-bold">Seguido por una fase de estabilidad</span> <br> Poco impacto adicional debido al uso continuado. Los sitios que se deterioran mucho son clausurados y no se recuperan y no se sabe, porque no hay una recuperación espontánea, actualmente es el techo de la investigación. Están tratando de acercar el tema a la parte química. El peor de todos los casos es el alto uso esparcido, impacto por todos lados, para ocupar el esparcimiento.
          li 
            i.fas.fa-check-circle
            div
              <span class="text-marron text-bold">Si el sitio es clausurado</span> <br>La recuperación puede ocurrir. Este es un estado que queremos evitar porque la recuperación es mucho más lenta que el impacto en el sitio alternativo que va a recubrir el uso mientras el primer sitio recupere. Por eso los administradores deben intentar endurecer sitios establecidos o limitar cantidad tipo de uso para no clausurar sitios y entrar en un ciclo de rotación.
      
        .cajon.bg-2.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p <b>Conclusión:</b>  el proceso de deterioro siempre se desenvuelve más rápidamente que el proceso de recuperación. Por lo tanto, es necesario que el administrador accione en forma anticipada en vez de reaccionar a impactos que sobrepasen lo aceptable.

      .col-md-8.col-lg-4.mb-2
        figure
          img(src="@/assets/curso/temas/tema5/img_12.png", alt='Imagen Descriptiva')

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-12.mb-2
        p Otra tendencia en los Estados Unidos a lo largo del tiempo es la gran proliferación en el número de sitios de campamento. Esto ocurre cuando el tráfico recreativo no es encausado. Nuevos cambios aparecen más rápidamente que los viejos desaparecen.

      .col-lg-12.mb-0
        .bloque-texto-g.bloque-texto-g.bg-09.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_13.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En los Estados Unidos, los impactos por uso recreativo se han acrecentado con el tiempo. Es más, porque nuevos sitios comienzan a ser impactados más que por un deterioro de sitios ya definidos.
            br
            p Para finalizar, los administradores deben identificar las estrategias que tienen posibilidad de ser eficaces, con el menor número de efectos laterales o posibles de realizar, dados los recursos actuales de la administración y que colectivamente tienen el menor efecto en los visitantes.
        

</template>

<script>
export default {
  name: 'Tema5',
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
