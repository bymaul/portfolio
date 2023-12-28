export function GET() {
    return Response.json({
        data: {
            name: 'Maulana Ahmad Aji Triadi',
            description: 'I am a web developer based in Yogyakarta, Indonesia.',
            role: 'Web Developer',
            stacks: {
                frontend: ['React'],
                backend: ['Laravel', 'Go', 'Node'],
                databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
            },
        },
    });
}
