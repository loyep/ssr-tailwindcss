import type { UserConfig } from "ssr-types";

const userConfig: UserConfig = {
  css: () => {
    return {
      loaderOptions: {
        postcss: {
          options: {},
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    };
  },
};

export { userConfig };
