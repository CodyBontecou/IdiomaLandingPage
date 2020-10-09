export default {
  // ****************************** Universal ******************************
  getStarted: 'empezar',
  brand: { name: 'Hello Idioma' },

  // ****************************** Landing Page ******************************
  landingPage: {
    title: 'Programa de Aprendizaje',
    subtitle: 'de Idiomas en línea',
    whyUs: '¿Por qué nosotros?',
    highlights: [
      {
        title: 'aprende',
        content:
          'Con el español siendo el cuarto idioma más hablado en nuestro planeta, es un excelente momento para comenzar su aventura para poder comunicarse con algunas de las culturas más hermosas del mundo.!',
      },
      {
        title: 'habla',
        content:
          'Diseñamos nuestras clases para que nuestros alumnos hablen el idioma. Desde el primer día, estaremos trabajando en la pronunciación, las conjugaciones y más, para que se sienta seguro al tener conversaciones con hablantes nativos.',
      },
      {
        title: 'conecta',
        content:
          'Hello Idioma está diseñado para exponer y enseñar por nuestro diverso equipo de profesionales. Somos flexibles en el tamaño de nuestras clases, adaptándonos a lo que mejor funcione para ustedes.',
      },
    ],
    meta: {
      title: 'Aprende, Habla, y Conecta en un nuevo idioma | Hello Idioma',
      description:
        'Este es el programa de aprendizaje para ti. ' +
        'Aprenda a leer, escribir y hablar en un nuevo idioma con nuestro contenido de calidad que sigue los estándares.' +
        'del Marco Común Europeo de Referencia para las lenguas (MCER).',
    },
  },

  // ****************************** Navigation ******************************
  nav: {
    navOptions: [
      { text: 'inicio', icon: 'mdi-home', localePath: 'index' },
      { text: 'regístrate', icon: 'mdi-play-circle', localePath: 'signup' },
      { text: 'precio', icon: 'mdi-reminder', localePath: 'price' },
    ],
    syllabus: {
      title: 'plan de estudios',
      nav: [
        { name: 'Información', localePath: { name: 'syllabus' } },
        {
          name: 'Básico - A1',
          localePath: { name: 'syllabus-id', params: { id: 'a1' } },
        },
        {
          name: 'Básico - A2',
          localePath: { name: 'syllabus-id', params: { id: 'a2' } },
        },
        {
          name: 'Intermedio - B1',
          localePath: { name: 'syllabus-id', params: { id: 'b1' } },
        },
        {
          name: 'Intermedio - B2',
          localePath: { name: 'syllabus-id', params: { id: 'b2' } },
        },
      ],
    },
    team: {
      title: 'Equipo',
      nav: [
        { name: 'Información', localePath: { name: 'team' } },
        {
          name: 'Daniela Gonzalez',
          localePath: {
            name: 'team-id',
            params: { id: 'daniela-gonzalez' },
          },
        },
        {
          name: 'Maribi Garcia',
          localePath: {
            name: 'team-id',
            params: { id: 'maribi-garcia' },
          },
        },
      ],
    },
  },

  // ****************************** Syllabus Page ******************************
  syllabus: {
    title: 'Método',
    subtitle:
      'Enseñamos varios niveles, comenzando desde A1 - B2 según lo definido por el Marco Común Europeo de Referencia para las Lenguas (MCER). Nuestras clases son interactivas,\n' +
      '                contamos con material extenso compuesto por presentaciones,\n' +
      '                ejercicios, videos y conversaciones. Nos adaptamos al ritmo de\n' +
      '                cada alumno y estamos atentos a la retroalimentación de los\n' +
      '                estudiantes para mejorar los métodos de enseñanza.',
    secondaryTitle: 'Examen de colocación',
    secondarySubtitle:
      'Nuestra primera clase será gratuita y puramente construida de una manera que mida su nivel de habilidad de acuerdo con el MCER. Basándonos en eso, crearemos un curso especialmente para lograr sus objetivos lingüísticos de la manera más efectiva posible.',
    meta: {
      title:
        'Plan de estudios | Programa de Aprendizaje de Idiomas | Hello Idioma',
      description:
        'Recibirás clases atentas y personalizadas siguiendo nuestro programa estructurado por nuestros profesores.' +
        ' todo ello siguiendo el Marco Común Europeo de Referencia para las Lenguas (MCER)' +
        'con el objetivo principal de que se sienta cómodo con sus objetivos de aprendizaje de idiomas.',
    },
  },

  // ****************************** Syllabus/_id Page ******************************
  syllabusId: {
    levels: {
      a1: {
        title: 'A1',
        subtitle:
          'Puede comprender y utilizar expresiones cotidianas familiares y frases muy básicas destinadas a la satisfacción de necesidades de tipo concreto. Puede presentarse a sí mismo y a otros y puede responder preguntas sobre detalles personales como dónde vive, las personas que conoce y las cosas que tiene. Puede interactuar de una manera sencilla siempre que la otra persona hable lenta y claramente y esté dispuesta a ayudar..',
        examples: [
          { text: 'No quiero más.', translation: "I don't want any more." },
          {
            text: '¿Puedes hablar más despacio?',
            translation: 'Can you speak more slowly?',
          },
          {
            text: '¿Estás lista? ¿Estás listo?',
            translation: 'Are you Ready? (Changes if male or female)',
          },
          { text: 'Creo que si.', translation: 'I think so.' },
          { text: '¿Hablas inglés?', translation: 'Do you speak English?' },
        ],
        meta: {
          title:
            'A1 | Marco común europeo de referencia para las lenguas (MCER) | Hello Idioma',
          description: '',
        },
      },
      a2: {
        title: 'A2',
        subtitle:
          'Puede comprender oraciones y expresiones de uso frecuente relacionadas con áreas de relevancia más inmediata (por ejemplo, información personal y familiar muy básica, compras, geografía local, empleo). Puede comunicarse en tareas simples y rutinarias que requieren un intercambio simple y directo de información sobre asuntos familiares y rutinarios. Puede describir en términos simples aspectos de su experiencia, entorno inmediato y asuntos en áreas de necesidad inmediata.',
        examples: [
          { text: 'Te amo.', translation: 'I love you.' },
          {
            text: '¿Dónde podemos quedar?',
            translation: 'Where can we meet?',
          },
          {
            text: 'Primera (Segunda/Tercera/Cuarta) planta.',
            translation: 'First (second/third/fourth) floor.',
          },
          {
            text: '¿Dónde puedo aparcar el coche?',
            translation: 'Where can I park my car?',
          },
          {
            text: '¿Puede decirme a qué se refiere este concepto?',
            translation: 'Could you tell me what this charge is for?',
          },
        ],
        meta: {
          title:
            'A2 | Marco común europeo de referencia para las lenguas (MCER) | Hello Idioma',
          description: '',
        },
      },
      b1: {
        title: 'B1',
        subtitle:
          'Puede comprender los puntos principales de una entrada clara y estándar sobre asuntos familiares que se encuentran con regularidad en el trabajo, la escuela, el ocio, etc. Puede lidiar con la mayoría de situaciones que pueden surgir mientras viaja en un área donde se habla el idioma. Puede producir texto simple conectado sobre temas que le son familiares o de interés personal. Puede describir experiencias y eventos, sueños, esperanzas y ambiciones y dar brevemente razones y explicaciones de opiniones y planes.',
        examples: [
          { text: 'El tiempo es oro', translation: 'Time is money.' },
          {
            text: 'Nos dio unas revistas.',
            translation: 'He gave us some magazines.',
          },
          {
            text: '¿Cuántas veces has estado en Francia?',
            translation: 'How many times have you been to France?',
          },
          {
            text: 'Mi hermano me lleva 2 años.',
            translation: 'My brother is 2 years older than me.',
          },
          {
            text: '¿Para qué lo quieres?',
            translation: 'What do you want it for?',
          },
        ],
        meta: {
          title:
            'B1 | Marco común europeo de referencia para las lenguas (MCER) | Hello Idioma',
          description: '',
        },
      },
      b2: {
        title: 'B2',
        subtitle:
          'Puede comprender las ideas principales de textos complejos sobre temas concretos y abstractos, incluidas las discusiones técnicas en su campo de especialización. Puede interactuar con un grado de fluidez y espontaneidad que hace posible la interacción regular con hablantes nativos sin tensión para ninguna de las partes. Puede producir textos claros y detallados sobre una amplia gama de temas y explicar un punto de vista sobre un tema de actualidad, dando las ventajas y desventajas de varias opciones.',
        examples: [
          { text: 'Un ticket de parking.', translation: 'A parking ticket.' },
          {
            text: '¡No me eches la culpa a mí!',
            translation: "Don't put the blame on me!",
          },
          {
            text: 'Tiene los ojos marrones.',
            translation: 'She has brown eyes.',
          },
          {
            text: 'Mientras me pague, no me importa.',
            translation: "As long as he pays me, I don't mind.",
          },
          {
            text: '¡Qué me dejes en paz!',
            translation: 'Just leave me alone!',
          },
        ],
        meta: {
          title:
            'B2 | Marco común europeo de referencia para las lenguas (MCER) | Hello Idioma',
          description: '',
        },
      },
      c1: {
        title: 'C1',
        subtitle:
          'Puede comprender una amplia gama de textos largos y exigentes y reconocer el significado implícito. Puede expresarse de manera fluida y espontánea sin mucha búsqueda obvia de expresiones. Puede utilizar el idioma de forma flexible y eficaz con fines sociales, académicos y profesionales. Puede producir texto claro, bien estructurado y detallado sobre temas complejos, mostrando un uso controlado de patrones organizativos, conectores y dispositivos de cohesión.',
        examples: [
          {
            text: 'Ver las cosas de color de rosa',
            translation: 'To see things through rose-tinted glasses.',
          },
          {
            text: '¡Ábrete sésamo!',
            translation: 'Open sesame!',
          },
          {
            text: 'Caminaba como si le doliera la pierna.',
            translation: 'He walked like his leg was in pain.',
          },
          {
            text: 'Estuvimos en la plaza hasta que llegaron.',
            translation: 'We were in the plaza until they arrived.',
          },
          {
            text: 'El banco fue robado por los ladrones',
            translation: 'The bank was robbed by the thieves',
          },
        ],
        meta: {
          title:
            'C1 | Marco común europeo de referencia para las lenguas (MCER) | Hello Idioma',
          description: '',
        },
      },
      c2: {
        title: 'C2',
        subtitle:
          'Es capaz de comprender con facilidad prácticamente todo lo que oye o lee. Puede resumir información de diferentes fuentes habladas y escritas, reconstruyendo argumentos y relatos en una presentación coherente. Puede expresarse de forma espontánea, muy fluida y precisa, diferenciando matices más finos de significado incluso en situaciones más complejas.',
        examples: [
          {
            text:
              'Como no encuentres el número de teléfono de María, no podrás ponerte en contacto con ella.',
            translation:
              "Like if you don't find marias phone, you won't be able to get in contact with her.",
          },
          {
            text: 'Hasta hace poco tiempo, nunca había estado en un lugar así.',
            translation: "Until recently, I've never been in a play like this.",
          },
          {
            text: 'No vengas por mí.',
            translation: "Don't come for me.",
          },
          {
            text:
              'Llegué tarde a la entrevista, así que no me dieran el trabajo.',
            translation:
              "I arrived late to the interview, therefore, they didn't give me the job.",
          },
          {
            text:
              'Mi vecina siempre escucha detrás de la puerta, es una chismosa.',
            translation:
              "My neighbor always listens behind the door, she's a gossiper.",
          },
        ],
        meta: {
          title:
            'C2 | Marco común europeo de referencia para las lenguas (MCER)) | Hello Idioma',
          description: '',
        },
      },
    },
  },

  // ****************************** Price page ******************************
  price: {
    title: 'Precios simples y flexibles.',
    subtitle: '',
    discountsTitle: 'Descuentos',
    discountsSubtitle:
      'Se aplicará un descuento a su precio total si paga al menos 4 clases de una hora por adelantado.',
    meta: {
      title: 'Nuestro precio | Precios simples y flexibles | Hello Idioma',
      description: '',
    },
    classes: [
      {
        type: 'Clases Privadas',
        price: '15',
        highlights: [
          {
            icon: 'mdi-notebook',
            text: 'Clases uno a uno.',
          },
          {
            icon: 'mdi-star-circle',
            text: 'Especializado para ti.',
          },
          {
            icon: 'mdi-arrow-down-circle',
            text: 'A tu propio ritmo.',
          },
        ],
      },
      {
        type: 'Clases grupales',
        price: '10',
        highlights: [
          {
            icon: 'mdi-notebook',
            text: '2 - 4 estudiantes.',
          },
          {
            icon: 'mdi-star-circle',
            text: 'Aprende en un ambiente grupal.',
          },
          {
            icon: 'mdi-arrow-down-circle',
            text: 'Conversar y conectar entre sí.',
          },
        ],
      },
    ],
    headers: [
      {
        text: '# de clases',
        align: 'start',
        sortable: false,
        value: 'numClasses',
      },
      { text: 'Precio normal', value: 'normalPrice' },
      { text: 'Descuento', value: 'discount' },
      { text: 'Nuevo precio', value: 'newPrice' },
    ],
    discounts: [
      {
        numClasses: '16 clases o más',
        normalPrice: '$240',
        discount: '20%',
        newPrice: '$192',
      },
      {
        numClasses: '8 clases o más',
        normalPrice: '$120',
        discount: '15%',
        newPrice: '$102',
      },
      {
        numClasses: '4 clases o más',
        normalPrice: '$60',
        discount: '10%',
        newPrice: '$54',
      },
    ],
  },

  // ****************************** Team + Team/_id Page ******************************
  team: {
    who: 'Quién soy',
    title: 'Quiénes somos',
    'title-2': 'un equipo que enseñanza idiomas diferente al resto',
    subtitle:
      '    Somos un grupo de jóvenes emprendedores, inteligentes y estudiosos,\n' +
      '              que buscamos enseñar nuestro idioma de una forma coloquial y amigable\n' +
      '              , siguiendo las reglas gramaticales y proporcionando\n' +
      '              un vocabulario amplio y vasto para un buen entendimiento\n' +
      '              de la lengua.',
    meta: {
      title: 'Nuestro equipo | Coloquial, Amigable y Divertido | Hello Idioma',
      description: '',
    },
    teamMembers: [
      {
        title: 'Daniela Gonzalez',
        subtitle:
          'Soy maestra de español, estudié fotografía y quiero compartir con ustedes un pedazo de mi cultura a través del lenguaje.',
        role: 'Fundadora',
        image: '/daniela.jpg',
        slug: 'daniela-gonzalez',
        localePath: {
          name: 'team-id',
          params: { id: 'daniela-gonzalez' },
        },
        characteristics: {
          idiomas: [
            'Español Nativo Mexicano',
            'Inglés',
            'Francés',
            'Portugués',
          ],
          intereses: [
            'Viajar',
            'Diseño Gráfico',
            'Aprender nuevos idiomas',
            'Conocer gente nueva',
            'Disfrutar de la diversidad cultural',
          ],
          experiencia: [
            'Servicio Social con niños.',
            'Voluntariado en CISV, una organización que tiene como objetivo educar e inspirar la acción para un mundo más justo y pacífico."',
          ],
        },
        meta: {
          title: 'Nuestro Equipo | Daniela Gonzalez | Hello Idioma',
          description: '',
        },
      },
      {
        title: 'Maribi Garcia',
        subtitle:
          'Actualmente soy estudiante universitaria cursando el 7mo semestre de la carrera de Psicología.',
        role: 'Fundadora',
        image: '/maribi.jpg',
        slug: 'maribi-garcia',
        localePath: {
          name: 'team-id',
          params: { id: 'maribi-garcia' },
        },
        characteristics: {
          idiomas: ['Español Nativo Mexicano', 'Inglés'],
          intereses: [
            'Viajar',
            'Conocer gente nueva',
            'Disfrutar de la diversidad cultural',
            'Leer y escribir',
            'Aprender nuevas formas de pensamiento',
          ],
          experiencia: [
            'He realizado servicio social trabajando con niños y adultos mayores',
            'He sido voluntaria en “Techo”, una organización cuyo enfoque principal es el desarrollo social y que busca superar la situación de pobreza que viven millones de personas. ',
            'He impartido talleres para la prevención de violencia a jóvenes estudiantes y proporcionado ayuda psicológica. ',
          ],
        },
        meta: {
          title: 'Nuestro Equipo | Maribi Garcia | Hello Idioma',
          description: '',
        },
      },
    ],
  },

  // ****************************** Signup Page ******************************
  signup: {
    title: 'Regístrate',
    subtitle: '¿Te gustaría agendar una clase de prueba gratis?',
    'subtitle-1':
      '¡Por favor complete el formulario a continuación y nos pondremos en contacto contigo!',
    meta: {
      title: 'Regístrate | Agenda una clase de prueba gratis | Hello Idioma',
      description: '',
    },
    localePath: 'signup/success',
    nameForm: { label: 'Nombre', name: 'name' },
    emailForm: { label: 'E-mail', name: 'email' },
    messageForm: { label: 'Cuentanos sobre tí', name: 'message' },
    submitButton: 'Enviar',
  },

  // ****************************** Signup/Success Page ******************************
  signupSuccess: {
    title: 'Success',
    subtitle:
      '¡Gracias por elegir Hello Idioma! Hemos recibido de manera exitosa su correo electrónico, nos comunicaremos con usted a la brevedad.',
    meta: {
      title: 'Signup Success! | Hello Idioma',
      description: '',
    },
  },
}
