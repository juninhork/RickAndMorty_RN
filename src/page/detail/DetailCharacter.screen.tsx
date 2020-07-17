/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import { GetCharacter } from '../../service/DetailCharacterService';
import Character from '../../model/Character';

import {
    DetailContainer,
    CharacterImage,
    TextName,
    TextDescription,
    TextInfo,
    ViewDescription,
    RowTextContainer,
    SubContainer,
} from './DetailCharacter.styles';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import LoadinRM from '../../component/ui/loadingrm/LoadinRM';

const DetailCharacter = (props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [character, setCharacter] = useState(Character);


    useEffect(() => {
        getCharacter(props.route.params.id);
    }, []);

    const getCharacter = (id: number) => {
        GetCharacter(id)
            .then(response => response.data)
            .then((response:Character) => {
                setCharacter(response);
                setLoading(false);
            })
            .catch(_error => {
                setLoading(false);
            });
    };

    const getData = (data:string) => {
        const returnData = data?.split('T');
        return returnData ? returnData[0] : '';
    };

    /**
     * @param {string} title
     * @param {string} description
     */
    const renderForms = (title: {} | null | undefined, description: {} | null | undefined) => {
        return (
            <ViewDescription>
                <TextInfo>{title}</TextInfo>
                <TextDescription>{description}</TextDescription>
            </ViewDescription>
        );
    };

    return (
    <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: Colors.black}}>
            <LoadinRM loading={loading}/>
            <DetailContainer>
                <CharacterImage
                    source={{ uri: character.image ? character.image : '' }}
                    resizeMode="contain"/>

                <SubContainer>
                    <TextName>{character.name ? character.name : ''}</TextName>

                    <RowTextContainer>
                        {renderForms('Status:', character.status ? character.status : '')}
                        {renderForms('Specie:', character.species ? character.species : '')}
                    </RowTextContainer>

                    <RowTextContainer>
                        {renderForms('Created:', getData(character.created ? character.created : ''))}
                        {renderForms('Gender:', character.gender ? character.gender : '')}
                    </RowTextContainer>

                    {renderForms('Origin:', character.origin ? character.origin.name ? character.origin.name : '' : '')}
                    {renderForms('Location:', character.location ? character.location.name ? character.location.name : '' : '')}

                </SubContainer>
            </DetailContainer>
        </SafeAreaView>
    </>
    );
};

export default DetailCharacter;
