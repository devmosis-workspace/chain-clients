import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorAmino, BridgeValidatorSDKType } from "./types";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/**
 * MsgSetOrchestratorAddresses
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
 * This is a hex encoded 0x Ethereum public key that will be used by this
 * validator on Ethereum
 */
export interface MsgSetOrchestratorAddresses {
    sender: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgSetOrchestratorAddressesProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses";
    value: Uint8Array;
}
/**
 * MsgSetOrchestratorAddresses
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
 * This is a hex encoded 0x Ethereum public key that will be used by this
 * validator on Ethereum
 */
export interface MsgSetOrchestratorAddressesAmino {
    sender: string;
    orchestrator: string;
    eth_address: string;
}
export interface MsgSetOrchestratorAddressesAminoMsg {
    type: "/injective.peggy.v1.MsgSetOrchestratorAddresses";
    value: MsgSetOrchestratorAddressesAmino;
}
/**
 * MsgSetOrchestratorAddresses
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
 * This is a hex encoded 0x Ethereum public key that will be used by this
 * validator on Ethereum
 */
export interface MsgSetOrchestratorAddressesSDKType {
    sender: string;
    orchestrator: string;
    eth_address: string;
}
export interface MsgSetOrchestratorAddressesResponse {
}
export interface MsgSetOrchestratorAddressesResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
    value: Uint8Array;
}
export interface MsgSetOrchestratorAddressesResponseAmino {
}
export interface MsgSetOrchestratorAddressesResponseAminoMsg {
    type: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
    value: MsgSetOrchestratorAddressesResponseAmino;
}
export interface MsgSetOrchestratorAddressesResponseSDKType {
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
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
    typeUrl: "/injective.peggy.v1.MsgValsetConfirm";
    value: Uint8Array;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
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
    type: "/injective.peggy.v1.MsgValsetConfirm";
    value: MsgValsetConfirmAmino;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
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
    typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse";
    value: Uint8Array;
}
export interface MsgValsetConfirmResponseAmino {
}
export interface MsgValsetConfirmResponseAminoMsg {
    type: "/injective.peggy.v1.MsgValsetConfirmResponse";
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
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
    sender: string;
    ethDest: string;
    amount: Coin;
    bridgeFee: Coin;
}
export interface MsgSendToEthProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgSendToEth";
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
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthAmino {
    sender: string;
    eth_dest: string;
    amount?: CoinAmino;
    bridge_fee?: CoinAmino;
}
export interface MsgSendToEthAminoMsg {
    type: "/injective.peggy.v1.MsgSendToEth";
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
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthSDKType {
    sender: string;
    eth_dest: string;
    amount: CoinSDKType;
    bridge_fee: CoinSDKType;
}
export interface MsgSendToEthResponse {
}
export interface MsgSendToEthResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgSendToEthResponse";
    value: Uint8Array;
}
export interface MsgSendToEthResponseAmino {
}
export interface MsgSendToEthResponseAminoMsg {
    type: "/injective.peggy.v1.MsgSendToEthResponse";
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
    orchestrator: string;
    denom: string;
}
export interface MsgRequestBatchProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgRequestBatch";
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
    orchestrator: string;
    denom: string;
}
export interface MsgRequestBatchAminoMsg {
    type: "/injective.peggy.v1.MsgRequestBatch";
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
    orchestrator: string;
    denom: string;
}
export interface MsgRequestBatchResponse {
}
export interface MsgRequestBatchResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse";
    value: Uint8Array;
}
export interface MsgRequestBatchResponseAmino {
}
export interface MsgRequestBatchResponseAminoMsg {
    type: "/injective.peggy.v1.MsgRequestBatchResponse";
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
    typeUrl: "/injective.peggy.v1.MsgConfirmBatch";
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
    type: "/injective.peggy.v1.MsgConfirmBatch";
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
    typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse";
    value: Uint8Array;
}
export interface MsgConfirmBatchResponseAmino {
}
export interface MsgConfirmBatchResponseAminoMsg {
    type: "/injective.peggy.v1.MsgConfirmBatchResponse";
    value: MsgConfirmBatchResponseAmino;
}
export interface MsgConfirmBatchResponseSDKType {
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaim {
    eventNonce: bigint;
    blockHeight: bigint;
    tokenContract: string;
    amount: string;
    ethereumSender: string;
    cosmosReceiver: string;
    orchestrator: string;
    data: string;
}
export interface MsgDepositClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgDepositClaim";
    value: Uint8Array;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaimAmino {
    event_nonce: string;
    block_height: string;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
    data: string;
}
export interface MsgDepositClaimAminoMsg {
    type: "/injective.peggy.v1.MsgDepositClaim";
    value: MsgDepositClaimAmino;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaimSDKType {
    event_nonce: bigint;
    block_height: bigint;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
    data: string;
}
export interface MsgDepositClaimResponse {
}
export interface MsgDepositClaimResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse";
    value: Uint8Array;
}
export interface MsgDepositClaimResponseAmino {
}
export interface MsgDepositClaimResponseAminoMsg {
    type: "/injective.peggy.v1.MsgDepositClaimResponse";
    value: MsgDepositClaimResponseAmino;
}
export interface MsgDepositClaimResponseSDKType {
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaim {
    eventNonce: bigint;
    blockHeight: bigint;
    batchNonce: bigint;
    tokenContract: string;
    orchestrator: string;
}
export interface MsgWithdrawClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgWithdrawClaim";
    value: Uint8Array;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaimAmino {
    event_nonce: string;
    block_height: string;
    batch_nonce: string;
    token_contract: string;
    orchestrator: string;
}
export interface MsgWithdrawClaimAminoMsg {
    type: "/injective.peggy.v1.MsgWithdrawClaim";
    value: MsgWithdrawClaimAmino;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaimSDKType {
    event_nonce: bigint;
    block_height: bigint;
    batch_nonce: bigint;
    token_contract: string;
    orchestrator: string;
}
export interface MsgWithdrawClaimResponse {
}
export interface MsgWithdrawClaimResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse";
    value: Uint8Array;
}
export interface MsgWithdrawClaimResponseAmino {
}
export interface MsgWithdrawClaimResponseAminoMsg {
    type: "/injective.peggy.v1.MsgWithdrawClaimResponse";
    value: MsgWithdrawClaimResponseAmino;
}
export interface MsgWithdrawClaimResponseSDKType {
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
    eventNonce: bigint;
    blockHeight: bigint;
    cosmosDenom: string;
    tokenContract: string;
    name: string;
    symbol: string;
    decimals: bigint;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim";
    value: Uint8Array;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimAmino {
    event_nonce: string;
    block_height: string;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: string;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimAminoMsg {
    type: "/injective.peggy.v1.MsgERC20DeployedClaim";
    value: MsgERC20DeployedClaimAmino;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimSDKType {
    event_nonce: bigint;
    block_height: bigint;
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
    typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse";
    value: Uint8Array;
}
export interface MsgERC20DeployedClaimResponseAmino {
}
export interface MsgERC20DeployedClaimResponseAminoMsg {
    type: "/injective.peggy.v1.MsgERC20DeployedClaimResponse";
    value: MsgERC20DeployedClaimResponseAmino;
}
export interface MsgERC20DeployedClaimResponseSDKType {
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
    typeUrl: "/injective.peggy.v1.MsgCancelSendToEth";
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
    type: "/injective.peggy.v1.MsgCancelSendToEth";
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
    typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse";
    value: Uint8Array;
}
export interface MsgCancelSendToEthResponseAmino {
}
export interface MsgCancelSendToEthResponseAminoMsg {
    type: "/injective.peggy.v1.MsgCancelSendToEthResponse";
    value: MsgCancelSendToEthResponseAmino;
}
export interface MsgCancelSendToEthResponseSDKType {
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
    subject: Any;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence";
    value: Uint8Array;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceAmino {
    subject?: AnyAmino;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceAminoMsg {
    type: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence";
    value: MsgSubmitBadSignatureEvidenceAmino;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceSDKType {
    subject: AnySDKType;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {
}
export interface MsgSubmitBadSignatureEvidenceResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
    value: Uint8Array;
}
export interface MsgSubmitBadSignatureEvidenceResponseAmino {
}
export interface MsgSubmitBadSignatureEvidenceResponseAminoMsg {
    type: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
    value: MsgSubmitBadSignatureEvidenceResponseAmino;
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
    eventNonce: bigint;
    valsetNonce: bigint;
    blockHeight: bigint;
    members: BridgeValidator[];
    rewardAmount: string;
    rewardToken: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim";
    value: Uint8Array;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimAmino {
    event_nonce: string;
    valset_nonce: string;
    block_height: string;
    members: BridgeValidatorAmino[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimAminoMsg {
    type: "/injective.peggy.v1.MsgValsetUpdatedClaim";
    value: MsgValsetUpdatedClaimAmino;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimSDKType {
    event_nonce: bigint;
    valset_nonce: bigint;
    block_height: bigint;
    members: BridgeValidatorSDKType[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {
}
export interface MsgValsetUpdatedClaimResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse";
    value: Uint8Array;
}
export interface MsgValsetUpdatedClaimResponseAmino {
}
export interface MsgValsetUpdatedClaimResponseAminoMsg {
    type: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse";
    value: MsgValsetUpdatedClaimResponseAmino;
}
export interface MsgValsetUpdatedClaimResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the peggy parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the peggy parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/injective.peggy.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/injective.peggy.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgSetOrchestratorAddresses: {
    typeUrl: string;
    encode(message: MsgSetOrchestratorAddresses, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetOrchestratorAddresses;
    fromPartial(object: Partial<MsgSetOrchestratorAddresses>): MsgSetOrchestratorAddresses;
    fromAmino(object: MsgSetOrchestratorAddressesAmino): MsgSetOrchestratorAddresses;
    toAmino(message: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddressesAmino;
    fromAminoMsg(object: MsgSetOrchestratorAddressesAminoMsg): MsgSetOrchestratorAddresses;
    fromProtoMsg(message: MsgSetOrchestratorAddressesProtoMsg): MsgSetOrchestratorAddresses;
    toProto(message: MsgSetOrchestratorAddresses): Uint8Array;
    toProtoMsg(message: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddressesProtoMsg;
};
export declare const MsgSetOrchestratorAddressesResponse: {
    typeUrl: string;
    encode(_: MsgSetOrchestratorAddressesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetOrchestratorAddressesResponse;
    fromPartial(_: Partial<MsgSetOrchestratorAddressesResponse>): MsgSetOrchestratorAddressesResponse;
    fromAmino(_: MsgSetOrchestratorAddressesResponseAmino): MsgSetOrchestratorAddressesResponse;
    toAmino(_: MsgSetOrchestratorAddressesResponse): MsgSetOrchestratorAddressesResponseAmino;
    fromAminoMsg(object: MsgSetOrchestratorAddressesResponseAminoMsg): MsgSetOrchestratorAddressesResponse;
    fromProtoMsg(message: MsgSetOrchestratorAddressesResponseProtoMsg): MsgSetOrchestratorAddressesResponse;
    toProto(message: MsgSetOrchestratorAddressesResponse): Uint8Array;
    toProtoMsg(message: MsgSetOrchestratorAddressesResponse): MsgSetOrchestratorAddressesResponseProtoMsg;
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
export declare const MsgDepositClaim: {
    typeUrl: string;
    encode(message: MsgDepositClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDepositClaim;
    fromPartial(object: Partial<MsgDepositClaim>): MsgDepositClaim;
    fromAmino(object: MsgDepositClaimAmino): MsgDepositClaim;
    toAmino(message: MsgDepositClaim): MsgDepositClaimAmino;
    fromAminoMsg(object: MsgDepositClaimAminoMsg): MsgDepositClaim;
    fromProtoMsg(message: MsgDepositClaimProtoMsg): MsgDepositClaim;
    toProto(message: MsgDepositClaim): Uint8Array;
    toProtoMsg(message: MsgDepositClaim): MsgDepositClaimProtoMsg;
};
export declare const MsgDepositClaimResponse: {
    typeUrl: string;
    encode(_: MsgDepositClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositClaimResponse;
    fromPartial(_: Partial<MsgDepositClaimResponse>): MsgDepositClaimResponse;
    fromAmino(_: MsgDepositClaimResponseAmino): MsgDepositClaimResponse;
    toAmino(_: MsgDepositClaimResponse): MsgDepositClaimResponseAmino;
    fromAminoMsg(object: MsgDepositClaimResponseAminoMsg): MsgDepositClaimResponse;
    fromProtoMsg(message: MsgDepositClaimResponseProtoMsg): MsgDepositClaimResponse;
    toProto(message: MsgDepositClaimResponse): Uint8Array;
    toProtoMsg(message: MsgDepositClaimResponse): MsgDepositClaimResponseProtoMsg;
};
export declare const MsgWithdrawClaim: {
    typeUrl: string;
    encode(message: MsgWithdrawClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawClaim;
    fromPartial(object: Partial<MsgWithdrawClaim>): MsgWithdrawClaim;
    fromAmino(object: MsgWithdrawClaimAmino): MsgWithdrawClaim;
    toAmino(message: MsgWithdrawClaim): MsgWithdrawClaimAmino;
    fromAminoMsg(object: MsgWithdrawClaimAminoMsg): MsgWithdrawClaim;
    fromProtoMsg(message: MsgWithdrawClaimProtoMsg): MsgWithdrawClaim;
    toProto(message: MsgWithdrawClaim): Uint8Array;
    toProtoMsg(message: MsgWithdrawClaim): MsgWithdrawClaimProtoMsg;
};
export declare const MsgWithdrawClaimResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawClaimResponse;
    fromPartial(_: Partial<MsgWithdrawClaimResponse>): MsgWithdrawClaimResponse;
    fromAmino(_: MsgWithdrawClaimResponseAmino): MsgWithdrawClaimResponse;
    toAmino(_: MsgWithdrawClaimResponse): MsgWithdrawClaimResponseAmino;
    fromAminoMsg(object: MsgWithdrawClaimResponseAminoMsg): MsgWithdrawClaimResponse;
    fromProtoMsg(message: MsgWithdrawClaimResponseProtoMsg): MsgWithdrawClaimResponse;
    toProto(message: MsgWithdrawClaimResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawClaimResponse): MsgWithdrawClaimResponseProtoMsg;
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
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
