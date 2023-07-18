import { SwapStatus, SwapDirection, Params, ParamsSDKType } from "./bep3";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponse {
    /** params represents the parameters of the module */
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequest {
    /** denom filters the asset response for the specified denom */
    denom: string;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequestSDKType {
    denom: string;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponse {
    /** incoming_supply represents the incoming supply of an asset */
    incomingSupply?: Coin;
    /** outgoing_supply represents the outgoing supply of an asset */
    outgoingSupply?: Coin;
    /** current_supply represents the current on-chain supply of an asset */
    currentSupply?: Coin;
    /** time_limited_current_supply represents the time limited current supply of an asset */
    timeLimitedCurrentSupply?: Coin;
    /** time_elapsed represents the time elapsed */
    timeElapsed?: Duration;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponseSDKType {
    incoming_supply?: CoinSDKType;
    outgoing_supply?: CoinSDKType;
    current_supply?: CoinSDKType;
    time_limited_current_supply?: CoinSDKType;
    time_elapsed?: DurationSDKType;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponse {
    /** asset_supply represents the supply of the asset */
    assetSupply?: AssetSupplyResponse;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponseSDKType {
    asset_supply?: AssetSupplyResponseSDKType;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequest {
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequestSDKType {
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponse {
    /** asset_supplies represents the supplies of returned assets */
    assetSupplies: AssetSupplyResponse[];
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
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequestSDKType {
    swap_id: string;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponse {
    atomicSwap?: AtomicSwapResponse;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponseSDKType {
    atomic_swap?: AtomicSwapResponseSDKType;
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
    expireHeight: Long;
    /** timestamp represents the timestamp of the swap */
    timestamp: Long;
    /** sender is the kava chain sender of the swap */
    sender: string;
    /** recipient is the kava chain recipient of the swap */
    recipient: string;
    /** sender_other_chain is the sender on the other chain */
    senderOtherChain: string;
    /** recipient_other_chain is the recipient on the other chain */
    recipientOtherChain: string;
    /** closed_block is the block when the swap is closed */
    closedBlock: Long;
    /** status represents the current status of the swap */
    status: SwapStatus;
    /** cross_chain identifies whether the atomic swap is cross chain */
    crossChain: boolean;
    /** direction identifies if the swap is incoming or outgoing */
    direction: SwapDirection;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponseSDKType {
    id: string;
    amount: CoinSDKType[];
    random_number_hash: string;
    expire_height: Long;
    timestamp: Long;
    sender: string;
    recipient: string;
    sender_other_chain: string;
    recipient_other_chain: string;
    closed_block: Long;
    status: SwapStatus;
    cross_chain: boolean;
    direction: SwapDirection;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequest {
    /** involve filters by address */
    involve: string;
    /** expiration filters by expiration block height */
    expiration: Long;
    /** status filters by swap status */
    status: SwapStatus;
    /** direction fitlers by swap direction */
    direction: SwapDirection;
    pagination?: PageRequest;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequestSDKType {
    involve: string;
    expiration: Long;
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
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponseSDKType {
    atomic_swaps: AtomicSwapResponseSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAssetSupplyRequest: {
    encode(message: QueryAssetSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAssetSupplyRequest;
    fromPartial(object: Partial<QueryAssetSupplyRequest>): QueryAssetSupplyRequest;
};
export declare const AssetSupplyResponse: {
    encode(message: AssetSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetSupplyResponse;
    fromPartial(object: Partial<AssetSupplyResponse>): AssetSupplyResponse;
};
export declare const QueryAssetSupplyResponse: {
    encode(message: QueryAssetSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAssetSupplyResponse;
    fromPartial(object: Partial<QueryAssetSupplyResponse>): QueryAssetSupplyResponse;
};
export declare const QueryAssetSuppliesRequest: {
    encode(_: QueryAssetSuppliesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAssetSuppliesRequest;
    fromPartial(_: Partial<QueryAssetSuppliesRequest>): QueryAssetSuppliesRequest;
};
export declare const QueryAssetSuppliesResponse: {
    encode(message: QueryAssetSuppliesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAssetSuppliesResponse;
    fromPartial(object: Partial<QueryAssetSuppliesResponse>): QueryAssetSuppliesResponse;
};
export declare const QueryAtomicSwapRequest: {
    encode(message: QueryAtomicSwapRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAtomicSwapRequest;
    fromPartial(object: Partial<QueryAtomicSwapRequest>): QueryAtomicSwapRequest;
};
export declare const QueryAtomicSwapResponse: {
    encode(message: QueryAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAtomicSwapResponse;
    fromPartial(object: Partial<QueryAtomicSwapResponse>): QueryAtomicSwapResponse;
};
export declare const AtomicSwapResponse: {
    encode(message: AtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AtomicSwapResponse;
    fromPartial(object: Partial<AtomicSwapResponse>): AtomicSwapResponse;
};
export declare const QueryAtomicSwapsRequest: {
    encode(message: QueryAtomicSwapsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAtomicSwapsRequest;
    fromPartial(object: Partial<QueryAtomicSwapsRequest>): QueryAtomicSwapsRequest;
};
export declare const QueryAtomicSwapsResponse: {
    encode(message: QueryAtomicSwapsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAtomicSwapsResponse;
    fromPartial(object: Partial<QueryAtomicSwapsResponse>): QueryAtomicSwapsResponse;
};
