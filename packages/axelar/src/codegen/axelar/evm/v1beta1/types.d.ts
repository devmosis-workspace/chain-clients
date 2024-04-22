import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare enum Event_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_CONFIRMED = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const Event_StatusSDKType: typeof Event_Status;
export declare const Event_StatusAmino: typeof Event_Status;
export declare function event_StatusFromJSON(object: any): Event_Status;
export declare function event_StatusToJSON(object: Event_Status): string;
export declare enum Status {
    /**
     * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    STATUS_UNSPECIFIED = 0,
    STATUS_INITIALIZED = 1,
    STATUS_PENDING = 2,
    STATUS_CONFIRMED = 4,
    UNRECOGNIZED = -1
}
export declare const StatusSDKType: typeof Status;
export declare const StatusAmino: typeof Status;
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
export declare enum CommandType {
    COMMAND_TYPE_UNSPECIFIED = 0,
    COMMAND_TYPE_MINT_TOKEN = 1,
    COMMAND_TYPE_DEPLOY_TOKEN = 2,
    COMMAND_TYPE_BURN_TOKEN = 3,
    COMMAND_TYPE_TRANSFER_OPERATORSHIP = 4,
    COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT = 5,
    COMMAND_TYPE_APPROVE_CONTRACT_CALL = 6,
    UNRECOGNIZED = -1
}
export declare const CommandTypeSDKType: typeof CommandType;
export declare const CommandTypeAmino: typeof CommandType;
export declare function commandTypeFromJSON(object: any): CommandType;
export declare function commandTypeToJSON(object: CommandType): string;
export declare enum BatchedCommandsStatus {
    BATCHED_COMMANDS_STATUS_UNSPECIFIED = 0,
    BATCHED_COMMANDS_STATUS_SIGNING = 1,
    BATCHED_COMMANDS_STATUS_ABORTED = 2,
    BATCHED_COMMANDS_STATUS_SIGNED = 3,
    UNRECOGNIZED = -1
}
export declare const BatchedCommandsStatusSDKType: typeof BatchedCommandsStatus;
export declare const BatchedCommandsStatusAmino: typeof BatchedCommandsStatus;
export declare function batchedCommandsStatusFromJSON(object: any): BatchedCommandsStatus;
export declare function batchedCommandsStatusToJSON(object: BatchedCommandsStatus): string;
export declare enum SigType {
    SIG_TYPE_UNSPECIFIED = 0,
    SIG_TYPE_TX = 1,
    SIG_TYPE_COMMAND = 2,
    UNRECOGNIZED = -1
}
export declare const SigTypeSDKType: typeof SigType;
export declare const SigTypeAmino: typeof SigType;
export declare function sigTypeFromJSON(object: any): SigType;
export declare function sigTypeToJSON(object: SigType): string;
export declare enum DepositStatus {
    DEPOSIT_STATUS_UNSPECIFIED = 0,
    DEPOSIT_STATUS_PENDING = 1,
    DEPOSIT_STATUS_CONFIRMED = 2,
    DEPOSIT_STATUS_BURNED = 3,
    UNRECOGNIZED = -1
}
export declare const DepositStatusSDKType: typeof DepositStatus;
export declare const DepositStatusAmino: typeof DepositStatus;
export declare function depositStatusFromJSON(object: any): DepositStatus;
export declare function depositStatusToJSON(object: DepositStatus): string;
export interface VoteEvents {
    chain: string;
    events: Event[];
}
export interface VoteEventsProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.VoteEvents";
    value: Uint8Array;
}
export interface VoteEventsAmino {
    chain?: string;
    events?: EventAmino[];
}
export interface VoteEventsAminoMsg {
    type: "/axelar.evm.v1beta1.VoteEvents";
    value: VoteEventsAmino;
}
export interface VoteEventsSDKType {
    chain: string;
    events: EventSDKType[];
}
export interface Event {
    chain: string;
    txId: Uint8Array;
    index: bigint;
    status: Event_Status;
    tokenSent?: EventTokenSent;
    contractCall?: EventContractCall;
    contractCallWithToken?: EventContractCallWithToken;
    transfer?: EventTransfer;
    tokenDeployed?: EventTokenDeployed;
    /** @deprecated */
    multisigOwnershipTransferred?: EventMultisigOwnershipTransferred;
    multisigOperatorshipTransferred?: EventMultisigOperatorshipTransferred;
}
export interface EventProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Event";
    value: Uint8Array;
}
export interface EventAmino {
    chain?: string;
    tx_id?: string;
    index?: string;
    status?: Event_Status;
    token_sent?: EventTokenSentAmino;
    contract_call?: EventContractCallAmino;
    contract_call_with_token?: EventContractCallWithTokenAmino;
    transfer?: EventTransferAmino;
    token_deployed?: EventTokenDeployedAmino;
    /** @deprecated */
    multisig_ownership_transferred?: EventMultisigOwnershipTransferredAmino;
    multisig_operatorship_transferred?: EventMultisigOperatorshipTransferredAmino;
}
export interface EventAminoMsg {
    type: "/axelar.evm.v1beta1.Event";
    value: EventAmino;
}
export interface EventSDKType {
    chain: string;
    tx_id: Uint8Array;
    index: bigint;
    status: Event_Status;
    token_sent?: EventTokenSentSDKType;
    contract_call?: EventContractCallSDKType;
    contract_call_with_token?: EventContractCallWithTokenSDKType;
    transfer?: EventTransferSDKType;
    token_deployed?: EventTokenDeployedSDKType;
    /** @deprecated */
    multisig_ownership_transferred?: EventMultisigOwnershipTransferredSDKType;
    multisig_operatorship_transferred?: EventMultisigOperatorshipTransferredSDKType;
}
export interface EventTokenSent {
    sender: Uint8Array;
    destinationChain: string;
    destinationAddress: string;
    symbol: string;
    amount: Uint8Array;
}
export interface EventTokenSentProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventTokenSent";
    value: Uint8Array;
}
export interface EventTokenSentAmino {
    sender?: string;
    destination_chain?: string;
    destination_address?: string;
    symbol?: string;
    amount?: string;
}
export interface EventTokenSentAminoMsg {
    type: "/axelar.evm.v1beta1.EventTokenSent";
    value: EventTokenSentAmino;
}
export interface EventTokenSentSDKType {
    sender: Uint8Array;
    destination_chain: string;
    destination_address: string;
    symbol: string;
    amount: Uint8Array;
}
export interface EventContractCall {
    sender: Uint8Array;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
}
export interface EventContractCallProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventContractCall";
    value: Uint8Array;
}
export interface EventContractCallAmino {
    sender?: string;
    destination_chain?: string;
    contract_address?: string;
    payload_hash?: string;
}
export interface EventContractCallAminoMsg {
    type: "/axelar.evm.v1beta1.EventContractCall";
    value: EventContractCallAmino;
}
export interface EventContractCallSDKType {
    sender: Uint8Array;
    destination_chain: string;
    contract_address: string;
    payload_hash: Uint8Array;
}
export interface EventContractCallWithToken {
    sender: Uint8Array;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
    symbol: string;
    amount: Uint8Array;
}
export interface EventContractCallWithTokenProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventContractCallWithToken";
    value: Uint8Array;
}
export interface EventContractCallWithTokenAmino {
    sender?: string;
    destination_chain?: string;
    contract_address?: string;
    payload_hash?: string;
    symbol?: string;
    amount?: string;
}
export interface EventContractCallWithTokenAminoMsg {
    type: "/axelar.evm.v1beta1.EventContractCallWithToken";
    value: EventContractCallWithTokenAmino;
}
export interface EventContractCallWithTokenSDKType {
    sender: Uint8Array;
    destination_chain: string;
    contract_address: string;
    payload_hash: Uint8Array;
    symbol: string;
    amount: Uint8Array;
}
export interface EventTransfer {
    to: Uint8Array;
    amount: Uint8Array;
}
export interface EventTransferProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventTransfer";
    value: Uint8Array;
}
export interface EventTransferAmino {
    to?: string;
    amount?: string;
}
export interface EventTransferAminoMsg {
    type: "/axelar.evm.v1beta1.EventTransfer";
    value: EventTransferAmino;
}
export interface EventTransferSDKType {
    to: Uint8Array;
    amount: Uint8Array;
}
export interface EventTokenDeployed {
    symbol: string;
    tokenAddress: Uint8Array;
}
export interface EventTokenDeployedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventTokenDeployed";
    value: Uint8Array;
}
export interface EventTokenDeployedAmino {
    symbol?: string;
    token_address?: string;
}
export interface EventTokenDeployedAminoMsg {
    type: "/axelar.evm.v1beta1.EventTokenDeployed";
    value: EventTokenDeployedAmino;
}
export interface EventTokenDeployedSDKType {
    symbol: string;
    token_address: Uint8Array;
}
/** @deprecated */
export interface EventMultisigOwnershipTransferred {
    preOwners: Uint8Array[];
    prevThreshold: Uint8Array;
    newOwners: Uint8Array[];
    newThreshold: Uint8Array;
}
export interface EventMultisigOwnershipTransferredProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventMultisigOwnershipTransferred";
    value: Uint8Array;
}
/** @deprecated */
export interface EventMultisigOwnershipTransferredAmino {
    pre_owners?: string[];
    prev_threshold?: string;
    new_owners?: string[];
    new_threshold?: string;
}
export interface EventMultisigOwnershipTransferredAminoMsg {
    type: "/axelar.evm.v1beta1.EventMultisigOwnershipTransferred";
    value: EventMultisigOwnershipTransferredAmino;
}
/** @deprecated */
export interface EventMultisigOwnershipTransferredSDKType {
    pre_owners: Uint8Array[];
    prev_threshold: Uint8Array;
    new_owners: Uint8Array[];
    new_threshold: Uint8Array;
}
export interface EventMultisigOperatorshipTransferred {
    newOperators: Uint8Array[];
    newThreshold: Uint8Array;
    newWeights: Uint8Array[];
}
export interface EventMultisigOperatorshipTransferredProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventMultisigOperatorshipTransferred";
    value: Uint8Array;
}
export interface EventMultisigOperatorshipTransferredAmino {
    new_operators?: string[];
    new_threshold?: string;
    new_weights?: string[];
}
export interface EventMultisigOperatorshipTransferredAminoMsg {
    type: "/axelar.evm.v1beta1.EventMultisigOperatorshipTransferred";
    value: EventMultisigOperatorshipTransferredAmino;
}
export interface EventMultisigOperatorshipTransferredSDKType {
    new_operators: Uint8Array[];
    new_threshold: Uint8Array;
    new_weights: Uint8Array[];
}
/** NetworkInfo describes information about a network */
export interface NetworkInfo {
    name: string;
    id: Uint8Array;
}
export interface NetworkInfoProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.NetworkInfo";
    value: Uint8Array;
}
/** NetworkInfo describes information about a network */
export interface NetworkInfoAmino {
    name?: string;
    id?: string;
}
export interface NetworkInfoAminoMsg {
    type: "/axelar.evm.v1beta1.NetworkInfo";
    value: NetworkInfoAmino;
}
/** NetworkInfo describes information about a network */
export interface NetworkInfoSDKType {
    name: string;
    id: Uint8Array;
}
/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfo {
    burnerAddress: Uint8Array;
    tokenAddress: Uint8Array;
    destinationChain: string;
    symbol: string;
    asset: string;
    salt: Uint8Array;
}
export interface BurnerInfoProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BurnerInfo";
    value: Uint8Array;
}
/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfoAmino {
    burner_address?: string;
    token_address?: string;
    destination_chain?: string;
    symbol?: string;
    asset?: string;
    salt?: string;
}
export interface BurnerInfoAminoMsg {
    type: "/axelar.evm.v1beta1.BurnerInfo";
    value: BurnerInfoAmino;
}
/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfoSDKType {
    burner_address: Uint8Array;
    token_address: Uint8Array;
    destination_chain: string;
    symbol: string;
    asset: string;
    salt: Uint8Array;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20Deposit {
    txId: Uint8Array;
    amount: Uint8Array;
    asset: string;
    destinationChain: string;
    burnerAddress: Uint8Array;
    logIndex: bigint;
}
export interface ERC20DepositProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ERC20Deposit";
    value: Uint8Array;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20DepositAmino {
    tx_id?: string;
    amount?: string;
    asset?: string;
    destination_chain?: string;
    burner_address?: string;
    log_index?: string;
}
export interface ERC20DepositAminoMsg {
    type: "/axelar.evm.v1beta1.ERC20Deposit";
    value: ERC20DepositAmino;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20DepositSDKType {
    tx_id: Uint8Array;
    amount: Uint8Array;
    asset: string;
    destination_chain: string;
    burner_address: Uint8Array;
    log_index: bigint;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadata {
    asset: string;
    chainId: Uint8Array;
    details: TokenDetails;
    tokenAddress: string;
    txHash: string;
    status: Status;
    isExternal: boolean;
    burnerCode: Uint8Array;
}
export interface ERC20TokenMetadataProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ERC20TokenMetadata";
    value: Uint8Array;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadataAmino {
    asset?: string;
    chain_id?: string;
    details?: TokenDetailsAmino;
    token_address?: string;
    tx_hash?: string;
    status?: Status;
    is_external?: boolean;
    burner_code?: string;
}
export interface ERC20TokenMetadataAminoMsg {
    type: "/axelar.evm.v1beta1.ERC20TokenMetadata";
    value: ERC20TokenMetadataAmino;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadataSDKType {
    asset: string;
    chain_id: Uint8Array;
    details: TokenDetailsSDKType;
    token_address: string;
    tx_hash: string;
    status: Status;
    is_external: boolean;
    burner_code: Uint8Array;
}
export interface TransactionMetadata {
    rawTx: Uint8Array;
    pubKey: Uint8Array;
}
export interface TransactionMetadataProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.TransactionMetadata";
    value: Uint8Array;
}
export interface TransactionMetadataAmino {
    raw_tx?: string;
    pub_key?: string;
}
export interface TransactionMetadataAminoMsg {
    type: "/axelar.evm.v1beta1.TransactionMetadata";
    value: TransactionMetadataAmino;
}
export interface TransactionMetadataSDKType {
    raw_tx: Uint8Array;
    pub_key: Uint8Array;
}
export interface Command {
    id: Uint8Array;
    /** @deprecated */
    command: string;
    params: Uint8Array;
    keyId: string;
    maxGasCost: number;
    type: CommandType;
}
export interface CommandProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Command";
    value: Uint8Array;
}
export interface CommandAmino {
    id?: string;
    /** @deprecated */
    command?: string;
    params?: string;
    key_id?: string;
    max_gas_cost?: number;
    type?: CommandType;
}
export interface CommandAminoMsg {
    type: "/axelar.evm.v1beta1.Command";
    value: CommandAmino;
}
export interface CommandSDKType {
    id: Uint8Array;
    /** @deprecated */
    command: string;
    params: Uint8Array;
    key_id: string;
    max_gas_cost: number;
    type: CommandType;
}
export interface CommandBatchMetadata {
    id: Uint8Array;
    commandIds: Uint8Array[];
    data: Uint8Array;
    sigHash: Uint8Array;
    status: BatchedCommandsStatus;
    keyId: string;
    prevBatchedCommandsId: Uint8Array;
    signature?: (Any) | undefined;
}
export interface CommandBatchMetadataProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CommandBatchMetadata";
    value: Uint8Array;
}
export type CommandBatchMetadataEncoded = Omit<CommandBatchMetadata, "signature"> & {
    signature?: AnyProtoMsg | undefined;
};
export interface CommandBatchMetadataAmino {
    id?: string;
    command_ids?: string[];
    data?: string;
    sig_hash?: string;
    status?: BatchedCommandsStatus;
    key_id?: string;
    prev_batched_commands_id?: string;
    signature?: AnyAmino;
}
export interface CommandBatchMetadataAminoMsg {
    type: "/axelar.evm.v1beta1.CommandBatchMetadata";
    value: CommandBatchMetadataAmino;
}
export interface CommandBatchMetadataSDKType {
    id: Uint8Array;
    command_ids: Uint8Array[];
    data: Uint8Array;
    sig_hash: Uint8Array;
    status: BatchedCommandsStatus;
    key_id: string;
    prev_batched_commands_id: Uint8Array;
    signature?: AnySDKType | undefined;
}
/**
 * SigMetadata stores necessary information for external apps to map signature
 * results to evm relay transaction types
 */
export interface SigMetadata {
    type: SigType;
    chain: string;
    commandBatchId: Uint8Array;
}
export interface SigMetadataProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.SigMetadata";
    value: Uint8Array;
}
/**
 * SigMetadata stores necessary information for external apps to map signature
 * results to evm relay transaction types
 */
export interface SigMetadataAmino {
    type?: SigType;
    chain?: string;
    command_batch_id?: string;
}
export interface SigMetadataAminoMsg {
    type: "/axelar.evm.v1beta1.SigMetadata";
    value: SigMetadataAmino;
}
/**
 * SigMetadata stores necessary information for external apps to map signature
 * results to evm relay transaction types
 */
export interface SigMetadataSDKType {
    type: SigType;
    chain: string;
    command_batch_id: Uint8Array;
}
/** TransferKey contains information for a transfer operatorship */
export interface TransferKey {
    txId: Uint8Array;
    nextKeyId: string;
}
export interface TransferKeyProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.TransferKey";
    value: Uint8Array;
}
/** TransferKey contains information for a transfer operatorship */
export interface TransferKeyAmino {
    tx_id?: string;
    next_key_id?: string;
}
export interface TransferKeyAminoMsg {
    type: "/axelar.evm.v1beta1.TransferKey";
    value: TransferKeyAmino;
}
/** TransferKey contains information for a transfer operatorship */
export interface TransferKeySDKType {
    tx_id: Uint8Array;
    next_key_id: string;
}
export interface Asset {
    chain: string;
    name: string;
}
export interface AssetProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Asset";
    value: Uint8Array;
}
export interface AssetAmino {
    chain?: string;
    name?: string;
}
export interface AssetAminoMsg {
    type: "/axelar.evm.v1beta1.Asset";
    value: AssetAmino;
}
export interface AssetSDKType {
    chain: string;
    name: string;
}
export interface TokenDetails {
    tokenName: string;
    symbol: string;
    decimals: number;
    capacity: Uint8Array;
}
export interface TokenDetailsProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.TokenDetails";
    value: Uint8Array;
}
export interface TokenDetailsAmino {
    token_name?: string;
    symbol?: string;
    decimals?: number;
    capacity?: string;
}
export interface TokenDetailsAminoMsg {
    type: "/axelar.evm.v1beta1.TokenDetails";
    value: TokenDetailsAmino;
}
export interface TokenDetailsSDKType {
    token_name: string;
    symbol: string;
    decimals: number;
    capacity: Uint8Array;
}
export interface Gateway {
    address: Uint8Array;
}
export interface GatewayProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Gateway";
    value: Uint8Array;
}
export interface GatewayAmino {
    address?: string;
}
export interface GatewayAminoMsg {
    type: "/axelar.evm.v1beta1.Gateway";
    value: GatewayAmino;
}
export interface GatewaySDKType {
    address: Uint8Array;
}
export interface PollMetadata {
    chain: string;
    txId: Uint8Array;
}
export interface PollMetadataProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PollMetadata";
    value: Uint8Array;
}
export interface PollMetadataAmino {
    chain?: string;
    tx_id?: string;
}
export interface PollMetadataAminoMsg {
    type: "/axelar.evm.v1beta1.PollMetadata";
    value: PollMetadataAmino;
}
export interface PollMetadataSDKType {
    chain: string;
    tx_id: Uint8Array;
}
export declare const VoteEvents: {
    typeUrl: string;
    encode(message: VoteEvents, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VoteEvents;
    fromPartial(object: Partial<VoteEvents>): VoteEvents;
    fromAmino(object: VoteEventsAmino): VoteEvents;
    toAmino(message: VoteEvents): VoteEventsAmino;
    fromAminoMsg(object: VoteEventsAminoMsg): VoteEvents;
    fromProtoMsg(message: VoteEventsProtoMsg): VoteEvents;
    toProto(message: VoteEvents): Uint8Array;
    toProtoMsg(message: VoteEvents): VoteEventsProtoMsg;
};
export declare const Event: {
    typeUrl: string;
    encode(message: Event, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Event;
    fromPartial(object: Partial<Event>): Event;
    fromAmino(object: EventAmino): Event;
    toAmino(message: Event): EventAmino;
    fromAminoMsg(object: EventAminoMsg): Event;
    fromProtoMsg(message: EventProtoMsg): Event;
    toProto(message: Event): Uint8Array;
    toProtoMsg(message: Event): EventProtoMsg;
};
export declare const EventTokenSent: {
    typeUrl: string;
    encode(message: EventTokenSent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventTokenSent;
    fromPartial(object: Partial<EventTokenSent>): EventTokenSent;
    fromAmino(object: EventTokenSentAmino): EventTokenSent;
    toAmino(message: EventTokenSent): EventTokenSentAmino;
    fromAminoMsg(object: EventTokenSentAminoMsg): EventTokenSent;
    fromProtoMsg(message: EventTokenSentProtoMsg): EventTokenSent;
    toProto(message: EventTokenSent): Uint8Array;
    toProtoMsg(message: EventTokenSent): EventTokenSentProtoMsg;
};
export declare const EventContractCall: {
    typeUrl: string;
    encode(message: EventContractCall, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventContractCall;
    fromPartial(object: Partial<EventContractCall>): EventContractCall;
    fromAmino(object: EventContractCallAmino): EventContractCall;
    toAmino(message: EventContractCall): EventContractCallAmino;
    fromAminoMsg(object: EventContractCallAminoMsg): EventContractCall;
    fromProtoMsg(message: EventContractCallProtoMsg): EventContractCall;
    toProto(message: EventContractCall): Uint8Array;
    toProtoMsg(message: EventContractCall): EventContractCallProtoMsg;
};
export declare const EventContractCallWithToken: {
    typeUrl: string;
    encode(message: EventContractCallWithToken, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventContractCallWithToken;
    fromPartial(object: Partial<EventContractCallWithToken>): EventContractCallWithToken;
    fromAmino(object: EventContractCallWithTokenAmino): EventContractCallWithToken;
    toAmino(message: EventContractCallWithToken): EventContractCallWithTokenAmino;
    fromAminoMsg(object: EventContractCallWithTokenAminoMsg): EventContractCallWithToken;
    fromProtoMsg(message: EventContractCallWithTokenProtoMsg): EventContractCallWithToken;
    toProto(message: EventContractCallWithToken): Uint8Array;
    toProtoMsg(message: EventContractCallWithToken): EventContractCallWithTokenProtoMsg;
};
export declare const EventTransfer: {
    typeUrl: string;
    encode(message: EventTransfer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventTransfer;
    fromPartial(object: Partial<EventTransfer>): EventTransfer;
    fromAmino(object: EventTransferAmino): EventTransfer;
    toAmino(message: EventTransfer): EventTransferAmino;
    fromAminoMsg(object: EventTransferAminoMsg): EventTransfer;
    fromProtoMsg(message: EventTransferProtoMsg): EventTransfer;
    toProto(message: EventTransfer): Uint8Array;
    toProtoMsg(message: EventTransfer): EventTransferProtoMsg;
};
export declare const EventTokenDeployed: {
    typeUrl: string;
    encode(message: EventTokenDeployed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventTokenDeployed;
    fromPartial(object: Partial<EventTokenDeployed>): EventTokenDeployed;
    fromAmino(object: EventTokenDeployedAmino): EventTokenDeployed;
    toAmino(message: EventTokenDeployed): EventTokenDeployedAmino;
    fromAminoMsg(object: EventTokenDeployedAminoMsg): EventTokenDeployed;
    fromProtoMsg(message: EventTokenDeployedProtoMsg): EventTokenDeployed;
    toProto(message: EventTokenDeployed): Uint8Array;
    toProtoMsg(message: EventTokenDeployed): EventTokenDeployedProtoMsg;
};
export declare const EventMultisigOwnershipTransferred: {
    typeUrl: string;
    encode(message: EventMultisigOwnershipTransferred, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMultisigOwnershipTransferred;
    fromPartial(object: Partial<EventMultisigOwnershipTransferred>): EventMultisigOwnershipTransferred;
    fromAmino(object: EventMultisigOwnershipTransferredAmino): EventMultisigOwnershipTransferred;
    toAmino(message: EventMultisigOwnershipTransferred): EventMultisigOwnershipTransferredAmino;
    fromAminoMsg(object: EventMultisigOwnershipTransferredAminoMsg): EventMultisigOwnershipTransferred;
    fromProtoMsg(message: EventMultisigOwnershipTransferredProtoMsg): EventMultisigOwnershipTransferred;
    toProto(message: EventMultisigOwnershipTransferred): Uint8Array;
    toProtoMsg(message: EventMultisigOwnershipTransferred): EventMultisigOwnershipTransferredProtoMsg;
};
export declare const EventMultisigOperatorshipTransferred: {
    typeUrl: string;
    encode(message: EventMultisigOperatorshipTransferred, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMultisigOperatorshipTransferred;
    fromPartial(object: Partial<EventMultisigOperatorshipTransferred>): EventMultisigOperatorshipTransferred;
    fromAmino(object: EventMultisigOperatorshipTransferredAmino): EventMultisigOperatorshipTransferred;
    toAmino(message: EventMultisigOperatorshipTransferred): EventMultisigOperatorshipTransferredAmino;
    fromAminoMsg(object: EventMultisigOperatorshipTransferredAminoMsg): EventMultisigOperatorshipTransferred;
    fromProtoMsg(message: EventMultisigOperatorshipTransferredProtoMsg): EventMultisigOperatorshipTransferred;
    toProto(message: EventMultisigOperatorshipTransferred): Uint8Array;
    toProtoMsg(message: EventMultisigOperatorshipTransferred): EventMultisigOperatorshipTransferredProtoMsg;
};
export declare const NetworkInfo: {
    typeUrl: string;
    encode(message: NetworkInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NetworkInfo;
    fromPartial(object: Partial<NetworkInfo>): NetworkInfo;
    fromAmino(object: NetworkInfoAmino): NetworkInfo;
    toAmino(message: NetworkInfo): NetworkInfoAmino;
    fromAminoMsg(object: NetworkInfoAminoMsg): NetworkInfo;
    fromProtoMsg(message: NetworkInfoProtoMsg): NetworkInfo;
    toProto(message: NetworkInfo): Uint8Array;
    toProtoMsg(message: NetworkInfo): NetworkInfoProtoMsg;
};
export declare const BurnerInfo: {
    typeUrl: string;
    encode(message: BurnerInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BurnerInfo;
    fromPartial(object: Partial<BurnerInfo>): BurnerInfo;
    fromAmino(object: BurnerInfoAmino): BurnerInfo;
    toAmino(message: BurnerInfo): BurnerInfoAmino;
    fromAminoMsg(object: BurnerInfoAminoMsg): BurnerInfo;
    fromProtoMsg(message: BurnerInfoProtoMsg): BurnerInfo;
    toProto(message: BurnerInfo): Uint8Array;
    toProtoMsg(message: BurnerInfo): BurnerInfoProtoMsg;
};
export declare const ERC20Deposit: {
    typeUrl: string;
    encode(message: ERC20Deposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ERC20Deposit;
    fromPartial(object: Partial<ERC20Deposit>): ERC20Deposit;
    fromAmino(object: ERC20DepositAmino): ERC20Deposit;
    toAmino(message: ERC20Deposit): ERC20DepositAmino;
    fromAminoMsg(object: ERC20DepositAminoMsg): ERC20Deposit;
    fromProtoMsg(message: ERC20DepositProtoMsg): ERC20Deposit;
    toProto(message: ERC20Deposit): Uint8Array;
    toProtoMsg(message: ERC20Deposit): ERC20DepositProtoMsg;
};
export declare const ERC20TokenMetadata: {
    typeUrl: string;
    encode(message: ERC20TokenMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ERC20TokenMetadata;
    fromPartial(object: Partial<ERC20TokenMetadata>): ERC20TokenMetadata;
    fromAmino(object: ERC20TokenMetadataAmino): ERC20TokenMetadata;
    toAmino(message: ERC20TokenMetadata): ERC20TokenMetadataAmino;
    fromAminoMsg(object: ERC20TokenMetadataAminoMsg): ERC20TokenMetadata;
    fromProtoMsg(message: ERC20TokenMetadataProtoMsg): ERC20TokenMetadata;
    toProto(message: ERC20TokenMetadata): Uint8Array;
    toProtoMsg(message: ERC20TokenMetadata): ERC20TokenMetadataProtoMsg;
};
export declare const TransactionMetadata: {
    typeUrl: string;
    encode(message: TransactionMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransactionMetadata;
    fromPartial(object: Partial<TransactionMetadata>): TransactionMetadata;
    fromAmino(object: TransactionMetadataAmino): TransactionMetadata;
    toAmino(message: TransactionMetadata): TransactionMetadataAmino;
    fromAminoMsg(object: TransactionMetadataAminoMsg): TransactionMetadata;
    fromProtoMsg(message: TransactionMetadataProtoMsg): TransactionMetadata;
    toProto(message: TransactionMetadata): Uint8Array;
    toProtoMsg(message: TransactionMetadata): TransactionMetadataProtoMsg;
};
export declare const Command: {
    typeUrl: string;
    encode(message: Command, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Command;
    fromPartial(object: Partial<Command>): Command;
    fromAmino(object: CommandAmino): Command;
    toAmino(message: Command): CommandAmino;
    fromAminoMsg(object: CommandAminoMsg): Command;
    fromProtoMsg(message: CommandProtoMsg): Command;
    toProto(message: Command): Uint8Array;
    toProtoMsg(message: Command): CommandProtoMsg;
};
export declare const CommandBatchMetadata: {
    typeUrl: string;
    encode(message: CommandBatchMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommandBatchMetadata;
    fromPartial(object: Partial<CommandBatchMetadata>): CommandBatchMetadata;
    fromAmino(object: CommandBatchMetadataAmino): CommandBatchMetadata;
    toAmino(message: CommandBatchMetadata): CommandBatchMetadataAmino;
    fromAminoMsg(object: CommandBatchMetadataAminoMsg): CommandBatchMetadata;
    fromProtoMsg(message: CommandBatchMetadataProtoMsg): CommandBatchMetadata;
    toProto(message: CommandBatchMetadata): Uint8Array;
    toProtoMsg(message: CommandBatchMetadata): CommandBatchMetadataProtoMsg;
};
export declare const SigMetadata: {
    typeUrl: string;
    encode(message: SigMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SigMetadata;
    fromPartial(object: Partial<SigMetadata>): SigMetadata;
    fromAmino(object: SigMetadataAmino): SigMetadata;
    toAmino(message: SigMetadata): SigMetadataAmino;
    fromAminoMsg(object: SigMetadataAminoMsg): SigMetadata;
    fromProtoMsg(message: SigMetadataProtoMsg): SigMetadata;
    toProto(message: SigMetadata): Uint8Array;
    toProtoMsg(message: SigMetadata): SigMetadataProtoMsg;
};
export declare const TransferKey: {
    typeUrl: string;
    encode(message: TransferKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferKey;
    fromPartial(object: Partial<TransferKey>): TransferKey;
    fromAmino(object: TransferKeyAmino): TransferKey;
    toAmino(message: TransferKey): TransferKeyAmino;
    fromAminoMsg(object: TransferKeyAminoMsg): TransferKey;
    fromProtoMsg(message: TransferKeyProtoMsg): TransferKey;
    toProto(message: TransferKey): Uint8Array;
    toProtoMsg(message: TransferKey): TransferKeyProtoMsg;
};
export declare const Asset: {
    typeUrl: string;
    encode(message: Asset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
    fromAmino(object: AssetAmino): Asset;
    toAmino(message: Asset): AssetAmino;
    fromAminoMsg(object: AssetAminoMsg): Asset;
    fromProtoMsg(message: AssetProtoMsg): Asset;
    toProto(message: Asset): Uint8Array;
    toProtoMsg(message: Asset): AssetProtoMsg;
};
export declare const TokenDetails: {
    typeUrl: string;
    encode(message: TokenDetails, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenDetails;
    fromPartial(object: Partial<TokenDetails>): TokenDetails;
    fromAmino(object: TokenDetailsAmino): TokenDetails;
    toAmino(message: TokenDetails): TokenDetailsAmino;
    fromAminoMsg(object: TokenDetailsAminoMsg): TokenDetails;
    fromProtoMsg(message: TokenDetailsProtoMsg): TokenDetails;
    toProto(message: TokenDetails): Uint8Array;
    toProtoMsg(message: TokenDetails): TokenDetailsProtoMsg;
};
export declare const Gateway: {
    typeUrl: string;
    encode(message: Gateway, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Gateway;
    fromPartial(object: Partial<Gateway>): Gateway;
    fromAmino(object: GatewayAmino): Gateway;
    toAmino(message: Gateway): GatewayAmino;
    fromAminoMsg(object: GatewayAminoMsg): Gateway;
    fromProtoMsg(message: GatewayProtoMsg): Gateway;
    toProto(message: Gateway): Uint8Array;
    toProtoMsg(message: Gateway): GatewayProtoMsg;
};
export declare const PollMetadata: {
    typeUrl: string;
    encode(message: PollMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollMetadata;
    fromPartial(object: Partial<PollMetadata>): PollMetadata;
    fromAmino(object: PollMetadataAmino): PollMetadata;
    toAmino(message: PollMetadata): PollMetadataAmino;
    fromAminoMsg(object: PollMetadataAminoMsg): PollMetadata;
    fromProtoMsg(message: PollMetadataProtoMsg): PollMetadata;
    toProto(message: PollMetadata): Uint8Array;
    toProtoMsg(message: PollMetadata): PollMetadataProtoMsg;
};
export declare const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: AnyAmino) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: Any) => AnyAmino;
