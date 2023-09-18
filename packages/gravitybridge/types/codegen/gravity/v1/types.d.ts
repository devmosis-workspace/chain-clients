import { Metadata, MetadataAmino, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
    power: bigint;
    ethereumAddress: string;
}
export interface BridgeValidatorProtoMsg {
    typeUrl: "/gravity.v1.BridgeValidator";
    value: Uint8Array;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorAmino {
    power: string;
    ethereum_address: string;
}
export interface BridgeValidatorAminoMsg {
    type: "/gravity.v1.BridgeValidator";
    value: BridgeValidatorAmino;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
    power: bigint;
    ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
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
    typeUrl: "/gravity.v1.Valset";
    value: Uint8Array;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
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
    type: "/gravity.v1.Valset";
    value: ValsetAmino;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
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
    typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight";
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
    type: "/gravity.v1.LastObservedEthereumBlockHeight";
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
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
    erc20: string;
    denom: string;
}
export interface ERC20ToDenomProtoMsg {
    typeUrl: "/gravity.v1.ERC20ToDenom";
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
    type: "/gravity.v1.ERC20ToDenom";
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
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposal {
    title: string;
    description: string;
    targetNonce: bigint;
}
export interface UnhaltBridgeProposalProtoMsg {
    typeUrl: "/gravity.v1.UnhaltBridgeProposal";
    value: Uint8Array;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposalAmino {
    title: string;
    description: string;
    target_nonce: string;
}
export interface UnhaltBridgeProposalAminoMsg {
    type: "/gravity.v1.UnhaltBridgeProposal";
    value: UnhaltBridgeProposalAmino;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposalSDKType {
    title: string;
    description: string;
    target_nonce: bigint;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposal {
    title: string;
    description: string;
    denom: string;
    recipients: Uint8Array;
    amounts: bigint[];
}
export interface AirdropProposalProtoMsg {
    typeUrl: "/gravity.v1.AirdropProposal";
    value: Uint8Array;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposalAmino {
    title: string;
    description: string;
    denom: string;
    recipients: Uint8Array;
    amounts: string[];
}
export interface AirdropProposalAminoMsg {
    type: "/gravity.v1.AirdropProposal";
    value: AirdropProposalAmino;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposalSDKType {
    title: string;
    description: string;
    denom: string;
    recipients: Uint8Array;
    amounts: bigint[];
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposal {
    title: string;
    description: string;
    metadata: Metadata;
    ibcDenom: string;
}
export interface IBCMetadataProposalProtoMsg {
    typeUrl: "/gravity.v1.IBCMetadataProposal";
    value: Uint8Array;
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposalAmino {
    title: string;
    description: string;
    metadata?: MetadataAmino;
    ibc_denom: string;
}
export interface IBCMetadataProposalAminoMsg {
    type: "/gravity.v1.IBCMetadataProposal";
    value: IBCMetadataProposalAmino;
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposalSDKType {
    title: string;
    description: string;
    metadata: MetadataSDKType;
    ibc_denom: string;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForward {
    /** the destination address. sdk.AccAddress does not preserve foreign prefixes */
    foreignReceiver: string;
    /** the token sent from ethereum to the ibc-enabled chain over `IbcChannel` */
    token: Coin;
    /** the IBC channel to send `Amount` over via ibc-transfer module */
    ibcChannel: string;
    /** the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue */
    eventNonce: bigint;
}
export interface PendingIbcAutoForwardProtoMsg {
    typeUrl: "/gravity.v1.PendingIbcAutoForward";
    value: Uint8Array;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForwardAmino {
    /** the destination address. sdk.AccAddress does not preserve foreign prefixes */
    foreign_receiver: string;
    /** the token sent from ethereum to the ibc-enabled chain over `IbcChannel` */
    token?: CoinAmino;
    /** the IBC channel to send `Amount` over via ibc-transfer module */
    ibc_channel: string;
    /** the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue */
    event_nonce: string;
}
export interface PendingIbcAutoForwardAminoMsg {
    type: "/gravity.v1.PendingIbcAutoForward";
    value: PendingIbcAutoForwardAmino;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForwardSDKType {
    foreign_receiver: string;
    token: CoinSDKType;
    ibc_channel: string;
    event_nonce: bigint;
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
export declare const UnhaltBridgeProposal: {
    typeUrl: string;
    encode(message: UnhaltBridgeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UnhaltBridgeProposal;
    fromPartial(object: Partial<UnhaltBridgeProposal>): UnhaltBridgeProposal;
    fromAmino(object: UnhaltBridgeProposalAmino): UnhaltBridgeProposal;
    toAmino(message: UnhaltBridgeProposal): UnhaltBridgeProposalAmino;
    fromAminoMsg(object: UnhaltBridgeProposalAminoMsg): UnhaltBridgeProposal;
    fromProtoMsg(message: UnhaltBridgeProposalProtoMsg): UnhaltBridgeProposal;
    toProto(message: UnhaltBridgeProposal): Uint8Array;
    toProtoMsg(message: UnhaltBridgeProposal): UnhaltBridgeProposalProtoMsg;
};
export declare const AirdropProposal: {
    typeUrl: string;
    encode(message: AirdropProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AirdropProposal;
    fromPartial(object: Partial<AirdropProposal>): AirdropProposal;
    fromAmino(object: AirdropProposalAmino): AirdropProposal;
    toAmino(message: AirdropProposal): AirdropProposalAmino;
    fromAminoMsg(object: AirdropProposalAminoMsg): AirdropProposal;
    fromProtoMsg(message: AirdropProposalProtoMsg): AirdropProposal;
    toProto(message: AirdropProposal): Uint8Array;
    toProtoMsg(message: AirdropProposal): AirdropProposalProtoMsg;
};
export declare const IBCMetadataProposal: {
    typeUrl: string;
    encode(message: IBCMetadataProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCMetadataProposal;
    fromPartial(object: Partial<IBCMetadataProposal>): IBCMetadataProposal;
    fromAmino(object: IBCMetadataProposalAmino): IBCMetadataProposal;
    toAmino(message: IBCMetadataProposal): IBCMetadataProposalAmino;
    fromAminoMsg(object: IBCMetadataProposalAminoMsg): IBCMetadataProposal;
    fromProtoMsg(message: IBCMetadataProposalProtoMsg): IBCMetadataProposal;
    toProto(message: IBCMetadataProposal): Uint8Array;
    toProtoMsg(message: IBCMetadataProposal): IBCMetadataProposalProtoMsg;
};
export declare const PendingIbcAutoForward: {
    typeUrl: string;
    encode(message: PendingIbcAutoForward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingIbcAutoForward;
    fromPartial(object: Partial<PendingIbcAutoForward>): PendingIbcAutoForward;
    fromAmino(object: PendingIbcAutoForwardAmino): PendingIbcAutoForward;
    toAmino(message: PendingIbcAutoForward): PendingIbcAutoForwardAmino;
    fromAminoMsg(object: PendingIbcAutoForwardAminoMsg): PendingIbcAutoForward;
    fromProtoMsg(message: PendingIbcAutoForwardProtoMsg): PendingIbcAutoForward;
    toProto(message: PendingIbcAutoForward): Uint8Array;
    toProtoMsg(message: PendingIbcAutoForward): PendingIbcAutoForwardProtoMsg;
};
