/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Container,ContainerElement,ImageCharacter,TextName} from './CharacterCell.style';
import PropTypes from 'prop-types';

const  CharacterCell = (props) =>{
    const _detailCharacter = () => {
        props.onPress(props.id);
    };

    const { sourceImage, name } = props;

    return (
        <Container>
             <TouchableHighlight underlayColor={'transparent'} onPress={_detailCharacter}>
                <ContainerElement>
                    <ImageCharacter source={{ uri: sourceImage }}/>
                    <TextName >{name}</TextName>
                </ContainerElement>
            </TouchableHighlight>
        </Container>
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
