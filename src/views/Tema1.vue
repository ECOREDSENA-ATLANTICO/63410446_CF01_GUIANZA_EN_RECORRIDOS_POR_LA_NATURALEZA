<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ecología y recursos naturales
      
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el estudio de mercado es <b>imprescindible realizar una descripción del motivo por el cual se realiza el proyecto</b>, si se formula para abrir nuevos mercados en el exterior, para comercializar como un nuevo producto, para sustituir importaciones o con el fin de competir con productos tradicionales; otro ítem a tener en cuenta, son <b>las condiciones del mercado objetivo</b>, aquí es preciso tener el conocimiento de las características que presenta el mercado local, mercado regional, mercado nacional o el mercado externo al cual va dirigido el proyecto.
    

    .bg_img_0.mb-3
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/tema1/img_2.png", alt="alt")
        .col-lg-7
          .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
            .div.mb-3(data-aos="fade-right")
              h3.bgr_3.position-relative Definición etimológica
                img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

          p Existen diferentes conceptos del origen de la palabra Ecología; se tomarán como base fundamental para iniciar la primera actividad definición etimológica:      
        
          .cajon.bg-1.g_18.mb-5
            .row.mb-4
              .col-lg-12.p-4.ps-5 
                p La palabra Ecología proviene del griego «οίκος» oikos, que significa lugar donde se habita y/o casa, y λóγος» logos, que significa estudio. Etimológicamente significa, el estudio del lugar donde se habita. Parece ser que esta definición fue la primera publicada en el año de 1869 por el destacado zoólogo Alemán Ernst Haeckel.

    .row.justify-content-center.align-items-center.mb-2
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Concepto 
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      p La ecología es el estudio de las interacciones entre los ambientes orgánicos e inorgánicos y su entorno. Analiza cómo los seres vivos, ya sean animales o plantas, se relacionan de manera directa o indirecta con su medio, considerando tanto las relaciones amistosas como hostiles que enfrentan en su lucha diaria por la existencia.

      .col-lg-12
        figure
          img(src="@/assets/curso/temas/tema1/img_4.png", alt="alt")

    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Niveles de organización de la ecología 
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-8.mb-4
        LineaTiempoD
          p(numero="1" titulo="Individuo") Cada ser vivo presente en la naturaleza, como un caballo, un árbol, un clavel, un ser humano o una bacteria.

          p(numero="2" titulo="Especie") Los individuos que se reproducen entre sí y dejan crías fértiles forman especies, como ocurre con los seres humanos, los bovinos o los sauces. Sin embargo, en casos donde dos individuos de diferentes especies se reproducen, sus descendientes no son fértiles. Un ejemplo es la mula, resultado del cruce entre un asno (o burro) y una yegua; aunque puede vivir, no es fértil, es decir, no puede producir descendencia. Otro caso es el ligre, descendiente del apareamiento entre un león y una tigresa, que, al igual que la mula, no puede reproducirse.

          p(numero="3" titulo="Población") Es un conjunto de individuos que coexisten en el mismo lugar y tiempo, se relacionan entre sí y pertenecen a la misma especie. Ejemplos de esto son la población humana, la población de plátanos y la población de camellos.

          p(numero="4" titulo="Comunidad") Una comunidad es la agrupación de diferentes poblaciones que coexisten en un mismo lugar, lo que explica la presencia de múltiples especies vegetales y animales en ella. A esta comunidad también se le denomina biocenosis.
          
          p(numero="5" titulo="Bioma") Es un grupo de ecosistemas con algunas características similares referentes al clima y a la vegetación uniforme. En otras palabras, un bioma es una unidad de gran extensión que abarca muchos ecosistemas que se desarrollan bajo un mismo clima, y que puede identificarse por su vegetación uniforme.

      .col-md-8.col-lg-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img_5.png", alt="")

    .bg_img_5.mb-5
      .row.justify-content-center.align-items-center.mb-3
        h4.mb-5.text-center Debe tenerse en cuenta que un determinado clima se acompaña de una vegetación característica. Por ejemplo:
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100
              .tarjeta-numerada__numero
                .h2 1
              p 
                b Clima cálido y seco 
              p Vegetación desértica

          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100
              .tarjeta-numerada__numero
                .h2 2
              p 
                b Clima húmedo 
              p Bosques, selvas

          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100
              .tarjeta-numerada__numero
                .h2 3
              p 
                b Clima semiseco  
              p Praderas
        
        h4.mb-5.text-center Se pueden encontrar biomas con árboles abundantes o escasos, o biomas con cantidades grandes o escasas de hierbas. En general
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100
              .tarjeta-numerada__numero
                .h2 1
              p 
                b Biomas con árboles  
              p Selvas, montes y bosques

          .col-md-6.col-lg-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100
              .tarjeta-numerada__numero
                .h2 2
              p 
                b Biomas con hierbas y árboles  
              p Parques

          .col-md-6.col-lg-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100
              .tarjeta-numerada__numero
                .h2 3
              p 
                b Biomas con hierbas  
              p Praderas y estepas

          .col-md-6.col-lg-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100
              .tarjeta-numerada__numero
                .h2 4
              p 
                b Biomas con muy escasa vegetación  
              p Desiertos

        .col-lg-12
          .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_6.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Biosfera: son todos lo biomas que hay en el planeta, el mayor ecosistema existente. Constituye una unidad indisociable junto a su entorno. La biosfera es el mayor nivel que alcanza la organización ecológica, es decir, un supra sistema que encierra a sistemas (biomas) de niveles inferiores. A su vez estos últimos incluyen a diversos subsistemas (ecosistemas). <br>La biosfera es la porción de la Tierra (agua, aire y suelo) habitada por plantas, animales y microrganismos. Abarca desde una altura de 10 kilómetros en la atmósfera hasta lo más profundo de los océanos.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img_7.png", alt="alt").mx-auto
      .col-lg-8

        p <b>Ecosistema:</b> Ecosistema es el término con el que se denominan todas las interacciones que se establecen entre los seres vivos y entre éstos y el ambiente en que se encuentran. Un ecosistema es la totalidad de los vegetales y los animales en una determinada región, junto con el entorno físico en donde viven. Por definición, el ecosistema está formado por elementos con vida (bióticos) y sin vida (abióticos). Dentro de los primeros se incluyen los animales, vegetales, algas, hongos, bacterias y protozoarios. Los factores abióticos son el agua, el suelo, el aire, los rayos solares, los factores climáticos, etc.
      
        .cajon.bg-1.g_18.mb-5
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Los ecosistemas son sistemas complejos, por lo que cualquier variación que ocurra en uno de sus componentes traerá consecuencias en todos los demás componentes. Por esa razón es importante saber las distintas relaciones que se establecen entre los seres vivos y su entorno. <br> Recuerde que la ecología es la rama de las ciencias biológicas que estudia los ecosistemas, es decir, las relaciones recíprocas entre los seres vivos, su medio y las relaciones que establecen entre ellos. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p.mb-2 Los ecosistemas se estudian analizando las cadenas alimentarias, los ciclos de la materia y los flujos de energía. La importancia del concepto ecosistema radica en que “todo se relaciona con todo”. Los componentes de un ecosistema están interrelacionados y esa interrelación es esencial para la vida. Debido a que no existe una parte independiente de otra, ninguna puede ser modificada sin afectar a las otras. El bosque es un ejemplo de ecosistema, compuesto por el suelo, aire, nutrientes y agua donde cohabitan árboles, pasturas, aves, insectos, hongos y bacterias, entre otros factores bióticos.
        p La consecuencia inmediata, por ejemplo, de la tala de árboles es la pérdida del hábitat de las aves, la erosión de los suelos, la acumulación de agua de lluvia y el desplazamiento de los nutrientes del suelo.
      

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .cajon.bg-2.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Todos los ecosistemas necesitan una fuente de energía, representada por el sol, que se distribuye por los distintos componentes del ecosistema. De esa forma se mantiene la vida y se movilizan el agua, los minerales y otros componentes físicos del ecosistema. 
        
        p.mb-3 Además, hay un continuo movimiento de materia, ya que los distintos elementos químicos (carbono, oxígeno, nitrógeno, etc.) pasan desde el aire, el suelo o el agua hacia los seres vivos, y de éstos regresan luego al aire, suelo o agua cerrándose así el ciclo. Por lo expuesto, se puede afirmar que los ecosistemas son sistemas abiertos porque intercambian materia y energía con el entorno, aunque el ingreso de energía es más importante que el de la materia, puesto que ésta se recicla y la reingresa al sistema.

        h4.mb-3 Cuando de ecosistemas se trata, hay ciertos términos que se utilizan y es preciso conocer:

        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            |	Medio: es el fluido que envuelve o rodea a los seres vivos, principalmente el agua (medio acuático) o el aire (medio aéreo).
          li 
            i.fas.fa-check-circle
            |	Sustrato: son las superficies donde se apoyan y desplazan los seres vivos, se caracterizan dentro de ellas las rocas y los suelos.
          li 
            i.fas.fa-check-circle
            |	Factores ambientales: son las variables externas al individuo, capaces de influir en su existencia. Los factores ambientales pueden ser abióticos o bióticos.
         

      .col-md-8.col-lg-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img_8.png", alt="alt").mx-auto

    .bg_img_5_5
      .row.justify-content-center.align-items-center.mb-5

        h4.mb-5.text-center Dentro de los primeros se encuentran:

        .col-md-10
          .row.justify-content-center.mb-1
            .col-md-6.col-lg-4.mb-3
              .tarjeta.bg-03.p-4.h-100
                figure
                  img(src="@/assets/curso/temas/tema1/img_9.svg", alt="alt").w-50.mx-auto.mb-3
                h4.mb-3 Factores climáticos
                p La temperatura, la humedad, la presión atmosférica, etc.
            
            .col-md-6.col-lg-4.mb-3
              .tarjeta.bg-03.p-4.h-100
                figure
                  img(src="@/assets/curso/temas/tema1/img_10.svg", alt="alt").w-50.mx-auto.mb-3
                h4.mb-3 Factores edáficos
                p Dependientes de las características del suelo.
            
            .col-md-6.col-lg-4.mb-3
              .tarjeta.bg-03.p-4.h-100
                figure
                  img(src="@/assets/curso/temas/tema1/img_11.svg", alt="alt").w-50.mx-auto.mb-3
                h4.mb-3 Factores hidrológicos
                p Dependientes del agua.


</template>

<script>
export default {
  name: 'Tema1',
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
