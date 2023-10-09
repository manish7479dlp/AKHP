import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import Skelton from "../components/Skelton"

import { useState } from 'react'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'
import color from '../constant/color'

import { SelectList } from 'react-native-dropdown-select-list'
import { addAdvance, spendMoney } from '../Helper/api'
import Toast from "../components/Toast"
import { useSelector } from 'react-redux'


const { width, height } = Dimensions.get("screen")

const DATA = ["Spend", "Advance"]

const Transaction = () => {
    const [spend, setSpend] = useState(false)
    const userData = useSelector((state) => state.user.data)
    const token = userData.token


    return (
        <Skelton>
            <View style={styles.container}>

                {/* //spend or advance money show button */}
                <CustomSwitch label={"Spend"} value={spend} setValue={setSpend} />

                {/* render (spend and Advance Money component) on the basis of upper switch */}
                {spend ? <Spend token={token} /> : <AdvanceMoney token={token} />}


            </View>
        </Skelton>
    )
}
const CustomSwitch = ({ value, setValue, label }) => {
    return (
        <View style={{ width: width * .9, paddingLeft: 8 }}>
            <View style={styles.admin} >
                <Text style={[styles.label, styles.adminLabel]}>
                    {label}
                </Text>
                <Switch
                    value={value}
                    onValueChange={(value) => setValue(value)}
                    trackColor={{ false: color.third, true: color.layer }}
                    thumbColor={value ? color.second : '#f4f3f4'}

                />

            </View>
        </View>
    )
}

const AdvanceMoney = ({ token }) => {
    const [mobile, setMobile] = useState()
    const [advance, setAdvance] = useState()
    const [description, setDescription] = useState()
    const [loading, setLoading] = useState()

    const setStateEmpty = () => {
        setMobile()
        setAdvance()
        setDescription()
    }

    const handleAdvance = async () => {
        try {
            setLoading(true)
            const response = await addAdvance({ mobile, advance, description, token })
            if (response?.status) {
                setStateEmpty()
            }
            Toast(response?.message)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <View style={styles.advanceContainer}>


            <Text style={styles.advanceTitle}>Advance Money</Text>
            <InputField label={"Mobile Number"} keyBoardType='numeric' value={mobile} setChangeValue={setMobile} />
            <InputField label={"Advance Money"} keyBoardType='numeric' value={advance} setChangeValue={setAdvance} />
            <InputField label={"Description"} value={description} setChangeValue={setDescription} />

            <CustomButton btnLabel={"Add Advance"} btnClick={handleAdvance} loading={loading} />

        </View>
    )
}

const Spend = ({ token }) => {
    const [isCash, setIsCash] = useState(false)
    const [itemName, setItemName] = useState()
    const [quantity, setQuantity] = useState()
    const [amount, setAmount] = useState()
    const [loading, setLoading] = useState()
    const [selected, setSelected] = useState("");
    const [description, setDescription] = useState()

    const data = [
        { key: '1', value: 'Vegetable Shop' },
        { key: '2', value: 'Grocery Shop' },
        { key: '3', value: 'Chicken Shop' },
        { key: '4', value: 'Fish Shop' },
        { key: '5', value: 'Others' },

    ]

    const setStateEmpty = () => {
        setIsCash()
        setItemName()
        setQuantity()
        setAmount()
        setDescription()
    }


    const handleSpend = async () => {
        try {
            setLoading(true)
            const recipient = selected
            const item = itemName
            const response = await spendMoney({ amount, description, token, recipient, quantity, item, isCash })
            if (response?.status) {
                setStateEmpty()
            }

            Toast(response?.message)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }


    return (
        <View style={styles.spendContainer}>
            <Text style={styles.advanceTitle}>Spend Money</Text>

            <View style={styles.recipientContainer}>
                <Text style={styles.recipientLabel}>Recipient</Text>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    boxStyles={{ width: width * .85 }}
                />
            </View>
            <InputField label={"Item Name"} value={itemName} setChangeValue={setItemName} />
            <InputField label={"Quantity"} value={quantity} setChangeValue={setQuantity} />
            <InputField label={"Amount"} keyBoardType='numeric' value={amount} setChangeValue={setAmount} />

            {selected === 'Others' && <InputField label={"Description"} value={description} setChangeValue={setDescription} />}

            <CustomSwitch label={"Cash"} value={isCash} setValue={setIsCash} />
            <CustomButton loading={loading} btnLabel={"Save"} btnClick={handleSpend} />
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({
    admin: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    adminLabel: {
        marginRight: 5,
        fontWeight: '500',
        fontSize: 23
    },
    container: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    advanceContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    advanceTitle: {
        fontWeight: '700',
        fontSize: 35,
        color: color.second,
        marginBottom: 5
    },

    // spent style

    spendContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    recipientContainer: {
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 5
    },
    recipientLabel: {
        fontWeight: '500',
        marginBottom: 10,
        fontSize: 18
    },
    dropdown: {
        width: width
    }

})