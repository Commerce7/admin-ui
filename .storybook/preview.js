import StoriesWrapper from '../src/stories/StoriesWrapper';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <StoriesWrapper>
      <Story />
    </StoriesWrapper>
  )
];
