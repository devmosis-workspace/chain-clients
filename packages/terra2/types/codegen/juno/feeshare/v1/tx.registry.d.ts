import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterFeeShare, MsgUpdateFeeShare, MsgCancelFeeShare, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerFeeShare(value: MsgRegisterFeeShare): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateFeeShare(value: MsgUpdateFeeShare): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelFeeShare(value: MsgCancelFeeShare): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerFeeShare(value: MsgRegisterFeeShare): {
            typeUrl: string;
            value: MsgRegisterFeeShare;
        };
        updateFeeShare(value: MsgUpdateFeeShare): {
            typeUrl: string;
            value: MsgUpdateFeeShare;
        };
        cancelFeeShare(value: MsgCancelFeeShare): {
            typeUrl: string;
            value: MsgCancelFeeShare;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        registerFeeShare(value: any): {
            typeUrl: string;
            value: MsgRegisterFeeShare;
        };
        updateFeeShare(value: any): {
            typeUrl: string;
            value: MsgUpdateFeeShare;
        };
        cancelFeeShare(value: any): {
            typeUrl: string;
            value: MsgCancelFeeShare;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerFeeShare(value: MsgRegisterFeeShare): {
            typeUrl: string;
            value: MsgRegisterFeeShare;
        };
        updateFeeShare(value: MsgUpdateFeeShare): {
            typeUrl: string;
            value: MsgUpdateFeeShare;
        };
        cancelFeeShare(value: MsgCancelFeeShare): {
            typeUrl: string;
            value: MsgCancelFeeShare;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
