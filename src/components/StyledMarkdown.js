import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Styled ReactMarkdown component with consistent formatting across the site
 * Supports lists, links, bold text, and more with custom styling
 */
const StyledMarkdown = ({ children, linkClassName = '' }) => {
  return (
    <ReactMarkdown
      components={{
        // Links - styled with site colors
        a: ({node, ...props}) => (
          <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName || "text-vat-linktext hover:text-vat-subtext underline transition-colors duration-300"}
          />
        ),

        // Bold text - green color
        strong: ({node, ...props}) => (
          <strong {...props} className="font-semibold text-vat-green" />
        ),

        // Unordered lists - custom bullet styling
        ul: ({node, ...props}) => (
          <ul {...props} className="space-y-2 list-none" />
        ),

        // Ordered lists - custom number styling
        ol: ({node, ...props}) => (
          <ol {...props} className="space-y-2 list-none" />
        ),

        // List items - green bullet point
        li: ({node, ordered, ...props}) => (
          <li className="flex items-start">
            <span className="text-vat-green mr-3 mt-1 flex-shrink-0">
              {ordered ? `${props.index + 1}.` : '•'}
            </span>
            <span className="flex-1">{props.children}</span>
          </li>
        ),

        // Paragraphs - maintain spacing
        p: ({node, ...props}) => (
          <p {...props} className="mb-4 last:mb-0" />
        )
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default StyledMarkdown;
