import { Metadata, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
    power: Long;
    ethereumAddress: string;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
    power: Long;
    ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
    nonce: Long;
    members: BridgeValidator[];
    height: Long;
    rewardAmount: string;
    /** the reward token in it's Ethereum hex address representation */
    rewardToken: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
    nonce: Long;
    members: BridgeValidatorSDKType[];
    height: Long;
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
    cosmosBlockHeight: Long;
    ethereumBlockHeight: Long;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightSDKType {
    cosmos_block_height: Long;
    ethereum_block_height: Long;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
    erc20: string;
    denom: string;
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
    targetNonce: Long;
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
    target_nonce: Long;
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
    amounts: Long[];
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
    amounts: Long[];
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
    metadata?: Metadata;
    ibcDenom: string;
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
    metadata?: MetadataSDKType;
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
    token?: Coin;
    /** the IBC channel to send `Amount` over via ibc-transfer module */
    ibcChannel: string;
    /** the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue */
    eventNonce: Long;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForwardSDKType {
    foreign_receiver: string;
    token?: CoinSDKType;
    ibc_channel: string;
    event_nonce: Long;
}
export declare const BridgeValidator: {
    encode(message: BridgeValidator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BridgeValidator;
    fromPartial(object: Partial<BridgeValidator>): BridgeValidator;
};
export declare const Valset: {
    encode(message: Valset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Valset;
    fromPartial(object: Partial<Valset>): Valset;
};
export declare const LastObservedEthereumBlockHeight: {
    encode(message: LastObservedEthereumBlockHeight, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LastObservedEthereumBlockHeight;
    fromPartial(object: Partial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight;
};
export declare const ERC20ToDenom: {
    encode(message: ERC20ToDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ERC20ToDenom;
    fromPartial(object: Partial<ERC20ToDenom>): ERC20ToDenom;
};
export declare const UnhaltBridgeProposal: {
    encode(message: UnhaltBridgeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UnhaltBridgeProposal;
    fromPartial(object: Partial<UnhaltBridgeProposal>): UnhaltBridgeProposal;
};
export declare const AirdropProposal: {
    encode(message: AirdropProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AirdropProposal;
    fromPartial(object: Partial<AirdropProposal>): AirdropProposal;
};
export declare const IBCMetadataProposal: {
    encode(message: IBCMetadataProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IBCMetadataProposal;
    fromPartial(object: Partial<IBCMetadataProposal>): IBCMetadataProposal;
};
export declare const PendingIbcAutoForward: {
    encode(message: PendingIbcAutoForward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PendingIbcAutoForward;
    fromPartial(object: Partial<PendingIbcAutoForward>): PendingIbcAutoForward;
};
