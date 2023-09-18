import { BinaryWriter } from "../../../binary";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
    power: bigint;
    ethereumAddress: string;
}
export interface BridgeValidatorProtoMsg {
    typeUrl: "/injective.peggy.v1.BridgeValidator";
    value: Uint8Array;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorAmino {
    power: string;
    ethereum_address: string;
}
export interface BridgeValidatorAminoMsg {
    type: "/injective.peggy.v1.BridgeValidator";
    value: BridgeValidatorAmino;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
    power: bigint;
    ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
    nonce: bigint;
    members: BridgeValidator[];
    height: bigint;
    rewardAmount: string;
    /** the reward token in it's Ethereum hex address representation */
    rewardToken: string;
}
export interface ValsetProtoMsg {
    typeUrl: "/injective.peggy.v1.Valset";
    value: Uint8Array;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetAmino {
    nonce: string;
    members: BridgeValidatorAmino[];
    height: string;
    reward_amount: string;
    /** the reward token in it's Ethereum hex address representation */
    reward_token: string;
}
export interface ValsetAminoMsg {
    type: "/injective.peggy.v1.Valset";
    value: ValsetAmino;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
    nonce: bigint;
    members: BridgeValidatorSDKType[];
    height: bigint;
    reward_amount: string;
    reward_token: string;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
    cosmosBlockHeight: bigint;
    ethereumBlockHeight: bigint;
}
export interface LastObservedEthereumBlockHeightProtoMsg {
    typeUrl: "/injective.peggy.v1.LastObservedEthereumBlockHeight";
    value: Uint8Array;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightAmino {
    cosmos_block_height: string;
    ethereum_block_height: string;
}
export interface LastObservedEthereumBlockHeightAminoMsg {
    type: "/injective.peggy.v1.LastObservedEthereumBlockHeight";
    value: LastObservedEthereumBlockHeightAmino;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightSDKType {
    cosmos_block_height: bigint;
    ethereum_block_height: bigint;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEvent {
    ethereumEventNonce: bigint;
    ethereumEventHeight: bigint;
}
export interface LastClaimEventProtoMsg {
    typeUrl: "/injective.peggy.v1.LastClaimEvent";
    value: Uint8Array;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEventAmino {
    ethereum_event_nonce: string;
    ethereum_event_height: string;
}
export interface LastClaimEventAminoMsg {
    type: "/injective.peggy.v1.LastClaimEvent";
    value: LastClaimEventAmino;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEventSDKType {
    ethereum_event_nonce: bigint;
    ethereum_event_height: bigint;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
    erc20: string;
    denom: string;
}
export interface ERC20ToDenomProtoMsg {
    typeUrl: "/injective.peggy.v1.ERC20ToDenom";
    value: Uint8Array;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomAmino {
    erc20: string;
    denom: string;
}
export interface ERC20ToDenomAminoMsg {
    type: "/injective.peggy.v1.ERC20ToDenom";
    value: ERC20ToDenomAmino;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomSDKType {
    erc20: string;
    denom: string;
}
export declare const BridgeValidator: {
    typeUrl: string;
    encode(message: BridgeValidator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BridgeValidator;
    fromPartial(object: Partial<BridgeValidator>): BridgeValidator;
    fromAmino(object: BridgeValidatorAmino): BridgeValidator;
    toAmino(message: BridgeValidator): BridgeValidatorAmino;
    fromAminoMsg(object: BridgeValidatorAminoMsg): BridgeValidator;
    fromProtoMsg(message: BridgeValidatorProtoMsg): BridgeValidator;
    toProto(message: BridgeValidator): Uint8Array;
    toProtoMsg(message: BridgeValidator): BridgeValidatorProtoMsg;
};
export declare const Valset: {
    typeUrl: string;
    encode(message: Valset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Valset;
    fromPartial(object: Partial<Valset>): Valset;
    fromAmino(object: ValsetAmino): Valset;
    toAmino(message: Valset): ValsetAmino;
    fromAminoMsg(object: ValsetAminoMsg): Valset;
    fromProtoMsg(message: ValsetProtoMsg): Valset;
    toProto(message: Valset): Uint8Array;
    toProtoMsg(message: Valset): ValsetProtoMsg;
};
export declare const LastObservedEthereumBlockHeight: {
    typeUrl: string;
    encode(message: LastObservedEthereumBlockHeight, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LastObservedEthereumBlockHeight;
    fromPartial(object: Partial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight;
    fromAmino(object: LastObservedEthereumBlockHeightAmino): LastObservedEthereumBlockHeight;
    toAmino(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightAmino;
    fromAminoMsg(object: LastObservedEthereumBlockHeightAminoMsg): LastObservedEthereumBlockHeight;
    fromProtoMsg(message: LastObservedEthereumBlockHeightProtoMsg): LastObservedEthereumBlockHeight;
    toProto(message: LastObservedEthereumBlockHeight): Uint8Array;
    toProtoMsg(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightProtoMsg;
};
export declare const LastClaimEvent: {
    typeUrl: string;
    encode(message: LastClaimEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LastClaimEvent;
    fromPartial(object: Partial<LastClaimEvent>): LastClaimEvent;
    fromAmino(object: LastClaimEventAmino): LastClaimEvent;
    toAmino(message: LastClaimEvent): LastClaimEventAmino;
    fromAminoMsg(object: LastClaimEventAminoMsg): LastClaimEvent;
    fromProtoMsg(message: LastClaimEventProtoMsg): LastClaimEvent;
    toProto(message: LastClaimEvent): Uint8Array;
    toProtoMsg(message: LastClaimEvent): LastClaimEventProtoMsg;
};
export declare const ERC20ToDenom: {
    typeUrl: string;
    encode(message: ERC20ToDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ERC20ToDenom;
    fromPartial(object: Partial<ERC20ToDenom>): ERC20ToDenom;
    fromAmino(object: ERC20ToDenomAmino): ERC20ToDenom;
    toAmino(message: ERC20ToDenom): ERC20ToDenomAmino;
    fromAminoMsg(object: ERC20ToDenomAminoMsg): ERC20ToDenom;
    fromProtoMsg(message: ERC20ToDenomProtoMsg): ERC20ToDenom;
    toProto(message: ERC20ToDenom): Uint8Array;
    toProtoMsg(message: ERC20ToDenom): ERC20ToDenomProtoMsg;
};
