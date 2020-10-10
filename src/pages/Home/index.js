import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'
import { Background, Container, Nome, Saldo, Title, List } from './styles'
import HistoricoList from '../../components/HistoricoList'

export default function Home() {
    const { user } = useContext(AuthContext)
    const [historico, setHistorico] = useState([
        { key: '1', tipo: 'receita', valor: 1200 },
        { key: '2', tipo: 'despesa', valor: 1220 },
        { key: '3', tipo: 'despesa', valor: 1400 },
        { key: '4', tipo: 'despesa', valor: 130 },
        { key: '5', tipo: 'receita', valor: 150 },
    ])
    return (
        <Background>
            <Header />
            <Container>
                <Nome>{user && user.nome}</Nome>
                <Saldo>123,00</Saldo>
            </Container>
            <Title>Ultimas movimentações</Title>

            <List showsVerticalScrollIndicator={false}
                data={historico}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (<HistoricoList data={item} />)}
            />
        </Background>
    )
}