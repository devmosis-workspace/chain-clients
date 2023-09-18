import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorAmino, BridgeValidatorSDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddress {
    validator: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgSetOrchestratorAddressProtoMsg {
    typeUrl: "/gravity.v1.MsgSetOrchestratorAddress";
    value: Uint8Array;
}
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddressAmino {
    validator: string;
    orchestrator: string;
    eth_address: string;
}
export interface MsgSetOrchestratorAddressAminoMsg {
    type: "/gravity.v1.MsgSetOrchestratorAddress";
    value: MsgSetOrchestratorAddressAmino;
}
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddressSDKType {
    validator: string;
    orchestrator: string;
    eth_address: string;
}
export interface MsgSetOrchestratorAddressResponse {
}
export interface MsgSetOrchestratorAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse";
    value: Uint8Array;
}
export interface MsgSetOrchestratorAddressResponseAmino {
}
export interface MsgSetOrchestratorAddressResponseAminoMsg {
    type: "/gravity.v1.MsgSetOrchestratorAddressResponse";
    value: MsgSetOrchestratorAddressResponseAmino;
}
export interface MsgSetOrchestratorAddressResponseSDKType {
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
    nonce: bigint;
    orchestrator: string;
    ethAddress: string;
    signature: string;
}
export interface MsgValsetConfirmProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetConfirm";
    value: Uint8Array;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmAmino {
    nonce: string;
    orchestrator: string;
    eth_address: string;
    signature: string;
}
export interface MsgValsetConfirmAminoMsg {
    type: "/gravity.v1.MsgValsetConfirm";
    value: MsgValsetConfirmAmino;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmSDKType {
    nonce: bigint;
    orchestrator: string;
    eth_address: string;
    signature: string;
}
export interface MsgValsetConfirmResponse {
}
export interface MsgValsetConfirmResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetConfirmResponse";
    value: Uint8Array;
}
export interface MsgValsetConfirmResponseAmino {
}
export interface MsgValsetConfirmResponseAminoMsg {
    type: "/gravity.v1.MsgValsetConfirmResponse";
    value: MsgValsetConfirmResponseAmino;
}
export interface MsgValsetConfirmResponseSDKType {
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * BRIDGE_FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 * CHAIN_FEE:
 * the fee paid to the chain for handling the request, which must be a
 * certain percentage of the AMOUNT, as determined by governance.
 * This Msg will be rejected if CHAIN_FEE is insufficient.
 */
export interface MsgSendToEth {
    sender: string;
    ethDest: string;
    amount: Coin;
    bridgeFee: Coin;
    chainFee: Coin;
}
export interface MsgSendToEthProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToEth";
    value: Uint8Array;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * BRIDGE_FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 * CHAIN_FEE:
 * the fee paid to the chain for handling the request, which must be a
 * certain percentage of the AMOUNT, as determined by governance.
 * This Msg will be rejected if CHAIN_FEE is insufficient.
 */
export interface MsgSendToEthAmino {
    sender: string;
    eth_dest: string;
    amount?: CoinAmino;
    bridge_fee?: CoinAmino;
    chain_fee?: CoinAmino;
}
export interface MsgSendToEthAminoMsg {
    type: "/gravity.v1.MsgSendToEth";
    value: MsgSendToEthAmino;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * BRIDGE_FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 * CHAIN_FEE:
 * the fee paid to the chain for handling the request, which must be a
 * certain percentage of the AMOUNT, as determined by governance.
 * This Msg will be rejected if CHAIN_FEE is insufficient.
 */
export interface MsgSendToEthSDKType {
    sender: string;
    eth_dest: string;
    amount: CoinSDKType;
    bridge_fee: CoinSDKType;
    chain_fee: CoinSDKType;
}
export interface MsgSendToEthResponse {
}
export interface MsgSendToEthResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToEthResponse";
    value: Uint8Array;
}
export interface MsgSendToEthResponseAmino {
}
export interface MsgSendToEthResponseAminoMsg {
    type: "/gravity.v1.MsgSendToEthResponse";
    value: MsgSendToEthResponseAmino;
}
export interface MsgSendToEthResponseSDKType {
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchProtoMsg {
    typeUrl: "/gravity.v1.MsgRequestBatch";
    value: Uint8Array;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchAmino {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchAminoMsg {
    type: "/gravity.v1.MsgRequestBatch";
    value: MsgRequestBatchAmino;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchSDKType {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchResponse {
}
export interface MsgRequestBatchResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgRequestBatchResponse";
    value: Uint8Array;
}
export interface MsgRequestBatchResponseAmino {
}
export interface MsgRequestBatchResponseAminoMsg {
    type: "/gravity.v1.MsgRequestBatchResponse";
    value: MsgRequestBatchResponseAmino;
}
export interface MsgRequestBatchResponseSDKType {
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
    nonce: bigint;
    tokenContract: string;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmBatch";
    value: Uint8Array;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchAmino {
    nonce: string;
    token_contract: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchAminoMsg {
    type: "/gravity.v1.MsgConfirmBatch";
    value: MsgConfirmBatchAmino;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchSDKType {
    nonce: bigint;
    token_contract: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchResponse {
}
export interface MsgConfirmBatchResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmBatchResponse";
    value: Uint8Array;
}
export interface MsgConfirmBatchResponseAmino {
}
export interface MsgConfirmBatchResponseAminoMsg {
    type: "/gravity.v1.MsgConfirmBatchResponse";
    value: MsgConfirmBatchResponseAmino;
}
export interface MsgConfirmBatchResponseSDKType {
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCall {
    invalidationId: string;
    invalidationNonce: bigint;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmLogicCall";
    value: Uint8Array;
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCallAmino {
    invalidation_id: string;
    invalidation_nonce: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallAminoMsg {
    type: "/gravity.v1.MsgConfirmLogicCall";
    value: MsgConfirmLogicCallAmino;
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCallSDKType {
    invalidation_id: string;
    invalidation_nonce: bigint;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallResponse {
}
export interface MsgConfirmLogicCallResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse";
    value: Uint8Array;
}
export interface MsgConfirmLogicCallResponseAmino {
}
export interface MsgConfirmLogicCallResponseAminoMsg {
    type: "/gravity.v1.MsgConfirmLogicCallResponse";
    value: MsgConfirmLogicCallResponseAmino;
}
export interface MsgConfirmLogicCallResponseSDKType {
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaim {
    eventNonce: bigint;
    ethBlockHeight: bigint;
    tokenContract: string;
    amount: string;
    ethereumSender: string;
    cosmosReceiver: string;
    orchestrator: string;
}
export interface MsgSendToCosmosClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToCosmosClaim";
    value: Uint8Array;
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaimAmino {
    event_nonce: string;
    eth_block_height: string;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
}
export interface MsgSendToCosmosClaimAminoMsg {
    type: "/gravity.v1.MsgSendToCosmosClaim";
    value: MsgSendToCosmosClaimAmino;
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaimSDKType {
    event_nonce: bigint;
    eth_block_height: bigint;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
}
export interface MsgSendToCosmosClaimResponse {
}
export interface MsgSendToCosmosClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse";
    value: Uint8Array;
}
export interface MsgSendToCosmosClaimResponseAmino {
}
export interface MsgSendToCosmosClaimResponseAminoMsg {
    type: "/gravity.v1.MsgSendToCosmosClaimResponse";
    value: MsgSendToCosmosClaimResponseAmino;
}
export interface MsgSendToCosmosClaimResponseSDKType {
}
/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwards {
    /** How many queued forwards to clear, be careful about gas limits */
    forwardsToClear: bigint;
    /** This message's sender */
    executor: string;
}
export interface MsgExecuteIbcAutoForwardsProtoMsg {
    typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwards";
    value: Uint8Array;
}
/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwardsAmino {
    /** How many queued forwards to clear, be careful about gas limits */
    forwards_to_clear: string;
    /** This message's sender */
    executor: string;
}
export interface MsgExecuteIbcAutoForwardsAminoMsg {
    type: "/gravity.v1.MsgExecuteIbcAutoForwards";
    value: MsgExecuteIbcAutoForwardsAmino;
}
/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwardsSDKType {
    forwards_to_clear: bigint;
    executor: string;
}
export interface MsgExecuteIbcAutoForwardsResponse {
}
export interface MsgExecuteIbcAutoForwardsResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse";
    value: Uint8Array;
}
export interface MsgExecuteIbcAutoForwardsResponseAmino {
}
export interface MsgExecuteIbcAutoForwardsResponseAminoMsg {
    type: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse";
    value: MsgExecuteIbcAutoForwardsResponseAmino;
}
export interface MsgExecuteIbcAutoForwardsResponseSDKType {
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaim {
    eventNonce: bigint;
    ethBlockHeight: bigint;
    batchNonce: bigint;
    tokenContract: string;
    orchestrator: string;
}
export interface MsgBatchSendToEthClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgBatchSendToEthClaim";
    value: Uint8Array;
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaimAmino {
    event_nonce: string;
    eth_block_height: string;
    batch_nonce: string;
    token_contract: string;
    orchestrator: string;
}
export interface MsgBatchSendToEthClaimAminoMsg {
    type: "/gravity.v1.MsgBatchSendToEthClaim";
    value: MsgBatchSendToEthClaimAmino;
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaimSDKType {
    event_nonce: bigint;
    eth_block_height: bigint;
    batch_nonce: bigint;
    token_contract: string;
    orchestrator: string;
}
export interface MsgBatchSendToEthClaimResponse {
}
export interface MsgBatchSendToEthClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse";
    value: Uint8Array;
}
export interface MsgBatchSendToEthClaimResponseAmino {
}
export interface MsgBatchSendToEthClaimResponseAminoMsg {
    type: "/gravity.v1.MsgBatchSendToEthClaimResponse";
    value: MsgBatchSendToEthClaimResponseAmino;
}
export interface MsgBatchSendToEthClaimResponseSDKType {
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
    eventNonce: bigint;
    ethBlockHeight: bigint;
    cosmosDenom: string;
    tokenContract: string;
    name: string;
    symbol: string;
    decimals: bigint;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgERC20DeployedClaim";
    value: Uint8Array;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimAmino {
    event_nonce: string;
    eth_block_height: string;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: string;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimAminoMsg {
    type: "/gravity.v1.MsgERC20DeployedClaim";
    value: MsgERC20DeployedClaimAmino;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimSDKType {
    event_nonce: bigint;
    eth_block_height: bigint;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: bigint;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimResponse {
}
export interface MsgERC20DeployedClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse";
    value: Uint8Array;
}
export interface MsgERC20DeployedClaimResponseAmino {
}
export interface MsgERC20DeployedClaimResponseAminoMsg {
    type: "/gravity.v1.MsgERC20DeployedClaimResponse";
    value: MsgERC20DeployedClaimResponseAmino;
}
export interface MsgERC20DeployedClaimResponseSDKType {
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
    eventNonce: bigint;
    ethBlockHeight: bigint;
    invalidationId: Uint8Array;
    invalidationNonce: bigint;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim";
    value: Uint8Array;
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaimAmino {
    event_nonce: string;
    eth_block_height: string;
    invalidation_id: Uint8Array;
    invalidation_nonce: string;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimAminoMsg {
    type: "/gravity.v1.MsgLogicCallExecutedClaim";
    value: MsgLogicCallExecutedClaimAmino;
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaimSDKType {
    event_nonce: bigint;
    eth_block_height: bigint;
    invalidation_id: Uint8Array;
    invalidation_nonce: bigint;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimResponse {
}
export interface MsgLogicCallExecutedClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
    value: Uint8Array;
}
export interface MsgLogicCallExecutedClaimResponseAmino {
}
export interface MsgLogicCallExecutedClaimResponseAminoMsg {
    type: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
    value: MsgLogicCallExecutedClaimResponseAmino;
}
export interface MsgLogicCallExecutedClaimResponseSDKType {
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
    eventNonce: bigint;
    valsetNonce: bigint;
    ethBlockHeight: bigint;
    members: BridgeValidator[];
    rewardAmount: string;
    rewardToken: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetUpdatedClaim";
    value: Uint8Array;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimAmino {
    event_nonce: string;
    valset_nonce: string;
    eth_block_height: string;
    members: BridgeValidatorAmino[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimAminoMsg {
    type: "/gravity.v1.MsgValsetUpdatedClaim";
    value: MsgValsetUpdatedClaimAmino;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimSDKType {
    event_nonce: bigint;
    valset_nonce: bigint;
    eth_block_height: bigint;
    members: BridgeValidatorSDKType[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {
}
export interface MsgValsetUpdatedClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse";
    value: Uint8Array;
}
export interface MsgValsetUpdatedClaimResponseAmino {
}
export interface MsgValsetUpdatedClaimResponseAminoMsg {
    type: "/gravity.v1.MsgValsetUpdatedClaimResponse";
    value: MsgValsetUpdatedClaimResponseAmino;
}
export interface MsgValsetUpdatedClaimResponseSDKType {
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
    transactionId: bigint;
    sender: string;
}
export interface MsgCancelSendToEthProtoMsg {
    typeUrl: "/gravity.v1.MsgCancelSendToEth";
    value: Uint8Array;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthAmino {
    transaction_id: string;
    sender: string;
}
export interface MsgCancelSendToEthAminoMsg {
    type: "/gravity.v1.MsgCancelSendToEth";
    value: MsgCancelSendToEthAmino;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthSDKType {
    transaction_id: bigint;
    sender: string;
}
export interface MsgCancelSendToEthResponse {
}
export interface MsgCancelSendToEthResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgCancelSendToEthResponse";
    value: Uint8Array;
}
export interface MsgCancelSendToEthResponseAmino {
}
export interface MsgCancelSendToEthResponseAminoMsg {
    type: "/gravity.v1.MsgCancelSendToEthResponse";
    value: MsgCancelSendToEthResponseAmino;
}
export interface MsgCancelSendToEthResponseSDKType {
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
    subject: (Any) | undefined;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceProtoMsg {
    typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence";
    value: Uint8Array;
}
export type MsgSubmitBadSignatureEvidenceEncoded = Omit<MsgSubmitBadSignatureEvidence, "subject"> & {
    subject?: AnyProtoMsg | undefined;
};
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceAmino {
    subject?: AnyAmino;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceAminoMsg {
    type: "/gravity.v1.MsgSubmitBadSignatureEvidence";
    value: MsgSubmitBadSignatureEvidenceAmino;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceSDKType {
    subject: AnySDKType | undefined;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {
}
export interface MsgSubmitBadSignatureEvidenceResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
    value: Uint8Array;
}
export interface MsgSubmitBadSignatureEvidenceResponseAmino {
}
export interface MsgSubmitBadSignatureEvidenceResponseAminoMsg {
    type: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
    value: MsgSubmitBadSignatureEvidenceResponseAmino;
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {
}
export interface EventSetOperatorAddress {
    message: string;
    address: string;
}
export interface EventSetOperatorAddressProtoMsg {
    typeUrl: "/gravity.v1.EventSetOperatorAddress";
    value: Uint8Array;
}
export interface EventSetOperatorAddressAmino {
    message: string;
    address: string;
}
export interface EventSetOperatorAddressAminoMsg {
    type: "/gravity.v1.EventSetOperatorAddress";
    value: EventSetOperatorAddressAmino;
}
export interface EventSetOperatorAddressSDKType {
    message: string;
    address: string;
}
export interface EventValsetConfirmKey {
    message: string;
    key: string;
}
export interface EventValsetConfirmKeyProtoMsg {
    typeUrl: "/gravity.v1.EventValsetConfirmKey";
    value: Uint8Array;
}
export interface EventValsetConfirmKeyAmino {
    message: string;
    key: string;
}
export interface EventValsetConfirmKeyAminoMsg {
    type: "/gravity.v1.EventValsetConfirmKey";
    value: EventValsetConfirmKeyAmino;
}
export interface EventValsetConfirmKeySDKType {
    message: string;
    key: string;
}
export interface EventBatchCreated {
    message: string;
    batchNonce: string;
}
export interface EventBatchCreatedProtoMsg {
    typeUrl: "/gravity.v1.EventBatchCreated";
    value: Uint8Array;
}
export interface EventBatchCreatedAmino {
    message: string;
    batch_nonce: string;
}
export interface EventBatchCreatedAminoMsg {
    type: "/gravity.v1.EventBatchCreated";
    value: EventBatchCreatedAmino;
}
export interface EventBatchCreatedSDKType {
    message: string;
    batch_nonce: string;
}
export interface EventBatchConfirmKey {
    message: string;
    batchConfirmKey: string;
}
export interface EventBatchConfirmKeyProtoMsg {
    typeUrl: "/gravity.v1.EventBatchConfirmKey";
    value: Uint8Array;
}
export interface EventBatchConfirmKeyAmino {
    message: string;
    batch_confirm_key: string;
}
export interface EventBatchConfirmKeyAminoMsg {
    type: "/gravity.v1.EventBatchConfirmKey";
    value: EventBatchConfirmKeyAmino;
}
export interface EventBatchConfirmKeySDKType {
    message: string;
    batch_confirm_key: string;
}
export interface EventBatchSendToEthClaim {
    nonce: string;
}
export interface EventBatchSendToEthClaimProtoMsg {
    typeUrl: "/gravity.v1.EventBatchSendToEthClaim";
    value: Uint8Array;
}
export interface EventBatchSendToEthClaimAmino {
    nonce: string;
}
export interface EventBatchSendToEthClaimAminoMsg {
    type: "/gravity.v1.EventBatchSendToEthClaim";
    value: EventBatchSendToEthClaimAmino;
}
export interface EventBatchSendToEthClaimSDKType {
    nonce: string;
}
export interface EventClaim {
    message: string;
    claimHash: string;
    attestationId: string;
}
export interface EventClaimProtoMsg {
    typeUrl: "/gravity.v1.EventClaim";
    value: Uint8Array;
}
export interface EventClaimAmino {
    message: string;
    claim_hash: string;
    attestation_id: string;
}
export interface EventClaimAminoMsg {
    type: "/gravity.v1.EventClaim";
    value: EventClaimAmino;
}
export interface EventClaimSDKType {
    message: string;
    claim_hash: string;
    attestation_id: string;
}
export interface EventBadSignatureEvidence {
    message: string;
    badEthSignature: string;
    badEthSignatureSubject: string;
}
export interface EventBadSignatureEvidenceProtoMsg {
    typeUrl: "/gravity.v1.EventBadSignatureEvidence";
    value: Uint8Array;
}
export interface EventBadSignatureEvidenceAmino {
    message: string;
    bad_eth_signature: string;
    bad_eth_signature_subject: string;
}
export interface EventBadSignatureEvidenceAminoMsg {
    type: "/gravity.v1.EventBadSignatureEvidence";
    value: EventBadSignatureEvidenceAmino;
}
export interface EventBadSignatureEvidenceSDKType {
    message: string;
    bad_eth_signature: string;
    bad_eth_signature_subject: string;
}
export interface EventERC20DeployedClaim {
    token: string;
    nonce: string;
}
export interface EventERC20DeployedClaimProtoMsg {
    typeUrl: "/gravity.v1.EventERC20DeployedClaim";
    value: Uint8Array;
}
export interface EventERC20DeployedClaimAmino {
    token: string;
    nonce: string;
}
export interface EventERC20DeployedClaimAminoMsg {
    type: "/gravity.v1.EventERC20DeployedClaim";
    value: EventERC20DeployedClaimAmino;
}
export interface EventERC20DeployedClaimSDKType {
    token: string;
    nonce: string;
}
export interface EventValsetUpdatedClaim {
    nonce: string;
}
export interface EventValsetUpdatedClaimProtoMsg {
    typeUrl: "/gravity.v1.EventValsetUpdatedClaim";
    value: Uint8Array;
}
export interface EventValsetUpdatedClaimAmino {
    nonce: string;
}
export interface EventValsetUpdatedClaimAminoMsg {
    type: "/gravity.v1.EventValsetUpdatedClaim";
    value: EventValsetUpdatedClaimAmino;
}
export interface EventValsetUpdatedClaimSDKType {
    nonce: string;
}
export interface EventMultisigUpdateRequest {
    bridgeContract: string;
    bridgeChainId: string;
    multisigId: string;
    nonce: string;
}
export interface EventMultisigUpdateRequestProtoMsg {
    typeUrl: "/gravity.v1.EventMultisigUpdateRequest";
    value: Uint8Array;
}
export interface EventMultisigUpdateRequestAmino {
    bridge_contract: string;
    bridge_chain_id: string;
    multisig_id: string;
    nonce: string;
}
export interface EventMultisigUpdateRequestAminoMsg {
    type: "/gravity.v1.EventMultisigUpdateRequest";
    value: EventMultisigUpdateRequestAmino;
}
export interface EventMultisigUpdateRequestSDKType {
    bridge_contract: string;
    bridge_chain_id: string;
    multisig_id: string;
    nonce: string;
}
export interface EventOutgoingLogicCallCanceled {
    logicCallInvalidationId: string;
    logicCallInvalidationNonce: string;
}
export interface EventOutgoingLogicCallCanceledProtoMsg {
    typeUrl: "/gravity.v1.EventOutgoingLogicCallCanceled";
    value: Uint8Array;
}
export interface EventOutgoingLogicCallCanceledAmino {
    logic_call_invalidation_id: string;
    logic_call_invalidation_nonce: string;
}
export interface EventOutgoingLogicCallCanceledAminoMsg {
    type: "/gravity.v1.EventOutgoingLogicCallCanceled";
    value: EventOutgoingLogicCallCanceledAmino;
}
export interface EventOutgoingLogicCallCanceledSDKType {
    logic_call_invalidation_id: string;
    logic_call_invalidation_nonce: string;
}
export interface EventSignatureSlashing {
    type: string;
    address: string;
}
export interface EventSignatureSlashingProtoMsg {
    typeUrl: "/gravity.v1.EventSignatureSlashing";
    value: Uint8Array;
}
export interface EventSignatureSlashingAmino {
    type: string;
    address: string;
}
export interface EventSignatureSlashingAminoMsg {
    type: "/gravity.v1.EventSignatureSlashing";
    value: EventSignatureSlashingAmino;
}
export interface EventSignatureSlashingSDKType {
    type: string;
    address: string;
}
export interface EventOutgoingTxId {
    message: string;
    txId: string;
}
export interface EventOutgoingTxIdProtoMsg {
    typeUrl: "/gravity.v1.EventOutgoingTxId";
    value: Uint8Array;
}
export interface EventOutgoingTxIdAmino {
    message: string;
    tx_id: string;
}
export interface EventOutgoingTxIdAminoMsg {
    type: "/gravity.v1.EventOutgoingTxId";
    value: EventOutgoingTxIdAmino;
}
export interface EventOutgoingTxIdSDKType {
    message: string;
    tx_id: string;
}
export interface EventSendToEthFeeCollected {
    sender: string;
    sendAmount: string;
    feeAmount: string;
}
export interface EventSendToEthFeeCollectedProtoMsg {
    typeUrl: "/gravity.v1.EventSendToEthFeeCollected";
    value: Uint8Array;
}
export interface EventSendToEthFeeCollectedAmino {
    sender: string;
    send_amount: string;
    fee_amount: string;
}
export interface EventSendToEthFeeCollectedAminoMsg {
    type: "/gravity.v1.EventSendToEthFeeCollected";
    value: EventSendToEthFeeCollectedAmino;
}
export interface EventSendToEthFeeCollectedSDKType {
    sender: string;
    send_amount: string;
    fee_amount: string;
}
export declare const MsgSetOrchestratorAddress: {
    typeUrl: string;
    encode(message: MsgSetOrchestratorAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetOrchestratorAddress;
    fromPartial(object: Partial<MsgSetOrchestratorAddress>): MsgSetOrchestratorAddress;
    fromAmino(object: MsgSetOrchestratorAddressAmino): MsgSetOrchestratorAddress;
    toAmino(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressAmino;
    fromAminoMsg(object: MsgSetOrchestratorAddressAminoMsg): MsgSetOrchestratorAddress;
    fromProtoMsg(message: MsgSetOrchestratorAddressProtoMsg): MsgSetOrchestratorAddress;
    toProto(message: MsgSetOrchestratorAddress): Uint8Array;
    toProtoMsg(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressProtoMsg;
};
export declare const MsgSetOrchestratorAddressResponse: {
    typeUrl: string;
    encode(_: MsgSetOrchestratorAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetOrchestratorAddressResponse;
    fromPartial(_: Partial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse;
    fromAmino(_: MsgSetOrchestratorAddressResponseAmino): MsgSetOrchestratorAddressResponse;
    toAmino(_: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseAmino;
    fromAminoMsg(object: MsgSetOrchestratorAddressResponseAminoMsg): MsgSetOrchestratorAddressResponse;
    fromProtoMsg(message: MsgSetOrchestratorAddressResponseProtoMsg): MsgSetOrchestratorAddressResponse;
    toProto(message: MsgSetOrchestratorAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseProtoMsg;
};
export declare const MsgValsetConfirm: {
    typeUrl: string;
    encode(message: MsgValsetConfirm, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgValsetConfirm;
    fromPartial(object: Partial<MsgValsetConfirm>): MsgValsetConfirm;
    fromAmino(object: MsgValsetConfirmAmino): MsgValsetConfirm;
    toAmino(message: MsgValsetConfirm): MsgValsetConfirmAmino;
    fromAminoMsg(object: MsgValsetConfirmAminoMsg): MsgValsetConfirm;
    fromProtoMsg(message: MsgValsetConfirmProtoMsg): MsgValsetConfirm;
    toProto(message: MsgValsetConfirm): Uint8Array;
    toProtoMsg(message: MsgValsetConfirm): MsgValsetConfirmProtoMsg;
};
export declare const MsgValsetConfirmResponse: {
    typeUrl: string;
    encode(_: MsgValsetConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgValsetConfirmResponse;
    fromPartial(_: Partial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse;
    fromAmino(_: MsgValsetConfirmResponseAmino): MsgValsetConfirmResponse;
    toAmino(_: MsgValsetConfirmResponse): MsgValsetConfirmResponseAmino;
    fromAminoMsg(object: MsgValsetConfirmResponseAminoMsg): MsgValsetConfirmResponse;
    fromProtoMsg(message: MsgValsetConfirmResponseProtoMsg): MsgValsetConfirmResponse;
    toProto(message: MsgValsetConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgValsetConfirmResponse): MsgValsetConfirmResponseProtoMsg;
};
export declare const MsgSendToEth: {
    typeUrl: string;
    encode(message: MsgSendToEth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSendToEth;
    fromPartial(object: Partial<MsgSendToEth>): MsgSendToEth;
    fromAmino(object: MsgSendToEthAmino): MsgSendToEth;
    toAmino(message: MsgSendToEth): MsgSendToEthAmino;
    fromAminoMsg(object: MsgSendToEthAminoMsg): MsgSendToEth;
    fromProtoMsg(message: MsgSendToEthProtoMsg): MsgSendToEth;
    toProto(message: MsgSendToEth): Uint8Array;
    toProtoMsg(message: MsgSendToEth): MsgSendToEthProtoMsg;
};
export declare const MsgSendToEthResponse: {
    typeUrl: string;
    encode(_: MsgSendToEthResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSendToEthResponse;
    fromPartial(_: Partial<MsgSendToEthResponse>): MsgSendToEthResponse;
    fromAmino(_: MsgSendToEthResponseAmino): MsgSendToEthResponse;
    toAmino(_: MsgSendToEthResponse): MsgSendToEthResponseAmino;
    fromAminoMsg(object: MsgSendToEthResponseAminoMsg): MsgSendToEthResponse;
    fromProtoMsg(message: MsgSendToEthResponseProtoMsg): MsgSendToEthResponse;
    toProto(message: MsgSendToEthResponse): Uint8Array;
    toProtoMsg(message: MsgSendToEthResponse): MsgSendToEthResponseProtoMsg;
};
export declare const MsgRequestBatch: {
    typeUrl: string;
    encode(message: MsgRequestBatch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRequestBatch;
    fromPartial(object: Partial<MsgRequestBatch>): MsgRequestBatch;
    fromAmino(object: MsgRequestBatchAmino): MsgRequestBatch;
    toAmino(message: MsgRequestBatch): MsgRequestBatchAmino;
    fromAminoMsg(object: MsgRequestBatchAminoMsg): MsgRequestBatch;
    fromProtoMsg(message: MsgRequestBatchProtoMsg): MsgRequestBatch;
    toProto(message: MsgRequestBatch): Uint8Array;
    toProtoMsg(message: MsgRequestBatch): MsgRequestBatchProtoMsg;
};
export declare const MsgRequestBatchResponse: {
    typeUrl: string;
    encode(_: MsgRequestBatchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRequestBatchResponse;
    fromPartial(_: Partial<MsgRequestBatchResponse>): MsgRequestBatchResponse;
    fromAmino(_: MsgRequestBatchResponseAmino): MsgRequestBatchResponse;
    toAmino(_: MsgRequestBatchResponse): MsgRequestBatchResponseAmino;
    fromAminoMsg(object: MsgRequestBatchResponseAminoMsg): MsgRequestBatchResponse;
    fromProtoMsg(message: MsgRequestBatchResponseProtoMsg): MsgRequestBatchResponse;
    toProto(message: MsgRequestBatchResponse): Uint8Array;
    toProtoMsg(message: MsgRequestBatchResponse): MsgRequestBatchResponseProtoMsg;
};
export declare const MsgConfirmBatch: {
    typeUrl: string;
    encode(message: MsgConfirmBatch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConfirmBatch;
    fromPartial(object: Partial<MsgConfirmBatch>): MsgConfirmBatch;
    fromAmino(object: MsgConfirmBatchAmino): MsgConfirmBatch;
    toAmino(message: MsgConfirmBatch): MsgConfirmBatchAmino;
    fromAminoMsg(object: MsgConfirmBatchAminoMsg): MsgConfirmBatch;
    fromProtoMsg(message: MsgConfirmBatchProtoMsg): MsgConfirmBatch;
    toProto(message: MsgConfirmBatch): Uint8Array;
    toProtoMsg(message: MsgConfirmBatch): MsgConfirmBatchProtoMsg;
};
export declare const MsgConfirmBatchResponse: {
    typeUrl: string;
    encode(_: MsgConfirmBatchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConfirmBatchResponse;
    fromPartial(_: Partial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse;
    fromAmino(_: MsgConfirmBatchResponseAmino): MsgConfirmBatchResponse;
    toAmino(_: MsgConfirmBatchResponse): MsgConfirmBatchResponseAmino;
    fromAminoMsg(object: MsgConfirmBatchResponseAminoMsg): MsgConfirmBatchResponse;
    fromProtoMsg(message: MsgConfirmBatchResponseProtoMsg): MsgConfirmBatchResponse;
    toProto(message: MsgConfirmBatchResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmBatchResponse): MsgConfirmBatchResponseProtoMsg;
};
export declare const MsgConfirmLogicCall: {
    typeUrl: string;
    encode(message: MsgConfirmLogicCall, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConfirmLogicCall;
    fromPartial(object: Partial<MsgConfirmLogicCall>): MsgConfirmLogicCall;
    fromAmino(object: MsgConfirmLogicCallAmino): MsgConfirmLogicCall;
    toAmino(message: MsgConfirmLogicCall): MsgConfirmLogicCallAmino;
    fromAminoMsg(object: MsgConfirmLogicCallAminoMsg): MsgConfirmLogicCall;
    fromProtoMsg(message: MsgConfirmLogicCallProtoMsg): MsgConfirmLogicCall;
    toProto(message: MsgConfirmLogicCall): Uint8Array;
    toProtoMsg(message: MsgConfirmLogicCall): MsgConfirmLogicCallProtoMsg;
};
export declare const MsgConfirmLogicCallResponse: {
    typeUrl: string;
    encode(_: MsgConfirmLogicCallResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConfirmLogicCallResponse;
    fromPartial(_: Partial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse;
    fromAmino(_: MsgConfirmLogicCallResponseAmino): MsgConfirmLogicCallResponse;
    toAmino(_: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseAmino;
    fromAminoMsg(object: MsgConfirmLogicCallResponseAminoMsg): MsgConfirmLogicCallResponse;
    fromProtoMsg(message: MsgConfirmLogicCallResponseProtoMsg): MsgConfirmLogicCallResponse;
    toProto(message: MsgConfirmLogicCallResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseProtoMsg;
};
export declare const MsgSendToCosmosClaim: {
    typeUrl: string;
    encode(message: MsgSendToCosmosClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSendToCosmosClaim;
    fromPartial(object: Partial<MsgSendToCosmosClaim>): MsgSendToCosmosClaim;
    fromAmino(object: MsgSendToCosmosClaimAmino): MsgSendToCosmosClaim;
    toAmino(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimAmino;
    fromAminoMsg(object: MsgSendToCosmosClaimAminoMsg): MsgSendToCosmosClaim;
    fromProtoMsg(message: MsgSendToCosmosClaimProtoMsg): MsgSendToCosmosClaim;
    toProto(message: MsgSendToCosmosClaim): Uint8Array;
    toProtoMsg(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimProtoMsg;
};
export declare const MsgSendToCosmosClaimResponse: {
    typeUrl: string;
    encode(_: MsgSendToCosmosClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSendToCosmosClaimResponse;
    fromPartial(_: Partial<MsgSendToCosmosClaimResponse>): MsgSendToCosmosClaimResponse;
    fromAmino(_: MsgSendToCosmosClaimResponseAmino): MsgSendToCosmosClaimResponse;
    toAmino(_: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseAmino;
    fromAminoMsg(object: MsgSendToCosmosClaimResponseAminoMsg): MsgSendToCosmosClaimResponse;
    fromProtoMsg(message: MsgSendToCosmosClaimResponseProtoMsg): MsgSendToCosmosClaimResponse;
    toProto(message: MsgSendToCosmosClaimResponse): Uint8Array;
    toProtoMsg(message: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseProtoMsg;
};
export declare const MsgExecuteIbcAutoForwards: {
    typeUrl: string;
    encode(message: MsgExecuteIbcAutoForwards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExecuteIbcAutoForwards;
    fromPartial(object: Partial<MsgExecuteIbcAutoForwards>): MsgExecuteIbcAutoForwards;
    fromAmino(object: MsgExecuteIbcAutoForwardsAmino): MsgExecuteIbcAutoForwards;
    toAmino(message: MsgExecuteIbcAutoForwards): MsgExecuteIbcAutoForwardsAmino;
    fromAminoMsg(object: MsgExecuteIbcAutoForwardsAminoMsg): MsgExecuteIbcAutoForwards;
    fromProtoMsg(message: MsgExecuteIbcAutoForwardsProtoMsg): MsgExecuteIbcAutoForwards;
    toProto(message: MsgExecuteIbcAutoForwards): Uint8Array;
    toProtoMsg(message: MsgExecuteIbcAutoForwards): MsgExecuteIbcAutoForwardsProtoMsg;
};
export declare const MsgExecuteIbcAutoForwardsResponse: {
    typeUrl: string;
    encode(_: MsgExecuteIbcAutoForwardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgExecuteIbcAutoForwardsResponse;
    fromPartial(_: Partial<MsgExecuteIbcAutoForwardsResponse>): MsgExecuteIbcAutoForwardsResponse;
    fromAmino(_: MsgExecuteIbcAutoForwardsResponseAmino): MsgExecuteIbcAutoForwardsResponse;
    toAmino(_: MsgExecuteIbcAutoForwardsResponse): MsgExecuteIbcAutoForwardsResponseAmino;
    fromAminoMsg(object: MsgExecuteIbcAutoForwardsResponseAminoMsg): MsgExecuteIbcAutoForwardsResponse;
    fromProtoMsg(message: MsgExecuteIbcAutoForwardsResponseProtoMsg): MsgExecuteIbcAutoForwardsResponse;
    toProto(message: MsgExecuteIbcAutoForwardsResponse): Uint8Array;
    toProtoMsg(message: MsgExecuteIbcAutoForwardsResponse): MsgExecuteIbcAutoForwardsResponseProtoMsg;
};
export declare const MsgBatchSendToEthClaim: {
    typeUrl: string;
    encode(message: MsgBatchSendToEthClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBatchSendToEthClaim;
    fromPartial(object: Partial<MsgBatchSendToEthClaim>): MsgBatchSendToEthClaim;
    fromAmino(object: MsgBatchSendToEthClaimAmino): MsgBatchSendToEthClaim;
    toAmino(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimAmino;
    fromAminoMsg(object: MsgBatchSendToEthClaimAminoMsg): MsgBatchSendToEthClaim;
    fromProtoMsg(message: MsgBatchSendToEthClaimProtoMsg): MsgBatchSendToEthClaim;
    toProto(message: MsgBatchSendToEthClaim): Uint8Array;
    toProtoMsg(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimProtoMsg;
};
export declare const MsgBatchSendToEthClaimResponse: {
    typeUrl: string;
    encode(_: MsgBatchSendToEthClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBatchSendToEthClaimResponse;
    fromPartial(_: Partial<MsgBatchSendToEthClaimResponse>): MsgBatchSendToEthClaimResponse;
    fromAmino(_: MsgBatchSendToEthClaimResponseAmino): MsgBatchSendToEthClaimResponse;
    toAmino(_: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseAmino;
    fromAminoMsg(object: MsgBatchSendToEthClaimResponseAminoMsg): MsgBatchSendToEthClaimResponse;
    fromProtoMsg(message: MsgBatchSendToEthClaimResponseProtoMsg): MsgBatchSendToEthClaimResponse;
    toProto(message: MsgBatchSendToEthClaimResponse): Uint8Array;
    toProtoMsg(message: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseProtoMsg;
};
export declare const MsgERC20DeployedClaim: {
    typeUrl: string;
    encode(message: MsgERC20DeployedClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgERC20DeployedClaim;
    fromPartial(object: Partial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim;
    fromAmino(object: MsgERC20DeployedClaimAmino): MsgERC20DeployedClaim;
    toAmino(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimAmino;
    fromAminoMsg(object: MsgERC20DeployedClaimAminoMsg): MsgERC20DeployedClaim;
    fromProtoMsg(message: MsgERC20DeployedClaimProtoMsg): MsgERC20DeployedClaim;
    toProto(message: MsgERC20DeployedClaim): Uint8Array;
    toProtoMsg(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimProtoMsg;
};
export declare const MsgERC20DeployedClaimResponse: {
    typeUrl: string;
    encode(_: MsgERC20DeployedClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgERC20DeployedClaimResponse;
    fromPartial(_: Partial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse;
    fromAmino(_: MsgERC20DeployedClaimResponseAmino): MsgERC20DeployedClaimResponse;
    toAmino(_: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseAmino;
    fromAminoMsg(object: MsgERC20DeployedClaimResponseAminoMsg): MsgERC20DeployedClaimResponse;
    fromProtoMsg(message: MsgERC20DeployedClaimResponseProtoMsg): MsgERC20DeployedClaimResponse;
    toProto(message: MsgERC20DeployedClaimResponse): Uint8Array;
    toProtoMsg(message: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseProtoMsg;
};
export declare const MsgLogicCallExecutedClaim: {
    typeUrl: string;
    encode(message: MsgLogicCallExecutedClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLogicCallExecutedClaim;
    fromPartial(object: Partial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim;
    fromAmino(object: MsgLogicCallExecutedClaimAmino): MsgLogicCallExecutedClaim;
    toAmino(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimAmino;
    fromAminoMsg(object: MsgLogicCallExecutedClaimAminoMsg): MsgLogicCallExecutedClaim;
    fromProtoMsg(message: MsgLogicCallExecutedClaimProtoMsg): MsgLogicCallExecutedClaim;
    toProto(message: MsgLogicCallExecutedClaim): Uint8Array;
    toProtoMsg(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimProtoMsg;
};
export declare const MsgLogicCallExecutedClaimResponse: {
    typeUrl: string;
    encode(_: MsgLogicCallExecutedClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLogicCallExecutedClaimResponse;
    fromPartial(_: Partial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse;
    fromAmino(_: MsgLogicCallExecutedClaimResponseAmino): MsgLogicCallExecutedClaimResponse;
    toAmino(_: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseAmino;
    fromAminoMsg(object: MsgLogicCallExecutedClaimResponseAminoMsg): MsgLogicCallExecutedClaimResponse;
    fromProtoMsg(message: MsgLogicCallExecutedClaimResponseProtoMsg): MsgLogicCallExecutedClaimResponse;
    toProto(message: MsgLogicCallExecutedClaimResponse): Uint8Array;
    toProtoMsg(message: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseProtoMsg;
};
export declare const MsgValsetUpdatedClaim: {
    typeUrl: string;
    encode(message: MsgValsetUpdatedClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgValsetUpdatedClaim;
    fromPartial(object: Partial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim;
    fromAmino(object: MsgValsetUpdatedClaimAmino): MsgValsetUpdatedClaim;
    toAmino(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAmino;
    fromAminoMsg(object: MsgValsetUpdatedClaimAminoMsg): MsgValsetUpdatedClaim;
    fromProtoMsg(message: MsgValsetUpdatedClaimProtoMsg): MsgValsetUpdatedClaim;
    toProto(message: MsgValsetUpdatedClaim): Uint8Array;
    toProtoMsg(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimProtoMsg;
};
export declare const MsgValsetUpdatedClaimResponse: {
    typeUrl: string;
    encode(_: MsgValsetUpdatedClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgValsetUpdatedClaimResponse;
    fromPartial(_: Partial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse;
    fromAmino(_: MsgValsetUpdatedClaimResponseAmino): MsgValsetUpdatedClaimResponse;
    toAmino(_: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseAmino;
    fromAminoMsg(object: MsgValsetUpdatedClaimResponseAminoMsg): MsgValsetUpdatedClaimResponse;
    fromProtoMsg(message: MsgValsetUpdatedClaimResponseProtoMsg): MsgValsetUpdatedClaimResponse;
    toProto(message: MsgValsetUpdatedClaimResponse): Uint8Array;
    toProtoMsg(message: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseProtoMsg;
};
export declare const MsgCancelSendToEth: {
    typeUrl: string;
    encode(message: MsgCancelSendToEth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelSendToEth;
    fromPartial(object: Partial<MsgCancelSendToEth>): MsgCancelSendToEth;
    fromAmino(object: MsgCancelSendToEthAmino): MsgCancelSendToEth;
    toAmino(message: MsgCancelSendToEth): MsgCancelSendToEthAmino;
    fromAminoMsg(object: MsgCancelSendToEthAminoMsg): MsgCancelSendToEth;
    fromProtoMsg(message: MsgCancelSendToEthProtoMsg): MsgCancelSendToEth;
    toProto(message: MsgCancelSendToEth): Uint8Array;
    toProtoMsg(message: MsgCancelSendToEth): MsgCancelSendToEthProtoMsg;
};
export declare const MsgCancelSendToEthResponse: {
    typeUrl: string;
    encode(_: MsgCancelSendToEthResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelSendToEthResponse;
    fromPartial(_: Partial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse;
    fromAmino(_: MsgCancelSendToEthResponseAmino): MsgCancelSendToEthResponse;
    toAmino(_: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseAmino;
    fromAminoMsg(object: MsgCancelSendToEthResponseAminoMsg): MsgCancelSendToEthResponse;
    fromProtoMsg(message: MsgCancelSendToEthResponseProtoMsg): MsgCancelSendToEthResponse;
    toProto(message: MsgCancelSendToEthResponse): Uint8Array;
    toProtoMsg(message: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseProtoMsg;
};
export declare const MsgSubmitBadSignatureEvidence: {
    typeUrl: string;
    encode(message: MsgSubmitBadSignatureEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitBadSignatureEvidence;
    fromPartial(object: Partial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence;
    fromAmino(object: MsgSubmitBadSignatureEvidenceAmino): MsgSubmitBadSignatureEvidence;
    toAmino(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAmino;
    fromAminoMsg(object: MsgSubmitBadSignatureEvidenceAminoMsg): MsgSubmitBadSignatureEvidence;
    fromProtoMsg(message: MsgSubmitBadSignatureEvidenceProtoMsg): MsgSubmitBadSignatureEvidence;
    toProto(message: MsgSubmitBadSignatureEvidence): Uint8Array;
    toProtoMsg(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceProtoMsg;
};
export declare const MsgSubmitBadSignatureEvidenceResponse: {
    typeUrl: string;
    encode(_: MsgSubmitBadSignatureEvidenceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitBadSignatureEvidenceResponse;
    fromPartial(_: Partial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse;
    fromAmino(_: MsgSubmitBadSignatureEvidenceResponseAmino): MsgSubmitBadSignatureEvidenceResponse;
    toAmino(_: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseAmino;
    fromAminoMsg(object: MsgSubmitBadSignatureEvidenceResponseAminoMsg): MsgSubmitBadSignatureEvidenceResponse;
    fromProtoMsg(message: MsgSubmitBadSignatureEvidenceResponseProtoMsg): MsgSubmitBadSignatureEvidenceResponse;
    toProto(message: MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseProtoMsg;
};
export declare const EventSetOperatorAddress: {
    typeUrl: string;
    encode(message: EventSetOperatorAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSetOperatorAddress;
    fromPartial(object: Partial<EventSetOperatorAddress>): EventSetOperatorAddress;
    fromAmino(object: EventSetOperatorAddressAmino): EventSetOperatorAddress;
    toAmino(message: EventSetOperatorAddress): EventSetOperatorAddressAmino;
    fromAminoMsg(object: EventSetOperatorAddressAminoMsg): EventSetOperatorAddress;
    fromProtoMsg(message: EventSetOperatorAddressProtoMsg): EventSetOperatorAddress;
    toProto(message: EventSetOperatorAddress): Uint8Array;
    toProtoMsg(message: EventSetOperatorAddress): EventSetOperatorAddressProtoMsg;
};
export declare const EventValsetConfirmKey: {
    typeUrl: string;
    encode(message: EventValsetConfirmKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventValsetConfirmKey;
    fromPartial(object: Partial<EventValsetConfirmKey>): EventValsetConfirmKey;
    fromAmino(object: EventValsetConfirmKeyAmino): EventValsetConfirmKey;
    toAmino(message: EventValsetConfirmKey): EventValsetConfirmKeyAmino;
    fromAminoMsg(object: EventValsetConfirmKeyAminoMsg): EventValsetConfirmKey;
    fromProtoMsg(message: EventValsetConfirmKeyProtoMsg): EventValsetConfirmKey;
    toProto(message: EventValsetConfirmKey): Uint8Array;
    toProtoMsg(message: EventValsetConfirmKey): EventValsetConfirmKeyProtoMsg;
};
export declare const EventBatchCreated: {
    typeUrl: string;
    encode(message: EventBatchCreated, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBatchCreated;
    fromPartial(object: Partial<EventBatchCreated>): EventBatchCreated;
    fromAmino(object: EventBatchCreatedAmino): EventBatchCreated;
    toAmino(message: EventBatchCreated): EventBatchCreatedAmino;
    fromAminoMsg(object: EventBatchCreatedAminoMsg): EventBatchCreated;
    fromProtoMsg(message: EventBatchCreatedProtoMsg): EventBatchCreated;
    toProto(message: EventBatchCreated): Uint8Array;
    toProtoMsg(message: EventBatchCreated): EventBatchCreatedProtoMsg;
};
export declare const EventBatchConfirmKey: {
    typeUrl: string;
    encode(message: EventBatchConfirmKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBatchConfirmKey;
    fromPartial(object: Partial<EventBatchConfirmKey>): EventBatchConfirmKey;
    fromAmino(object: EventBatchConfirmKeyAmino): EventBatchConfirmKey;
    toAmino(message: EventBatchConfirmKey): EventBatchConfirmKeyAmino;
    fromAminoMsg(object: EventBatchConfirmKeyAminoMsg): EventBatchConfirmKey;
    fromProtoMsg(message: EventBatchConfirmKeyProtoMsg): EventBatchConfirmKey;
    toProto(message: EventBatchConfirmKey): Uint8Array;
    toProtoMsg(message: EventBatchConfirmKey): EventBatchConfirmKeyProtoMsg;
};
export declare const EventBatchSendToEthClaim: {
    typeUrl: string;
    encode(message: EventBatchSendToEthClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBatchSendToEthClaim;
    fromPartial(object: Partial<EventBatchSendToEthClaim>): EventBatchSendToEthClaim;
    fromAmino(object: EventBatchSendToEthClaimAmino): EventBatchSendToEthClaim;
    toAmino(message: EventBatchSendToEthClaim): EventBatchSendToEthClaimAmino;
    fromAminoMsg(object: EventBatchSendToEthClaimAminoMsg): EventBatchSendToEthClaim;
    fromProtoMsg(message: EventBatchSendToEthClaimProtoMsg): EventBatchSendToEthClaim;
    toProto(message: EventBatchSendToEthClaim): Uint8Array;
    toProtoMsg(message: EventBatchSendToEthClaim): EventBatchSendToEthClaimProtoMsg;
};
export declare const EventClaim: {
    typeUrl: string;
    encode(message: EventClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClaim;
    fromPartial(object: Partial<EventClaim>): EventClaim;
    fromAmino(object: EventClaimAmino): EventClaim;
    toAmino(message: EventClaim): EventClaimAmino;
    fromAminoMsg(object: EventClaimAminoMsg): EventClaim;
    fromProtoMsg(message: EventClaimProtoMsg): EventClaim;
    toProto(message: EventClaim): Uint8Array;
    toProtoMsg(message: EventClaim): EventClaimProtoMsg;
};
export declare const EventBadSignatureEvidence: {
    typeUrl: string;
    encode(message: EventBadSignatureEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBadSignatureEvidence;
    fromPartial(object: Partial<EventBadSignatureEvidence>): EventBadSignatureEvidence;
    fromAmino(object: EventBadSignatureEvidenceAmino): EventBadSignatureEvidence;
    toAmino(message: EventBadSignatureEvidence): EventBadSignatureEvidenceAmino;
    fromAminoMsg(object: EventBadSignatureEvidenceAminoMsg): EventBadSignatureEvidence;
    fromProtoMsg(message: EventBadSignatureEvidenceProtoMsg): EventBadSignatureEvidence;
    toProto(message: EventBadSignatureEvidence): Uint8Array;
    toProtoMsg(message: EventBadSignatureEvidence): EventBadSignatureEvidenceProtoMsg;
};
export declare const EventERC20DeployedClaim: {
    typeUrl: string;
    encode(message: EventERC20DeployedClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventERC20DeployedClaim;
    fromPartial(object: Partial<EventERC20DeployedClaim>): EventERC20DeployedClaim;
    fromAmino(object: EventERC20DeployedClaimAmino): EventERC20DeployedClaim;
    toAmino(message: EventERC20DeployedClaim): EventERC20DeployedClaimAmino;
    fromAminoMsg(object: EventERC20DeployedClaimAminoMsg): EventERC20DeployedClaim;
    fromProtoMsg(message: EventERC20DeployedClaimProtoMsg): EventERC20DeployedClaim;
    toProto(message: EventERC20DeployedClaim): Uint8Array;
    toProtoMsg(message: EventERC20DeployedClaim): EventERC20DeployedClaimProtoMsg;
};
export declare const EventValsetUpdatedClaim: {
    typeUrl: string;
    encode(message: EventValsetUpdatedClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventValsetUpdatedClaim;
    fromPartial(object: Partial<EventValsetUpdatedClaim>): EventValsetUpdatedClaim;
    fromAmino(object: EventValsetUpdatedClaimAmino): EventValsetUpdatedClaim;
    toAmino(message: EventValsetUpdatedClaim): EventValsetUpdatedClaimAmino;
    fromAminoMsg(object: EventValsetUpdatedClaimAminoMsg): EventValsetUpdatedClaim;
    fromProtoMsg(message: EventValsetUpdatedClaimProtoMsg): EventValsetUpdatedClaim;
    toProto(message: EventValsetUpdatedClaim): Uint8Array;
    toProtoMsg(message: EventValsetUpdatedClaim): EventValsetUpdatedClaimProtoMsg;
};
export declare const EventMultisigUpdateRequest: {
    typeUrl: string;
    encode(message: EventMultisigUpdateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMultisigUpdateRequest;
    fromPartial(object: Partial<EventMultisigUpdateRequest>): EventMultisigUpdateRequest;
    fromAmino(object: EventMultisigUpdateRequestAmino): EventMultisigUpdateRequest;
    toAmino(message: EventMultisigUpdateRequest): EventMultisigUpdateRequestAmino;
    fromAminoMsg(object: EventMultisigUpdateRequestAminoMsg): EventMultisigUpdateRequest;
    fromProtoMsg(message: EventMultisigUpdateRequestProtoMsg): EventMultisigUpdateRequest;
    toProto(message: EventMultisigUpdateRequest): Uint8Array;
    toProtoMsg(message: EventMultisigUpdateRequest): EventMultisigUpdateRequestProtoMsg;
};
export declare const EventOutgoingLogicCallCanceled: {
    typeUrl: string;
    encode(message: EventOutgoingLogicCallCanceled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOutgoingLogicCallCanceled;
    fromPartial(object: Partial<EventOutgoingLogicCallCanceled>): EventOutgoingLogicCallCanceled;
    fromAmino(object: EventOutgoingLogicCallCanceledAmino): EventOutgoingLogicCallCanceled;
    toAmino(message: EventOutgoingLogicCallCanceled): EventOutgoingLogicCallCanceledAmino;
    fromAminoMsg(object: EventOutgoingLogicCallCanceledAminoMsg): EventOutgoingLogicCallCanceled;
    fromProtoMsg(message: EventOutgoingLogicCallCanceledProtoMsg): EventOutgoingLogicCallCanceled;
    toProto(message: EventOutgoingLogicCallCanceled): Uint8Array;
    toProtoMsg(message: EventOutgoingLogicCallCanceled): EventOutgoingLogicCallCanceledProtoMsg;
};
export declare const EventSignatureSlashing: {
    typeUrl: string;
    encode(message: EventSignatureSlashing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSignatureSlashing;
    fromPartial(object: Partial<EventSignatureSlashing>): EventSignatureSlashing;
    fromAmino(object: EventSignatureSlashingAmino): EventSignatureSlashing;
    toAmino(message: EventSignatureSlashing): EventSignatureSlashingAmino;
    fromAminoMsg(object: EventSignatureSlashingAminoMsg): EventSignatureSlashing;
    fromProtoMsg(message: EventSignatureSlashingProtoMsg): EventSignatureSlashing;
    toProto(message: EventSignatureSlashing): Uint8Array;
    toProtoMsg(message: EventSignatureSlashing): EventSignatureSlashingProtoMsg;
};
export declare const EventOutgoingTxId: {
    typeUrl: string;
    encode(message: EventOutgoingTxId, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOutgoingTxId;
    fromPartial(object: Partial<EventOutgoingTxId>): EventOutgoingTxId;
    fromAmino(object: EventOutgoingTxIdAmino): EventOutgoingTxId;
    toAmino(message: EventOutgoingTxId): EventOutgoingTxIdAmino;
    fromAminoMsg(object: EventOutgoingTxIdAminoMsg): EventOutgoingTxId;
    fromProtoMsg(message: EventOutgoingTxIdProtoMsg): EventOutgoingTxId;
    toProto(message: EventOutgoingTxId): Uint8Array;
    toProtoMsg(message: EventOutgoingTxId): EventOutgoingTxIdProtoMsg;
};
export declare const EventSendToEthFeeCollected: {
    typeUrl: string;
    encode(message: EventSendToEthFeeCollected, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSendToEthFeeCollected;
    fromPartial(object: Partial<EventSendToEthFeeCollected>): EventSendToEthFeeCollected;
    fromAmino(object: EventSendToEthFeeCollectedAmino): EventSendToEthFeeCollected;
    toAmino(message: EventSendToEthFeeCollected): EventSendToEthFeeCollectedAmino;
    fromAminoMsg(object: EventSendToEthFeeCollectedAminoMsg): EventSendToEthFeeCollected;
    fromProtoMsg(message: EventSendToEthFeeCollectedProtoMsg): EventSendToEthFeeCollected;
    toProto(message: EventSendToEthFeeCollected): Uint8Array;
    toProtoMsg(message: EventSendToEthFeeCollected): EventSendToEthFeeCollectedProtoMsg;
};
export declare const EthereumSigned_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const EthereumSigned_FromAmino: (content: AnyAmino) => Any;
export declare const EthereumSigned_ToAmino: (content: Any) => AnyAmino;
