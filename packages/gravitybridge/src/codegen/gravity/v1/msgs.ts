import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorAmino, BridgeValidatorSDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
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
export interface MsgSetOrchestratorAddressResponse {}
export interface MsgSetOrchestratorAddressResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse";
  value: Uint8Array;
}
export interface MsgSetOrchestratorAddressResponseAmino {}
export interface MsgSetOrchestratorAddressResponseAminoMsg {
  type: "/gravity.v1.MsgSetOrchestratorAddressResponse";
  value: MsgSetOrchestratorAddressResponseAmino;
}
export interface MsgSetOrchestratorAddressResponseSDKType {}
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
export interface MsgValsetConfirmResponse {}
export interface MsgValsetConfirmResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgValsetConfirmResponse";
  value: Uint8Array;
}
export interface MsgValsetConfirmResponseAmino {}
export interface MsgValsetConfirmResponseAminoMsg {
  type: "/gravity.v1.MsgValsetConfirmResponse";
  value: MsgValsetConfirmResponseAmino;
}
export interface MsgValsetConfirmResponseSDKType {}
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
export interface MsgSendToEthResponse {}
export interface MsgSendToEthResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSendToEthResponse";
  value: Uint8Array;
}
export interface MsgSendToEthResponseAmino {}
export interface MsgSendToEthResponseAminoMsg {
  type: "/gravity.v1.MsgSendToEthResponse";
  value: MsgSendToEthResponseAmino;
}
export interface MsgSendToEthResponseSDKType {}
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
export interface MsgRequestBatchResponse {}
export interface MsgRequestBatchResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgRequestBatchResponse";
  value: Uint8Array;
}
export interface MsgRequestBatchResponseAmino {}
export interface MsgRequestBatchResponseAminoMsg {
  type: "/gravity.v1.MsgRequestBatchResponse";
  value: MsgRequestBatchResponseAmino;
}
export interface MsgRequestBatchResponseSDKType {}
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
export interface MsgConfirmBatchResponse {}
export interface MsgConfirmBatchResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgConfirmBatchResponse";
  value: Uint8Array;
}
export interface MsgConfirmBatchResponseAmino {}
export interface MsgConfirmBatchResponseAminoMsg {
  type: "/gravity.v1.MsgConfirmBatchResponse";
  value: MsgConfirmBatchResponseAmino;
}
export interface MsgConfirmBatchResponseSDKType {}
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
export interface MsgConfirmLogicCallResponse {}
export interface MsgConfirmLogicCallResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse";
  value: Uint8Array;
}
export interface MsgConfirmLogicCallResponseAmino {}
export interface MsgConfirmLogicCallResponseAminoMsg {
  type: "/gravity.v1.MsgConfirmLogicCallResponse";
  value: MsgConfirmLogicCallResponseAmino;
}
export interface MsgConfirmLogicCallResponseSDKType {}
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
export interface MsgSendToCosmosClaimResponse {}
export interface MsgSendToCosmosClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse";
  value: Uint8Array;
}
export interface MsgSendToCosmosClaimResponseAmino {}
export interface MsgSendToCosmosClaimResponseAminoMsg {
  type: "/gravity.v1.MsgSendToCosmosClaimResponse";
  value: MsgSendToCosmosClaimResponseAmino;
}
export interface MsgSendToCosmosClaimResponseSDKType {}
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
export interface MsgExecuteIbcAutoForwardsResponse {}
export interface MsgExecuteIbcAutoForwardsResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse";
  value: Uint8Array;
}
export interface MsgExecuteIbcAutoForwardsResponseAmino {}
export interface MsgExecuteIbcAutoForwardsResponseAminoMsg {
  type: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse";
  value: MsgExecuteIbcAutoForwardsResponseAmino;
}
export interface MsgExecuteIbcAutoForwardsResponseSDKType {}
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
export interface MsgBatchSendToEthClaimResponse {}
export interface MsgBatchSendToEthClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse";
  value: Uint8Array;
}
export interface MsgBatchSendToEthClaimResponseAmino {}
export interface MsgBatchSendToEthClaimResponseAminoMsg {
  type: "/gravity.v1.MsgBatchSendToEthClaimResponse";
  value: MsgBatchSendToEthClaimResponseAmino;
}
export interface MsgBatchSendToEthClaimResponseSDKType {}
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
export interface MsgERC20DeployedClaimResponse {}
export interface MsgERC20DeployedClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse";
  value: Uint8Array;
}
export interface MsgERC20DeployedClaimResponseAmino {}
export interface MsgERC20DeployedClaimResponseAminoMsg {
  type: "/gravity.v1.MsgERC20DeployedClaimResponse";
  value: MsgERC20DeployedClaimResponseAmino;
}
export interface MsgERC20DeployedClaimResponseSDKType {}
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
export interface MsgLogicCallExecutedClaimResponse {}
export interface MsgLogicCallExecutedClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
  value: Uint8Array;
}
export interface MsgLogicCallExecutedClaimResponseAmino {}
export interface MsgLogicCallExecutedClaimResponseAminoMsg {
  type: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
  value: MsgLogicCallExecutedClaimResponseAmino;
}
export interface MsgLogicCallExecutedClaimResponseSDKType {}
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
export interface MsgValsetUpdatedClaimResponse {}
export interface MsgValsetUpdatedClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse";
  value: Uint8Array;
}
export interface MsgValsetUpdatedClaimResponseAmino {}
export interface MsgValsetUpdatedClaimResponseAminoMsg {
  type: "/gravity.v1.MsgValsetUpdatedClaimResponse";
  value: MsgValsetUpdatedClaimResponseAmino;
}
export interface MsgValsetUpdatedClaimResponseSDKType {}
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
export interface MsgCancelSendToEthResponse {}
export interface MsgCancelSendToEthResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgCancelSendToEthResponse";
  value: Uint8Array;
}
export interface MsgCancelSendToEthResponseAmino {}
export interface MsgCancelSendToEthResponseAminoMsg {
  type: "/gravity.v1.MsgCancelSendToEthResponse";
  value: MsgCancelSendToEthResponseAmino;
}
export interface MsgCancelSendToEthResponseSDKType {}
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
export interface MsgSubmitBadSignatureEvidenceResponse {}
export interface MsgSubmitBadSignatureEvidenceResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: Uint8Array;
}
export interface MsgSubmitBadSignatureEvidenceResponseAmino {}
export interface MsgSubmitBadSignatureEvidenceResponseAminoMsg {
  type: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: MsgSubmitBadSignatureEvidenceResponseAmino;
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {}
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
function createBaseMsgSetOrchestratorAddress(): MsgSetOrchestratorAddress {
  return {
    validator: "",
    orchestrator: "",
    ethAddress: ""
  };
}
export const MsgSetOrchestratorAddress = {
  typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
  encode(message: MsgSetOrchestratorAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetOrchestratorAddress {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgSetOrchestratorAddress>): MsgSetOrchestratorAddress {
    const message = createBaseMsgSetOrchestratorAddress();
    message.validator = object.validator ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetOrchestratorAddressAmino): MsgSetOrchestratorAddress {
    return {
      validator: object.validator,
      orchestrator: object.orchestrator,
      ethAddress: object.eth_address
    };
  },
  toAmino(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.orchestrator = message.orchestrator;
    obj.eth_address = message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressAminoMsg): MsgSetOrchestratorAddress {
    return MsgSetOrchestratorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressProtoMsg): MsgSetOrchestratorAddress {
    return MsgSetOrchestratorAddress.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddress): Uint8Array {
    return MsgSetOrchestratorAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
      value: MsgSetOrchestratorAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetOrchestratorAddressResponse(): MsgSetOrchestratorAddressResponse {
  return {};
}
export const MsgSetOrchestratorAddressResponse = {
  typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
  encode(_: MsgSetOrchestratorAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetOrchestratorAddressResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse {
    const message = createBaseMsgSetOrchestratorAddressResponse();
    return message;
  },
  fromAmino(_: MsgSetOrchestratorAddressResponseAmino): MsgSetOrchestratorAddressResponse {
    return {};
  },
  toAmino(_: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressResponseAminoMsg): MsgSetOrchestratorAddressResponse {
    return MsgSetOrchestratorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressResponseProtoMsg): MsgSetOrchestratorAddressResponse {
    return MsgSetOrchestratorAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddressResponse): Uint8Array {
    return MsgSetOrchestratorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
      value: MsgSetOrchestratorAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return {
    nonce: BigInt(0),
    orchestrator: "",
    ethAddress: "",
    signature: ""
  };
}
export const MsgValsetConfirm = {
  typeUrl: "/gravity.v1.MsgValsetConfirm",
  encode(message: MsgValsetConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): MsgValsetConfirm {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },
  fromPartial(object: Partial<MsgValsetConfirm>): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgValsetConfirmAmino): MsgValsetConfirm {
    return {
      nonce: BigInt(object.nonce),
      orchestrator: object.orchestrator,
      ethAddress: object.eth_address,
      signature: object.signature
    };
  },
  toAmino(message: MsgValsetConfirm): MsgValsetConfirmAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.orchestrator = message.orchestrator;
    obj.eth_address = message.ethAddress;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmAminoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetConfirmProtoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.decode(message.value);
  },
  toProto(message: MsgValsetConfirm): Uint8Array {
    return MsgValsetConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirm): MsgValsetConfirmProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetConfirm",
      value: MsgValsetConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}
export const MsgValsetConfirmResponse = {
  typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
  encode(_: MsgValsetConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgValsetConfirmResponse {
    return {};
  },
  fromPartial(_: Partial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
  fromAmino(_: MsgValsetConfirmResponseAmino): MsgValsetConfirmResponse {
    return {};
  },
  toAmino(_: MsgValsetConfirmResponse): MsgValsetConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmResponseAminoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetConfirmResponseProtoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.decode(message.value);
  },
  toProto(message: MsgValsetConfirmResponse): Uint8Array {
    return MsgValsetConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirmResponse): MsgValsetConfirmResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
      value: MsgValsetConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendToEth(): MsgSendToEth {
  return {
    sender: "",
    ethDest: "",
    amount: Coin.fromPartial({}),
    bridgeFee: Coin.fromPartial({}),
    chainFee: Coin.fromPartial({})
  };
}
export const MsgSendToEth = {
  typeUrl: "/gravity.v1.MsgSendToEth",
  encode(message: MsgSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(18).string(message.ethDest);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.chainFee !== undefined) {
      Coin.encode(message.chainFee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSendToEth {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ethDest: isSet(object.ethDest) ? String(object.ethDest) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      bridgeFee: isSet(object.bridgeFee) ? Coin.fromJSON(object.bridgeFee) : undefined,
      chainFee: isSet(object.chainFee) ? Coin.fromJSON(object.chainFee) : undefined
    };
  },
  fromPartial(object: Partial<MsgSendToEth>): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? Coin.fromPartial(object.bridgeFee) : undefined;
    message.chainFee = object.chainFee !== undefined && object.chainFee !== null ? Coin.fromPartial(object.chainFee) : undefined;
    return message;
  },
  fromAmino(object: MsgSendToEthAmino): MsgSendToEth {
    return {
      sender: object.sender,
      ethDest: object.eth_dest,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      bridgeFee: object?.bridge_fee ? Coin.fromAmino(object.bridge_fee) : undefined,
      chainFee: object?.chain_fee ? Coin.fromAmino(object.chain_fee) : undefined
    };
  },
  toAmino(message: MsgSendToEth): MsgSendToEthAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.eth_dest = message.ethDest;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.bridge_fee = message.bridgeFee ? Coin.toAmino(message.bridgeFee) : undefined;
    obj.chain_fee = message.chainFee ? Coin.toAmino(message.chainFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthAminoMsg): MsgSendToEth {
    return MsgSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToEthProtoMsg): MsgSendToEth {
    return MsgSendToEth.decode(message.value);
  },
  toProto(message: MsgSendToEth): Uint8Array {
    return MsgSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEth): MsgSendToEthProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToEth",
      value: MsgSendToEth.encode(message).finish()
    };
  }
};
function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}
export const MsgSendToEthResponse = {
  typeUrl: "/gravity.v1.MsgSendToEthResponse",
  encode(_: MsgSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSendToEthResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendToEthResponse>): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgSendToEthResponseAmino): MsgSendToEthResponse {
    return {};
  },
  toAmino(_: MsgSendToEthResponse): MsgSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthResponseAminoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToEthResponseProtoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgSendToEthResponse): Uint8Array {
    return MsgSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEthResponse): MsgSendToEthResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToEthResponse",
      value: MsgSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBatch(): MsgRequestBatch {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgRequestBatch = {
  typeUrl: "/gravity.v1.MsgRequestBatch",
  encode(message: MsgRequestBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgRequestBatch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgRequestBatch>): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgRequestBatchAmino): MsgRequestBatch {
    return {
      sender: object.sender,
      denom: object.denom
    };
  },
  toAmino(message: MsgRequestBatch): MsgRequestBatchAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchAminoMsg): MsgRequestBatch {
    return MsgRequestBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBatchProtoMsg): MsgRequestBatch {
    return MsgRequestBatch.decode(message.value);
  },
  toProto(message: MsgRequestBatch): Uint8Array {
    return MsgRequestBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatch): MsgRequestBatchProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgRequestBatch",
      value: MsgRequestBatch.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}
export const MsgRequestBatchResponse = {
  typeUrl: "/gravity.v1.MsgRequestBatchResponse",
  encode(_: MsgRequestBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRequestBatchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRequestBatchResponse>): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
  fromAmino(_: MsgRequestBatchResponseAmino): MsgRequestBatchResponse {
    return {};
  },
  toAmino(_: MsgRequestBatchResponse): MsgRequestBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchResponseAminoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBatchResponseProtoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.decode(message.value);
  },
  toProto(message: MsgRequestBatchResponse): Uint8Array {
    return MsgRequestBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatchResponse): MsgRequestBatchResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgRequestBatchResponse",
      value: MsgRequestBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: BigInt(0),
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmBatch = {
  typeUrl: "/gravity.v1.MsgConfirmBatch",
  encode(message: MsgConfirmBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): MsgConfirmBatch {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },
  fromPartial(object: Partial<MsgConfirmBatch>): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmBatchAmino): MsgConfirmBatch {
    return {
      nonce: BigInt(object.nonce),
      tokenContract: object.token_contract,
      ethSigner: object.eth_signer,
      orchestrator: object.orchestrator,
      signature: object.signature
    };
  },
  toAmino(message: MsgConfirmBatch): MsgConfirmBatchAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.eth_signer = message.ethSigner;
    obj.orchestrator = message.orchestrator;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchAminoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBatchProtoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.decode(message.value);
  },
  toProto(message: MsgConfirmBatch): Uint8Array {
    return MsgConfirmBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatch): MsgConfirmBatchProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmBatch",
      value: MsgConfirmBatch.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}
export const MsgConfirmBatchResponse = {
  typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
  encode(_: MsgConfirmBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConfirmBatchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
  fromAmino(_: MsgConfirmBatchResponseAmino): MsgConfirmBatchResponse {
    return {};
  },
  toAmino(_: MsgConfirmBatchResponse): MsgConfirmBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchResponseAminoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBatchResponseProtoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.decode(message.value);
  },
  toProto(message: MsgConfirmBatchResponse): Uint8Array {
    return MsgConfirmBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatchResponse): MsgConfirmBatchResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
      value: MsgConfirmBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmLogicCall(): MsgConfirmLogicCall {
  return {
    invalidationId: "",
    invalidationNonce: BigInt(0),
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmLogicCall = {
  typeUrl: "/gravity.v1.MsgConfirmLogicCall",
  encode(message: MsgConfirmLogicCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.invalidationId !== "") {
      writer.uint32(10).string(message.invalidationId);
    }
    if (message.invalidationNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): MsgConfirmLogicCall {
    return {
      invalidationId: isSet(object.invalidationId) ? String(object.invalidationId) : "",
      invalidationNonce: isSet(object.invalidationNonce) ? BigInt(object.invalidationNonce.toString()) : BigInt(0),
      ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },
  fromPartial(object: Partial<MsgConfirmLogicCall>): MsgConfirmLogicCall {
    const message = createBaseMsgConfirmLogicCall();
    message.invalidationId = object.invalidationId ?? "";
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce.toString()) : BigInt(0);
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmLogicCallAmino): MsgConfirmLogicCall {
    return {
      invalidationId: object.invalidation_id,
      invalidationNonce: BigInt(object.invalidation_nonce),
      ethSigner: object.eth_signer,
      orchestrator: object.orchestrator,
      signature: object.signature
    };
  },
  toAmino(message: MsgConfirmLogicCall): MsgConfirmLogicCallAmino {
    const obj: any = {};
    obj.invalidation_id = message.invalidationId;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    obj.eth_signer = message.ethSigner;
    obj.orchestrator = message.orchestrator;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmLogicCallAminoMsg): MsgConfirmLogicCall {
    return MsgConfirmLogicCall.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmLogicCallProtoMsg): MsgConfirmLogicCall {
    return MsgConfirmLogicCall.decode(message.value);
  },
  toProto(message: MsgConfirmLogicCall): Uint8Array {
    return MsgConfirmLogicCall.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmLogicCall): MsgConfirmLogicCallProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmLogicCall",
      value: MsgConfirmLogicCall.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmLogicCallResponse(): MsgConfirmLogicCallResponse {
  return {};
}
export const MsgConfirmLogicCallResponse = {
  typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
  encode(_: MsgConfirmLogicCallResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConfirmLogicCallResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse {
    const message = createBaseMsgConfirmLogicCallResponse();
    return message;
  },
  fromAmino(_: MsgConfirmLogicCallResponseAmino): MsgConfirmLogicCallResponse {
    return {};
  },
  toAmino(_: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmLogicCallResponseAminoMsg): MsgConfirmLogicCallResponse {
    return MsgConfirmLogicCallResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmLogicCallResponseProtoMsg): MsgConfirmLogicCallResponse {
    return MsgConfirmLogicCallResponse.decode(message.value);
  },
  toProto(message: MsgConfirmLogicCallResponse): Uint8Array {
    return MsgConfirmLogicCallResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
      value: MsgConfirmLogicCallResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendToCosmosClaim(): MsgSendToCosmosClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: ""
  };
}
export const MsgSendToCosmosClaim = {
  typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
  encode(message: MsgSendToCosmosClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(42).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(50).string(message.cosmosReceiver);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    return writer;
  },
  fromJSON(object: any): MsgSendToCosmosClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? BigInt(object.eventNonce.toString()) : BigInt(0),
      ethBlockHeight: isSet(object.ethBlockHeight) ? BigInt(object.ethBlockHeight.toString()) : BigInt(0),
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : "",
      cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgSendToCosmosClaim>): MsgSendToCosmosClaim {
    const message = createBaseMsgSendToCosmosClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgSendToCosmosClaimAmino): MsgSendToCosmosClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      ethBlockHeight: BigInt(object.eth_block_height),
      tokenContract: object.token_contract,
      amount: object.amount,
      ethereumSender: object.ethereum_sender,
      cosmosReceiver: object.cosmos_receiver,
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.eth_block_height = message.ethBlockHeight ? message.ethBlockHeight.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.amount = message.amount;
    obj.ethereum_sender = message.ethereumSender;
    obj.cosmos_receiver = message.cosmosReceiver;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgSendToCosmosClaimAminoMsg): MsgSendToCosmosClaim {
    return MsgSendToCosmosClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToCosmosClaimProtoMsg): MsgSendToCosmosClaim {
    return MsgSendToCosmosClaim.decode(message.value);
  },
  toProto(message: MsgSendToCosmosClaim): Uint8Array {
    return MsgSendToCosmosClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
      value: MsgSendToCosmosClaim.encode(message).finish()
    };
  }
};
function createBaseMsgSendToCosmosClaimResponse(): MsgSendToCosmosClaimResponse {
  return {};
}
export const MsgSendToCosmosClaimResponse = {
  typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
  encode(_: MsgSendToCosmosClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSendToCosmosClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendToCosmosClaimResponse>): MsgSendToCosmosClaimResponse {
    const message = createBaseMsgSendToCosmosClaimResponse();
    return message;
  },
  fromAmino(_: MsgSendToCosmosClaimResponseAmino): MsgSendToCosmosClaimResponse {
    return {};
  },
  toAmino(_: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendToCosmosClaimResponseAminoMsg): MsgSendToCosmosClaimResponse {
    return MsgSendToCosmosClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToCosmosClaimResponseProtoMsg): MsgSendToCosmosClaimResponse {
    return MsgSendToCosmosClaimResponse.decode(message.value);
  },
  toProto(message: MsgSendToCosmosClaimResponse): Uint8Array {
    return MsgSendToCosmosClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
      value: MsgSendToCosmosClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteIbcAutoForwards(): MsgExecuteIbcAutoForwards {
  return {
    forwardsToClear: BigInt(0),
    executor: ""
  };
}
export const MsgExecuteIbcAutoForwards = {
  typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwards",
  encode(message: MsgExecuteIbcAutoForwards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forwardsToClear !== BigInt(0)) {
      writer.uint32(8).uint64(message.forwardsToClear);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteIbcAutoForwards {
    return {
      forwardsToClear: isSet(object.forwardsToClear) ? BigInt(object.forwardsToClear.toString()) : BigInt(0),
      executor: isSet(object.executor) ? String(object.executor) : ""
    };
  },
  fromPartial(object: Partial<MsgExecuteIbcAutoForwards>): MsgExecuteIbcAutoForwards {
    const message = createBaseMsgExecuteIbcAutoForwards();
    message.forwardsToClear = object.forwardsToClear !== undefined && object.forwardsToClear !== null ? BigInt(object.forwardsToClear.toString()) : BigInt(0);
    message.executor = object.executor ?? "";
    return message;
  },
  fromAmino(object: MsgExecuteIbcAutoForwardsAmino): MsgExecuteIbcAutoForwards {
    return {
      forwardsToClear: BigInt(object.forwards_to_clear),
      executor: object.executor
    };
  },
  toAmino(message: MsgExecuteIbcAutoForwards): MsgExecuteIbcAutoForwardsAmino {
    const obj: any = {};
    obj.forwards_to_clear = message.forwardsToClear ? message.forwardsToClear.toString() : undefined;
    obj.executor = message.executor;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteIbcAutoForwardsAminoMsg): MsgExecuteIbcAutoForwards {
    return MsgExecuteIbcAutoForwards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteIbcAutoForwardsProtoMsg): MsgExecuteIbcAutoForwards {
    return MsgExecuteIbcAutoForwards.decode(message.value);
  },
  toProto(message: MsgExecuteIbcAutoForwards): Uint8Array {
    return MsgExecuteIbcAutoForwards.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteIbcAutoForwards): MsgExecuteIbcAutoForwardsProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwards",
      value: MsgExecuteIbcAutoForwards.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteIbcAutoForwardsResponse(): MsgExecuteIbcAutoForwardsResponse {
  return {};
}
export const MsgExecuteIbcAutoForwardsResponse = {
  typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse",
  encode(_: MsgExecuteIbcAutoForwardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgExecuteIbcAutoForwardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgExecuteIbcAutoForwardsResponse>): MsgExecuteIbcAutoForwardsResponse {
    const message = createBaseMsgExecuteIbcAutoForwardsResponse();
    return message;
  },
  fromAmino(_: MsgExecuteIbcAutoForwardsResponseAmino): MsgExecuteIbcAutoForwardsResponse {
    return {};
  },
  toAmino(_: MsgExecuteIbcAutoForwardsResponse): MsgExecuteIbcAutoForwardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecuteIbcAutoForwardsResponseAminoMsg): MsgExecuteIbcAutoForwardsResponse {
    return MsgExecuteIbcAutoForwardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteIbcAutoForwardsResponseProtoMsg): MsgExecuteIbcAutoForwardsResponse {
    return MsgExecuteIbcAutoForwardsResponse.decode(message.value);
  },
  toProto(message: MsgExecuteIbcAutoForwardsResponse): Uint8Array {
    return MsgExecuteIbcAutoForwardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteIbcAutoForwardsResponse): MsgExecuteIbcAutoForwardsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse",
      value: MsgExecuteIbcAutoForwardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBatchSendToEthClaim(): MsgBatchSendToEthClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    batchNonce: BigInt(0),
    tokenContract: "",
    orchestrator: ""
  };
}
export const MsgBatchSendToEthClaim = {
  typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
  encode(message: MsgBatchSendToEthClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },
  fromJSON(object: any): MsgBatchSendToEthClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? BigInt(object.eventNonce.toString()) : BigInt(0),
      ethBlockHeight: isSet(object.ethBlockHeight) ? BigInt(object.ethBlockHeight.toString()) : BigInt(0),
      batchNonce: isSet(object.batchNonce) ? BigInt(object.batchNonce.toString()) : BigInt(0),
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgBatchSendToEthClaim>): MsgBatchSendToEthClaim {
    const message = createBaseMsgBatchSendToEthClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgBatchSendToEthClaimAmino): MsgBatchSendToEthClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      ethBlockHeight: BigInt(object.eth_block_height),
      batchNonce: BigInt(object.batch_nonce),
      tokenContract: object.token_contract,
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.eth_block_height = message.ethBlockHeight ? message.ethBlockHeight.toString() : undefined;
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgBatchSendToEthClaimAminoMsg): MsgBatchSendToEthClaim {
    return MsgBatchSendToEthClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchSendToEthClaimProtoMsg): MsgBatchSendToEthClaim {
    return MsgBatchSendToEthClaim.decode(message.value);
  },
  toProto(message: MsgBatchSendToEthClaim): Uint8Array {
    return MsgBatchSendToEthClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
      value: MsgBatchSendToEthClaim.encode(message).finish()
    };
  }
};
function createBaseMsgBatchSendToEthClaimResponse(): MsgBatchSendToEthClaimResponse {
  return {};
}
export const MsgBatchSendToEthClaimResponse = {
  typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
  encode(_: MsgBatchSendToEthClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBatchSendToEthClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBatchSendToEthClaimResponse>): MsgBatchSendToEthClaimResponse {
    const message = createBaseMsgBatchSendToEthClaimResponse();
    return message;
  },
  fromAmino(_: MsgBatchSendToEthClaimResponseAmino): MsgBatchSendToEthClaimResponse {
    return {};
  },
  toAmino(_: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBatchSendToEthClaimResponseAminoMsg): MsgBatchSendToEthClaimResponse {
    return MsgBatchSendToEthClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchSendToEthClaimResponseProtoMsg): MsgBatchSendToEthClaimResponse {
    return MsgBatchSendToEthClaimResponse.decode(message.value);
  },
  toProto(message: MsgBatchSendToEthClaimResponse): Uint8Array {
    return MsgBatchSendToEthClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
      value: MsgBatchSendToEthClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: BigInt(0),
    orchestrator: ""
  };
}
export const MsgERC20DeployedClaim = {
  typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
  encode(message: MsgERC20DeployedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.cosmosDenom !== "") {
      writer.uint32(26).string(message.cosmosDenom);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(56).uint64(message.decimals);
    }
    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }
    return writer;
  },
  fromJSON(object: any): MsgERC20DeployedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? BigInt(object.eventNonce.toString()) : BigInt(0),
      ethBlockHeight: isSet(object.ethBlockHeight) ? BigInt(object.ethBlockHeight.toString()) : BigInt(0),
      cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0),
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgERC20DeployedClaimAmino): MsgERC20DeployedClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      ethBlockHeight: BigInt(object.eth_block_height),
      cosmosDenom: object.cosmos_denom,
      tokenContract: object.token_contract,
      name: object.name,
      symbol: object.symbol,
      decimals: BigInt(object.decimals),
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.eth_block_height = message.ethBlockHeight ? message.ethBlockHeight.toString() : undefined;
    obj.cosmos_denom = message.cosmosDenom;
    obj.token_contract = message.tokenContract;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgERC20DeployedClaimAminoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgERC20DeployedClaimProtoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaim): Uint8Array {
    return MsgERC20DeployedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
      value: MsgERC20DeployedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}
export const MsgERC20DeployedClaimResponse = {
  typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
  encode(_: MsgERC20DeployedClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgERC20DeployedClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  },
  fromAmino(_: MsgERC20DeployedClaimResponseAmino): MsgERC20DeployedClaimResponse {
    return {};
  },
  toAmino(_: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgERC20DeployedClaimResponseAminoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgERC20DeployedClaimResponseProtoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaimResponse): Uint8Array {
    return MsgERC20DeployedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
      value: MsgERC20DeployedClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLogicCallExecutedClaim(): MsgLogicCallExecutedClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    invalidationId: new Uint8Array(),
    invalidationNonce: BigInt(0),
    orchestrator: ""
  };
}
export const MsgLogicCallExecutedClaim = {
  typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
  encode(message: MsgLogicCallExecutedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.invalidationId.length !== 0) {
      writer.uint32(26).bytes(message.invalidationId);
    }
    if (message.invalidationNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.invalidationNonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },
  fromJSON(object: any): MsgLogicCallExecutedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? BigInt(object.eventNonce.toString()) : BigInt(0),
      ethBlockHeight: isSet(object.ethBlockHeight) ? BigInt(object.ethBlockHeight.toString()) : BigInt(0),
      invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce) ? BigInt(object.invalidationNonce.toString()) : BigInt(0),
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim {
    const message = createBaseMsgLogicCallExecutedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce.toString()) : BigInt(0);
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgLogicCallExecutedClaimAmino): MsgLogicCallExecutedClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      ethBlockHeight: BigInt(object.eth_block_height),
      invalidationId: object.invalidation_id,
      invalidationNonce: BigInt(object.invalidation_nonce),
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.eth_block_height = message.ethBlockHeight ? message.ethBlockHeight.toString() : undefined;
    obj.invalidation_id = message.invalidationId;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgLogicCallExecutedClaimAminoMsg): MsgLogicCallExecutedClaim {
    return MsgLogicCallExecutedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLogicCallExecutedClaimProtoMsg): MsgLogicCallExecutedClaim {
    return MsgLogicCallExecutedClaim.decode(message.value);
  },
  toProto(message: MsgLogicCallExecutedClaim): Uint8Array {
    return MsgLogicCallExecutedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
      value: MsgLogicCallExecutedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgLogicCallExecutedClaimResponse(): MsgLogicCallExecutedClaimResponse {
  return {};
}
export const MsgLogicCallExecutedClaimResponse = {
  typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
  encode(_: MsgLogicCallExecutedClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLogicCallExecutedClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse {
    const message = createBaseMsgLogicCallExecutedClaimResponse();
    return message;
  },
  fromAmino(_: MsgLogicCallExecutedClaimResponseAmino): MsgLogicCallExecutedClaimResponse {
    return {};
  },
  toAmino(_: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLogicCallExecutedClaimResponseAminoMsg): MsgLogicCallExecutedClaimResponse {
    return MsgLogicCallExecutedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLogicCallExecutedClaimResponseProtoMsg): MsgLogicCallExecutedClaimResponse {
    return MsgLogicCallExecutedClaimResponse.decode(message.value);
  },
  toProto(message: MsgLogicCallExecutedClaimResponse): Uint8Array {
    return MsgLogicCallExecutedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
      value: MsgLogicCallExecutedClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: BigInt(0),
    valsetNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    members: [],
    rewardAmount: "",
    rewardToken: "",
    orchestrator: ""
  };
}
export const MsgValsetUpdatedClaim = {
  typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
  encode(message: MsgValsetUpdatedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.ethBlockHeight);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(42).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(50).string(message.rewardToken);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    return writer;
  },
  fromJSON(object: any): MsgValsetUpdatedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? BigInt(object.eventNonce.toString()) : BigInt(0),
      valsetNonce: isSet(object.valsetNonce) ? BigInt(object.valsetNonce.toString()) : BigInt(0),
      ethBlockHeight: isSet(object.ethBlockHeight) ? BigInt(object.ethBlockHeight.toString()) : BigInt(0),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromJSON(e)) : [],
      rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
      rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgValsetUpdatedClaimAmino): MsgValsetUpdatedClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      valsetNonce: BigInt(object.valset_nonce),
      ethBlockHeight: BigInt(object.eth_block_height),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromAmino(e)) : [],
      rewardAmount: object.reward_amount,
      rewardToken: object.reward_token,
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.valset_nonce = message.valsetNonce ? message.valsetNonce.toString() : undefined;
    obj.eth_block_height = message.ethBlockHeight ? message.ethBlockHeight.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimAminoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimProtoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaim): Uint8Array {
    return MsgValsetUpdatedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
      value: MsgValsetUpdatedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}
export const MsgValsetUpdatedClaimResponse = {
  typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
  encode(_: MsgValsetUpdatedClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgValsetUpdatedClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
  fromAmino(_: MsgValsetUpdatedClaimResponseAmino): MsgValsetUpdatedClaimResponse {
    return {};
  },
  toAmino(_: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimResponseAminoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimResponseProtoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaimResponse): Uint8Array {
    return MsgValsetUpdatedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
      value: MsgValsetUpdatedClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return {
    transactionId: BigInt(0),
    sender: ""
  };
}
export const MsgCancelSendToEth = {
  typeUrl: "/gravity.v1.MsgCancelSendToEth",
  encode(message: MsgCancelSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transactionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelSendToEth {
    return {
      transactionId: isSet(object.transactionId) ? BigInt(object.transactionId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelSendToEth>): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? BigInt(object.transactionId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCancelSendToEthAmino): MsgCancelSendToEth {
    return {
      transactionId: BigInt(object.transaction_id),
      sender: object.sender
    };
  },
  toAmino(message: MsgCancelSendToEth): MsgCancelSendToEthAmino {
    const obj: any = {};
    obj.transaction_id = message.transactionId ? message.transactionId.toString() : undefined;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthAminoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSendToEthProtoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.decode(message.value);
  },
  toProto(message: MsgCancelSendToEth): Uint8Array {
    return MsgCancelSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEth): MsgCancelSendToEthProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgCancelSendToEth",
      value: MsgCancelSendToEth.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}
export const MsgCancelSendToEthResponse = {
  typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
  encode(_: MsgCancelSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelSendToEthResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgCancelSendToEthResponseAmino): MsgCancelSendToEthResponse {
    return {};
  },
  toAmino(_: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthResponseAminoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSendToEthResponseProtoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgCancelSendToEthResponse): Uint8Array {
    return MsgCancelSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
      value: MsgCancelSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return {
    subject: Any.fromPartial({}),
    signature: "",
    sender: ""
  };
}
export const MsgSubmitBadSignatureEvidence = {
  typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
  encode(message: MsgSubmitBadSignatureEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subject !== undefined) {
      Any.encode((message.subject as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitBadSignatureEvidence {
    return {
      subject: isSet(object.subject) ? Any.fromJSON(object.subject) : undefined,
      signature: isSet(object.signature) ? String(object.signature) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    message.subject = object.subject !== undefined && object.subject !== null ? Any.fromPartial(object.subject) : undefined;
    message.signature = object.signature ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitBadSignatureEvidenceAmino): MsgSubmitBadSignatureEvidence {
    return {
      subject: object?.subject ? EthereumSigned_FromAmino(object.subject) : undefined,
      signature: object.signature,
      sender: object.sender
    };
  },
  toAmino(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAmino {
    const obj: any = {};
    obj.subject = message.subject ? EthereumSigned_ToAmino((message.subject as Any)) : undefined;
    obj.signature = message.signature;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceAminoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceProtoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidence): Uint8Array {
    return MsgSubmitBadSignatureEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
      value: MsgSubmitBadSignatureEvidence.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
  typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
  encode(_: MsgSubmitBadSignatureEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitBadSignatureEvidenceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  },
  fromAmino(_: MsgSubmitBadSignatureEvidenceResponseAmino): MsgSubmitBadSignatureEvidenceResponse {
    return {};
  },
  toAmino(_: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceResponseAminoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceResponseProtoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidenceResponse): Uint8Array {
    return MsgSubmitBadSignatureEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
      value: MsgSubmitBadSignatureEvidenceResponse.encode(message).finish()
    };
  }
};
function createBaseEventSetOperatorAddress(): EventSetOperatorAddress {
  return {
    message: "",
    address: ""
  };
}
export const EventSetOperatorAddress = {
  typeUrl: "/gravity.v1.EventSetOperatorAddress",
  encode(message: EventSetOperatorAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): EventSetOperatorAddress {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<EventSetOperatorAddress>): EventSetOperatorAddress {
    const message = createBaseEventSetOperatorAddress();
    message.message = object.message ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventSetOperatorAddressAmino): EventSetOperatorAddress {
    return {
      message: object.message,
      address: object.address
    };
  },
  toAmino(message: EventSetOperatorAddress): EventSetOperatorAddressAmino {
    const obj: any = {};
    obj.message = message.message;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventSetOperatorAddressAminoMsg): EventSetOperatorAddress {
    return EventSetOperatorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOperatorAddressProtoMsg): EventSetOperatorAddress {
    return EventSetOperatorAddress.decode(message.value);
  },
  toProto(message: EventSetOperatorAddress): Uint8Array {
    return EventSetOperatorAddress.encode(message).finish();
  },
  toProtoMsg(message: EventSetOperatorAddress): EventSetOperatorAddressProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventSetOperatorAddress",
      value: EventSetOperatorAddress.encode(message).finish()
    };
  }
};
function createBaseEventValsetConfirmKey(): EventValsetConfirmKey {
  return {
    message: "",
    key: ""
  };
}
export const EventValsetConfirmKey = {
  typeUrl: "/gravity.v1.EventValsetConfirmKey",
  encode(message: EventValsetConfirmKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  fromJSON(object: any): EventValsetConfirmKey {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  fromPartial(object: Partial<EventValsetConfirmKey>): EventValsetConfirmKey {
    const message = createBaseEventValsetConfirmKey();
    message.message = object.message ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: EventValsetConfirmKeyAmino): EventValsetConfirmKey {
    return {
      message: object.message,
      key: object.key
    };
  },
  toAmino(message: EventValsetConfirmKey): EventValsetConfirmKeyAmino {
    const obj: any = {};
    obj.message = message.message;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: EventValsetConfirmKeyAminoMsg): EventValsetConfirmKey {
    return EventValsetConfirmKey.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetConfirmKeyProtoMsg): EventValsetConfirmKey {
    return EventValsetConfirmKey.decode(message.value);
  },
  toProto(message: EventValsetConfirmKey): Uint8Array {
    return EventValsetConfirmKey.encode(message).finish();
  },
  toProtoMsg(message: EventValsetConfirmKey): EventValsetConfirmKeyProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventValsetConfirmKey",
      value: EventValsetConfirmKey.encode(message).finish()
    };
  }
};
function createBaseEventBatchCreated(): EventBatchCreated {
  return {
    message: "",
    batchNonce: ""
  };
}
export const EventBatchCreated = {
  typeUrl: "/gravity.v1.EventBatchCreated",
  encode(message: EventBatchCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.batchNonce !== "") {
      writer.uint32(18).string(message.batchNonce);
    }
    return writer;
  },
  fromJSON(object: any): EventBatchCreated {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      batchNonce: isSet(object.batchNonce) ? String(object.batchNonce) : ""
    };
  },
  fromPartial(object: Partial<EventBatchCreated>): EventBatchCreated {
    const message = createBaseEventBatchCreated();
    message.message = object.message ?? "";
    message.batchNonce = object.batchNonce ?? "";
    return message;
  },
  fromAmino(object: EventBatchCreatedAmino): EventBatchCreated {
    return {
      message: object.message,
      batchNonce: object.batch_nonce
    };
  },
  toAmino(message: EventBatchCreated): EventBatchCreatedAmino {
    const obj: any = {};
    obj.message = message.message;
    obj.batch_nonce = message.batchNonce;
    return obj;
  },
  fromAminoMsg(object: EventBatchCreatedAminoMsg): EventBatchCreated {
    return EventBatchCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchCreatedProtoMsg): EventBatchCreated {
    return EventBatchCreated.decode(message.value);
  },
  toProto(message: EventBatchCreated): Uint8Array {
    return EventBatchCreated.encode(message).finish();
  },
  toProtoMsg(message: EventBatchCreated): EventBatchCreatedProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventBatchCreated",
      value: EventBatchCreated.encode(message).finish()
    };
  }
};
function createBaseEventBatchConfirmKey(): EventBatchConfirmKey {
  return {
    message: "",
    batchConfirmKey: ""
  };
}
export const EventBatchConfirmKey = {
  typeUrl: "/gravity.v1.EventBatchConfirmKey",
  encode(message: EventBatchConfirmKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.batchConfirmKey !== "") {
      writer.uint32(18).string(message.batchConfirmKey);
    }
    return writer;
  },
  fromJSON(object: any): EventBatchConfirmKey {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      batchConfirmKey: isSet(object.batchConfirmKey) ? String(object.batchConfirmKey) : ""
    };
  },
  fromPartial(object: Partial<EventBatchConfirmKey>): EventBatchConfirmKey {
    const message = createBaseEventBatchConfirmKey();
    message.message = object.message ?? "";
    message.batchConfirmKey = object.batchConfirmKey ?? "";
    return message;
  },
  fromAmino(object: EventBatchConfirmKeyAmino): EventBatchConfirmKey {
    return {
      message: object.message,
      batchConfirmKey: object.batch_confirm_key
    };
  },
  toAmino(message: EventBatchConfirmKey): EventBatchConfirmKeyAmino {
    const obj: any = {};
    obj.message = message.message;
    obj.batch_confirm_key = message.batchConfirmKey;
    return obj;
  },
  fromAminoMsg(object: EventBatchConfirmKeyAminoMsg): EventBatchConfirmKey {
    return EventBatchConfirmKey.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchConfirmKeyProtoMsg): EventBatchConfirmKey {
    return EventBatchConfirmKey.decode(message.value);
  },
  toProto(message: EventBatchConfirmKey): Uint8Array {
    return EventBatchConfirmKey.encode(message).finish();
  },
  toProtoMsg(message: EventBatchConfirmKey): EventBatchConfirmKeyProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventBatchConfirmKey",
      value: EventBatchConfirmKey.encode(message).finish()
    };
  }
};
function createBaseEventBatchSendToEthClaim(): EventBatchSendToEthClaim {
  return {
    nonce: ""
  };
}
export const EventBatchSendToEthClaim = {
  typeUrl: "/gravity.v1.EventBatchSendToEthClaim",
  encode(message: EventBatchSendToEthClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): EventBatchSendToEthClaim {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  fromPartial(object: Partial<EventBatchSendToEthClaim>): EventBatchSendToEthClaim {
    const message = createBaseEventBatchSendToEthClaim();
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventBatchSendToEthClaimAmino): EventBatchSendToEthClaim {
    return {
      nonce: object.nonce
    };
  },
  toAmino(message: EventBatchSendToEthClaim): EventBatchSendToEthClaimAmino {
    const obj: any = {};
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventBatchSendToEthClaimAminoMsg): EventBatchSendToEthClaim {
    return EventBatchSendToEthClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchSendToEthClaimProtoMsg): EventBatchSendToEthClaim {
    return EventBatchSendToEthClaim.decode(message.value);
  },
  toProto(message: EventBatchSendToEthClaim): Uint8Array {
    return EventBatchSendToEthClaim.encode(message).finish();
  },
  toProtoMsg(message: EventBatchSendToEthClaim): EventBatchSendToEthClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventBatchSendToEthClaim",
      value: EventBatchSendToEthClaim.encode(message).finish()
    };
  }
};
function createBaseEventClaim(): EventClaim {
  return {
    message: "",
    claimHash: "",
    attestationId: ""
  };
}
export const EventClaim = {
  typeUrl: "/gravity.v1.EventClaim",
  encode(message: EventClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.claimHash !== "") {
      writer.uint32(18).string(message.claimHash);
    }
    if (message.attestationId !== "") {
      writer.uint32(26).string(message.attestationId);
    }
    return writer;
  },
  fromJSON(object: any): EventClaim {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      claimHash: isSet(object.claimHash) ? String(object.claimHash) : "",
      attestationId: isSet(object.attestationId) ? String(object.attestationId) : ""
    };
  },
  fromPartial(object: Partial<EventClaim>): EventClaim {
    const message = createBaseEventClaim();
    message.message = object.message ?? "";
    message.claimHash = object.claimHash ?? "";
    message.attestationId = object.attestationId ?? "";
    return message;
  },
  fromAmino(object: EventClaimAmino): EventClaim {
    return {
      message: object.message,
      claimHash: object.claim_hash,
      attestationId: object.attestation_id
    };
  },
  toAmino(message: EventClaim): EventClaimAmino {
    const obj: any = {};
    obj.message = message.message;
    obj.claim_hash = message.claimHash;
    obj.attestation_id = message.attestationId;
    return obj;
  },
  fromAminoMsg(object: EventClaimAminoMsg): EventClaim {
    return EventClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimProtoMsg): EventClaim {
    return EventClaim.decode(message.value);
  },
  toProto(message: EventClaim): Uint8Array {
    return EventClaim.encode(message).finish();
  },
  toProtoMsg(message: EventClaim): EventClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventClaim",
      value: EventClaim.encode(message).finish()
    };
  }
};
function createBaseEventBadSignatureEvidence(): EventBadSignatureEvidence {
  return {
    message: "",
    badEthSignature: "",
    badEthSignatureSubject: ""
  };
}
export const EventBadSignatureEvidence = {
  typeUrl: "/gravity.v1.EventBadSignatureEvidence",
  encode(message: EventBadSignatureEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.badEthSignature !== "") {
      writer.uint32(18).string(message.badEthSignature);
    }
    if (message.badEthSignatureSubject !== "") {
      writer.uint32(26).string(message.badEthSignatureSubject);
    }
    return writer;
  },
  fromJSON(object: any): EventBadSignatureEvidence {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      badEthSignature: isSet(object.badEthSignature) ? String(object.badEthSignature) : "",
      badEthSignatureSubject: isSet(object.badEthSignatureSubject) ? String(object.badEthSignatureSubject) : ""
    };
  },
  fromPartial(object: Partial<EventBadSignatureEvidence>): EventBadSignatureEvidence {
    const message = createBaseEventBadSignatureEvidence();
    message.message = object.message ?? "";
    message.badEthSignature = object.badEthSignature ?? "";
    message.badEthSignatureSubject = object.badEthSignatureSubject ?? "";
    return message;
  },
  fromAmino(object: EventBadSignatureEvidenceAmino): EventBadSignatureEvidence {
    return {
      message: object.message,
      badEthSignature: object.bad_eth_signature,
      badEthSignatureSubject: object.bad_eth_signature_subject
    };
  },
  toAmino(message: EventBadSignatureEvidence): EventBadSignatureEvidenceAmino {
    const obj: any = {};
    obj.message = message.message;
    obj.bad_eth_signature = message.badEthSignature;
    obj.bad_eth_signature_subject = message.badEthSignatureSubject;
    return obj;
  },
  fromAminoMsg(object: EventBadSignatureEvidenceAminoMsg): EventBadSignatureEvidence {
    return EventBadSignatureEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBadSignatureEvidenceProtoMsg): EventBadSignatureEvidence {
    return EventBadSignatureEvidence.decode(message.value);
  },
  toProto(message: EventBadSignatureEvidence): Uint8Array {
    return EventBadSignatureEvidence.encode(message).finish();
  },
  toProtoMsg(message: EventBadSignatureEvidence): EventBadSignatureEvidenceProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventBadSignatureEvidence",
      value: EventBadSignatureEvidence.encode(message).finish()
    };
  }
};
function createBaseEventERC20DeployedClaim(): EventERC20DeployedClaim {
  return {
    token: "",
    nonce: ""
  };
}
export const EventERC20DeployedClaim = {
  typeUrl: "/gravity.v1.EventERC20DeployedClaim",
  encode(message: EventERC20DeployedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): EventERC20DeployedClaim {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  fromPartial(object: Partial<EventERC20DeployedClaim>): EventERC20DeployedClaim {
    const message = createBaseEventERC20DeployedClaim();
    message.token = object.token ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventERC20DeployedClaimAmino): EventERC20DeployedClaim {
    return {
      token: object.token,
      nonce: object.nonce
    };
  },
  toAmino(message: EventERC20DeployedClaim): EventERC20DeployedClaimAmino {
    const obj: any = {};
    obj.token = message.token;
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventERC20DeployedClaimAminoMsg): EventERC20DeployedClaim {
    return EventERC20DeployedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventERC20DeployedClaimProtoMsg): EventERC20DeployedClaim {
    return EventERC20DeployedClaim.decode(message.value);
  },
  toProto(message: EventERC20DeployedClaim): Uint8Array {
    return EventERC20DeployedClaim.encode(message).finish();
  },
  toProtoMsg(message: EventERC20DeployedClaim): EventERC20DeployedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventERC20DeployedClaim",
      value: EventERC20DeployedClaim.encode(message).finish()
    };
  }
};
function createBaseEventValsetUpdatedClaim(): EventValsetUpdatedClaim {
  return {
    nonce: ""
  };
}
export const EventValsetUpdatedClaim = {
  typeUrl: "/gravity.v1.EventValsetUpdatedClaim",
  encode(message: EventValsetUpdatedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): EventValsetUpdatedClaim {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  fromPartial(object: Partial<EventValsetUpdatedClaim>): EventValsetUpdatedClaim {
    const message = createBaseEventValsetUpdatedClaim();
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventValsetUpdatedClaimAmino): EventValsetUpdatedClaim {
    return {
      nonce: object.nonce
    };
  },
  toAmino(message: EventValsetUpdatedClaim): EventValsetUpdatedClaimAmino {
    const obj: any = {};
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventValsetUpdatedClaimAminoMsg): EventValsetUpdatedClaim {
    return EventValsetUpdatedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetUpdatedClaimProtoMsg): EventValsetUpdatedClaim {
    return EventValsetUpdatedClaim.decode(message.value);
  },
  toProto(message: EventValsetUpdatedClaim): Uint8Array {
    return EventValsetUpdatedClaim.encode(message).finish();
  },
  toProtoMsg(message: EventValsetUpdatedClaim): EventValsetUpdatedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventValsetUpdatedClaim",
      value: EventValsetUpdatedClaim.encode(message).finish()
    };
  }
};
function createBaseEventMultisigUpdateRequest(): EventMultisigUpdateRequest {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    multisigId: "",
    nonce: ""
  };
}
export const EventMultisigUpdateRequest = {
  typeUrl: "/gravity.v1.EventMultisigUpdateRequest",
  encode(message: EventMultisigUpdateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }
    if (message.multisigId !== "") {
      writer.uint32(26).string(message.multisigId);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): EventMultisigUpdateRequest {
    return {
      bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "",
      multisigId: isSet(object.multisigId) ? String(object.multisigId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  fromPartial(object: Partial<EventMultisigUpdateRequest>): EventMultisigUpdateRequest {
    const message = createBaseEventMultisigUpdateRequest();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.multisigId = object.multisigId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventMultisigUpdateRequestAmino): EventMultisigUpdateRequest {
    return {
      bridgeContract: object.bridge_contract,
      bridgeChainId: object.bridge_chain_id,
      multisigId: object.multisig_id,
      nonce: object.nonce
    };
  },
  toAmino(message: EventMultisigUpdateRequest): EventMultisigUpdateRequestAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId;
    obj.multisig_id = message.multisigId;
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventMultisigUpdateRequestAminoMsg): EventMultisigUpdateRequest {
    return EventMultisigUpdateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMultisigUpdateRequestProtoMsg): EventMultisigUpdateRequest {
    return EventMultisigUpdateRequest.decode(message.value);
  },
  toProto(message: EventMultisigUpdateRequest): Uint8Array {
    return EventMultisigUpdateRequest.encode(message).finish();
  },
  toProtoMsg(message: EventMultisigUpdateRequest): EventMultisigUpdateRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventMultisigUpdateRequest",
      value: EventMultisigUpdateRequest.encode(message).finish()
    };
  }
};
function createBaseEventOutgoingLogicCallCanceled(): EventOutgoingLogicCallCanceled {
  return {
    logicCallInvalidationId: "",
    logicCallInvalidationNonce: ""
  };
}
export const EventOutgoingLogicCallCanceled = {
  typeUrl: "/gravity.v1.EventOutgoingLogicCallCanceled",
  encode(message: EventOutgoingLogicCallCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.logicCallInvalidationId !== "") {
      writer.uint32(10).string(message.logicCallInvalidationId);
    }
    if (message.logicCallInvalidationNonce !== "") {
      writer.uint32(18).string(message.logicCallInvalidationNonce);
    }
    return writer;
  },
  fromJSON(object: any): EventOutgoingLogicCallCanceled {
    return {
      logicCallInvalidationId: isSet(object.logicCallInvalidationId) ? String(object.logicCallInvalidationId) : "",
      logicCallInvalidationNonce: isSet(object.logicCallInvalidationNonce) ? String(object.logicCallInvalidationNonce) : ""
    };
  },
  fromPartial(object: Partial<EventOutgoingLogicCallCanceled>): EventOutgoingLogicCallCanceled {
    const message = createBaseEventOutgoingLogicCallCanceled();
    message.logicCallInvalidationId = object.logicCallInvalidationId ?? "";
    message.logicCallInvalidationNonce = object.logicCallInvalidationNonce ?? "";
    return message;
  },
  fromAmino(object: EventOutgoingLogicCallCanceledAmino): EventOutgoingLogicCallCanceled {
    return {
      logicCallInvalidationId: object.logic_call_invalidation_id,
      logicCallInvalidationNonce: object.logic_call_invalidation_nonce
    };
  },
  toAmino(message: EventOutgoingLogicCallCanceled): EventOutgoingLogicCallCanceledAmino {
    const obj: any = {};
    obj.logic_call_invalidation_id = message.logicCallInvalidationId;
    obj.logic_call_invalidation_nonce = message.logicCallInvalidationNonce;
    return obj;
  },
  fromAminoMsg(object: EventOutgoingLogicCallCanceledAminoMsg): EventOutgoingLogicCallCanceled {
    return EventOutgoingLogicCallCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingLogicCallCanceledProtoMsg): EventOutgoingLogicCallCanceled {
    return EventOutgoingLogicCallCanceled.decode(message.value);
  },
  toProto(message: EventOutgoingLogicCallCanceled): Uint8Array {
    return EventOutgoingLogicCallCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingLogicCallCanceled): EventOutgoingLogicCallCanceledProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventOutgoingLogicCallCanceled",
      value: EventOutgoingLogicCallCanceled.encode(message).finish()
    };
  }
};
function createBaseEventSignatureSlashing(): EventSignatureSlashing {
  return {
    type: "",
    address: ""
  };
}
export const EventSignatureSlashing = {
  typeUrl: "/gravity.v1.EventSignatureSlashing",
  encode(message: EventSignatureSlashing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): EventSignatureSlashing {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<EventSignatureSlashing>): EventSignatureSlashing {
    const message = createBaseEventSignatureSlashing();
    message.type = object.type ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventSignatureSlashingAmino): EventSignatureSlashing {
    return {
      type: object.type,
      address: object.address
    };
  },
  toAmino(message: EventSignatureSlashing): EventSignatureSlashingAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventSignatureSlashingAminoMsg): EventSignatureSlashing {
    return EventSignatureSlashing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSignatureSlashingProtoMsg): EventSignatureSlashing {
    return EventSignatureSlashing.decode(message.value);
  },
  toProto(message: EventSignatureSlashing): Uint8Array {
    return EventSignatureSlashing.encode(message).finish();
  },
  toProtoMsg(message: EventSignatureSlashing): EventSignatureSlashingProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventSignatureSlashing",
      value: EventSignatureSlashing.encode(message).finish()
    };
  }
};
function createBaseEventOutgoingTxId(): EventOutgoingTxId {
  return {
    message: "",
    txId: ""
  };
}
export const EventOutgoingTxId = {
  typeUrl: "/gravity.v1.EventOutgoingTxId",
  encode(message: EventOutgoingTxId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    return writer;
  },
  fromJSON(object: any): EventOutgoingTxId {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      txId: isSet(object.txId) ? String(object.txId) : ""
    };
  },
  fromPartial(object: Partial<EventOutgoingTxId>): EventOutgoingTxId {
    const message = createBaseEventOutgoingTxId();
    message.message = object.message ?? "";
    message.txId = object.txId ?? "";
    return message;
  },
  fromAmino(object: EventOutgoingTxIdAmino): EventOutgoingTxId {
    return {
      message: object.message,
      txId: object.tx_id
    };
  },
  toAmino(message: EventOutgoingTxId): EventOutgoingTxIdAmino {
    const obj: any = {};
    obj.message = message.message;
    obj.tx_id = message.txId;
    return obj;
  },
  fromAminoMsg(object: EventOutgoingTxIdAminoMsg): EventOutgoingTxId {
    return EventOutgoingTxId.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingTxIdProtoMsg): EventOutgoingTxId {
    return EventOutgoingTxId.decode(message.value);
  },
  toProto(message: EventOutgoingTxId): Uint8Array {
    return EventOutgoingTxId.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingTxId): EventOutgoingTxIdProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventOutgoingTxId",
      value: EventOutgoingTxId.encode(message).finish()
    };
  }
};
function createBaseEventSendToEthFeeCollected(): EventSendToEthFeeCollected {
  return {
    sender: "",
    sendAmount: "",
    feeAmount: ""
  };
}
export const EventSendToEthFeeCollected = {
  typeUrl: "/gravity.v1.EventSendToEthFeeCollected",
  encode(message: EventSendToEthFeeCollected, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sendAmount !== "") {
      writer.uint32(18).string(message.sendAmount);
    }
    if (message.feeAmount !== "") {
      writer.uint32(26).string(message.feeAmount);
    }
    return writer;
  },
  fromJSON(object: any): EventSendToEthFeeCollected {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sendAmount: isSet(object.sendAmount) ? String(object.sendAmount) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : ""
    };
  },
  fromPartial(object: Partial<EventSendToEthFeeCollected>): EventSendToEthFeeCollected {
    const message = createBaseEventSendToEthFeeCollected();
    message.sender = object.sender ?? "";
    message.sendAmount = object.sendAmount ?? "";
    message.feeAmount = object.feeAmount ?? "";
    return message;
  },
  fromAmino(object: EventSendToEthFeeCollectedAmino): EventSendToEthFeeCollected {
    return {
      sender: object.sender,
      sendAmount: object.send_amount,
      feeAmount: object.fee_amount
    };
  },
  toAmino(message: EventSendToEthFeeCollected): EventSendToEthFeeCollectedAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.send_amount = message.sendAmount;
    obj.fee_amount = message.feeAmount;
    return obj;
  },
  fromAminoMsg(object: EventSendToEthFeeCollectedAminoMsg): EventSendToEthFeeCollected {
    return EventSendToEthFeeCollected.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendToEthFeeCollectedProtoMsg): EventSendToEthFeeCollected {
    return EventSendToEthFeeCollected.decode(message.value);
  },
  toProto(message: EventSendToEthFeeCollected): Uint8Array {
    return EventSendToEthFeeCollected.encode(message).finish();
  },
  toProtoMsg(message: EventSendToEthFeeCollected): EventSendToEthFeeCollectedProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventSendToEthFeeCollected",
      value: EventSendToEthFeeCollected.encode(message).finish()
    };
  }
};
export const EthereumSigned_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const EthereumSigned_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const EthereumSigned_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};