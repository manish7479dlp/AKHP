import { Dimensions, FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../constant/color';
import { getAllUser } from '../Helper/api';
import { useSelector } from 'react-redux';

var { width, height } = Dimensions.get('window');


const MembersList = ({ mb }) => {
    const [members, setMembers] = useState()
    const [routine, setRoutine] = useState();
    const [refreshing, setRefreshing] = React.useState(false);
    const userData = useSelector((state) => state.user.data)

    useEffect(() => {
        const getMembers = async () => {
            try {
                const token = userData.token
                const response = await getAllUser(token);
                // console.log(response.data.length)
                setMembers(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        getMembers()
    }, [refreshing])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);


    return (
        <View>
            <Text style={styles.title}>Total Active Members : <Text style={{ color: color.second }}>{members?.length}</Text></Text>

            <Title />
            <Details mb={mb} onRefresh={onRefresh} members={members} userData={userData} refreshing={refreshing} setRefreshing={setRefreshing} />
        </View>

    )
}

const Title = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleName}>Sr.No</Text>
            <Text style={styles.titleName}>Name</Text>
            <Text style={styles.titleName}>Year</Text>
            <Text style={styles.titleName}>Payment</Text>

        </View>
    )
}

const Details = ({ mb, members, onRefresh, refreshing }) => {


    return (
        <View style={{ marginBottom: mb }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={members}
                renderItem={({ item }) => {
                    var bgColor = item.idx % 2 === 1 ? color.background : "white"
                    return (
                        <View style={{ backgroundColor: bgColor }} >
                            <View style={styles.dataContainer} >
                                <Text style={styles.data}>{item.idx + 1}</Text>
                                <Text style={styles.data}>{item.firstName}</Text>
                                <Text style={styles.data}>{item.year}</Text>
                                <Text style={styles.data}>{item.advance}</Text>

                            </View>
                        </View>
                    )
                }}

                keyExtractor={item => item.idx}

                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>


    )
}

export default MembersList

const styles = StyleSheet.create({

    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 10
    },
    titleName: {
        fontWeight: "600",
        fontSize: 16

    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
    },
    data: {
        fontSize: 16,
        color: color.second,
        fontWeight: '700',
        width: 100,
    },
    title: {
        fontWeight: "600",
        color: color.first,
        fontSize: 22,
        marginLeft: 12,
        marginVertical: 5
    }

})