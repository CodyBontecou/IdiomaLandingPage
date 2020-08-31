export default {
  // ****************************** Universal ******************************
  getStarted: 'get started',
  brand: { name: 'Hello Idioma' },

  // ****************************** Landing Page ******************************
  landingPage: {
    title: 'Online Language',
    subtitle: 'Learning Program',
    whyUs: 'why us?',
    highlights: [
      {
        title: 'learn',
        content:
          "With Spanish being the fourth most spoken language on our planet, it's an excellent time to begin your journey in being able to communicate with some of the most beautiful cultures of the world!",
      },
      {
        title: 'speak',
        content:
          "We designed our classes to get you speaking. From day one, we'll have you working on pronunciation, conjugations, and more to get you confident in having conversations alongside native speakers.",
      },
      {
        title: 'connect',
        content:
          'Hello Idioma is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
      },
    ],
    meta: {
      title: 'Apprender, Speak, and Connect in a new language | Hello Idioma',
      description:
        'This is the language learning program for you. ' +
        'Learn how to read, write, and speak in a new language with our quality content that follows alongside the standards ' +
        'of the Common European Framework of Reference for Languages (CEFR).',
    },
  },

  // ****************************** Navigation ******************************
  nav: {
    navOptions: [
      { text: 'home', icon: 'mdi-home', localePath: 'index' },
      { text: 'sign up', icon: 'mdi-play-circle', localePath: 'signup' },
      { text: 'price', icon: 'mdi-reminder', localePath: 'price' },
    ],
    syllabus: {
      title: 'syllabus',
      nav: [
        { name: 'Information', localePath: { name: 'syllabus' } },
        {
          name: 'Basic - A1',
          localePath: { name: 'syllabus-id', params: { id: 'a1' } },
        },
        {
          name: 'Basic - A2',
          localePath: { name: 'syllabus-id', params: { id: 'a2' } },
        },
        {
          name: 'Independent - B1',
          localePath: { name: 'syllabus-id', params: { id: 'b1' } },
        },
        {
          name: 'Independent - B2',
          localePath: { name: 'syllabus-id', params: { id: 'b2' } },
        },
      ],
    },
    team: {
      title: 'team',
      nav: [
        { name: 'Information', localePath: { name: 'team' } },
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
    title: 'Method',
    subtitle:
      'We teach various levels, starting from A1 - B2 as defined by the Common European Framework of Reference for Languages (CEFR). Our classes are interactive,\n' +
      '                we have extensive material consisting of presentations,\n' +
      '                exercises, videos, and conversations. We adapt to the rhythm of\n' +
      '                each student and we are attentive to the feedback of the\n' +
      '                students to improve teaching methods.',
    secondaryTitle: 'Placement exam',
    secondarySubtitle:
      'Our first class will be free, and purely built in a way that gauges your skill level according to the CEFR. Based off of that, we will specially build a course to achieve your language goals in the most effective way possible.',
    meta: {
      title: 'Syllabus | Learning Learning Program | Hello Idioma',
      description:
        'You will receive thoughtful, personalized classes following our structured syllabus from our teachers' +
        ' all while following the Common European Framework of Reference for Language (CEFR) ' +
        'with the primary goal of getting you comfortable with your language learning goals.',
    },
  },

  // ****************************** Syllabus/_id Page ******************************
  syllabusId: {
    levels: {
      a1: {
        title: 'A1',
        subtitle:
          'Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has. Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.',
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
            'A1 | Common European Framework of Reference for Language (CEFR) | Hello Idioma',
          description: '',
        },
      },
      a2: {
        title: 'A2',
        subtitle:
          'Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters.  Can describe in simple terms aspects of his/her background, immediate environment and matters in areas of immediate need.',
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
            'A2 | Common European Framework of Reference for Language (CEFR) | Hello Idioma',
          description: '',
        },
      },
      b1: {
        title: 'B1',
        subtitle:
          'Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Can deal with most situations likely to arise whilst travelling in an area where the language is spoken.  Can produce simple connected text on topics which are familiar or of personal interest. Can describe experiences and events, dreams, hopes & ambitions and briefly give reasons and explanations for opinions and plans.',
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
            'B1 | Common European Framework of Reference for Language (CEFR) | Hello Idioma',
          description: '',
        },
      },
      b2: {
        title: 'B2',
        subtitle:
          'Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in his/her field of specialisation. Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. Can produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.',
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
            'B2 | Common European Framework of Reference for Language (CEFR) | Hello Idioma',
          description: '',
        },
      },
      c1: {
        title: 'C1',
        subtitle:
          'Can understand a wide range of demanding, longer texts, and recognise implicit meaning. Can express him/herself fluently and spontaneously without much obvious searching for expressions. Can use language flexibly and effectively for social, academic and professional purposes. Can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.',
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
            'C1 | Common European Framework of Reference for Language (CEFR) | Hello Idioma',
          description: '',
        },
      },
      c2: {
        title: 'C2',
        subtitle:
          'Can understand with ease virtually everything heard or read. Can summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation. Can express him/herself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in more complex situations.',
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
            'C2 | Common European Framework of Reference for Language (CEFR) | Hello Idioma',
          description: '',
        },
      },
    },
  },

  // ****************************** Price page ******************************
  price: {
    title: 'Simple, flexible pricing.',
    subtitle: '',
    discountsTitle: 'Discounts',
    discountsSubtitle:
      'A discount will be applied to your total invoice if you pay for at least 4 classes in advanced.',
    meta: {
      title: 'Our Price | Simple, Flexible Pricing | Hello Idioma',
      description: '',
    },
    classes: [
      {
        type: 'Private class',
        price: '10',
        highlights: [
          {
            icon: 'mdi-notebook',
            text: 'One on one classes.',
          },
          {
            icon: 'mdi-star-circle',
            text: 'Specialized for you.',
          },
          {
            icon: 'mdi-arrow-down-circle',
            text: 'At your own rhythm.',
          },
        ],
      },
      {
        type: 'Group classes',
        price: '6',
        highlights: [
          {
            icon: 'mdi-notebook',
            text: '2 - 4 students.',
          },
          {
            icon: 'mdi-star-circle',
            text: 'Learn in a group environment.',
          },
          {
            icon: 'mdi-arrow-down-circle',
            text: 'Converse and connect with one another.',
          },
        ],
      },
    ],
    headers: [
      {
        text: '# of classes',
        align: 'start',
        sortable: false,
        value: 'numClasses',
      },
      { text: 'Normal Price', value: 'normalPrice' },
      { text: 'Discount', value: 'discount' },
      { text: 'New Price', value: 'newPrice' },
    ],
    discounts: [
      {
        numClasses: '16 classes or more',
        normalPrice: '$160',
        discount: '20%',
        newPrice: '$128',
      },
      {
        numClasses: '8 classes or more',
        normalPrice: '$80',
        discount: '15%',
        newPrice: '$68',
      },
      {
        numClasses: '4 classes or more',
        normalPrice: '$40',
        discount: '10%',
        newPrice: '$36',
      },
    ],
  },

  // ****************************** Team + Team/_id Page ******************************
  team: {
    who: 'Who I am',
    title: 'Who we are',
    'title-2': "A language learning team that's different from the rest",
    subtitle:
      'We are a couple of entrepreneurs, intelligent, and studious people,\n' +
      '              who seek to teach our language in a more colloquial and friendly\n' +
      '              way, following the correct grammatical structure and providing a\n' +
      '              broad and vast vocabulary for a full understanding of the\n' +
      '              language.',
    meta: {
      title: 'Our Team | Colloquial, Friendly, and Fun | Hello Idioma',
      description: '',
    },
    teamMembers: [
      {
        title: 'Daniela Gonzalez',
        subtitle:
          'I’m a Spanish teacher and photographer and I want to share with you a piece of my language and my culture.',
        role: 'Founder',
        image: '/daniela.jpg',
        slug: 'daniela-gonzalez',
        localePath: {
          name: 'team-id',
          params: { id: 'daniela-gonzalez' },
        },
        characteristics: {
          languages: [
            'Native Mexican Spanish',
            'English',
            'French',
            'Portuguese',
          ],
          hobbies: [
            'Travel',
            'Graphic Design',
            'Learning new languages',
            'Meeting new people',
            'Enjoying new cultures',
          ],
          experience: [
            'Social service with kids.',
            'Volunteering at CISV, which "aims to educate and inspire action for a more just and peaceful world."',
          ],
        },
        meta: {
          title: 'Our Team | Daniela Gonzalez | Hello Idioma',
          description: '',
        },
      },
      {
        title: 'Maribi Garcia',
        subtitle:
          'I am currently a college student in my 7th semester studying Psychology.',
        role: 'Founder',
        image: '/maribi.jpg',
        slug: 'maribi-garcia',
        localePath: {
          name: 'team-id',
          params: { id: 'maribi-garcia' },
        },
        characteristics: {
          languages: ['Native Mexican Spanish', 'English'],
          hobbies: [
            'Travel',
            'Meeting new people',
            'Enjoying new cultures',
            'Reading',
            'Learning new ways of thought',
          ],
          experience: [
            'Social service with kids and elder people',
            'Volunteered at an organization called “Techo” which main focus is social development and overcoming poverty',
            'I have given workshops on non-violence to young students and also provided psychological help',
          ],
        },
        meta: {
          title: 'Our Team | Maribi Garcia | Hello Idioma',
          description: '',
        },
      },
    ],
  },

  // ****************************** Signup Page ******************************
  signup: {
    title: 'Sign up',
    subtitle: 'Want to set up a free demo class?',
    'subtitle-1':
      "Please fill out the form below and we'll be in contact soon!",
    meta: {
      title: 'Signup | Schedule a Free Demo Class | Hello Idioma',
      description: '',
    },
    localePath: 'signup/success',
    nameForm: { label: 'Name', name: 'name' },
    emailForm: { label: 'E-mail', name: 'email' },
    messageForm: { label: 'Tell us about yourself', name: 'message' },
    submitButton: 'Send',
  },

  // ****************************** Signup/Success Page ******************************
  signupSuccess: {
    title: 'Success',
    subtitle:
      'Thank you for taking an interest in Hello Idioma! We have successfully received your email, and will get back to you shortly.',
    meta: {
      title: 'Signup Success! | Hello Idioma',
      description: '',
    },
  },
}
