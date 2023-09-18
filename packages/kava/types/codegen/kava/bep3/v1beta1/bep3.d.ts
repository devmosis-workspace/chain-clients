import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export declare const SwapStatusAmino: typeof SwapStatus;
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
export declare const SwapDirectionAmino: typeof SwapDirection;
export declare function swapDirectionFromJSON(object: any): SwapDirection;
export declare function swapDirectionToJSON(object: SwapDirection): string;
/** Params defines the parameters for the bep3 module. */
export interface Params {
    /** asset_params define the parameters for each bep3 asset */
    assetParams: AssetParam[];
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the bep3 module. */
export interface ParamsAmino {
    /** asset_params define the parameters for each bep3 asset */
    asset_params: AssetParamAmino[];
}
export interface ParamsAminoMsg {
    type: "/kava.bep3.v1beta1.Params";
    value: ParamsAmino;
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
    coinId: bigint;
    /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
    supplyLimit: SupplyLimit;
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
    minBlockLock: bigint;
    /** min_block_lock defined the maximum blocks to lock */
    maxBlockLock: bigint;
}
export interface AssetParamProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.AssetParam";
    value: Uint8Array;
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParamAmino {
    /** denom represents the denominatin for this asset */
    denom: string;
    /** coin_id represents the registered coin type to use (https://github.com/satoshilabs/slips/blob/master/slip-0044.md) */
    coin_id: string;
    /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
    supply_limit?: SupplyLimitAmino;
    /** active specifies if the asset is live or paused */
    active: boolean;
    /** deputy_address the kava address of the deputy */
    deputy_address: Uint8Array;
    /** fixed_fee defines the fee for incoming swaps */
    fixed_fee: string;
    /** min_swap_amount defines the minimum amount able to be swapped in a single message */
    min_swap_amount: string;
    /** max_swap_amount defines the maximum amount able to be swapped in a single message */
    max_swap_amount: string;
    /** min_block_lock defined the minimum blocks to lock */
    min_block_lock: string;
    /** min_block_lock defined the maximum blocks to lock */
    max_block_lock: string;
}
export interface AssetParamAminoMsg {
    type: "/kava.bep3.v1beta1.AssetParam";
    value: AssetParamAmino;
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParamSDKType {
    denom: string;
    coin_id: bigint;
    supply_limit: SupplyLimitSDKType;
    active: boolean;
    deputy_address: Uint8Array;
    fixed_fee: string;
    min_swap_amount: string;
    max_swap_amount: string;
    min_block_lock: bigint;
    max_block_lock: bigint;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimit {
    /** limit defines the total supply allowed */
    limit: string;
    /** time_limited enables or disables time based supply limiting */
    timeLimited: boolean;
    /** time_period specifies the duration that time_based_limit is evalulated */
    timePeriod: Duration;
    /** time_based_limit defines the maximum supply that can be swapped within time_period */
    timeBasedLimit: string;
}
export interface SupplyLimitProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.SupplyLimit";
    value: Uint8Array;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimitAmino {
    /** limit defines the total supply allowed */
    limit: string;
    /** time_limited enables or disables time based supply limiting */
    time_limited: boolean;
    /** time_period specifies the duration that time_based_limit is evalulated */
    time_period?: DurationAmino;
    /** time_based_limit defines the maximum supply that can be swapped within time_period */
    time_based_limit: string;
}
export interface SupplyLimitAminoMsg {
    type: "/kava.bep3.v1beta1.SupplyLimit";
    value: SupplyLimitAmino;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimitSDKType {
    limit: string;
    time_limited: boolean;
    time_period: DurationSDKType;
    time_based_limit: string;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwap {
    /** amount represents the amount being swapped */
    amount: Coin[];
    /** random_number_hash represents the hash of the random number */
    randomNumberHash: Uint8Array;
    /** expire_height represents the height when the swap expires */
    expireHeight: bigint;
    /** timestamp represents the timestamp of the swap */
    timestamp: bigint;
    /** sender is the kava chain sender of the swap */
    sender: Uint8Array;
    /** recipient is the kava chain recipient of the swap */
    recipient: Uint8Array;
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
export interface AtomicSwapProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.AtomicSwap";
    value: Uint8Array;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwapAmino {
    /** amount represents the amount being swapped */
    amount: CoinAmino[];
    /** random_number_hash represents the hash of the random number */
    random_number_hash: Uint8Array;
    /** expire_height represents the height when the swap expires */
    expire_height: string;
    /** timestamp represents the timestamp of the swap */
    timestamp: string;
    /** sender is the kava chain sender of the swap */
    sender: Uint8Array;
    /** recipient is the kava chain recipient of the swap */
    recipient: Uint8Array;
    /** sender_other_chain is the sender on the other chain */
    sender_other_chain: string;
    /** recipient_other_chain is the recipient on the other chain */
    recipient_other_chain: string;
    /** closed_block is the block when the swap is closed */
    closed_block: string;
    /** status represents the current status of the swap */
    status: SwapStatus;
    /** cross_chain identifies whether the atomic swap is cross chain */
    cross_chain: boolean;
    /** direction identifies if the swap is incoming or outgoing */
    direction: SwapDirection;
}
export interface AtomicSwapAminoMsg {
    type: "/kava.bep3.v1beta1.AtomicSwap";
    value: AtomicSwapAmino;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwapSDKType {
    amount: CoinSDKType[];
    random_number_hash: Uint8Array;
    expire_height: bigint;
    timestamp: bigint;
    sender: Uint8Array;
    recipient: Uint8Array;
    sender_other_chain: string;
    recipient_other_chain: string;
    closed_block: bigint;
    status: SwapStatus;
    cross_chain: boolean;
    direction: SwapDirection;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupply {
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
export interface AssetSupplyProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.AssetSupply";
    value: Uint8Array;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupplyAmino {
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
export interface AssetSupplyAminoMsg {
    type: "/kava.bep3.v1beta1.AssetSupply";
    value: AssetSupplyAmino;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupplySDKType {
    incoming_supply: CoinSDKType;
    outgoing_supply: CoinSDKType;
    current_supply: CoinSDKType;
    time_limited_current_supply: CoinSDKType;
    time_elapsed: DurationSDKType;
}
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
export declare const AssetParam: {
    typeUrl: string;
    encode(message: AssetParam, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetParam;
    fromPartial(object: Partial<AssetParam>): AssetParam;
    fromAmino(object: AssetParamAmino): AssetParam;
    toAmino(message: AssetParam): AssetParamAmino;
    fromAminoMsg(object: AssetParamAminoMsg): AssetParam;
    fromProtoMsg(message: AssetParamProtoMsg): AssetParam;
    toProto(message: AssetParam): Uint8Array;
    toProtoMsg(message: AssetParam): AssetParamProtoMsg;
};
export declare const SupplyLimit: {
    typeUrl: string;
    encode(message: SupplyLimit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SupplyLimit;
    fromPartial(object: Partial<SupplyLimit>): SupplyLimit;
    fromAmino(object: SupplyLimitAmino): SupplyLimit;
    toAmino(message: SupplyLimit): SupplyLimitAmino;
    fromAminoMsg(object: SupplyLimitAminoMsg): SupplyLimit;
    fromProtoMsg(message: SupplyLimitProtoMsg): SupplyLimit;
    toProto(message: SupplyLimit): Uint8Array;
    toProtoMsg(message: SupplyLimit): SupplyLimitProtoMsg;
};
export declare const AtomicSwap: {
    typeUrl: string;
    encode(message: AtomicSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AtomicSwap;
    fromPartial(object: Partial<AtomicSwap>): AtomicSwap;
    fromAmino(object: AtomicSwapAmino): AtomicSwap;
    toAmino(message: AtomicSwap): AtomicSwapAmino;
    fromAminoMsg(object: AtomicSwapAminoMsg): AtomicSwap;
    fromProtoMsg(message: AtomicSwapProtoMsg): AtomicSwap;
    toProto(message: AtomicSwap): Uint8Array;
    toProtoMsg(message: AtomicSwap): AtomicSwapProtoMsg;
};
export declare const AssetSupply: {
    typeUrl: string;
    encode(message: AssetSupply, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetSupply;
    fromPartial(object: Partial<AssetSupply>): AssetSupply;
    fromAmino(object: AssetSupplyAmino): AssetSupply;
    toAmino(message: AssetSupply): AssetSupplyAmino;
    fromAminoMsg(object: AssetSupplyAminoMsg): AssetSupply;
    fromProtoMsg(message: AssetSupplyProtoMsg): AssetSupply;
    toProto(message: AssetSupply): Uint8Array;
    toProtoMsg(message: AssetSupply): AssetSupplyProtoMsg;
};
