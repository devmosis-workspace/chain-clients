import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSetCodeAuthorization, MsgRemoveCodeAuthorization, MsgSetContractAuthorization, MsgRemoveContractAuthorization, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setCodeAuthorization(value: MsgSetCodeAuthorization): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeCodeAuthorization(value: MsgRemoveCodeAuthorization): {
            typeUrl: string;
            value: Uint8Array;
        };
        setContractAuthorization(value: MsgSetContractAuthorization): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeContractAuthorization(value: MsgRemoveContractAuthorization): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        setCodeAuthorization(value: MsgSetCodeAuthorization): {
            typeUrl: string;
            value: MsgSetCodeAuthorization;
        };
        removeCodeAuthorization(value: MsgRemoveCodeAuthorization): {
            typeUrl: string;
            value: MsgRemoveCodeAuthorization;
        };
        setContractAuthorization(value: MsgSetContractAuthorization): {
            typeUrl: string;
            value: MsgSetContractAuthorization;
        };
        removeContractAuthorization(value: MsgRemoveContractAuthorization): {
            typeUrl: string;
            value: MsgRemoveContractAuthorization;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        setCodeAuthorization(value: any): {
            typeUrl: string;
            value: MsgSetCodeAuthorization;
        };
        removeCodeAuthorization(value: any): {
            typeUrl: string;
            value: MsgRemoveCodeAuthorization;
        };
        setContractAuthorization(value: any): {
            typeUrl: string;
            value: MsgSetContractAuthorization;
        };
        removeContractAuthorization(value: any): {
            typeUrl: string;
            value: MsgRemoveContractAuthorization;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        setCodeAuthorization(value: MsgSetCodeAuthorization): {
            typeUrl: string;
            value: MsgSetCodeAuthorization;
        };
        removeCodeAuthorization(value: MsgRemoveCodeAuthorization): {
            typeUrl: string;
            value: MsgRemoveCodeAuthorization;
        };
        setContractAuthorization(value: MsgSetContractAuthorization): {
            typeUrl: string;
            value: MsgSetContractAuthorization;
        };
        removeContractAuthorization(value: MsgRemoveContractAuthorization): {
            typeUrl: string;
            value: MsgRemoveContractAuthorization;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
