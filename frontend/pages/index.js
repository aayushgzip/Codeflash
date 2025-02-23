// frontend/pages/index.js
import Header from '/components/Header';
import CodeSnippetCard from '/components/CodeSnippetCard';

export default function Home() {
  const snippets = [
    {
      title: 'Hello World in Python',
      language: 'Python',
      description: 'A simple hello world program.',
    },
    {
      title: 'Bubble Sort Algorithm',
      language: 'JavaScript',
      description: 'An implementation of bubble sort.',
    },
    // Add more snippets here
  ];

  return (
    <div>
      <Header />
      <h2>Available Code Snippets</h2>
      {snippets.map((snippet) => (
        <CodeSnippetCard key={snippet.title} snippet={snippet} />
      ))}
    </div>
  );
}
