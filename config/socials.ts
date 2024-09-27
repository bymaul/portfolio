import { IconType } from 'react-icons';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from 'react-icons/fa6';

export interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/maulism',
        icon: FaFacebook,
    },
    {
        name: 'Github',
        url: 'https://github.com/bymaul/',
        icon: FaGithub,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/maulaanaahmad',
        icon: FaInstagram,
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
