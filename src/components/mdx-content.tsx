"use client";

import { useMDXComponent } from "@/hooks/use-mdx";

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component />;
}
