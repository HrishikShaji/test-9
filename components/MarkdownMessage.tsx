import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownMessageProps {
	content: string;
}

export default function MarkdownMessage({ content }: MarkdownMessageProps) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			className="prose prose-sm dark:prose-invert max-w-none"
			components={{
				// Customize markdown elements
				h1: ({ ...props }) => <h1 className="text-2xl font-bold mb-2" {...props} />,
				h2: ({ ...props }) => <h2 className="text-xl font-bold mb-2" {...props} />,
				h3: ({ ...props }) => <h3 className="text-lg font-bold mb-1" {...props} />,
				p: ({ ...props }) => <p className="mb-2 leading-relaxed" {...props} />,
				ul: ({ ...props }) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
				ol: ({ ...props }) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
				li: ({ ...props }) => <li className="leading-relaxed" {...props} />,
				a: ({ ...props }) => (
					<a className="text-primary underline hover:no-underline" {...props} />
				),
				blockquote: ({ ...props }) => (
					<blockquote className="border-l-4 border-muted pl-4 italic my-2" {...props} />
				),
				code: ({ className, children, ...props }) => {
					const isInline = !className;
					return isInline ? (
						<code
							className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
							{...props}
						>
							{children}
						</code>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					);
				},
				pre: ({ ...props }) => (
					<pre className="bg-muted p-3 rounded-lg overflow-x-auto my-2" {...props} />
				),
			}}
		>
			{content}
		</ReactMarkdown>
	);
}
