"use client";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
	code: string;
	language?: string;
}

export default function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
	const [html, setHtml] = useState<string>("");
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		async function highlight() {
			const result = await codeToHtml(code, {
				lang: language,
				theme: "github-dark",
			});
			setHtml(result);
		}
		highlight();
	}, [code, language]);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative group">
			<button
				onClick={copyToClipboard}
				className="absolute top-2 right-2 p-2 rounded bg-muted hover:bg-muted/80 opacity-0 group-hover:opacity-100 transition-opacity"
				aria-label="Copy code"
			>
				{copied ? (
					<Check className="w-4 h-4 text-green-500" />
				) : (
					<Copy className="w-4 h-4" />
				)}
			</button>
			{html ? (
				<div
					className="rounded-lg overflow-hidden text-sm"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			) : (
				<pre className="bg-muted p-4 rounded-lg overflow-x-auto">
					<code>{code}</code>
				</pre>
			)}
		</div>
	);
}
