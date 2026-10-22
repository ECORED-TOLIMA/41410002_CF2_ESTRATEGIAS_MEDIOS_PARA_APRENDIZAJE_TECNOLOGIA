export default {
  global: {
    Name: 'Planeación de procesos formativos y recursos tecnológicos',
    Description:
      'El componente formativo aborda la estructuración de planes de formación basados en competencias, la evaluación por evidencias y la selección de estrategias pedagógicas y materiales educativos pertinentes. Asimismo, desarrolla elementos para la planeación didáctica de clases, considerando la secuencia de apertura, desarrollo y cierre, los recursos tecnológicos disponibles y los lineamientos institucionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan de formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos del plan de formación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimiento para estructurar un plan de formación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Caracterización de los aprendices y evaluación diagnóstica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Articulación entre competencias, resultados de aprendizaje, actividades y evaluación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Material educativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de los materiales educativos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Materiales educativos impresos, audiovisuales, digitales e interactivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Funcionamiento de los recursos tecnológicos en ambientes de aprendizaje',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Criterios para seleccionar materiales educativos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planeación didáctica de una clase',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Secuencia didáctica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Articulación de actividades, estrategias, materiales y evaluación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Lineamientos institucionales para la planeación de clases',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Ejemplo integrador de planeación didáctica con recursos tecnológicos',
            hash: 't_3_4',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Alineación constructiva',
      significado:
        'Coherencia entre los resultados de aprendizaje, las actividades formativas y la evaluación, de manera que todos contribuyan al logro de los propósitos educativos.',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Estrategia en la que los aprendices trabajan conjuntamente para construir conocimientos, compartir ideas y resolver problemas.',
    },
    {
      termino: 'Caracterización de los aprendices',
      significado:
        'Proceso de identificación de los conocimientos previos, las necesidades, los intereses y las condiciones de los participantes para orientar la planeación formativa.',
    },
    {
      termino: 'Competencia',
      significado:
        'Capacidad para integrar conocimientos, habilidades y actitudes en el desarrollo de actividades y la resolución de situaciones propias de un contexto determinado.',
    },
    {
      termino: 'Estrategia metodológica',
      significado:
        'Conjunto organizado de procedimientos y acciones que orientan el proceso de enseñanza y aprendizaje hacia el logro de los resultados establecidos.',
    },
    {
      termino: 'Evaluación diagnóstica',
      significado:
        'Proceso que permite reconocer los conocimientos y las capacidades iniciales de los aprendices para orientar las decisiones pedagógicas.',
    },
    {
      termino: 'Evidencia de aprendizaje',
      significado:
        'Producto, desempeño o resultado que permite comprobar el desarrollo de los aprendizajes esperados.',
    },
    {
      termino: 'LMS (sistema de gestión del aprendizaje)',
      significado:
        'Plataforma digital que permite organizar contenidos, desarrollar actividades, recibir evidencias y realizar seguimiento al proceso formativo.',
    },
    {
      termino: 'Material educativo',
      significado:
        'Recurso diseñado o seleccionado con una intención pedagógica para facilitar la comprensión, la práctica y la construcción de conocimientos.',
    },
    {
      termino: 'Mediación pedagógica',
      significado:
        'Intervención intencionada del instructor-tutor para facilitar el aprendizaje mediante estrategias, recursos, orientaciones y actividades pertinentes.',
    },
    {
      termino: 'Planeación didáctica',
      significado:
        'Organización anticipada de los resultados de aprendizaje, las actividades, las estrategias metodológicas, los recursos y la evaluación de una clase o proceso formativo.',
    },
    {
      termino: 'Recurso tecnológico',
      significado:
        'Herramienta, dispositivo, aplicación o plataforma que apoya el desarrollo de actividades educativas y facilita el acceso a la información y la interacción.',
    },
    {
      termino: 'Resultado de aprendizaje',
      significado:
        'Enunciado que expresa lo que se espera que el aprendiz conozca o sea capaz de hacer al finalizar un proceso formativo.',
    },
    {
      termino: 'Rúbrica de evaluación',
      significado:
        'Instrumento que establece criterios y niveles de desempeño para valorar una evidencia de aprendizaje de manera estructurada y transparente.',
    },
    {
      termino: 'Secuencia didáctica',
      significado:
        'Organización ordenada de las actividades de aprendizaje en momentos de apertura, desarrollo y cierre, con una intención pedagógica definida.',
    },
  ],
  referencias: [
    {
      referencia:
        'Biggs, J., & Tang, C. (2011). Teaching for quality learning at university (4th ed.). Open University Press.',
      link: '',
    },
    {
      referencia:
        'Díaz Barriga Arceo, F., & Hernández Rojas, G. (2010). Estrategias docentes para un aprendizaje significativo: Una interpretación constructivista (3.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Gagné, R. M., Wager, W. W., Golas, K. C., & Keller, J. M. (2005). Principles of instructional design (5th ed.). Thomson/Wadsworth.',
      link: '',
    },
    {
      referencia:
        'Merrill, M. D. (2002). First principles of instruction. Educational Technology Research and Development, 50, 43–59.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2023). Informe de seguimiento de la educación en el mundo 2023: Tecnología en la educación: ¿Una herramienta en los términos de quién?',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000388894',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
