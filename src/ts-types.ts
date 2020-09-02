export interface PreviewScreenProps {
  cb: (flag: boolean) => void;
}

export type NodeProps = {
  children: React.ReactNode;
};

export type ContextProps = {
  userData: UserData;
  setUserData;
};

export type UserData = {
  date: string;
  type: string;
  distance: number;
}[];
