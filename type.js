"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_InjectCSS;

    PLUGIN_CLASS.Type = class StraniAnelli_InjectCSSType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}
