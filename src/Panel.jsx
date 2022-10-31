import React, { useCallback, useMemo, useState, useEffect } from 'react';
// import YAML from 'yaml';
import FileSaver from 'file-saver';
import { useArgTypes, useStorybookState } from '@storybook/api';
import { AddonPanel, Button } from '@storybook/components';

import convertArgs from './utils/convertArgs';
import generateModel from './utils/generateModel';
import generatePresets from './utils/generatePresets';
import FieldsList from './components/FieldsList';
import Snippets from './components/Snippets';

import Logo from './components/Logo';

function getComponentData(state) {
  if (!state.storiesConfigured) {
    return {
      name: null,
      children: [],
    };
  }

  const { storyId, storiesHash } = state;

  const storyData = storiesHash[storyId];

  const parent = storiesHash[storyData?.parent] || {};

  const { name, children } = parent;

  return {
    name,
    children,
  };
}

export const Panel = (props) => {
  const [componentData, setComponentData] = useState({});
  const [{ model = {}, presets = [], convertedFields = [] }, setResult] = useState({});
  const argTypes = useArgTypes();
  const state = useStorybookState();

  useEffect(() => setComponentData(getComponentData(state)), [state]);
  const { name, children } = componentData;

  useEffect(() => {
      const convertedFields = convertArgs(argTypes);
      const model = generateModel(name, convertedFields.filter((field) => !field.unsuppported));
      const presets = generatePresets(name, convertedFields, children, state.storiesHash);

      setResult({
        convertedFields,
        model,
        presets,
      })
  }, [name, argTypes, state.storiesHash]);

  // const modelDataYAML = useMemo(() => YAML.stringify(model), [model]);
  const modelDataYAML = useMemo(() => JSON.stringify(model, null, 2), [model]);
  const presetsJSON = useMemo(() => JSON.stringify(presets, null, 2), [presets]);

  const handleModelOnExportClick = useCallback(() => {
    const blob = new Blob([modelDataYAML], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, `${name}.yaml`);
  }, [modelDataYAML]);

  const handlePresetsOnExportClick = useCallback(() => {
    const blob = new Blob([presetsJSON], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, `${name}.json`);
  }, [presetsJSON]);

  return (
    <AddonPanel {...props}>
      <div style={{
        padding: '2em 2em',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
      }}>
        <Logo />
        <Snippets models={modelDataYAML} presets={presets} />
        <div style={{ display: 'inline-flex', gap: 8 }}>
          <Button primary={true} small={true} onClick={handleModelOnExportClick}>Download Model</Button>
          <Button secondary={true} small={true} onClick={handlePresetsOnExportClick}>Download Presets</Button>
        </div>
        <FieldsList fields={convertedFields} />
      </div>
    </AddonPanel>
  );
};
