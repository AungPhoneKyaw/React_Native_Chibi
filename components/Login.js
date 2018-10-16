import React from "react";
import {View, Text, Button} from "react-native";

export default ({history}) => (
    <View>
        <Button title="Login" onPress={() => history.push("/main")}></Button>
        {/* <Button title="Logout" onPress={() => history.push("/test")}></Button> */}
    </View>
);