import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createCampaign(value: MsgCreateCampaign): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelCampaign(value: MsgCancelCampaign): {
            typeUrl: string;
            value: Uint8Array;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        depositCampaign(value: MsgDepositCampaign): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createCampaign(value: MsgCreateCampaign): {
            typeUrl: string;
            value: MsgCreateCampaign;
        };
        cancelCampaign(value: MsgCancelCampaign): {
            typeUrl: string;
            value: MsgCancelCampaign;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        depositCampaign(value: MsgDepositCampaign): {
            typeUrl: string;
            value: MsgDepositCampaign;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        createCampaign(value: any): {
            typeUrl: string;
            value: MsgCreateCampaign;
        };
        cancelCampaign(value: any): {
            typeUrl: string;
            value: MsgCancelCampaign;
        };
        claim(value: any): {
            typeUrl: string;
            value: MsgClaim;
        };
        depositCampaign(value: any): {
            typeUrl: string;
            value: MsgDepositCampaign;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createCampaign(value: MsgCreateCampaign): {
            typeUrl: string;
            value: MsgCreateCampaign;
        };
        cancelCampaign(value: MsgCancelCampaign): {
            typeUrl: string;
            value: MsgCancelCampaign;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        depositCampaign(value: MsgDepositCampaign): {
            typeUrl: string;
            value: MsgDepositCampaign;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
