import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserData from "../components/UserData";
import Accordion from "../components/Accordion";

import color from "../constant/color";
import { useState } from "react";
import { getAllOutExpences, getSummary } from "../Helper/api";
import { useSelector } from "react-redux";
import Toast from "../components/Toast";
import { useEffect } from "react";
const { height, width } = Dimensions.get("screen");

const Expences = () => {
  const [outExpences, setOutExpences] = useState([]);
  const [summary, setSummary] = useState({});
  const userData = useSelector((state) => state.user.data);
  const [refreshing, setRefreshing] = useState(false);
  const token = userData.token;

  useEffect(() => {
    const outExpences = async () => {
      try {
        const respone = await getAllOutExpences(token);
        if (respone?.status) {
          setOutExpences(respone?.data);
        } else {
          Toast(respone?.message);
        }
        const resp = await getSummary(token);
        if (resp?.status) {
          setSummary(resp?.data);
        } else {
          Toast(resp?.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    outExpences();
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TotalExpanses
          label={"Total Money Recieved"}
          amount={summary.totalMoneyReceived}
        />
        <TotalExpanses
          label={"Monthly Expenses"}
          amount={summary.totalMoneySpent}
        />
        <TotalExpanses label={"Money Left"} amount={summary.netMoney} />
        <TotalExpanses label={"Money Due"} amount={summary.totalMoneyDue} />
        {/* Accordion */}
        <Accordion data={outExpences} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Expences;

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

const styles = StyleSheet.create({
  container: {
    height: height * 0.94,
  },
  expansesTotalContainer: {
    backgroundColor: color.second,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
