export type PaginationPropsType = {
  totalCount: number;
  onChangePage: (e: any, value: number) => void;
  onPageSizeChange: (totalCount: number, value: number) => void;
};
