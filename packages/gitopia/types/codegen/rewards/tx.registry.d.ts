import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgClaim, MsgCreateReward, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        createReward(value: MsgCreateReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        createReward(value: MsgCreateReward): {
            typeUrl: string;
            value: MsgCreateReward;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        claim(value: any): {
            typeUrl: string;
            value: MsgClaim;
        };
        createReward(value: any): {
            typeUrl: string;
            value: MsgCreateReward;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        createReward(value: MsgCreateReward): {
            typeUrl: string;
            value: MsgCreateReward;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
