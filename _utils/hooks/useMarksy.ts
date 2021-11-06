import { createElement } from 'react';
import marksy from 'marksy';

export const useMarksy = (markdown: string) => {
    const compileMarkdown = marksy({ createElement });
    const compiled = compileMarkdown(markdown);

    return { markdown: compiled };
}