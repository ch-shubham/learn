import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const components: MDXComponents = getThemeComponents({})

export function useMDXComponents(): MDXComponents {
  return components
}