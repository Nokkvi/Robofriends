export interface IRobot {
  id: number;
  name: string;
  username?: string;
  email: string;
}

export interface IMainPageProps {
  onRequestRobots: Function;
  robots: IRobot[];
  searchField: string;
  onSearchChange: Function;
  isPending: boolean
}