<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprobar la comprensión de los conceptos relacionados con la estructuración del plan de formación, la selección de materiales educativos y recursos tecnológicos, y la planeación didáctica de clases, mediante preguntas que permitan reconocer la relación entre las estrategias metodológicas, las actividades de aprendizaje y la evaluación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de un plan de formación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reunir recursos tecnológicos para todas las sesiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer únicamente la duración de cada clase.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Articular los elementos necesarios para alcanzar los resultados de aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Organizar contenidos sin relacionarlos con la evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Para qué se realiza la caracterización de los aprendices antes de planear?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para reconocer sus conocimientos previos, necesidades y condiciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para asignar una calificación definitiva al grupo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reducir el número de resultados de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para seleccionar siempre herramientas digitales avanzadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Un instructor-tutor necesita que los aprendices practiquen un procedimiento técnico en un entorno controlado. ¿Qué recurso sería especialmente pertinente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un folleto institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un pódcast sobre experiencias laborales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una infografía de conceptos generales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un simulador interactivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una característica de los materiales educativos interactivos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentan exclusivamente información escrita.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten la participación del usuario y ofrecen respuestas a sus acciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se utilizan únicamente en actividades presenciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requieren interacción por parte del aprendiz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué debe definirse principalmente antes de seleccionar los recursos para una clase?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El resultado de aprendizaje que se busca alcanzar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de aplicaciones que se utilizarán.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El diseño gráfico de los materiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La duración de los videos disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es la función principal de la evaluación diagnóstica?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar la calificación final del proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar las demás evaluaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reconocer los conocimientos iniciales y orientar las decisiones pedagógicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Comprobar exclusivamente el manejo de herramientas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué instrumento permite valorar una actividad mediante criterios previamente establecidos y niveles de desempeño?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un foro de discusión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una rúbrica de evaluación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un video introductorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una presentación de contenidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué significa que exista alineación constructiva en una planeación didáctica?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que todos los recursos tengan el mismo formato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que las actividades sean exclusivamente digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que la evaluación se realice solo al terminar el curso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que los resultados de aprendizaje, las actividades y la evaluación mantengan coherencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes aspectos debe considerarse al seleccionar un material educativo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su pertinencia respecto al resultado de aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su popularidad, independientemente de su utilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de páginas o pantallas que contiene.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La complejidad de su diseño visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es el propósito principal del cierre de una clase?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Introducir todos los contenidos por primera vez.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar la cantidad de actividades sin revisar los avances.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Consolidar lo aprendido y reconocer los avances de los aprendices.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir las actividades prácticas por una exposición extensa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué función cumple un sistema de gestión del aprendizaje (LMS)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar automáticamente el aprendizaje de todos los participantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar contenidos, actividades, entregas y seguimiento del proceso formativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la planeación pedagógica del instructor-tutor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el proceso formativo a documentos descargables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Una clase utiliza varias herramientas digitales, pero estas no se relacionan con las actividades ni con el resultado de aprendizaje. ¿Qué debe revisarse?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de dispositivos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño gráfico de cada herramienta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La duración de los recursos audiovisuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La pertinencia pedagógica y la articulación de los recursos con los resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Si el resultado de aprendizaje se relaciona con la elaboración de una propuesta, ¿cuál sería una evidencia pertinente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El horario de la sesión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La lista de herramientas instaladas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un documento que contenga la propuesta elaborada y argumentada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un enlace a un video sin una actividad asociada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cómo debe relacionarse la creatividad del instructor-tutor con los lineamientos institucionales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe orientarse al logro de los resultados y respetar las orientaciones institucionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Debe reemplazar los resultados de aprendizaje establecidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Debe evitar cualquier adaptación metodológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Debe centrarse exclusivamente en incorporar herramientas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué recurso es adecuado para que varios aprendices construyan y editen conjuntamente un documento?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una cartilla impresa de consulta individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un pódcast educativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un video demostrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un documento colaborativo en línea.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe hacer el instructor-tutor cuando la evidencia solicitada no permite comprobar el resultado de aprendizaje?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener la actividad sin modificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar la coherencia entre el resultado, la actividad y la evidencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Añadir recursos tecnológicos sin revisar la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el resultado de aprendizaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el propósito de la apertura en una secuencia didáctica?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar el cierre y las conclusiones de la clase.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Calificar definitivamente el desempeño de los aprendices.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contextualizar la sesión, despertar el interés y orientar el aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desarrollar todas las actividades prácticas previstas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué aspecto permite determinar si un recurso tecnológico puede utilizarse adecuadamente en un ambiente de aprendizaje?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su compatibilidad con los dispositivos y las condiciones de acceso disponibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su popularidad en las redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cantidad de funciones que ofrece, aunque no sean necesarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su complejidad técnica, independientemente del grupo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la finalidad de articular las actividades de aprendizaje con la evaluación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la cantidad de calificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar que los aprendices realicen actividades prácticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar el mismo instrumento para cualquier resultado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Obtener evidencias que permitan valorar el logro de los resultados de aprendizaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
          mensaje_incorrecto:
            'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el principio central de una planeación didáctica coherente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar la mayor cantidad posible de materiales educativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Articular resultados, actividades, estrategias, recursos y evaluación con una intención pedagógica clara.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Concentrar el proceso formativo en exposiciones del instructor-tutor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Seleccionar las herramientas tecnológicas antes de definir los propósitos de aprendizaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión de los conceptos clave para planear procesos formativos y seleccionar recursos educativos pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
