<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_grad-01
      .row.mb-5.d-flex.align-items-center
        .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/introduccion/1.png", alt="alt")
        .col-lg-8.position-relative.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
          .tarjeta.bgr.p-4
            p Cuando se habla de eventos del pasado, hay diferentes estructuras gramaticales que permiten hablar de diferentes elementos del pasado. En este componente, se trabajará el pasado perfecto, el cual se enfoca en mostrar los eventos del pasado que ocurrieron antes de otro evento del pasado. Durante el componente, se mostrará su estructura y además cuándo no utilizar este recurso del lenguaje. 
            p.mb-0 Este componente, además, incluye el uso del tercer condicional, un elemento gramatical que permite exponer situaciones que, si hubiesen pasado, se habría reaccionado de cierta forma. Otros temas que son importantes para este componente son los verbos modales en pasado.
            img.pst(src="@/assets/curso/introduccion/2.svg", alt="alt")
      
      p.mgb El elemento de vocabulario de este componente se basa en la literatura, el arte y eventos desafortunados. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:
  
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/b5yDXjNfRZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .tarjeta.bgr_1.p-4
          .row.d-flex.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/introduccion/3.svg", alt="alt")
            .col-lg-4.mb-3.mb-lg-0
              p.mb-0.colr Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español. 
            .col-lg-4
              a.anexo(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Guion esp and ingl_Video introductorio

    
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
