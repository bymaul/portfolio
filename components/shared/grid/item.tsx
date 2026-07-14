export default function GridItem({
    component: Component,
    ...props
}: Readonly<{ component: React.ComponentType<any> } & React.HTMLAttributes<HTMLDivElement>>) {
    return <div {...props}>{<Component />}</div>;
}
