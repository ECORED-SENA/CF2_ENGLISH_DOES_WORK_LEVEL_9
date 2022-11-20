<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Modal verbs in the past</em> (Verbos modales en pasado) 
    
    .row.mb-5
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/1.svg", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    .row.mgb
      .col-lg-9
         AcordionA(tipo="b" clase-tarjeta="bgr_4 tarjeta")
          .row(titulo="Should have").bgr.tarjeta.p-4
            .col-md-8.mb-4.mb-md-0
              span.colr_2 <em>It is used to talk about something that did not happen, but we wish it had happened. Main verbs are always in past participle. </em>
              span.colr_1 / Se utiliza para hablar de algo que no ha sucedido, pero que desearíamos que hubiese sucedido. Los verbos principales siempre están en participio pasado.
              p.mt-3.colr_2 Example. Listen and repeat: 
              TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                texto="<em>I <i>should have</i> drunk more water before leaving home. </em>"
                :audio="require('@/assets/componentes/audios/tema3/1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-md-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/3.png", alt="alt")
          .row(titulo="Could have").bgr.tarjeta.p-4
            .col-md-8.mb-4.mb-md-0
              span.colr_2 <em>It is used to talk about something that was or was not possible in a moment in the past. Main verbs are always in past participle.</em>
              span.colr_1 / Se utiliza para hablar de algo que fue o no fue posible en un momento del pasado. Los verbos principales siempre están en participio pasado.
              p.mt-3.colr_2 Example. Listen and repeat: 
              TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                texto="<em>She <i>could have</i> finished in the morning, but the machine stopped working.</em>"
                :audio="require('@/assets/componentes/audios/tema3/2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-md-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/4.png", alt="alt")
          .row(titulo="Might have").bgr.tarjeta.p-4
            .col-md-8.mb-4.mb-md-0
              span.colr_2 <em>It is used to talk about an action we believe is possible that took place, but we do not know for sure. Main verbs are always in past participle.</em>
              span.colr_1 / Se utiliza para hablar de una acción que creemos que es posible que tuviera lugar, pero no lo sabemos con seguridad. Los verbos principales siempre están en participio pasado.
              p.mt-3.colr_2 Example. Listen and repeat: 
              TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                texto="<em>I <i>might have</i> passed the exam if I had studied more.  </em>"
                :audio="require('@/assets/componentes/audios/tema3/3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-md-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/5.png", alt="alt")
          .row(titulo="Must have").bgr.tarjeta.p-4
            .col-md-8.mb-4.mb-md-0
              span.colr_2 <em>It is used to talk about an action we believe that definitely occurred. Main verbs are always in past participle.</em>
              span.colr_1 / Se utiliza para hablar de una acción que creemos que definitivamente ocurrió. Los verbos principales siempre están en participio pasado.
              p.mt-3.colr_2 Example. Listen and repeat: 
              TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                texto="<em>He <i>must have</i> won his soccer match last night; he looks so happy.</em>"
                :audio="require('@/assets/componentes/audios/tema3/4.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-md-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/6.png", alt="alt")
          .row(titulo="Have to").bgr.tarjeta.p-4
            .col-md-8.mb-4.mb-md-0
              span.colr_2 <em>We use it to talk about obligation, things that are essential to do, or to give guidance about things that are a good idea to do.</em>
              span.colr_1 / Lo utilizamos para hablar de obligación, de cosas que es imprescindible hacer, o para orientar sobre cosas que es buena idea hacer.
              p.mt-3.colr_2 Example. Listen and repeat: 
              TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                texto="<em>My students <i>have to</i> finish their homework in class.  </em>"
                :audio="require('@/assets/componentes/audios/tema3/5.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-md-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/7.png", alt="alt")
      .col-lg-3
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/2.svg", alt="alt")
    
    .bg_grad-09
      .row.position-relative
        img.pst_2(src="@/assets/curso/tema3/9.svg", alt="alt")
        .col-lg-4
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema3/8.png", alt="alt")
        .col-lg-8
          .tabla-a.color-acento-botones.mb-5 
            table
              thead
                tr.text-white
                  th(style='width:70%') Sentence
                  th(style='width:30%') Deduction
              tbody.bgr
                tr
                  td 1.	<em>I</em> 
                    span.bgr_5 _______ _______ _______  
                    span <em>(buy) bread but I didn't know we needed it.</em>
                  td.text-center <em>(past possibility)</em>
                tr
                  td 2.	<em>I</em> 
                    span.bgr_5 _______ _______ _______  
                    span <em>(eat) so much chocolate! I feel sick!</em>
                  td.text-center <em>(past negative advice / regret)</em>
                tr
                  td 3.	<em>I</em> 
                    span.bgr_5 _______ _______ _______  
                    span <em>(start) saving money years ago!</em>
                  td.text-center <em>(past advice / regret)</em>
                tr
                  td 4.	<em>I</em> 
                    span.bgr_5 _______ _______ _______  
                    span <em>(arrive) on time, even if I had left earlier. There were dreadful traffic jams all the way.</em>
                  td.text-center <em>(past negative possibility)</em>
                tr
                  td 5.	<em>I</em> 
                    span.bgr_5 _______ _______ _______  
                    span <em>(come) to see you! I didn't know you were ill.</em>
                  td.text-center <em>(past willingness)</em>
          .row.justify-content-center
            .col-lg-6
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Click to check the correct answers
                i.fas.fa-eye
                .indicador--click(v-if="mostrarIndicador")     
                  
    ModalA(:abrir-modal.sync="modal1")
      .tabla-a.color-acento-botones.mb-5 
        table
          thead
            tr.text-white
              th(style='width:70%') Sentence
              th(style='width:30%') Deduction
          tbody.bgr
            tr
              td 1.	<em>I</em> 
                span.bgr_5 could have bought   
                span <em> bread but I didn't know we needed it.</em>
              td.text-center <em>(past possibility)</em>
            tr
              td 2.	<em>I</em> 
                span.bgr_5 shouldn't have 
                span <em> eaten so much chocolate! I feel sick!</em>
              td.text-center <em>(past negative advice / regret)</em>
            tr
              td 3.	<em>I</em> 
                span.bgr_5 should have 
                span <em> started saving money years ago!</em>
              td.text-center <em>(past advice / regret)</em>
            tr
              td 4.	<em>I</em> 
                span.bgr_5 couldn't have 
                span <em> arrived on time, even if I had left earlier. There were dreadful traffic jams all the way.</em>
              td.text-center <em>(past negative possibility)</em>
            tr
              td 5.	<em>I</em> 
                span.bgr_5 would have 
                span <em> come to see you! I didn't know you were ill.</em>
              td.text-center <em>(past willingness)</em>
    

</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionT,
  },
  data: () => ({
    modal1: false,
    dialogo1: [
      {
        textoIng:
          '<em>Modal verbs are expressions used to talk about certain hypothetical conditions, such as advice, capability, or requests. They are used as auxiliary verbs, so, besides the modal verb, you need to use another verb which will act as your main verb. The thing with modal verbs is that you have to understand which one to use depending on what you want to communicate. In this part, the modal verbs in the past will be studied. Let’s see what each of them is used for:</em>',
        textoEsp:
          'Los verbos modales son expresiones que se utilizan para hablar de ciertas condiciones hipotéticas, como consejos, capacidad o peticiones. Se utilizan como verbos auxiliares, por lo que, además del verbo modal, es necesario utilizar otro verbo que actuará como verbo principal. Lo que ocurre con los verbos modales es que hay que saber cuál utilizar en función de lo que se quiera comunicar. En esta parte, se estudiarán los verbos modales en pasado. Veamos para qué se utiliza cada uno de ellos:',
      },
    ],
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
