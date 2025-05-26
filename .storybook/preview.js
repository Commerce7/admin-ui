import StoriesWrapper from '../src/stories/StoriesWrapper';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      source: {
        type: 'dynamic',
        excludeDecorators: true
      }
    }
  }
};

export const decorators = [
  (Story) => (
    <StoriesWrapper>
      <Story />
    </StoriesWrapper>
  )
];
