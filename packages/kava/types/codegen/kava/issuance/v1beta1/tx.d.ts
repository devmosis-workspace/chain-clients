import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokens {
    sender: string;
    tokens?: Coin;
    receiver: string;
}
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokensSDKType {
    sender: string;
    tokens?: CoinSDKType;
    receiver: string;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponse {
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponseSDKType {
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokens {
    sender: string;
    tokens?: Coin;
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokensSDKType {
    sender: string;
    tokens?: CoinSDKType;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponse {
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponseSDKType {
}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddress {
    sender: string;
    denom: string;
    blockedAddress: string;
}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddressSDKType {
    sender: string;
    denom: string;
    blocked_address: string;
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponse {
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponseSDKType {
}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddress {
    sender: string;
    denom: string;
    blockedAddress: string;
}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddressSDKType {
    sender: string;
    denom: string;
    blocked_address: string;
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponse {
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponseSDKType {
}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatus {
    sender: string;
    denom: string;
    status: boolean;
}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatusSDKType {
    sender: string;
    denom: string;
    status: boolean;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponse {
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponseSDKType {
}
export declare const MsgIssueTokens: {
    encode(message: MsgIssueTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgIssueTokens;
    fromPartial(object: Partial<MsgIssueTokens>): MsgIssueTokens;
};
export declare const MsgIssueTokensResponse: {
    encode(_: MsgIssueTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgIssueTokensResponse;
    fromPartial(_: Partial<MsgIssueTokensResponse>): MsgIssueTokensResponse;
};
export declare const MsgRedeemTokens: {
    encode(message: MsgRedeemTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRedeemTokens;
    fromPartial(object: Partial<MsgRedeemTokens>): MsgRedeemTokens;
};
export declare const MsgRedeemTokensResponse: {
    encode(_: MsgRedeemTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRedeemTokensResponse;
    fromPartial(_: Partial<MsgRedeemTokensResponse>): MsgRedeemTokensResponse;
};
export declare const MsgBlockAddress: {
    encode(message: MsgBlockAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBlockAddress;
    fromPartial(object: Partial<MsgBlockAddress>): MsgBlockAddress;
};
export declare const MsgBlockAddressResponse: {
    encode(_: MsgBlockAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBlockAddressResponse;
    fromPartial(_: Partial<MsgBlockAddressResponse>): MsgBlockAddressResponse;
};
export declare const MsgUnblockAddress: {
    encode(message: MsgUnblockAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnblockAddress;
    fromPartial(object: Partial<MsgUnblockAddress>): MsgUnblockAddress;
};
export declare const MsgUnblockAddressResponse: {
    encode(_: MsgUnblockAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUnblockAddressResponse;
    fromPartial(_: Partial<MsgUnblockAddressResponse>): MsgUnblockAddressResponse;
};
export declare const MsgSetPauseStatus: {
    encode(message: MsgSetPauseStatus, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetPauseStatus;
    fromPartial(object: Partial<MsgSetPauseStatus>): MsgSetPauseStatus;
};
export declare const MsgSetPauseStatusResponse: {
    encode(_: MsgSetPauseStatusResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetPauseStatusResponse;
    fromPartial(_: Partial<MsgSetPauseStatusResponse>): MsgSetPauseStatusResponse;
};
