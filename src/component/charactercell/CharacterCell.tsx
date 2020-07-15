/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { styles } from './CharacterCell.style';
import PropTypes from 'prop-types';

const  CharacterCell = (props) =>{
    const _detailCharacter = () => {
        props.onPress(props.id);
    };

        const { sourceImage, name } = props;
        const { container, image, textName, containerElement } = styles;
        return (
            <View style={container}>
                <TouchableHighlight underlayColor={'transparent'} onPress={_detailCharacter}>
                    <View style={containerElement}>
                        <Image
                            source={{ uri: sourceImage }}
                            resizeMode="contain"
                            style={image}

                        />
                        <Text style={textName}>{name}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );

};

export default CharacterCell;

/**
 * @name CharacterCell propTypes
 * @type {propTypes}
 * @memberof CharacterCell
 * @static
 * @example
 * <CharacterCell onPress={onPress} name= {name} sourceImage={sourceImage} id={id} />
 */
CharacterCell.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string,
    sourceImage: PropTypes.string,
    id: PropTypes.number,
};

CharacterCell.defaultProps = {
    onPress: undefined,
    name: '',
    sourceImage: '',
    id: 0,
};
