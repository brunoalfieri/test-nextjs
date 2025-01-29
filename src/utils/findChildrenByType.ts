import React, { ComponentProps, ReactElement, ReactNode } from 'react'

export function findChildrenByType<T extends React.ElementType>({
  componentType,
  children,
  props,
}: {
  componentType: T | T[]
  children?: ReactNode
  props?: Partial<ComponentProps<T>>
}): ReactElement<ComponentProps<T>> | null {
  if (!children) return null

  const childrenArray = React.Children.toArray(children)

  const componentsFound = childrenArray.filter(
    (child): child is ReactElement<ComponentProps<T>> =>
      React.isValidElement(child) &&
      (Array.isArray(componentType)
        ? componentType.includes(child.type as T)
        : child.type === componentType)
  )

  if (componentsFound.length >= 1) {
    const foundChild = componentsFound[0]
    return React.cloneElement(foundChild, props)
  }

  return null
}
