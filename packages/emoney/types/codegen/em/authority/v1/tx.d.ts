import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanAmino, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { ParamChange, ParamChangeAmino, ParamChangeSDKType } from "../../../cosmos/params/v1beta1/params";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateIssuer {
    authority: string;
    issuer: string;
    denominations: Denomination[];
}
export interface MsgCreateIssuerProtoMsg {
    typeUrl: "/em.authority.v1.MsgCreateIssuer";
    value: Uint8Array;
}
export interface MsgCreateIssuerAmino {
    authority: string;
    issuer: string;
    denominations: DenominationAmino[];
}
export interface MsgCreateIssuerAminoMsg {
    type: "/em.authority.v1.MsgCreateIssuer";
    value: MsgCreateIssuerAmino;
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
export interface DenominationProtoMsg {
    typeUrl: "/em.authority.v1.Denomination";
    value: Uint8Array;
}
export interface DenominationAmino {
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
    description: string;
}
export interface DenominationAminoMsg {
    type: "/em.authority.v1.Denomination";
    value: DenominationAmino;
}
export interface DenominationSDKType {
    base: string;
    display: string;
    description: string;
}
export interface MsgCreateIssuerResponse {
}
export interface MsgCreateIssuerResponseProtoMsg {
    typeUrl: "/em.authority.v1.MsgCreateIssuerResponse";
    value: Uint8Array;
}
export interface MsgCreateIssuerResponseAmino {
}
export interface MsgCreateIssuerResponseAminoMsg {
    type: "/em.authority.v1.MsgCreateIssuerResponse";
    value: MsgCreateIssuerResponseAmino;
}
export interface MsgCreateIssuerResponseSDKType {
}
export interface MsgDestroyIssuer {
    authority: string;
    issuer: string;
}
export interface MsgDestroyIssuerProtoMsg {
    typeUrl: "/em.authority.v1.MsgDestroyIssuer";
    value: Uint8Array;
}
export interface MsgDestroyIssuerAmino {
    authority: string;
    issuer: string;
}
export interface MsgDestroyIssuerAminoMsg {
    type: "/em.authority.v1.MsgDestroyIssuer";
    value: MsgDestroyIssuerAmino;
}
export interface MsgDestroyIssuerSDKType {
    authority: string;
    issuer: string;
}
export interface MsgDestroyIssuerResponse {
}
export interface MsgDestroyIssuerResponseProtoMsg {
    typeUrl: "/em.authority.v1.MsgDestroyIssuerResponse";
    value: Uint8Array;
}
export interface MsgDestroyIssuerResponseAmino {
}
export interface MsgDestroyIssuerResponseAminoMsg {
    type: "/em.authority.v1.MsgDestroyIssuerResponse";
    value: MsgDestroyIssuerResponseAmino;
}
export interface MsgDestroyIssuerResponseSDKType {
}
export interface MsgSetGasPrices {
    authority: string;
    gasPrices: DecCoin[];
}
export interface MsgSetGasPricesProtoMsg {
    typeUrl: "/em.authority.v1.MsgSetGasPrices";
    value: Uint8Array;
}
export interface MsgSetGasPricesAmino {
    authority: string;
    gas_prices: DecCoinAmino[];
}
export interface MsgSetGasPricesAminoMsg {
    type: "/em.authority.v1.MsgSetGasPrices";
    value: MsgSetGasPricesAmino;
}
export interface MsgSetGasPricesSDKType {
    authority: string;
    gas_prices: DecCoinSDKType[];
}
export interface MsgSetGasPricesResponse {
}
export interface MsgSetGasPricesResponseProtoMsg {
    typeUrl: "/em.authority.v1.MsgSetGasPricesResponse";
    value: Uint8Array;
}
export interface MsgSetGasPricesResponseAmino {
}
export interface MsgSetGasPricesResponseAminoMsg {
    type: "/em.authority.v1.MsgSetGasPricesResponse";
    value: MsgSetGasPricesResponseAmino;
}
export interface MsgSetGasPricesResponseSDKType {
}
export interface MsgReplaceAuthority {
    authority: string;
    newAuthority: string;
}
export interface MsgReplaceAuthorityProtoMsg {
    typeUrl: "/em.authority.v1.MsgReplaceAuthority";
    value: Uint8Array;
}
export interface MsgReplaceAuthorityAmino {
    authority: string;
    new_authority: string;
}
export interface MsgReplaceAuthorityAminoMsg {
    type: "/em.authority.v1.MsgReplaceAuthority";
    value: MsgReplaceAuthorityAmino;
}
export interface MsgReplaceAuthoritySDKType {
    authority: string;
    new_authority: string;
}
export interface MsgReplaceAuthorityResponse {
    newAuthorityAddress: string;
}
export interface MsgReplaceAuthorityResponseProtoMsg {
    typeUrl: "/em.authority.v1.MsgReplaceAuthorityResponse";
    value: Uint8Array;
}
export interface MsgReplaceAuthorityResponseAmino {
    new_authority_address: string;
}
export interface MsgReplaceAuthorityResponseAminoMsg {
    type: "/em.authority.v1.MsgReplaceAuthorityResponse";
    value: MsgReplaceAuthorityResponseAmino;
}
export interface MsgReplaceAuthorityResponseSDKType {
    new_authority_address: string;
}
export interface MsgScheduleUpgrade {
    authority: string;
    plan: Plan;
}
export interface MsgScheduleUpgradeProtoMsg {
    typeUrl: "/em.authority.v1.MsgScheduleUpgrade";
    value: Uint8Array;
}
export interface MsgScheduleUpgradeAmino {
    authority: string;
    plan?: PlanAmino;
}
export interface MsgScheduleUpgradeAminoMsg {
    type: "/em.authority.v1.MsgScheduleUpgrade";
    value: MsgScheduleUpgradeAmino;
}
export interface MsgScheduleUpgradeSDKType {
    authority: string;
    plan: PlanSDKType;
}
export interface MsgScheduleUpgradeResponse {
}
export interface MsgScheduleUpgradeResponseProtoMsg {
    typeUrl: "/em.authority.v1.MsgScheduleUpgradeResponse";
    value: Uint8Array;
}
export interface MsgScheduleUpgradeResponseAmino {
}
export interface MsgScheduleUpgradeResponseAminoMsg {
    type: "/em.authority.v1.MsgScheduleUpgradeResponse";
    value: MsgScheduleUpgradeResponseAmino;
}
export interface MsgScheduleUpgradeResponseSDKType {
}
export interface MsgSetParameters {
    authority: string;
    changes: ParamChange[];
}
export interface MsgSetParametersProtoMsg {
    typeUrl: "/em.authority.v1.MsgSetParameters";
    value: Uint8Array;
}
export interface MsgSetParametersAmino {
    authority: string;
    changes: ParamChangeAmino[];
}
export interface MsgSetParametersAminoMsg {
    type: "/em.authority.v1.MsgSetParameters";
    value: MsgSetParametersAmino;
}
export interface MsgSetParametersSDKType {
    authority: string;
    changes: ParamChangeSDKType[];
}
export interface MsgSetParametersResponse {
}
export interface MsgSetParametersResponseProtoMsg {
    typeUrl: "/em.authority.v1.MsgSetParametersResponse";
    value: Uint8Array;
}
export interface MsgSetParametersResponseAmino {
}
export interface MsgSetParametersResponseAminoMsg {
    type: "/em.authority.v1.MsgSetParametersResponse";
    value: MsgSetParametersResponseAmino;
}
export interface MsgSetParametersResponseSDKType {
}
export declare const MsgCreateIssuer: {
    typeUrl: string;
    encode(message: MsgCreateIssuer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateIssuer;
    fromPartial(object: Partial<MsgCreateIssuer>): MsgCreateIssuer;
    fromAmino(object: MsgCreateIssuerAmino): MsgCreateIssuer;
    toAmino(message: MsgCreateIssuer): MsgCreateIssuerAmino;
    fromAminoMsg(object: MsgCreateIssuerAminoMsg): MsgCreateIssuer;
    fromProtoMsg(message: MsgCreateIssuerProtoMsg): MsgCreateIssuer;
    toProto(message: MsgCreateIssuer): Uint8Array;
    toProtoMsg(message: MsgCreateIssuer): MsgCreateIssuerProtoMsg;
};
export declare const Denomination: {
    typeUrl: string;
    encode(message: Denomination, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Denomination;
    fromPartial(object: Partial<Denomination>): Denomination;
    fromAmino(object: DenominationAmino): Denomination;
    toAmino(message: Denomination): DenominationAmino;
    fromAminoMsg(object: DenominationAminoMsg): Denomination;
    fromProtoMsg(message: DenominationProtoMsg): Denomination;
    toProto(message: Denomination): Uint8Array;
    toProtoMsg(message: Denomination): DenominationProtoMsg;
};
export declare const MsgCreateIssuerResponse: {
    typeUrl: string;
    encode(_: MsgCreateIssuerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateIssuerResponse;
    fromPartial(_: Partial<MsgCreateIssuerResponse>): MsgCreateIssuerResponse;
    fromAmino(_: MsgCreateIssuerResponseAmino): MsgCreateIssuerResponse;
    toAmino(_: MsgCreateIssuerResponse): MsgCreateIssuerResponseAmino;
    fromAminoMsg(object: MsgCreateIssuerResponseAminoMsg): MsgCreateIssuerResponse;
    fromProtoMsg(message: MsgCreateIssuerResponseProtoMsg): MsgCreateIssuerResponse;
    toProto(message: MsgCreateIssuerResponse): Uint8Array;
    toProtoMsg(message: MsgCreateIssuerResponse): MsgCreateIssuerResponseProtoMsg;
};
export declare const MsgDestroyIssuer: {
    typeUrl: string;
    encode(message: MsgDestroyIssuer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDestroyIssuer;
    fromPartial(object: Partial<MsgDestroyIssuer>): MsgDestroyIssuer;
    fromAmino(object: MsgDestroyIssuerAmino): MsgDestroyIssuer;
    toAmino(message: MsgDestroyIssuer): MsgDestroyIssuerAmino;
    fromAminoMsg(object: MsgDestroyIssuerAminoMsg): MsgDestroyIssuer;
    fromProtoMsg(message: MsgDestroyIssuerProtoMsg): MsgDestroyIssuer;
    toProto(message: MsgDestroyIssuer): Uint8Array;
    toProtoMsg(message: MsgDestroyIssuer): MsgDestroyIssuerProtoMsg;
};
export declare const MsgDestroyIssuerResponse: {
    typeUrl: string;
    encode(_: MsgDestroyIssuerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDestroyIssuerResponse;
    fromPartial(_: Partial<MsgDestroyIssuerResponse>): MsgDestroyIssuerResponse;
    fromAmino(_: MsgDestroyIssuerResponseAmino): MsgDestroyIssuerResponse;
    toAmino(_: MsgDestroyIssuerResponse): MsgDestroyIssuerResponseAmino;
    fromAminoMsg(object: MsgDestroyIssuerResponseAminoMsg): MsgDestroyIssuerResponse;
    fromProtoMsg(message: MsgDestroyIssuerResponseProtoMsg): MsgDestroyIssuerResponse;
    toProto(message: MsgDestroyIssuerResponse): Uint8Array;
    toProtoMsg(message: MsgDestroyIssuerResponse): MsgDestroyIssuerResponseProtoMsg;
};
export declare const MsgSetGasPrices: {
    typeUrl: string;
    encode(message: MsgSetGasPrices, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetGasPrices;
    fromPartial(object: Partial<MsgSetGasPrices>): MsgSetGasPrices;
    fromAmino(object: MsgSetGasPricesAmino): MsgSetGasPrices;
    toAmino(message: MsgSetGasPrices): MsgSetGasPricesAmino;
    fromAminoMsg(object: MsgSetGasPricesAminoMsg): MsgSetGasPrices;
    fromProtoMsg(message: MsgSetGasPricesProtoMsg): MsgSetGasPrices;
    toProto(message: MsgSetGasPrices): Uint8Array;
    toProtoMsg(message: MsgSetGasPrices): MsgSetGasPricesProtoMsg;
};
export declare const MsgSetGasPricesResponse: {
    typeUrl: string;
    encode(_: MsgSetGasPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetGasPricesResponse;
    fromPartial(_: Partial<MsgSetGasPricesResponse>): MsgSetGasPricesResponse;
    fromAmino(_: MsgSetGasPricesResponseAmino): MsgSetGasPricesResponse;
    toAmino(_: MsgSetGasPricesResponse): MsgSetGasPricesResponseAmino;
    fromAminoMsg(object: MsgSetGasPricesResponseAminoMsg): MsgSetGasPricesResponse;
    fromProtoMsg(message: MsgSetGasPricesResponseProtoMsg): MsgSetGasPricesResponse;
    toProto(message: MsgSetGasPricesResponse): Uint8Array;
    toProtoMsg(message: MsgSetGasPricesResponse): MsgSetGasPricesResponseProtoMsg;
};
export declare const MsgReplaceAuthority: {
    typeUrl: string;
    encode(message: MsgReplaceAuthority, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgReplaceAuthority;
    fromPartial(object: Partial<MsgReplaceAuthority>): MsgReplaceAuthority;
    fromAmino(object: MsgReplaceAuthorityAmino): MsgReplaceAuthority;
    toAmino(message: MsgReplaceAuthority): MsgReplaceAuthorityAmino;
    fromAminoMsg(object: MsgReplaceAuthorityAminoMsg): MsgReplaceAuthority;
    fromProtoMsg(message: MsgReplaceAuthorityProtoMsg): MsgReplaceAuthority;
    toProto(message: MsgReplaceAuthority): Uint8Array;
    toProtoMsg(message: MsgReplaceAuthority): MsgReplaceAuthorityProtoMsg;
};
export declare const MsgReplaceAuthorityResponse: {
    typeUrl: string;
    encode(message: MsgReplaceAuthorityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgReplaceAuthorityResponse;
    fromPartial(object: Partial<MsgReplaceAuthorityResponse>): MsgReplaceAuthorityResponse;
    fromAmino(object: MsgReplaceAuthorityResponseAmino): MsgReplaceAuthorityResponse;
    toAmino(message: MsgReplaceAuthorityResponse): MsgReplaceAuthorityResponseAmino;
    fromAminoMsg(object: MsgReplaceAuthorityResponseAminoMsg): MsgReplaceAuthorityResponse;
    fromProtoMsg(message: MsgReplaceAuthorityResponseProtoMsg): MsgReplaceAuthorityResponse;
    toProto(message: MsgReplaceAuthorityResponse): Uint8Array;
    toProtoMsg(message: MsgReplaceAuthorityResponse): MsgReplaceAuthorityResponseProtoMsg;
};
export declare const MsgScheduleUpgrade: {
    typeUrl: string;
    encode(message: MsgScheduleUpgrade, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgScheduleUpgrade;
    fromPartial(object: Partial<MsgScheduleUpgrade>): MsgScheduleUpgrade;
    fromAmino(object: MsgScheduleUpgradeAmino): MsgScheduleUpgrade;
    toAmino(message: MsgScheduleUpgrade): MsgScheduleUpgradeAmino;
    fromAminoMsg(object: MsgScheduleUpgradeAminoMsg): MsgScheduleUpgrade;
    fromProtoMsg(message: MsgScheduleUpgradeProtoMsg): MsgScheduleUpgrade;
    toProto(message: MsgScheduleUpgrade): Uint8Array;
    toProtoMsg(message: MsgScheduleUpgrade): MsgScheduleUpgradeProtoMsg;
};
export declare const MsgScheduleUpgradeResponse: {
    typeUrl: string;
    encode(_: MsgScheduleUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgScheduleUpgradeResponse;
    fromPartial(_: Partial<MsgScheduleUpgradeResponse>): MsgScheduleUpgradeResponse;
    fromAmino(_: MsgScheduleUpgradeResponseAmino): MsgScheduleUpgradeResponse;
    toAmino(_: MsgScheduleUpgradeResponse): MsgScheduleUpgradeResponseAmino;
    fromAminoMsg(object: MsgScheduleUpgradeResponseAminoMsg): MsgScheduleUpgradeResponse;
    fromProtoMsg(message: MsgScheduleUpgradeResponseProtoMsg): MsgScheduleUpgradeResponse;
    toProto(message: MsgScheduleUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgScheduleUpgradeResponse): MsgScheduleUpgradeResponseProtoMsg;
};
export declare const MsgSetParameters: {
    typeUrl: string;
    encode(message: MsgSetParameters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetParameters;
    fromPartial(object: Partial<MsgSetParameters>): MsgSetParameters;
    fromAmino(object: MsgSetParametersAmino): MsgSetParameters;
    toAmino(message: MsgSetParameters): MsgSetParametersAmino;
    fromAminoMsg(object: MsgSetParametersAminoMsg): MsgSetParameters;
    fromProtoMsg(message: MsgSetParametersProtoMsg): MsgSetParameters;
    toProto(message: MsgSetParameters): Uint8Array;
    toProtoMsg(message: MsgSetParameters): MsgSetParametersProtoMsg;
};
export declare const MsgSetParametersResponse: {
    typeUrl: string;
    encode(_: MsgSetParametersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetParametersResponse;
    fromPartial(_: Partial<MsgSetParametersResponse>): MsgSetParametersResponse;
    fromAmino(_: MsgSetParametersResponseAmino): MsgSetParametersResponse;
    toAmino(_: MsgSetParametersResponse): MsgSetParametersResponseAmino;
    fromAminoMsg(object: MsgSetParametersResponseAminoMsg): MsgSetParametersResponse;
    fromProtoMsg(message: MsgSetParametersResponseProtoMsg): MsgSetParametersResponse;
    toProto(message: MsgSetParametersResponse): Uint8Array;
    toProtoMsg(message: MsgSetParametersResponse): MsgSetParametersResponseProtoMsg;
};
