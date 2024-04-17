# Monokai Code Editor

Monokai Code Editor is a web-based code editor built using Monaco Editor, React, Chakra UI, Tailwind CSS, and integrates with the Piston API for managing packages and executing user-defined code.

## Overview

Monokai Code Editor provides a sleek and customizable interface for writing and executing code snippets in various programming languages. Leveraging the power of Monaco Editor, users can enjoy features like syntax highlighting, code autocompletion, and code formatting.

## Features

- **Syntax Highlighting**: Utilizes the Monokai color scheme for visually appealing syntax highlighting.
- **React Integration**: Built with React to provide a smooth and interactive user experience.
- **Chakra UI Components**: Utilizes Chakra UI components for building responsive and accessible user interfaces.
- **Tailwind CSS**: Enhances styling using Tailwind CSS utility classes for rapid development.
- **Piston API Integration**: Interacts with the Piston API to manage packages and execute user-defined code seamlessly.

## Getting Started

Follow these steps to set up and run the Monokai Code Editor locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/David-mwas/monokai-code-editor.git
   ```

2. Install dependencies:
   ```bash
   cd monokai-code-editor
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev

   ```

4. Open your browser and navigate to `http://localhost:3000` to view the Monokai Code Editor.

## Usage

**_Writing Code:_** Start writing your code in the editor pane using your preferred programming language.

**_Executing Code:_** Click the "Run" button to execute the code using the Piston API.

**_Viewing Output:_** The output of the executed code will be displayed below the editor pane.

## API Integration

**_Monokai Code Editor_** integrates with the Piston API for managing packages and executing user-defined code. The API endpoints are exposed on port `2000 at /api/v2/`. All inputs are validated, and appropriate error responses are handled.

For more information about the Piston API, refer to the [official documentation](https://piston.readthedocs.io/en/latest/api-v2/)

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
