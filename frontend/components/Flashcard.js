// frontend/components/Flashcard.js

const Flashcard = ({ snippet }) => {
    return (
      <div style={styles.card}>
        <h3 style={styles.title}>{snippet.title}</h3>
        <p style={styles.language}><strong>Language:</strong> {snippet.language}</p>
        <pre style={styles.code}>{snippet.code}</pre>
        <p style={styles.description}><strong>Description:</strong> {snippet.description || 'No description provided'}</p>
      </div>
    );
  };
  
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '20px',
      backgroundColor: '#f9f9f9',
    },
    title: {
      margin: '0',
      fontSize: '20px',
      color: '#333',
    },
    language: {
      margin: '10px 0',
      fontSize: '16px',
      color: '#555',
    },
    code: {
      backgroundColor: '#f1f1f1',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      color: '#777',
    },
  };
  
  export default Flashcard;
  