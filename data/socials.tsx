import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export type Stacks = {
    name: string;
    url: string;
    icon: React.ReactNode;
};

const socials: Stacks[] = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/maulism',
        icon: <FaFacebook />,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/mavlism',
        icon: <FaInstagram />,
    },
    {
        name: 'Github',
        url: 'https://github.com/bymaul/',
        icon: <FaGithub />,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/maulism',
        icon: <FaLinkedin />,
    },
];

export default socials;
