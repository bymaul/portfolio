type Props = {
    title: string;
    subtitle: string;
};

export default function SecondHeading({ title, subtitle }: Props) {
    return (
        <div className='pb-5 text-center sm:text-start'>
            <h2 className='font-semibold text-xl text-slate-900 dark:text-white leading-relaxed'>{title}</h2>
            <p className='text-sm text-slate-500 dark:text-slate-400'>{subtitle}</p>
        </div>
    );
}
