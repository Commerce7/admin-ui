import Column, { ColumnProps } from './Column';
import ColumnsComponent, { ColumnsProps } from './Columns';

const Columns = Object.assign(ColumnsComponent, { Column });

export type { ColumnsProps, ColumnProps };

export default Columns;
