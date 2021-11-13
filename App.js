// In App.js in a new project

import React, { useState } from "react";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import CombineNavigators from "./navigation";
import store from "./store.js";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {
          console.log(error);
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <CombineNavigators />
    </Provider>
  );
}

export default App;
