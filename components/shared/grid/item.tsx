type GridItemProps = {
    component: React.ComponentType;
} & React.HTMLAttributes<HTMLDivElement>;

export default function GridItem({ component: Component, ...props }: Readonly<GridItemProps>) {
    return (
        <div {...props}>
            <Component />
        </div>
    );
}
