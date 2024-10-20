import { AboutSectionType} from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  paragraphs: [
    `Hi, I'm Manu Karthik, a Computer Science graduate from the Global Academy of Technology, Bengaluru, with a CGPA of 8.96. With hands-on experience in web development and machine learning, I'm passionate about tackling challenges and creating innovative solutions.

I’m skilled in HTML, CSS, JavaScript, Java, and Python, and proficient in frameworks like React, Node.js, Express.js, and Next.js. My internship experiences as a Data Science Intern at Technofly Solutions and a Web Developer Intern at TechCiti Software Consulting have equipped me with practical skills in solving real-world problems.`
  ],
  list: {
    title: 'Here are a few languages & frameworks I’ve been working with recently:',
    items: [
      'Python',
      'JavaScript',
      'HTML/CSS',
      'Firebase',
      'MERN',
      'Java'
    ],
  },
  img: '/img.png',
};
