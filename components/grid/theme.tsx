import Card from '../card';
import ThemeToggle from '../theme-toggle';

export default function Theme() {
    return (
        <Card className='relative flex h-full flex-col items-center justify-center'>
            <ThemeToggle />
        </Card>
    );
}
