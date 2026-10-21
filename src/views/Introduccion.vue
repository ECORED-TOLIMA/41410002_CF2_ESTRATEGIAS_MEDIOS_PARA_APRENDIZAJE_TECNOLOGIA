<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 Detrás de cada experiencia de aprendizaje significativa existe una serie de decisiones que permiten orientar el proceso formativo. Definir qué se espera que aprendan los participantes, cómo se desarrollarán las actividades y de qué manera se valorarán los resultados requiere organización, intención pedagógica y conocimiento de las necesidades del grupo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.px-4.py-2.mb-4
          p.mb-0 La planeación permite anticipar estas decisiones y establecer una relación coherente entre las competencias, los resultados de aprendizaje, las estrategias metodológicas y la evaluación. Sin embargo, un plan de formación no se limita a distribuir contenidos o programar actividades. También implica reconocer los saberes previos de los aprendices, identificar sus necesidades y seleccionar experiencias que favorezcan la aplicación de los conocimientos en diferentes contextos.
        p.mb-0(data-aos="fade-down") En este proceso, los materiales educativos y los recursos tecnológicos cumplen una función importante. Las guías, los videos, los simuladores y los recursos digitales pueden facilitar la comprensión, promover la participación y apoyar el desarrollo de las actividades, siempre que su selección responda a un propósito formativo claro.
    p Estas decisiones se concretan en la planeación didáctica de una clase, en la que cada momento, desde la apertura hasta el cierre, debe contribuir al logro de los resultados de aprendizaje. Por ello, planear significa mucho más que organizar una sesión: implica construir una experiencia coherente con las necesidades de los aprendices y los lineamientos institucionales.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") Una formación bien planeada no depende de la cantidad de recursos disponibles, sino de la intención con la que se seleccionan y articulan para favorecer el aprendizaje.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
