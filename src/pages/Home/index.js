import React, { useContext, useState, useEffect } from 'react'
import { Alert, TouchableOpacity,Platform } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'
import { Background, Container, Nome, Saldo, Title, List , Area } from './styles'
import HistoricoList from '../../components/HistoricoList'
import firebase from '../../services/firebasecConnection'
import { format, isPast } from 'date-fns'

import Icon from 'react-native-vector-icons/MaterialIcons'
import DatePicker from '../../components/DatePicker'

export default function Home() {
    const { user } = useContext(AuthContext)
    const [historico, setHistorico] = useState([])
    const [saldo, setSaldo] = useState(0)
    const uid = user && user.uid

    const [newDate, setNewDate] = useState(new Date())
    const [show, setShow] = useState(false)
    useEffect(() => {
        async function loadList() {
            await firebase.database().ref('usuarios').child(uid).on('value', (snapshot) => {
                setSaldo(snapshot.val().saldo)
            })
            await firebase.database().ref('historico').child(uid).orderByChild('date').equalTo(format(newDate, 'dd/MM/yy')).limitToLast(10).on('value', (snapshot) => {
                setHistorico([])

                snapshot.forEach((childItem) => {
                    let list = {
                        key: childItem.key,
                        tipo: childItem.val().tipo,
                        valor: childItem.val().valor,
                        date: childItem.val().date,
                    }
                    setHistorico(oldArray => [...oldArray, list].reverse())
                })
            })
        }
        loadList()
    }, [newDate])

    function deletando(data) {
        if (isPast(new Date(data.date))) {
            //se a data já passou cai aqui
            alert('Registro antigo, impossivel excluir')
            return
        }
        Alert.alert(
            'Cuidado atenção',
            `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => deletandocomSucesso(data)
                }
            ]
        )
    }
    async function deletandocomSucesso(data) {
        await firebase.database().ref('historico')
            .child(uid).child(data.key).remove()
            .then(async () => {
                let saldoAtual = saldo;
                data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)

                await firebase.database().ref('usuarios').child(uid)
                    .child('saldo').set(saldoAtual)
            }).catch((error) => {
                console.log(error)
            })
    }
    function mostrandoPicker(){
        setShow(true)
    }
    function fechando(){
        setShow(false)
    }
    function  onChange (date){
        setShow(Platform === 'ios')
        setNewDate(date)
    }

    return (
        <Background>
            <Header />
            <Container>
                <Nome>{user && user.nome}</Nome>
                <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
            </Container>
            <Area>
                <TouchableOpacity onPress={mostrandoPicker}>
                    <Icon name='event' color="#FFF" size={30}/>
                </TouchableOpacity>
                <Title>Ultimas movimentações</Title>
            </Area>
            <List showsVerticalScrollIndicator={false}
                data={historico}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (<HistoricoList data={item} deleteItem={deletando} />)}
            />
            {
                show &&(
                    <DatePicker 
                    onClose= {fechando}
                    date = {newDate}
                    onChange = {onChange}
                    />
                )
            }
        </Background>
    )
}