import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/",
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },
});

export default withNextra({
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
});
