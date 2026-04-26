The FAQ accordion on all 14 garbage bag sub-pages is broken. The answer text exists in the JSON-LD schema but is not rendering in the UI. The accordion buttons show questions but clicking them does nothing and no answer text appears.

Fix the FAQ component on all 14 sub-pages so that:

1. Each FAQ item renders both the question button and the answer text in the DOM
2. Clicking a question expands and shows the answer below it
3. Clicking again collapses it
4. Use a simple React useState toggle for open/closed state per FAQ item
5. The answer text must match exactly what is in the JSON-LD schema for each page
6. Style the expanded answer with padding, slightly smaller font than the question, and a subtle top border to separate it from the question
7. Only one FAQ can be open at a time — opening one closes any previously open one
8. Test on hotel, hospital and plastic-bags-manufacturer-hyderabad pages to confirm working

The answer text for each page's FAQs is already defined in the JSON-LD schema in each component file — use that same text for the visible accordion answers.