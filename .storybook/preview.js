import StoriesWrapper from '../src/stories/StoriesWrapper';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' }
  }
};

export const decorators = [
  (Story) => (
    <StoriesWrapper>
      <Story />
    </StoriesWrapper>
  )
];
