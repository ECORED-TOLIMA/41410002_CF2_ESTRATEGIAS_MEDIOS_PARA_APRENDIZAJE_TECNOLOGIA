<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Material educativo
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los materiales educativos son recursos físicos o digitales que apoyan el proceso de enseñanza y aprendizaje. Su función consiste en facilitar el acceso a la información, favorecer la comprensión de conceptos y orientar el desarrollo de actividades que contribuyan al logro de los resultados de aprendizaje. Estos materiales no se limitan a transmitir contenidos, sino que también pueden promover la participación, la reflexión, la práctica y la aplicación de los conocimientos en diferentes contextos.
    p.mb-4 Entre los materiales educativos se encuentran las guías de aprendizaje, los libros, los documentos, las presentaciones, los videos, las infografías, los simuladores y las herramientas interactivas. Cada tipo de material ofrece posibilidades particulares para abordar los contenidos y acompañar las actividades formativas. Por esta razón, su selección debe responder a la finalidad pedagógica, al tipo de aprendizaje que se busca desarrollar y a las características de los participantes.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img02.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.c03.color-primario.px-4.py-3.mb-4
          p.mb-0 En los ambientes de aprendizaje mediados por Tecnologías de la Información y la Comunicación (TIC), los materiales educativos permiten integrar diferentes formatos y ampliar las oportunidades de acceso a los contenidos. Las plataformas de aprendizaje pueden reunir documentos, recursos audiovisuales, cuestionarios y espacios colaborativos que favorecen el trabajo autónomo y la interacción. Sin embargo, la incorporación de herramientas tecnológicas debe responder a una necesidad formativa concreta, ya que su disponibilidad no garantiza, por sí sola, mejores resultados de aprendizaje.
        p.mb-0 En este sentido, el instructor-tutor debe conocer las características y funciones de los materiales educativos para seleccionarlos, adaptarlos o combinarlos de acuerdo con los propósitos de formación. Para ello, es necesario considerar su pertinencia, claridad, accesibilidad, calidad técnica y relación con las estrategias metodológicas y la evaluación. De esta manera, los materiales se convierten en apoyos pedagógicos que contribuyen al desarrollo de las competencias y mantienen la coherencia entre las actividades propuestas y los resultados de aprendizaje esperados.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Clasificación de los materiales educativos
    p.mb-4 Los materiales educativos pueden clasificarse según la función que cumplen en el proceso formativo o el formato en el que presentan la información. Esta clasificación permite al instructor-tutor identificar los recursos más adecuados para orientar las actividades, facilitar la comprensión de los contenidos y valorar los aprendizajes.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") Según su función pedagógica, se distinguen tres categorías principales:
    .cajon.cajon.c05.p-5.mb-4
      SlyderB(:datos="datosSlyder") 
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img06.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-3.py-2
          p.mb-0(data-aos="fade-down") Esta clasificación responde al propósito con el que se utiliza cada recurso, por lo que un mismo material puede cumplir varias funciones. Por ejemplo, un video puede presentar un concepto, servir de base para resolver un caso práctico y aportar información para una actividad evaluativa, siempre que se integre de manera intencionada a la estrategia pedagógica.
    p.mb-0 También es posible clasificar los materiales según su formato o soporte: impresos, audiovisuales, digitales e interactivos. Estas categorías permiten reconocer sus características y posibilidades de uso en diferentes ambientes de aprendizaje, especialmente en aquellos mediados por tecnologías. Esta clasificación se desarrolla en el siguiente apartado.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Materiales educativos impresos, audiovisuales, digitales e interactivos
    p.mb-4 Los materiales educativos pueden presentarse en diferentes formatos, según la manera en que organizan y comunican la información, así como las posibilidades de interacción que ofrecen. La selección de uno u otro depende del propósito formativo, las características de los aprendices, las actividades propuestas y los recursos disponibles. En lugar de elegirlos únicamente por su apariencia o novedad, es importante determinar cómo pueden contribuir al desarrollo de los resultados de aprendizaje.
    TabsC.color-acento-botones.mb-4
      .py-3.py-md-4(titulo="Materiales impresos")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t2/img07.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              p.mb-0 Comprenden recursos elaborados principalmente mediante texto e imágenes estáticas, como libros, cartillas, manuales, guías de aprendizaje, folletos y fichas de trabajo. Facilitan la consulta, la lectura detallada, la toma de apuntes y el desarrollo de ejercicios a un ritmo propio. En ambientes virtuales, estos materiales también pueden distribuirse en formatos digitales, como PDF, conservando una estructura similar a la de un documento impreso. Su efectividad depende de la claridad de la información, la organización del contenido y la pertinencia de las actividades que proponen.
      .py-3.py-md-4(titulo="Materiales audiovisuales")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t2/img08.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              p.mb-0 Combinan imágenes, sonido, narración, música o movimiento para comunicar información y explicar conceptos o procedimientos. Entre ellos se encuentran los videos educativos, las animaciones, los documentales, las demostraciones grabadas y los pódcast. Estos recursos pueden facilitar la comprensión de procesos complejos, presentar situaciones del contexto laboral y complementar las explicaciones escritas. Para aprovecharlos pedagógicamente, conviene vincularlos con actividades como preguntas orientadoras, análisis de casos, toma de notas o ejercicios de aplicación, en lugar de utilizarlos únicamente como elementos de observación o escucha.
      .py-3.py-md-4(titulo="Materiales digitales")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t2/img09.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              p.mb-0 Son recursos creados, almacenados o distribuidos mediante dispositivos y plataformas tecnológicas. Incluyen documentos electrónicos, presentaciones digitales, infografías, libros electrónicos, bibliotecas virtuales y objetos virtuales de aprendizaje. Su uso facilita el acceso a la información, la actualización de contenidos y la integración de diferentes formatos en un mismo entorno. Además, pueden incorporarse a los sistemas de gestión del aprendizaje (LMS, por su sigla en inglés), donde se organizan los contenidos y las actividades de acuerdo con la secuencia formativa. Para utilizarlos adecuadamente, es necesario considerar su compatibilidad con los dispositivos, la facilidad de acceso y las condiciones de conectividad de los aprendices.
      .py-3.py-md-4(titulo="Materiales interactivos")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t2/img10.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              p.mb-0 Permiten que el aprendiz actúe sobre el recurso y reciba una respuesta a sus acciones. Algunos ejemplos son los simuladores, los cuestionarios con retroalimentación automática, los ejercicios digitales, los laboratorios virtuales y las actividades de arrastrar y soltar. Estos materiales pueden favorecer la experimentación, la toma de decisiones y la práctica en entornos controlados, especialmente cuando se busca desarrollar habilidades procedimentales. Su diseño debe incluir instrucciones claras, retroalimentación pertinente y actividades relacionadas con los resultados de aprendizaje, de manera que la interacción tenga un propósito pedagógico definido.
    p.mb-4 La siguiente tabla sintetiza las características principales de cada tipo de material educativo, presenta algunos ejemplos y señala sus posibles aplicaciones en el proceso formativo:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Características y posibilidades de uso de los materiales educativos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 15%") Tipo de material
                th(data-aos="fade-down")(style= "width: 25%") Característica principal
                th(data-aos="fade-down")(style= "width: 25%") Ejemplos
                th(data-aos="fade-down")(style= "width: 25%") Posible aplicación formativa
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Impreso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Presenta información escrita y gráfica para consulta y estudio.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guías, cartillas, manuales y fichas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Consultar conceptos, seguir instrucciones y desarrollar ejercicios.
              tr
                td(data-aos="fade-down") Audiovisual
                td(data-aos="fade-down") Integra sonido, imágenes o movimiento.
                td(data-aos="fade-down") Videos, animaciones y pódcast.
                td(data-aos="fade-down") Comprender procesos, analizar situaciones y reconocer procedimientos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Digital
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Distribuye información mediante dispositivos y plataformas tecnológicas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Documentos electrónicos, infografías y libros digitales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Consultar contenidos, organizar información y apoyar el trabajo autónomo.
              tr
                td(data-aos="fade-down") Interactivo
                td(data-aos="fade-down") Permite actuar sobre el recurso y obtener respuestas.
                td(data-aos="fade-down") Simuladores, cuestionarios y laboratorios virtuales.
                td(data-aos="fade-down") Practicar procedimientos, resolver problemas y recibir retroalimentación.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img11.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-2
          p.mb-0(data-aos="fade-down") Es importante tener en cuenta que estas categorías no son excluyentes. Un material puede combinar varios formatos y funciones: por ejemplo, un objeto virtual de aprendizaje puede integrar textos, videos, actividades interactivas y cuestionarios. Por ello, la clasificación debe servir como orientación para seleccionar y combinar recursos, no como una separación rígida entre ellos.
    p.mb-0 En conclusión, el valor de un material educativo depende de su pertinencia para el aprendizaje y de la manera en que se integra a la estrategia pedagógica. El instructor-tutor debe identificar qué necesita aprender el grupo y elegir los recursos que faciliten la comprensión, la práctica y la aplicación de los conocimientos, considerando también la accesibilidad, la disponibilidad tecnológica y las condiciones de uso.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Funcionamiento de los recursos tecnológicos en ambientes de aprendizaje
    p.mb-4 Los recursos tecnológicos facilitan el acceso a los contenidos, la comunicación entre los participantes y el desarrollo de actividades en diferentes ambientes de aprendizaje. En la formación mediada por Tecnologías de la Información y la Comunicación (TIC), estos recursos permiten organizar materiales educativos, orientar el trabajo autónomo, promover la colaboración y realizar actividades de seguimiento y evaluación. Su funcionamiento depende tanto de sus características técnicas como de la manera en que se integran a la estrategia pedagógica.
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Uno de los recursos más utilizados son los sistemas de gestión del aprendizaje (LMS), plataformas que permiten organizar y administrar experiencias formativas en entornos digitales. En ellas, el instructor-tutor puede publicar documentos, incorporar videos, configurar cuestionarios, proponer tareas, habilitar foros y realizar seguimiento al progreso de los aprendices. Por su parte, los aprendices pueden consultar los contenidos, desarrollar las actividades, entregar evidencias y recibir orientaciones o retroalimentación. De esta manera, la plataforma funciona como un espacio que reúne diferentes recursos y facilita la organización del proceso formativo.
    p.mb-4 Los recursos tecnológicos pueden cumplir distintas funciones según las actividades para las que se utilicen:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img13.svg' alt='AvatarTop')
          h4.text-center Presentación de contenidos
          p.text-center Documentos digitales, videos, infografías y presentaciones permiten organizar y comunicar información.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img14.svg' alt='AvatarTop')
          h4.text-center Comunicación e interacción
          p.text-center Foros, chats y videoconferencias facilitan el intercambio de ideas, la resolución de dudas y el acompañamiento pedagógico.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img15.svg' alt='AvatarTop')
          h4.text-center Práctica y experimentación
          p.text-center Simuladores, laboratorios virtuales y aplicaciones especializadas permiten ejercitar procedimientos y explorar situaciones en entornos controlados.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img16.svg' alt='AvatarTop')
          h4.text-center Trabajo colaborativo
          p.text-center Documentos compartidos, <em>wikis</em> y tableros digitales favorecen la construcción conjunta de productos y el intercambio de conocimientos.
        .tarjeta.bg02.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img17.svg' alt='AvatarTop')
          h4.text-center Evaluación y seguimiento
          p.text-center Cuestionarios, formularios y herramientas de gestión de tareas permiten recoger evidencias, ofrecer retroalimentación y reconocer avances en el aprendizaje.
    p Para comprender cómo se integran estos recursos, conviene reconocer que su uso no consiste simplemente en incorporar herramientas digitales a una actividad. Es necesario establecer qué función desempeñan, cómo se utilizarán y qué resultado se espera alcanzar. Por ejemplo, si la actividad busca desarrollar la capacidad de resolver una situación del contexto laboral, el instructor-tutor puede proponer un caso de estudio en la plataforma, facilitar un documento de consulta, organizar un foro de discusión y solicitar una propuesta de solución como evidencia de aprendizaje.
    p.mb-4 La siguiente tabla presenta algunos recursos tecnológicos y sus posibles aplicaciones en los ambientes de aprendizaje:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Recursos tecnológicos y su aplicación en ambientes de aprendizaje
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Recurso tecnológico
                th(data-aos="fade-down")(style= "width: 40%") Funcionamiento
                th(data-aos="fade-down")(style= "width: 40%") Aplicación formativa
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Plataforma LMS
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Organiza contenidos, actividades, entregas y seguimiento.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estructurar el proceso formativo y gestionar las actividades.
              tr
                td(data-aos="fade-down") Foro virtual
                td(data-aos="fade-down") Permite publicar aportes y responder a las intervenciones de otros participantes.
                td(data-aos="fade-down") Debatir, argumentar y compartir conocimientos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Videoconferencia
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Facilita la comunicación sincrónica mediante audio y video.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Orientar sesiones, resolver dudas y realizar demostraciones.
              tr
                td(data-aos="fade-down") Simulador
                td(data-aos="fade-down") Representa situaciones o procesos para experimentar con diferentes acciones.
                td(data-aos="fade-down") Practicar procedimientos y analizar resultados.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Herramienta colaborativa
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite crear y editar contenidos entre varios participantes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Elaborar documentos, proyectos o productos grupales.
              tr
                td(data-aos="fade-down") Cuestionario digital
                td(data-aos="fade-down") Presenta preguntas y registra las respuestas de los participantes.
                td(data-aos="fade-down") Comprobar conocimientos y ofrecer retroalimentación, según su configuración.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img18.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c03.color-primario.px-4.py-3.mb-4
          p.mb-0 La incorporación de estos recursos también requiere considerar las condiciones técnicas y de acceso. La disponibilidad de dispositivos, la conectividad, la compatibilidad de los archivos, la facilidad de navegación y la accesibilidad de los contenidos pueden influir en la participación de los aprendices. Por ello, es conveniente ofrecer instrucciones claras, comprobar el funcionamiento de los recursos y prever alternativas cuando existan dificultades de acceso.
        p.mb-0 En consecuencia, el instructor-tutor debe seleccionar y utilizar los recursos tecnológicos de acuerdo con los resultados de aprendizaje, las características del grupo y las actividades previstas. La tecnología adquiere valor pedagógico cuando facilita una acción concreta de aprendizaje, como comprender un concepto, practicar un procedimiento, colaborar con otros o demostrar una competencia.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Criterios para seleccionar materiales educativos
    p La selección de materiales educativos requiere analizar su pertinencia para los resultados de aprendizaje, las características de los aprendices y las condiciones en las que se desarrolla la formación. No basta con elegir un recurso por su apariencia, popularidad o novedad tecnológica; es necesario determinar si facilita la comprensión de los contenidos, orienta las actividades y contribuye al desarrollo de las competencias. Por ello, el instructor-tutor debe valorar diferentes criterios antes de incorporar un material al proceso formativo.
    p.mb-4 Entre los principales criterios para seleccionar materiales educativos se encuentran los siguientes:
    .tarjeta.tarjeta--bg03.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="a.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Pertinencia pedagógica
            p El material debe contribuir al logro de los resultados de aprendizaje y responder al propósito de la actividad. Su contenido debe guardar relación con los conocimientos, las habilidades y las actitudes que se busca desarrollar.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img19.jpg', alt='')
        .row(titulo="b.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Coherencia metodológica
            p El recurso debe ser compatible con la estrategia de aprendizaje seleccionada. Por ejemplo, una actividad de resolución de problemas puede requerir casos prácticos, documentos de consulta o simuladores que permitan analizar situaciones y proponer soluciones.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img20.jpg', alt='')
        .row(titulo="c.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Claridad y calidad del contenido
            p La información debe estar organizada, redactada con claridad y presentada de acuerdo con el nivel de formación. También es importante verificar la actualidad, la confiabilidad y la pertinencia de las fuentes utilizadas.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img21.jpg', alt='')
        .row(titulo="d.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Adecuación a los aprendices
            p El material debe considerar los conocimientos previos, las necesidades de aprendizaje, las experiencias y las características del grupo. Su lenguaje, nivel de complejidad y forma de presentación deben facilitar la comprensión.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img22.jpg', alt='')
        .row(titulo="e.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Accesibilidad y facilidad de uso
            p Los recursos deben permitir que los aprendices accedan a la información y utilicen sus contenidos sin barreras innecesarias. Conviene considerar la legibilidad de los textos, los subtítulos de los videos, los textos alternativos de las imágenes y la compatibilidad con diferentes dispositivos.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img23.jpg', alt='')
        .row(titulo="f.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Viabilidad técnica
            p Cuando se utilizan recursos digitales, es necesario comprobar que funcionen correctamente y sean compatibles con los dispositivos, las plataformas y las condiciones de conectividad disponibles. También debe valorarse si requieren programas, cuentas o conocimientos técnicos adicionales.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img24.jpg', alt='')
        .row(titulo="g.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Interactividad y participación
            p Según el propósito formativo, puede ser conveniente seleccionar materiales que permitan practicar, tomar decisiones, resolver ejercicios, recibir retroalimentación o colaborar con otros participantes.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img25.jpg', alt='')
        .row(titulo="h.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Disponibilidad y facilidad de acceso
            p Se debe verificar que los materiales puedan consultarse oportunamente, que los enlaces funcionen y que las condiciones de acceso no dificulten el desarrollo de las actividades.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t2/img26.jpg', alt='')
    p.mb-4 La siguiente tabla reúne estos criterios y plantea preguntas orientadoras para facilitar su aplicación durante la planeación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Criterios para la selección de materiales educativos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Criterio
                th(data-aos="fade-down")(style= "width: 70%") Pregunta orientadora
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Pertinencia pedagógica
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿El material contribuye al logro del resultado de aprendizaje?
              tr
                td(data-aos="fade-down") Coherencia metodológica
                td(data-aos="fade-down") ¿Es adecuado para la estrategia y la actividad propuestas?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Calidad del contenido
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿La información es clara, confiable, pertinente y actualizada?
              tr
                td(data-aos="fade-down") Adecuación a los aprendices
                td(data-aos="fade-down") ¿Responde a las características y necesidades del grupo?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Accesibilidad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Puede ser utilizado por los aprendices con diferentes necesidades y condiciones de acceso?
              tr
                td(data-aos="fade-down") Viabilidad técnica
                td(data-aos="fade-down") ¿Funciona correctamente en los dispositivos y plataformas disponibles?
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Interactividad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Ofrece oportunidades de práctica o participación cuando se requieren?
              tr
                td(data-aos="fade-down") Disponibilidad
                td(data-aos="fade-down") ¿Puede consultarse y utilizarse en el momento previsto para la actividad?
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img27.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3 La aplicación de estos criterios permite tomar decisiones fundamentadas y evitar la incorporación de recursos que no aporten al propósito formativo. Por ejemplo, si se busca que los aprendices desarrollen un procedimiento técnico, un video demostrativo puede facilitar la comprensión inicial, mientras que un simulador o una práctica guiada puede favorecer la aplicación de los conocimientos. La elección dependerá de las condiciones de formación y de la evidencia que se espera obtener.
        .row.justify-content-center.align-items-center.mb-4
          .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t2/img28.svg', alt='')
          .col.col-lg-10.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") Asimismo, no siempre es necesario utilizar materiales diferentes para cada actividad. Un mismo recurso puede cumplir varias funciones si se integra de manera adecuada a la estrategia pedagógica. Lo importante es que su uso tenga una finalidad definida y que se articule con las actividades y la evaluación.
        .cajon.cajon.c01.color-secundario.px-4.py-2
          p.mb-0 En síntesis, seleccionar materiales educativos implica tomar decisiones pedagógicas y técnicas orientadas al aprendizaje. El instructor-tutor debe priorizar los recursos que sean pertinentes, claros, accesibles y viables, de modo que contribuyan al desarrollo de las competencias y respondan a las necesidades del proceso formativo.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Materiales para la presentación de contenidos',
        texto:
          'Proporcionan información organizada para facilitar la comprensión de los temas. Incluyen textos, documentos, presentaciones, videos explicativos, infografías y pódcast.',
        imagen: '@/assets/curso/temas/t2/img03.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Materiales para el desarrollo de actividades',
        texto:
          'Orientan la práctica, la aplicación de conocimientos y la construcción activa del aprendizaje. Algunos ejemplos son las guías de trabajo, las plantillas, los simuladores, los foros y las <em>wikis</em>.',
        imagen: '@/assets/curso/temas/t2/img04.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Materiales para la evaluación',
        texto:
          'Permiten recoger evidencias y valorar los aprendizajes alcanzados. Entre ellos se encuentran los cuestionarios, las rúbricas, las listas de verificación, los portafolios y los formularios de autoevaluación y coevaluación.',
        imagen: '@/assets/curso/temas/t2/img05.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass"></style>
