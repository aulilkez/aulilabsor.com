import React from "react";

type BlockTag = "div" | "section" | "main";

type BlockWrapperProps<T extends BlockTag> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function BlockWrapper<T extends BlockTag = "section">({
  as,
  className,
  children,
  ...props
}: BlockWrapperProps<T>) {
  const Component = as || "section";
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
