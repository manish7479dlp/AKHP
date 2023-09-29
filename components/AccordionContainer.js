import React, { Component } from 'react';
import {
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import color from '../constant/color';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const BACON_IPSUM =
    'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
    {
        title: '17/08/2023',
        content: BACON_IPSUM,
    },
    {
        title: '19/08/2003',
        content: BACON_IPSUM,
    },
    {
        title: '21/08/2003',
        content: BACON_IPSUM,
    },
    {
        title: '25/08/2003',
        content: BACON_IPSUM,
    },
    {
        title: '29/08/2003',
        content: BACON_IPSUM,
    },
];

export default class AccordionContainer extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
    };

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    setSections = (sections) => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={400}
                style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <Text style={styles.headerText}>{section.title} </Text>
                <Text style={{ color: color.second, fontWeight: "600", fontSize: 18 }}> <FontAwesome name="rupee" size={17} color={color.first} /> {56}</Text>


            </Animatable.View>
        );
    };

    renderContent(section, _, isActive) {
        return (
            <Animatable.View
                duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >

                <Item />
            </Animatable.View>
        );
    }

    render() {
        const { multipleSelect, activeSections } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{}}>
                    <Accordion
                        align="bottom"
                        activeSections={activeSections}
                        sections={CONTENT}
                        touchableComponent={TouchableOpacity}
                        expandMultiple={multipleSelect}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        duration={400}
                        onChange={this.setSections}
                        renderAsFlatList={false}
                    />
                </ScrollView>
            </View>
        );
    }
}


const Item = () => {
    return (
        <View>
            <View style={styles.itemHeader}>
                <Text style={styles.ItemHeaderText}>Items</Text>
                <Text style={styles.ItemHeaderText}>Quantity</Text>
                <Text style={styles.ItemHeaderText}>Rupees</Text>

            </View>

            <ItemContent item={"Rice"} quantity={"25kg"} rupees={1375} />
            <ItemContent item={"Wheat"} quantity={"25kg"} rupees={1175} />
            <ItemContent item={"Mustard Oil"} quantity={"1L"} rupees={375} />
            <ItemContent item={"Wheat"} quantity={"25kg"} rupees={1175} />




        </View>


    )
}

const ItemContent = ({ item, quantity, rupees }) => {
    return (
        <View style={styles.itemContent}>
            <Text style={styles.itemContentText}>{item}</Text>
            <Text style={styles.itemContentText}>{quantity}</Text>
            <Text style={styles.itemContentText}>{rupees}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,1)',


    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: color.first,
    },
    content: {
        padding: 10
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',

    },
    inactive: {
        // backgroundColor: 'rgba(245,252,255,1)',
    },



    // item style
    itemHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5
    },
    ItemHeaderText: {
        width: 100,

        fontSize: 17,
        color: color.first,
        fontWeight: "600"
    },

    // item content
    itemContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 3,
        // backgroundColor: "red"
    },
    itemContentText: {
        width: 100,
        fontSize: 14,
        color: color.second,
        fontWeight: "500",
    }

});