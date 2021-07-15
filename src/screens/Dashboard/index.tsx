import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
    Container, 
    Header, 
    Icon, 
    Photo, 
    User, 
    UserGreeting, 
    UserInfo, 
    UserName, 
    UserWrapper,
    HighlightCards
} from './styles';

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

            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    )
}