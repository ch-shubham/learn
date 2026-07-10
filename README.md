## Learn

```bash
bun install && bun run dev
bun run build   # production build
bun run start   # serve the production build
bun run lint
```

> If something looks broken after changing routes, folders, or \_meta.global.ts, always clear the cache and do a full restart — Turbopack does not reliably pick up structural changes on hot reload: `rm -rf .next && bun run dev`

## Project Structure

```
app/
  _meta.global.ts     # sidebar/navbar structure — see "Adding a New Section" below
  layout.tsx           # root layout: navbar, footer, search
  page.mdx              # homepage ("Welcome")
  dsa/
    introduction/page.mdx
    arrays/page.mdx
    linked-lists/page.mdx
  java/page.mdx
  .
  .
```

## Conventions (read before adding content)

These rules exist because we broke the build several times finding them out. Follow them and you won't have to.

- Every content page is named `page.mdx`. Do not use `index.mdx`. This project standardized on **page.mdx** for every route. Mixing the two in the same folder, or using index.mdx in a folder Nextra expects page.mdx in, causes:
  - Route conflicts ("Turbopack build failed")
  - `_meta` validation errors ("refers to a page that cannot be found")
- `_meta.global.ts` rules:
  - All navigation is defined in their respective folders under file: `_meta.ts`. There is a global \_meta at root level to manage root level navigation.
- Every topic is iteslf a folder having `page.mdx` following nextjs routing conventions
- Every new subject like dsa, java is of `type: page` to be mentioned in root `_meta.ts`
- Update the \_meta.ts and `<TopicIndex>` under root `page.mdx` of respective subject on addition of new file/subject.
- Keep filename following `-` convention for better readiability ex: **`time-and-space=complexity`**

## TODOs

- `resolutions: { zod: "4.3.6" }` This pins around the Zod 4.4 bug we hit earlier (nextra#5008). It's the right move fornow, but worth periodically checking if Nextra ships an official fix so you can remove the pin and stay current with Zod. [Open Issue](https://github.com/shuding/nextra/issues/4989)

## Issues

- Update the node version in nixpacks if deployment fails.
