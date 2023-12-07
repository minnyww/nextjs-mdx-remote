
export default function Code(props: any) {
    return (
        <div style={{ background: 'lightgray', width: 'fit-content', padding: '1rem', borderRadius: '6px' }}>
            <code>{props.children}</code>
        </div>
    );
}