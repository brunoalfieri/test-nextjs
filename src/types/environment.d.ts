declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    API_MOCKING: 'false' | 'true';
    NEXT_PUBLIC_API_ENDPOINT: string;
  }
}
