import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';

interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
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
