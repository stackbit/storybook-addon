# @stackbit/storybook-addon
A storybook addons that lets you generate Stackbit models and presets from your components and stories.

## Getting Started

### Installation

```bash
npm install -D @stackbit/storybook-addon
```

### Configuration
Include the addon to your Storybook config at `.storybook/main.js`:

```javascript
// .storybook/main.js

module.exports = {
    stories: [
        // ...
    ],
	addons: [
        '@stackbit/storybook-addon'
    ],
};
```