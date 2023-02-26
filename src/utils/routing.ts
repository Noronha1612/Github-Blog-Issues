import { RouteName } from "@/routes"

interface typeWithStringTransform {
  toString(): string
}

interface validParams extends typeWithStringTransform { }

export const injectUrlParameter = (path: RouteName, params: Record<string, validParams>) => {
  return Object.entries(params).reduce((currentPath, [key, value]) => currentPath.replace(`:${key}`, value.toString()), path as string)
}