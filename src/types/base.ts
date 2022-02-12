export type Route = {
  path: string
  Component: React.ComponentType
  Layout: React.ComponentType
  roles?: string[]
}

export type RouteBlueprint = {
  path: string
  componentPath: string
  roles?: string[]
  layout?: string
}

export type RoutesCreator = (routes: RouteBlueprint[]) => Route[]
export type RouteCreator = (
  path: string,
  componentPath: string,
  roles?: string[],
  layout?: string,
) => RouteBlueprint
