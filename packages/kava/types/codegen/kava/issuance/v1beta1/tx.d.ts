import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokens {
    sender: string;
    tokens: Coin;
    receiver: string;
}
export interface MsgIssueTokensProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens";
    value: Uint8Array;
}
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokensAmino {
    sender: string;
    tokens?: CoinAmino;
    receiver: string;
}
export interface MsgIssueTokensAminoMsg {
    type: "/kava.issuance.v1beta1.MsgIssueTokens";
    value: MsgIssueTokensAmino;
}
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokensSDKType {
    sender: string;
    tokens: CoinSDKType;
    receiver: string;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponse {
}
export interface MsgIssueTokensResponseProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgIssueTokensResponse";
    value: Uint8Array;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponseAmino {
}
export interface MsgIssueTokensResponseAminoMsg {
    type: "/kava.issuance.v1beta1.MsgIssueTokensResponse";
    value: MsgIssueTokensResponseAmino;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponseSDKType {
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokens {
    sender: string;
    tokens: Coin;
}
export interface MsgRedeemTokensProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens";
    value: Uint8Array;
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokensAmino {
    sender: string;
    tokens?: CoinAmino;
}
export interface MsgRedeemTokensAminoMsg {
    type: "/kava.issuance.v1beta1.MsgRedeemTokens";
    value: MsgRedeemTokensAmino;
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokensSDKType {
    sender: string;
    tokens: CoinSDKType;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponse {
}
export interface MsgRedeemTokensResponseProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokensResponse";
    value: Uint8Array;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponseAmino {
}
export interface MsgRedeemTokensResponseAminoMsg {
    type: "/kava.issuance.v1beta1.MsgRedeemTokensResponse";
    value: MsgRedeemTokensResponseAmino;
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
export interface MsgBlockAddressProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress";
    value: Uint8Array;
}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddressAmino {
    sender: string;
    denom: string;
    blocked_address: string;
}
export interface MsgBlockAddressAminoMsg {
    type: "/kava.issuance.v1beta1.MsgBlockAddress";
    value: MsgBlockAddressAmino;
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
export interface MsgBlockAddressResponseProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgBlockAddressResponse";
    value: Uint8Array;
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponseAmino {
}
export interface MsgBlockAddressResponseAminoMsg {
    type: "/kava.issuance.v1beta1.MsgBlockAddressResponse";
    value: MsgBlockAddressResponseAmino;
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
export interface MsgUnblockAddressProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress";
    value: Uint8Array;
}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddressAmino {
    sender: string;
    denom: string;
    blocked_address: string;
}
export interface MsgUnblockAddressAminoMsg {
    type: "/kava.issuance.v1beta1.MsgUnblockAddress";
    value: MsgUnblockAddressAmino;
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
export interface MsgUnblockAddressResponseProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddressResponse";
    value: Uint8Array;
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponseAmino {
}
export interface MsgUnblockAddressResponseAminoMsg {
    type: "/kava.issuance.v1beta1.MsgUnblockAddressResponse";
    value: MsgUnblockAddressResponseAmino;
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
export interface MsgSetPauseStatusProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus";
    value: Uint8Array;
}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatusAmino {
    sender: string;
    denom: string;
    status: boolean;
}
export interface MsgSetPauseStatusAminoMsg {
    type: "/kava.issuance.v1beta1.MsgSetPauseStatus";
    value: MsgSetPauseStatusAmino;
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
export interface MsgSetPauseStatusResponseProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatusResponse";
    value: Uint8Array;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponseAmino {
}
export interface MsgSetPauseStatusResponseAminoMsg {
    type: "/kava.issuance.v1beta1.MsgSetPauseStatusResponse";
    value: MsgSetPauseStatusResponseAmino;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponseSDKType {
}
export declare const MsgIssueTokens: {
    typeUrl: string;
    encode(message: MsgIssueTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgIssueTokens;
    fromPartial(object: Partial<MsgIssueTokens>): MsgIssueTokens;
    fromAmino(object: MsgIssueTokensAmino): MsgIssueTokens;
    toAmino(message: MsgIssueTokens): MsgIssueTokensAmino;
    fromAminoMsg(object: MsgIssueTokensAminoMsg): MsgIssueTokens;
    fromProtoMsg(message: MsgIssueTokensProtoMsg): MsgIssueTokens;
    toProto(message: MsgIssueTokens): Uint8Array;
    toProtoMsg(message: MsgIssueTokens): MsgIssueTokensProtoMsg;
};
export declare const MsgIssueTokensResponse: {
    typeUrl: string;
    encode(_: MsgIssueTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgIssueTokensResponse;
    fromPartial(_: Partial<MsgIssueTokensResponse>): MsgIssueTokensResponse;
    fromAmino(_: MsgIssueTokensResponseAmino): MsgIssueTokensResponse;
    toAmino(_: MsgIssueTokensResponse): MsgIssueTokensResponseAmino;
    fromAminoMsg(object: MsgIssueTokensResponseAminoMsg): MsgIssueTokensResponse;
    fromProtoMsg(message: MsgIssueTokensResponseProtoMsg): MsgIssueTokensResponse;
    toProto(message: MsgIssueTokensResponse): Uint8Array;
    toProtoMsg(message: MsgIssueTokensResponse): MsgIssueTokensResponseProtoMsg;
};
export declare const MsgRedeemTokens: {
    typeUrl: string;
    encode(message: MsgRedeemTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRedeemTokens;
    fromPartial(object: Partial<MsgRedeemTokens>): MsgRedeemTokens;
    fromAmino(object: MsgRedeemTokensAmino): MsgRedeemTokens;
    toAmino(message: MsgRedeemTokens): MsgRedeemTokensAmino;
    fromAminoMsg(object: MsgRedeemTokensAminoMsg): MsgRedeemTokens;
    fromProtoMsg(message: MsgRedeemTokensProtoMsg): MsgRedeemTokens;
    toProto(message: MsgRedeemTokens): Uint8Array;
    toProtoMsg(message: MsgRedeemTokens): MsgRedeemTokensProtoMsg;
};
export declare const MsgRedeemTokensResponse: {
    typeUrl: string;
    encode(_: MsgRedeemTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRedeemTokensResponse;
    fromPartial(_: Partial<MsgRedeemTokensResponse>): MsgRedeemTokensResponse;
    fromAmino(_: MsgRedeemTokensResponseAmino): MsgRedeemTokensResponse;
    toAmino(_: MsgRedeemTokensResponse): MsgRedeemTokensResponseAmino;
    fromAminoMsg(object: MsgRedeemTokensResponseAminoMsg): MsgRedeemTokensResponse;
    fromProtoMsg(message: MsgRedeemTokensResponseProtoMsg): MsgRedeemTokensResponse;
    toProto(message: MsgRedeemTokensResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemTokensResponse): MsgRedeemTokensResponseProtoMsg;
};
export declare const MsgBlockAddress: {
    typeUrl: string;
    encode(message: MsgBlockAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBlockAddress;
    fromPartial(object: Partial<MsgBlockAddress>): MsgBlockAddress;
    fromAmino(object: MsgBlockAddressAmino): MsgBlockAddress;
    toAmino(message: MsgBlockAddress): MsgBlockAddressAmino;
    fromAminoMsg(object: MsgBlockAddressAminoMsg): MsgBlockAddress;
    fromProtoMsg(message: MsgBlockAddressProtoMsg): MsgBlockAddress;
    toProto(message: MsgBlockAddress): Uint8Array;
    toProtoMsg(message: MsgBlockAddress): MsgBlockAddressProtoMsg;
};
export declare const MsgBlockAddressResponse: {
    typeUrl: string;
    encode(_: MsgBlockAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBlockAddressResponse;
    fromPartial(_: Partial<MsgBlockAddressResponse>): MsgBlockAddressResponse;
    fromAmino(_: MsgBlockAddressResponseAmino): MsgBlockAddressResponse;
    toAmino(_: MsgBlockAddressResponse): MsgBlockAddressResponseAmino;
    fromAminoMsg(object: MsgBlockAddressResponseAminoMsg): MsgBlockAddressResponse;
    fromProtoMsg(message: MsgBlockAddressResponseProtoMsg): MsgBlockAddressResponse;
    toProto(message: MsgBlockAddressResponse): Uint8Array;
    toProtoMsg(message: MsgBlockAddressResponse): MsgBlockAddressResponseProtoMsg;
};
export declare const MsgUnblockAddress: {
    typeUrl: string;
    encode(message: MsgUnblockAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnblockAddress;
    fromPartial(object: Partial<MsgUnblockAddress>): MsgUnblockAddress;
    fromAmino(object: MsgUnblockAddressAmino): MsgUnblockAddress;
    toAmino(message: MsgUnblockAddress): MsgUnblockAddressAmino;
    fromAminoMsg(object: MsgUnblockAddressAminoMsg): MsgUnblockAddress;
    fromProtoMsg(message: MsgUnblockAddressProtoMsg): MsgUnblockAddress;
    toProto(message: MsgUnblockAddress): Uint8Array;
    toProtoMsg(message: MsgUnblockAddress): MsgUnblockAddressProtoMsg;
};
export declare const MsgUnblockAddressResponse: {
    typeUrl: string;
    encode(_: MsgUnblockAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnblockAddressResponse;
    fromPartial(_: Partial<MsgUnblockAddressResponse>): MsgUnblockAddressResponse;
    fromAmino(_: MsgUnblockAddressResponseAmino): MsgUnblockAddressResponse;
    toAmino(_: MsgUnblockAddressResponse): MsgUnblockAddressResponseAmino;
    fromAminoMsg(object: MsgUnblockAddressResponseAminoMsg): MsgUnblockAddressResponse;
    fromProtoMsg(message: MsgUnblockAddressResponseProtoMsg): MsgUnblockAddressResponse;
    toProto(message: MsgUnblockAddressResponse): Uint8Array;
    toProtoMsg(message: MsgUnblockAddressResponse): MsgUnblockAddressResponseProtoMsg;
};
export declare const MsgSetPauseStatus: {
    typeUrl: string;
    encode(message: MsgSetPauseStatus, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetPauseStatus;
    fromPartial(object: Partial<MsgSetPauseStatus>): MsgSetPauseStatus;
    fromAmino(object: MsgSetPauseStatusAmino): MsgSetPauseStatus;
    toAmino(message: MsgSetPauseStatus): MsgSetPauseStatusAmino;
    fromAminoMsg(object: MsgSetPauseStatusAminoMsg): MsgSetPauseStatus;
    fromProtoMsg(message: MsgSetPauseStatusProtoMsg): MsgSetPauseStatus;
    toProto(message: MsgSetPauseStatus): Uint8Array;
    toProtoMsg(message: MsgSetPauseStatus): MsgSetPauseStatusProtoMsg;
};
export declare const MsgSetPauseStatusResponse: {
    typeUrl: string;
    encode(_: MsgSetPauseStatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetPauseStatusResponse;
    fromPartial(_: Partial<MsgSetPauseStatusResponse>): MsgSetPauseStatusResponse;
    fromAmino(_: MsgSetPauseStatusResponseAmino): MsgSetPauseStatusResponse;
    toAmino(_: MsgSetPauseStatusResponse): MsgSetPauseStatusResponseAmino;
    fromAminoMsg(object: MsgSetPauseStatusResponseAminoMsg): MsgSetPauseStatusResponse;
    fromProtoMsg(message: MsgSetPauseStatusResponseProtoMsg): MsgSetPauseStatusResponse;
    toProto(message: MsgSetPauseStatusResponse): Uint8Array;
    toProtoMsg(message: MsgSetPauseStatusResponse): MsgSetPauseStatusResponseProtoMsg;
};
