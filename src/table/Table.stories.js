import { action } from '@storybook/addon-actions';

import Table from '.';

const { Thead, Tbody, Th, Td, Tr, Tfoot } = Table;

export const basic = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Gender</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Jim Smith</Td>
        <Td>22</Td>
        <Td>Male</Td>
      </Tr>
      <Tr>
        <Td>Jess Smith</Td>
        <Td>40</Td>
        <Td>Female</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Td>Summary</Td>
        <Td>data</Td>
        <Td>data</Td>
      </Tr>
    </Tfoot>
  </Table>
);

basic.story = {
  name: 'Basic'
};

export const onClick = () => (
  <Table>
    <Thead>
      <Tr onClick={action('Clicked row')}>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Gender</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr onClick={action('Clicked row')}>
        <Td>Jim Smith</Td>
        <Td>22</Td>
        <Td>Male</Td>
      </Tr>
      <Tr onClick={action('Clicked row')}>
        <Td>Jess Smith</Td>
        <Td>40</Td>
        <Td>Female</Td>
      </Tr>
    </Tbody>
  </Table>
);

onClick.story = {
  name: 'Row Click'
};

const description =
  "import { Table } from '@commerce7/admin-ui'<br/><br/>const { Thead, Tbody, Th, Td, Tr, Tfoot } = Table";

export default {
  title: 'Data/Table',
  component: Table,
  subcomponents: { Thead, Tbody, Th, Td, Tr, Tfoot },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
