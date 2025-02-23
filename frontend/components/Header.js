// frontend/components/Header.js

import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Code Snippets Flashcards</h1>
      <button style={styles.button} onClick={() => router.push('/snippets/create')}>
        Add New Snippet
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#007BFF',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default Header;
