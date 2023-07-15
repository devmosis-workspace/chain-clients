import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { ParamChange, ParamChangeSDKType } from "../../../cosmos/params/v1beta1/params";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateIssuer {
    authority: string;
    issuer: string;
    denominations: Denomination[];
}
export interface MsgCreateIssuerSDKType {
    authority: string;
    issuer: string;
    denominations: DenominationSDKType[];
}
export interface Denomination {
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
    description: string;
}
export interface DenominationSDKType {
    base: string;
    display: string;
    description: string;
}
export interface MsgCreateIssuerResponse {
}
export interface MsgCreateIssuerResponseSDKType {
}
export interface MsgDestroyIssuer {
    authority: string;
    issuer: string;
}
export interface MsgDestroyIssuerSDKType {
    authority: string;
    issuer: string;
}
export interface MsgDestroyIssuerResponse {
}
export interface MsgDestroyIssuerResponseSDKType {
}
export interface MsgSetGasPrices {
    authority: string;
    gasPrices: DecCoin[];
}
export interface MsgSetGasPricesSDKType {
    authority: string;
    gas_prices: DecCoinSDKType[];
}
export interface MsgSetGasPricesResponse {
}
export interface MsgSetGasPricesResponseSDKType {
}
export interface MsgReplaceAuthority {
    authority: string;
    newAuthority: string;
}
export interface MsgReplaceAuthoritySDKType {
    authority: string;
    new_authority: string;
}
export interface MsgReplaceAuthorityResponse {
    newAuthorityAddress: string;
}
export interface MsgReplaceAuthorityResponseSDKType {
    new_authority_address: string;
}
export interface MsgScheduleUpgrade {
    authority: string;
    plan?: Plan;
}
export interface MsgScheduleUpgradeSDKType {
    authority: string;
    plan?: PlanSDKType;
}
export interface MsgScheduleUpgradeResponse {
}
export interface MsgScheduleUpgradeResponseSDKType {
}
export interface MsgSetParameters {
    authority: string;
    changes: ParamChange[];
}
export interface MsgSetParametersSDKType {
    authority: string;
    changes: ParamChangeSDKType[];
}
export interface MsgSetParametersResponse {
}
export interface MsgSetParametersResponseSDKType {
}
export declare const MsgCreateIssuer: {
    encode(message: MsgCreateIssuer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateIssuer;
    fromPartial(object: Partial<MsgCreateIssuer>): MsgCreateIssuer;
};
export declare const Denomination: {
    encode(message: Denomination, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Denomination;
    fromPartial(object: Partial<Denomination>): Denomination;
};
export declare const MsgCreateIssuerResponse: {
    encode(_: MsgCreateIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateIssuerResponse;
    fromPartial(_: Partial<MsgCreateIssuerResponse>): MsgCreateIssuerResponse;
};
export declare const MsgDestroyIssuer: {
    encode(message: MsgDestroyIssuer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDestroyIssuer;
    fromPartial(object: Partial<MsgDestroyIssuer>): MsgDestroyIssuer;
};
export declare const MsgDestroyIssuerResponse: {
    encode(_: MsgDestroyIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDestroyIssuerResponse;
    fromPartial(_: Partial<MsgDestroyIssuerResponse>): MsgDestroyIssuerResponse;
};
export declare const MsgSetGasPrices: {
    encode(message: MsgSetGasPrices, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetGasPrices;
    fromPartial(object: Partial<MsgSetGasPrices>): MsgSetGasPrices;
};
export declare const MsgSetGasPricesResponse: {
    encode(_: MsgSetGasPricesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetGasPricesResponse;
    fromPartial(_: Partial<MsgSetGasPricesResponse>): MsgSetGasPricesResponse;
};
export declare const MsgReplaceAuthority: {
    encode(message: MsgReplaceAuthority, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgReplaceAuthority;
    fromPartial(object: Partial<MsgReplaceAuthority>): MsgReplaceAuthority;
};
export declare const MsgReplaceAuthorityResponse: {
    encode(message: MsgReplaceAuthorityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgReplaceAuthorityResponse;
    fromPartial(object: Partial<MsgReplaceAuthorityResponse>): MsgReplaceAuthorityResponse;
};
export declare const MsgScheduleUpgrade: {
    encode(message: MsgScheduleUpgrade, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgScheduleUpgrade;
    fromPartial(object: Partial<MsgScheduleUpgrade>): MsgScheduleUpgrade;
};
export declare const MsgScheduleUpgradeResponse: {
    encode(_: MsgScheduleUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgScheduleUpgradeResponse;
    fromPartial(_: Partial<MsgScheduleUpgradeResponse>): MsgScheduleUpgradeResponse;
};
export declare const MsgSetParameters: {
    encode(message: MsgSetParameters, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetParameters;
    fromPartial(object: Partial<MsgSetParameters>): MsgSetParameters;
};
export declare const MsgSetParametersResponse: {
    encode(_: MsgSetParametersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetParametersResponse;
    fromPartial(_: Partial<MsgSetParametersResponse>): MsgSetParametersResponse;
};
