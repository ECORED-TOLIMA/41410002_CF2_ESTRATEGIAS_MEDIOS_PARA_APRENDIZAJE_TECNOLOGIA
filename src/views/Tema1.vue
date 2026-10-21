<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de formación
    p.mb-4 La planeación de un proceso formativo requiere organizar de manera coherente los aprendizajes esperados, las actividades, las estrategias metodológicas, los materiales educativos y la evaluación. Para ello, el plan de formación constituye una herramienta que orienta las decisiones pedagógicas y permite establecer cómo se desarrollará el proceso para alcanzar los resultados de aprendizaje previstos.
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En el contexto de la formación para el trabajo, estructurar un plan implica partir de las competencias y los resultados de aprendizaje establecidos en el diseño curricular, reconocer las características de los aprendices y determinar las actividades y los recursos que favorecerán el desarrollo de sus capacidades. También requiere definir las evidencias que permitirán valorar los aprendizajes y los instrumentos que se utilizarán para evaluarlas.
        br
        br
        p.mb-0(data-aos="fade-down") La elaboración del plan de formación no consiste únicamente en distribuir contenidos o programar actividades. Su propósito es articular los diferentes elementos del proceso formativo, de manera que cada decisión responda a los resultados de aprendizaje y a las condiciones en las que se desarrolla la formación.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-1.order-2
        .cajon.cajon.c01.color-secundario.p-4.mb-4
          p.mb-0 El plan de formación también debe contemplar las condiciones del entorno y las posibilidades que ofrecen los recursos tecnológicos. La selección de plataformas, materiales digitales y herramientas de apoyo debe responder a los propósitos formativos, facilitar el desarrollo de las actividades y contribuir al aprendizaje, sin perder de vista las características del grupo y los recursos disponibles.
        p.mb-0 De esta manera, el plan de formación se convierte en una guía para orientar el proceso con intención pedagógica, realizar los ajustes necesarios y mantener la coherencia entre lo que se espera aprender, las actividades propuestas y los resultados que se busca alcanzar.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Elementos del plan de formación
    p.mb-4 El plan de formación integra los elementos necesarios para orientar el proceso de enseñanza y aprendizaje de manera organizada y coherente. Su estructura parte de los resultados de aprendizaje esperados y establece las acciones, los recursos y los criterios que permitirán alcanzar y valorar dichos resultados. Por ello, cada elemento debe cumplir una función dentro del proceso y mantener relación con los demás.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") Entre los principales elementos del plan de formación se encuentran los siguientes:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t1/img03.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img04.svg", alt="").img100.m-auto
                  h4.text-center Competencias y resultados de aprendizaje
                  p.text-center Orientan el proceso formativo y establecen las capacidades y los aprendizajes que se espera desarrollar.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img05.svg", alt="").img100.m-auto
                  h4.text-center Saberes asociados
                  p.text-center Comprenden los conocimientos conceptuales, las habilidades procedimentales y las actitudes necesarias para alcanzar los resultados de aprendizaje.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img06.svg", alt="").img100.m-auto
                  h4.text-center Actividades de aprendizaje
                  p.text-center Describen las acciones que desarrollarán los aprendices para comprender, aplicar y fortalecer los saberes.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img07.svg", alt="").img100.m-auto
                  h4.text-center Estrategias metodológicas
                  p.text-center Definen las formas de organizar y orientar las actividades, de acuerdo con los propósitos formativos y las características del grupo.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img08.svg", alt="").img100.m-auto
                  h4.text-center Materiales y recursos educativos
                  p.text-center Incluyen los medios impresos, audiovisuales, digitales e interactivos que apoyan el desarrollo de las actividades.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img09.svg", alt="").img100.m-auto
                  h4.text-center Evaluación del aprendizaje
                  p.text-center Establece los criterios, las evidencias y los instrumentos que permiten valorar los avances y los resultados alcanzados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img10.svg", alt="").img100.m-auto
                  h4.text-center Tiempo y organización del proceso
                  p.text-center Permiten distribuir las actividades y los recursos disponibles de acuerdo con la duración prevista y las condiciones de formación.
    p.mb-4 Estos elementos deben articularse desde la planeación. Por ejemplo, si un resultado de aprendizaje requiere que el aprendiz utilice una herramienta tecnológica para resolver una situación del contexto laboral, las actividades deben permitir su aplicación, los recursos deben facilitar la práctica y la evaluación debe recoger evidencias que demuestren el desempeño esperado.
    .row.justify-content-center.mb-0
      .col-12
        .cajon.cajon.c01.color-secundario.p-4
          p.mb-0 La coherencia entre estos componentes permite que el plan de formación no se limite a una distribución de temas, sino que funcione como una guía para orientar las actividades, seleccionar los recursos y valorar los aprendizajes. La pertinencia del plan depende de que cada elemento contribuya al logro de los resultados de aprendizaje y responda a las condiciones del proceso formativo.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Procedimiento para estructurar un plan de formación
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c02.px-4.py-3.h-100.w-100
          p La estructuración de un plan de formación requiere un proceso organizado de análisis, planificación y toma de decisiones. El punto de partida es el diseño curricular, ya que allí se establecen las competencias, los resultados de aprendizaje y los criterios de evaluación que orientan la formación. A partir de estos referentes, el instructor-tutor define las actividades, selecciona las estrategias metodológicas y los recursos educativos, y determina cómo se recogerán las evidencias del aprendizaje.
          .row.align-items-center.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Este procedimiento debe considerar las características de los aprendices, sus conocimientos previos, las condiciones del entorno y los recursos disponibles. De esta manera, las decisiones de planeación responden tanto a los propósitos formativos como a las necesidades del grupo.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img11.jpg', alt='')
    p.mb-4 La estructuración puede organizarse en seis pasos relacionados entre sí, desde la revisión del diseño curricular hasta la definición de los instrumentos de evaluación, como se presenta a continuación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Pasos para estructurar un plan de formación
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 10%") Paso
                th(data-aos="fade-down")(style= "width: 30%") Acción
                th(data-aos="fade-down")(style= "width: 30%") Pregunta orientadora
                th(data-aos="fade-down")(style= "width: 30%") Producto esperado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 1
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Analizar el diseño curricular
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Cuáles son las competencias, los resultados de aprendizaje y los criterios de evaluación establecidos?
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificación de los resultados de aprendizaje y los criterios de evaluación.
              tr
                td(data-aos="fade-down") 2
                td(data-aos="fade-down") Caracterizar a los aprendices
                td(data-aos="fade-down") ¿Cuáles son sus características, necesidades, expectativas y contexto?
                td(data-aos="fade-down") Descripción del perfil del grupo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 3
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Aplicar la evaluación diagnóstica
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Qué conocimientos previos tienen los aprendices sobre los temas de formación?
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Información sobre los saberes previos y las necesidades de aprendizaje.
              tr
                td(data-aos="fade-down") 4
                td(data-aos="fade-down") Definir las actividades de aprendizaje
                td(data-aos="fade-down") ¿Qué actividades permitirán alcanzar los resultados de aprendizaje?
                td(data-aos="fade-down") Descripción de las actividades y sus propósitos formativos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 5
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Seleccionar estrategias y recursos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Qué estrategias metodológicas y materiales educativos son pertinentes para desarrollar las actividades?
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Selección de estrategias, materiales y recursos, incluidos los tecnológicos cuando corresponda.
              tr
                td(data-aos="fade-down") 6
                td(data-aos="fade-down") Diseñar los instrumentos de evaluación
                td(data-aos="fade-down") ¿Cómo se recogerán y valorarán las evidencias de aprendizaje?
                td(data-aos="fade-down") Instrumentos de evaluación, como rúbricas, listas de verificación o cuestionarios.
    p.mb-4 El procedimiento requiere mantener la coherencia entre cada uno de sus pasos. Los resultados del diagnóstico orientan la selección de las actividades; estas determinan las estrategias y los recursos necesarios, mientras que la evaluación permite establecer si las evidencias obtenidas corresponden a los aprendizajes esperados.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img13.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Por ejemplo, si el resultado de aprendizaje exige que el aprendiz elabore una propuesta para resolver una necesidad del entorno laboral, el plan debe contemplar actividades que favorezcan el análisis y la construcción de soluciones, recursos que apoyen su desarrollo e instrumentos que permitan valorar la propuesta final.
    p.mb-0 De esta manera, la estructuración del plan de formación se convierte en un proceso articulado de toma de decisiones, en el que cada elemento contribuye al logro de los resultados de aprendizaje y responde a las características del grupo y a las condiciones de la formación.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Caracterización de los aprendices y evaluación diagnóstica
    p.mb-4 Antes de estructurar un plan de formación, es importante conocer las características del grupo y los conocimientos que los aprendices han adquirido previamente. Esta información permite tomar decisiones pedagógicas acordes con sus necesidades y con las condiciones en las que se desarrollará el proceso formativo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") La caracterización de los aprendices permite identificar aspectos como:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Conocimientos previos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Saberes relacionados con los temas de formación.
          .row(numero="2" titulo="Experiencias académicas y laborales")
            .col-12.mb-4.mb-md-0
              p.mb-0 Aprendizajes adquiridos en otros espacios.
          .row(numero="3" titulo="Intereses y expectativas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Motivaciones y propósitos frente a la formación.
          .row(numero="4" titulo="Necesidades de aprendizaje")
            .col-12.mb-4.mb-md-0
              p.mb-0 Aspectos que requieren fortalecimiento o acompañamiento.
          .row(numero="5" titulo="Acceso a recursos tecnológicos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Disponibilidad de dispositivos, conexión a Internet y manejo de herramientas digitales.
      .col-lg-4.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img14.jpg', alt='')
    p.mb-4 Por su parte, la evaluación diagnóstica permite reconocer los conocimientos iniciales de los aprendices. No tiene como propósito asignar una calificación, sino obtener información para orientar la planeación. Entre los instrumentos que pueden utilizarse se encuentran:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t1/img15.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Cuestionarios iniciales.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t1/img16.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Preguntas orientadoras.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t1/img17.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Conversaciones exploratorias.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t1/img18.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Ejercicios prácticos.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.c03.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t1/img19.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.c03.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Situaciones relacionadas con el contexto laboral.
    p.mb-0 Los resultados permiten ajustar las actividades, seleccionar estrategias metodológicas, prever apoyos y elegir materiales educativos pertinentes. En consecuencia, conocer al grupo antes de planear favorece una formación más pertinente y coherente con las necesidades de aprendizaje.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Articulación entre competencias, resultados de aprendizaje, actividades y evaluación
    p La planeación de un proceso formativo requiere mantener una relación coherente entre lo que se espera que el aprendiz logre, las actividades que desarrolla y la forma en que se valoran sus aprendizajes. Esta relación permite que cada actividad tenga un propósito claro y contribuya al desarrollo de las competencias previstas.
    p.mb-4 Para establecer esta articulación, es importante diferenciar los siguientes elementos:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t1/img20.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img21.svg", alt="").img100.m-auto
                  h4.text-center Competencia
                  p.text-center Expresa las capacidades que se espera que la persona desarrolle para desempeñarse en un contexto determinado.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img22.svg", alt="").img100.m-auto
                  h4.text-center Resultado de aprendizaje
                  p.text-center Establece lo que el aprendiz debe lograr al finalizar una experiencia formativa.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img23.svg", alt="").img100.m-auto
                  h4.text-center Actividades de aprendizaje
                  p.text-center Son las acciones que permiten desarrollar los conocimientos, las habilidades y las actitudes requeridos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img24.svg", alt="").img100.m-auto
                  h4.text-center Evidencias de aprendizaje
                  p.text-center Son los productos, desempeños o manifestaciones que permiten demostrar los aprendizajes alcanzados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img25.svg", alt="").img100.m-auto
                  h4.text-center Instrumentos de evaluación
                  p.text-center Permiten valorar las evidencias a partir de criterios definidos, como ocurre con las rúbricas y las listas de verificación.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") La siguiente tabla resume cómo se relacionan estos elementos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Articulación de los elementos del proceso formativo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 40%") Pregunta orientadora
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Competencia
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Qué capacidad se busca desarrollar?
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Orientar procesos formativos.
              tr
                td(data-aos="fade-down") Resultado de aprendizaje
                td(data-aos="fade-down") ¿Qué debe lograr el aprendiz?
                td(data-aos="fade-down") Elaborar una planeación didáctica de una clase.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Actividad de aprendizaje
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Qué hará para lograrlo?
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Diseñar una clase con actividades y recursos pertinentes.
              tr
                td(data-aos="fade-down") Evidencia de aprendizaje
                td(data-aos="fade-down") ¿Qué demostrará lo aprendido?
                td(data-aos="fade-down") Documento con la planeación de la clase.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Instrumento de evaluación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ¿Cómo se valorará el resultado?
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Lista de verificación con criterios definidos.
    p.mb-4 La coherencia entre estos elementos se relaciona con la alineación constructiva, principio que plantea que los resultados de aprendizaje, las actividades y la evaluación deben estar articulados.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-7.col-12
        .tarjeta.tarjeta.c01.p-3
          p.text-center.mb-0(data-aos="fade-down") Para comprobar esta relación, el instructor-tutor puede plantearse tres preguntas:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img26.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center ¿Las actividades contribuyen al logro del resultado de aprendizaje?
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img27.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center ¿La evidencia permite demostrar el aprendizaje esperado?
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img28.svg' alt='')
          .tarjeta.c02
            .p-4
              h4.text-center ¿El instrumento de evaluación permite valorar esa evidencia según criterios definidos?
    p.mb-0 Si existe una desconexión entre estos elementos, será necesario revisar el plan de formación. La clave está en garantizar que lo que se propone enseñar, lo que hace el aprendiz y lo que se evalúa respondan al mismo propósito formativo.
</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
