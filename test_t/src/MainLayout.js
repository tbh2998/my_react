import React, {useCallback, useContext} from 'react'
import {  StyleSheet } from 'react-native'
import { View } from '@ant-design/react-native';
import { Navbar } from './components/Navbar'
import { THEME } from '../theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen/build/index";

SplashScreen.preventAutoHideAsync();

export const MainLayout = () => {
    const [fontsLoaded, fontError] = useFonts({
        'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
    });

  const { todoId } = useContext(ScreenContext)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
        return null;
  }

  return (
    <View style={styles.wrapper} onLayout={onLayoutRootView}>
      <Navbar title='Todo App!' />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
})
