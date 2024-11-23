<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Ecología y legislación ambiental.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Validar el conocimiento adquirido sobre la legislación vigente aplicada a la pedagogía.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un recurso natural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un material artificial creado por humanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un recurso que no se puede reutilizar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un elemento de la naturaleza utilizado por el hombre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un recurso que solo se encuentra en ecosistemas acuáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito de la conservación de los recursos naturales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar el turismo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Preservar los recursos para futuras generaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Maximizar su explotación económica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar especies invasoras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué es la biodiversidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La variedad de climas en una región.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La variedad de especies en un ecosistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La mezcla de culturas en un país.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de plantas en un área urbana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál de las siguientes es una práctica sostenible?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La tala masiva de árboles.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La caza de especies en peligro de extinción.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La agricultura de rotación.', esCorrecta: true },
            {
              id: 'd',
              texto: 'El uso excesivo de pesticidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué es el cambio climático?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una modificación temporal del clima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un fenómeno natural sin intervención humana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alteraciones en el clima debido a actividades humanas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un cambio de temperatura local.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es un aspecto fundamental del turismo sostenible?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La explotación intensiva de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La participación de la comunidad local.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La construcción de grandes complejos hoteleros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La promoción de destinos lejanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es la energía renovable?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Energía que se agota fácilmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Energía proveniente de fuentes inagotables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Energía producida únicamente por el viento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Energía generada en fábricas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál de estas es una fuente de energía no renovable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El petróleo.', esCorrecta: true },
            { id: 'b', texto: 'La luz solar.', esCorrecta: false },
            { id: 'c', texto: 'El viento.', esCorrecta: false },
            { id: 'd', texto: 'El agua.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es la deforestación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aumento de la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La pérdida masiva de bosques.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El uso sostenible de recursos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La plantación de árboles.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué recurso natural es esencial para la vida?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El oro.', esCorrecta: false },
            { id: 'b', texto: 'El agua.', esCorrecta: true },
            { id: 'c', texto: 'El carbón.', esCorrecta: false },
            { id: 'd', texto: 'El petróleo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué efecto tiene la contaminación en los ecosistemas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la calidad del aire.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Aumenta la biodiversidad.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Daña a las especies y sus hábitats.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fomenta el crecimiento de plantas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es un beneficio del reciclaje?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Disminuye la contaminación.', esCorrecta: true },
            { id: 'b', texto: 'Aumenta los residuos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Elimina los recursos naturales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Fomenta la deforestación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué son los ecosistemas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Áreas urbanas con edificios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comunidades de organismos y su entorno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Regiones de un solo tipo de planta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuerpos de agua en la Tierra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué es el efecto invernadero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un fenómeno causado por la acumulación de gases.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El enfriamiento rápido de la atmósfera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La pérdida de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un método de cultivo intensivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué acción ayuda a combatir el cambio climático?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Usar transporte público.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Incrementar el consumo de plástico.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Desperdiciar agua.', esCorrecta: false },
            { id: 'd', texto: 'Deforestar bosques.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué es la huella de carbono?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El rastro que dejan los animales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La medida de gases de efecto invernadero emitidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tamaño de las plantas en un bosque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de energía renovable usada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué es un recurso no renovable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un recurso que puede regenerarse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un recurso que se agota con el uso.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Un recurso infinito.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Un recurso utilizado en energías renovables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Por qué es importante reducir el consumo de plástico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para disminuir la contaminación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para fomentar su producción.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Porque es barato.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Para aumentar los desechos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué es un ecosistema marino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un ecosistema ubicado en zonas desérticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un ecosistema acuático de agua salada.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Un ecosistema terrestre.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Un ecosistema de agua dulce.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué significa reutilizar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desechar un material usado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dar un nuevo uso a algo en vez de tirarlo.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Consumir más recursos.', esCorrecta: false },
            { id: 'd', texto: 'Comprar un producto nuevo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
