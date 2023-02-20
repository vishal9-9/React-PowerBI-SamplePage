import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import '../css/main.css'

function Report1() {
    return (

        <div className='wrap-12'>
            <p> Report 1</p>
            <br />
            <div className='wrapper-iframe'>
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=9671265a-ad5a-422b-a50f-6fd710182ae7&groupId=6762f83e-4829-4bbf-93d0-841a27f2057c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
                        accessToken: 'H4sIAAAAAAAEAB2Uxw6zaBJF3-Xf0hI5tdQLcsZkPtgRTDQ5GBjNu4979rdUpXNL5z9_nOz-TFn55-8_T9RxNXRPDURvY4GT3pEEPUeWSrY_KXdLrCq3vXnlHKytg4bGuaNukXNOMicsWH8Iiy8VqktLGl9KaNWYLTiI7pyCqEPMj7ugxhDm761qo-faTqaBPG-WAZsj8c7fcYldRTDn4av4mmkLJji3xJ6I4joa75rA3i8ivjRdnLlWr_cab790sdE4khCwhh_QXdVSsxa7BWrQfLt3_VVZrINXO0nj6QoNJW18Eo8Ly94IdoIRlrUlE_aDyHwLeFUSD7mkan0-S3kUcuxAlxg1Re9QQ209zkIJdFNK9df9ZBF7iN1oInpT6RYbp2eAvYDi1fd1GADNNJGan5lhHyso54uuUzEgYmXvtNa83EaVIGVTVEMt64kQ-olLv2jLASR2mNTFozzRxEPtSmNdca2IqzY-a6UKRTILnbdhf7HjRecJJBpF89lIcgwy8Z5gMaAZoEi33Sckr6icpDSHcp7bMpNVMRKVzp6vOdh8Hk-wa0VSX0xET_6tXejuEsv6ywMTa_VQUlfLHbUM504NDXs2XPhoOoXcFlnFqeST50DgKKQXSmLizr8Rhy_3PqifinqH97DgFQB6GN98hha-MVbZywKSNjW22ZnKiqO8WZSYdw6ZJhhPepRCDlDtCl1vo9o-_T7dyLwGgJhiFdZiPyRktOvKxGozccEvzMVDsBdlwg_b0VvpSDyQBN2t3KcuqX4_VxhWriIphloM-qeOwtlzQyavqrnAyAghGDHzKjI3ocDGMGSTmtE3G6T17k390M_mtmKGLOYgHrIVgHGrE3KvRo1PHRDZH9hlo5kXC5vMBNooB05-IiqKqWVsAHbitwG1au4aMvmlkUr7VQC3q7mqqBHeZi0XN4HMkJcmbA0lM4-K4vamchsO5bxfLaM_1rotrmF675aOOrjFQSyiDLpi6JT8O1QnEcDrbPZBsj3aKzV8WNykkURLzrP9aBsP0uEwVd9_XpZevpvkZG7fzjUb-caCKhneMUi83-MQVn8vGLwJX4irSYFJQ2jheRMrOXkV99sIfNx-fh8hJJQW2rdjiZMnaO-cZlpGBjQWR8XIIMlc62B4WNehpn3X-YXJ7smXKmt2IOrPX3-E9Z73yXjfP52oSJSHi7jNw1csCfHFWi2rkhbkxxPb7zSfK285JeVwmjABgdM5m6Ch9niPsvyUiztHeYX-CHnInoJ2Ut1EzsAyFJ3nb315iFB51yD4Cu-slZX1yscbD2twUaczVk53gaZrmRANt7dHBZ_CBkNEUHyDLsQRuTa-HqVaBvrktFs3n6wrn6Do3gzdSlOeSftPJlB3RJz5aQZWroRxTkyUtxHUXOq6_HUi1IaJcJV7Yiua2vUompDky4LIs9ue5gKr50Pl6WvdgRkcn37kP7g9NPbNIUNxrvDESmpK4TB_lVdQjnTP0wl8nThmMhQ1Zrb3Lawxirr3EldpjtN2fbK7-mRN6f7zz7-Y77l5r1r0o-zCPimSaftp6hjWLMlJhnr7_j_lt_WY7cf6_sUqtUM0OyNNwXwpP4uh8UU27RZRJzhAARgmhqih30BxHmkwpkSwexLlmrr-GIsw07I3fqWvS62Gktf3g-HeQ9wNNSM_PZDneihlbh1YCnHoRMCLHxsxzKA34pY8bKS0qF-vDQlaZpp4WNIOFMnMAQ4JX3TCJsRVwwN52vfbmOvRJhLRIvpD5C8kTC7fMEn5W6_nvOyG-MKkSayFh_nYfNVIdtJhWzsAgXuRZDNUEfqqEx6j4NJdgIiF4UL5geIFZz7V2LEiXFK6ZYy-wPGYygPkpv1ci7wvDK59dhNS1Ab1VfERf0zGPEnm6RnTBnkIWxcWzZWwgbujNLuhOCsfZOu1fzH_939o4rKjQgcAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTY3Mzk1MDY1NiwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9',
                        tokenType: models.TokenType.Embed,
                        settings: {
                            layoutType: models.LayoutType.MobilePortrait,
                            customLayout: {
                                displayOption: models.DisplayOption.ActualSize
                            },
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: false
                                },
                                pageNavigation: {
                                    visible: false
                                },
                            }
                        }
                        // embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZGE1M2IyZWMtNDg2ZC00YmM3LWJkNWItZTk3Yzg2YzhkOGFlIiwidCI6Ijc4NGViMjlkLTdiYWYtNGVlYy1iZDAxLTk0MDhiMjliODBlYiJ9',
                    }}
                    cssClassName="Embed-container"
                />
            </div>
            <br />
        </div>

    )
}

export default Report1