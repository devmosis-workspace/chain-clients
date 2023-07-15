import { Action } from "./claim_record";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgInitialClaim {
    sender: string;
}
export interface MsgInitialClaimSDKType {
    sender: string;
}
export interface MsgInitialClaimResponse {
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export interface MsgInitialClaimResponseSDKType {
    claimed_amount: CoinSDKType[];
}
export interface MsgClaimFor {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForSDKType {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForResponse {
    address: string;
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export interface MsgClaimForResponseSDKType {
    address: string;
    claimed_amount: CoinSDKType[];
}
export declare const MsgInitialClaim: {
    encode(message: MsgInitialClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInitialClaim;
    fromPartial(object: Partial<MsgInitialClaim>): MsgInitialClaim;
};
export declare const MsgInitialClaimResponse: {
    encode(message: MsgInitialClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInitialClaimResponse;
    fromPartial(object: Partial<MsgInitialClaimResponse>): MsgInitialClaimResponse;
};
export declare const MsgClaimFor: {
    encode(message: MsgClaimFor, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimFor;
    fromPartial(object: Partial<MsgClaimFor>): MsgClaimFor;
};
export declare const MsgClaimForResponse: {
    encode(message: MsgClaimForResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimForResponse;
    fromPartial(object: Partial<MsgClaimForResponse>): MsgClaimForResponse;
};