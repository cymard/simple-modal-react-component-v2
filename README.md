# simple-modal-react-component-v2
A simple modal component in React

## Prerequisites
These are the dependencies along with their recommended versions:  
![Npm](https://img.shields.io/badge/Npm-v9.6.7-blue)
![Node](https://img.shields.io/badge/Node-v18.17.0-blue)
![React](https://img.shields.io/badge/React-v18.2.0-blue)
![React-DOM](https://img.shields.io/badge/React--DOM-v18.2.0-blue)
![Sass](https://img.shields.io/badge/Sass-v1.69.5-blue)

## Install
```bash
npm i simple-modal-react-component-v2
```

## Usage
```jsx
import React, { useState } from 'react';
import { Modal } from 'simple-modal-react-component-v2';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
          <button onClick={() => setIsOpen(true)}>Click to open</button>
          <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onExternalClick={() => setIsOpen(false)}
            >
                Modal message !
            </Modal>
        </div>
    );
}

export default App;
```

### Properties
- **isOpen** (boolean): State of the modal's visibility.
- **onClose** (function): Function to call to close the modal.
- **onExternalClick** (function): Function to call when clicking outside the modal or its close button when it is open.
- **children** (string): Text to display when the modal is open.

## License

MIT © [cymard](https://github.com/cymard)
