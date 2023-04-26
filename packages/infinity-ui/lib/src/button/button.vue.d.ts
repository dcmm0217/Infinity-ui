declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
    plain: {
        type: null;
        required: false;
    };
    round: {
        type: null;
        required: false;
    };
    circle: {
        type: null;
        required: false;
    };
    disabled: {
        type: null;
        required: false;
    };
}, {
    buttonProps: {
        type?: "primary" | "danger" | "default" | "success" | undefined;
        plain?: Boolean | undefined;
        round?: Boolean | undefined;
        circle?: Boolean | undefined;
        disabled?: Boolean | undefined;
    };
    buttonStyle: import("vue").ComputedRef<{
        [x: string]: Boolean | "primary" | "danger" | "default" | "success" | undefined;
        'is-plain': Boolean | undefined;
        'is-round': Boolean | undefined;
        'is-circle': Boolean | undefined;
        'is-disabled': Boolean | undefined;
    }>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
    plain: {
        type: null;
        required: false;
    };
    round: {
        type: null;
        required: false;
    };
    circle: {
        type: null;
        required: false;
    };
    disabled: {
        type: null;
        required: false;
    };
}>>, {}>;
export default _sfc_main;
