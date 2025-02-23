// frontend/pages/snippets/create.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import { createSnippet } from '../../utils/api';

export default function CreateSnippet() {
  const [snippet, setSnippet] = useState({
    title: '',
    language: '',
    code: '',
    description: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    setSnippet({ ...snippet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSnippet(snippet);
    router.push('/');
  };

  return (
    <div>
      <h1>Create a New Code Snippet</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={snippet.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Language</label>
          <input
            type="text"
            name="language"
            value={snippet.language}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Code</label>
          <textarea
            name="code"
            value={snippet.code}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={snippet.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Snippet</button>
      </form>
    </div>
  );
}
