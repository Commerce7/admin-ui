import StoriesWrapper from '../src/stories/StoriesWrapper';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      source: {
        type: 'code',
        excludeDecorators: true,
        // format: true,
        /**
         * Transform the source code for better presentation in docs:
         * - Simplify render function syntax
         * - Remove unnecessary parameters and story sections
         */
        transform: (code) =>
          code
            .replace(/render:\s*\(\)\s*=>/, '() =>')
            .replace(
              /,?\s*parameters:[\s\S]*?story:[\s\S]*?}\s*}\s*}\s*$/,
              '\n}'
            )
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
