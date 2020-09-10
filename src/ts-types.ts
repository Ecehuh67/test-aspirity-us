export interface PreviewScreenProps {
  cb: (flag: boolean) => void;
  loadStatistic: () => void;
}

export type NodeProps = {
  children: React.ReactNode;
};

export type ContextProps = {
  userData: UserData;
  filteredData: UserData;
  setUserData;
  setFilter;
  setFilters;
  filters: Filters;
};

export type UserData = {
  date: string;
  type: string;
  distance: number;
  id: string;
}[];

export type Filters = {
  date: string;
  type: string;
  distance: string;
};

export type FilterProps = {
  filterList: string[];
  activeFilters: Filters;
  currentFilter: string;
  setNewFilter;
  isActive: boolean;
  setActive;
  resetCurrentFilter;
};

export type PopupProps = {
  cb;
  editPoint?: {
    date?: string;
    type?: string;
    distance?: number;
    id?: string;
    isEdit: boolean;
  };
  resetEdit;
};

export type Reducer = {
  statistic: UserData;
  sortedStatistic: UserData | [];
};
