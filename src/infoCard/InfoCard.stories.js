import InfoCard from '.';

const { InfoCardGrid } = InfoCard;

export const Basic = () => (
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
    <InfoCard icon="coin" label="Payment" title="Received" variant="success" />
    <InfoCard
      icon="wine"
      iconVariantOverride="default"
      iconBackgroundVariantOverride="default"
    >
      children
    </InfoCard>
    <InfoCard
      icon="wine"
      iconVariantOverride="success"
      iconBackgroundVariantOverride="success"
    >
      children
    </InfoCard>
    <InfoCard
      icon="wine"
      iconVariantOverride="warning"
      iconBackgroundVariantOverride="warning"
    >
      children
    </InfoCard>
    <InfoCard
      icon="wine"
      iconVariantOverride="error"
      iconBackgroundVariantOverride="error"
    >
      children
    </InfoCard>
    <InfoCard
      icon="wine"
      iconVariantOverride="info"
      iconBackgroundVariantOverride="info"
    >
      children
    </InfoCard>
  </InfoCardGrid>
);

Basic.story = {
  name: 'Basic'
};

const description =
  "import { InfoCard } from '@commerce7/admin-ui'<br/><br/>const { InfoCardGrid } = InfoCard";

export default {
  title: 'UI/InfoCard',
  component: InfoCard,
  subcomponents: { InfoCardGrid },
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  }
};
