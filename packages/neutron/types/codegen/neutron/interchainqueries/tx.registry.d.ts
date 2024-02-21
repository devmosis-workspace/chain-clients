import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainQuery, MsgSubmitQueryResult, MsgRemoveInterchainQueryRequest, MsgUpdateInterchainQueryRequest, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerInterchainQuery(value: MsgRegisterInterchainQuery): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitQueryResult(value: MsgSubmitQueryResult): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeInterchainQuery(value: MsgRemoveInterchainQueryRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateInterchainQuery(value: MsgUpdateInterchainQueryRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerInterchainQuery(value: MsgRegisterInterchainQuery): {
            typeUrl: string;
            value: MsgRegisterInterchainQuery;
        };
        submitQueryResult(value: MsgSubmitQueryResult): {
            typeUrl: string;
            value: MsgSubmitQueryResult;
        };
        removeInterchainQuery(value: MsgRemoveInterchainQueryRequest): {
            typeUrl: string;
            value: MsgRemoveInterchainQueryRequest;
        };
        updateInterchainQuery(value: MsgUpdateInterchainQueryRequest): {
            typeUrl: string;
            value: MsgUpdateInterchainQueryRequest;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        registerInterchainQuery(value: any): {
            typeUrl: string;
            value: MsgRegisterInterchainQuery;
        };
        submitQueryResult(value: any): {
            typeUrl: string;
            value: MsgSubmitQueryResult;
        };
        removeInterchainQuery(value: any): {
            typeUrl: string;
            value: MsgRemoveInterchainQueryRequest;
        };
        updateInterchainQuery(value: any): {
            typeUrl: string;
            value: MsgUpdateInterchainQueryRequest;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerInterchainQuery(value: MsgRegisterInterchainQuery): {
            typeUrl: string;
            value: MsgRegisterInterchainQuery;
        };
        submitQueryResult(value: MsgSubmitQueryResult): {
            typeUrl: string;
            value: MsgSubmitQueryResult;
        };
        removeInterchainQuery(value: MsgRemoveInterchainQueryRequest): {
            typeUrl: string;
            value: MsgRemoveInterchainQueryRequest;
        };
        updateInterchainQuery(value: MsgUpdateInterchainQueryRequest): {
            typeUrl: string;
            value: MsgUpdateInterchainQueryRequest;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
