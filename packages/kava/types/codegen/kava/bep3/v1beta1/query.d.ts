import { SwapStatus, SwapDirection, Params, ParamsAmino, ParamsSDKType } from "./bep3";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.bep3.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponse {
    /** params represents the parameters of the module */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponseAmino {
    /** params represents the parameters of the module */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.bep3.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequest {
    /** denom filters the asset response for the specified denom */
    denom: string;
}
export interface QueryAssetSupplyRequestProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyRequest";
    value: Uint8Array;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequestAmino {
    /** denom filters the asset response for the specified denom */
    denom?: string;
}
export interface QueryAssetSupplyRequestAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAssetSupplyRequest";
    value: QueryAssetSupplyRequestAmino;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequestSDKType {
    denom: string;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponse {
    /** incoming_supply represents the incoming supply of an asset */
    incomingSupply: Coin;
    /** outgoing_supply represents the outgoing supply of an asset */
    outgoingSupply: Coin;
    /** current_supply represents the current on-chain supply of an asset */
    currentSupply: Coin;
    /** time_limited_current_supply represents the time limited current supply of an asset */
    timeLimitedCurrentSupply: Coin;
    /** time_elapsed represents the time elapsed */
    timeElapsed: Duration;
}
export interface AssetSupplyResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.AssetSupplyResponse";
    value: Uint8Array;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponseAmino {
    /** incoming_supply represents the incoming supply of an asset */
    incoming_supply?: CoinAmino;
    /** outgoing_supply represents the outgoing supply of an asset */
    outgoing_supply?: CoinAmino;
    /** current_supply represents the current on-chain supply of an asset */
    current_supply?: CoinAmino;
    /** time_limited_current_supply represents the time limited current supply of an asset */
    time_limited_current_supply?: CoinAmino;
    /** time_elapsed represents the time elapsed */
    time_elapsed?: DurationAmino;
}
export interface AssetSupplyResponseAminoMsg {
    type: "/kava.bep3.v1beta1.AssetSupplyResponse";
    value: AssetSupplyResponseAmino;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponseSDKType {
    incoming_supply: CoinSDKType;
    outgoing_supply: CoinSDKType;
    current_supply: CoinSDKType;
    time_limited_current_supply: CoinSDKType;
    time_elapsed: DurationSDKType;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponse {
    /** asset_supply represents the supply of the asset */
    assetSupply: AssetSupplyResponse;
}
export interface QueryAssetSupplyResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyResponse";
    value: Uint8Array;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponseAmino {
    /** asset_supply represents the supply of the asset */
    asset_supply?: AssetSupplyResponseAmino;
}
export interface QueryAssetSupplyResponseAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAssetSupplyResponse";
    value: QueryAssetSupplyResponseAmino;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponseSDKType {
    asset_supply: AssetSupplyResponseSDKType;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequest {
}
export interface QueryAssetSuppliesRequestProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesRequest";
    value: Uint8Array;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequestAmino {
}
export interface QueryAssetSuppliesRequestAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAssetSuppliesRequest";
    value: QueryAssetSuppliesRequestAmino;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequestSDKType {
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponse {
    /** asset_supplies represents the supplies of returned assets */
    assetSupplies: AssetSupplyResponse[];
}
export interface QueryAssetSuppliesResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesResponse";
    value: Uint8Array;
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponseAmino {
    /** asset_supplies represents the supplies of returned assets */
    asset_supplies?: AssetSupplyResponseAmino[];
}
export interface QueryAssetSuppliesResponseAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAssetSuppliesResponse";
    value: QueryAssetSuppliesResponseAmino;
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponseSDKType {
    asset_supplies: AssetSupplyResponseSDKType[];
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequest {
    /** swap_id represents the id of the swap to query */
    swapId: string;
}
export interface QueryAtomicSwapRequestProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapRequest";
    value: Uint8Array;
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequestAmino {
    /** swap_id represents the id of the swap to query */
    swap_id?: string;
}
export interface QueryAtomicSwapRequestAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAtomicSwapRequest";
    value: QueryAtomicSwapRequestAmino;
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequestSDKType {
    swap_id: string;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponse {
    atomicSwap: AtomicSwapResponse;
}
export interface QueryAtomicSwapResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapResponse";
    value: Uint8Array;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponseAmino {
    atomic_swap?: AtomicSwapResponseAmino;
}
export interface QueryAtomicSwapResponseAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAtomicSwapResponse";
    value: QueryAtomicSwapResponseAmino;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponseSDKType {
    atomic_swap: AtomicSwapResponseSDKType;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponse {
    /** id represents the id of the atomic swap */
    id: string;
    /** amount represents the amount being swapped */
    amount: Coin[];
    /** random_number_hash represents the hash of the random number */
    randomNumberHash: string;
    /** expire_height represents the height when the swap expires */
    expireHeight: bigint;
    /** timestamp represents the timestamp of the swap */
    timestamp: bigint;
    /** sender is the kava chain sender of the swap */
    sender: string;
    /** recipient is the kava chain recipient of the swap */
    recipient: string;
    /** sender_other_chain is the sender on the other chain */
    senderOtherChain: string;
    /** recipient_other_chain is the recipient on the other chain */
    recipientOtherChain: string;
    /** closed_block is the block when the swap is closed */
    closedBlock: bigint;
    /** status represents the current status of the swap */
    status: SwapStatus;
    /** cross_chain identifies whether the atomic swap is cross chain */
    crossChain: boolean;
    /** direction identifies if the swap is incoming or outgoing */
    direction: SwapDirection;
}
export interface AtomicSwapResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.AtomicSwapResponse";
    value: Uint8Array;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponseAmino {
    /** id represents the id of the atomic swap */
    id?: string;
    /** amount represents the amount being swapped */
    amount?: CoinAmino[];
    /** random_number_hash represents the hash of the random number */
    random_number_hash?: string;
    /** expire_height represents the height when the swap expires */
    expire_height?: string;
    /** timestamp represents the timestamp of the swap */
    timestamp?: string;
    /** sender is the kava chain sender of the swap */
    sender?: string;
    /** recipient is the kava chain recipient of the swap */
    recipient?: string;
    /** sender_other_chain is the sender on the other chain */
    sender_other_chain?: string;
    /** recipient_other_chain is the recipient on the other chain */
    recipient_other_chain?: string;
    /** closed_block is the block when the swap is closed */
    closed_block?: string;
    /** status represents the current status of the swap */
    status?: SwapStatus;
    /** cross_chain identifies whether the atomic swap is cross chain */
    cross_chain?: boolean;
    /** direction identifies if the swap is incoming or outgoing */
    direction?: SwapDirection;
}
export interface AtomicSwapResponseAminoMsg {
    type: "/kava.bep3.v1beta1.AtomicSwapResponse";
    value: AtomicSwapResponseAmino;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponseSDKType {
    id: string;
    amount: CoinSDKType[];
    random_number_hash: string;
    expire_height: bigint;
    timestamp: bigint;
    sender: string;
    recipient: string;
    sender_other_chain: string;
    recipient_other_chain: string;
    closed_block: bigint;
    status: SwapStatus;
    cross_chain: boolean;
    direction: SwapDirection;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequest {
    /** involve filters by address */
    involve: string;
    /** expiration filters by expiration block height */
    expiration: bigint;
    /** status filters by swap status */
    status: SwapStatus;
    /** direction fitlers by swap direction */
    direction: SwapDirection;
    pagination?: PageRequest;
}
export interface QueryAtomicSwapsRequestProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsRequest";
    value: Uint8Array;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequestAmino {
    /** involve filters by address */
    involve?: string;
    /** expiration filters by expiration block height */
    expiration?: string;
    /** status filters by swap status */
    status?: SwapStatus;
    /** direction fitlers by swap direction */
    direction?: SwapDirection;
    pagination?: PageRequestAmino;
}
export interface QueryAtomicSwapsRequestAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAtomicSwapsRequest";
    value: QueryAtomicSwapsRequestAmino;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequestSDKType {
    involve: string;
    expiration: bigint;
    status: SwapStatus;
    direction: SwapDirection;
    pagination?: PageRequestSDKType;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponse {
    /** atomic_swap represents the returned atomic swaps for the request */
    atomicSwaps: AtomicSwapResponse[];
    pagination?: PageResponse;
}
export interface QueryAtomicSwapsResponseProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsResponse";
    value: Uint8Array;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponseAmino {
    /** atomic_swap represents the returned atomic swaps for the request */
    atomic_swaps?: AtomicSwapResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAtomicSwapsResponseAminoMsg {
    type: "/kava.bep3.v1beta1.QueryAtomicSwapsResponse";
    value: QueryAtomicSwapsResponseAmino;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponseSDKType {
    atomic_swaps: AtomicSwapResponseSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryAssetSupplyRequest: {
    typeUrl: string;
    encode(message: QueryAssetSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAssetSupplyRequest;
    fromPartial(object: Partial<QueryAssetSupplyRequest>): QueryAssetSupplyRequest;
    fromAmino(object: QueryAssetSupplyRequestAmino): QueryAssetSupplyRequest;
    toAmino(message: QueryAssetSupplyRequest): QueryAssetSupplyRequestAmino;
    fromAminoMsg(object: QueryAssetSupplyRequestAminoMsg): QueryAssetSupplyRequest;
    fromProtoMsg(message: QueryAssetSupplyRequestProtoMsg): QueryAssetSupplyRequest;
    toProto(message: QueryAssetSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryAssetSupplyRequest): QueryAssetSupplyRequestProtoMsg;
};
export declare const AssetSupplyResponse: {
    typeUrl: string;
    encode(message: AssetSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetSupplyResponse;
    fromPartial(object: Partial<AssetSupplyResponse>): AssetSupplyResponse;
    fromAmino(object: AssetSupplyResponseAmino): AssetSupplyResponse;
    toAmino(message: AssetSupplyResponse): AssetSupplyResponseAmino;
    fromAminoMsg(object: AssetSupplyResponseAminoMsg): AssetSupplyResponse;
    fromProtoMsg(message: AssetSupplyResponseProtoMsg): AssetSupplyResponse;
    toProto(message: AssetSupplyResponse): Uint8Array;
    toProtoMsg(message: AssetSupplyResponse): AssetSupplyResponseProtoMsg;
};
export declare const QueryAssetSupplyResponse: {
    typeUrl: string;
    encode(message: QueryAssetSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAssetSupplyResponse;
    fromPartial(object: Partial<QueryAssetSupplyResponse>): QueryAssetSupplyResponse;
    fromAmino(object: QueryAssetSupplyResponseAmino): QueryAssetSupplyResponse;
    toAmino(message: QueryAssetSupplyResponse): QueryAssetSupplyResponseAmino;
    fromAminoMsg(object: QueryAssetSupplyResponseAminoMsg): QueryAssetSupplyResponse;
    fromProtoMsg(message: QueryAssetSupplyResponseProtoMsg): QueryAssetSupplyResponse;
    toProto(message: QueryAssetSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryAssetSupplyResponse): QueryAssetSupplyResponseProtoMsg;
};
export declare const QueryAssetSuppliesRequest: {
    typeUrl: string;
    encode(_: QueryAssetSuppliesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAssetSuppliesRequest;
    fromPartial(_: Partial<QueryAssetSuppliesRequest>): QueryAssetSuppliesRequest;
    fromAmino(_: QueryAssetSuppliesRequestAmino): QueryAssetSuppliesRequest;
    toAmino(_: QueryAssetSuppliesRequest): QueryAssetSuppliesRequestAmino;
    fromAminoMsg(object: QueryAssetSuppliesRequestAminoMsg): QueryAssetSuppliesRequest;
    fromProtoMsg(message: QueryAssetSuppliesRequestProtoMsg): QueryAssetSuppliesRequest;
    toProto(message: QueryAssetSuppliesRequest): Uint8Array;
    toProtoMsg(message: QueryAssetSuppliesRequest): QueryAssetSuppliesRequestProtoMsg;
};
export declare const QueryAssetSuppliesResponse: {
    typeUrl: string;
    encode(message: QueryAssetSuppliesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAssetSuppliesResponse;
    fromPartial(object: Partial<QueryAssetSuppliesResponse>): QueryAssetSuppliesResponse;
    fromAmino(object: QueryAssetSuppliesResponseAmino): QueryAssetSuppliesResponse;
    toAmino(message: QueryAssetSuppliesResponse): QueryAssetSuppliesResponseAmino;
    fromAminoMsg(object: QueryAssetSuppliesResponseAminoMsg): QueryAssetSuppliesResponse;
    fromProtoMsg(message: QueryAssetSuppliesResponseProtoMsg): QueryAssetSuppliesResponse;
    toProto(message: QueryAssetSuppliesResponse): Uint8Array;
    toProtoMsg(message: QueryAssetSuppliesResponse): QueryAssetSuppliesResponseProtoMsg;
};
export declare const QueryAtomicSwapRequest: {
    typeUrl: string;
    encode(message: QueryAtomicSwapRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAtomicSwapRequest;
    fromPartial(object: Partial<QueryAtomicSwapRequest>): QueryAtomicSwapRequest;
    fromAmino(object: QueryAtomicSwapRequestAmino): QueryAtomicSwapRequest;
    toAmino(message: QueryAtomicSwapRequest): QueryAtomicSwapRequestAmino;
    fromAminoMsg(object: QueryAtomicSwapRequestAminoMsg): QueryAtomicSwapRequest;
    fromProtoMsg(message: QueryAtomicSwapRequestProtoMsg): QueryAtomicSwapRequest;
    toProto(message: QueryAtomicSwapRequest): Uint8Array;
    toProtoMsg(message: QueryAtomicSwapRequest): QueryAtomicSwapRequestProtoMsg;
};
export declare const QueryAtomicSwapResponse: {
    typeUrl: string;
    encode(message: QueryAtomicSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAtomicSwapResponse;
    fromPartial(object: Partial<QueryAtomicSwapResponse>): QueryAtomicSwapResponse;
    fromAmino(object: QueryAtomicSwapResponseAmino): QueryAtomicSwapResponse;
    toAmino(message: QueryAtomicSwapResponse): QueryAtomicSwapResponseAmino;
    fromAminoMsg(object: QueryAtomicSwapResponseAminoMsg): QueryAtomicSwapResponse;
    fromProtoMsg(message: QueryAtomicSwapResponseProtoMsg): QueryAtomicSwapResponse;
    toProto(message: QueryAtomicSwapResponse): Uint8Array;
    toProtoMsg(message: QueryAtomicSwapResponse): QueryAtomicSwapResponseProtoMsg;
};
export declare const AtomicSwapResponse: {
    typeUrl: string;
    encode(message: AtomicSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AtomicSwapResponse;
    fromPartial(object: Partial<AtomicSwapResponse>): AtomicSwapResponse;
    fromAmino(object: AtomicSwapResponseAmino): AtomicSwapResponse;
    toAmino(message: AtomicSwapResponse): AtomicSwapResponseAmino;
    fromAminoMsg(object: AtomicSwapResponseAminoMsg): AtomicSwapResponse;
    fromProtoMsg(message: AtomicSwapResponseProtoMsg): AtomicSwapResponse;
    toProto(message: AtomicSwapResponse): Uint8Array;
    toProtoMsg(message: AtomicSwapResponse): AtomicSwapResponseProtoMsg;
};
export declare const QueryAtomicSwapsRequest: {
    typeUrl: string;
    encode(message: QueryAtomicSwapsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAtomicSwapsRequest;
    fromPartial(object: Partial<QueryAtomicSwapsRequest>): QueryAtomicSwapsRequest;
    fromAmino(object: QueryAtomicSwapsRequestAmino): QueryAtomicSwapsRequest;
    toAmino(message: QueryAtomicSwapsRequest): QueryAtomicSwapsRequestAmino;
    fromAminoMsg(object: QueryAtomicSwapsRequestAminoMsg): QueryAtomicSwapsRequest;
    fromProtoMsg(message: QueryAtomicSwapsRequestProtoMsg): QueryAtomicSwapsRequest;
    toProto(message: QueryAtomicSwapsRequest): Uint8Array;
    toProtoMsg(message: QueryAtomicSwapsRequest): QueryAtomicSwapsRequestProtoMsg;
};
export declare const QueryAtomicSwapsResponse: {
    typeUrl: string;
    encode(message: QueryAtomicSwapsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAtomicSwapsResponse;
    fromPartial(object: Partial<QueryAtomicSwapsResponse>): QueryAtomicSwapsResponse;
    fromAmino(object: QueryAtomicSwapsResponseAmino): QueryAtomicSwapsResponse;
    toAmino(message: QueryAtomicSwapsResponse): QueryAtomicSwapsResponseAmino;
    fromAminoMsg(object: QueryAtomicSwapsResponseAminoMsg): QueryAtomicSwapsResponse;
    fromProtoMsg(message: QueryAtomicSwapsResponseProtoMsg): QueryAtomicSwapsResponse;
    toProto(message: QueryAtomicSwapsResponse): Uint8Array;
    toProtoMsg(message: QueryAtomicSwapsResponse): QueryAtomicSwapsResponseProtoMsg;
};
