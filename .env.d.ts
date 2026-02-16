interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_SLOGAN_1: string;
  readonly VITE_APP_SLOGAN_2: string;
  readonly VITE_SENTRY_DSN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
