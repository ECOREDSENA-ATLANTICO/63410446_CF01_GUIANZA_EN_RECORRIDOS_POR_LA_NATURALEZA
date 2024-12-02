<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ecología y recursos naturales
      
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La ecología y el uso responsable de los recursos naturales son esenciales para el futuro del planeta. Los guías turísticos, como defensores del medioambiente, deben inspirar a los visitantes a preservar la naturaleza, promoviendo una convivencia sostenible y armoniosa con el entorno. Además, deben asumir un papel activo en la educación ambiental, enseñando a los visitantes la importancia de conservar estos recursos y vivir en equilibrio con el ecosistema.

    .bg_img_0.mb-2
      .row.justify-content-center.align-items-center.mb-2
        .col-md-8.col-lg-5.mb-2
          figure
            img(src="@/assets/curso/temas/tema1/img_2.png", alt="alt")
        .col-lg-7.mb-2
          .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
            .div.mb-3(data-aos="fade-right")
              h3.bgr_3.position-relative Definición etimológica
                img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

          p Existen diferentes conceptos del origen de la palabra Ecología; se tomarán como base fundamental para iniciar la primera actividad definición etimológica:      
        
          .cajon.bg-1.g_18.mb-5
            .row.mb-4
              .col-lg-12.p-4.ps-5 
                p La palabra Ecología proviene del griego <em>«οίκος» oikos</em>, que significa lugar donde se habita y/o casa, y λóγος» logos, que significa estudio. Etimológicamente significa, el estudio del lugar donde se habita. Parece ser que esta definición fue la primera publicada en el año de 1869 por el destacado zoólogo Alemán Ernst Haeckel.

    .row.justify-content-center.align-items-center.mb-5
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

      .col-md-7.col-lg-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img_5.png", alt="")

    .bg_img_5.mb-5
      .row.justify-content-center.align-items-center.mb-3
        h5.mb-5.text-center Debe tenerse en cuenta que un determinado clima se acompaña de una vegetación característica. Por ejemplo:
        .row.justify-content-center.mb-3
          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100.mt-22
              .tarjeta-numerada__numero
                .h2 1
              p 
                b Clima cálido y seco 
              p Vegetación desértica

          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100.mt-22
              .tarjeta-numerada__numero
                .h2 2
              p 
                b Clima húmedo 
              p Bosques, selvas

          .col-md-6.col-lg-4.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100.mt-22
              .tarjeta-numerada__numero
                .h2 3
              p 
                b Clima semiseco  
              p Praderas
        
        h5.mb-5.text-center Se pueden encontrar biomas con árboles abundantes o escasos, o biomas con cantidades grandes o escasas de hierbas. En general
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-6.col-xl-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100.mt-22
              .tarjeta-numerada__numero
                .h2 1
              p 
                b Biomas con árboles  
              p Selvas, montes y bosques

          .col-md-6.col-lg-6.col-xl-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100.mt-22
              .tarjeta-numerada__numero
                .h2 2
              p 
                b Biomas con hierbas y árboles  
              p Parques

          .col-md-6.col-lg-6.col-xl-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100.mt-22
              .tarjeta-numerada__numero
                .h2 3
              p 
                b Biomas con hierbas  
              p Praderas y estepas

          .col-md-6.col-lg-6.col-xl-3.mb-4
            .tarjeta-numerada.bg-01.p-5.h-100.mt-22
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
              p.mb-0 <b>Biosfera:</b> son todos lo biomas que hay en el planeta, el mayor ecosistema existente. Constituye una unidad indisociable junto a su entorno. La biosfera es el mayor nivel que alcanza la organización ecológica, es decir, un supra sistema que encierra a sistemas (biomas) de niveles inferiores. A su vez estos últimos incluyen a diversos subsistemas (ecosistemas). <br>La biosfera es la porción de la Tierra (agua, aire y suelo) habitada por plantas, animales y microrganismos. Abarca desde una altura de 10 kilómetros en la atmósfera hasta lo más profundo de los océanos.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.col-lg-6.col-xl-4.mb-2
        figure
          img(src="@/assets/curso/temas/tema1/img_7.png", alt="alt").mx-auto
      .col-lg-12.col-xl-8.mb-2

        p <b>Ecosistema:</b> Ecosistema es el término con el que se denominan todas las interacciones que se establecen entre los seres vivos y entre éstos y el ambiente en que se encuentran. Un ecosistema es la totalidad de los vegetales y los animales en una determinada región, junto con el entorno físico en donde viven. Por definición, el ecosistema está formado por elementos con vida (bióticos) y sin vida (abióticos). Dentro de los primeros se incluyen los animales, vegetales, algas, hongos, bacterias y protozoarios. Los factores abióticos son el agua, el suelo, el aire, los rayos solares, los factores climáticos, etc.
      
        .cajon.bg-1.g_18.mb-1
          .row.mb-1
            .col-lg-12.p-4.ps-5 
              p Los ecosistemas son sistemas complejos, por lo que cualquier variación que ocurra en uno de sus componentes traerá consecuencias en todos los demás componentes. Por esa razón es importante saber las distintas relaciones que se establecen entre los seres vivos y su entorno. <br> Recuerde que la ecología es la rama de las ciencias biológicas que estudia los ecosistemas, es decir, las relaciones recíprocas entre los seres vivos, su medio y las relaciones que establecen entre ellos. 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        p.mb-2 Los ecosistemas se estudian analizando las cadenas alimentarias, los ciclos de la materia y los flujos de energía. La importancia del concepto ecosistema radica en que “todo se relaciona con todo”. Los componentes de un ecosistema están interrelacionados y esa interrelación es esencial para la vida. Debido a que no existe una parte independiente de otra, ninguna puede ser modificada sin afectar a las otras. El bosque es un ejemplo de ecosistema, compuesto por el suelo, aire, nutrientes y agua donde cohabitan árboles, pasturas, aves, insectos, hongos y bacterias, entre otros factores bióticos.
        p La consecuencia inmediata, por ejemplo, de la tala de árboles es la pérdida del hábitat de las aves, la erosión de los suelos, la acumulación de agua de lluvia y el desplazamiento de los nutrientes del suelo.
      
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.col-xl-8.mb-2
        .cajon.bg-2.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Todos los ecosistemas necesitan una fuente de energía, representada por el sol, que se distribuye por los distintos componentes del ecosistema. De esa forma se mantiene la vida y se movilizan el agua, los minerales y otros componentes físicos del ecosistema. 
        
        p.mb-4 Además, hay un continuo movimiento de materia, ya que los distintos elementos químicos (carbono, oxígeno, nitrógeno, etc.) pasan desde el aire, el suelo o el agua hacia los seres vivos, y de éstos regresan luego al aire, suelo o agua cerrándose así el ciclo. Por lo expuesto, se puede afirmar que los ecosistemas son sistemas abiertos porque intercambian materia y energía con el entorno, aunque el ingreso de energía es más importante que el de la materia, puesto que ésta se recicla y la reingresa al sistema.

        h4.mb-4 Cuando de ecosistemas se trata, hay ciertos términos que se utilizan y es preciso conocer:

        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-check-circle
            div
              <span class="text-marron text-bold">Medio:</span> es el fluido que envuelve o rodea a los seres vivos, principalmente el agua (medio acuático) o el aire (medio aéreo).
          li 
            i.fas.fa-check-circle
            div
              <span class="text-marron text-bold">Sustrato:</span> son las superficies donde se apoyan y desplazan los seres vivos, se caracterizan dentro de ellas las rocas y los suelos.
          li 
            i.fas.fa-check-circle
            div
              <span class="text-marron text-bold">Factores ambientales:</span> son las variables externas al individuo, capaces de influir en su existencia. Los factores ambientales pueden ser abióticos o bióticos.
         

      .col-md-6.col-lg-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img_8.png", alt="alt").mx-auto

    .bg_img_5_5
      .row.justify-content-center.align-items-center.mb-3

        h4.mb-4.text-center Dentro de los primeros se encuentran:

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

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10

        h4.mb-3.text-center Cuando de ecosistemas se trata, hay ciertos términos que se utilizan y es preciso conocer:

        ul.lista-ul--color.lista-ul--separador
          li 
            .lista-ol--cuadro__vineta
              span a
            div
              <span class="text-marron text-bold">Medio:</span> es el fluido que envuelve o rodea a los seres vivos, principalmente el agua (medio acuático) o el aire (medio aéreo).
          li 
            .lista-ol--cuadro__vineta
              span b
            div
              <span class="text-marron text-bold">Sustrato:</span> son las superficies donde se apoyan y desplazan los seres vivos, se caracterizan dentro de ellas las rocas y los suelos.
          li 
            .lista-ol--cuadro__vineta
              span c
            div
              <span class="text-marron text-bold">Factores ambientales:</span> son las variables externas al individuo, capaces de influir en su existencia. Los factores ambientales pueden ser abióticos o bióticos.

          li 
            .lista-ol--cuadro__vineta
              span d
            div
              <span class="text-marron text-bold">Factores ambientales:</span> son las variables externas al individuo, capaces de influir en su existencia. Los factores ambientales pueden ser abióticos o bióticos.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.mb-4
        h5.text-center En síntesis, todos los factores ambientales abióticos y bióticos influyen sobre los seres vivos, teniendo éstos que adaptarse a sus variaciones:

      .col-md-8.col-lg-6.mb-3
        figure
          img(src="@/assets/curso/temas/tema1/img_13.png", alt="alt").mx-auto
      .col-lg-6.mb-3
        LineaTiempoD
          row(numero="1" titulo="Biotopo") 
            p Término que incluye al medio (acuático, aéreo), al sustrato (rocas, suelo) y a los factores ambientales. El biotopo, conjuntamente con la comunidad o biocenosis, da lugar a un ecosistema.
            span.text-bold.text-marron Biotopo + Biocenosis = Ecosistema

          row(numero="2" titulo="Recurso") 
            p En ecología, un recurso es todo lo que un organismo consume o utiliza para llevar a cabo sus funciones vitales. Son recursos el agua, los alimentos, la luz, etc.

          row(numero="3" titulo="Hábitat") 
            p Es un determinado lugar que ocupa una población (hormiguero, colmena, cueva) o una comunidad (fondo de un lago, orilla de un río). Un árbol es un hábitat de muchas aves, insectos y algunos mamíferos. En general no hay interferencia entre ellos porque algunos viven dentro del tronco, otros en la copa y algunos en las ramas más bajas del árbol. Cada hábitat posee recursos y condiciones particulares.

          row(numero="4" titulo="Nicho ecológico")
            p Es la forma en que cada especie o población aprovecha los recursos (alimentos, agua) y las condiciones de su hábitat (temperatura, humedad, velocidad de las corrientes de agua) para poder crecer, vivir y reproducirse.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .cajon.bg-2.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Por último, ya sabemos que los individuos de una misma especie forman poblaciones, y que varias poblaciones que habitan en un mismo lugar dan lugar a las comunidades. También sabemos que las comunidades vegetal y animal en interrelación permanente con los factores abióticos donde viven forman el ecosistema. El tamaño de un ecosistema puede ser tan pequeño como el tronco de un árbol o tan inmenso como el mar.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.mb-3 
        .bloque-texto-g.bloque-texto-g.bg-04.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_14.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-2 <b>Clases de ecosistema:</b> los ecosistemas pueden ser clasificados en aeroterrestres y acuáticos, dependiendo del lugar (aire, tierra, agua) en que se lleva a cabo la vida de los organismos vivos. Son ecosistemas aeroterrestres los bosques, las praderas, el desierto, una playa, una montaña, un tronco de árbol caído, etc. <br>Dentro de los ecosistemas acuáticos se diferencian aquellos que son de agua dulce (ecosistemas acuáticos continentales) como los ríos, lagos, lagunas, arroyos, charcos, etc. y los de aguas saladas (ecosistemas marinos), como los mares y océanos.

      .col-lg-12
        p Los límites de los ecosistemas terrestres pueden distinguirse a partir del tipo de vegetación predominante. Tal el caso de los bosques, con sus numerosos árboles donde las copas forman un estrato, o una pradera donde abundan las pasturas bajas. Los accidentes geográficos que ofrecen una montaña, una playa o un lago son también una ayuda para establecer los límites de un ecosistema.

    
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3 
        h4.mb-3.text-center Para recordar
  
      .col-lg-10.mb-0
        .titulo-sexto.bg-11.mb-4
            h5 Tabla 1. 
            span.text-dark Clases de ecosistemas
        
        .tabla-b.mb-5 
          table
            caption Nota: Sena (2012).
            tbody
            tr
              td(rowspan="10" class="group").bg-05 ECOSISTEMA
              td(rowspan="2" class="group").bg-06 Componentes
              td.bg-07 Bióticos
              td.bg-08 
                ul
                  li Vegetales
                  li Animales
                  li Descomponedores (hongos, bacterias)
            tr
              td.bg-07 Abióticos
              td.bg-08 
                ul
                  li Luz solar
                  li Agua Suelo
                  li Aire
                  li Factores climáticos (humedad)
                  li Sales minerales del suelo
                  li Restos orgánicos
              
            tr
              td(rowspan="8" class="group").bg-06 Tipos
              td.bg-07 Aeroterrestres
              td.bg-08 
                ul
                  li Playas
                  li Desiertos
                  li Bosques
                  li Selvas
                  li Praderas
                  li Montañas
                  li Parques
                  li Montes
                  li Estepas
              
            tr
              td.bg-07 Acuáticos continentales (agua dulce)
              td.bg-08 
                ul
                  li Ríos
                  li Lagos
                  li Lagunas
                  li Arroyos
                  li Manantiales
                  li Charcas
              
            tr
              td.bg-07 Acuáticos marinos (agua salada)
              td.bg-08 
                ul
                  li Océanos
                  li Mares
              
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Contaminación 
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-12.mb-4
        p Llamamos contaminación a aquellos cambios, no deseables en nuestro entorno, de las características físicas, químicas y biológicas del aire, del agua y del suelo, que afectan al hombre, a las especies animales y a las vegetales.

      .col-lg-12.mb-4
        .bloque-texto-g.bloque-texto-g--inverso.bg-03.p-3.p-sm-4.p-md-5.bloque_fondo
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_15.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-2 Clases de Contaminación <br>
            p Todo lo que existe en la naturaleza puede ser alterado o destruido por la reacción de distintos contaminantes, teniendo en cuenta:
            ul.lista-ul--color
              li 
                i.fas.fa-check-circle
                |	Contaminación del aire.
              li 
                i.fas.fa-check-circle
                |	Contaminación del agua. 
              li 
                i.fas.fa-check-circle
                |	Contaminación del suelo.

      .col-lg-12.mb-4
        p Las principales formas de contaminación, como la atmosférica, hídrica y del suelo, continúan incrementándose a causa del crecimiento urbano. La inteligencia artificial se perfila como una herramienta fundamental para monitorear, predecir y mitigar los efectos nocivos de la contaminación.
      
      .col-lg-8.mb-4
        .titulo-sexto.bg-12.mb-4
            h5 Figura 1. 
            span.text-dark <em>Clases de contaminantes</em>

        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img_16.png', alt='La clasificación de los alimentos se detallan a continuación.').mx-auto
          figcaption Nota: Sena (2012)

    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Recursos naturales 
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-12.mb-4
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_17.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p <b>Concepto:</b> es necesario que un guía turístico tenga en claro el concepto de recurso natural ya que existe una estrecha relación entre la actividad laboral y la convivencia con los recursos naturales, que son el compendio de los elementos de la naturaleza, esenciales y útiles para el aprovechamiento de los seres humanos: el agua, la luz, el sol, la tierra, los bosques, los peces, la flora, la fauna y los elementos químicos en su estado natural, entre otros.
      
      .col-lg-12.mb-4
        h4.mb-3.text-center A continuación, se presenta en el cuadro, la clasificación de los recursos naturales:
      
      .col-md-10.col-lg-6.mb-4.bg-09.p-4.border-izquierda
        .row.justify-content-center
          .col-lg-8.text-white
            img(src="@/assets/curso/temas/tema1/img_18.png", alt="alt").mx-auto.w-50.mb-4

            h3.mb-3.text-center Biodegradables

            p.text-center Son organismos que se pueden descomponer por la acción natural de organismos vivos, como lombrices, hongos, y bacterias. Existen problemas cuando la cantidad de contaminantes supera la cantidad de organismos descomponedores. Los materiales biodegradables derivan de elementos orgánicos, como el papel, el cartón, los restos de animales y vegetales. 

      .col-md-10.col-lg-6.mb-4.bg-10.p-4.border-derecha
        .row.justify-content-center
          .col-lg-8.text-dark
            img(src="@/assets/curso/temas/tema1/img_19.png", alt="alt").mx-auto.w-50.mb-4

            h3.mb-3.text-center Biodegradables

            p.text-center Son organismos que se pueden descomponer por la acción natural de organismos vivos, como lombrices, hongos, y bacterias. Existen problemas cuando la cantidad de contaminantes supera la cantidad de organismos descomponedores. Los materiales biodegradables derivan de elementos orgánicos, como el papel, el cartón, los restos de animales y vegetales. 

    .row.justify-content-center.align-items-center.mb-2
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Área natural 
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-12.mb-3
        p.mb-3 Área geográfica con condiciones ambientales y climáticas similares, que alberga comunidades de animales y plantas que interactúan entre sí y dependen mutuamente para su supervivencia (mutualismo).

        h3.text-primario Clasificación de las áreas
        
        p Por medio del Código Nacional de Recursos Naturales Renovables y de Protección del Medio Ambiente, Decreto 2811 de 1974, el sistema de parques nacionales se clasifica de acuerdo con los siguientes tipos de áreas:

    .bg_img
      .row.justify-content-center.align-items-center.mb-4
        .tarjeta.fondo_1_2.p-4.slyder_1.bg-01
          SlyderA(tipo="b")
            .tarjeta.bg-01.p-3
              .row.justify-content-center.align-items-center.my-lg-4.p-1
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_21.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Parque Nacional

                  p Área extensa que facilita su autorregulación ecológica, con ecosistemas en general no alterados sustancialmente por la explotación u ocupación humana. En este espacio, las especies vegetales, animales, complejos geomorfológicos y manifestaciones históricas o culturales poseen valor científico, educativo, estético y recreativo nacional. Para garantizar su conservación, se somete a un régimen de manejo adecuado.

            .tarjeta.bg-01.p-2
              .row.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_22.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Reserva Natural Única
                  p Área en la cual existen condiciones primitivas de flora, fauna y gea, y está destinada a la conservación, investigación y estudio de sus riquezas naturales.

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_23.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Santuario de Flora
                  p Área dedicada a preservar especies o comunidades vegetales para conservar recursos genéricos de la flora nacional.

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_24.png', alt='Texto que describa la imagen').mx-auto
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Santuario de Fauna
                  p Área  dedicada a preservar especies o comunidades de animales silvestres, para conservar recursos genéticos de la fauna nacional.

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_25.png', alt='Texto que describa la imagen').mx-auto

                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Vía Parque
                  p Faja de terreno con carretera, que posee bellezas panorámicas singulares o valores naturales o culturales, conservada con fines de educación y esparcimiento.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.mb-3
        p Colombia es uno de los países potencialmente “Mega-diversos biológica y culturalmente” del mundo. Representado en 59 Áreas Naturales a 2014, pertenecientes al sistema de Parques Nacionales Naturales.

      .col-md-12.col-lg-8.mb-3
        .tarjeta.bg-degradado-01.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_27.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1.text-naranja Parques Nacionales Naturales
                  p.text-small.mb-0.text-white Para conocer en detalle cada una de las áreas Naturales protegidas se debe tener en cuenta el área, organización, servicios, política de parques, y fotografías.
                .col-sm-auto
                  a.boton.color-acento-botones(href="http://www.parquesnacionales.gov.co/portal/es/" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link

    .bg_img_5
      .row.justify-content-center.align-items-center.mb-3
        h5.mb-5.text-center Así mismo según el Decreto 2372 de 2010 las categorías de áreas protegidas que conforman el SINAP «Sistema Nacional de Áreas Protegidas» son:
        .col-md-12.col-lg-10
          .row.justify-content-center.mb-3
            .col-md-6.col-lg-4.mb-4
              .tarjeta-numerada.bg-01.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 a
                p Los Sistema de Parques Nacionales Naturales

            .col-md-6.col-lg-4.mb-4
              .tarjeta-numerada.bg-01.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 b
                p Bosques, selvas

            .col-md-6.col-lg-4.mb-4
              .tarjeta-numerada.bg-01.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 c
                p Praderas

            .col-md-6.col-lg-4.mb-4
              .tarjeta-numerada.bg-01.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 d
                p Los Distritos de Manejo Integrado

            .col-md-6.col-lg-4.mb-4
              .tarjeta-numerada.bg-01.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 e
                p Los Distritos de Conservación de Suelos

            .col-md-6.col-lg-4.mb-4
              .tarjeta-numerada.bg-01.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 f
                p Las Áreas de Recreación
                
        h4.mb-5.text-center Áreas Protegidas Privadas
        .col-md-12.col-lg-10
          .row.justify-content-center.mb-0
            .col-md-6.col-lg-4.mb-4
              .tarjeta-numerada.bg-01.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 g
                p Las Reservas Naturales de la Sociedad Civil
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
