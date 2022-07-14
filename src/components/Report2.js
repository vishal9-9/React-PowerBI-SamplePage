import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import '../css/main.css'

function Report2() {
  return (
    <div>
      <p>Report 2</p>
      <div>
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTEwZTMxZjItZDQxMi00ZmM5LTlmMTItYTVjYjdlODllNTk4IiwidCI6Ijc4NGViMjlkLTdiYWYtNGVlYy1iZDAxLTk0MDhiMjliODBlYiJ9',
          }}
          cssClassName="Embed-container"
        />
      </div>
    </div>
  )
}

export default Report2