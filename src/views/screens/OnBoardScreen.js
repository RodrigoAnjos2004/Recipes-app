import React from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import Background from '../../components/Background'
import Logo from '../../components/Logo'

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: 'https://a-static.mlcdn.com.br/1500x1500/caneca-irish-coffee-pavillion-240ml-haus-concept-101-x-74-x-145-cm/brinoxshop/57716003/e19d14959d9d578a02962bc6965f06f5.jpg',
    // cornerLabelColor: '#FFD300',
    // cornerLabelText: 'GOTY',
  },
  {
    coverImageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mrHPzxaBu28fTfsncTMIp4U3WfuMbi55oOjtbs5qEpXnjPauQfG17ba4XqRtbH8Yt0k&usqp=CAU',
    // cornerLabelColor: '#0080ff',
    // cornerLabelText: 'NEW',
  },
  {
    coverImageUri: 'https://us.123rf.com/450wm/merc67/merc671610/merc67161000575/65340442-irish-coffee-on-dark-background-with-space-for-menu.jpg?ver=6',
    // cornerLabelColor: '#2ECC40',
    // cornerLabelText: '-75%',
  },
  {
    coverImageUri: 'https://t3.ftcdn.net/jpg/01/24/64/46/360_F_124644641_4dFG3fdQTcZTzKVubbgx7wBcgQkQIA6D.jpg',
    // cornerLabelColor: '#2ECC40',
    // cornerLabelText: '-20%',
  },
];

const OnBoardScreen = ({navigation}) => {
  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.cardContainer}
    >
      <View
        style={styles.cardWrapper}
      >
        <Image
          style={styles.card}
          source={{ uri: data.coverImageUri }}
        />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>
            { data.cornerLabelText }
          </Text>
        </View>
      </View>
    </View>
  );

  return (    
    <Background>
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
       <Header>CoffeSnack</Header>
      <Paragraph>
       Um app para quem quer descobrir o verdadeiro sabor da vida
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('StartScreen')}
      >
        Venha conhecer mais sobre!
      </Button>
    </View>
    </Background>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});


export default OnBoardScreen;
