function isSupportedType(type, control) {
    if (!type && !control) {
        return false;
    }

    const { type: controlType } = control || {};
    const { name, value } = type || {};

    if ( name === 'array') {
        return false;
    }

    if (['select', 'radio', 'inline-radio'].includes(controlType)) {
        return true;
    }

    if (!name) {
        return false;
    }

    if (['function'].includes(name)) {
        return false;
    }

    if (name === 'other' && value !== 'Date') {
        return false;
    }

    return true;
}

function getFieldData(rawField) {
    
}

function convert(argTypes) {
    return Object.values(argTypes).map((argType) => {
        const { type, description, name, mapping, control, options } = argType;
        const { name: typeName, required, value } = type || {};

        // no support for complex mapping
        if (mapping || name === 'children' && typeName !== 'string' || !isSupportedType(type, control)) {
            return {
                name,
                type: typeName,
                unsuppported: true,
            };
        }

        const fieldData = {
            name: name,
            type: getFieldType(name, typeName, value, control),
            required: required || undefined,
            options: options || value,
        }

        if (description) {
            fieldData.label = description;
        }

        return fieldData;
    });
}

function getFieldType(name, type, value, control) {
    const { type: controlType } = control || {};

    if (['select', 'radio', 'inline-radio'].includes(controlType)) {
        return 'enum';
    }

    if (name.match(/(background|color)$/i)) {
        return 'color';
    }

    if (name.match(/Date$/ || type === 'other' && value === 'Date')) {
        return 'date';
    }

    return type;
};

export default convert;
