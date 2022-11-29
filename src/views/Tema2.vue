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
      .col-lg-4(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/1.svg", alt="alt")
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 <em>Past perfect</em> (Pasado perfecto)
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/2.png", alt="alt")
      .col-lg-9
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
    
    h4.text-center.mb-3.mb-lg-5 <em>Regular verbs</em> / Verbos regulares

    .row.mb-5
      .col-xl-6.bg_grad-13(data-aos="fade-right")
        .row.d-flex.align-items-center.p-4.justify-content-center
          .col-lg-6
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/3.svg", alt="alt")
          .col-8.col-lg-6
            .bgr_10.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/1.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 1. <em>General rule</em>  
                p.mb-0 Add “ED” to the verb.
                p.mb-0 Example:
                p.mb-0 Walk → Walked
                p.mb-0 Play → Played
      .col-xl-6.bg_grad-14(data-aos="fade-left")
        .row.d-flex.align-items-center.p-4.justify-content-center
          .col-8.col-lg-6.order-2.order-lg-1
            .bgr_10.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/2.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 2. <em>Verbs ended in “E”</em>   
                p.mb-0 Add “D” to the verb.
                p.mb-0 Example:
                p.mb-0 Love → Loved
                p.mb-0 Live → Lived
          .col-lg-6.order-1.order-lg-2
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/4.svg", alt="alt")
    
    .row.mb-5
      .col-xl-6.bg_grad-13(data-aos="fade-left")
        .row.a.d-flex.align-items-center.p-4.justify-content-center
          .col-lg-6
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/5.svg", alt="alt")
          .col-8.col-lg-6
            .bgr_10.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/3.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              div.text-center
                p.colr_2.text-bold 3. <em>Verbs ended in “Y” after a consonant</em>  
                p.mb-0 Change “Y” for “IED” in the verb
                p.mb-0 Example:
                p.mb-0 Study →  Studied
                p.mb-0 Copy →  Copied
      .col-xl-6.bg_grad-14(data-aos="fade-right")
        .row.a.d-flex.align-items-center.p-4.justify-content-center
          .col-md-8.col-lg-6.order-2.order-lg-1
            .bgr_10.p-2
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/4.mp3')"
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
          .col-lg-6.order-1.order-lg-2
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/6.svg", alt="alt")
    
    .bg_grad-15
      .bgr_11.p-4.mb-5
        .row.justify-content-center(data-aos="zoom-out")
          h4.text-center.mb-5 <em>Irregular verbs</em> / Verbos irregulares
          .col-lg-5.mb-3.mb-lg-0
            .row.bgr_10.mb-3
              .col-10.p-3
                p.mb-0 <em>Description: Irregular verbs don’t follow any rule; they all appear in a list: the irregular verb list:</em>
              .col-2.d-flex.align-items-center
                Audio.color-acento-botones.m-auto(
                  :audio="require('@/assets/componentes/audios/tema2/5.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
            .row.mb-3
              .col-lg-5
                p <em>Download Let us now look at the list of more irregular verbs:</em>
              .col-lg-7
                a.anexo.mb-4(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. <em>List of 616 English Irregular Verbs</em>
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/7.png", alt="alt")    
          .col-lg-5
            table
              thead.bgr_12
                tr.text-center
                  th <em>Base Form</em>
                  th <em>Past Simple</em>
                  th <em>Past Participle</em>
              tbody.bgr.text-center
                tr
                  td <em>be</em>
                  td <em>was, were</em>
                  td <em>been</em>
                tr
                  td <em>beat</em>
                  td <em>beat</em>
                  td <em>beaten</em>
                tr
                  td <em>become</em>
                  td <em>became</em>
                  td <em>become</em>
                tr
                  td <em>begin</em>
                  td <em>began</em>
                  td <em>begun</em>
                tr
                  td <em>bend</em>
                  td <em>bent</em>
                  td <em>bent</em>
                tr
                  td <em>bet</em>
                  td <em>bet</em>
                  td <em>bet</em>
                tr
                  td <em>bid</em>
                  td <em>bid</em>
                  td <em>bid</em>
                tr
                  td <em>bite</em>
                  td <em>bit</em>
                  td <em>bitten</em>
                tr
                  td <em>blow</em>
                  td <em>blew</em>
                  td <em>blown</em>
                tr
                  td <em>break</em>
                  td <em>broke</em>
                  td <em>broken</em>

      .row.justify-content-center.mgb(data-aos="zoom-in")
        .col-lg-10
          p.mb-5 <em>Let’s see how to write or say affirmative, negative, and question sentences in past perfect:</em> 
            span / Veamos cómo escribir o decir frases afirmativas, negativas e interrogativas en pasado perfecto:
          .bgr_10.p-4.mb-5
            SlyderA(tipo="b")
              div
                p.text-bold.colr_2 Affirmative sentences
                p.colr_2.mb-5 Now that we reviewed how to put verbs into the past participle, let’s see how to write or say affirmative sentences in the past perfect: 
                  span.colr_1 / Ahora que hemos repasado cómo poner los verbos en el participio pasado, veamos cómo escribir o decir frases afirmativas en el pasado perfecto:
                figure.d-flex.justify-content-center.mb-5
                  img.w-auto(src="@/assets/curso/tema2/8.svg", alt="alt") 
                p.text-center.colr_2.mb-5 <em>Examples. Listen and repeat:</em>
                .row
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-5
                      img.w-auto(src="@/assets/curso/tema2/9.svg", alt="alt")
                  .col-lg-7.d-flex.justify-content-center
                    div 
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo3")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo4")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo5")
              div
                p.text-bold.colr_2 <em>Negative sentences</em>
                TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
                figure.d-flex.justify-content-center.mb-5
                  img.w-auto(src="@/assets/curso/tema2/12.svg", alt="alt") 
                p.text-center.colr_2.mb-5 <em>Examples. Listen and repeat:</em>
                .row
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-5
                      img.w-auto(src="@/assets/curso/tema2/10.svg", alt="alt")
                  .col-lg-7.d-flex.justify-content-center
                    div 
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo7")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo8")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo9")
              div
                p.text-bold.colr_2 <em>Interrogative sentences</em>
                p.colr_2 <em>Questions in past perfect are made in a similar way in which other grammar tenses work. The sentences start with the auxiliary verb in case of a yes/no question, and with an open question they start with a WH word. </em>
                  span.colr_1 / Las preguntas en pasado perfecto se hacen de forma similar a como funcionan otros tiempos gramaticales. Las frases comienzan con el verbo auxiliar en el caso de una pregunta de sí o no, y con una pregunta abierta comienzan con una palabra WH.

                figure.d-flex.justify-content-center.mb-5
                  img.w-auto(src="@/assets/curso/tema2/13.svg", alt="alt") 
                p.text-center.colr_2.mb-5 <em>Examples. Listen and repeat:</em>
                .row
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-5
                      img.w-auto(src="@/assets/curso/tema2/11.svg", alt="alt")
                  .col-lg-7.d-flex.justify-content-center
                    div 
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo10")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo11")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo12")
    
    .row.mb-5
      .col-lg-5
        TraduccionT.color-acento-botones.mb-3(:dialogo="dialogo6")(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.d-none.d-lg-flex.w-auto(src="@/assets/curso/tema2/14.svg", alt="alt")
      .col-lg-7(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/15.svg", alt="alt")
        .bg_grad-05
          .row.justify-content-center
            .col-lg-11
              .bg_grad-06
                TraduccionChat.color-acento-botones(:dialogo="traduccionChat")
    
    p.mb-5.colr_2 <em>After working on the past perfect, it is a good idea to practice it in a conversation. Complete the following dialogue: </em>
      span.colr_1 / Después de trabajar el pasado perfecto, es conveniente practicarlo en una conversación. Complete el siguiente diálogo:
    
    Dialogo.color-primario(:dialogo="dialogo14")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Titulo de actividad - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Past perfect continuous (Pasado perfecto continuo)
    
    .bg_grad-16
      .row
        .col-lg-9
          TraduccionT.color-acento-botones.mb-3(:dialogo="dialogo15")(data-aos="flip-up")
        .col-lg-3(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/18.svg", alt="alt")
      
      .row.justify-content-center.mgb
        .col-lg-8
          .bgr_2.tarjeta.p-4
            div.text-center
              p.text-white.text-bold <em>Rules ING form</em>
              p.text-white.mb-5 Todas las oraciones necesitan usar la forma <em>ING</em> del verbo, así que veamos cómo formarla:
            ImagenInfografica.d-none.d-sm-flex.color-acento-botones.mb-5.justify-content-center
              template(v-slot:imagen)
                figured
                  img(src='@/assets/curso/tema2/19.svg', alt='Texto que describa la imagen')
              .tarjeta.bgr_14.p-3(x="59%" y="7%" numero="+")
                h4 <em>Add ING to the verb.</em>
                p <em>Example:</em> 
                p.mb-0 <em>Call → Calling</em>
                p.mb-0 <em>Buy → Buying</em>
              .tarjeta.bgr_14.p-3(x="86%" y="46%" numero="+")
                h4 <em>Change “E” for “ING”.</em>
                p <em>Example:</em> 
                p.mb-0 <em>Drive → Driving</em>
                p.mb-0 <em>Hide → Hiding</em>
              .tarjeta.bgr_14.p-3(x="59%" y="90%" numero="+")
                h4 <em>Change “IE” for “YING”</em>
                p <em>Example:</em> 
                p.mb-0 <em>Die → Dying</em>
                p.mb-0 <em>Tie → Tying</em>
              .tarjeta.bgr_14.p-3(x="14%" y="46%" numero="+")
                h4 <em>Double the last consonant</em>
                p.mb-0 <em>It’s ended in cons-vow-cons.</em>
                p.mb-0 <em>K, W, X are not doubled.</em>
                p <em>Double only when the last syllable is stressed.</em>
                p <em>Example:</em> 
                p.mb-0 <em>Run → Running</em>
                p.mb-0 <em>Control → Controlling </em>
    
    p.colr_2 <em>After learning how to put the verbs in ING form, it is necessary to understand how to build affirmative, negative, and interrogative sentences, and the way the verbs are put into place: </em>
      span.colr_1 / Después de aprender a poner los verbos en forma ING, es necesario entender cómo se construyen las oraciones afirmativas, negativas e interrogativas y la forma en que se colocan los verbos:
    
    .bg_grad-17
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10
          .bgr_1.tarjeta.p-4.mb-5
            SlyderA(tipo="b")
              div
                p.text-bold.colr <em>Affirmative sentences</em>
                p.text-white.mb-5 <em>How to build affirmative sentences and the way the verbs are put into place:</em> 
                  span / Cómo se construyen las oraciones afirmativas y la forma en que se colocan los verbos:
                figure.d-flex.justify-content-center.mb-5
                  img.w-auto(src="@/assets/curso/tema2/20.svg", alt="alt") 
                .row
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-5
                      img.w-auto(src="@/assets/curso/tema2/23.svg", alt="alt")
                  .col-lg-7.d-flex.justify-content-center
                    div
                      p.text-white <em>Examples. Listen and repeat:</em>
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo16")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo17")
              div
                p.text-bold.colr <em>Negative sentences</em>
                p.text-white.mb-5 <em>Negative sentences are quite similar to the affirmative ones, the only difference is that you have to deny the auxiliary verb. All of the other components remain exactly the same way:</em> 
                  span / Las oraciones negativas son bastante similares a las afirmativas, la única diferencia es que hay que negar el verbo auxiliar. Todos los demás componentes se mantienen exactamente igual:
                figure.d-flex.justify-content-center.mb-5
                  img.w-auto(src="@/assets/curso/tema2/21.svg", alt="alt") 
                .row
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-5
                      img.w-auto(src="@/assets/curso/tema2/23.svg", alt="alt")
                  .col-lg-7.d-flex.justify-content-center
                    div
                      p.text-white <em>Examples. Listen and repeat:</em>
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo18")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo19")
              div
                p.text-bold.colr <em>Interrogative sentences</em>
                p.text-white.mb-5 <em>Now that we have seen the affirmative and negative forms, we will work on the structure of the interrogative sentences, which has no significant changes, we just put the auxiliary verb before the subject.</em> 
                  span / Ahora que hemos visto las formas afirmativa y negativa, trabajaremos la estructura de las oraciones interrogativas, que no tiene cambios significativos, solo ponemos el verbo auxiliar antes del sujeto:
                figure.d-flex.justify-content-center.mb-5
                  img.w-auto(src="@/assets/curso/tema2/22.svg", alt="alt") 
                .row
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-5
                      img.w-auto(src="@/assets/curso/tema2/23.svg", alt="alt")
                  .col-lg-7.d-flex.justify-content-center
                    div
                      p.text-white <em>Examples. Listen and repeat:</em>
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo20")
                      TraduccionAudio.color-acento-botoneso.bgr_13(:dialogo="dialogo21")

      .bg_grad-08
        .row.mgb
          .col-lg-4
            TraduccionT.color-acento-botones.mb-3(:dialogo="dialogo22")(data-aos="flip-up")
          .col-lg-5.mb-3.mb-lg-0
            SlyderE.bgr(indicadores="derecha")
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat1")
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat2")
          .col-lg-3.d-flex.align-items-end
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/24.svg", alt="alt")
    
    p.colr_2 <em>Now, let’s practice this grammar tense by completing the following dialogue with the correct form of the verb. Remember that in past perfect continuous we use the verb in ING form. Only the verb “to be” is conjugated in past participle, as seen in the grammar charts.</em> 
      span.colr_1 Ahora, vamos a practicar este tiempo gramatical completando el siguiente diálogo con la forma correcta del verbo. Recuerde que en el pretérito perfecto continuo utilizamos el verbo en forma ING. Solo el verbo "to be" se conjuga en participio pasado, como se ve en las tablas gramaticales.

    Dialogo.color-primario(:dialogo="dialogo23")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Titulo de actividad - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
                  

 





              



</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionT,
    TraduccionAudio,
    TraduccionChat,
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
    dialogo3: [
      {
        textoIng:
          '<em><b>Maria had bought a new cellphone before her birthday.</b></em>',
        textoEsp:
          'Maria había comprado un celular nuevo antes de su cumpleaños. ',
        audio: require('@/assets/componentes/audios/tema2/6.mp3'),
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em><b>Bruno had finished his homework before the weekend.</b></em>',
        textoEsp: 'Bruno había terminado su tarea antes del fin de semana.',
        audio: require('@/assets/componentes/audios/tema2/7.mp3'),
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em><b>Luisa had called me many times, but I was asleep.</b></em>',
        textoEsp:
          'Luisa me había llamado varias veces, pero yo estaba dormido.',
        audio: require('@/assets/componentes/audios/tema2/8.mp3'),
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>In the following conversation, you will see an interaction in which the past perfect tense is used in a real-life situation, pay attention to the context and practice speaking with a classmate:</em>',
        textoEsp:
          'En la siguiente conversación, verá una interacción en la que se utiliza el pretérito perfecto en una situación de la vida real, preste atención al contexto y practique hablando con un compañero:',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em><b>Maria hadn’t bought a new cellphone before her birthday.</b></em>',
        textoEsp:
          'Maria no había comprado un celular nuevo antes de su cumpleaños.',
        audio: require('@/assets/componentes/audios/tema2/9.mp3'),
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em><b>Bruno hadn’t finished his homework before the weekend.</b></em>',
        textoEsp: 'Bruno no había terminado su tarea antes del fin de semana.',
        audio: require('@/assets/componentes/audios/tema2/10.mp3'),
      },
    ],
    dialogo9: [
      {
        textoIng:
          '<em><b>Luisa hadn’t called me many times, but I was asleep.</b></em>',
        textoEsp:
          'Luisa no me había llamado varias veces, pero yo estaba dormido.',
        audio: require('@/assets/componentes/audios/tema2/11.mp3'),
      },
    ],
    dialogo10: [
      {
        textoIng:
          '<em><b>Had Maria bought a new cellphone before her birthday?</b></em>',
        textoEsp:
          '¿María había comprado un celular nuevo antes de su cumpleaños?',
        audio: require('@/assets/componentes/audios/tema2/12.mp3'),
      },
    ],
    dialogo11: [
      {
        textoIng:
          '<em><b>Had Bruno finished his homework before the weekend?</b></em>',
        textoEsp: '¿Bruno había terminado su tarea antes del fin de semana?',
        audio: require('@/assets/componentes/audios/tema2/13.mp3'),
      },
    ],
    dialogo12: [
      {
        textoIng:
          '<em><b>Had Luisa called me many times, but I was asleep?</b></em>',
        textoEsp:
          '¿Luisa me había llamado varias veces, pero yo estaba dormido?',
        audio: require('@/assets/componentes/audios/tema2/14.mp3'),
      },
    ],
    dialogo13: [
      {
        textoIng:
          '<em>In the following conversation, you will see an interaction in which the past perfect tense is used in a real-life situation, pay attention to the context and practice speaking with a classmate:</em>',
        textoEsp:
          'En la siguiente conversación, verá una interacción en la que se utiliza el pretérito perfecto en una situación de la vida real, preste atención al contexto y practique hablando con un compañero:',
        audio: require('@/assets/componentes/audios/tema2/audio-ej.mp3'),
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Vivi',
        },
        {
          nombre: 'Mario',
        },
      ],
      dialogo: [
        {
          personaje: 'Vivi',
          textoIng: '<em>Had you talked to my mom when I arrived?</em>',
          textoEsp: '¿Habías hablado con mi madre cuando llegué?',
          audio: require('@/assets/componentes/audios/tema2/15.mp3'),
        },
        {
          personaje: 'Mario',
          textoIng:
            '<em>I had tried not to talk to her, but she asked me.</em>',
          textoEsp: 'Había intentado no hablar con ella, pero me lo pidió.',
          audio: require('@/assets/componentes/audios/tema2/16.mp3'),
        },
        {
          personaje: 'Vivi',
          textoIng: '<em>Well, I understand; however, don’t do it again.</em>',
          textoEsp: 'Bueno, lo entiendo; sin embargo, no lo vuelvas a hacer.',
          audio: require('@/assets/componentes/audios/tema2/17.mp3'),
        },
        {
          personaje: 'Mario',
          textoIng:
            '<em>You know I had never done something like that before.</em>',
          textoEsp: 'Sabes que nunca había hecho algo así.',
          audio: require('@/assets/componentes/audios/tema2/18.mp3'),
        },
      ],
    },
    dialogo14: {
      personajes: [
        {
          nombre: 'Bill',
          img: require('@/assets/curso/tema2/16.svg'),
        },
        {
          nombre: 'Andres',
          img: require('@/assets/curso/tema2/17.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Bill',
          textoIng:
            '<em>Had your father *** (fix) the car before your trip?</em>',
          textoEsp: '¿Tu padre había reparado el carro antes de tu viaje?',
          audio: require('@/assets/componentes/audios/tema2/20.mp3'),
          palabra: '<em>fixed</em>',
        },
        {
          personaje: 'Andres',
          textoIng: '<em>Sure! He had already *** (do) it!</em>',
          textoEsp: '¡Por supuesto! ¡Ya lo había hecho!',
          audio: require('@/assets/componentes/audios/tema2/19.mp3'),
          palabra: '<em>done</em>',
        },
        {
          personaje: 'Bill',
          textoIng:
            '<em>Awesome! I had never *** (know) such a good mechanic.</em>',
          textoEsp:
            '¡Impresionante! Nunca había conocido un mecánico tan bueno.',
          audio: require('@/assets/componentes/audios/tema2/22.mp3'),
          palabra: '<em>known</em>',
        },
        {
          personaje: 'Andres',
          textoIng: '<em>I had *** (tell) you before, he is the best!</em>',
          textoEsp: 'Te lo dije antes, ¡él es el mejor!',
          audio: require('@/assets/componentes/audios/tema2/21.mp3'),
          palabra: '<em>told</em>',
        },
      ],
    },
    dialogo15: [
      {
        textoIng:
          '<em>The past perfect continuous is a tense that allows you to talk about events that started in the past, had a duration and finished in the past. This tense can be complemented with other past tenses in order to contrast or finish the activity. All of the sentences need to use the ING form of the verb, so let’s see how to do it:</em>',
        textoEsp:
          'El pasado perfecto continuo es un tiempo verbal que permite hablar de acontecimientos que empezaron en el pasado, tuvieron una duración y terminaron en el pasado. Este tiempo puede complementarse con otros tiempos pasados para contrastar o terminar la actividad. Todas las oraciones necesitan usar la forma <em>ING</em> del verbo, así que veamos cómo formarla:',
      },
    ],
    dialogo16: [
      {
        textoIng: '<em>David had been working on a project since 1987.</em>',
        textoEsp: 'David había estado trabajando en un proyecto desde 1987.',
        audio: require('@/assets/componentes/audios/tema2/23.mp3'),
      },
    ],
    dialogo17: [
      {
        textoIng: '<em>Harry had been doing homework for two hours.</em>',
        textoEsp: 'Harry había estado haciendo su tarea por dos horas.',
        audio: require('@/assets/componentes/audios/tema2/24.mp3'),
      },
    ],
    dialogo18: [
      {
        textoIng: '<em>David hadn’t been working on a project since 1987.</em>',
        textoEsp: 'David no había estado trabajando en un proyecto desde 1987.',
        audio: require('@/assets/componentes/audios/tema2/25.mp3'),
      },
    ],
    dialogo19: [
      {
        textoIng: '<em>Harry hadn’t been doing homework for two hours</em>',
        textoEsp: 'Harry no había estado haciendo su tarea por dos horas.',
        audio: require('@/assets/componentes/audios/tema2/26.mp3'),
      },
    ],
    dialogo20: [
      {
        textoIng: '<em>Had David been working on a project since 1987?</em>',
        textoEsp: '¿David había estado trabajando en un proyecto desde 1987?',
        audio: require('@/assets/componentes/audios/tema2/27.mp3'),
      },
    ],
    dialogo21: [
      {
        textoIng: '<em>Had Harry been doing homework for two hours.</em>',
        textoEsp: '¿Harry había estado haciendo su tarea por dos horas?',
        audio: require('@/assets/componentes/audios/tema2/28.mp3'),
      },
    ],
    dialogo22: [
      {
        textoIng:
          '<em>All of these sentences need to be used in a situation where the context obliges you to talk about a situation that had been happening during a period of time and finished. Let’s see an example:</em>',
        textoEsp:
          'Todas estas frases deben usarse en una situación en la que el contexto te obligue a hablar de una situación que había estado ocurriendo durante un periodo de tiempo y terminó. Veamos un ejemplo:',
      },
    ],
    traduccionChat1: {
      personajes: [
        {
          nombre: 'Camila',
        },
        {
          nombre: 'Bruno ',
        },
      ],
      dialogo: [
        {
          personaje: 'Camila',
          textoIng: '<em>Hey! How have you been?</em>',
          textoEsp: '¡Hola! ¿Cómo has estado?',
          audio: require('@/assets/componentes/audios/tema2/29.mp3'),
        },
        {
          personaje: 'Bruno ',
          textoIng:
            '<em>Hi! I had been working in Scotland, but I came back last week.</em>',
          textoEsp:
            '¡Hola! Había estado trabajando en Escocia, pero volví la semana pasada.',
          audio: require('@/assets/componentes/audios/tema2/30.mp3'),
        },
      ],
    },
    traduccionChat2: {
      personajes: [
        {
          nombre: 'Camila',
        },
        {
          nombre: 'Bruno ',
        },
      ],
      dialogo: [
        {
          personaje: 'Camila',
          textoIng: '<em>Had you been living with your cousin?</em>',
          textoEsp: 'Habías estado viviendo con tu prima?',
          audio: require('@/assets/componentes/audios/tema2/31.mp3'),
        },
        {
          personaje: 'Bruno ',
          textoIng:
            '<em>Well, I had been living with her and then I moved by myself.</em>',
          textoEsp: 'Bueno, estuve viviendo con ella y luego me mudé solo.',
          audio: require('@/assets/componentes/audios/tema2/32.mp3'),
        },
      ],
    },
    dialogo23: {
      personajes: [
        {
          nombre: 'Lola',
          img: require('@/assets/curso/tema2/25.svg'),
        },
        {
          nombre: 'Ricardo',
          img: require('@/assets/curso/tema2/26.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Lola',
          textoIng: '<em>Hi! Had you been *** me last week?</em>',
          textoEsp:
            '¡Hola! ¿Me habías estado enviando mensajes de texto la semana pasada?',
          audio: require('@/assets/componentes/audios/tema2/33.mp3'),
          palabra: '<em>texting</em>',
        },
        {
          personaje: 'Ricardo',
          textoIng:
            '<em>For sure! I had *** sending you text messages and mails, but you never answered.</em>',
          textoEsp:
            '¡Seguro! Te había estado enviando mensajes de texto y correos, pero nunca respondiste.',
          audio: require('@/assets/componentes/audios/tema2/34.mp3'),
          palabra: '<em>been</em>',
        },
        {
          personaje: 'Lola',
          textoIng: '<em>Sorry! I had been *** in the contryside.</em>',
          textoEsp: '¡Perdón! Yo había estado trabajando en el campo.',
          audio: require('@/assets/componentes/audios/tema2/35.mp3'),
          palabra: '<em>working</em>',
        },
        {
          personaje: 'Ricardo',
          textoIng:
            '<em>Oh, now I remember you had been *** me for weeks. Sorry, I forgot.</em>',
          textoEsp:
            'Oh, ahora recuerdo que me lo habías estado diciendo durante semanas. Lo siento, me olvidé.',
          audio: require('@/assets/componentes/audios/tema2/36.mp3'),
          palabra: '<em>telling</em>',
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
