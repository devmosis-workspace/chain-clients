import { CDP, CDPAmino, CDPSDKType, Deposit, DepositAmino, DepositSDKType } from "./cdp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    cdps: CDP[];
    deposits: Deposit[];
    startingCdpId: bigint;
    debtDenom: string;
    govDenom: string;
    previousAccumulationTimes: GenesisAccumulationTime[];
    totalPrincipals: GenesisTotalPrincipal[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    cdps?: CDPAmino[];
    deposits?: DepositAmino[];
    starting_cdp_id?: string;
    debt_denom?: string;
    gov_denom?: string;
    previous_accumulation_times?: GenesisAccumulationTimeAmino[];
    total_principals?: GenesisTotalPrincipalAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.cdp.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    cdps: CDPSDKType[];
    deposits: DepositSDKType[];
    starting_cdp_id: bigint;
    debt_denom: string;
    gov_denom: string;
    previous_accumulation_times: GenesisAccumulationTimeSDKType[];
    total_principals: GenesisTotalPrincipalSDKType[];
}
/** Params defines the parameters for the cdp module. */
export interface Params {
    collateralParams: CollateralParam[];
    debtParam: DebtParam;
    globalDebtLimit: Coin;
    surplusAuctionThreshold: string;
    surplusAuctionLot: string;
    debtAuctionThreshold: string;
    debtAuctionLot: string;
    circuitBreaker: boolean;
    liquidationBlockInterval: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the cdp module. */
export interface ParamsAmino {
    collateral_params?: CollateralParamAmino[];
    debt_param?: DebtParamAmino;
    global_debt_limit?: CoinAmino;
    surplus_auction_threshold?: string;
    surplus_auction_lot?: string;
    debt_auction_threshold?: string;
    debt_auction_lot?: string;
    circuit_breaker?: boolean;
    liquidation_block_interval?: string;
}
export interface ParamsAminoMsg {
    type: "/kava.cdp.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the cdp module. */
export interface ParamsSDKType {
    collateral_params: CollateralParamSDKType[];
    debt_param: DebtParamSDKType;
    global_debt_limit: CoinSDKType;
    surplus_auction_threshold: string;
    surplus_auction_lot: string;
    debt_auction_threshold: string;
    debt_auction_lot: string;
    circuit_breaker: boolean;
    liquidation_block_interval: bigint;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParam {
    denom: string;
    referenceAsset: string;
    conversionFactor: string;
    debtFloor: string;
}
export interface DebtParamProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.DebtParam";
    value: Uint8Array;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParamAmino {
    denom?: string;
    reference_asset?: string;
    conversion_factor?: string;
    debt_floor?: string;
}
export interface DebtParamAminoMsg {
    type: "/kava.cdp.v1beta1.DebtParam";
    value: DebtParamAmino;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParamSDKType {
    denom: string;
    reference_asset: string;
    conversion_factor: string;
    debt_floor: string;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParam {
    denom: string;
    type: string;
    liquidationRatio: string;
    debtLimit: Coin;
    stabilityFee: string;
    auctionSize: string;
    liquidationPenalty: string;
    spotMarketId: string;
    liquidationMarketId: string;
    keeperRewardPercentage: string;
    checkCollateralizationIndexCount: string;
    conversionFactor: string;
}
export interface CollateralParamProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.CollateralParam";
    value: Uint8Array;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParamAmino {
    denom?: string;
    type?: string;
    liquidation_ratio?: string;
    debt_limit?: CoinAmino;
    stability_fee?: string;
    auction_size?: string;
    liquidation_penalty?: string;
    spot_market_id?: string;
    liquidation_market_id?: string;
    keeper_reward_percentage?: string;
    check_collateralization_index_count?: string;
    conversion_factor?: string;
}
export interface CollateralParamAminoMsg {
    type: "/kava.cdp.v1beta1.CollateralParam";
    value: CollateralParamAmino;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParamSDKType {
    denom: string;
    type: string;
    liquidation_ratio: string;
    debt_limit: CoinSDKType;
    stability_fee: string;
    auction_size: string;
    liquidation_penalty: string;
    spot_market_id: string;
    liquidation_market_id: string;
    keeper_reward_percentage: string;
    check_collateralization_index_count: string;
    conversion_factor: string;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTime {
    collateralType: string;
    previousAccumulationTime: Timestamp;
    interestFactor: string;
}
export interface GenesisAccumulationTimeProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.GenesisAccumulationTime";
    value: Uint8Array;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTimeAmino {
    collateral_type?: string;
    previous_accumulation_time?: string;
    interest_factor?: string;
}
export interface GenesisAccumulationTimeAminoMsg {
    type: "/kava.cdp.v1beta1.GenesisAccumulationTime";
    value: GenesisAccumulationTimeAmino;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTimeSDKType {
    collateral_type: string;
    previous_accumulation_time: TimestampSDKType;
    interest_factor: string;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipal {
    collateralType: string;
    totalPrincipal: string;
}
export interface GenesisTotalPrincipalProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.GenesisTotalPrincipal";
    value: Uint8Array;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipalAmino {
    collateral_type?: string;
    total_principal?: string;
}
export interface GenesisTotalPrincipalAminoMsg {
    type: "/kava.cdp.v1beta1.GenesisTotalPrincipal";
    value: GenesisTotalPrincipalAmino;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipalSDKType {
    collateral_type: string;
    total_principal: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const DebtParam: {
    typeUrl: string;
    encode(message: DebtParam, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DebtParam;
    fromPartial(object: Partial<DebtParam>): DebtParam;
    fromAmino(object: DebtParamAmino): DebtParam;
    toAmino(message: DebtParam): DebtParamAmino;
    fromAminoMsg(object: DebtParamAminoMsg): DebtParam;
    fromProtoMsg(message: DebtParamProtoMsg): DebtParam;
    toProto(message: DebtParam): Uint8Array;
    toProtoMsg(message: DebtParam): DebtParamProtoMsg;
};
export declare const CollateralParam: {
    typeUrl: string;
    encode(message: CollateralParam, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CollateralParam;
    fromPartial(object: Partial<CollateralParam>): CollateralParam;
    fromAmino(object: CollateralParamAmino): CollateralParam;
    toAmino(message: CollateralParam): CollateralParamAmino;
    fromAminoMsg(object: CollateralParamAminoMsg): CollateralParam;
    fromProtoMsg(message: CollateralParamProtoMsg): CollateralParam;
    toProto(message: CollateralParam): Uint8Array;
    toProtoMsg(message: CollateralParam): CollateralParamProtoMsg;
};
export declare const GenesisAccumulationTime: {
    typeUrl: string;
    encode(message: GenesisAccumulationTime, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisAccumulationTime;
    fromPartial(object: Partial<GenesisAccumulationTime>): GenesisAccumulationTime;
    fromAmino(object: GenesisAccumulationTimeAmino): GenesisAccumulationTime;
    toAmino(message: GenesisAccumulationTime): GenesisAccumulationTimeAmino;
    fromAminoMsg(object: GenesisAccumulationTimeAminoMsg): GenesisAccumulationTime;
    fromProtoMsg(message: GenesisAccumulationTimeProtoMsg): GenesisAccumulationTime;
    toProto(message: GenesisAccumulationTime): Uint8Array;
    toProtoMsg(message: GenesisAccumulationTime): GenesisAccumulationTimeProtoMsg;
};
export declare const GenesisTotalPrincipal: {
    typeUrl: string;
    encode(message: GenesisTotalPrincipal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisTotalPrincipal;
    fromPartial(object: Partial<GenesisTotalPrincipal>): GenesisTotalPrincipal;
    fromAmino(object: GenesisTotalPrincipalAmino): GenesisTotalPrincipal;
    toAmino(message: GenesisTotalPrincipal): GenesisTotalPrincipalAmino;
    fromAminoMsg(object: GenesisTotalPrincipalAminoMsg): GenesisTotalPrincipal;
    fromProtoMsg(message: GenesisTotalPrincipalProtoMsg): GenesisTotalPrincipal;
    toProto(message: GenesisTotalPrincipal): Uint8Array;
    toProtoMsg(message: GenesisTotalPrincipal): GenesisTotalPrincipalProtoMsg;
};
