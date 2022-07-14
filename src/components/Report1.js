import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import '../css/main.css'

function Report1() {
    return (
        <div>
            <p> Report 1</p>
            <div>
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                        embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZGE1M2IyZWMtNDg2ZC00YmM3LWJkNWItZTk3Yzg2YzhkOGFlIiwidCI6Ijc4NGViMjlkLTdiYWYtNGVlYy1iZDAxLTk0MDhiMjliODBlYiJ9',
                    }}
                    cssClassName="Embed-container"
                />
            </div>
        </div>
    )
}

export default Report1