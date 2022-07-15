import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import '../css/main.css'

function Report2() {
  return (
    <div className='wrap-12'>
      <p>Report 2</p>
      <br />
      <div className='wrapper-iframe'>
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTEwZTMxZjItZDQxMi00ZmM5LTlmMTItYTVjYjdlODllNTk4IiwidCI6Ijc4NGViMjlkLTdiYWYtNGVlYy1iZDAxLTk0MDhiMjliODBlYiJ9',
          }}
          cssClassName="Embed-container"
        />
      </div>
      <br />
    </div>
  )
}

export default Report2