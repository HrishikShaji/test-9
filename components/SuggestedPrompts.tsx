"use client";

import { Sparkles } from "lucide-react";

interface SuggestedPromptsProps {
	prompts?: string[];
	onPromptClick?: (prompt: string) => void;
}

export default function SuggestedPrompts({
	prompts = [
		"Tell me about your capabilities",
		"How can you help me?",
		"What are your best features?",
		"Show me an example",
	],
	onPromptClick,
}: SuggestedPromptsProps) {
	return (
		<div className="space-y-3">
			<div className="flex items-center gap-2 text-sm text-muted-foreground">
				<Sparkles className="w-4 h-4" />
				<span>Suggested prompts</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
				{prompts.map((prompt, index) => (
					<button
						key={index}
						onClick={() => onPromptClick?.(prompt)}
						className="text-left px-4 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors text-sm"
					>
						{prompt}
					</button>
				))}
			</div>
		</div>
	);
}
