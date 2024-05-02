import { Position } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface MsgOpen {
    signer: string;
    collateralAsset: string;
    collateralAmount: string;
    borrowAsset: string;
    position: Position;
    leverage: string;
}
export interface MsgOpenProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgOpen";
    value: Uint8Array;
}
export interface MsgOpenAmino {
    signer?: string;
    collateral_asset?: string;
    collateral_amount?: string;
    borrow_asset?: string;
    position?: Position;
    leverage?: string;
}
export interface MsgOpenAminoMsg {
    type: "/sifnode.margin.v1.MsgOpen";
    value: MsgOpenAmino;
}
export interface MsgOpenSDKType {
    signer: string;
    collateral_asset: string;
    collateral_amount: string;
    borrow_asset: string;
    position: Position;
    leverage: string;
}
export interface MsgOpenResponse {
}
export interface MsgOpenResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgOpenResponse";
    value: Uint8Array;
}
export interface MsgOpenResponseAmino {
}
export interface MsgOpenResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgOpenResponse";
    value: MsgOpenResponseAmino;
}
export interface MsgOpenResponseSDKType {
}
export interface MsgClose {
    signer: string;
    id: bigint;
}
export interface MsgCloseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgClose";
    value: Uint8Array;
}
export interface MsgCloseAmino {
    signer?: string;
    id?: string;
}
export interface MsgCloseAminoMsg {
    type: "/sifnode.margin.v1.MsgClose";
    value: MsgCloseAmino;
}
export interface MsgCloseSDKType {
    signer: string;
    id: bigint;
}
export interface MsgCloseResponse {
}
export interface MsgCloseResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgCloseResponse";
    value: Uint8Array;
}
export interface MsgCloseResponseAmino {
}
export interface MsgCloseResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgCloseResponse";
    value: MsgCloseResponseAmino;
}
export interface MsgCloseResponseSDKType {
}
export interface MsgForceClose {
    signer: string;
    mtpAddress: string;
    id: bigint;
}
export interface MsgForceCloseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgForceClose";
    value: Uint8Array;
}
export interface MsgForceCloseAmino {
    signer?: string;
    mtp_address?: string;
    id?: string;
}
export interface MsgForceCloseAminoMsg {
    type: "/sifnode.margin.v1.MsgForceClose";
    value: MsgForceCloseAmino;
}
export interface MsgForceCloseSDKType {
    signer: string;
    mtp_address: string;
    id: bigint;
}
export interface MsgForceCloseResponse {
}
export interface MsgForceCloseResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgForceCloseResponse";
    value: Uint8Array;
}
export interface MsgForceCloseResponseAmino {
}
export interface MsgForceCloseResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgForceCloseResponse";
    value: MsgForceCloseResponseAmino;
}
export interface MsgForceCloseResponseSDKType {
}
export interface MsgUpdateParams {
    signer: string;
    params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    signer?: string;
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/sifnode.margin.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    signer: string;
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgUpdatePools {
    signer: string;
    pools: string[];
    closedPools: string[];
}
export interface MsgUpdatePoolsProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgUpdatePools";
    value: Uint8Array;
}
export interface MsgUpdatePoolsAmino {
    signer?: string;
    pools?: string[];
    closed_pools?: string[];
}
export interface MsgUpdatePoolsAminoMsg {
    type: "/sifnode.margin.v1.MsgUpdatePools";
    value: MsgUpdatePoolsAmino;
}
export interface MsgUpdatePoolsSDKType {
    signer: string;
    pools: string[];
    closed_pools: string[];
}
export interface MsgUpdatePoolsResponse {
}
export interface MsgUpdatePoolsResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgUpdatePoolsResponse";
    value: Uint8Array;
}
export interface MsgUpdatePoolsResponseAmino {
}
export interface MsgUpdatePoolsResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgUpdatePoolsResponse";
    value: MsgUpdatePoolsResponseAmino;
}
export interface MsgUpdatePoolsResponseSDKType {
}
export interface MsgUpdateRowanCollateral {
    signer: string;
    rowanCollateralEnabled: boolean;
}
export interface MsgUpdateRowanCollateralProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral";
    value: Uint8Array;
}
export interface MsgUpdateRowanCollateralAmino {
    signer?: string;
    rowan_collateral_enabled?: boolean;
}
export interface MsgUpdateRowanCollateralAminoMsg {
    type: "/sifnode.margin.v1.MsgUpdateRowanCollateral";
    value: MsgUpdateRowanCollateralAmino;
}
export interface MsgUpdateRowanCollateralSDKType {
    signer: string;
    rowan_collateral_enabled: boolean;
}
export interface MsgUpdateRowanCollateralResponse {
}
export interface MsgUpdateRowanCollateralResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateralResponse";
    value: Uint8Array;
}
export interface MsgUpdateRowanCollateralResponseAmino {
}
export interface MsgUpdateRowanCollateralResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgUpdateRowanCollateralResponse";
    value: MsgUpdateRowanCollateralResponseAmino;
}
export interface MsgUpdateRowanCollateralResponseSDKType {
}
export interface MsgWhitelist {
    signer: string;
    whitelistedAddress: string;
}
export interface MsgWhitelistProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgWhitelist";
    value: Uint8Array;
}
export interface MsgWhitelistAmino {
    signer?: string;
    whitelisted_address?: string;
}
export interface MsgWhitelistAminoMsg {
    type: "/sifnode.margin.v1.MsgWhitelist";
    value: MsgWhitelistAmino;
}
export interface MsgWhitelistSDKType {
    signer: string;
    whitelisted_address: string;
}
export interface MsgWhitelistResponse {
}
export interface MsgWhitelistResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgWhitelistResponse";
    value: Uint8Array;
}
export interface MsgWhitelistResponseAmino {
}
export interface MsgWhitelistResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgWhitelistResponse";
    value: MsgWhitelistResponseAmino;
}
export interface MsgWhitelistResponseSDKType {
}
export interface MsgDewhitelist {
    signer: string;
    whitelistedAddress: string;
}
export interface MsgDewhitelistProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgDewhitelist";
    value: Uint8Array;
}
export interface MsgDewhitelistAmino {
    signer?: string;
    whitelisted_address?: string;
}
export interface MsgDewhitelistAminoMsg {
    type: "/sifnode.margin.v1.MsgDewhitelist";
    value: MsgDewhitelistAmino;
}
export interface MsgDewhitelistSDKType {
    signer: string;
    whitelisted_address: string;
}
export interface MsgDewhitelistResponse {
}
export interface MsgDewhitelistResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgDewhitelistResponse";
    value: Uint8Array;
}
export interface MsgDewhitelistResponseAmino {
}
export interface MsgDewhitelistResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgDewhitelistResponse";
    value: MsgDewhitelistResponseAmino;
}
export interface MsgDewhitelistResponseSDKType {
}
export interface MsgAdminCloseAll {
    signer: string;
    takeMarginFund: boolean;
}
export interface MsgAdminCloseAllProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll";
    value: Uint8Array;
}
export interface MsgAdminCloseAllAmino {
    signer?: string;
    take_margin_fund?: boolean;
}
export interface MsgAdminCloseAllAminoMsg {
    type: "/sifnode.margin.v1.MsgAdminCloseAll";
    value: MsgAdminCloseAllAmino;
}
export interface MsgAdminCloseAllSDKType {
    signer: string;
    take_margin_fund: boolean;
}
export interface MsgAdminCloseAllResponse {
}
export interface MsgAdminCloseAllResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgAdminCloseAllResponse";
    value: Uint8Array;
}
export interface MsgAdminCloseAllResponseAmino {
}
export interface MsgAdminCloseAllResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgAdminCloseAllResponse";
    value: MsgAdminCloseAllResponseAmino;
}
export interface MsgAdminCloseAllResponseSDKType {
}
export interface MsgAdminClose {
    signer: string;
    mtpAddress: string;
    id: bigint;
    takeMarginFund: boolean;
}
export interface MsgAdminCloseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgAdminClose";
    value: Uint8Array;
}
export interface MsgAdminCloseAmino {
    signer?: string;
    mtp_address?: string;
    id?: string;
    take_margin_fund?: boolean;
}
export interface MsgAdminCloseAminoMsg {
    type: "/sifnode.margin.v1.MsgAdminClose";
    value: MsgAdminCloseAmino;
}
export interface MsgAdminCloseSDKType {
    signer: string;
    mtp_address: string;
    id: bigint;
    take_margin_fund: boolean;
}
export interface MsgAdminCloseResponse {
}
export interface MsgAdminCloseResponseProtoMsg {
    typeUrl: "/sifnode.margin.v1.MsgAdminCloseResponse";
    value: Uint8Array;
}
export interface MsgAdminCloseResponseAmino {
}
export interface MsgAdminCloseResponseAminoMsg {
    type: "/sifnode.margin.v1.MsgAdminCloseResponse";
    value: MsgAdminCloseResponseAmino;
}
export interface MsgAdminCloseResponseSDKType {
}
export declare const MsgOpen: {
    typeUrl: string;
    encode(message: MsgOpen, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgOpen;
    fromPartial(object: Partial<MsgOpen>): MsgOpen;
    fromAmino(object: MsgOpenAmino): MsgOpen;
    toAmino(message: MsgOpen): MsgOpenAmino;
    fromAminoMsg(object: MsgOpenAminoMsg): MsgOpen;
    fromProtoMsg(message: MsgOpenProtoMsg): MsgOpen;
    toProto(message: MsgOpen): Uint8Array;
    toProtoMsg(message: MsgOpen): MsgOpenProtoMsg;
};
export declare const MsgOpenResponse: {
    typeUrl: string;
    encode(_: MsgOpenResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgOpenResponse;
    fromPartial(_: Partial<MsgOpenResponse>): MsgOpenResponse;
    fromAmino(_: MsgOpenResponseAmino): MsgOpenResponse;
    toAmino(_: MsgOpenResponse): MsgOpenResponseAmino;
    fromAminoMsg(object: MsgOpenResponseAminoMsg): MsgOpenResponse;
    fromProtoMsg(message: MsgOpenResponseProtoMsg): MsgOpenResponse;
    toProto(message: MsgOpenResponse): Uint8Array;
    toProtoMsg(message: MsgOpenResponse): MsgOpenResponseProtoMsg;
};
export declare const MsgClose: {
    typeUrl: string;
    encode(message: MsgClose, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClose;
    fromPartial(object: Partial<MsgClose>): MsgClose;
    fromAmino(object: MsgCloseAmino): MsgClose;
    toAmino(message: MsgClose): MsgCloseAmino;
    fromAminoMsg(object: MsgCloseAminoMsg): MsgClose;
    fromProtoMsg(message: MsgCloseProtoMsg): MsgClose;
    toProto(message: MsgClose): Uint8Array;
    toProtoMsg(message: MsgClose): MsgCloseProtoMsg;
};
export declare const MsgCloseResponse: {
    typeUrl: string;
    encode(_: MsgCloseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseResponse;
    fromPartial(_: Partial<MsgCloseResponse>): MsgCloseResponse;
    fromAmino(_: MsgCloseResponseAmino): MsgCloseResponse;
    toAmino(_: MsgCloseResponse): MsgCloseResponseAmino;
    fromAminoMsg(object: MsgCloseResponseAminoMsg): MsgCloseResponse;
    fromProtoMsg(message: MsgCloseResponseProtoMsg): MsgCloseResponse;
    toProto(message: MsgCloseResponse): Uint8Array;
    toProtoMsg(message: MsgCloseResponse): MsgCloseResponseProtoMsg;
};
export declare const MsgForceClose: {
    typeUrl: string;
    encode(message: MsgForceClose, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgForceClose;
    fromPartial(object: Partial<MsgForceClose>): MsgForceClose;
    fromAmino(object: MsgForceCloseAmino): MsgForceClose;
    toAmino(message: MsgForceClose): MsgForceCloseAmino;
    fromAminoMsg(object: MsgForceCloseAminoMsg): MsgForceClose;
    fromProtoMsg(message: MsgForceCloseProtoMsg): MsgForceClose;
    toProto(message: MsgForceClose): Uint8Array;
    toProtoMsg(message: MsgForceClose): MsgForceCloseProtoMsg;
};
export declare const MsgForceCloseResponse: {
    typeUrl: string;
    encode(_: MsgForceCloseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgForceCloseResponse;
    fromPartial(_: Partial<MsgForceCloseResponse>): MsgForceCloseResponse;
    fromAmino(_: MsgForceCloseResponseAmino): MsgForceCloseResponse;
    toAmino(_: MsgForceCloseResponse): MsgForceCloseResponseAmino;
    fromAminoMsg(object: MsgForceCloseResponseAminoMsg): MsgForceCloseResponse;
    fromProtoMsg(message: MsgForceCloseResponseProtoMsg): MsgForceCloseResponse;
    toProto(message: MsgForceCloseResponse): Uint8Array;
    toProtoMsg(message: MsgForceCloseResponse): MsgForceCloseResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgUpdatePools: {
    typeUrl: string;
    encode(message: MsgUpdatePools, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdatePools;
    fromPartial(object: Partial<MsgUpdatePools>): MsgUpdatePools;
    fromAmino(object: MsgUpdatePoolsAmino): MsgUpdatePools;
    toAmino(message: MsgUpdatePools): MsgUpdatePoolsAmino;
    fromAminoMsg(object: MsgUpdatePoolsAminoMsg): MsgUpdatePools;
    fromProtoMsg(message: MsgUpdatePoolsProtoMsg): MsgUpdatePools;
    toProto(message: MsgUpdatePools): Uint8Array;
    toProtoMsg(message: MsgUpdatePools): MsgUpdatePoolsProtoMsg;
};
export declare const MsgUpdatePoolsResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdatePoolsResponse;
    fromPartial(_: Partial<MsgUpdatePoolsResponse>): MsgUpdatePoolsResponse;
    fromAmino(_: MsgUpdatePoolsResponseAmino): MsgUpdatePoolsResponse;
    toAmino(_: MsgUpdatePoolsResponse): MsgUpdatePoolsResponseAmino;
    fromAminoMsg(object: MsgUpdatePoolsResponseAminoMsg): MsgUpdatePoolsResponse;
    fromProtoMsg(message: MsgUpdatePoolsResponseProtoMsg): MsgUpdatePoolsResponse;
    toProto(message: MsgUpdatePoolsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePoolsResponse): MsgUpdatePoolsResponseProtoMsg;
};
export declare const MsgUpdateRowanCollateral: {
    typeUrl: string;
    encode(message: MsgUpdateRowanCollateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRowanCollateral;
    fromPartial(object: Partial<MsgUpdateRowanCollateral>): MsgUpdateRowanCollateral;
    fromAmino(object: MsgUpdateRowanCollateralAmino): MsgUpdateRowanCollateral;
    toAmino(message: MsgUpdateRowanCollateral): MsgUpdateRowanCollateralAmino;
    fromAminoMsg(object: MsgUpdateRowanCollateralAminoMsg): MsgUpdateRowanCollateral;
    fromProtoMsg(message: MsgUpdateRowanCollateralProtoMsg): MsgUpdateRowanCollateral;
    toProto(message: MsgUpdateRowanCollateral): Uint8Array;
    toProtoMsg(message: MsgUpdateRowanCollateral): MsgUpdateRowanCollateralProtoMsg;
};
export declare const MsgUpdateRowanCollateralResponse: {
    typeUrl: string;
    encode(_: MsgUpdateRowanCollateralResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateRowanCollateralResponse;
    fromPartial(_: Partial<MsgUpdateRowanCollateralResponse>): MsgUpdateRowanCollateralResponse;
    fromAmino(_: MsgUpdateRowanCollateralResponseAmino): MsgUpdateRowanCollateralResponse;
    toAmino(_: MsgUpdateRowanCollateralResponse): MsgUpdateRowanCollateralResponseAmino;
    fromAminoMsg(object: MsgUpdateRowanCollateralResponseAminoMsg): MsgUpdateRowanCollateralResponse;
    fromProtoMsg(message: MsgUpdateRowanCollateralResponseProtoMsg): MsgUpdateRowanCollateralResponse;
    toProto(message: MsgUpdateRowanCollateralResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRowanCollateralResponse): MsgUpdateRowanCollateralResponseProtoMsg;
};
export declare const MsgWhitelist: {
    typeUrl: string;
    encode(message: MsgWhitelist, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWhitelist;
    fromPartial(object: Partial<MsgWhitelist>): MsgWhitelist;
    fromAmino(object: MsgWhitelistAmino): MsgWhitelist;
    toAmino(message: MsgWhitelist): MsgWhitelistAmino;
    fromAminoMsg(object: MsgWhitelistAminoMsg): MsgWhitelist;
    fromProtoMsg(message: MsgWhitelistProtoMsg): MsgWhitelist;
    toProto(message: MsgWhitelist): Uint8Array;
    toProtoMsg(message: MsgWhitelist): MsgWhitelistProtoMsg;
};
export declare const MsgWhitelistResponse: {
    typeUrl: string;
    encode(_: MsgWhitelistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWhitelistResponse;
    fromPartial(_: Partial<MsgWhitelistResponse>): MsgWhitelistResponse;
    fromAmino(_: MsgWhitelistResponseAmino): MsgWhitelistResponse;
    toAmino(_: MsgWhitelistResponse): MsgWhitelistResponseAmino;
    fromAminoMsg(object: MsgWhitelistResponseAminoMsg): MsgWhitelistResponse;
    fromProtoMsg(message: MsgWhitelistResponseProtoMsg): MsgWhitelistResponse;
    toProto(message: MsgWhitelistResponse): Uint8Array;
    toProtoMsg(message: MsgWhitelistResponse): MsgWhitelistResponseProtoMsg;
};
export declare const MsgDewhitelist: {
    typeUrl: string;
    encode(message: MsgDewhitelist, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDewhitelist;
    fromPartial(object: Partial<MsgDewhitelist>): MsgDewhitelist;
    fromAmino(object: MsgDewhitelistAmino): MsgDewhitelist;
    toAmino(message: MsgDewhitelist): MsgDewhitelistAmino;
    fromAminoMsg(object: MsgDewhitelistAminoMsg): MsgDewhitelist;
    fromProtoMsg(message: MsgDewhitelistProtoMsg): MsgDewhitelist;
    toProto(message: MsgDewhitelist): Uint8Array;
    toProtoMsg(message: MsgDewhitelist): MsgDewhitelistProtoMsg;
};
export declare const MsgDewhitelistResponse: {
    typeUrl: string;
    encode(_: MsgDewhitelistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDewhitelistResponse;
    fromPartial(_: Partial<MsgDewhitelistResponse>): MsgDewhitelistResponse;
    fromAmino(_: MsgDewhitelistResponseAmino): MsgDewhitelistResponse;
    toAmino(_: MsgDewhitelistResponse): MsgDewhitelistResponseAmino;
    fromAminoMsg(object: MsgDewhitelistResponseAminoMsg): MsgDewhitelistResponse;
    fromProtoMsg(message: MsgDewhitelistResponseProtoMsg): MsgDewhitelistResponse;
    toProto(message: MsgDewhitelistResponse): Uint8Array;
    toProtoMsg(message: MsgDewhitelistResponse): MsgDewhitelistResponseProtoMsg;
};
export declare const MsgAdminCloseAll: {
    typeUrl: string;
    encode(message: MsgAdminCloseAll, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAdminCloseAll;
    fromPartial(object: Partial<MsgAdminCloseAll>): MsgAdminCloseAll;
    fromAmino(object: MsgAdminCloseAllAmino): MsgAdminCloseAll;
    toAmino(message: MsgAdminCloseAll): MsgAdminCloseAllAmino;
    fromAminoMsg(object: MsgAdminCloseAllAminoMsg): MsgAdminCloseAll;
    fromProtoMsg(message: MsgAdminCloseAllProtoMsg): MsgAdminCloseAll;
    toProto(message: MsgAdminCloseAll): Uint8Array;
    toProtoMsg(message: MsgAdminCloseAll): MsgAdminCloseAllProtoMsg;
};
export declare const MsgAdminCloseAllResponse: {
    typeUrl: string;
    encode(_: MsgAdminCloseAllResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAdminCloseAllResponse;
    fromPartial(_: Partial<MsgAdminCloseAllResponse>): MsgAdminCloseAllResponse;
    fromAmino(_: MsgAdminCloseAllResponseAmino): MsgAdminCloseAllResponse;
    toAmino(_: MsgAdminCloseAllResponse): MsgAdminCloseAllResponseAmino;
    fromAminoMsg(object: MsgAdminCloseAllResponseAminoMsg): MsgAdminCloseAllResponse;
    fromProtoMsg(message: MsgAdminCloseAllResponseProtoMsg): MsgAdminCloseAllResponse;
    toProto(message: MsgAdminCloseAllResponse): Uint8Array;
    toProtoMsg(message: MsgAdminCloseAllResponse): MsgAdminCloseAllResponseProtoMsg;
};
export declare const MsgAdminClose: {
    typeUrl: string;
    encode(message: MsgAdminClose, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAdminClose;
    fromPartial(object: Partial<MsgAdminClose>): MsgAdminClose;
    fromAmino(object: MsgAdminCloseAmino): MsgAdminClose;
    toAmino(message: MsgAdminClose): MsgAdminCloseAmino;
    fromAminoMsg(object: MsgAdminCloseAminoMsg): MsgAdminClose;
    fromProtoMsg(message: MsgAdminCloseProtoMsg): MsgAdminClose;
    toProto(message: MsgAdminClose): Uint8Array;
    toProtoMsg(message: MsgAdminClose): MsgAdminCloseProtoMsg;
};
export declare const MsgAdminCloseResponse: {
    typeUrl: string;
    encode(_: MsgAdminCloseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAdminCloseResponse;
    fromPartial(_: Partial<MsgAdminCloseResponse>): MsgAdminCloseResponse;
    fromAmino(_: MsgAdminCloseResponseAmino): MsgAdminCloseResponse;
    toAmino(_: MsgAdminCloseResponse): MsgAdminCloseResponseAmino;
    fromAminoMsg(object: MsgAdminCloseResponseAminoMsg): MsgAdminCloseResponse;
    fromProtoMsg(message: MsgAdminCloseResponseProtoMsg): MsgAdminCloseResponse;
    toProto(message: MsgAdminCloseResponse): Uint8Array;
    toProtoMsg(message: MsgAdminCloseResponse): MsgAdminCloseResponseProtoMsg;
};
