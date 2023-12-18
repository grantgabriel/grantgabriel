# Hello Peeps 🤩🙌

<img src="https://raw.githubusercontent.com/Asmit2952/Asmit2952/master/src/header_.png?token=ATQS65TR7ETTG5RLJUDIDBLBN34HE">

I'm Grant Gabriel Tambunan, an IT Student at University of North Sumatra. 

🌱 I’m currently learning about Web Development, UI/UX, Data Science, Mobile Programming, and a lotta more !<br>
💬 Ask me about anything! Ill be happy to reply ^^<br>
👯 I’m looking to collaborate on any Project, so feel free to reach me !<br>
📫 How to reach me: `grantgabriel30@gmail.com` or connect with me via LinkedIn at `linkedin.com/in/grantgabrieltambunan/`<br>

## Skills 

<p align="left">
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>
<!-- <a href="https://kotlinlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg" width="36" height="36" alt="Kotlin" /></a> -->
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<!-- <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" width="36" height="36" alt="NextJs" /></a> -->
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
<a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="36" height="36" alt="C" /></a>
<a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
<a href="https://www.php.net/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" width="36" height="36" alt="PHP" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://jquery.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="36" height="36" alt="JQuery" /></a>
<a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a>
<!-- <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a> -->
</p>

Here are some of my interests:

- ☁ Cloud Computing
- 🌐 Web Development
- 📱 Mobile Development 
- 📊 Data Science / Analyst
- 👨‍💻 Competitive Programming
- 🎮 Gaming
- 🎵 Music

## My write-a-like

```typescript
import { useCallback, useEffect, useState } from 'react';

interface CurrentSchool {
  institution: string;
  position: string;
}

interface AboutMeState {
  currentSchool: Partial<CurrentSchool>;
  dailyKnowledge: string[];
  fullName: string;
}

interface AboutMeHook {
  aboutMe: AboutMeState;
}

export default function useAboutMe(): AboutMeHook {
  const [aboutMe, setAboutMe] = useState<AboutMeState>({
    currentSchool: {},
    dailyKnowledge: [],
    fullName: ''
  });

  const setFullName = useCallback(() => {
    setAboutMe({
      ...aboutMe,
      fullName: 'Grant Gabriel Tambunan'
    });
  }, [aboutMe]);

  const setCurrentSchool = useCallback(() => {
    setAboutMe({
      ...aboutMe,
      currentSchool: {
        institution: 'University of North Sumatra',
        position: 'Software Engineer (Soon)'
      }
    });
  }, [aboutMe]);

  const setDailyKnowledge = useCallback(() => {
    setAboutMe({
      ...aboutMe,
      dailyKnowledge: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Python',
        'Laravel',
        'Tailwind',
        'Golang',
        'CPP',
        'Next.js',
        'Git',
        'AWS',
        'Gin'
      ]
    });
  }, [aboutMe]);

  useEffect(() => {
    setFullName();
    setDailyKnowledge();
    setCurrentSchool();
  }, [setFullName, setDailyKnowledge, setCurrentSchool]);

  return { aboutMe };
}

```

Thanks for stopping by! ^3^)/ ~

🚀✨👨‍💻👨‍🎨🌌🌊📚🎮🌐🎵
