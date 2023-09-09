import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

export type Stacks = {
    name: string;
    url: string;
    icon: IconType;
};

const socials: Stacks[] = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/maulism',
        icon: FaFacebook,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/mavlism',
        icon: FaInstagram,
    },
    {
        name: 'Github',
        url: 'https://github.com/bymaul/',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/maulana-ahmad',
        icon: FaLinkedin,
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@maulx',
        icon: FaYoutube,
    },
];

export default socials;
