import { addons, types } from '@storybook/addons';
import { Panel } from '../Panel';

addons.register('STACKBIT_ADDON', () => {  
  addons.add('STACKBIT_PANEL', {
    type: types.PANEL,
    title: 'Stackbit',
    match: ({ viewMode }) => viewMode === 'story',
    render: Panel,
  });
});
