/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}