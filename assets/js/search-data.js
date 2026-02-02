// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My academic journey",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog-en",
          title: "blog_en",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog_en/index.html";
          },
        },{id: "nav-blog-kr",
          title: "blog_kr",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog_kr/index.html";
          },
        },{id: "nav-drawings",
          title: "drawings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/drawings/index.html";
          },
        },{id: "drawings-ballerina",
          title: 'Ballerina',
          description: "Drawing of Ballerina",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/Ballerina/";
            },},{id: "drawings-billevans",
          title: 'BillEvans',
          description: "Drawing of BillEvans",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/BillEvans/";
            },},{id: "drawings-the-girl",
          title: 'The Girl',
          description: "Drawing of The Girl",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/Girl/";
            },},{id: "drawings-happy",
          title: 'Happy',
          description: "Happy two friends",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/Happy/";
            },},{id: "drawings-howl-39-s-moving-castle",
          title: 'Howl&amp;#39;s Moving Castle',
          description: "Can you imagine?",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/Howls_Moving_Castle/";
            },},{id: "drawings-me",
          title: 'Me',
          description: "Me myself",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/Me/";
            },},{id: "drawings-plaguedoc",
          title: 'PlagueDoc',
          description: "PlagueDoc",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/PlagueDoc/";
            },},{id: "drawings-porco-rosso",
          title: 'Porco Rosso',
          description: "A pig that can&#39;t fly is just an ordinary pig",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/PorcoRosso/";
            },},{id: "drawings-something",
          title: 'Something',
          description: "What is it?",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/Somehting/";
            },},{id: "drawings-the-thing",
          title: 'The Thing',
          description: "Looks familiar",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/TheThing/";
            },},{id: "drawings-tubalcain",
          title: 'Tubalcain',
          description: "Hellsing",
          section: "Drawings",handler: () => {
              window.location.href = "/drawings/Tubalcain/";
            },},{id: "news-joined-sfu",
          title: 'Joined SFU!',
          description: "",
          section: "News",},{id: "news-updated-my-blog",
          title: 'Updated my blog!',
          description: "",
          section: "News",},{id: "posts_en-trivia-human-motion-control-of-quadrupedal-robots-using-deep-reinforcement-learning",
          title: 'Trivia: Human Motion Control of Quadrupedal Robots Using Deep Reinforcement Learning',
          description: "Trivia",
          section: "Posts_en",handler: () => {
              window.location.href = "/blog_en/2025/HumanConQuad/";
            },},{id: "posts_en-sure-we-should-talk-about-animation-quality",
          title: 'Sure, we should talk about animation quality',
          description: "About motion quality",
          section: "Posts_en",handler: () => {
              window.location.href = "/blog_en/2026/MotionQuality/";
            },},{id: "posts_kr-trivia-human-motion-control-of-quadrupedal-robots-using-deep-reinforcement-learning",
          title: 'Trivia: Human Motion Control of Quadrupedal Robots Using Deep Reinforcement Learning',
          description: "논문에는 없는 여담들",
          section: "Posts_kr",handler: () => {
              window.location.href = "/blog_kr/2025/HumanConQuad/";
            },},{id: "posts_kr-sure-we-should-talk-about-animation-quality",
          title: 'Sure, we should talk about animation quality',
          description: "애니메이션 퀄리티에 대하여",
          section: "Posts_kr",handler: () => {
              window.location.href = "/blog_kr/2026/MotionQuality/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6B%61%35%30%33@%73%66%75.%63%61", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sun-woo-kim-6ba202238", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WuNLY8AAAAJ", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/sunwoocv_250919.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
