export interface PreviewScreenProps {
  cb: (flag: boolean) => void;
  loadData;
  loadStatistic: () => void;
}

export interface StatisticProps {
  statistic: UserData;
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

export type FiltersProps = {
  filterData;
  filters: Filters;
  sortedData?: UserData | [];
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
  setFilters;
  isActive: boolean;
  setActive;
  resetFilter;
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
  filters: Filters;
};
