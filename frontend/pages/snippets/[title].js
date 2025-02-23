// frontend/pages/snippets/[title].js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSnippet } from '../../utils/api';

export default function SnippetDetail() {
  const router = useRouter();
  const { title } = router.query;
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    if (title) {
      const fetchSnippet = async () => {
        const data = await getSnippet(title);
        setSnippet(data);
      };
      fetchSnippet();
    }
  }, [title]);

  const handleDelete = async () => {
    await deleteSnippet(title);
    router.push('/');
  };

  if (!snippet) return <div>Loading...</div>;

  return (
    <div>
      <h1>{snippet.title}</h1>
      <p><strong>Language:</strong> {snippet.language}</p>
      <pre>{snippet.code}</pre>
      <p><strong>Description:</strong> {snippet.description}</p>
      <button onClick={handleDelete}>Delete Snippet</button>
    </div>
  );
}
