<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Third conditional: regret</em> (Tercer condicional: arrepentimiento) 
    
    .row.mb-5
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/1.svg", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 <em>Condition</em> (Condición)
    
    .row.mb-5
      .col-lg-9
        TraduccionT.color-acento-botones.mb-3(:dialogo="dialogo2")(data-aos="flip-up")
        .bgr_6.p-4
          .row.mb-3
            .col-lg-2.d-flex.align-items-center
              Audio.color-acento-botones.m-auto(
                :audio="require('@/assets/componentes/audios/tema4/1.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
            .col-lg-10
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema4/3.svg", alt="alt")
          .row
            .col-lg-5
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema4/4.svg", alt="alt")
            .col-lg-7
              p.colr_2 <em>For example, listen and repeat:</em>
              TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                texto="<em>We had hired a new chef when my brother gave me your CV.</em>"
                :audio="require('@/assets/componentes/audios/tema4/2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                texto="<em>Nina had seen the whole series before I started watching it.</em>"
                :audio="require('@/assets/componentes/audios/tema4/3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-lg-3
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/2.svg", alt="alt")

    .row
      .col-lg-2
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/5.svg", alt="alt")
      .col-lg-10
        TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
    
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 <em>Result</em> (Resultado)
    
    .bg_grad-10
      .row.mb-5
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema4/6.svg", alt="alt")
        .col-lg-9
          TraduccionT.color-acento-botones.mb-3(:dialogo="dialogo4")(data-aos="flip-up")
          .bgr_7.p-4
            .row.mb-3
              .col-lg-2.d-flex.align-items-center
                Audio.color-acento-botones.m-auto(
                  :audio="require('@/assets/componentes/audios/tema4/4.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-10
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema4/7.svg", alt="alt")
            .row
              .col-lg-5
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema4/8.svg", alt="alt")
              .col-lg-7
                p.colr_2 <em>For example, listen and repeat:</em>
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em>Laura would have come if I had told her in time.</em>"
                  :audio="require('@/assets/componentes/audios/tema4/5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em>George would have brought his car if he had put gas .</em>"
                  :audio="require('@/assets/componentes/audios/tema4/6.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 <em>Structures</em> (Estructuras)
    
    .bg_grad-11
      .row.mb-5
        .col-lg-9
          TraduccionT.color-acento-botones.mb-3(:dialogo="dialogo5")
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema4/9.svg", alt="alt")
      .row.mb-5
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema4/10.svg", alt="alt")
        .col-lg-9
          .bgr_8.p-4
            span.colr_2 <em>There is another way of writing these sentences, let’s see it.</em>
            span.colr_1 / Hay otra forma de escribir estas oraciones, veámosla.
            .row.mb-3.mt-3
              .col-lg-1.d-flex.align-items-center
                Audio.color-acento-botones.m-auto(
                  :audio="require('@/assets/componentes/audios/tema4/7.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-10
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema4/11.svg", alt="alt")
            p.mb-0.colr_2 <em>“No comma”.</em>

      .row.justify-content-center
        .col-lg-8.position-relative
          .bg_grad-12
            .row.p-4.justify-content-center
              .col-lg-10
                p.text-center.mb-5 <em>Let’s see these structures in a conversation:</em> / Veamos estas estructuras en una conversación: 
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema4/12.svg", alt="alt")
              .row.justify-content-center
                .col-lg-10  
                  .bgr_9.p-4
                    TraduccionChat.color-acento-botones.pst_3(:dialogo="traduccionChat")
          img.pst_4(src="@/assets/curso/tema4/13.svg", alt="alt")
          img.pst_5(src="@/assets/curso/tema4/14.svg", alt="alt")

        

        
    



</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema4',
  components: {
    TraduccionT,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>The third conditional is used to talk about situations of the past that did not occur, but we fantasize about what could have happened. In order to do that, it is necessary to use two elements, as in all the conditionals: for the condition, we need the past perfect, and to show the result, we use the expression “would have” plus the verb in past participle.</em>',
        textoEsp:
          'El tercer condicional se utiliza para hablar de situaciones del pasado que no ocurrieron, pero fantaseamos con lo que podría haber ocurrido. Para ello, es necesario utilizar dos elementos, como en todos los condicionales: para la condición, necesitamos el pasado perfecto, y para mostrar el resultado, utilizamos la expresión "would have" más el verbo en participio pasado.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>The condition is created by using the past perfect, which is a tense that helps you show events that occurred before another event in the past. It is similar to present perfect in structure; however, past perfect uses “HAD” as an auxiliary verb. There isn’t a different auxiliary verb for the third person (he, she, it), all of the pronouns use the same auxiliary verb (HAD). <br><br>Let’s see the general structure in the following chart:</em>',
        textoEsp:
          'La condición se crea utilizando el pasado perfecto, que es un tiempo verbal que ayuda a mostrar eventos que ocurrieron antes de otro evento en el pasado. Su estructura es similar a la del pretérito perfecto; sin embargo, el pretérito perfecto utiliza "HAD" como verbo auxiliar. No hay un verbo auxiliar diferente para la tercera persona (he, she, it), todos los pronombres utilizan el mismo verbo auxiliar (HAD). <br><br>Veamos la estructura general en el siguiente cuadro:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>In the examples, we have two events in the past. Only the first part of the sentence uses past perfect, because that is the event that happened first. Therefore, past perfect allows us to place an event in the past before another event in the past, without using any other type of time markers or expressions.</em>',
        textoEsp:
          'En el ejemplo, tenemos dos acontecimientos en el pasado. Solo la primera parte de la frase utiliza el pretérito perfecto, porque es el acontecimiento que ocurrió primero. Por lo tanto, el pretérito perfecto nos permite colocar un acontecimiento en el pasado antes de otro acontecimiento en el pasado, sin utilizar ningún otro tipo de marcadores de tiempo o expresiones.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>The result in the third conditional is expressed with “would have”, which is just an expression that helps you show something you would have liked to do. There is only one important rule: the verb after “would have” has to be written in the past participle.<br><br>Let’s see the general structure in the following chart:</em>',
        textoEsp:
          'El resultado en el tercer condicional se enuncia con "<em>would have</em>", que es solo una expresión que le ayuda a mostrar algo que le hubiera gustado hacer. Solo hay una regla importante: el verbo que sigue a "would have" tiene que escribirse en participio pasado. <br><br>Veamos la estructura general en el siguiente cuadro:',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>There isn’t a specific way of writing conditional sentences, and the third conditional is not an exception. Both ways, starting with the conditional word or the result, are ok, it only depends on the intention or the emphasis of the sentence.<br><br>Let’s see the general structure in the following chart:</em>',
        textoEsp:
          'No hay una forma específica de escribir oraciones condicionales, y el tercer condicional no es una excepción. Ambas formas, empezando por la palabra condicional o el resultado, son correctas, solo depende de la intención o el énfasis de la oración.<br><br>Veamos la estructura general en el siguiente cuadro:',
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Sara',
        },
        {
          nombre: 'Adrian',
        },
      ],
      dialogo: [
        {
          personaje: 'Sara',
          textoIng: '<em>Hey, Adrian! Are you ok?</em>',
          textoEsp: '¡No puedo creer que me hayan despedido! ¡Es tan injusto!',
          audio: require('@/assets/componentes/audios/tema4/8.mp3'),
        },
        {
          personaje: 'Adrian',
          textoIng:
            '<em>Well, if I hadn’t eaten that last burger, I wouldn’t have got sick.</em>',
          textoEsp: '¿Qué pasó? ¿Perdiste dinero o algo así?',
          audio: require('@/assets/componentes/audios/tema4/9.mp3'),
        },
        {
          personaje: 'Sara',
          textoIng: '<em>Oh, that’s too bad.</em>',
          textoEsp: '¡No puedo creer que me hayan despedido! ¡Es tan injusto!',
          audio: require('@/assets/componentes/audios/tema4/10.mp3'),
        },
        {
          personaje: 'Adrian',
          textoIng:
            '<em>I know, I would have felt better today if I had thought about it.</em>',
          textoEsp: '¿Qué pasó? ¿Perdiste dinero o algo así?',
          audio: require('@/assets/componentes/audios/tema4/11.mp3'),
        },
      ],
    },
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
