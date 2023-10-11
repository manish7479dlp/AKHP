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
              {Object.keys(groupData.recipients).map((recipient) => {
                const recipientData = groupData.recipients[recipient];

                return (
                  <View key={recipient} style={styles.subItemContainer}>
                    <Text style={styles.recipientText}>
                      {recipient}: ({recipientData.transactions.length}{" "}
                      transactions, Total: ₹ {recipientData.totalAmount})
                    </Text>

                    <View style={styles.transactionContainer}>
                      {recipientData.transactions.map((transaction) => (
                        <View
                          key={transaction._id}
                          style={styles.transactionItem}
                        >
                          <Text style={{ fontWeight: "bold" }}>
                            {transaction.item.trim()},{" "}
                            {transaction.quantity.trim()}, Price: ₹{" "}
                            {transaction.amount}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                );
              })}
            </Collapsible>
          </View>
        );
      })}
    </ScrollView>
  );
};

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
});

export default Accordion;
