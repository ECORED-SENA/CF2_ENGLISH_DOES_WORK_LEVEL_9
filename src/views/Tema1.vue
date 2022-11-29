<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>The author creates a serene atmosphere</em> (El autor crea una atmósfera serena)
      
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/1.png", alt="alt")
      .col-lg-9
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")

    .row.bgr_2.tarjeta.p-5.bg_grad-02.mb-5
      .col-lg-10(data-aos="zoom-in")
        SlyderE.mt-4(indicadores="derecha")
          div
            h4.colr_2 <em>Balance</em>
            span.colr_2 <em>It refers to the arrangement of one or more elements in a work of art so that they appear symmetrical. </em> 
            span.colr_1 / Se refiere a la disposición de uno o más elementos en una obra de arte para que parezcan simétricos.
            p.mt-3.colr_2 <em>Example:</em>
            .row  
              .col-lg-2.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema1/3.svg", alt="alt")
              .col-lg-9
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em>This piece of art represents <i>balance</i> at its purest by showing symmetrical elements.</em>"
                  :audio="require('@/assets/componentes/audios/tema1/1.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p Esta obra de arte representa el equilibrio en estado puro al mostrar elementos simétricos.
          div
            h4.colr_2 <em>Contrast</em>
            span.colr_2 <em>It refers to the use of opposites close or beside one another. </em> 
            span.colr_1 / Se refiere a la utilización de elementos opuestos cercanos o al lado del otro.
            p.mt-3.colr_2 <em>Example:</em>
            .row  
              .col-lg-2.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema1/4.svg", alt="alt")
              .col-lg-9
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em>Thanks to the <i>contrast</i> of the picture, the viewer can focus on the main element.  </em>"
                  :audio="require('@/assets/componentes/audios/tema1/2.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p Gracias al contraste de la imagen, el espectador puede centrarse en el elemento principal.
          div
            h4.colr_2 <em>Focal point</em>
            span.colr_2 <em>It refers to the center of interest of a piece of art, it is the part you want the viewer to focus on. </em> 
            span.colr_1 / Se refiere al centro de interés de una obra de arte, es la parte en la que se quiere que se centre el espectador.
            p.mt-3.colr_2 <em>Example:</em>
            .row  
              .col-lg-2.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema1/5.svg", alt="alt")
              .col-lg-9
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em> The <i>focal point</i> in this photograph was well achieved thanks to the blur. </em>"
                  :audio="require('@/assets/componentes/audios/tema1/3.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p El punto focal de esta fotografía está bien conseguido gracias al desenfoque.
          div
            h4.colr_2 <em>Intensity</em>
            span.colr_2 <em>It has to do with the brightness of a color. </em> 
            span.colr_1 / Tiene que ver con el brillo de un color.
            p.mt-3.colr_2 <em>Example:</em>
            .row  
              .col-lg-2.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema1/6.svg", alt="alt")
              .col-lg-9
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em>The <i>intensity</i> of red in this image remarks the significance of this element.</em>"
                  :audio="require('@/assets/componentes/audios/tema1/4.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p La intensidad del rojo en esta imagen señala la importancia de este elemento.
          div
            h4.colr_2 <em>Asymmetrical</em>
            span.colr_2 <em>It refers to a balance done through the use of imbalanced parts or elements. </em> 
            span.colr_1 / Se refiere a un equilibrio realizado mediante el uso de partes o elementos desequilibrados.
            p.mt-3.colr_2 <em>Example:</em>
            .row  
              .col-lg-2.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema1/7.svg", alt="alt")
              .col-lg-9
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em>Due to the <i>asymmetrical</i> element of the flower, the picture feels odd. </em>"
                  :audio="require('@/assets/componentes/audios/tema1/5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p Debido al elemento asimétrico de la flor, el cuadro resulta extraño.
          div
            h4.colr_2 <em>Texture</em>
            span.colr_2 <em>It refers to the way things feel or look when touched. </em> 
            span.colr_1 / Se refiere a la forma en que las cosas se sienten o se ven cuando se tocan.
            p.mt-3.colr_2 <em>Example:</em>
            .row  
              .col-lg-2.mb-3.mb-lg-0
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema1/8.svg", alt="alt")
              .col-lg-9
                TarjetaAudio.color-acento-contenido.mb-3.colr_3(
                  texto="<em> The image feels rough due to the <i>texture</i> of the color.</em>"
                  :audio="require('@/assets/componentes/audios/tema1/6.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p La imagen se siente áspera debido a la textura del color.  
      .col-lg-2
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/2.svg", alt="alt")
    
    TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 <em>Talking about literature</em> (Hablando de literatura)

    .bg_grad-03
      .row.mb-5
        .col-lg-7
          TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
        .col-lg-5(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/9.png", alt="alt")
    

      SlyderF.mgb(columnas="col-lg-6 col-xl-4")
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/10.svg", alt="alt")
          h3.text-center.colr_2 <em>Genre</em> / Género
          span.text-center.colr_2 <em>It is a type of literary or creative work. </em> 
          span.colr_1 / Es un tipo de obra literaria o creativa.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>My favorite <i>genre</i> is horror; I find it interesting.</em>"
            :audio="require('@/assets/componentes/audios/tema1/7.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p Mi género favorito es el terror; lo encuentro interesante. 
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/11.svg", alt="alt")
          h3.text-center.colr_2 <em>Epic</em> / Epopeya
          span.text-center.colr_2 <em>It is an extended narrative poem about the hero's actions. </em> 
          span.colr_1 / Es un poema narrativo extenso sobre las acciones del héroe.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>The Iliad is an incredible <i>epic</i> poem.</em>"
            :audio="require('@/assets/componentes/audios/tema1/8.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p La Ilíada es un increíble poema épico.
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/12.svg", alt="alt")
          h3.text-center.colr_2 <em>Drama</em> / Drama
          span.text-center.colr_2 <em>It is a piece of literature projected for performance by actors on a stage. </em> 
          span.colr_1 / Es una obra literaria proyectada para ser representada por actores en un escenario.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>I think Hamlet is my favorite <i>drama.</i></em>"
            :audio="require('@/assets/componentes/audios/tema1/9.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p Creo que Hamlet es mi drama favorito. 
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/13.svg", alt="alt")
          h3.text-center.colr_2 <em>Fiction</em> / Ficción
          span.text-center.colr_2 <em>It is a fictitious work based on the imagination. </em> 
          span.colr_1 / Es una obra ficticia basada en la imaginación.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>I don’t like <i>fiction</i> books; they are just boring.</em>"
            :audio="require('@/assets/componentes/audios/tema1/10.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p No me gustan los libros de ficción, son aburridos.
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/14.svg", alt="alt")
          h3.text-center.colr_2 <em>Alliteration</em> / Aliteración
          span.text-center.colr_2 <em>It refers to the use of the same consonant at the beginning of each word in a text. </em> 
          span.colr_1 / Se refiere al uso de la misma consonante al principio de cada palabra en un texto.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>I hate when authors use <i>alliterations</i>, they are difficult to read. </em>"
            :audio="require('@/assets/componentes/audios/tema1/11.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p Odio cuando los autores utilizan aliteraciones, son difíciles de leer.
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/15.svg", alt="alt")
          h3.text-center.colr_2 <em>Novel</em> / Novela
          span.text-center.colr_2 <em>It is an extended fictional work in prose. </em> 
          span.colr_1 / Es una obra de ficción extensa en prosa.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>I don’t have a favorite <i>novel</i>; they all are amazing.</em>"
            :audio="require('@/assets/componentes/audios/tema1/12.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p No tengo una novela favorita, todas son increíbles.
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/16.svg", alt="alt")
          h3.text-center.colr_2 <em>Essay</em> / Ensayo
          span.text-center.colr_2 <em>It is an analytic or explanatory literary composition. </em> 
          span.colr_1 / Es una composición literaria analítica o explicativa.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em> I had to write an <i>essay</i> on the civil war. </em>"
            :audio="require('@/assets/componentes/audios/tema1/13.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p Tuve que escribir un ensayo sobre la guerra civil.
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/17.svg", alt="alt")
          h3.text-center.colr_2 <em>Satire</em> / Sátira
          span.text-center.colr_2 <em>It refers to amusing language used to send insults or disdain. </em> 
          span.colr_1 / Se refiere al lenguaje divertido que se utiliza para enviar insultos o desprecios.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>“Hard times” by Charles D. is an amazing <i>satire.</i> </em>"
            :audio="require('@/assets/componentes/audios/tema1/14.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p "Tiempos difíciles" de Charles D. es una sátira increíble.
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/18.svg", alt="alt")
          h3.text-center.colr_2 <em>Syntax</em> / Sintaxis
          span.text-center.colr_2 <em>It is the study of the rules for creating acceptable sentences. </em> 
          span.colr_1 / Es el estudio de las reglas para crear oraciones aceptables.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>My teacher found many <i>syntax</i> mistakes in my last essay.</em>"
            :audio="require('@/assets/componentes/audios/tema1/15.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p Mi profesor encontró muchos errores de sintaxis en mi última redacción.
        .tarjeta.bgr_3.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema1/19.svg", alt="alt")
          h3.text-center.colr_2 <em>Grammar</em> / Gramática
          span.text-center.colr_2 <em>It is the subdivision of linguistics that deals with sentence structure. </em> 
          span.colr_1 / Es la subdivisión de la lingüística que se ocupa de la estructura de las frases.
          p.text-center.mt-3 <em>Example:</em> / Ejemplo:
          TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
            texto="<em>Learning <i>grammar</i> is difficult, but helps a lot. </em>"
            :audio="require('@/assets/componentes/audios/tema1/16.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p Aprender gramática es difícil, pero ayuda mucho.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/20.png", alt="alt")
      .col-lg-7
        TraduccionT.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
      
    .bg_grad-04
      .row.justify-content-center
        .col-lg-7(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/21.svg", alt="alt")
          .bg_grad-05
            .row.justify-content-center
              .col-lg-11
                .bg_grad-06
                  TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up")
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 <em>Unfortunate events</em> (Eventos desafortunados)
    
    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        TraduccionT.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up")
      .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/22.png", alt="alt")

    .bg_grad-07
      .row.justify-content-center
        .col-lg-12
          SlyderF.mgb(columnas="col-lg-6 col-xl-4")
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/23.png')})`}" style='height: 500px').pst_1
              .tarjeta.bgr.p-3
                h3.text-center.colr_4 <em>Be robbed</em> #[.colr_1 / Ser robado]
                p.text-center.mt-3 <em>Example:</em> / Ejemplo:
                TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
                  texto="<em>I have <i>been robbed</i> twice this week. </em>"
                  :audio="require('@/assets/componentes/audios/tema1/21.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 Me han robado dos veces esta semana.
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/24.png')})`}" style='height: 500px').pst_1
              .tarjeta.bgr.p-4
                h3.text-center.colr_4 <em>Have an accident</em> #[.colr_1 / Tener un accidente]
                p.text-center.mt-3 <em>Example:</em> / Ejemplo:
                TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
                  texto="<em>She had never <i>had an accident</i> before this one.</em>"
                  :audio="require('@/assets/componentes/audios/tema1/22.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 Ella nunca había tenido un accidente antes de este.
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/25.png')})`}" style='height: 500px').pst_1
              .tarjeta.bgr.p-4
                h3.text-center.colr_4 <em>Be rejected</em> #[.colr_1 / Ser rechazado]
                p.text-center.mt-3 <em>Example:</em> / Ejemplo:
                TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
                  texto="<em>Danna had <i>been rejected</i> many times before she entered. </em>"
                  :audio="require('@/assets/componentes/audios/tema1/23.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 Danna había sido rechazada muchas veces antes de entrar.
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/26.png')})`}" style='height: 500px').pst_1
              .tarjeta.bgr.p-4
                h3.text-center.colr_4 <em>Lose money</em> #[.colr_1 / Perder dinero]
                p.text-center.mt-3 <em>Example:</em> / Ejemplo:
                TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
                  texto="<em>Harold has lost a <i>lot of money</i> due to gambling.</em>"
                  :audio="require('@/assets/componentes/audios/tema1/24.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 Harold ha perdido mucho dinero debido a las apuestas.
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/27.png')})`}" style='height: 500px').pst_1
              .tarjeta.bgr.p-4
                h3.text-center.colr_4 <em>Be fired</em> #[.colr_1 / Ser despedido]
                p.text-center.mt-3 <em>Example:</em> / Ejemplo:
                TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
                  texto="<em> Wilson had never <i>been fired.</i></em>"
                  :audio="require('@/assets/componentes/audios/tema1/25.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 Wilson nunca había sido despedido.
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/28.png')})`}" style='height: 500px').pst_1
              .tarjeta.bgr.p-4
                h3.text-center.colr_4 <em>A flood</em> #[.colr_1 / Una inundación]
                p.text-center.mt-3 <em>Example:</em> / Ejemplo:
                TarjetaAudio.color-acento-contenido.mb-3.colr_3.bgr(
                  texto="<em> My town has <i>had 3 floods</i> this winter.</em>"
                  :audio="require('@/assets/componentes/audios/tema1/26.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 Mi ciudad ha tenido 3 inundaciones este invierno.
      
      .bg_grad-08
        .row
          .col-lg-4.order-2.order-lg-1
            TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
          .col-lg-3.d-flex.align-items-end.order-1.order-lg-2.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/29.svg", alt="alt")
          .col-lg-5.order-3.order-lg-3(data-aos="zoom-in")
            SlyderE.bgr(indicadores="derecha")
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat1")
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat2")

            



</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionT,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>There are different expressions that allow you to talk about literature and unfortunate events. However, it is not about having a lot of vocabulary or expressions. The idea in this component is to show the most useful expressions and words in order to express your opinion on literature, art, culture, customs, and unfortunate events.<br><br>Art, in general, is a difficult topic to talk about because of several reasons. There are those who think that art is just a subjective projection of who they are and some others who believe in beauty standards and a structure of what art is. Anyway, when referring to this topic, it is important to know some vocabulary in order to express those opinions or ideas towards a piece of art.  Let’s see some vocabulary that will help us talk about it:</em>',
        textoEsp:
          'Existen diferentes expresiones que permiten hablar de literatura y de sucesos desafortunados. Sin embargo, no se trata de tener mucho vocabulario o expresiones. La idea en este componente es mostrar las expresiones y palabras más útiles para expresar su opinión sobre la literatura, el arte, la cultura, las costumbres y los acontecimientos desafortunados. <br><br>El arte, en general, es un tema difícil de tratar por varias razones. Hay quienes piensan que el arte es solo una proyección subjetiva de lo que son y otros que creen en los estándares de belleza y en una estructura de lo que es el arte. En cualquier caso, cuando se habla de este tema, es importante conocer cierto vocabulario para expresar esas opiniones o ideas hacia una obra de arte. Veamos un vocabulario que nos va a ayudar a hablar del tema:',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>After seeing general vocabulary on art, it is also important to focus on some very specific vocabulary that will allow you to have a conversation using an elevated language and precise ideas. In this part of the component, we are going to focus on literature and, to change the topic a little bit, we will work on unfortunate events.</em>',
        textoEsp:
          'Después de ver el vocabulario general sobre el arte, también es importante centrarse en un vocabulario muy específico, el cual le permitirá mantener una conversación utilizando un lenguaje elevado e ideas precisas. En esta parte del componente, vamos a centrarnos en la literatura y, para cambiar un poco el tema, trabajaremos sobre acontecimientos desafortunados.',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>In order to talk about literature, it is important to learn not only words, but how these words are used in a context. Knowing these words will allow us to explain ourselves when referring to any kind of literary pieces as well as the specific words to denote a type of document, element of the narration or genre we would like to talk about. Let’s see some vocabulary:</em>',
        textoEsp:
          'Para hablar de literatura, es importante aprender no solo las palabras, sino cómo se utilizan estas palabras en un contexto. Conocer estas palabras nos permitirá explicarnos a la hora de referirnos a cualquier tipo de piezas literarias, así como las palabras específicas para denotar un tipo de documento, elemento de la narración o género del que queramos hablar. Conozcamos algo de vocabulario:',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>Another important part when having conversations is to be able to talk about life events. It means not to focus only on stories you read in a book or the interpretation of a work of art, but the ability to share moments of your own life, even the bad ones, therefore, we will also study vocabulary related to these types of events. Let’s see these words used in a real context. Listen, read, and try to practice with a partner:</em>',
        textoEsp:
          'Otra parte importante a la hora de mantener conversaciones es ser capaz de hablar de los acontecimientos de la vida. Se trata de no centrarse solo en las historias que se leen en un libro o en la interpretación de una obra de arte, sino en la capacidad de compartir momentos de la propia vida, incluso los malos, por lo que también estudiaremos el vocabulario relacionado con este tipo de acontecimientos. Veamos estas palabras usadas en un contexto real. Escuche, lea y trate de practicar con un compañero:',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>In life, not only beautiful and remarkable moments are told during a conversation. Life also has difficult moments that are worth sharing. Some of them are just to inform other people, but some others will allow others not to make those same mistakes and that conversation will be valuable for the participants. Let’s see some unfortunate events that can be part of a constructive conversation:</em>',
        textoEsp:
          'En la vida, no solo se cuentan momentos bonitos y notables durante una conversación, también tiene momentos difíciles que vale la pena compartir. Algunos de ellos solo son para informar a otras personas, pero algunos permitirán que otros no cometan esos mismos errores y que la conversación sea valiosa para los participantes. Veamos algunos acontecimientos desafortunados que pueden formar parte de una conversación constructiva:',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>It is important to see how this vocabulary is used in a real situation and the way it works in a context where it is necessary; in this specific case, unfortunate events. Listen, read, and try to practice with a partner:</em>',
        textoEsp:
          'Es importante ver cómo se utiliza este vocabulario en una situación real y cómo funciona en un contexto en el que es necesario; en este caso concreto, los sucesos desafortunados. Escuche, lea y trate de practicar con un compañero:',
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Jane',
        },
        {
          nombre: 'Diana',
        },
      ],
      dialogo: [
        {
          personaje: 'Jane',
          textoIng: '<em>Hey, Diana! Are you writing your essay?</em>',
          textoEsp: '¡Hola, Diana! ¿Estás escribiendo tu ensayo?',
          audio: require('@/assets/componentes/audios/tema1/17.mp3'),
        },
        {
          personaje: 'Diana',
          textoIng: '<em>Yes, but it looks like a novel.</em>',
          textoEsp: 'Sí, pero parece una novela.',
          audio: require('@/assets/componentes/audios/tema1/18.mp3'),
        },
        {
          personaje: 'Jane',
          textoIng:
            '<em>No way! Remember it is an explanatory text, not a drama.</em>',
          textoEsp:
            '¡Por supuesto que no! Recuerda que es un texto explicativo, no un drama.',
          audio: require('@/assets/componentes/audios/tema1/19.mp3'),
        },
        {
          personaje: 'Diana',
          textoIng: '<em>I know! I have to start over.</em>',
          textoEsp: '¡Ya lo sé! Tengo que empezar de nuevo.',
          audio: require('@/assets/componentes/audios/tema1/20.mp3'),
        },
      ],
    },
    traduccionChat1: {
      personajes: [
        {
          nombre: 'Luis',
        },
        {
          nombre: 'Naty',
        },
      ],
      dialogo: [
        {
          personaje: 'Luis',
          textoIng: '<em>I can’t believe I was fired! It’s so unfair! </em>',
          textoEsp: '¡No puedo creer que me hayan despedido! ¡Es tan injusto!',
          audio: require('@/assets/componentes/audios/tema1/27.mp3'),
        },
        {
          personaje: 'Naty',
          textoIng: '<em>What happened? Did you lose money or something?</em>',
          textoEsp: '¿Qué pasó? ¿Perdiste dinero o algo así?',
          audio: require('@/assets/componentes/audios/tema1/28.mp3'),
        },
      ],
    },
    traduccionChat2: {
      personajes: [
        {
          nombre: 'Luis',
        },
        {
          nombre: 'Naty',
        },
      ],
      dialogo: [
        {
          personaje: 'Luis',
          textoIng:
            '<em>Of course not! We were robbed and they blamed on me!</em>',
          textoEsp: '¡Claro que no! ¡Nos robaron y me echaron la culpa a mí!',
          audio: require('@/assets/componentes/audios/tema1/29.mp3'),
        },
        {
          personaje: 'Naty',
          textoIng: '<em>That’s horrible!</em>',
          textoEsp: '¡Eso es horrible!',
          audio: require('@/assets/componentes/audios/tema1/30.mp3'),
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
