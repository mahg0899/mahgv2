import { defineDocumentType, makeSource } from "contentlayer/source-files";

import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const options = {
  theme: "material-theme-palenight",
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    createdAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default source;
