import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type SyntaxHighlighterComponentProps = {
  codeString: string;
  className?: string;
};

export const SyntaxHighlighterComponent: React.FC<
  SyntaxHighlighterComponentProps
> = ({ codeString, className, ...rest }) => {
  return (
    <SyntaxHighlighter language="typescript" className={className} {...rest}>
      {codeString}
    </SyntaxHighlighter>
  );
};
