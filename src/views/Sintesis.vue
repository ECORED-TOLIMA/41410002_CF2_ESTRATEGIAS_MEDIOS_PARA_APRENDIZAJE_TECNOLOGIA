<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente aborda la estructuración del plan de formación a partir de las competencias, los resultados de aprendizaje, las características de los aprendices y la articulación de las actividades con la evaluación. Asimismo, desarrolla la clasificación y selección de materiales educativos, el uso de recursos tecnológicos en ambientes de aprendizaje y su pertinencia pedagógica. Finalmente, integra estos elementos en la planeación didáctica de una clase, considerando la secuencia de apertura, desarrollo y cierre, las estrategias metodológicas, los recursos disponibles y los lineamientos institucionales, con el propósito de orientar experiencias de aprendizaje coherentes y significativas.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta la relación entre el plan de formación, los materiales educativos y la planeación didáctica de una clase, considerando sus elementos, procedimientos, recursos tecnológicos, estrategias metodológicas y evaluación para orientar el logro de los resultados de aprendizaje.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
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
