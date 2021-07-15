import React from 'react';

import { Container, Header, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/JoaoSipauba.png'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Rodrigo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
        </Container>
    )
}