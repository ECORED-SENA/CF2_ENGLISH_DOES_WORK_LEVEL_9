<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg_grad-01
      .row.mgb.p-4.d-flex.align-items-center
        .col-xl-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/sintesis/1.png", alt="alt")
        .col-xl-9
          p <em>Up to this point, we have been able to appreciate everything that has to do with the past perfect tense, the third conditional, expressions to talk about literature and art, and the use of modal verbs, which is why we invite you to consider the following conceptual scheme that summarizes the subject treated:</em>
          p.mb-0.colr_1 Hasta aquí hemos podido apreciar todo lo que tiene que ver con el pasado perfecto, el tercer condicional, las expresiones para hablar de literatura y arte, y el uso de los verbos modales, por lo que te invitamos a considerar el siguiente esquema conceptual que resume el tema tratado :


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/2.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
