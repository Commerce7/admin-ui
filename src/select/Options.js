import PropTypes from 'prop-types';

const Options = (props) => {
  const { options, placeholder } = props;

  return (
    <>
      {placeholder && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}
      {options.map((option) => {
        if (option.options) {
          return (
            <optgroup key={option.label} label={option.label}>
              {option.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </optgroup>
          );
        }
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </>
  );
};

Options.defaultProps = {
  placeholder: null
};

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  placeholder: PropTypes.string
};

export default Options;
