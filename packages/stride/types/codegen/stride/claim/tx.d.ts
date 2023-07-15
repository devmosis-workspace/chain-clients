import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSetAirdropAllocations {
    allocator: string;
    airdropIdentifier: string;
    users: string[];
    weights: string[];
}
export interface MsgSetAirdropAllocationsSDKType {
    allocator: string;
    airdrop_identifier: string;
    users: string[];
    weights: string[];
}
export interface MsgSetAirdropAllocationsResponse {
}
export interface MsgSetAirdropAllocationsResponseSDKType {
}
export interface MsgClaimFreeAmount {
    user: string;
}
export interface MsgClaimFreeAmountSDKType {
    user: string;
}
export interface MsgClaimFreeAmountResponse {
    claimedAmount: Coin[];
}
export interface MsgClaimFreeAmountResponseSDKType {
    claimed_amount: CoinSDKType[];
}
export interface MsgCreateAirdrop {
    distributor: string;
    identifier: string;
    chainId: string;
    denom: string;
    startTime: Long;
    duration: Long;
    autopilotEnabled: boolean;
}
export interface MsgCreateAirdropSDKType {
    distributor: string;
    identifier: string;
    chain_id: string;
    denom: string;
    start_time: Long;
    duration: Long;
    autopilot_enabled: boolean;
}
export interface MsgCreateAirdropResponse {
}
export interface MsgCreateAirdropResponseSDKType {
}
export interface MsgDeleteAirdrop {
    distributor: string;
    identifier: string;
}
export interface MsgDeleteAirdropSDKType {
    distributor: string;
    identifier: string;
}
export interface MsgDeleteAirdropResponse {
}
export interface MsgDeleteAirdropResponseSDKType {
}
export declare const MsgSetAirdropAllocations: {
    encode(message: MsgSetAirdropAllocations, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetAirdropAllocations;
    fromPartial(object: Partial<MsgSetAirdropAllocations>): MsgSetAirdropAllocations;
};
export declare const MsgSetAirdropAllocationsResponse: {
    encode(_: MsgSetAirdropAllocationsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetAirdropAllocationsResponse;
    fromPartial(_: Partial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse;
};
export declare const MsgClaimFreeAmount: {
    encode(message: MsgClaimFreeAmount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimFreeAmount;
    fromPartial(object: Partial<MsgClaimFreeAmount>): MsgClaimFreeAmount;
};
export declare const MsgClaimFreeAmountResponse: {
    encode(message: MsgClaimFreeAmountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimFreeAmountResponse;
    fromPartial(object: Partial<MsgClaimFreeAmountResponse>): MsgClaimFreeAmountResponse;
};
export declare const MsgCreateAirdrop: {
    encode(message: MsgCreateAirdrop, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateAirdrop;
    fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop;
};
export declare const MsgCreateAirdropResponse: {
    encode(_: MsgCreateAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateAirdropResponse;
    fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse;
};
export declare const MsgDeleteAirdrop: {
    encode(message: MsgDeleteAirdrop, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteAirdrop;
    fromPartial(object: Partial<MsgDeleteAirdrop>): MsgDeleteAirdrop;
};
export declare const MsgDeleteAirdropResponse: {
    encode(_: MsgDeleteAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteAirdropResponse;
    fromPartial(_: Partial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse;
};
