import { TabStyles } from './Tabs.styles';

const Tab = (props) => {
  const { children, className, component, onClick, href, dataTestId, ...rest } =
    props;

  let as = '';
  if (href) {
    as = 'a';
  } else if (!href && onClick) {
    as = 'button';
  }

  let customComponentProps = {};
  if (as === 'button') {
    customComponentProps = { type: 'button', ...rest };
  }
  if (as === 'a') {
    customComponentProps = { ...rest };
  }
  if (component) {
    as = component;
    customComponentProps = { ...rest };
  }

  return (
    <TabStyles
      as={as}
      onClick={onClick}
      className={className}
      href={href}
      data-testid={dataTestId}
      {...customComponentProps} // eslint-disable-line
    >
      {children}
    </TabStyles>
  );
};

export default Tab;
