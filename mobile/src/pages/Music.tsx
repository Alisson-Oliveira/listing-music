import React, { useEffect, useState } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { TIMER } from '../utils/timer';
import { POINTER, POINTER_FULL } from '../utils/pointer';

import { Feather } from '@expo/vector-icons';

import isEmputImage from '../images/is_empty_image.png';

export default function Music() {
  const [playbackInstance, setPlaybackInstance] = useState<Audio.Sound>();
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus>();

  const [shouldPlay, setShouldPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCursor, setIsCursor] = useState(false);

  const [cursor, setCursor] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [pointerFull, setPointerFull] = useState(0);

  const [timer, setTimer] = useState('00:00:00');
  const [fullTimer, setFullTimer] = useState('00:00:00');
  
  useEffect(() => {
    setPointer(Dimensions.get('window').width - 6)

    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });
  }, []);

  async function newMusic(shouldPlay: boolean) {
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
    }

    const source = require('../sounds/test_1.mpeg');

    const initialStatus = { shouldPlay };

    const { sound, status } = await Audio.Sound.createAsync(
      source,
      initialStatus,
      _onPlaybackStatusUpdate
    );

    setPlaybackInstance(sound);
    setPlaybackStatus(status);

    setIsCursor(true);
  };

  const _onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setShouldPlay(status.shouldPlay);
      setIsPlaying(status.isPlaying);

      if (status.durationMillis) {
        const responsePointer = POINTER(status.durationMillis);
        const responsePointerFull = POINTER_FULL(responsePointer);

        setFullTimer(responsePointer);
        setPointerFull(responsePointerFull);
      }

      const timerConvert = TIMER(status.positionMillis);
      const updateCursor = POINTER_FULL(timerConvert);

      setCursor(updateCursor);
      setTimer(timerConvert);
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  async function onPlayPause() {  
    try {
      if (playbackInstance) {
        if (isPlaying) {
          setIsPlaying(false);
          await playbackInstance.pauseAsync();
        } else {        
          setIsPlaying(true);
          await playbackInstance.playAsync();
        }
      } else {
        newMusic(true);
      }
    } catch (error) {
      console.log(`FATAL PLAYER ERROR: ${error}`);
    }
  };

  async function stop() {
    try {
      if (playbackInstance) {
        await playbackInstance.unloadAsync();
        setPlaybackInstance(undefined);
        setFullTimer('00:00:00');
        setTimer('00:00:00');
        setIsPlaying(false);
        setIsCursor(false);
      }
    } catch (error) {
      // An error occurred!
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerMusic}>
        <Image source={isEmputImage} style={styles.image}/>
        <View style={styles.containerCounter}>
          {
            !isCursor ? (
              <View style={styles.pointer} />
            ) : (
              <View style={[styles.pointer, { 
                  left: (pointer / pointerFull) * cursor }]
                }
              />
            ) 
          }
          {
            !isCursor ? (
              <View style={styles.counter}/>
            ) : (
              <>
                <View style={styles.counter}/>
                <View style={[styles.counter, {
                    position: 'absolute',
                    width: (pointer / pointerFull) * cursor, 
                    borderColor: '#6F1898'}]
                  }
                />
              </>
            )
          }
        </View>
      </View>
      <View style={styles.containerOptions}>
        <View style={styles.containerTimer}>
          <Text style={styles.time}>{timer}</Text>
          <Text style={styles.time}>{fullTimer}</Text>
        </View>
        <View style={styles.containerButtons}>
          <RectButton style={styles.buttons}>
            <Feather name="skip-back" size={28} color="#FFFFFF"/>
          </RectButton>
          <RectButton style={[styles.buttons, styles.center]} onPress={onPlayPause}>
            {
              !isPlaying ? (
                <Feather name="play" size={38} color="#FFFFFF"/>
              ) : (
                <Feather name="pause" size={38} color="#FFFFFF"/>
              )
            }
          </RectButton>
          <RectButton style={styles.buttons} onPress={stop}>
            <Feather name="skip-forward" size={28} color="#FFFFFF"/>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerMusic: {
    width: '100%',
  },

  image: {
    height: 390,
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.75,
  },

  containerCounter: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  pointer: {
    left: -6,
    width: 12,    
    height: 12,
    zIndex: 1,
    marginBottom: -8,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },

  counter: {
    width: '100%',
    borderBottomWidth: 4,
    borderColor: '#555353',
  },

  containerOptions: {
    flex: 1,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerTimer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  time: {
    color: '#FFF',
  },

  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttons: {
    height: 64,
    width: 64,
    margin: 12,
    borderRadius: 100,
    elevation: 5,
    alignItems: 'center',    
    justifyContent: 'center',    
    backgroundColor: '#555353',
  },

  center: {
    height: 78,
    width: 78,
    marginHorizontal: 0,
    marginBottom: 48,
  },
});