function log(str: string) {
  console.log(str);
}

// .env
API_URL = "localhost:8080";

log(process.env.API_URL as string);
