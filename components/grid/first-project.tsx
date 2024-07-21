import projectImage from '@/public/projects/next-blog-starter.png';
import Project from '../project';

export default function FirstProject() {
    return (
        <Project
            projectName='Next Blog Starter'
            projectImage={projectImage}
            backgroundColor='bg-red-100'
        />
    );
}
