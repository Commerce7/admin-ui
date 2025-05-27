import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import InfoCard from '.';

const { InfoCardGrid } = InfoCard;

const meta: Meta<typeof InfoCard> = {
  title: 'UI/InfoCard',
  component: InfoCard,
  subcomponents: { InfoCardGrid },
  parameters: {
    docs: {
      description: {
        component:
          "import { InfoCard } from '@commerce7/admin-ui'<br/><br/>const { InfoCardGrid } = InfoCard"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Basic: Story = {
  render: () => (
    <InfoCardGrid>
      <InfoCard
        icon="calendar"
        label="Order Submitted"
        title="Apr 12, 2022"
        subtitle="12:01 am"
      />
      <InfoCard
        icon="warning"
        label="Payment Status"
        title="Payment has not been captured"
        variant="error"
      />
      <InfoCard
        icon="dolly"
        label="Fulfillment"
        title="Not Fulfilled"
        variant="warning"
      />
      <InfoCard icon="truck" label="Status" title="Shipped" variant="info" />
      <InfoCard
        icon="coin"
        label="Payment"
        title="Received"
        variant="success"
      />
      <InfoCard icon="wine" iconVariant="success">
        iconVariant
      </InfoCard>
    </InfoCardGrid>
  )
};
