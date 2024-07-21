import projectImage from '@/public/projects/api-collection.png';
import Project from '../project';

export default function SecondProject() {
    return (
        <Project
            projectName='API Collection'
            projectImage={projectImage}
            backgroundColor='bg-orange-100'
        />
    );
}
