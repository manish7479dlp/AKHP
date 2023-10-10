import { Dimensions, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import AccordionContainer from '../components/AccordionContainer'
import { FontAwesome } from '@expo/vector-icons';

import color from '../constant/color'
import { useState } from 'react'
import { getAllOutExpences } from '../Helper/api'
import { useSelector } from 'react-redux'
import Toast from '../components/Toast'
import { getFilter } from "../Helper/utils"
import { useEffect } from 'react'
const { height, width } = Dimensions.get('screen')
import { Fontisto } from '@expo/vector-icons';

const Expences = () => {
    const [outExpences, setOutExpences] = useState()
    const userData = useSelector((state) => state.user.data)
    const [refreshing, setRefreshing] = useState(false)
    const token = userData.token

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    let DATE = new Array(date + 1)
    let i = 0
    for (let d = date; d >= 1; d--) {
        var day = d
        if (d <= 9) {
            day = "0" + d
        }
        DATE[i] = `${year}-${month}-${day}`
        i++
    }

    useEffect(() => {

        const outExpences = async () => {
            try {
                const respone = await getAllOutExpences(token)
                if (respone?.status) {
                    setOutExpences(respone)
                } else {
                    Toast(respone?.message)
                }
            } catch (error) {
                console.log(error)
            }
        }

        outExpences()


    }, [refreshing]);



    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <UserData />
            <TotalExpanses />
            {/* <AccordionContainer outExpences={outExpences?.data} /> */}
            <ScrollView
                showsVerticalScrollIndicator={false}

                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {/* <Text>{DATE.length} </Text> */}
                {
                    DATE?.map((date, idx) => {
                        return (

                            <ExpencesRecipt date={date} outExpences={outExpences} key={idx} />
                        )
                    })



                }

            </ScrollView>

        </SafeAreaView>
    )
}

export default Expences

const TotalExpanses = () => {
    return (
        <View style={styles.expansesTotalContainer}>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 17 }}>Monthly Expanses</Text>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}> <FontAwesome name="rupee" size={17} color="white" /> 1456</Text>
        </View>
    )
}

const ExpencesRecipt = ({ date, outExpences }) => {


    const filters = {
        "created_at": date
    }
    //each day Expances
    const expancesOnDay = outExpences?.data?.filter(getFilter(filters))

    // expanse on Grocery shop
    const expancesOnGroceryShop = expancesOnDay?.filter(getFilter({ "recipient": "Grocery Shop" }))

    // expanse on Vegetable shop
    const expancesOnVegetableShop = expancesOnDay?.filter(getFilter({ "recipient": "Vegetable Shop" }))

    // expanse on Chicken shop
    const expancesOnChickenShop = expancesOnDay?.filter(getFilter({ "recipient": "Chicken Shop" }))

    // expanse on Fish shop
    const expancesOnFishShop = expancesOnDay?.filter(getFilter({ "recipient": "Fish Shop" }))

    // expanse on Fish shop
    const expancesOnGas = expancesOnDay?.filter(getFilter({ "recipient": "Gas" }))

    // expanse on Other shop
    const expancesOnOtherShop = expancesOnDay?.filter(getFilter({ "recipient": "Others" }))


    if (expancesOnDay?.length === 0) {
        return
    }

    date = date.split("-")

    return (

        <View style={styles.reciptContainer}>
            <Text style={styles.date}><Fontisto name="date" size={18} color={color.second} /> {`${date[2]}-${date[1]}-${date[0]}`}</Text>

            {
                expancesOnGroceryShop?.length > 0 && <ShopNameWithItems expences={expancesOnGroceryShop} shopName={"Grocery Shop"} />
            }

            {
                expancesOnVegetableShop?.length > 0 && <ShopNameWithItems expences={expancesOnVegetableShop} shopName={"Vegetable Shop"} />
            }

            {
                expancesOnChickenShop?.length > 0 && <ShopNameWithItems expences={expancesOnChickenShop} shopName={"Chicken Shop"} />
            }

            {
                expancesOnFishShop?.length > 0 && <ShopNameWithItems expences={expancesOnFishShop} shopName={"Fish Shop"} />
            }

            {
                expancesOnOtherShop?.length > 0 && <ShopNameWithItems expences={expancesOnOtherShop} shopName={"Other Shop"} />
            }

            {
                expancesOnGas?.length > 0 && <ShopNameWithItems expences={expancesOnGas} shopName={"Other Shop"} />
            }


        </View>
    )
}

const ShopNameWithItems = ({ shopName, expences }) => {
    return (
        <View>
            <Text style={styles.shopName}>{shopName}</Text>
            <View style={styles.content}>


                <View style={styles.itemHeader}>
                    <Text style={styles.ItemHeaderText}>Items</Text>
                    <Text style={styles.ItemHeaderText}>Quantity</Text>
                    <Text style={styles.ItemHeaderText}>Rupees</Text>

                </View>

                {
                    expences.map((data, idx) => {
                        return (
                            <ItemContent idx={idx} item={data?.item} quantity={data?.quantity} rupees={data?.amount} key={idx} />

                        )
                    })
                }
            </View>
        </View>
    )
}

const ItemContent = ({ item, quantity, rupees, idx }) => {

    const bg = idx % 2 === 0 ? color.background : 'white'
    return (
        <View style={[styles.itemContent, { backgroundColor: bg }]}>
            <Text style={styles.itemContentText}>{item}</Text>
            <Text style={styles.itemContentText}>{quantity}</Text>
            <Text style={styles.itemContentText}>{rupees}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height * .94
    },
    expansesTotalContainer: {
        backgroundColor: color.second,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    reciptContainer: {
        padding: 20,
        backgroundColor: 'white',
        // borderWidth: 2,
        margin: 10,
        borderRadius: 10
    },
    date: {
        fontWeight: '700',
        fontSize: 18,
        color: 'rgb(249, 72, 72)',
        // padding: 10
    },

    // recipt content
    content: {
        margin: 5,
        // borderWidth: 1
    },
    // item style
    itemHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    ItemHeaderText: {
        // width: 100,
        fontSize: 16,
        color: color.first,
        fontWeight: "500"
    },

    // item content
    itemContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
        // backgroundColor: "red"
    },
    itemContentText: {
        // width: 100,
        fontSize: 14,
        color: color.second,
        fontWeight: "500",
    },
    shopName: {
        fontSize: 18,
        fontWeight: '600',
        color: color.third,
        textAlign: 'center',
        // padding: 8
        marginTop: 10
    }



})