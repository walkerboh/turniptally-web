const devConfig = {
  API_URL: "https://localhost:44383",
};

const prodConfig = {
  API_URL: "https://turniptally.com/api",
};

export const generateConfig = () => {
  const env = process.env.NODE_ENV;

  switch (env) {
    case "production":
      return prodConfig;
    default:
      return devConfig;
  }
};
