export type IProps = {
  children?: React.ReactNode
}

export type IProjectsTab = {
  id: string;
  name: string;
  default: boolean;
  url: string
}

export type IProject = {
  id: string;
  title: string;
  category: string;
  timestamp: string;
}

export type IPropsLayout = {
  mode: string;
  toggleMode: React.Dispatch<React.SetStateAction<string>>
}

export type IPropsProjects = {
  items: IProject[]
}