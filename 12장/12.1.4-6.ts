function log(str: string) {
  console.log(str);
}

// .env
API_URL = "localhost:8080";

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_URL: string;
  }
}

log(process.env.API_URL);
