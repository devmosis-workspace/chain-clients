import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum Event_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_CONFIRMED = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const Event_StatusSDKType: typeof Event_Status;
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
export declare function batchedCommandsStatusFromJSON(object: any): BatchedCommandsStatus;
export declare function batchedCommandsStatusToJSON(object: BatchedCommandsStatus): string;
export declare enum SigType {
    SIG_TYPE_UNSPECIFIED = 0,
    SIG_TYPE_TX = 1,
    SIG_TYPE_COMMAND = 2,
    UNRECOGNIZED = -1
}
export declare const SigTypeSDKType: typeof SigType;
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
export declare function depositStatusFromJSON(object: any): DepositStatus;
export declare function depositStatusToJSON(object: DepositStatus): string;
export interface VoteEvents {
    chain: string;
    events: Event[];
}
export interface VoteEventsSDKType {
    chain: string;
    events: EventSDKType[];
}
export interface Event {
    chain: string;
    txId: Uint8Array;
    index: Long;
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
export interface EventSDKType {
    chain: string;
    tx_id: Uint8Array;
    index: Long;
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
export interface EventTransferSDKType {
    to: Uint8Array;
    amount: Uint8Array;
}
export interface EventTokenDeployed {
    symbol: string;
    tokenAddress: Uint8Array;
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
    logIndex: Long;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20DepositSDKType {
    tx_id: Uint8Array;
    amount: Uint8Array;
    asset: string;
    destination_chain: string;
    burner_address: Uint8Array;
    log_index: Long;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadata {
    asset: string;
    chainId: Uint8Array;
    details?: TokenDetails;
    tokenAddress: string;
    txHash: string;
    status: Status;
    isExternal: boolean;
    burnerCode: Uint8Array;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadataSDKType {
    asset: string;
    chain_id: Uint8Array;
    details?: TokenDetailsSDKType;
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
    signature?: Any;
}
export interface CommandBatchMetadataSDKType {
    id: Uint8Array;
    command_ids: Uint8Array[];
    data: Uint8Array;
    sig_hash: Uint8Array;
    status: BatchedCommandsStatus;
    key_id: string;
    prev_batched_commands_id: Uint8Array;
    signature?: AnySDKType;
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
/** TransferKey contains information for a transfer operatorship */
export interface TransferKeySDKType {
    tx_id: Uint8Array;
    next_key_id: string;
}
export interface Asset {
    chain: string;
    name: string;
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
export interface TokenDetailsSDKType {
    token_name: string;
    symbol: string;
    decimals: number;
    capacity: Uint8Array;
}
export interface Gateway {
    address: Uint8Array;
}
export interface GatewaySDKType {
    address: Uint8Array;
}
export interface PollMetadata {
    chain: string;
    txId: Uint8Array;
}
export interface PollMetadataSDKType {
    chain: string;
    tx_id: Uint8Array;
}
export declare const VoteEvents: {
    encode(message: VoteEvents, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VoteEvents;
    fromPartial(object: Partial<VoteEvents>): VoteEvents;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Event;
    fromPartial(object: Partial<Event>): Event;
};
export declare const EventTokenSent: {
    encode(message: EventTokenSent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventTokenSent;
    fromPartial(object: Partial<EventTokenSent>): EventTokenSent;
};
export declare const EventContractCall: {
    encode(message: EventContractCall, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventContractCall;
    fromPartial(object: Partial<EventContractCall>): EventContractCall;
};
export declare const EventContractCallWithToken: {
    encode(message: EventContractCallWithToken, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventContractCallWithToken;
    fromPartial(object: Partial<EventContractCallWithToken>): EventContractCallWithToken;
};
export declare const EventTransfer: {
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventTransfer;
    fromPartial(object: Partial<EventTransfer>): EventTransfer;
};
export declare const EventTokenDeployed: {
    encode(message: EventTokenDeployed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventTokenDeployed;
    fromPartial(object: Partial<EventTokenDeployed>): EventTokenDeployed;
};
export declare const EventMultisigOwnershipTransferred: {
    encode(message: EventMultisigOwnershipTransferred, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMultisigOwnershipTransferred;
    fromPartial(object: Partial<EventMultisigOwnershipTransferred>): EventMultisigOwnershipTransferred;
};
export declare const EventMultisigOperatorshipTransferred: {
    encode(message: EventMultisigOperatorshipTransferred, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMultisigOperatorshipTransferred;
    fromPartial(object: Partial<EventMultisigOperatorshipTransferred>): EventMultisigOperatorshipTransferred;
};
export declare const NetworkInfo: {
    encode(message: NetworkInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NetworkInfo;
    fromPartial(object: Partial<NetworkInfo>): NetworkInfo;
};
export declare const BurnerInfo: {
    encode(message: BurnerInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BurnerInfo;
    fromPartial(object: Partial<BurnerInfo>): BurnerInfo;
};
export declare const ERC20Deposit: {
    encode(message: ERC20Deposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ERC20Deposit;
    fromPartial(object: Partial<ERC20Deposit>): ERC20Deposit;
};
export declare const ERC20TokenMetadata: {
    encode(message: ERC20TokenMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ERC20TokenMetadata;
    fromPartial(object: Partial<ERC20TokenMetadata>): ERC20TokenMetadata;
};
export declare const TransactionMetadata: {
    encode(message: TransactionMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransactionMetadata;
    fromPartial(object: Partial<TransactionMetadata>): TransactionMetadata;
};
export declare const Command: {
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Command;
    fromPartial(object: Partial<Command>): Command;
};
export declare const CommandBatchMetadata: {
    encode(message: CommandBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommandBatchMetadata;
    fromPartial(object: Partial<CommandBatchMetadata>): CommandBatchMetadata;
};
export declare const SigMetadata: {
    encode(message: SigMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigMetadata;
    fromPartial(object: Partial<SigMetadata>): SigMetadata;
};
export declare const TransferKey: {
    encode(message: TransferKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferKey;
    fromPartial(object: Partial<TransferKey>): TransferKey;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
};
export declare const TokenDetails: {
    encode(message: TokenDetails, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TokenDetails;
    fromPartial(object: Partial<TokenDetails>): TokenDetails;
};
export declare const Gateway: {
    encode(message: Gateway, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Gateway;
    fromPartial(object: Partial<Gateway>): Gateway;
};
export declare const PollMetadata: {
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PollMetadata;
    fromPartial(object: Partial<PollMetadata>): PollMetadata;
};
