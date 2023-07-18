import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** SwapStatus is the status of an AtomicSwap */
export declare enum SwapStatus {
    /** SWAP_STATUS_UNSPECIFIED - SWAP_STATUS_UNSPECIFIED represents an unspecified status */
    SWAP_STATUS_UNSPECIFIED = 0,
    /** SWAP_STATUS_OPEN - SWAP_STATUS_OPEN represents an open swap */
    SWAP_STATUS_OPEN = 1,
    /** SWAP_STATUS_COMPLETED - SWAP_STATUS_COMPLETED represents a completed swap */
    SWAP_STATUS_COMPLETED = 2,
    /** SWAP_STATUS_EXPIRED - SWAP_STATUS_EXPIRED represents an expired swap */
    SWAP_STATUS_EXPIRED = 3,
    UNRECOGNIZED = -1
}
export declare const SwapStatusSDKType: typeof SwapStatus;
export declare function swapStatusFromJSON(object: any): SwapStatus;
export declare function swapStatusToJSON(object: SwapStatus): string;
/** SwapDirection is the direction of an AtomicSwap */
export declare enum SwapDirection {
    /** SWAP_DIRECTION_UNSPECIFIED - SWAP_DIRECTION_UNSPECIFIED represents unspecified or invalid swap direcation */
    SWAP_DIRECTION_UNSPECIFIED = 0,
    /** SWAP_DIRECTION_INCOMING - SWAP_DIRECTION_INCOMING represents is incoming swap (to the kava chain) */
    SWAP_DIRECTION_INCOMING = 1,
    /** SWAP_DIRECTION_OUTGOING - SWAP_DIRECTION_OUTGOING represents an outgoing swap (from the kava chain) */
    SWAP_DIRECTION_OUTGOING = 2,
    UNRECOGNIZED = -1
}
export declare const SwapDirectionSDKType: typeof SwapDirection;
export declare function swapDirectionFromJSON(object: any): SwapDirection;
export declare function swapDirectionToJSON(object: SwapDirection): string;
/** Params defines the parameters for the bep3 module. */
export interface Params {
    /** asset_params define the parameters for each bep3 asset */
    assetParams: AssetParam[];
}
/** Params defines the parameters for the bep3 module. */
export interface ParamsSDKType {
    asset_params: AssetParamSDKType[];
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParam {
    /** denom represents the denominatin for this asset */
    denom: string;
    /** coin_id represents the registered coin type to use (https://github.com/satoshilabs/slips/blob/master/slip-0044.md) */
    coinId: Long;
    /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
    supplyLimit?: SupplyLimit;
    /** active specifies if the asset is live or paused */
    active: boolean;
    /** deputy_address the kava address of the deputy */
    deputyAddress: Uint8Array;
    /** fixed_fee defines the fee for incoming swaps */
    fixedFee: string;
    /** min_swap_amount defines the minimum amount able to be swapped in a single message */
    minSwapAmount: string;
    /** max_swap_amount defines the maximum amount able to be swapped in a single message */
    maxSwapAmount: string;
    /** min_block_lock defined the minimum blocks to lock */
    minBlockLock: Long;
    /** min_block_lock defined the maximum blocks to lock */
    maxBlockLock: Long;
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParamSDKType {
    denom: string;
    coin_id: Long;
    supply_limit?: SupplyLimitSDKType;
    active: boolean;
    deputy_address: Uint8Array;
    fixed_fee: string;
    min_swap_amount: string;
    max_swap_amount: string;
    min_block_lock: Long;
    max_block_lock: Long;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimit {
    /** limit defines the total supply allowed */
    limit: string;
    /** time_limited enables or disables time based supply limiting */
    timeLimited: boolean;
    /** time_period specifies the duration that time_based_limit is evalulated */
    timePeriod?: Duration;
    /** time_based_limit defines the maximum supply that can be swapped within time_period */
    timeBasedLimit: string;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimitSDKType {
    limit: string;
    time_limited: boolean;
    time_period?: DurationSDKType;
    time_based_limit: string;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwap {
    /** amount represents the amount being swapped */
    amount: Coin[];
    /** random_number_hash represents the hash of the random number */
    randomNumberHash: Uint8Array;
    /** expire_height represents the height when the swap expires */
    expireHeight: Long;
    /** timestamp represents the timestamp of the swap */
    timestamp: Long;
    /** sender is the kava chain sender of the swap */
    sender: Uint8Array;
    /** recipient is the kava chain recipient of the swap */
    recipient: Uint8Array;
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
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwapSDKType {
    amount: CoinSDKType[];
    random_number_hash: Uint8Array;
    expire_height: Long;
    timestamp: Long;
    sender: Uint8Array;
    recipient: Uint8Array;
    sender_other_chain: string;
    recipient_other_chain: string;
    closed_block: Long;
    status: SwapStatus;
    cross_chain: boolean;
    direction: SwapDirection;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupply {
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
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupplySDKType {
    incoming_supply?: CoinSDKType;
    outgoing_supply?: CoinSDKType;
    current_supply?: CoinSDKType;
    time_limited_current_supply?: CoinSDKType;
    time_elapsed?: DurationSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const AssetParam: {
    encode(message: AssetParam, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetParam;
    fromPartial(object: Partial<AssetParam>): AssetParam;
};
export declare const SupplyLimit: {
    encode(message: SupplyLimit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SupplyLimit;
    fromPartial(object: Partial<SupplyLimit>): SupplyLimit;
};
export declare const AtomicSwap: {
    encode(message: AtomicSwap, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AtomicSwap;
    fromPartial(object: Partial<AtomicSwap>): AtomicSwap;
};
export declare const AssetSupply: {
    encode(message: AssetSupply, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetSupply;
    fromPartial(object: Partial<AssetSupply>): AssetSupply;
};
