/**
 * @author c1283459 Paulo Braga de Assis Junior
 * @name MeshInputIcon propTypes
 * @type {propTypes}
 * @example
 *
 *
 */

import React, {Component, Props, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Animated, Modal, Image} from 'react-native';

import {style} from './style';

import LOGO_RICK_MORTY from '../../../assets/logo_rick_morty.png';

export default class LoadinRM extends Component {
  springValue: Animated.Value;
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.1);
    this.spring();
  }
  spring = () => {
    this.springValue.setValue(0.1);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
      velocity: 0.1,
    }).start();
  };

  render() {
    const {loading} = this.props;
    return (
      <Modal animationType="slide" transparent={false} visible={loading}>
        <View style={style.containe}>
          <Animated.View style={{transform: [{scale: this.springValue}]}}>
            <Image
              source={LOGO_RICK_MORTY}
              resizeMode="contain"
              style={{
                width: 150,
                height: 150,
                borderRadius: 150 / 2,
              }}
            />
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

LoadinRM.propTypes = {
  loading: PropTypes.bool,
};

LoadinRM.defaultProps = {
  loading: false,
};

// const LoadinRM: React.FC<Props> = (props) => {
//   console.warn('props', props);
//   const {loading} = props.loading;
//   const [springValue, setSpringValue] = useState<Animated.Value>(
//     new Animated.Value(0.1),
//   );

//   useEffect(() => {
//     setSpringValue(new Animated.Value(0.1));
//     spring();
//   }, []);

//   const spring = () => {
//     springValue.setValue(0.1);
//     Animated.spring(springValue, {
//       toValue: 1,
//       friction: 1,
//       velocity: 0.1,
//     }).start();
//   };

//   return (
//     <Modal animationType="slide" transparent={false} visible={loading}>
//       <View style={style.containe}>
//         <Animated.View style={{transform: [{scale: springValue}]}}>
//           <Image
//             source={LOGO_RICK_MORTY}
//             resizeMode="contain"
//             style={{
//               width: 150,
//               height: 150,
//               borderRadius: 150 / 2,
//             }}
//           />
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };
// export default LoadinRM;
