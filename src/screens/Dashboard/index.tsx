import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

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
    HighlightCards,
    Transactions, 
    Title
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
                            <UserName>João Sipauba</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril"
                    type="up"
                />
                <HighlightCard 
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Última saída dia 03 de abril"
                    type="down"
                />
                <HighlightCard 
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="1 á 16 de abril"
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionCard />
            </Transactions>
        </Container>
    )
}