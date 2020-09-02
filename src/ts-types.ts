export interface PreviewScreenProps {
  cb: (flag: boolean) => void;
}

export type NodeProps = {
  children: React.ReactNode;
};

export type ContextProps = {
  userData: UserData;
  filteredData: UserData;
  setUserData;
  setFilteredData;
};

export type UserData = {
  date: string;
  type: string;
  distance: number;
}[];
