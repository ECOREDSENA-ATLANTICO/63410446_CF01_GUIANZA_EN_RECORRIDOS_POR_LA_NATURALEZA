<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Filosofía e historia
      
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.mb-2
        p La meta de “No Deje Rastro”, es ser un programa educativo para evitar o minimizar los impactos a las áreas naturales y que ayude a asegurar una positiva experiencia recreativa a todos los visitantes. Las áreas silvestres son el orgullo de sus pueblos. Los administradores de áreas silvestres hacen esfuerzos permanentes para balancear entre los mandatos legislativos de conservación y protección de estas áreas y las necesidades crecientes de proveer de oportunidades recreativas de calidad en estos mismos lugares. 
        .cajon.bg-2.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p La educación al visitante es crucial para el manejo de áreas naturales y el programa “No Deje Rastro” ofrece una estructura simple para transmitir una ética y técnicas para reducir el impacto a las áreas silvestres que visitamos. Las raíces del programa “No Deje Rastro”, buscan unir condiciones sociales e institucionales para producir un esfuerzo en conjunto por un mensaje universal.
      .col-md-8.col-lg-4.mb-2
        figure
          img(src="@/assets/curso/temas/tema4/img_1.png", alt="alt")

    .bg_img_3_1
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12.mb-3
          p La definición de un "impacto al recurso", es un cambio indeseable (deterioro) de los suelos, vegetación, fauna silvestre y recursos acuáticos. En fin, un deterioro a la calidad de la experiencia recreativa.
        .col-lg-12.mb-3
          .bloque-texto-g.bloque-texto-g.bg-14.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img_2.svg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El programa “No Deje Rastro”, fue creado para ayudar a los visitantes en áreas silvestres protegidas a tomar decisiones adecuadas sobre sus propias acciones. Los principios NDR deben servir para desarrollar una conciencia y criterio y no son leyes ni reglamentos. El programa no se trata de prohibir comportamientos específicos, pero al contrario se trata de entregar las bases ecológicas generales para que en cada situación o cada medio ambiente el usuario de áreas silvestres cuenta con la orientación necesaria para tomar una buena decisión.
    
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        p.mb-3 Los Principios del programa No Deje Rastro, basado y apoyado por investigaciones científicas desde sus comienzos, son una herramienta clara, consistente y práctica recomendando técnicas simples y fáciles de aplicar.
        p En la década de 1960 en los Estados Unidos de Norteamérica se produjo una explosión en la demanda para el uso de las áreas silvestres por parte de los habitantes de ese país con actividades como caminatas, excursiones y campismo. En 1924 el Servicio de Forestal de los Estados Unidos tenía una demanda de 4.6 millones de visitantes y en 1999 el uso era de 900 millones de usuarios. Cifras similares se registran en el Servicio de Parques Nacionales, con 33 millones en 1950 a 172 millones en 1970 y 287 millones de visitantes por año en 1999.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7.mb-2
        .cajon.bg-1.g_18.mb-3
          .row.mb-4
            .col-lg-12.p-4.ps-5 
              p Estos aumentos comenzaron a producir impactos asociados que hasta entonces no se conocían. Impactos asociados a senderos y sitios de campamentos fueron los primeros en surgir. Luego vinieron cambios asociados a los hábitats de la fauna silvestre y sus ciclos naturales. A la vez que se registran cambios en la vegetación. Desde tempranas épocas se comenzaron programas para educar a los visitantes y a regular el uso de las áreas silvestres. A mediados de los años 70 se desarrolló por parte del Servicio de Forestal de los Estados Unidos un programa educativo que daba énfasis en entregar técnicas de bajo impacto a los visitantes. 
        p En 1987 se desarrolló por parte del Servicio Forestal, Servicio de Parques Nacionales y Bureau of Land Management material educativo con título "Éticas de No Deje Rastro". Durante esta época se escribieron libros e investigaciones que expresaban éticas y entregaban contenidos en el tema de como minimizar el impacto. En 1988 se publicó el libro Soft Paths (Senderos Suaves) donde se fundamentan los elementos que componen las técnicas de impacto mínimo hoy en día.

        p <em>Fuente: The National Outdoor Leadership School (NOLS) & Leave No Trace (LNT). </em>
      .col-md-8.col-lg-5.mb-2
        figure
          img(src="@/assets/curso/temas/tema4/img_3.png", alt="alt")

</template>

<script>
export default {
  name: 'Tema4',
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
