import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "some of the projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'RealEstate Website',
      description: "The Real Estate website enables users to effortlessly search for houses for rent or sale, utilizing customizable filters for tailored listings.",
      tasks: "",
      url: 'https://findmyhome-frontend.vercel.app/',
      img: '/es.png',
      projectSkills: [
        { name: 'ReactJs', icon: 'logos:reactjs' },
        { name: 'NextJS', icon: 'logos:nextjs' },
        { name: 'MongoDB', icon: 'logos:Mon' },
        { name: 'ExpressJS', icon: 'logos:nextjs' },
      ],
    },
    {
      id: getId(),
      name:'Youtube-Clone',
      description: 'A YouTube clone built with React JS, Redux, Tailwind CSS, and a Rapid API.',
      tasks: "",
      url: 'https://youtube-seven-lilac.vercel.app/',
      img: '/yt.png',
      projectSkills: [
        { name: 'ReactJs', icon: 'logos:reactjs' },
        { name: 'Redux', icon: 'logos:Mon' },
        { name: 'NextJS', icon: 'logos:nextjs' },
        { name: 'Rapidapi', icon: 'logos:nextjs' },
        
      ],
    },
    {
      id: getId(),
      name: 'Knee Osteoarthritis Detection',
      description: 'Built a deep learning model to predict knee conditions, providing insights for musculoskeletal assessments.',
      tasks: '',
      url: 'https://github.com/manukarthikv/Knee-Osteoarthritis-Analysis',
      img: '/knee.png',
      projectSkills: [
        { name: 'DeepLearning', icon: 'logos:reactjs' },
        { name: 'streamlit', icon: 'logos:nextjs' },
        { name: 'CNN', icon: 'logos:nextjs' },
      ],
    },
  ],  

};

export default featuredProjectsSection;
