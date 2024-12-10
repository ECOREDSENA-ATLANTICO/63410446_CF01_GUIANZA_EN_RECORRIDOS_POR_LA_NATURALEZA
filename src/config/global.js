export default {
  global: {
    componenteFormativo: 'Ecología y conducción de grupos turísticos',
    descripcionCurso:
      'La educación turística es clave para que los visitantes tengan una experiencia completa y enriquecedora en su viaje. Los guías de turismo te ayudan a conocer los destinos, la cultura, la gastronomía y la historia. Además, te enseñan a promover la comprensión y el respeto por el medio ambiente. Su trabajo contribuye a reactivar la economía del sector turístico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ecología y recursos naturales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Historia y geografía turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Legislación ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Filosofía e historia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fundamentación científica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Manual de la Metodología “No deje Rastro”',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ecología y recursos naturales',
      referencia: 'Conservación de Recursos Naturales SENA [2022]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Jx7swm2MhC8',
    },
    {
      tema: 'Legislación ambiental',
      referencia:
        'Congreso de Colombia. (1993). Ley 99 de 1993: Por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones. Diario Oficial, año CXXIX, N. 41146, 22 de diciembre de 1993, pág. 1.',
      tipo: 'Página web',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-99-1993.pdf',
    },

    // {
    //   tema: '',
    //   referencia: '',
    //   tipo: '',
    //   link: 'https://www.google.com/',
    // },
    // {
    //   tema: '',
    //   referencia: '',
    //   tipo: '',
    //   descarga: '/downloads/prueba.pdf',
    // },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'Es el proceso mediante el cual se adquieren o modifican conocimientos, habilidades, actitudes o valores a través del estudio, la experiencia, la enseñanza o la observación. Es una actividad constante que permite a los individuos adaptarse a su entorno y desarrollar competencias personales y profesionales.',
    },
    {
      termino: 'Capacitación',
      significado:
        'Es la disciplina que se encarga de estudiar y diseñar los métodos y técnicas de enseñanza. Su objetivo es optimizar el proceso educativo, facilitando la transmisión de conocimientos y habilidades de manera efectiva y adaptada a las necesidades de los estudiantes.',
    },
    {
      termino: 'Ecología',
      significado:
        'Rama de la biología que estudia las interacciones entre los organismos y su entorno, así como las relaciones entre los seres vivos y los factores abióticos de su ambiente.',
    },
    {
      termino: 'Recursos naturales',
      significado:
        'Elementos materiales o energéticos proporcionados por la naturaleza que son esenciales para la vida humana, como el agua, el aire, los minerales y la flora y fauna.',
    },
    {
      termino: 'Geografía turística',
      significado:
        'Disciplina que estudia la distribución espacial de los recursos turísticos y las actividades relacionadas con el turismo, así como los efectos que esta actividad tiene sobre el territorio.',
    },
    {
      termino: 'Guías turísticos',
      significado:
        'Profesionales capacitados que orientan y acompañan a grupos de turistas durante sus visitas a diferentes destinos, proporcionando información sobre la historia, cultura y características del lugar.',
    },
    {
      termino: 'Legislación ambiental',
      significado:
        'Conjunto de normas y leyes que regulan la interacción humana con el medio ambiente, con el objetivo de preservar y proteger los recursos naturales y garantizar un desarrollo sostenible.',
    },
    {
      termino: 'Biosfera',
      significado:
        'Conjunto de todos los ecosistemas de la Tierra, que incluye todos los seres vivos y los entornos en los que habitan.',
    },
    {
      termino: 'Contaminación',
      significado:
        'Introducción de sustancias o elementos nocivos en el medio ambiente que provocan desequilibrios en los ecosistemas y afectan la salud de los seres vivos.',
    },
    {
      termino: 'Áreas protegidas',
      significado:
        'Espacios naturales delimitados y gestionados por normativas específicas con el fin de conservar su biodiversidad y garantizar el equilibrio ecológico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adame, A., & Salín, P. (1995). Contaminación ambiental. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Arana, F. (1995). Ecología para Principiantes. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Bifani, P. (1997), Medio ambiente y desarrollo (ed. rev.), Universidad de Guadalajara, Guadalajara, México.',
      link: '',
    },
    {
      referencia:
        'Boullon, R. (1990), Planificación del espacio turístico, Trillas, México.',
      link: '',
    },
    {
      referencia:
        'Buzzati, A. (1974), Algunas ideas sobre los principios generales de la educación ambiental, UNESCO, España.',
      link: '',
    },
    {
      referencia:
        'Caratini, R. (1970). Argos Enciclopedia Temática, 55-57 Geología y Biología. Barcelona: Editorial Argos.',
      link: '',
    },
    {
      referencia:
        'CORPORACIÓN ECOLÓGICA Y CULTURAL «PENCA DE SÁBILA» (1992). Derecho y Medio Ambiente. Editorial Presencia.',
      link: '',
    },
    {
      referencia:
        'Cuello, J. & Tola, J (1998). Atlas Mundial del Medio Ambiente –Preservación de la Naturaleza. Barcelona.',
      link: 'https://www.barrameda.com.ar/ecologia/los-ecosistemas/',
    },
    {
      referencia:
        'Cuello, J. & Tola, J (1998). Atlas Mundial del Medio Ambiente –Preservación de la Naturaleza. Barcelona.',
      link: '',
    },
    {
      referencia:
        'Ecológicas, Área: Conceptual, Serie: Ecología y Biogeografía. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Equihua, M., & Benítez, G. (1995). Dinámica de las Comunidades Ecológicas, Área: Conceptual, Serie: Ecología y Biogeografía. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Ferro, D. & Quintero, M.C. (1998). Planeta Azul -Geografía e Historia Visualizada-Editorial Migema.',
      link: '',
    },
    {
      referencia:
        'Herrera, K., Ninón, I., & Morales, F.J. (1995). Factores Ambientales y Estilos de Desarrollo. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Herrera, K., Ninón, I., & Morales, F.J. (1995). Factores Ambientales y Recursos Compartidos. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia: 'República de Colombia. (2012). Ley 1558 de 2012. ',
      link: '',
    },
    {
      referencia:
        'Marrero, L. (1974). Viajemos por el Mundo -Geografía Visualizada. Codice S.A.',
      link: '',
    },
    {
      referencia:
        'Poveda, J.C. (1993). Universo y vida-Ciencias Naturales y Salud-. Editorial Migema.',
      link: '',
    },
    {
      referencia:
        'Tola, J. (1995). Atlas de Ecología. Programa Educativo Visual IATROS. Barcelona: Editorial Thema.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Julio Hernán Beltrán Peñuela',
          cargo: 'Experta temático',
          centro: 'Centro de Comercio y Servicios - Regional Caldas',
        },
        {
          nombre: 'Mónica Patricia Osorio Martínez',
          cargo: 'Asesora pedagógica',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio De Jesús Castañeda Valencia',
          cargo: 'Desarrollador <em>full stack junior</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        // {
        //   nombre: 'Nombre',
        //   cargo: 'Actividad Didáctica',
        //   centro:
        //     'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        // },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
