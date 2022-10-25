import React from 'react';

const style = { padding: '2px 4px' };

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
          <td style={style}><strong>Name</strong></td>
          <td style={style}><strong>Type</strong></td>
          <td style={style}><strong>Supported</strong></td>
        </tr>
        {fields.sort((a, b) => a.name > b.name ? 1 : -1).map((field) => {
          return (
            <tr key={field.name}>
              <td style={style}>{field.name}</td>
              <td style={style}>{!field.unsuppported ? field.type : '-'}</td>
              <td style={style}>{field.unsuppported ? '🚫' : '✅'}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default FieldsList;
