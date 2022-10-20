import React from 'react';
const FieldsList = (props) => {
    const { fields } = props;

    return (
        <table width="100%" border="1" style={{
          border: '1px solid #ccc',
          borderCollapse: 'collapse',
          marginTop: '2em',
        }}>
          <tbody>
            <tr>
              <td style={{padding: '2px 4px'}}><strong>Name</strong></td>
              <td style={{padding: '2px 4px'}}><strong>Type</strong></td>
              <td style={{padding: '2px 4px'}}><strong>Supported</strong></td>
            </tr>
            {fields.sort((a, b) => a.name > b.name ? 1 : -1).map((field) => {
              return (
                <tr key={field.name}>
                  <td style={{padding: '2px 4px'}}>{field.name}</td>
                  <td style={{padding: '2px 4px'}}>{!field.unsuppported ? field.type : '-'}</td>
                  <td style={{padding: '2px 4px'}}>{field.unsuppported ? '🚫' : '✅'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    )
}

export default FieldsList;
