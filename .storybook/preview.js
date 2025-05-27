import StoriesWrapper from '../src/stories/StoriesWrapper';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      source: {
        type: 'code',
        excludeDecorators: true,
        transform: (code) => {
          // First replace 'render: () =>' with '() =>'
          let transformedCode = code.replace(/render:\s*\(\)\s*=>/, '() =>');

          // Remove the parameters section entirely
          transformedCode = transformedCode.replace(
            /,?\s*parameters:\s*{[^]*?story:\s*['"].*?['"]\s*}[^]*?}\s*}\s*/g,
            ''
          );

          return transformedCode;
        }
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
