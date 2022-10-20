function generatePresets(modelName, fields, variants, stories) {
    const availableFields = fields.filter((field) => !field.unsuppported).map((field) => field.name);
    return {
        model: modelName,
        presets: (variants || [])
            .map((name) => stories[name])
            .map(({ name, args }) => (
                //state.storiesHash
                {
                    label: name,
                    data: Object.entries(args || {}).reduce((acc, [key, value]) => {
                        if (availableFields.includes(key)) {
                            acc[key] = value;
                        }

                        return acc;
                    }, {})
                }
            ))
            .filter((preset) => Object.keys(preset.data).length > 0),
    };
}

export default generatePresets;
