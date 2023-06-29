// gitprofile.config.js

const config = {
  github: {
    username: 'SyaddadRaihanPutra', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'syaddadrhnp_',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://syaddad.cu.ma',
    phone: '',
    email: 'syaddadraihanputra@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Vue.js',
    'Python',
    'Flask',
    'Firebase',
    // 'React.js',
    // 'Node.js',
    // 'Nest.js',
    'MySQL',
    // 'PostgreSQL',
    'Git',
    // 'Docker',
    // 'PHPUnit',
    'CSS',
    'Bootstrap',
    // 'Antd',
    'Tailwind',
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: '',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: '',
  //   },
  // ],
  certifications: [
    {
      name: 'Dicoding - Build Deploy Apps Easily and Securely with Google cloud',
      body: '',
      year: '27 Mei 2023',
      link: '',
    },
    {
      name: 'Facebook Asah Digital 2.0 Tahun 2022/2023',
      body: '',
      year: '19 Mei 2023',
      link: '',
    },
    {
      name: 'Dicoding - Belajar Dasar Pemrograman JavaScript',
      body: '',
      year: '5 Mei 2023',
      link: '',
    },
    {
      name: 'Dicoding - Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
      body: '',
      year: '3 Mei 2023',
      link: '',
    },
    {
      name: 'Kelas Online Codepolitan - Menggunakan Framework Bootstrap',
      body: '',
      year: '23 Maret 2023',
      link: '',
    },
    {
      name: 'BAPAREKRAF Developer Day 2023',
      body: '',
      year: '18 Maret 2023',
      link: '',
    },
    {
      name: 'Kelas Online Codepolitan - Mengenal Pemrograman Komputer',
      body: '',
      year: '14 Oktober 2022',
      link: '',
    },
  ],
  education: [
    {
      institution: 'SMK Negeri 1 Jakarta',
      degree: '',
      from: '2022',
      to: 'now',
    },
    {
      institution: 'SMP Negeri 10 Jakarta',
      degree: '',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'SD Negeri 09 Cempaka Baru',
      degree: '',
      from: '2013',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SIJURNAL',
      description:
        'Aplikasi jurnal harian untuk guru dalam kegiatan belajar mengajar. (Fullstack)',
      imageUrl: 'https://syaddad.onweb.im/sijurnal.png',
      link: 'https://sijurnal.smkn1jakarta.sch.id',
    },
    {
      title: 'E-Absensi',
      description:
        'Aplikasi absensi siswa berbasis web. (Front-end)',
      imageUrl: 'https://syaddad.onweb.im/absensi.png',
      link: 'https://absensi.smkn1jakarta.sch.id',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'putrasyaddad', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '1.5rem',
      '--rounded-btn': '1.5rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
