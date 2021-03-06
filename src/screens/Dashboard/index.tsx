import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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
    Title,
    TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
        {   
            id: '1',
            type: 'positive',
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            date:"13/04/2020",
            category:{
                name: 'Vendas',
                icon: 'dollar-sign'
            }
        },
        {
            id: '2',
            type: 'negative',
            title:"Hamburgueria Pizzy",
            amount:"R$ 59,00",
            date:"13/04/2020",
            category:{
                name: 'Alimentação',
                icon: 'coffee'
            }
        },
        {
            id: '3',
            type: 'negative',
            title:"Aluguel do apartamento",
            amount:"R$ 1.200,00",
            date:"13/04/2020",
            category:{
                name: 'Casa',
                icon: 'shopping-bag'
            }
        },
    ]
    
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

                <TransactionsList 
                    data={data} 
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                />
            </Transactions>
        </Container>
    )
}