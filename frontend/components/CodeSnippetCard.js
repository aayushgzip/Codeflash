// frontend/components/CodeSnippetCard.js

import { useRouter } from 'next/router';

const CodeSnippetCard = ({ snippet }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/snippets/${snippet.title}`);
  };

  return (
    <div style={styles.card} onClick={handleClick}>
      <h3 style={styles.title}>{snippet.title}</h3>
      <p style={styles.language}>{snippet.language}</p>
      <p style={styles.description}>{snippet.description || 'No description'}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f4f4f4',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  language: {
    fontSize: '14px',
    color: '#555',
  },
  description: {
    fontSize: '12px',
    color: '#777',
    marginTop: '10px',
  },
};

export default CodeSnippetCard;
