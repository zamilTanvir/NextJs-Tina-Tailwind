import { defineConfig } from "tinacms";
import Footer from "./collection/footer";
import Post from "./collection/post";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: "main",
  // Get this from tina.io
  clientId: "",
  // Get this from tina.io
  token: "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [Footer, Post],
  },
  api: {
    // If you're self-hosting GitHub, point to your instance
    github: {
      owner: "ZamilTanvir", // GitHub username or organization
      repo: "NextJs-Tina-Tailwind", // GitHub repo name
      branch: "main", // Branch where content should be pushed
      token: process.env.GITHUB_TOKEN, // GitHub token for authentication
    },
},
}
);
