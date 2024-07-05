const TextComponent = ({ text }: { text: string }) => {
    return <span suppressHydrationWarning>&nbsp;&nbsp;Type {text}&nbsp;&nbsp;</span>;
};

export default TextComponent;
