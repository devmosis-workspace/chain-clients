import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorSDKType } from "./types";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  nonce: Long;
  orchestrator: string;
  ethAddress: string;
  signature: string;
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
  nonce: Long;
  orchestrator: string;
  eth_address: string;
  signature: string;
}
export interface MsgValsetConfirmResponse {}
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
  amount?: Coin;
  bridgeFee?: Coin;
  chainFee?: Coin;
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
  amount?: CoinSDKType;
  bridge_fee?: CoinSDKType;
  chain_fee?: CoinSDKType;
}
export interface MsgSendToEthResponse {}
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
  nonce: Long;
  tokenContract: string;
  ethSigner: string;
  orchestrator: string;
  signature: string;
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
  nonce: Long;
  token_contract: string;
  eth_signer: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmBatchResponse {}
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
  invalidationNonce: Long;
  ethSigner: string;
  orchestrator: string;
  signature: string;
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
  invalidation_nonce: Long;
  eth_signer: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmLogicCallResponse {}
export interface MsgConfirmLogicCallResponseSDKType {}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaim {
  eventNonce: Long;
  ethBlockHeight: Long;
  tokenContract: string;
  amount: string;
  ethereumSender: string;
  cosmosReceiver: string;
  orchestrator: string;
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaimSDKType {
  event_nonce: Long;
  eth_block_height: Long;
  token_contract: string;
  amount: string;
  ethereum_sender: string;
  cosmos_receiver: string;
  orchestrator: string;
}
export interface MsgSendToCosmosClaimResponse {}
export interface MsgSendToCosmosClaimResponseSDKType {}
/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwards {
  /** How many queued forwards to clear, be careful about gas limits */
  forwardsToClear: Long;
  /** This message's sender */
  executor: string;
}
/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwardsSDKType {
  forwards_to_clear: Long;
  executor: string;
}
export interface MsgExecuteIbcAutoForwardsResponse {}
export interface MsgExecuteIbcAutoForwardsResponseSDKType {}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaim {
  eventNonce: Long;
  ethBlockHeight: Long;
  batchNonce: Long;
  tokenContract: string;
  orchestrator: string;
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaimSDKType {
  event_nonce: Long;
  eth_block_height: Long;
  batch_nonce: Long;
  token_contract: string;
  orchestrator: string;
}
export interface MsgBatchSendToEthClaimResponse {}
export interface MsgBatchSendToEthClaimResponseSDKType {}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
  eventNonce: Long;
  ethBlockHeight: Long;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: Long;
  orchestrator: string;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimSDKType {
  event_nonce: Long;
  eth_block_height: Long;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: Long;
  orchestrator: string;
}
export interface MsgERC20DeployedClaimResponse {}
export interface MsgERC20DeployedClaimResponseSDKType {}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
  eventNonce: Long;
  ethBlockHeight: Long;
  invalidationId: Uint8Array;
  invalidationNonce: Long;
  orchestrator: string;
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaimSDKType {
  event_nonce: Long;
  eth_block_height: Long;
  invalidation_id: Uint8Array;
  invalidation_nonce: Long;
  orchestrator: string;
}
export interface MsgLogicCallExecutedClaimResponse {}
export interface MsgLogicCallExecutedClaimResponseSDKType {}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
  eventNonce: Long;
  valsetNonce: Long;
  ethBlockHeight: Long;
  members: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestrator: string;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimSDKType {
  event_nonce: Long;
  valset_nonce: Long;
  eth_block_height: Long;
  members: BridgeValidatorSDKType[];
  reward_amount: string;
  reward_token: string;
  orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {}
export interface MsgValsetUpdatedClaimResponseSDKType {}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
  transactionId: Long;
  sender: string;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthSDKType {
  transaction_id: Long;
  sender: string;
}
export interface MsgCancelSendToEthResponse {}
export interface MsgCancelSendToEthResponseSDKType {}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
  subject?: Any;
  signature: string;
  sender: string;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceSDKType {
  subject?: AnySDKType;
  signature: string;
  sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {}
export interface EventSetOperatorAddress {
  message: string;
  address: string;
}
export interface EventSetOperatorAddressSDKType {
  message: string;
  address: string;
}
export interface EventValsetConfirmKey {
  message: string;
  key: string;
}
export interface EventValsetConfirmKeySDKType {
  message: string;
  key: string;
}
export interface EventBatchCreated {
  message: string;
  batchNonce: string;
}
export interface EventBatchCreatedSDKType {
  message: string;
  batch_nonce: string;
}
export interface EventBatchConfirmKey {
  message: string;
  batchConfirmKey: string;
}
export interface EventBatchConfirmKeySDKType {
  message: string;
  batch_confirm_key: string;
}
export interface EventBatchSendToEthClaim {
  nonce: string;
}
export interface EventBatchSendToEthClaimSDKType {
  nonce: string;
}
export interface EventClaim {
  message: string;
  claimHash: string;
  attestationId: string;
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
export interface EventBadSignatureEvidenceSDKType {
  message: string;
  bad_eth_signature: string;
  bad_eth_signature_subject: string;
}
export interface EventERC20DeployedClaim {
  token: string;
  nonce: string;
}
export interface EventERC20DeployedClaimSDKType {
  token: string;
  nonce: string;
}
export interface EventValsetUpdatedClaim {
  nonce: string;
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
export interface EventOutgoingLogicCallCanceledSDKType {
  logic_call_invalidation_id: string;
  logic_call_invalidation_nonce: string;
}
export interface EventSignatureSlashing {
  type: string;
  address: string;
}
export interface EventSignatureSlashingSDKType {
  type: string;
  address: string;
}
export interface EventOutgoingTxId {
  message: string;
  txId: string;
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
  encode(message: MsgSetOrchestratorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgSetOrchestratorAddressResponse(): MsgSetOrchestratorAddressResponse {
  return {};
}
export const MsgSetOrchestratorAddressResponse = {
  encode(_: MsgSetOrchestratorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetOrchestratorAddressResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse {
    const message = createBaseMsgSetOrchestratorAddressResponse();
    return message;
  }
};
function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return {
    nonce: Long.UZERO,
    orchestrator: "",
    ethAddress: "",
    signature: ""
  };
}
export const MsgValsetConfirm = {
  encode(message: MsgValsetConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
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
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },
  fromPartial(object: Partial<MsgValsetConfirm>): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  }
};
function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}
export const MsgValsetConfirmResponse = {
  encode(_: MsgValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgValsetConfirmResponse {
    return {};
  },
  fromPartial(_: Partial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  }
};
function createBaseMsgSendToEth(): MsgSendToEth {
  return {
    sender: "",
    ethDest: "",
    amount: undefined,
    bridgeFee: undefined,
    chainFee: undefined
  };
}
export const MsgSendToEth = {
  encode(message: MsgSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}
export const MsgSendToEthResponse = {
  encode(_: MsgSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSendToEthResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendToEthResponse>): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  }
};
function createBaseMsgRequestBatch(): MsgRequestBatch {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgRequestBatch = {
  encode(message: MsgRequestBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}
export const MsgRequestBatchResponse = {
  encode(_: MsgRequestBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRequestBatchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRequestBatchResponse>): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  }
};
function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: Long.UZERO,
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmBatch = {
  encode(message: MsgConfirmBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
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
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },
  fromPartial(object: Partial<MsgConfirmBatch>): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  }
};
function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}
export const MsgConfirmBatchResponse = {
  encode(_: MsgConfirmBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgConfirmBatchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  }
};
function createBaseMsgConfirmLogicCall(): MsgConfirmLogicCall {
  return {
    invalidationId: "",
    invalidationNonce: Long.UZERO,
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmLogicCall = {
  encode(message: MsgConfirmLogicCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invalidationId !== "") {
      writer.uint32(10).string(message.invalidationId);
    }
    if (!message.invalidationNonce.isZero()) {
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
      invalidationNonce: isSet(object.invalidationNonce) ? Long.fromValue(object.invalidationNonce) : Long.UZERO,
      ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },
  fromPartial(object: Partial<MsgConfirmLogicCall>): MsgConfirmLogicCall {
    const message = createBaseMsgConfirmLogicCall();
    message.invalidationId = object.invalidationId ?? "";
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  }
};
function createBaseMsgConfirmLogicCallResponse(): MsgConfirmLogicCallResponse {
  return {};
}
export const MsgConfirmLogicCallResponse = {
  encode(_: MsgConfirmLogicCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgConfirmLogicCallResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse {
    const message = createBaseMsgConfirmLogicCallResponse();
    return message;
  }
};
function createBaseMsgSendToCosmosClaim(): MsgSendToCosmosClaim {
  return {
    eventNonce: Long.UZERO,
    ethBlockHeight: Long.UZERO,
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: ""
  };
}
export const MsgSendToCosmosClaim = {
  encode(message: MsgSendToCosmosClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.ethBlockHeight.isZero()) {
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
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      ethBlockHeight: isSet(object.ethBlockHeight) ? Long.fromValue(object.ethBlockHeight) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : "",
      cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgSendToCosmosClaim>): MsgSendToCosmosClaim {
    const message = createBaseMsgSendToCosmosClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? Long.fromValue(object.ethBlockHeight) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }
};
function createBaseMsgSendToCosmosClaimResponse(): MsgSendToCosmosClaimResponse {
  return {};
}
export const MsgSendToCosmosClaimResponse = {
  encode(_: MsgSendToCosmosClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSendToCosmosClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendToCosmosClaimResponse>): MsgSendToCosmosClaimResponse {
    const message = createBaseMsgSendToCosmosClaimResponse();
    return message;
  }
};
function createBaseMsgExecuteIbcAutoForwards(): MsgExecuteIbcAutoForwards {
  return {
    forwardsToClear: Long.UZERO,
    executor: ""
  };
}
export const MsgExecuteIbcAutoForwards = {
  encode(message: MsgExecuteIbcAutoForwards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.forwardsToClear.isZero()) {
      writer.uint32(8).uint64(message.forwardsToClear);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteIbcAutoForwards {
    return {
      forwardsToClear: isSet(object.forwardsToClear) ? Long.fromValue(object.forwardsToClear) : Long.UZERO,
      executor: isSet(object.executor) ? String(object.executor) : ""
    };
  },
  fromPartial(object: Partial<MsgExecuteIbcAutoForwards>): MsgExecuteIbcAutoForwards {
    const message = createBaseMsgExecuteIbcAutoForwards();
    message.forwardsToClear = object.forwardsToClear !== undefined && object.forwardsToClear !== null ? Long.fromValue(object.forwardsToClear) : Long.UZERO;
    message.executor = object.executor ?? "";
    return message;
  }
};
function createBaseMsgExecuteIbcAutoForwardsResponse(): MsgExecuteIbcAutoForwardsResponse {
  return {};
}
export const MsgExecuteIbcAutoForwardsResponse = {
  encode(_: MsgExecuteIbcAutoForwardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgExecuteIbcAutoForwardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgExecuteIbcAutoForwardsResponse>): MsgExecuteIbcAutoForwardsResponse {
    const message = createBaseMsgExecuteIbcAutoForwardsResponse();
    return message;
  }
};
function createBaseMsgBatchSendToEthClaim(): MsgBatchSendToEthClaim {
  return {
    eventNonce: Long.UZERO,
    ethBlockHeight: Long.UZERO,
    batchNonce: Long.UZERO,
    tokenContract: "",
    orchestrator: ""
  };
}
export const MsgBatchSendToEthClaim = {
  encode(message: MsgBatchSendToEthClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.ethBlockHeight.isZero()) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (!message.batchNonce.isZero()) {
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
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      ethBlockHeight: isSet(object.ethBlockHeight) ? Long.fromValue(object.ethBlockHeight) : Long.UZERO,
      batchNonce: isSet(object.batchNonce) ? Long.fromValue(object.batchNonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgBatchSendToEthClaim>): MsgBatchSendToEthClaim {
    const message = createBaseMsgBatchSendToEthClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? Long.fromValue(object.ethBlockHeight) : Long.UZERO;
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }
};
function createBaseMsgBatchSendToEthClaimResponse(): MsgBatchSendToEthClaimResponse {
  return {};
}
export const MsgBatchSendToEthClaimResponse = {
  encode(_: MsgBatchSendToEthClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBatchSendToEthClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBatchSendToEthClaimResponse>): MsgBatchSendToEthClaimResponse {
    const message = createBaseMsgBatchSendToEthClaimResponse();
    return message;
  }
};
function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
  return {
    eventNonce: Long.UZERO,
    ethBlockHeight: Long.UZERO,
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: Long.UZERO,
    orchestrator: ""
  };
}
export const MsgERC20DeployedClaim = {
  encode(message: MsgERC20DeployedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.ethBlockHeight.isZero()) {
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
    if (!message.decimals.isZero()) {
      writer.uint32(56).uint64(message.decimals);
    }
    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }
    return writer;
  },
  fromJSON(object: any): MsgERC20DeployedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      ethBlockHeight: isSet(object.ethBlockHeight) ? Long.fromValue(object.ethBlockHeight) : Long.UZERO,
      cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.UZERO,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? Long.fromValue(object.ethBlockHeight) : Long.UZERO;
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }
};
function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}
export const MsgERC20DeployedClaimResponse = {
  encode(_: MsgERC20DeployedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgERC20DeployedClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  }
};
function createBaseMsgLogicCallExecutedClaim(): MsgLogicCallExecutedClaim {
  return {
    eventNonce: Long.UZERO,
    ethBlockHeight: Long.UZERO,
    invalidationId: new Uint8Array(),
    invalidationNonce: Long.UZERO,
    orchestrator: ""
  };
}
export const MsgLogicCallExecutedClaim = {
  encode(message: MsgLogicCallExecutedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.ethBlockHeight.isZero()) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.invalidationId.length !== 0) {
      writer.uint32(26).bytes(message.invalidationId);
    }
    if (!message.invalidationNonce.isZero()) {
      writer.uint32(32).uint64(message.invalidationNonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },
  fromJSON(object: any): MsgLogicCallExecutedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      ethBlockHeight: isSet(object.ethBlockHeight) ? Long.fromValue(object.ethBlockHeight) : Long.UZERO,
      invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce) ? Long.fromValue(object.invalidationNonce) : Long.UZERO,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim {
    const message = createBaseMsgLogicCallExecutedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? Long.fromValue(object.ethBlockHeight) : Long.UZERO;
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }
};
function createBaseMsgLogicCallExecutedClaimResponse(): MsgLogicCallExecutedClaimResponse {
  return {};
}
export const MsgLogicCallExecutedClaimResponse = {
  encode(_: MsgLogicCallExecutedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgLogicCallExecutedClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse {
    const message = createBaseMsgLogicCallExecutedClaimResponse();
    return message;
  }
};
function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: Long.UZERO,
    valsetNonce: Long.UZERO,
    ethBlockHeight: Long.UZERO,
    members: [],
    rewardAmount: "",
    rewardToken: "",
    orchestrator: ""
  };
}
export const MsgValsetUpdatedClaim = {
  encode(message: MsgValsetUpdatedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.valsetNonce.isZero()) {
      writer.uint32(16).uint64(message.valsetNonce);
    }
    if (!message.ethBlockHeight.isZero()) {
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
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      valsetNonce: isSet(object.valsetNonce) ? Long.fromValue(object.valsetNonce) : Long.UZERO,
      ethBlockHeight: isSet(object.ethBlockHeight) ? Long.fromValue(object.ethBlockHeight) : Long.UZERO,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromJSON(e)) : [],
      rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
      rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : ""
    };
  },
  fromPartial(object: Partial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? Long.fromValue(object.valsetNonce) : Long.UZERO;
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? Long.fromValue(object.ethBlockHeight) : Long.UZERO;
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }
};
function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}
export const MsgValsetUpdatedClaimResponse = {
  encode(_: MsgValsetUpdatedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgValsetUpdatedClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  }
};
function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return {
    transactionId: Long.UZERO,
    sender: ""
  };
}
export const MsgCancelSendToEth = {
  encode(message: MsgCancelSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transactionId.isZero()) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelSendToEth {
    return {
      transactionId: isSet(object.transactionId) ? Long.fromValue(object.transactionId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelSendToEth>): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? Long.fromValue(object.transactionId) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}
export const MsgCancelSendToEthResponse = {
  encode(_: MsgCancelSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelSendToEthResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  }
};
function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return {
    subject: undefined,
    signature: "",
    sender: ""
  };
}
export const MsgSubmitBadSignatureEvidence = {
  encode(message: MsgSubmitBadSignatureEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
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
  }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
  encode(_: MsgSubmitBadSignatureEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSubmitBadSignatureEvidenceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  }
};
function createBaseEventSetOperatorAddress(): EventSetOperatorAddress {
  return {
    message: "",
    address: ""
  };
}
export const EventSetOperatorAddress = {
  encode(message: EventSetOperatorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventValsetConfirmKey(): EventValsetConfirmKey {
  return {
    message: "",
    key: ""
  };
}
export const EventValsetConfirmKey = {
  encode(message: EventValsetConfirmKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventBatchCreated(): EventBatchCreated {
  return {
    message: "",
    batchNonce: ""
  };
}
export const EventBatchCreated = {
  encode(message: EventBatchCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventBatchConfirmKey(): EventBatchConfirmKey {
  return {
    message: "",
    batchConfirmKey: ""
  };
}
export const EventBatchConfirmKey = {
  encode(message: EventBatchConfirmKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventBatchSendToEthClaim(): EventBatchSendToEthClaim {
  return {
    nonce: ""
  };
}
export const EventBatchSendToEthClaim = {
  encode(message: EventBatchSendToEthClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventBadSignatureEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventERC20DeployedClaim(): EventERC20DeployedClaim {
  return {
    token: "",
    nonce: ""
  };
}
export const EventERC20DeployedClaim = {
  encode(message: EventERC20DeployedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventValsetUpdatedClaim(): EventValsetUpdatedClaim {
  return {
    nonce: ""
  };
}
export const EventValsetUpdatedClaim = {
  encode(message: EventValsetUpdatedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventMultisigUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventOutgoingLogicCallCanceled(): EventOutgoingLogicCallCanceled {
  return {
    logicCallInvalidationId: "",
    logicCallInvalidationNonce: ""
  };
}
export const EventOutgoingLogicCallCanceled = {
  encode(message: EventOutgoingLogicCallCanceled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventSignatureSlashing(): EventSignatureSlashing {
  return {
    type: "",
    address: ""
  };
}
export const EventSignatureSlashing = {
  encode(message: EventSignatureSlashing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventOutgoingTxId(): EventOutgoingTxId {
  return {
    message: "",
    txId: ""
  };
}
export const EventOutgoingTxId = {
  encode(message: EventOutgoingTxId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventSendToEthFeeCollected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};