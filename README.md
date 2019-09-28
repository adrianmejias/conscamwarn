Console Scam Warn
=========

A small library that adds a console log with language warning about scams. This is not a serious project so please use at your own discretion.

## Installation

`npm i -D conscamwarn`

## Usage

```typescript
const { ConScamWarn } = require('conscamwarn');
(ConScamWarn.showMessage)();
```

**Output should be:** `This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a site feature or "hack" someone elses account, it is likely a scam and will give them access to your account.`

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
