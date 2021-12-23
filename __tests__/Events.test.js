import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import {
  GestureHandlerRootView,
  TapGestureHandler,
  PanGestureHandler,
  LongPressGestureHandler,
  FlingGestureHandler,
  RotationGestureHandler,
  PinchGestureHandler
} from 'react-native-gesture-handler';
import { 
  fireTapGestureHandler,
  firePanGestureHandler,
  fireLongPressGestureHandler,
  fireRotationGestureHandler,
  fireFlingGestureHandler,
  firePinchGestureHandler,
  ghTagEventMacro
} from '../src/jestUtils'
import { useAnimatedGestureHandler } from 'react-native-reanimated';

const mockEventFunctions = () => {
  return {
    begin: jest.fn(), 
    progress: jest.fn(), 
    end: jest.fn()
  };
}

const assertEventCalls = (eventFunctions, progressCount = 1) => {
  expect(eventFunctions.begin).toHaveBeenCalledTimes(1);
  expect(eventFunctions.progress).toHaveBeenCalledTimes(progressCount);
  expect(eventFunctions.end).toHaveBeenCalledTimes(1);
}

const App = (props) => {
  const eventHandler = useAnimatedGestureHandler({
    onStart: () => props.eventFunctions.begin(),
    onActive: () => props.eventFunctions.progress(),
    onEnd: () => props.eventFunctions.end()
  });

  return (
    <GestureHandlerRootView>
      <TapGestureHandler onHandlerStateChange={eventHandler}>
        <Text {...ghTagEventMacro()}>TapGestureHandlerTest</Text>
      </TapGestureHandler>

      <PanGestureHandler onHandlerStateChange={eventHandler}>
        <Text {...ghTagEventMacro()}>PanGestureHandlerTest</Text>
      </PanGestureHandler>

      <LongPressGestureHandler onHandlerStateChange={eventHandler}>
        <Text {...ghTagEventMacro()}>LongPressGestureHandlerTest</Text>
      </LongPressGestureHandler>
      
      <RotationGestureHandler onHandlerStateChange={eventHandler}>
        <Text {...ghTagEventMacro()}>RotationGestureHandlerTest</Text>
      </RotationGestureHandler>

      <FlingGestureHandler onHandlerStateChange={eventHandler}>
        <Text {...ghTagEventMacro()}>FlingGestureHandlerTest</Text>
      </FlingGestureHandler>

      <PinchGestureHandler onHandlerStateChange={eventHandler}>
        <Text {...ghTagEventMacro()}>PinchGestureHandlerTest</Text>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

test('test fireTapGestureHandler', () => {
  const eventFunctions = mockEventFunctions();
  const { getByText } = render(<App eventFunctions={eventFunctions} />);
  fireTapGestureHandler(getByText('TapGestureHandlerTest'));
  assertEventCalls(eventFunctions);
});

test('test firePanGestureHandler', () => {
  const eventFunctions = mockEventFunctions();
  const { getByText } = render(<App eventFunctions={eventFunctions} />);
  firePanGestureHandler(
    getByText('PanGestureHandlerTest'),
    { x: 1, y: 1 },
    [{ x: 2, y: 2 }, { x: 3, y: 3 }],
    { x: 4, y: 4 }
  );
  assertEventCalls(eventFunctions, 2);
});

test('test fireLongPressGestureHandler', () => {
  const eventFunctions = mockEventFunctions();
  const { getByText } = render(<App eventFunctions={eventFunctions} />);
  fireLongPressGestureHandler(
    getByText('LongPressGestureHandlerTest'),
    { x: 1, y: 1 },
  );
  assertEventCalls(eventFunctions);
});

test('test fireRotationGestureHandler', () => {
  const eventFunctions = mockEventFunctions();
  const { getByText } = render(<App eventFunctions={eventFunctions} />);
  fireRotationGestureHandler(
    getByText('RotationGestureHandlerTest'),
    { 
      rotation: 0,
      velocity: 0,
      anchorX: 0,
      anchorY: 0, 
    },
    { 
      rotation: 5,
      velocity: 5,
      anchorX: 5,
      anchorY: 5,
    },
    { 
      rotation: 0,
      velocity: 0,
      anchorX: 0,
      anchorY: 0,
    },
  );
  assertEventCalls(eventFunctions);
});

test('test fireFlingGestureHandler', () => {
  const eventFunctions = mockEventFunctions();
  const { getByText } = render(<App eventFunctions={eventFunctions} />);
  fireFlingGestureHandler(
    getByText('FlingGestureHandlerTest'),
    { x: 1, y: 1 },
  );
  assertEventCalls(eventFunctions);
});

test('test firePinchGestureHandler', () => {
  const eventFunctions = mockEventFunctions();
  const { getByText } = render(<App eventFunctions={eventFunctions} />);
  firePinchGestureHandler(
    getByText('PinchGestureHandlerTest'),
    { x: 1, y: 1 },
  );
  assertEventCalls(eventFunctions);
});
