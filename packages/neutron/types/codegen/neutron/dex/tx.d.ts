import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
export declare enum LimitOrderType {
    GOOD_TIL_CANCELLED = 0,
    FILL_OR_KILL = 1,
    IMMEDIATE_OR_CANCEL = 2,
    JUST_IN_TIME = 3,
    GOOD_TIL_TIME = 4,
    UNRECOGNIZED = -1
}
export declare const LimitOrderTypeSDKType: typeof LimitOrderType;
export declare const LimitOrderTypeAmino: typeof LimitOrderType;
export declare function limitOrderTypeFromJSON(object: any): LimitOrderType;
export declare function limitOrderTypeToJSON(object: LimitOrderType): string;
export interface DepositOptions {
    disableAutoswap: boolean;
}
export interface DepositOptionsProtoMsg {
    typeUrl: "/neutron.dex.DepositOptions";
    value: Uint8Array;
}
export interface DepositOptionsAmino {
    disable_autoswap?: boolean;
}
export interface DepositOptionsAminoMsg {
    type: "/neutron.dex.DepositOptions";
    value: DepositOptionsAmino;
}
export interface DepositOptionsSDKType {
    disable_autoswap: boolean;
}
export interface MsgDeposit {
    creator: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    amountsA: string[];
    amountsB: string[];
    tickIndexesAToB: bigint[];
    fees: bigint[];
    options: DepositOptions[];
}
export interface MsgDepositProtoMsg {
    typeUrl: "/neutron.dex.MsgDeposit";
    value: Uint8Array;
}
export interface MsgDepositAmino {
    creator?: string;
    receiver?: string;
    token_a?: string;
    token_b?: string;
    amounts_a?: string[];
    amounts_b?: string[];
    tick_indexes_a_to_b?: string[];
    fees?: string[];
    options?: DepositOptionsAmino[];
}
export interface MsgDepositAminoMsg {
    type: "/neutron.dex.MsgDeposit";
    value: MsgDepositAmino;
}
export interface MsgDepositSDKType {
    creator: string;
    receiver: string;
    token_a: string;
    token_b: string;
    amounts_a: string[];
    amounts_b: string[];
    tick_indexes_a_to_b: bigint[];
    fees: bigint[];
    options: DepositOptionsSDKType[];
}
export interface MsgDepositResponse {
    reserve0Deposited: string[];
    reserve1Deposited: string[];
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/neutron.dex.MsgDepositResponse";
    value: Uint8Array;
}
export interface MsgDepositResponseAmino {
    reserve0_deposited?: string[];
    reserve1_deposited?: string[];
}
export interface MsgDepositResponseAminoMsg {
    type: "/neutron.dex.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
export interface MsgDepositResponseSDKType {
    reserve0_deposited: string[];
    reserve1_deposited: string[];
}
export interface MsgWithdrawal {
    creator: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    sharesToRemove: string[];
    tickIndexesAToB: bigint[];
    fees: bigint[];
}
export interface MsgWithdrawalProtoMsg {
    typeUrl: "/neutron.dex.MsgWithdrawal";
    value: Uint8Array;
}
export interface MsgWithdrawalAmino {
    creator?: string;
    receiver?: string;
    token_a?: string;
    token_b?: string;
    shares_to_remove?: string[];
    tick_indexes_a_to_b?: string[];
    fees?: string[];
}
export interface MsgWithdrawalAminoMsg {
    type: "/neutron.dex.MsgWithdrawal";
    value: MsgWithdrawalAmino;
}
export interface MsgWithdrawalSDKType {
    creator: string;
    receiver: string;
    token_a: string;
    token_b: string;
    shares_to_remove: string[];
    tick_indexes_a_to_b: bigint[];
    fees: bigint[];
}
export interface MsgWithdrawalResponse {
}
export interface MsgWithdrawalResponseProtoMsg {
    typeUrl: "/neutron.dex.MsgWithdrawalResponse";
    value: Uint8Array;
}
export interface MsgWithdrawalResponseAmino {
}
export interface MsgWithdrawalResponseAminoMsg {
    type: "/neutron.dex.MsgWithdrawalResponse";
    value: MsgWithdrawalResponseAmino;
}
export interface MsgWithdrawalResponseSDKType {
}
export interface MsgPlaceLimitOrder {
    creator: string;
    receiver: string;
    tokenIn: string;
    tokenOut: string;
    tickIndexInToOut: bigint;
    amountIn: string;
    orderType: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expirationTime?: Timestamp;
    maxAmountOut?: string;
}
export interface MsgPlaceLimitOrderProtoMsg {
    typeUrl: "/neutron.dex.MsgPlaceLimitOrder";
    value: Uint8Array;
}
export interface MsgPlaceLimitOrderAmino {
    creator?: string;
    receiver?: string;
    token_in?: string;
    token_out?: string;
    tick_index_in_to_out?: string;
    amount_in?: string;
    order_type?: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expiration_time?: string;
    max_amount_out?: string;
}
export interface MsgPlaceLimitOrderAminoMsg {
    type: "/neutron.dex.MsgPlaceLimitOrder";
    value: MsgPlaceLimitOrderAmino;
}
export interface MsgPlaceLimitOrderSDKType {
    creator: string;
    receiver: string;
    token_in: string;
    token_out: string;
    tick_index_in_to_out: bigint;
    amount_in: string;
    order_type: LimitOrderType;
    expiration_time?: TimestampSDKType;
    max_amount_out?: string;
}
export interface MsgPlaceLimitOrderResponse {
    trancheKey: string;
    /** Total amount of coin used for the limit order */
    coinIn: Coin;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after executing the
     * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
     */
    takerCoinOut: Coin;
}
export interface MsgPlaceLimitOrderResponseProtoMsg {
    typeUrl: "/neutron.dex.MsgPlaceLimitOrderResponse";
    value: Uint8Array;
}
export interface MsgPlaceLimitOrderResponseAmino {
    trancheKey?: string;
    /** Total amount of coin used for the limit order */
    coin_in?: CoinAmino;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after executing the
     * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
     */
    taker_coin_out?: CoinAmino;
}
export interface MsgPlaceLimitOrderResponseAminoMsg {
    type: "/neutron.dex.MsgPlaceLimitOrderResponse";
    value: MsgPlaceLimitOrderResponseAmino;
}
export interface MsgPlaceLimitOrderResponseSDKType {
    trancheKey: string;
    coin_in: CoinSDKType;
    taker_coin_out: CoinSDKType;
}
export interface MsgWithdrawFilledLimitOrder {
    creator: string;
    trancheKey: string;
}
export interface MsgWithdrawFilledLimitOrderProtoMsg {
    typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder";
    value: Uint8Array;
}
export interface MsgWithdrawFilledLimitOrderAmino {
    creator?: string;
    tranche_key?: string;
}
export interface MsgWithdrawFilledLimitOrderAminoMsg {
    type: "/neutron.dex.MsgWithdrawFilledLimitOrder";
    value: MsgWithdrawFilledLimitOrderAmino;
}
export interface MsgWithdrawFilledLimitOrderSDKType {
    creator: string;
    tranche_key: string;
}
export interface MsgWithdrawFilledLimitOrderResponse {
}
export interface MsgWithdrawFilledLimitOrderResponseProtoMsg {
    typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrderResponse";
    value: Uint8Array;
}
export interface MsgWithdrawFilledLimitOrderResponseAmino {
}
export interface MsgWithdrawFilledLimitOrderResponseAminoMsg {
    type: "/neutron.dex.MsgWithdrawFilledLimitOrderResponse";
    value: MsgWithdrawFilledLimitOrderResponseAmino;
}
export interface MsgWithdrawFilledLimitOrderResponseSDKType {
}
export interface MsgCancelLimitOrder {
    creator: string;
    trancheKey: string;
}
export interface MsgCancelLimitOrderProtoMsg {
    typeUrl: "/neutron.dex.MsgCancelLimitOrder";
    value: Uint8Array;
}
export interface MsgCancelLimitOrderAmino {
    creator?: string;
    tranche_key?: string;
}
export interface MsgCancelLimitOrderAminoMsg {
    type: "/neutron.dex.MsgCancelLimitOrder";
    value: MsgCancelLimitOrderAmino;
}
export interface MsgCancelLimitOrderSDKType {
    creator: string;
    tranche_key: string;
}
export interface MsgCancelLimitOrderResponse {
}
export interface MsgCancelLimitOrderResponseProtoMsg {
    typeUrl: "/neutron.dex.MsgCancelLimitOrderResponse";
    value: Uint8Array;
}
export interface MsgCancelLimitOrderResponseAmino {
}
export interface MsgCancelLimitOrderResponseAminoMsg {
    type: "/neutron.dex.MsgCancelLimitOrderResponse";
    value: MsgCancelLimitOrderResponseAmino;
}
export interface MsgCancelLimitOrderResponseSDKType {
}
export interface MultiHopRoute {
    hops: string[];
}
export interface MultiHopRouteProtoMsg {
    typeUrl: "/neutron.dex.MultiHopRoute";
    value: Uint8Array;
}
export interface MultiHopRouteAmino {
    hops?: string[];
}
export interface MultiHopRouteAminoMsg {
    type: "/neutron.dex.MultiHopRoute";
    value: MultiHopRouteAmino;
}
export interface MultiHopRouteSDKType {
    hops: string[];
}
export interface MsgMultiHopSwap {
    creator: string;
    receiver: string;
    routes: MultiHopRoute[];
    amountIn: string;
    exitLimitPrice: string;
    /**
     * If pickBestRoute == true then all routes are run and the route with the best price is chosen
     * otherwise, the first succesful route is used.
     */
    pickBestRoute: boolean;
}
export interface MsgMultiHopSwapProtoMsg {
    typeUrl: "/neutron.dex.MsgMultiHopSwap";
    value: Uint8Array;
}
export interface MsgMultiHopSwapAmino {
    creator?: string;
    receiver?: string;
    routes?: MultiHopRouteAmino[];
    amount_in?: string;
    exit_limit_price?: string;
    /**
     * If pickBestRoute == true then all routes are run and the route with the best price is chosen
     * otherwise, the first succesful route is used.
     */
    pick_best_route?: boolean;
}
export interface MsgMultiHopSwapAminoMsg {
    type: "/neutron.dex.MsgMultiHopSwap";
    value: MsgMultiHopSwapAmino;
}
export interface MsgMultiHopSwapSDKType {
    creator: string;
    receiver: string;
    routes: MultiHopRouteSDKType[];
    amount_in: string;
    exit_limit_price: string;
    pick_best_route: boolean;
}
export interface MsgMultiHopSwapResponse {
    coinOut: Coin;
}
export interface MsgMultiHopSwapResponseProtoMsg {
    typeUrl: "/neutron.dex.MsgMultiHopSwapResponse";
    value: Uint8Array;
}
export interface MsgMultiHopSwapResponseAmino {
    coin_out?: CoinAmino;
}
export interface MsgMultiHopSwapResponseAminoMsg {
    type: "/neutron.dex.MsgMultiHopSwapResponse";
    value: MsgMultiHopSwapResponseAmino;
}
export interface MsgMultiHopSwapResponseSDKType {
    coin_out: CoinSDKType;
}
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/neutron.dex.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** Authority is the address of the governance account. */
    authority?: string;
    /** NOTE: All parameters must be supplied. */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "dex/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/neutron.dex.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/neutron.dex.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const DepositOptions: {
    typeUrl: string;
    encode(message: DepositOptions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositOptions;
    fromPartial(object: Partial<DepositOptions>): DepositOptions;
    fromAmino(object: DepositOptionsAmino): DepositOptions;
    toAmino(message: DepositOptions): DepositOptionsAmino;
    fromAminoMsg(object: DepositOptionsAminoMsg): DepositOptions;
    fromProtoMsg(message: DepositOptionsProtoMsg): DepositOptions;
    toProto(message: DepositOptions): Uint8Array;
    toProtoMsg(message: DepositOptions): DepositOptionsProtoMsg;
};
export declare const MsgDeposit: {
    typeUrl: string;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(message: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDepositResponse;
    fromPartial(object: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(object: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(message: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const MsgWithdrawal: {
    typeUrl: string;
    encode(message: MsgWithdrawal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawal;
    fromPartial(object: Partial<MsgWithdrawal>): MsgWithdrawal;
    fromAmino(object: MsgWithdrawalAmino): MsgWithdrawal;
    toAmino(message: MsgWithdrawal): MsgWithdrawalAmino;
    fromAminoMsg(object: MsgWithdrawalAminoMsg): MsgWithdrawal;
    fromProtoMsg(message: MsgWithdrawalProtoMsg): MsgWithdrawal;
    toProto(message: MsgWithdrawal): Uint8Array;
    toProtoMsg(message: MsgWithdrawal): MsgWithdrawalProtoMsg;
};
export declare const MsgWithdrawalResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawalResponse;
    fromPartial(_: Partial<MsgWithdrawalResponse>): MsgWithdrawalResponse;
    fromAmino(_: MsgWithdrawalResponseAmino): MsgWithdrawalResponse;
    toAmino(_: MsgWithdrawalResponse): MsgWithdrawalResponseAmino;
    fromAminoMsg(object: MsgWithdrawalResponseAminoMsg): MsgWithdrawalResponse;
    fromProtoMsg(message: MsgWithdrawalResponseProtoMsg): MsgWithdrawalResponse;
    toProto(message: MsgWithdrawalResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawalResponse): MsgWithdrawalResponseProtoMsg;
};
export declare const MsgPlaceLimitOrder: {
    typeUrl: string;
    encode(message: MsgPlaceLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPlaceLimitOrder;
    fromPartial(object: Partial<MsgPlaceLimitOrder>): MsgPlaceLimitOrder;
    fromAmino(object: MsgPlaceLimitOrderAmino): MsgPlaceLimitOrder;
    toAmino(message: MsgPlaceLimitOrder): MsgPlaceLimitOrderAmino;
    fromAminoMsg(object: MsgPlaceLimitOrderAminoMsg): MsgPlaceLimitOrder;
    fromProtoMsg(message: MsgPlaceLimitOrderProtoMsg): MsgPlaceLimitOrder;
    toProto(message: MsgPlaceLimitOrder): Uint8Array;
    toProtoMsg(message: MsgPlaceLimitOrder): MsgPlaceLimitOrderProtoMsg;
};
export declare const MsgPlaceLimitOrderResponse: {
    typeUrl: string;
    encode(message: MsgPlaceLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPlaceLimitOrderResponse;
    fromPartial(object: Partial<MsgPlaceLimitOrderResponse>): MsgPlaceLimitOrderResponse;
    fromAmino(object: MsgPlaceLimitOrderResponseAmino): MsgPlaceLimitOrderResponse;
    toAmino(message: MsgPlaceLimitOrderResponse): MsgPlaceLimitOrderResponseAmino;
    fromAminoMsg(object: MsgPlaceLimitOrderResponseAminoMsg): MsgPlaceLimitOrderResponse;
    fromProtoMsg(message: MsgPlaceLimitOrderResponseProtoMsg): MsgPlaceLimitOrderResponse;
    toProto(message: MsgPlaceLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgPlaceLimitOrderResponse): MsgPlaceLimitOrderResponseProtoMsg;
};
export declare const MsgWithdrawFilledLimitOrder: {
    typeUrl: string;
    encode(message: MsgWithdrawFilledLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawFilledLimitOrder;
    fromPartial(object: Partial<MsgWithdrawFilledLimitOrder>): MsgWithdrawFilledLimitOrder;
    fromAmino(object: MsgWithdrawFilledLimitOrderAmino): MsgWithdrawFilledLimitOrder;
    toAmino(message: MsgWithdrawFilledLimitOrder): MsgWithdrawFilledLimitOrderAmino;
    fromAminoMsg(object: MsgWithdrawFilledLimitOrderAminoMsg): MsgWithdrawFilledLimitOrder;
    fromProtoMsg(message: MsgWithdrawFilledLimitOrderProtoMsg): MsgWithdrawFilledLimitOrder;
    toProto(message: MsgWithdrawFilledLimitOrder): Uint8Array;
    toProtoMsg(message: MsgWithdrawFilledLimitOrder): MsgWithdrawFilledLimitOrderProtoMsg;
};
export declare const MsgWithdrawFilledLimitOrderResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawFilledLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawFilledLimitOrderResponse;
    fromPartial(_: Partial<MsgWithdrawFilledLimitOrderResponse>): MsgWithdrawFilledLimitOrderResponse;
    fromAmino(_: MsgWithdrawFilledLimitOrderResponseAmino): MsgWithdrawFilledLimitOrderResponse;
    toAmino(_: MsgWithdrawFilledLimitOrderResponse): MsgWithdrawFilledLimitOrderResponseAmino;
    fromAminoMsg(object: MsgWithdrawFilledLimitOrderResponseAminoMsg): MsgWithdrawFilledLimitOrderResponse;
    fromProtoMsg(message: MsgWithdrawFilledLimitOrderResponseProtoMsg): MsgWithdrawFilledLimitOrderResponse;
    toProto(message: MsgWithdrawFilledLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawFilledLimitOrderResponse): MsgWithdrawFilledLimitOrderResponseProtoMsg;
};
export declare const MsgCancelLimitOrder: {
    typeUrl: string;
    encode(message: MsgCancelLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelLimitOrder;
    fromPartial(object: Partial<MsgCancelLimitOrder>): MsgCancelLimitOrder;
    fromAmino(object: MsgCancelLimitOrderAmino): MsgCancelLimitOrder;
    toAmino(message: MsgCancelLimitOrder): MsgCancelLimitOrderAmino;
    fromAminoMsg(object: MsgCancelLimitOrderAminoMsg): MsgCancelLimitOrder;
    fromProtoMsg(message: MsgCancelLimitOrderProtoMsg): MsgCancelLimitOrder;
    toProto(message: MsgCancelLimitOrder): Uint8Array;
    toProtoMsg(message: MsgCancelLimitOrder): MsgCancelLimitOrderProtoMsg;
};
export declare const MsgCancelLimitOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelLimitOrderResponse;
    fromPartial(_: Partial<MsgCancelLimitOrderResponse>): MsgCancelLimitOrderResponse;
    fromAmino(_: MsgCancelLimitOrderResponseAmino): MsgCancelLimitOrderResponse;
    toAmino(_: MsgCancelLimitOrderResponse): MsgCancelLimitOrderResponseAmino;
    fromAminoMsg(object: MsgCancelLimitOrderResponseAminoMsg): MsgCancelLimitOrderResponse;
    fromProtoMsg(message: MsgCancelLimitOrderResponseProtoMsg): MsgCancelLimitOrderResponse;
    toProto(message: MsgCancelLimitOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelLimitOrderResponse): MsgCancelLimitOrderResponseProtoMsg;
};
export declare const MultiHopRoute: {
    typeUrl: string;
    encode(message: MultiHopRoute, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultiHopRoute;
    fromPartial(object: Partial<MultiHopRoute>): MultiHopRoute;
    fromAmino(object: MultiHopRouteAmino): MultiHopRoute;
    toAmino(message: MultiHopRoute): MultiHopRouteAmino;
    fromAminoMsg(object: MultiHopRouteAminoMsg): MultiHopRoute;
    fromProtoMsg(message: MultiHopRouteProtoMsg): MultiHopRoute;
    toProto(message: MultiHopRoute): Uint8Array;
    toProtoMsg(message: MultiHopRoute): MultiHopRouteProtoMsg;
};
export declare const MsgMultiHopSwap: {
    typeUrl: string;
    encode(message: MsgMultiHopSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiHopSwap;
    fromPartial(object: Partial<MsgMultiHopSwap>): MsgMultiHopSwap;
    fromAmino(object: MsgMultiHopSwapAmino): MsgMultiHopSwap;
    toAmino(message: MsgMultiHopSwap): MsgMultiHopSwapAmino;
    fromAminoMsg(object: MsgMultiHopSwapAminoMsg): MsgMultiHopSwap;
    fromProtoMsg(message: MsgMultiHopSwapProtoMsg): MsgMultiHopSwap;
    toProto(message: MsgMultiHopSwap): Uint8Array;
    toProtoMsg(message: MsgMultiHopSwap): MsgMultiHopSwapProtoMsg;
};
export declare const MsgMultiHopSwapResponse: {
    typeUrl: string;
    encode(message: MsgMultiHopSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiHopSwapResponse;
    fromPartial(object: Partial<MsgMultiHopSwapResponse>): MsgMultiHopSwapResponse;
    fromAmino(object: MsgMultiHopSwapResponseAmino): MsgMultiHopSwapResponse;
    toAmino(message: MsgMultiHopSwapResponse): MsgMultiHopSwapResponseAmino;
    fromAminoMsg(object: MsgMultiHopSwapResponseAminoMsg): MsgMultiHopSwapResponse;
    fromProtoMsg(message: MsgMultiHopSwapResponseProtoMsg): MsgMultiHopSwapResponse;
    toProto(message: MsgMultiHopSwapResponse): Uint8Array;
    toProtoMsg(message: MsgMultiHopSwapResponse): MsgMultiHopSwapResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
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
