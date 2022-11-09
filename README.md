# @stackbit/storybook-addon
A Storybook add-on that lets you generate Stackbit models and presets from your components and stories, to add to your Stackbit project. 

This is useful for scaffolding model definitions and presets in a new project, based on your existing stories. The generated models will usually not include all relevant fields - but can serve as a good basis to improve upon later.

https://user-images.githubusercontent.com/2673881/200615123-d7277ed1-85c2-4aa3-b9e3-688be2874662.mp4

## Installation

Install the package:

```bash
npm install -D @stackbit/storybook-addon
```

Then, include the add-on in your Storybook config file (`.storybook/main.js`):

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

## Usage

Once installed, re-launch Storybook you will see a _Stackbit_ tab next to the standard _Controls_ and _Actions_ tab, through which you can download the model file and presets for the current story. 

Please note the displayed list of which fields are of a supported type and included in the model. For others, you can then define these model fields yourself (see [Definining Models](https://docs.stackbit.com/reference/defining-models)).

If you have any questions, please contact us through any of the [support channels](https://www.stackbit.com/support), e.g. on [Discord](https://discord.gg/HUNhjVkznH).
