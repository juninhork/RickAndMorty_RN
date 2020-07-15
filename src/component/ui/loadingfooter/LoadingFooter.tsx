import React from 'react';
import PropTypes from 'prop-types';
import {Indicator, ContainerIndicator} from './styles';

const LoadingFooter = (props: {loading: any}) => {
  const {loading} = props;

  if (!loading) {
    return null;
  }
  return (
    <ContainerIndicator>
      <Indicator />
    </ContainerIndicator>
  );
};

LoadingFooter.propTypes = {
  loading: PropTypes.bool,
};

LoadingFooter.defaultProps = {
  loading: false,
};

/**
 * @author Paulo Braga de Assis Junior
 * @name LoadingFooter propTypes
 * @type {propTypes}
 * @memberof LoadingFooter
 * @static
 * @example
 * <LoadingFooter loading={loading} />
 */

export default LoadingFooter;
