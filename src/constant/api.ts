import axios from 'axios';

export const GITHUB_API_BASE_URL = 'https://api.github.com';
export const githubApiInstance = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});
