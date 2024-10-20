import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
    subtitle: 'Hello, I’m',
    title: [
        'Manu Karthik!',
        'Full Stack Developer',
        'Public Speaker',
        
    ],
    tagline: 'Passionate about leveraging technology to create impactful solutions.',
    description: 
        "As an aspiring software engineer, I am eager to learn and tackle challenges in web development and machine learning.",
    specialText: 'Currently open to job opportunities in frontend and full-stack development.',
    cta: {
        title: 'View My Resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true
    }

    
};
