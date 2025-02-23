// frontend/utils/api.js

const API_URL = 'http://127.0.0.1:8000/'; // Change to your backend URL if necessary

export const listSnippets = async () => {
  const response = await fetch(`${API_URL}/snippets/`);
  const data = await response.json();
  return Object.values(data); // Transform data into an array
};

export const getSnippet = async (title) => {
  const response = await fetch(`${API_URL}/snippets/${title}`);
  const data = await response.json();
  return data;
};

export const createSnippet = async (snippet) => {
  const response = await fetch(`${API_URL}/snippets/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snippet),
  });
  if (!response.ok) {
    throw new Error('Error creating snippet');
  }
  return await response.json();
};

export const deleteSnippet = async (title) => {
  const response = await fetch(`${API_URL}/snippets/${title}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting snippet');
  }
  return await response.json();
};
