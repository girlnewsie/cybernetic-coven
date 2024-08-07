import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "18672902-2f92-467d-be87-7b82f3d75e7f",
  // Get this from tina.io
  token: "a2293d347aeab67afe40f7916d6c3859a65d5393",

  build: {
    outputFolder: "admin",
    publicFolder: "_site",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "_site",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_src",
        match: {
          include: "*",
          exclude: "index"
        },
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "art",
        label: "Art",
        path: "_src/ourart",
        match: {
          include: "*",
          exclude: "index"
        },
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
          {
            type: "string",
            name: "status",
            label: "Current Status",
          },
          {
            type: "string",
            name: "image",
            label: "Name of Image File",
          },
          {
            type: "string",
            name: "patreontier",
            label: "Tier on Patreon"
          },
          {
            type: "boolean",
            name: "exclusive",
            label: "Is this work only available through the Patreon?"
          },
          {
            type: "string",
            name: "url",
            label: "URL"
          }
        ],
      },
    ],
  },
});
