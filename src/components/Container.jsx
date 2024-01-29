import PropTypes from 'prop-types';
export default function Container({className, children}) {
    return (
      <div className={`container ${className}`}>{children}</div>
    )
  }

  Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };