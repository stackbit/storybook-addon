import React, { useCallback, useState } from 'react';
import { CodeSnippets, Highlight, ButtonToggle } from '@storybook/design-system';

const Snippets = (props) => {
    const { models, presets } = props;

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleTabChange = (index) => setSelectedTabIndex(index);

    const renderModels = useCallback(() => {
        return (<Highlight language="json">{models}</Highlight>)
    }, [models]);
    
    const renderPresets = useCallback(() => {
        return (<Highlight language="json">{JSON.stringify(presets, null, 2)}</Highlight>)
    }, [presets]);

    return (
        <div>
            <ButtonToggle
                titles={[
                    { title: 'Model' },
                    // { title: `Presets  (${presets.presets?.length})` },
                ]}
                appearance="tab"
                selectedIndex={selectedTabIndex}
                onSelectIndex={handleTabChange}
            />
            {selectedTabIndex === 0 && (<CodeSnippets
                snippets={[
                    {
                        id: "model",
                        renderTabLabel: () => "Model",
                        Snippet: renderModels,
                    },
                ]}
            />
            )}
            {/* {selectedTabIndex === 1 && (
                <CodeSnippets
                    snippets={[

                        {
                            id: "presets",
                            renderTabLabel: () => "Presets",
                            Snippet: renderPresets,
                        }
                    ]}
                />
            )} */}
        </div>
    )
}

export default Snippets;
