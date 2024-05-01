import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateRoute, MsgEditRoute, MsgDeleteRoute, MsgEditRouteName } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createRoute(value: MsgCreateRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
        editRoute(value: MsgEditRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteRoute(value: MsgDeleteRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
        editRouteName(value: MsgEditRouteName): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createRoute(value: MsgCreateRoute): {
            typeUrl: string;
            value: MsgCreateRoute;
        };
        editRoute(value: MsgEditRoute): {
            typeUrl: string;
            value: MsgEditRoute;
        };
        deleteRoute(value: MsgDeleteRoute): {
            typeUrl: string;
            value: MsgDeleteRoute;
        };
        editRouteName(value: MsgEditRouteName): {
            typeUrl: string;
            value: MsgEditRouteName;
        };
    };
    fromJSON: {
        createRoute(value: any): {
            typeUrl: string;
            value: MsgCreateRoute;
        };
        editRoute(value: any): {
            typeUrl: string;
            value: MsgEditRoute;
        };
        deleteRoute(value: any): {
            typeUrl: string;
            value: MsgDeleteRoute;
        };
        editRouteName(value: any): {
            typeUrl: string;
            value: MsgEditRouteName;
        };
    };
    fromPartial: {
        createRoute(value: MsgCreateRoute): {
            typeUrl: string;
            value: MsgCreateRoute;
        };
        editRoute(value: MsgEditRoute): {
            typeUrl: string;
            value: MsgEditRoute;
        };
        deleteRoute(value: MsgDeleteRoute): {
            typeUrl: string;
            value: MsgDeleteRoute;
        };
        editRouteName(value: MsgEditRouteName): {
            typeUrl: string;
            value: MsgEditRouteName;
        };
    };
};
