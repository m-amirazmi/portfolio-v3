export type IProps = {
  children?: React.ReactNode
}


export type IProject = {
  id: string;
  title: string;
  category: string;
}

export type IPropsLayout = {
  mode: string;
  toggleMode: React.Dispatch<React.SetStateAction<string>>
}

export type IPropsProjects = {
  items: IProject[]
}