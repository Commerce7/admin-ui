import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Table from '.';

const { Thead, Tbody, Th, Td, Tr, Tfoot } = Table;

const meta = {
  title: 'Data/Table',
  component: Table,
  tags: ['autodocs'],
  subcomponents: { Thead, Tbody, Th, Td, Tr, Tfoot },
  parameters: {
    docs: {
      description: {
        component:
          "import { Table } from '@commerce7/admin-ui'<br/><br/>const { Thead, Tbody, Th, Td, Tr, Tfoot } = Table"
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: () => (
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
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic table with header, body, and footer sections.'
      }
    }
  }
};

export const RowClick: Story = {
  render: () => (
    <Table>
      <Thead>
        <Tr onClick={action('Clicked header row')}>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Gender</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr onClick={action('Clicked data row 1')}>
          <Td>Jim Smith</Td>
          <Td>22</Td>
          <Td>Male</Td>
        </Tr>
        <Tr onClick={action('Clicked data row 2')}>
          <Td>Jess Smith</Td>
          <Td>40</Td>
          <Td>Female</Td>
        </Tr>
      </Tbody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Table with clickable rows that trigger actions when clicked.'
      }
    }
  }
};

export const AlignedColumns: Story = {
  render: () => (
    <Table>
      <Thead>
        <Tr>
          <Th align="left">Left Aligned</Th>
          <Th align="center">Center Aligned</Th>
          <Th align="right">Right Aligned</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td align="left">Text</Td>
          <Td align="center">Text</Td>
          <Td align="right">Text</Td>
        </Tr>
        <Tr>
          <Td align="left">Text</Td>
          <Td align="center">Text</Td>
          <Td align="right">Text</Td>
        </Tr>
      </Tbody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Table with columns aligned in different ways: left, center, and right.'
      }
    }
  }
};
