import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgPromoteToPrivilegedContract, MsgDemoteFromPrivilegedContract, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        promoteToPrivilegedContract(value: MsgPromoteToPrivilegedContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        demoteFromPrivilegedContract(value: MsgDemoteFromPrivilegedContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        promoteToPrivilegedContract(value: MsgPromoteToPrivilegedContract): {
            typeUrl: string;
            value: MsgPromoteToPrivilegedContract;
        };
        demoteFromPrivilegedContract(value: MsgDemoteFromPrivilegedContract): {
            typeUrl: string;
            value: MsgDemoteFromPrivilegedContract;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        promoteToPrivilegedContract(value: any): {
            typeUrl: string;
            value: MsgPromoteToPrivilegedContract;
        };
        demoteFromPrivilegedContract(value: any): {
            typeUrl: string;
            value: MsgDemoteFromPrivilegedContract;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        promoteToPrivilegedContract(value: MsgPromoteToPrivilegedContract): {
            typeUrl: string;
            value: MsgPromoteToPrivilegedContract;
        };
        demoteFromPrivilegedContract(value: MsgDemoteFromPrivilegedContract): {
            typeUrl: string;
            value: MsgDemoteFromPrivilegedContract;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
