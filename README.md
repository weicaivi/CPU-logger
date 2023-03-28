# CPU-logger

This CPU-logger will log the number of CPUs being used by any installed virtual machines whenever there is a change to the virtual machine configuration. This extension needs to be tested with a virtual machine to ensure it is working correctly.

## How to run the logger:

  1. download the `manifest.json` and `background.js` into the same folder.
  
  2. Open Google Chrome and navigate to chrome://extensions.
  
  3. Enable developer mode by clicking the toggle switch in the top right corner of the screen.
  
  4. Click the "Load unpacked" button and select your extension folder.
  
  5. Click the "details" button on the extension
  
  6. Under "Inspect View", click "background page"
  
  7. The extension should now be loaded and the number of CPUs should be logged in the background console.
