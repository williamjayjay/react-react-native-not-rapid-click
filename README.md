
### `REACT REACT NATIVE NOT RAPID CLICK`

```markdown
# react-react-native-not-rapid-click

`react-react-native-not-rapid-click` is a custom hook designed to prevent rapid function executions by debouncing user actions like button clicks. It helps to avoid triggering the same action multiple times in quick succession, improving performance and user experience in both React and React Native applications.

## Features

- Prevents rapid clicks or function executions by applying a debounce mechanism.
  
- Works seamlessly in both React (web) and React Native environments.

- Customizable debounce delay to suit different use cases.

## Installation

To use `react-react-native-not-rapid-click`, simply install it via npm or yarn:

```

### Using npm:
```bash
npm install react-react-native-not-rapid-click
```

### Using Yarn:
```bash
yarn add react-react-native-not-rapid-click
```

### Using Bun:
```bash
bun add react-react-native-not-rapid-click
```

## Usage

Once installed, you can import and use the `useNotRapidClick` hook in your React or React Native components.

### Example:

#### React Native (Mobile Example):

```javascript
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';  // React Native components
import { useNotRapidClick } from 'react-react-native-not-rapid-click';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Function to be debounced
  const handleClick = () => {
    setCount(count + 1);
    console.log('Button clicked', count + 1);
  };

  // Use the custom hook to debounce the function with a 1000ms delay
  const debouncedClick = useNotRapidClick(handleClick, 1000);

  return (
    <View>
      <Button title="Click Me" onPress={debouncedClick} />
      <Text>Button clicked {count} times</Text>
    </View>
  );
};

export default ExampleComponent;
```

In this React Native example, we are debouncing a button click with a delay of 1000ms (1 second). This prevents the function from being called multiple times in quick succession.

#### React (Web Example):

```javascript
import React, { useState } from 'react';
import { useNotRapidClick } from 'react-react-native-not-rapid-click';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Function to be debounced
  const handleClick = () => {
    setCount(count + 1);
    console.log('Button clicked', count + 1);
  };

  // Use the custom hook to debounce the function with a 1000ms delay
  const debouncedClick = useNotRapidClick(handleClick, 1000);

  return (
    <div>
      <button onClick={debouncedClick}>Click Me</button>
      <p>Button clicked {count} times</p>
    </div>
  );
};

export default ExampleComponent;
```

This example demonstrates how to use the hook in a React web application. The button click will trigger the debounced `handleClick` function, but only once every 1000ms.

## How It Works

- `useNotRapidClick(fn, delay)` takes two arguments:
  - `fn`: The function you want to debounce.
  - `delay`: The delay (in milliseconds) for the debounce mechanism, which controls how frequently the function can be executed.

- When the function is triggered (e.g., by a button click), it will only execute if the specified delay has passed since the last execution. This prevents multiple rapid executions of the same function.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
