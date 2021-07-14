import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

export default function SwitchButton({onToggle}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onToggle();
  };

  return (
    <Switch
      trackColor={{false: 'gray', true: 'rgba(255,193,4,0.6)'}}
      thumbColor={isEnabled ? '#FFC104' : '#f4f3f4'}
      ios_backgroundColor="gray"
      onValueChange={toggleSwitch}
      value={isEnabled}
      // style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
    />
  );
}
