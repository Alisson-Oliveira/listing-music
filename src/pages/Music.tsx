import React, { useEffect, useState } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { _TIME } from '../utils/utils';

export default function Music() {
//  const playbackObject = new Audio.Sound();

  const [playbackInstance, setPlaybackInstance] = useState<Audio.Sound>();
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus>();
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState('00:00:00');

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
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
  }

  const _onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setShouldPlay(status.shouldPlay);
      setIsPlaying(status.isPlaying);

      const timerConvert = _TIME(status.positionMillis);
      
      setTimer(timerConvert);
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  async function play() {
    newMusic(true);
  } 

  async function pause() {  
    try {
      if (playbackInstance) {
        if (isPlaying) {
          setIsPlaying(false);
          await playbackInstance.pauseAsync();
        } else {
          setIsPlaying(true);
          await playbackInstance.playAsync();
        }
      }
    } catch (error) {
      // An error occurred!
    }
  }

  async function replay() {
    try {
      if (playbackInstance) {
        await playbackInstance.replayAsync();
      }
    } catch (error) {
      // An error occurred!
    }
  } 

  async function stop() {
    try {
      if (playbackInstance) {
        await playbackInstance.unloadAsync();
      }
    } catch (error) {
      // An error occurred!
    }
  }

  return (
    <View style={styles.container}>
      <RectButton style={styles.containerButton} onPress={play}>
        <Text>Play</Text>
      </RectButton>

      <Text>{timer}</Text>

      <RectButton style={styles.containerButton} onPress={pause}>
        <Text>Pause</Text>
      </RectButton>

      <RectButton style={styles.containerButton} onPress={replay}>
        <Text>Replay</Text>
      </RectButton>

      <RectButton style={styles.containerButton} onPress={stop}>
        <Text>Stop</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerButton: {
    height: 38,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#ddd',
  }
});