export enum EditorAttributes {
    // DOM attributes
    ONLOOK_TOOLBAR = 'onlook-toolbar',
    ONLOOK_RECT_ID = 'onlook-rect',
    ONLOOK_STYLESHEET_ID = 'onlook-stylesheet',

    // Data attributes
    DATA_ONLOOK_ID = 'data-onlook-id',
    DATA_ONLOOK_IGNORE = 'data-onlook-ignore',
    DATA_ONLOOK_SAVED = 'data-onlook-saved',
    DATA_ONLOOK_SNAPSHOT = 'data-onlook-snapshot',
    DATA_ONLOOK_OLD_VALS = 'data-onlook-old-vals',
    DATA_ONLOOK_COMPONENT_ID = 'data-onlook-component-id',
}

export enum WebviewChannels {
    // Style
    STYLE_UPDATED = 'style-updated',
    UPDATE_STYLE = 'update-style',
    CLEAR_STYLE_SHEET = 'clear-style-sheet',

    // Mouse events
    MOUSE_MOVE = 'mouse-move',
    MOUSE_DOWN = 'mouse-down',
    MOUSE_OVER_ELEMENT = 'hover-element',
    MOUSE_OUT_ELEMENT = 'unhover-element',
    CLICK_ELEMENT = 'click-element',
}

export enum MainChannels {
    // Code
    GET_CODE_BLOCK = 'get-code-block',
    GET_CODE_BLOCKS = 'get-code-blocks',
    GET_STYLE_CODE_DIFFS = 'get-style-code-diffs',
    WRITE_CODE_BLOCKS = 'write-code-blocks',
    VIEW_SOURCE_CODE = 'view-source-code',

    // Tunnel
    OPEN_TUNNEL = 'open-tunnel',
    CLOSE_TUNNEL = 'close-tunnel',

    // Analytics
    ANLYTICS_PREF_SET = 'analytics-pref-set',
    SEND_ANALYTICS = 'send-analytics',
}

export enum Links {
    DISCORD = 'https://discord.gg/hERDfFZCsH',
    GITHUB = 'https://github.com/onlook-dev/studio',
    USAGE_DOCS = 'https://github.com/onlook-dev/studio?tab=readme-ov-file#usage',
    WIKI = 'https://github.com/onlook-dev/studio/wiki',
}

export const APP_NAME = 'Onlook';
