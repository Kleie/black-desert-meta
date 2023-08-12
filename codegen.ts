import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://b75f-2804-7f0-b780-97c8-9911-363d-5797-686d.ngrok-free.app/",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
