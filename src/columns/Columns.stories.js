import Input from '../input';
import Tag from '../tag';

import Columns from '.';

const { Column } = Columns;

export const Basic = () => (
  <Columns>
    <Column span={6}>
      <Input label="Product Title" />
    </Column>
    <Column span={6}>
      <Input label="SKU" />
    </Column>
  </Columns>
);

Basic.story = {
  name: 'Basic'
};

export const DifferentSpans = () => (
  <Columns align="center">
    <Column span={3}>
      <Input label="Product Title" />
    </Column>
    <Column span={3}>
      <Input label="SKU" />
    </Column>
    <Column span={6}>
      <Tag>Default</Tag>
      <Tag>Wine</Tag>
      <Tag>Bottle</Tag>
    </Column>
  </Columns>
);

DifferentSpans.story = {
  name: 'Different Spans'
};

const description =
  "import { Columns } from '@commerce7/admin-ui'<br/><br/>const { Column } = Columns";

export default {
  title: 'UI/Columns',
  component: Columns,
  subcomponents: { Column },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
