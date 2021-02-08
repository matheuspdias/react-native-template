import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';

export default () => {

    const name = useSelector(state => state.UserReducer.name);

    return (
        <S.Container>
            <S.Text>Hello {name}</S.Text>
        </S.Container>
    );
}