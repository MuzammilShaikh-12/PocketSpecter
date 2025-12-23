import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  variant?: "assistant" | "user";
}

export function MarkdownRenderer({
  content,
  variant = "assistant",
}: MarkdownRendererProps) {
  return (
    <div
      className={`markdown max-w-none ${
        variant === "user"
          ? "prose-invert text-[#FFD700]"
          : "text-black"
      }`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
