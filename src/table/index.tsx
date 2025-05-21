import Table, { TableProps } from './Table';
import Tbody, { TbodyProps } from './Tbody';
import Td, { TdProps } from './Td';
import Tfoot, { TfootProps } from './Tfoot';
import Th, { ThProps } from './Th';
import Thead, { TheadProps } from './Thead';
import Tr, { TrProps } from './Tr';

export type {
  TableProps,
  TbodyProps,
  TdProps,
  TfootProps,
  TheadProps,
  ThProps,
  TrProps
};

const TableWithComponents = Object.assign(Table, {
  Tbody,
  Thead,
  Td,
  Th,
  Tr,
  Tfoot
});

export default TableWithComponents;
