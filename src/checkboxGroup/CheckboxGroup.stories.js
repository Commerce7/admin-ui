import { useState } from 'react';

import Checkbox from '../checkbox';

import CheckboxGroup from '.';

export const Basic = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup label="Select all available wines">
      <Checkbox
        label="Red"
        id="red"
        value="red"
        checked={checked.includes('red')}
        onChange={handleOnChange}
      />
      <Checkbox
        label="White"
        id="white"
        value="white"
        checked={checked.includes('white')}
        onChange={handleOnChange}
      />
    </CheckboxGroup>
  );
};

Basic.story = {
  name: 'Basic'
};

export const Error = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  const errorMessage = !checked.length ? 'One selection is required' : '';

  return (
    <CheckboxGroup
      label="Select all available wines"
      errorMessage={errorMessage}
    >
      <Checkbox
        label="Red"
        id="red"
        value="red"
        checked={checked.includes('red')}
        onChange={handleOnChange}
      />
      <Checkbox
        label="White"
        id="white"
        value="white"
        checked={checked.includes('white')}
        onChange={handleOnChange}
      />
    </CheckboxGroup>
  );
};

Error.story = {
  name: 'Error'
};

export const Required = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup label="Select all available wines" required>
      <Checkbox
        label="Red"
        id="red"
        value="red"
        checked={checked.includes('red')}
        onChange={handleOnChange}
      />
      <Checkbox
        label="White"
        id="white"
        value="white"
        checked={checked.includes('white')}
        onChange={handleOnChange}
      />
    </CheckboxGroup>
  );
};

Required.story = {
  name: 'Required'
};

export const CheckboxSmallButtonGroup = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup label="Heading Styles" variant="button">
      <Checkbox
        id="bold"
        value="bold"
        checked={checked.includes('bold')}
        onChange={handleOnChange}
        variant="button"
        size="small"
        icon="textBold"
      />
      <Checkbox
        id="italic"
        value="italic"
        checked={checked.includes('italic')}
        onChange={handleOnChange}
        variant="button"
        size="small"
        icon="textItalic"
      />
    </CheckboxGroup>
  );
};

CheckboxSmallButtonGroup.story = {
  name: 'Checkbox Small Button Group'
};

export const CheckboxSmallButtonGroupError = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup
      label="Heading Styles"
      variant="button"
      errorMessage="Please select one"
    >
      <Checkbox
        id="bold"
        value="bold"
        checked={checked.includes('bold')}
        onChange={handleOnChange}
        variant="button"
        size="small"
        icon="textBold"
      />
      <Checkbox
        id="italic"
        value="italic"
        checked={checked.includes('italic')}
        onChange={handleOnChange}
        variant="button"
        size="small"
        icon="textItalic"
      />
    </CheckboxGroup>
  );
};

CheckboxSmallButtonGroupError.story = {
  name: 'Checkbox Small Button Group Error'
};

export const CheckboxMediumButtonGroup = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup label="Toppings" variant="button" size="medium">
      <Checkbox
        id="add"
        value="add"
        checked={checked.includes('add')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Add
      </Checkbox>
      <Checkbox
        id="no"
        value="no"
        checked={checked.includes('no')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        No
      </Checkbox>
      <Checkbox
        id="extra"
        value="extra"
        checked={checked.includes('extra')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Extra
      </Checkbox>
      <Checkbox
        id="side"
        value="side"
        checked={checked.includes('side')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Side
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxMediumButtonGroup.story = {
  name: 'Checkbox Medium Button Group'
};

export const CheckboxMediumButtonGroupError = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup
      label="Toppings"
      variant="button"
      errorMessage="One selection is required"
      size="medium"
    >
      <Checkbox
        id="add"
        value="add"
        checked={checked.includes('add')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Add
      </Checkbox>
      <Checkbox
        id="no"
        value="no"
        checked={checked.includes('no')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        No
      </Checkbox>
      <Checkbox
        id="extra"
        value="extra"
        checked={checked.includes('extra')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Extra
      </Checkbox>
      <Checkbox
        id="side"
        value="side"
        checked={checked.includes('side')}
        onChange={handleOnChange}
        variant="button"
        size="medium"
      >
        Side
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxMediumButtonGroupError.story = {
  name: 'Checkbox Medium Button Group Error'
};

export const CheckboxLargeButtonGroup = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup label="Toppings" variant="button" size="large">
      <Checkbox
        id="add"
        value="add"
        checked={checked.includes('add')}
        onChange={handleOnChange}
        variant="button"
      >
        Add
      </Checkbox>
      <Checkbox
        id="no"
        value="no"
        checked={checked.includes('no')}
        onChange={handleOnChange}
        variant="button"
      >
        No
      </Checkbox>
      <Checkbox
        id="extra"
        value="extra"
        checked={checked.includes('extra')}
        onChange={handleOnChange}
        variant="button"
      >
        Extra
      </Checkbox>
      <Checkbox
        id="side"
        value="side"
        checked={checked.includes('side')}
        onChange={handleOnChange}
        variant="button"
      >
        Side
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxLargeButtonGroup.story = {
  name: 'Checkbox Large Button Group'
};

export const CheckboxLargeButtonGroupError = () => {
  const [checked, setChecked] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (checked.includes(value)) {
      setChecked(checked.filter((v) => v !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  return (
    <CheckboxGroup
      label="Toppings"
      variant="button"
      errorMessage="Please select one"
      size="large"
    >
      <Checkbox
        id="add"
        value="add"
        checked={checked.includes('add')}
        onChange={handleOnChange}
        variant="button"
      >
        Add
      </Checkbox>
      <Checkbox
        id="no"
        value="no"
        checked={checked.includes('no')}
        onChange={handleOnChange}
        variant="button"
      >
        No
      </Checkbox>
      <Checkbox
        id="extra"
        value="extra"
        checked={checked.includes('extra')}
        onChange={handleOnChange}
        variant="button"
      >
        Extra
      </Checkbox>
      <Checkbox
        id="side"
        value="side"
        checked={checked.includes('side')}
        onChange={handleOnChange}
        variant="button"
      >
        Side
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxLargeButtonGroupError.story = {
  name: 'Checkbox Large Button Group Error'
};

export default {
  title: 'Form/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: "import { CheckboxGroup } from '@commerce7/admin-ui'"
      }
    }
  }
};
