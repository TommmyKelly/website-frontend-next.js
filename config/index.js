const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:1337"
  : "https://tommykelly100.herokuapp.com";

// "http://localhost:1337"
