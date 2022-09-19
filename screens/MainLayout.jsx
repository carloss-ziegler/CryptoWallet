import { View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, SIZES, icons } from "../constants";
import { IconTextButton } from "../components";
import { connect } from "react-redux";

const MainLayout = ({ children, isTradeModalVisible }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 260],
  });

  return (
    <View style={{ flex: 1 }}>
      {children}
      {/* Blur */}
      {isTradeModalVisible && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.transparentBlack,
          }}
          opacity={modalAnimatedValue}
        />
      )}

      {/* Modal */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: modalY,
          width: "100%",
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
        }}
      >
        <IconTextButton
          label="Transferir"
          icon={icons.send}
          onPress={() => console.log("Transferir")}
        />
        <IconTextButton
          label="Retirar"
          icon={icons.withdraw}
          onPress={() => console.log("Retirar")}
          containerStyle={{ marginTop: SIZES.base }}
        />
      </Animated.View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
