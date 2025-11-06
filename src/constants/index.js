import NewsApp from '../assets/NewsApp.png';
import AIRewriteSummarizeApp from '../assets/AIRewriteSummarizeApp.png';
import CodeEditor from '../assets/CodeEditor.png';
import WorkoutApp from '../assets/WorkoutApp.png';
import MakeUpApp from '../assets/MakeUpApp.png';
import AIApp from '../assets/AIApp.png';

export const projects = [
  {
    id: 1,
    name: 'News App',
    description:
      'News app build with next js retrives real time news from api.',
    imgSrc: NewsApp,
    code: 'https://github.com/rajesh2004-developer/news-api-app',
    preview: 'https://news-api-app-amber.vercel.app/',
  },
  {
    id: 2,
    name: 'AI Rewrite Summarize App',
    description:
      'AI rewrite & summerize app is a app that summerizes or rewrite a given passage using generative AI',
    imgSrc: AIRewriteSummarizeApp,
    code: 'https://github.com/rajesh2004-developer/ai-rewrite-summarize-app',
    preview: 'https://rajesh2004-developer.github.io/ai-rewrite-summarize-app/',
  },
  {
    id: 3,
    name: 'Code Editor',
    description:
      'Code editor is used to execute and run the source code and get output and shows on the site. I supports 20 languages',
    imgSrc: CodeEditor,
    code: 'https://github.com/rajesh2004-developer/code-editor',
    preview: 'https://code-editor-rho.vercel.app/',
  },
  {
    id: 4,
    name: 'Workout App',
    description:
      'Workout app is a next js app which retrives exercise info from api and have features of searching and filtering',
    imgSrc: WorkoutApp,
    code: 'https://github.com/rajesh2004-developer/workout-app',
    preview: 'https://workout-app-beta.vercel.app/',
  },
  {
    id: 5,
    name: 'Makeup App',
    description:
      'Makeup app is a mini ecommerce app using next js i.e, it shows products on the site with multiple categories and filtering and add to cart features also available.',
    imgSrc: MakeUpApp,
    code: 'https://github.com/rajesh2004-developer/Makeup-ecommerce-app',
    preview: 'https://makeup-ecommerce-app.vercel.app/',
  },
  {
    id: 6,
    name: 'AI App',
    imgSrc: AIApp,
    description:
      'AI app is a generative ai chatbot working based on gemini api',
    code: 'https://github.com/rajesh2004-developer/AI_App',
    preview: 'https://rajesh2004-developer.github.io/AI_App/',
  },
];
