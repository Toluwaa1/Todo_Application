import React from 'react';

import {View, StyleSheet} from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {AuthContext} from '../Components/Context';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const {signOut} = React.useContext(AuthContext);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../assets/profile.jpg')}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.Title}>Adewuyi Alawusa</Title>
                <Caption style={styles.caption}>@Toluwa_A1</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              label="Home"
              icon={(color, size) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
            />

            <DrawerItem
              onPress={() => {
                props.navigation.navigate('Todo');
              }}
              label="Todo"
              icon={(color, size) => (
                <Icon name="calendar-outline" color={color} size={size} />
              )}
            />

            <DrawerItem
              onPress={() => {
                props.navigation.navigate('About');
              }}
              label="About"
              icon={(color, size) => (
                <Icon name="developer-board" color={color} size={size} />
              )}
            />
            <DrawerItem
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
              label="Settings"
              icon={(color, size) => (
                <Icon name="cogs" color={color} size={size} />
              )}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text> Dark Mode</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          onPress={() => {
            signOut();
          }}
          label="Log Out"
          icon={(color, size) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontsize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontsize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#89CFF0',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
