import Container from '../Container';
import ThemeToggle from '../ThemeToggle';

export default function HeaderLayout() {
    return (
        <header>
            <Container className='pt-10 pb-6 flex justify-end items-center'>
                <div className='sr-only'>
                    <h1>Maulana Ahmad Aji Triadi</h1>
                </div>
                <ThemeToggle />
            </Container>
        </header>
    );
}
