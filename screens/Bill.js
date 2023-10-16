import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import { useState } from 'react'
import { useEffect } from 'react'
import { getBill } from '../Helper/api'
import color from '../constant/color'
import { useSelector } from 'react-redux'

const Bill = () => {
    const [bill, setBill] = useState()
    const [loading, setLoading] = useState()
    const userData = useSelector((state) => state?.user?.data)


    useEffect(() => {
        const gBill = async () => {
            const token = userData?.token
            try {
                setLoading(true)
                const response = await getBill(token)
                setBill(response.data)
                setLoading(false)

            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }

        gBill()
    }, [])
    return (
        <SafeAreaView>
            <UserData />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <TotalExpanses label={"Total Money Spent"} amount={bill?.totalMoneySpent} />
                <TotalExpanses label={"Money Received"} amount={bill?.moneyReceived} />
                <TotalExpanses label={"Money Available"} amount={bill?.moneyAvailable} />
                <TotalExpanses label={"Money Required"} amount={bill?.moneyRequired} />
                <TotalExpanses label={"Money Spent"} amount={bill?.moneySpent} />

                <Text style={{
                    marginVertical: 10, paddingHorizontal: 10, fontWeight: '700', fontSize: 25
                    , backgroundColor: 'white', color: color.second
                    , textAlign: 'center', paddingVertical: 8
                }}>Active Member's</Text>

                < DetailBill usersBill={bill?.usersBill
                } />

            </ScrollView>
        </SafeAreaView>
    )
}
const TotalExpanses = ({ label, amount }) => {
    return (
        <View style={styles.expansesTotalContainer}>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 17 }}>
                {label}
            </Text>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
                {" "}
                ₹ {amount}
            </Text>
        </View>
    );
};

const DetailBill = ({ usersBill }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <View style={styles.perUserBillHeaderContianer}>
                <Text style={styles.header}>Name</Text>
                <Text style={styles.header}>Advance</Text>
                <Text style={styles.header}>Payable</Text>
                <Text style={styles.header}>Due</Text>


            </View>

            {
                usersBill && usersBill?.map((item, idx) => {
                    return (
                        <PerUserBill data={item} key={idx} idx={idx} />
                    )
                })
            }

        </View>
    )
}

const PerUserBill = ({ data, idx }) => {
    var bgColor = idx % 2 === 1 ? color.background : "white"
    return (
        <View style={[styles.perUserBillContainer, { backgroundColor: bgColor }]}>
            <Text style={styles.data}>Manish</Text>
            <Text style={styles.data}>{data?.moneyAdvance}</Text>
            <Text style={styles.data}>{data?.totalPayable}</Text>
            <Text style={styles.data}>{data?.moneyDue}</Text>


        </View>
    )
}



export default Bill

const styles = StyleSheet.create({
    expansesTotalContainer: {
        backgroundColor: color.second,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: .5,
        borderBottomColor: 'white'
    },
    perUserBillHeaderContianer: {
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 3,
        paddingVertical: 8
    },
    header: {
        fontWeight: '600',
        fontSize: 18,
        color: color.first
    },
    perUserBillContainer: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    data: {
        fontWeight: "600",
        fontSize: 17,
        color: color.second
    }

})