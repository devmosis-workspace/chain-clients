import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorSDKType } from "./types";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { Long } from "../../helpers";
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
export interface MsgSetOrchestratorAddressResponse {
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
export interface MsgValsetConfirmResponse {
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
export interface MsgSendToEthResponse {
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
export interface MsgConfirmBatchResponse {
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
export interface MsgConfirmLogicCallResponse {
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
export interface MsgSendToCosmosClaimResponse {
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
export interface MsgExecuteIbcAutoForwardsResponse {
}
export interface MsgExecuteIbcAutoForwardsResponseSDKType {
}
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
export interface MsgBatchSendToEthClaimResponse {
}
export interface MsgBatchSendToEthClaimResponseSDKType {
}
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
export interface MsgERC20DeployedClaimResponse {
}
export interface MsgERC20DeployedClaimResponseSDKType {
}
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
export interface MsgLogicCallExecutedClaimResponse {
}
export interface MsgLogicCallExecutedClaimResponseSDKType {
}
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
export interface MsgValsetUpdatedClaimResponse {
}
export interface MsgValsetUpdatedClaimResponseSDKType {
}
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
export interface MsgCancelSendToEthResponse {
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
export interface MsgSubmitBadSignatureEvidenceResponse {
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {
}
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
export declare const MsgSetOrchestratorAddress: {
    encode(message: MsgSetOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetOrchestratorAddress;
    fromPartial(object: Partial<MsgSetOrchestratorAddress>): MsgSetOrchestratorAddress;
};
export declare const MsgSetOrchestratorAddressResponse: {
    encode(_: MsgSetOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetOrchestratorAddressResponse;
    fromPartial(_: Partial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse;
};
export declare const MsgValsetConfirm: {
    encode(message: MsgValsetConfirm, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgValsetConfirm;
    fromPartial(object: Partial<MsgValsetConfirm>): MsgValsetConfirm;
};
export declare const MsgValsetConfirmResponse: {
    encode(_: MsgValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgValsetConfirmResponse;
    fromPartial(_: Partial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse;
};
export declare const MsgSendToEth: {
    encode(message: MsgSendToEth, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSendToEth;
    fromPartial(object: Partial<MsgSendToEth>): MsgSendToEth;
};
export declare const MsgSendToEthResponse: {
    encode(_: MsgSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSendToEthResponse;
    fromPartial(_: Partial<MsgSendToEthResponse>): MsgSendToEthResponse;
};
export declare const MsgRequestBatch: {
    encode(message: MsgRequestBatch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRequestBatch;
    fromPartial(object: Partial<MsgRequestBatch>): MsgRequestBatch;
};
export declare const MsgRequestBatchResponse: {
    encode(_: MsgRequestBatchResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRequestBatchResponse;
    fromPartial(_: Partial<MsgRequestBatchResponse>): MsgRequestBatchResponse;
};
export declare const MsgConfirmBatch: {
    encode(message: MsgConfirmBatch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConfirmBatch;
    fromPartial(object: Partial<MsgConfirmBatch>): MsgConfirmBatch;
};
export declare const MsgConfirmBatchResponse: {
    encode(_: MsgConfirmBatchResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConfirmBatchResponse;
    fromPartial(_: Partial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse;
};
export declare const MsgConfirmLogicCall: {
    encode(message: MsgConfirmLogicCall, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConfirmLogicCall;
    fromPartial(object: Partial<MsgConfirmLogicCall>): MsgConfirmLogicCall;
};
export declare const MsgConfirmLogicCallResponse: {
    encode(_: MsgConfirmLogicCallResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConfirmLogicCallResponse;
    fromPartial(_: Partial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse;
};
export declare const MsgSendToCosmosClaim: {
    encode(message: MsgSendToCosmosClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSendToCosmosClaim;
    fromPartial(object: Partial<MsgSendToCosmosClaim>): MsgSendToCosmosClaim;
};
export declare const MsgSendToCosmosClaimResponse: {
    encode(_: MsgSendToCosmosClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSendToCosmosClaimResponse;
    fromPartial(_: Partial<MsgSendToCosmosClaimResponse>): MsgSendToCosmosClaimResponse;
};
export declare const MsgExecuteIbcAutoForwards: {
    encode(message: MsgExecuteIbcAutoForwards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExecuteIbcAutoForwards;
    fromPartial(object: Partial<MsgExecuteIbcAutoForwards>): MsgExecuteIbcAutoForwards;
};
export declare const MsgExecuteIbcAutoForwardsResponse: {
    encode(_: MsgExecuteIbcAutoForwardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgExecuteIbcAutoForwardsResponse;
    fromPartial(_: Partial<MsgExecuteIbcAutoForwardsResponse>): MsgExecuteIbcAutoForwardsResponse;
};
export declare const MsgBatchSendToEthClaim: {
    encode(message: MsgBatchSendToEthClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBatchSendToEthClaim;
    fromPartial(object: Partial<MsgBatchSendToEthClaim>): MsgBatchSendToEthClaim;
};
export declare const MsgBatchSendToEthClaimResponse: {
    encode(_: MsgBatchSendToEthClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBatchSendToEthClaimResponse;
    fromPartial(_: Partial<MsgBatchSendToEthClaimResponse>): MsgBatchSendToEthClaimResponse;
};
export declare const MsgERC20DeployedClaim: {
    encode(message: MsgERC20DeployedClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgERC20DeployedClaim;
    fromPartial(object: Partial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim;
};
export declare const MsgERC20DeployedClaimResponse: {
    encode(_: MsgERC20DeployedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgERC20DeployedClaimResponse;
    fromPartial(_: Partial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse;
};
export declare const MsgLogicCallExecutedClaim: {
    encode(message: MsgLogicCallExecutedClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLogicCallExecutedClaim;
    fromPartial(object: Partial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim;
};
export declare const MsgLogicCallExecutedClaimResponse: {
    encode(_: MsgLogicCallExecutedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgLogicCallExecutedClaimResponse;
    fromPartial(_: Partial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse;
};
export declare const MsgValsetUpdatedClaim: {
    encode(message: MsgValsetUpdatedClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgValsetUpdatedClaim;
    fromPartial(object: Partial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim;
};
export declare const MsgValsetUpdatedClaimResponse: {
    encode(_: MsgValsetUpdatedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgValsetUpdatedClaimResponse;
    fromPartial(_: Partial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse;
};
export declare const MsgCancelSendToEth: {
    encode(message: MsgCancelSendToEth, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelSendToEth;
    fromPartial(object: Partial<MsgCancelSendToEth>): MsgCancelSendToEth;
};
export declare const MsgCancelSendToEthResponse: {
    encode(_: MsgCancelSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelSendToEthResponse;
    fromPartial(_: Partial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse;
};
export declare const MsgSubmitBadSignatureEvidence: {
    encode(message: MsgSubmitBadSignatureEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitBadSignatureEvidence;
    fromPartial(object: Partial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence;
};
export declare const MsgSubmitBadSignatureEvidenceResponse: {
    encode(_: MsgSubmitBadSignatureEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSubmitBadSignatureEvidenceResponse;
    fromPartial(_: Partial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse;
};
export declare const EventSetOperatorAddress: {
    encode(message: EventSetOperatorAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSetOperatorAddress;
    fromPartial(object: Partial<EventSetOperatorAddress>): EventSetOperatorAddress;
};
export declare const EventValsetConfirmKey: {
    encode(message: EventValsetConfirmKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventValsetConfirmKey;
    fromPartial(object: Partial<EventValsetConfirmKey>): EventValsetConfirmKey;
};
export declare const EventBatchCreated: {
    encode(message: EventBatchCreated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBatchCreated;
    fromPartial(object: Partial<EventBatchCreated>): EventBatchCreated;
};
export declare const EventBatchConfirmKey: {
    encode(message: EventBatchConfirmKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBatchConfirmKey;
    fromPartial(object: Partial<EventBatchConfirmKey>): EventBatchConfirmKey;
};
export declare const EventBatchSendToEthClaim: {
    encode(message: EventBatchSendToEthClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBatchSendToEthClaim;
    fromPartial(object: Partial<EventBatchSendToEthClaim>): EventBatchSendToEthClaim;
};
export declare const EventClaim: {
    encode(message: EventClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClaim;
    fromPartial(object: Partial<EventClaim>): EventClaim;
};
export declare const EventBadSignatureEvidence: {
    encode(message: EventBadSignatureEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBadSignatureEvidence;
    fromPartial(object: Partial<EventBadSignatureEvidence>): EventBadSignatureEvidence;
};
export declare const EventERC20DeployedClaim: {
    encode(message: EventERC20DeployedClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventERC20DeployedClaim;
    fromPartial(object: Partial<EventERC20DeployedClaim>): EventERC20DeployedClaim;
};
export declare const EventValsetUpdatedClaim: {
    encode(message: EventValsetUpdatedClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventValsetUpdatedClaim;
    fromPartial(object: Partial<EventValsetUpdatedClaim>): EventValsetUpdatedClaim;
};
export declare const EventMultisigUpdateRequest: {
    encode(message: EventMultisigUpdateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMultisigUpdateRequest;
    fromPartial(object: Partial<EventMultisigUpdateRequest>): EventMultisigUpdateRequest;
};
export declare const EventOutgoingLogicCallCanceled: {
    encode(message: EventOutgoingLogicCallCanceled, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventOutgoingLogicCallCanceled;
    fromPartial(object: Partial<EventOutgoingLogicCallCanceled>): EventOutgoingLogicCallCanceled;
};
export declare const EventSignatureSlashing: {
    encode(message: EventSignatureSlashing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSignatureSlashing;
    fromPartial(object: Partial<EventSignatureSlashing>): EventSignatureSlashing;
};
export declare const EventOutgoingTxId: {
    encode(message: EventOutgoingTxId, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventOutgoingTxId;
    fromPartial(object: Partial<EventOutgoingTxId>): EventOutgoingTxId;
};
export declare const EventSendToEthFeeCollected: {
    encode(message: EventSendToEthFeeCollected, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSendToEthFeeCollected;
    fromPartial(object: Partial<EventSendToEthFeeCollected>): EventSendToEthFeeCollected;
};
