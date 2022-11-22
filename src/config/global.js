export default {
  global: {
    componenteFormativo:
      '<em>You can’t undo the past... but you can certainly not repeat it</em> <br> No puedes deshacer el pasado... pero ciertamente puedes no repetirlo',
    descripcionCurso:
      'En este componente, se pretende trabajar el uso del pasado perfecto y del pasado perfecto continuo, que permiten hablar de acciones en el pasado que ocurrieron antes de otra acción en el pasado. Además, habrá adverbios para complementar las acciones contadas y utilizadas en el componente. Para hablar de acciones en el pasado, también se utilizará el tercer condicional, que permitirá hablar de arrepentimientos. Los verbos modales complementarán las ideas expuestas y, para terminar, el vocabulario sobre literatura y sucesos desafortunados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/flot7.svg'),
      },
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>The author creates a serene atmosphere</em> (El autor crea una atmósfera serena)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '<em>Talking about literature</em> (Hablando de literatura)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Unfortunate events</em> (Eventos desafortunados)',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Perfect tenses</em> (Tiempos perfectos)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Past perfect</em> (Pasado perfecto)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              '<em>Past perfect continuous</em> (Pasado perfecto continuo)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Modal verbs in the past</em> (Verbos modales en pasado) ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>Third conditional: regret</em> (Tercer condicional: arrepentimiento) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<em>Condition</em> (Condición)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>Result</em> (Resultado)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: '<em>Structures</em> (Estructuras)',
            hash: 't_4_3',
          },
        ],
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
      tema: '<em>Talking about literature</em> (Hablando de literatura)',
      referencia:
        '<em>Cambridge University Press. (s. f.). Literature - SMART Vocabulary cloud with related words and phrases. Cambridge Dictionary.</em> ',
      tipo: '<em>Web</em>',
      link:
        'https://dictionary.cambridge.org/topics/media-and-publishing/literature',
    },
    {
      tema: '<em>Past perfect</em> (Pasado perfecto)',
      referencia:
        '<em>BBC Learning English. (2018). The Past Perfect Tense: The Grammar Gameshow Episode 13</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=05HXVE05vjg ',
    },
    {
      tema: '<em>Modal verbs in the past</em>',
      referencia:
        '<em>British Council. (s. f.). Modals - deductions about the past. British Council LearnEnglish.</em> ',
      tipo: '<em>Web</em>',
      link:
        'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/modals-deductions-about-the-past',
    },
    {
      tema: '<em>Third conditional: regret</em>',
      referencia: '<em>British Council. (s. f.). Third conditional.</em> ',
      tipo: '<em>Web</em>',
      link:
        'https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/third-conditional',
    },
  ],
  glosario: [
    {
      termino: '<em>Base form</em> / Forma base',
      significado:
        'forma más básica de un verbo, sin ningún tipo de terminación específica.',
    },
    {
      termino: '<em>Past simple</em> / Pasado simple',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em>Past continuous</em> / Pasado continuo',
      significado:
        'tiempo verbal que hace referencia a acciones que se estaban llevando a cabo en un momento del pasado.',
    },
    {
      termino: '<em>Time expressions</em> / Expresiones de tiempo',
      significado:
        'son expresiones que dan información sobre el tiempo en que sucede algo y se emplean para hablar del momento en que se realiza una acción.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Austen, J. (s. f.). Letter 4th Laura to Marianne. Project Gutenberg</em>',
      link:
        'https://www.gutenberg.org/files/1212/1212-h/1212-h.htm#link2H_4_0005',
    },
    {
      referencia:
        '<em></em>Beckwith, S. (s. f.). The Past Perfect Tense. Perfect English Grammar</em>',
      link: 'https://www.perfect-english-grammar.com/past-perfect.html',
    },
    {
      referencia:
        '<em></em>Cambridge University Press. (s. f.). Degree adverbs. Cambridge Dictionary.</em>',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/degree-adverbs',
    },
    {
      referencia:
        'Equipo académico. (2021). Conectores en inglés: herramientas para la fluidez. <em>British Council Colombia.</em>',
      link:
        'https://www.britishcouncil.co/blog/aprende-ingles/conectores-ingles',
    },
    {
      referencia:
        'Equipo académico. (2021). Past perfect: claves para usarlo como nativo. <em>British Council México.</em>',
      link: 'https://www.britishcouncil.org.mx/blog/past-perfect  ',
    },
    {
      referencia:
        '<em>English with Cambridge. (2021). Past simple y past perfect.</em>',
      link: 'https://www.inglesconcambridge.com/past-simple-y-past-perfect/',
    },
    {
      referencia:
        '<em>Murphy, R. (2019). English grammar in use. Cambridge University Press.</em>',
      link:
        'https://corsidilaurea.uniroma1.it/sites/default/files/english_grammar_in_use_intermediate_2019_5th-ed.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesús Edgardo Contreras Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander - ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
