const mainDecorators = (Story, context) => {
  return (
    <div>
      <Story {...context} />
    </div>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mainDecorators];
