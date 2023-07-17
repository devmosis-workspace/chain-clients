import { Position, Params, ParamsSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgOpen {
    signer: string;
    collateralAsset: string;
    collateralAmount: string;
    borrowAsset: string;
    position: Position;
    leverage: string;
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
export interface MsgOpenResponseSDKType {
}
export interface MsgClose {
    signer: string;
    id: Long;
}
export interface MsgCloseSDKType {
    signer: string;
    id: Long;
}
export interface MsgCloseResponse {
}
export interface MsgCloseResponseSDKType {
}
export interface MsgForceClose {
    signer: string;
    mtpAddress: string;
    id: Long;
}
export interface MsgForceCloseSDKType {
    signer: string;
    mtp_address: string;
    id: Long;
}
export interface MsgForceCloseResponse {
}
export interface MsgForceCloseResponseSDKType {
}
export interface MsgUpdateParams {
    signer: string;
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    signer: string;
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgUpdatePools {
    signer: string;
    pools: string[];
    closedPools: string[];
}
export interface MsgUpdatePoolsSDKType {
    signer: string;
    pools: string[];
    closed_pools: string[];
}
export interface MsgUpdatePoolsResponse {
}
export interface MsgUpdatePoolsResponseSDKType {
}
export interface MsgUpdateRowanCollateral {
    signer: string;
    rowanCollateralEnabled: boolean;
}
export interface MsgUpdateRowanCollateralSDKType {
    signer: string;
    rowan_collateral_enabled: boolean;
}
export interface MsgUpdateRowanCollateralResponse {
}
export interface MsgUpdateRowanCollateralResponseSDKType {
}
export interface MsgWhitelist {
    signer: string;
    whitelistedAddress: string;
}
export interface MsgWhitelistSDKType {
    signer: string;
    whitelisted_address: string;
}
export interface MsgWhitelistResponse {
}
export interface MsgWhitelistResponseSDKType {
}
export interface MsgDewhitelist {
    signer: string;
    whitelistedAddress: string;
}
export interface MsgDewhitelistSDKType {
    signer: string;
    whitelisted_address: string;
}
export interface MsgDewhitelistResponse {
}
export interface MsgDewhitelistResponseSDKType {
}
export interface MsgAdminCloseAll {
    signer: string;
    takeMarginFund: boolean;
}
export interface MsgAdminCloseAllSDKType {
    signer: string;
    take_margin_fund: boolean;
}
export interface MsgAdminCloseAllResponse {
}
export interface MsgAdminCloseAllResponseSDKType {
}
export interface MsgAdminClose {
    signer: string;
    mtpAddress: string;
    id: Long;
    takeMarginFund: boolean;
}
export interface MsgAdminCloseSDKType {
    signer: string;
    mtp_address: string;
    id: Long;
    take_margin_fund: boolean;
}
export interface MsgAdminCloseResponse {
}
export interface MsgAdminCloseResponseSDKType {
}
export declare const MsgOpen: {
    encode(message: MsgOpen, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgOpen;
    fromPartial(object: Partial<MsgOpen>): MsgOpen;
};
export declare const MsgOpenResponse: {
    encode(_: MsgOpenResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgOpenResponse;
    fromPartial(_: Partial<MsgOpenResponse>): MsgOpenResponse;
};
export declare const MsgClose: {
    encode(message: MsgClose, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClose;
    fromPartial(object: Partial<MsgClose>): MsgClose;
};
export declare const MsgCloseResponse: {
    encode(_: MsgCloseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCloseResponse;
    fromPartial(_: Partial<MsgCloseResponse>): MsgCloseResponse;
};
export declare const MsgForceClose: {
    encode(message: MsgForceClose, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgForceClose;
    fromPartial(object: Partial<MsgForceClose>): MsgForceClose;
};
export declare const MsgForceCloseResponse: {
    encode(_: MsgForceCloseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgForceCloseResponse;
    fromPartial(_: Partial<MsgForceCloseResponse>): MsgForceCloseResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgUpdatePools: {
    encode(message: MsgUpdatePools, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdatePools;
    fromPartial(object: Partial<MsgUpdatePools>): MsgUpdatePools;
};
export declare const MsgUpdatePoolsResponse: {
    encode(_: MsgUpdatePoolsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdatePoolsResponse;
    fromPartial(_: Partial<MsgUpdatePoolsResponse>): MsgUpdatePoolsResponse;
};
export declare const MsgUpdateRowanCollateral: {
    encode(message: MsgUpdateRowanCollateral, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateRowanCollateral;
    fromPartial(object: Partial<MsgUpdateRowanCollateral>): MsgUpdateRowanCollateral;
};
export declare const MsgUpdateRowanCollateralResponse: {
    encode(_: MsgUpdateRowanCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateRowanCollateralResponse;
    fromPartial(_: Partial<MsgUpdateRowanCollateralResponse>): MsgUpdateRowanCollateralResponse;
};
export declare const MsgWhitelist: {
    encode(message: MsgWhitelist, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWhitelist;
    fromPartial(object: Partial<MsgWhitelist>): MsgWhitelist;
};
export declare const MsgWhitelistResponse: {
    encode(_: MsgWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWhitelistResponse;
    fromPartial(_: Partial<MsgWhitelistResponse>): MsgWhitelistResponse;
};
export declare const MsgDewhitelist: {
    encode(message: MsgDewhitelist, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDewhitelist;
    fromPartial(object: Partial<MsgDewhitelist>): MsgDewhitelist;
};
export declare const MsgDewhitelistResponse: {
    encode(_: MsgDewhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDewhitelistResponse;
    fromPartial(_: Partial<MsgDewhitelistResponse>): MsgDewhitelistResponse;
};
export declare const MsgAdminCloseAll: {
    encode(message: MsgAdminCloseAll, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAdminCloseAll;
    fromPartial(object: Partial<MsgAdminCloseAll>): MsgAdminCloseAll;
};
export declare const MsgAdminCloseAllResponse: {
    encode(_: MsgAdminCloseAllResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAdminCloseAllResponse;
    fromPartial(_: Partial<MsgAdminCloseAllResponse>): MsgAdminCloseAllResponse;
};
export declare const MsgAdminClose: {
    encode(message: MsgAdminClose, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAdminClose;
    fromPartial(object: Partial<MsgAdminClose>): MsgAdminClose;
};
export declare const MsgAdminCloseResponse: {
    encode(_: MsgAdminCloseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAdminCloseResponse;
    fromPartial(_: Partial<MsgAdminCloseResponse>): MsgAdminCloseResponse;
};
