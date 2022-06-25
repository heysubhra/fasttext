var card= {
    "type": "AdaptiveCard",
    "body": [
        {
         "type": "Container",
         "style": "emphasis",
         "items":[
             {
                "type": "Container",
                "style": "accent",
                "bleed": true,
                "items": [
                    {
                    "type": "TextBlock",
                    "text": "Experimental project on bionic reading built using Adaptive Cards and PyScript. DM me @heysubhra(twitter) ",
                    "color": "dark",
                    "wrap":true
                    }
                ]
                },
            {
                "type": "Input.Text",
                "id": "editText",
                "isVisible": false,
                "placeholder": "inputText",
                "isMultiline": true
            },
            {
                "type": "TextBlock",
                "id": "viewText",
                "isVisible": true,
                "color": "dark",
                "text": "CLICK ON SWITCH TO OPEN THE EDITOR, AND PASTE THE TEXT",
                "wrap": true,
                "size": "large"
            },
            {
                "type":"ActionSet",
                "id":"actionToggle",
                "actions":[
                    {
                        "type": "Action.ToggleVisibility",
                        "title": "Switch",
                        "targetElements": [
                            "editText",
                            "viewText"
                        ]
                    }
                ]
               
            }
         ]
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.5"
}