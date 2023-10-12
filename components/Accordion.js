import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Collapsible from "react-native-collapsible";

const Accordion = ({ data }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Group transactions by 'created_at' date
  const groupedData = (data || []).reduce((groups, transaction) => {
    // const createdAtDate = transaction.created_at.split("T")[0]; // Extract the date part
    const createdAtDate = new Date(transaction.created_at).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
    const recipient = transaction.recipient;

    if (!groups[createdAtDate]) {
      groups[createdAtDate] = {
        recipients: {},
        totalAmount: 0,
        tx: 0,
      };
    }

    if (!groups[createdAtDate].recipients[recipient]) {
      groups[createdAtDate].recipients[recipient] = {
        transactions: [],
        totalAmount: 0,
      };
    }

    groups[createdAtDate].recipients[recipient].transactions.push(transaction);
    groups[createdAtDate].tx += 1;
    groups[createdAtDate].recipients[recipient].totalAmount +=
      transaction.amount;
    groups[createdAtDate].totalAmount += transaction.amount;

    return groups;
  }, {});

  return (
    <ScrollView style={styles.container}>
      {Object.keys(groupedData).map((createdAtDate) => {
        const groupData = groupedData[createdAtDate];

        return (
          <View key={createdAtDate} style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() =>
                setActiveAccordion(
                  activeAccordion === createdAtDate ? null : createdAtDate
                )
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                {createdAtDate} ({groupData.tx} transactions, Total: ₹{" "}
                {groupData.totalAmount})
              </Text>
            </TouchableOpacity>

            <Collapsible collapsed={activeAccordion !== createdAtDate}>
              {Object.keys(groupData.recipients).map((recipient, idx) => {
                const recipientData = groupData.recipients[recipient];

                return (
                  <ShopNameWithItems shopName={recipient} expences={recipientData?.transactions} key={idx} />
                );
              })}



            </Collapsible>
          </View>
        );
      })}
    </ScrollView>
  );
};

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
    flex: 1,
    padding: 10,
    backgroundColor: "#F4F4F4",
  },
  itemContainer: {
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    elevation: 3,
  },
  subItemContainer: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#3498DB",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  recipientText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  transactionContainer: {
    padding: 10,
  },
  transactionItem: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
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
});

export default Accordion;
