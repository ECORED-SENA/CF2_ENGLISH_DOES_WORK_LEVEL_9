<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Perfect tenses</em> (Tiempos perfectos)

    .row
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/1.svg", alt="alt")
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 <em>Past perfect</em> (Pasado perfecto)
    
    .row.mb-5
      .col-lg-3
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/2.png", alt="alt")
      .col-lg-9
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
    
    h4.text-center.mb-5 <em>Regular verbs</em> / Verbos regulares

    .row.mb-5
      .col-lg-6.bg_grad-13
        .row.a.d-flex.align-items-center.p-4
          .col-lg-6
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/3.svg", alt="alt")
          .col-lg-6
            .bgr_10.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 1. <em>General rule</em>  
                p.mb-0 Add “ED” to the verb.
                p.mb-0 Example:
                p.mb-0 Walk → Walked
                p.mb-0 Play → Played
      .col-lg-6.bg_grad-14
        .row.a.d-flex.align-items-center.p-4
          .col-lg-6
            .bgr_10.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 2. <em>Verbs ended in “E”</em>   
                p.mb-0 Add “D” to the verb.
                p.mb-0 Example:
                p.mb-0 Love → Loved
                p.mb-0 Live → Lived
          .col-lg-6
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/4.svg", alt="alt")
    
    .row.mb-5
      .col-lg-6.bg_grad-13
        .row.a.d-flex.align-items-center.p-4
          .col-lg-6
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/5.svg", alt="alt")
          .col-lg-6
            .bgr_10.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 3. <em>Verbs ended in “Y” after a consonant</em>  
                p.mb-0 Change “Y” for “IED” in the verb
                p.mb-0 Example:
                p.mb-0 Study →  Studied
                p.mb-0 Copy →  Copied
      .col-lg-6.bg_grad-14
        .row.a.d-flex.align-items-center.p-4
          .col-lg-7
            .bgr_10.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 4. <em>Consonant doubling</em>    
                p.mb-0 Double the last consonant when:
                p.mb-0 It’s ended cons-vow-cons.
                p.mb-0 K, W, X are not doubled.
                p Only double when the last syllable is stressed.
                p.mb-0 Example:
                p.mb-0 Stop → Stopped
                p.mb-0 Control → Controlled 
          .col-lg-5
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/6.svg", alt="alt")




</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>The perfect tenses refer to those actions that have been already completed. They cover different verb tenses, such as present perfect, past perfect, present perfect continuous, past perfect continuous, future perfect, and future perfect continuous. In this part, we will focus on the past perfect and the past perfect continuous.</em>',
        textoEsp:
          'Los tiempos perfectos se refieren a aquellas acciones que ya se han completado. Abarcan diferentes tiempos verbales, como el presente perfecto, el pasado perfecto, el presente perfecto continuo, el pasado perfecto continuo, el futuro perfecto y el futuro perfecto continuo. En esta parte, nos centraremos en el pasado perfecto y el pasado perfecto continuo.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Past perfect is a grammar tense which is used to talk about actions that occurred before another action in the past. There are different ways of using the past perfect apart from the one just mentioned. One of them is the “indirect speech”; besides, it is an important part of the third conditional because past perfect is the tense used as the condition.<br><br>In order to work with the past perfect, you need to use all the verbs in past participle. Irregular verbs are found in a list, and to turn the regular verbs into the past, you have to use the following rules:</em>',
        textoEsp:
          'El pasado perfecto es un tiempo gramatical que se utiliza para hablar de acciones que ocurrieron antes de otra acción en el pasado. Hay diferentes formas de utilizar el pasado perfecto, aparte de la que acabamos de mencionar. Una de ellas es el "discurso indirecto"; además, es una parte importante del tercer condicional, porque el pretérito perfecto es el tiempo que se utiliza como condición.<br><br>Para trabajar con el pasado perfecto, necesita utilizar todos los verbos en participio pasado. Los verbos irregulares se encuentran en una lista, y para convertir los verbos regulares en pasado, se deben utilizar las siguientes reglas:',
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
