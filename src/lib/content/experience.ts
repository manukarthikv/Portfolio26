import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'Technofly Solutions',
      companyUrl: 'https://www.linkedin.com/company/techno-fly/',
      role: 'Data Science Intern',
      started: 'Sept 2023',
      upto: ' Oct 2023',
      tasks: [
        "Developed a speech recognition project using Python.",
    "Applied NLP techniques to improve AI-based data recognition tools, increasing accuracy by 15%.",
    "Collaborated with cross-functional teams to integrate machine learning models into existing applications."
      ],
    },
    
    {
      company: 'TechCiti Software Consulting Private Limited',
      companyUrl: 'https://www.linkedin.com/company/techciti-software-consulting-private-limited/',
      role: 'Web Development Intern',
      started: 'Jun 2023',
      upto: 'Aug 2023',
      tasks: [
        "Developed features for the 'MERN Estate Website' by conducting market research and competitor analysis.",
    "Enhanced website usability, improving user engagement through data-driven solutions.",
    "Implemented responsive designs for optimal performance across devices."
      ],
    },
  ],
};
