import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum Event_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_CONFIRMED = 1,
  STATUS_COMPLETED = 2,
  STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const Event_StatusSDKType = Event_Status;
export const Event_StatusAmino = Event_Status;
export function event_StatusFromJSON(object: any): Event_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Event_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_CONFIRMED":
      return Event_Status.STATUS_CONFIRMED;
    case 2:
    case "STATUS_COMPLETED":
      return Event_Status.STATUS_COMPLETED;
    case 3:
    case "STATUS_FAILED":
      return Event_Status.STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Event_Status.UNRECOGNIZED;
  }
}
export function event_StatusToJSON(object: Event_Status): string {
  switch (object) {
    case Event_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Event_Status.STATUS_CONFIRMED:
      return "STATUS_CONFIRMED";
    case Event_Status.STATUS_COMPLETED:
      return "STATUS_COMPLETED";
    case Event_Status.STATUS_FAILED:
      return "STATUS_FAILED";
    case Event_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum Status {
  /**
   * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
   * be powers of 2
   */
  STATUS_UNSPECIFIED = 0,
  STATUS_INITIALIZED = 1,
  STATUS_PENDING = 2,
  STATUS_CONFIRMED = 4,
  UNRECOGNIZED = -1,
}
export const StatusSDKType = Status;
export const StatusAmino = Status;
export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_INITIALIZED":
      return Status.STATUS_INITIALIZED;
    case 2:
    case "STATUS_PENDING":
      return Status.STATUS_PENDING;
    case 4:
    case "STATUS_CONFIRMED":
      return Status.STATUS_CONFIRMED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}
export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Status.STATUS_INITIALIZED:
      return "STATUS_INITIALIZED";
    case Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case Status.STATUS_CONFIRMED:
      return "STATUS_CONFIRMED";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CommandType {
  COMMAND_TYPE_UNSPECIFIED = 0,
  COMMAND_TYPE_MINT_TOKEN = 1,
  COMMAND_TYPE_DEPLOY_TOKEN = 2,
  COMMAND_TYPE_BURN_TOKEN = 3,
  COMMAND_TYPE_TRANSFER_OPERATORSHIP = 4,
  COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT = 5,
  COMMAND_TYPE_APPROVE_CONTRACT_CALL = 6,
  UNRECOGNIZED = -1,
}
export const CommandTypeSDKType = CommandType;
export const CommandTypeAmino = CommandType;
export function commandTypeFromJSON(object: any): CommandType {
  switch (object) {
    case 0:
    case "COMMAND_TYPE_UNSPECIFIED":
      return CommandType.COMMAND_TYPE_UNSPECIFIED;
    case 1:
    case "COMMAND_TYPE_MINT_TOKEN":
      return CommandType.COMMAND_TYPE_MINT_TOKEN;
    case 2:
    case "COMMAND_TYPE_DEPLOY_TOKEN":
      return CommandType.COMMAND_TYPE_DEPLOY_TOKEN;
    case 3:
    case "COMMAND_TYPE_BURN_TOKEN":
      return CommandType.COMMAND_TYPE_BURN_TOKEN;
    case 4:
    case "COMMAND_TYPE_TRANSFER_OPERATORSHIP":
      return CommandType.COMMAND_TYPE_TRANSFER_OPERATORSHIP;
    case 5:
    case "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT":
      return CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT;
    case 6:
    case "COMMAND_TYPE_APPROVE_CONTRACT_CALL":
      return CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommandType.UNRECOGNIZED;
  }
}
export function commandTypeToJSON(object: CommandType): string {
  switch (object) {
    case CommandType.COMMAND_TYPE_UNSPECIFIED:
      return "COMMAND_TYPE_UNSPECIFIED";
    case CommandType.COMMAND_TYPE_MINT_TOKEN:
      return "COMMAND_TYPE_MINT_TOKEN";
    case CommandType.COMMAND_TYPE_DEPLOY_TOKEN:
      return "COMMAND_TYPE_DEPLOY_TOKEN";
    case CommandType.COMMAND_TYPE_BURN_TOKEN:
      return "COMMAND_TYPE_BURN_TOKEN";
    case CommandType.COMMAND_TYPE_TRANSFER_OPERATORSHIP:
      return "COMMAND_TYPE_TRANSFER_OPERATORSHIP";
    case CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT:
      return "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT";
    case CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL:
      return "COMMAND_TYPE_APPROVE_CONTRACT_CALL";
    case CommandType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum BatchedCommandsStatus {
  BATCHED_COMMANDS_STATUS_UNSPECIFIED = 0,
  BATCHED_COMMANDS_STATUS_SIGNING = 1,
  BATCHED_COMMANDS_STATUS_ABORTED = 2,
  BATCHED_COMMANDS_STATUS_SIGNED = 3,
  UNRECOGNIZED = -1,
}
export const BatchedCommandsStatusSDKType = BatchedCommandsStatus;
export const BatchedCommandsStatusAmino = BatchedCommandsStatus;
export function batchedCommandsStatusFromJSON(object: any): BatchedCommandsStatus {
  switch (object) {
    case 0:
    case "BATCHED_COMMANDS_STATUS_UNSPECIFIED":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED;
    case 1:
    case "BATCHED_COMMANDS_STATUS_SIGNING":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING;
    case 2:
    case "BATCHED_COMMANDS_STATUS_ABORTED":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED;
    case 3:
    case "BATCHED_COMMANDS_STATUS_SIGNED":
      return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BatchedCommandsStatus.UNRECOGNIZED;
  }
}
export function batchedCommandsStatusToJSON(object: BatchedCommandsStatus): string {
  switch (object) {
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED:
      return "BATCHED_COMMANDS_STATUS_UNSPECIFIED";
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING:
      return "BATCHED_COMMANDS_STATUS_SIGNING";
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED:
      return "BATCHED_COMMANDS_STATUS_ABORTED";
    case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED:
      return "BATCHED_COMMANDS_STATUS_SIGNED";
    case BatchedCommandsStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum SigType {
  SIG_TYPE_UNSPECIFIED = 0,
  SIG_TYPE_TX = 1,
  SIG_TYPE_COMMAND = 2,
  UNRECOGNIZED = -1,
}
export const SigTypeSDKType = SigType;
export const SigTypeAmino = SigType;
export function sigTypeFromJSON(object: any): SigType {
  switch (object) {
    case 0:
    case "SIG_TYPE_UNSPECIFIED":
      return SigType.SIG_TYPE_UNSPECIFIED;
    case 1:
    case "SIG_TYPE_TX":
      return SigType.SIG_TYPE_TX;
    case 2:
    case "SIG_TYPE_COMMAND":
      return SigType.SIG_TYPE_COMMAND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SigType.UNRECOGNIZED;
  }
}
export function sigTypeToJSON(object: SigType): string {
  switch (object) {
    case SigType.SIG_TYPE_UNSPECIFIED:
      return "SIG_TYPE_UNSPECIFIED";
    case SigType.SIG_TYPE_TX:
      return "SIG_TYPE_TX";
    case SigType.SIG_TYPE_COMMAND:
      return "SIG_TYPE_COMMAND";
    case SigType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum DepositStatus {
  DEPOSIT_STATUS_UNSPECIFIED = 0,
  DEPOSIT_STATUS_PENDING = 1,
  DEPOSIT_STATUS_CONFIRMED = 2,
  DEPOSIT_STATUS_BURNED = 3,
  UNRECOGNIZED = -1,
}
export const DepositStatusSDKType = DepositStatus;
export const DepositStatusAmino = DepositStatus;
export function depositStatusFromJSON(object: any): DepositStatus {
  switch (object) {
    case 0:
    case "DEPOSIT_STATUS_UNSPECIFIED":
      return DepositStatus.DEPOSIT_STATUS_UNSPECIFIED;
    case 1:
    case "DEPOSIT_STATUS_PENDING":
      return DepositStatus.DEPOSIT_STATUS_PENDING;
    case 2:
    case "DEPOSIT_STATUS_CONFIRMED":
      return DepositStatus.DEPOSIT_STATUS_CONFIRMED;
    case 3:
    case "DEPOSIT_STATUS_BURNED":
      return DepositStatus.DEPOSIT_STATUS_BURNED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositStatus.UNRECOGNIZED;
  }
}
export function depositStatusToJSON(object: DepositStatus): string {
  switch (object) {
    case DepositStatus.DEPOSIT_STATUS_UNSPECIFIED:
      return "DEPOSIT_STATUS_UNSPECIFIED";
    case DepositStatus.DEPOSIT_STATUS_PENDING:
      return "DEPOSIT_STATUS_PENDING";
    case DepositStatus.DEPOSIT_STATUS_CONFIRMED:
      return "DEPOSIT_STATUS_CONFIRMED";
    case DepositStatus.DEPOSIT_STATUS_BURNED:
      return "DEPOSIT_STATUS_BURNED";
    case DepositStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseVoteEvents(): VoteEvents {
  return {
    chain: "",
    events: []
  };
}
export const VoteEvents = {
  typeUrl: "/axelar.evm.v1beta1.VoteEvents",
  encode(message: VoteEvents, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VoteEvents {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<VoteEvents>): VoteEvents {
    const message = createBaseVoteEvents();
    message.chain = object.chain ?? "";
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VoteEventsAmino): VoteEvents {
    const message = createBaseVoteEvents();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: VoteEvents): VoteEventsAmino {
    const obj: any = {};
    obj.chain = message.chain;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg(object: VoteEventsAminoMsg): VoteEvents {
    return VoteEvents.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteEventsProtoMsg): VoteEvents {
    return VoteEvents.decode(message.value);
  },
  toProto(message: VoteEvents): Uint8Array {
    return VoteEvents.encode(message).finish();
  },
  toProtoMsg(message: VoteEvents): VoteEventsProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.VoteEvents",
      value: VoteEvents.encode(message).finish()
    };
  }
};
function createBaseEvent(): Event {
  return {
    chain: "",
    txId: new Uint8Array(),
    index: BigInt(0),
    status: 0,
    tokenSent: undefined,
    contractCall: undefined,
    contractCallWithToken: undefined,
    transfer: undefined,
    tokenDeployed: undefined,
    multisigOwnershipTransferred: undefined,
    multisigOperatorshipTransferred: undefined
  };
}
export const Event = {
  typeUrl: "/axelar.evm.v1beta1.Event",
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(18).bytes(message.txId);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(24).uint64(message.index);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokenSent !== undefined) {
      EventTokenSent.encode(message.tokenSent, writer.uint32(42).fork()).ldelim();
    }
    if (message.contractCall !== undefined) {
      EventContractCall.encode(message.contractCall, writer.uint32(50).fork()).ldelim();
    }
    if (message.contractCallWithToken !== undefined) {
      EventContractCallWithToken.encode(message.contractCallWithToken, writer.uint32(58).fork()).ldelim();
    }
    if (message.transfer !== undefined) {
      EventTransfer.encode(message.transfer, writer.uint32(66).fork()).ldelim();
    }
    if (message.tokenDeployed !== undefined) {
      EventTokenDeployed.encode(message.tokenDeployed, writer.uint32(74).fork()).ldelim();
    }
    if (message.multisigOwnershipTransferred !== undefined) {
      EventMultisigOwnershipTransferred.encode(message.multisigOwnershipTransferred, writer.uint32(82).fork()).ldelim();
    }
    if (message.multisigOperatorshipTransferred !== undefined) {
      EventMultisigOperatorshipTransferred.encode(message.multisigOperatorshipTransferred, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Event {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      status: isSet(object.status) ? event_StatusFromJSON(object.status) : -1,
      tokenSent: isSet(object.tokenSent) ? EventTokenSent.fromJSON(object.tokenSent) : undefined,
      contractCall: isSet(object.contractCall) ? EventContractCall.fromJSON(object.contractCall) : undefined,
      contractCallWithToken: isSet(object.contractCallWithToken) ? EventContractCallWithToken.fromJSON(object.contractCallWithToken) : undefined,
      transfer: isSet(object.transfer) ? EventTransfer.fromJSON(object.transfer) : undefined,
      tokenDeployed: isSet(object.tokenDeployed) ? EventTokenDeployed.fromJSON(object.tokenDeployed) : undefined,
      multisigOwnershipTransferred: isSet(object.multisigOwnershipTransferred) ? EventMultisigOwnershipTransferred.fromJSON(object.multisigOwnershipTransferred) : undefined,
      multisigOperatorshipTransferred: isSet(object.multisigOperatorshipTransferred) ? EventMultisigOperatorshipTransferred.fromJSON(object.multisigOperatorshipTransferred) : undefined
    };
  },
  fromPartial(object: Partial<Event>): Event {
    const message = createBaseEvent();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.tokenSent = object.tokenSent !== undefined && object.tokenSent !== null ? EventTokenSent.fromPartial(object.tokenSent) : undefined;
    message.contractCall = object.contractCall !== undefined && object.contractCall !== null ? EventContractCall.fromPartial(object.contractCall) : undefined;
    message.contractCallWithToken = object.contractCallWithToken !== undefined && object.contractCallWithToken !== null ? EventContractCallWithToken.fromPartial(object.contractCallWithToken) : undefined;
    message.transfer = object.transfer !== undefined && object.transfer !== null ? EventTransfer.fromPartial(object.transfer) : undefined;
    message.tokenDeployed = object.tokenDeployed !== undefined && object.tokenDeployed !== null ? EventTokenDeployed.fromPartial(object.tokenDeployed) : undefined;
    message.multisigOwnershipTransferred = object.multisigOwnershipTransferred !== undefined && object.multisigOwnershipTransferred !== null ? EventMultisigOwnershipTransferred.fromPartial(object.multisigOwnershipTransferred) : undefined;
    message.multisigOperatorshipTransferred = object.multisigOperatorshipTransferred !== undefined && object.multisigOperatorshipTransferred !== null ? EventMultisigOperatorshipTransferred.fromPartial(object.multisigOperatorshipTransferred) : undefined;
    return message;
  },
  fromAmino(object: EventAmino): Event {
    const message = createBaseEvent();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = event_StatusFromJSON(object.status);
    }
    if (object.token_sent !== undefined && object.token_sent !== null) {
      message.tokenSent = EventTokenSent.fromAmino(object.token_sent);
    }
    if (object.contract_call !== undefined && object.contract_call !== null) {
      message.contractCall = EventContractCall.fromAmino(object.contract_call);
    }
    if (object.contract_call_with_token !== undefined && object.contract_call_with_token !== null) {
      message.contractCallWithToken = EventContractCallWithToken.fromAmino(object.contract_call_with_token);
    }
    if (object.transfer !== undefined && object.transfer !== null) {
      message.transfer = EventTransfer.fromAmino(object.transfer);
    }
    if (object.token_deployed !== undefined && object.token_deployed !== null) {
      message.tokenDeployed = EventTokenDeployed.fromAmino(object.token_deployed);
    }
    if (object.multisig_ownership_transferred !== undefined && object.multisig_ownership_transferred !== null) {
      message.multisigOwnershipTransferred = EventMultisigOwnershipTransferred.fromAmino(object.multisig_ownership_transferred);
    }
    if (object.multisig_operatorship_transferred !== undefined && object.multisig_operatorship_transferred !== null) {
      message.multisigOperatorshipTransferred = EventMultisigOperatorshipTransferred.fromAmino(object.multisig_operatorship_transferred);
    }
    return message;
  },
  toAmino(message: Event): EventAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.status = message.status;
    obj.token_sent = message.tokenSent ? EventTokenSent.toAmino(message.tokenSent) : undefined;
    obj.contract_call = message.contractCall ? EventContractCall.toAmino(message.contractCall) : undefined;
    obj.contract_call_with_token = message.contractCallWithToken ? EventContractCallWithToken.toAmino(message.contractCallWithToken) : undefined;
    obj.transfer = message.transfer ? EventTransfer.toAmino(message.transfer) : undefined;
    obj.token_deployed = message.tokenDeployed ? EventTokenDeployed.toAmino(message.tokenDeployed) : undefined;
    obj.multisig_ownership_transferred = message.multisigOwnershipTransferred ? EventMultisigOwnershipTransferred.toAmino(message.multisigOwnershipTransferred) : undefined;
    obj.multisig_operatorship_transferred = message.multisigOperatorshipTransferred ? EventMultisigOperatorshipTransferred.toAmino(message.multisigOperatorshipTransferred) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAminoMsg): Event {
    return Event.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProtoMsg): Event {
    return Event.decode(message.value);
  },
  toProto(message: Event): Uint8Array {
    return Event.encode(message).finish();
  },
  toProtoMsg(message: Event): EventProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Event",
      value: Event.encode(message).finish()
    };
  }
};
function createBaseEventTokenSent(): EventTokenSent {
  return {
    sender: new Uint8Array(),
    destinationChain: "",
    destinationAddress: "",
    symbol: "",
    amount: new Uint8Array()
  };
}
export const EventTokenSent = {
  typeUrl: "/axelar.evm.v1beta1.EventTokenSent",
  encode(message: EventTokenSent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(26).string(message.destinationAddress);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.amount.length !== 0) {
      writer.uint32(42).bytes(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventTokenSent {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventTokenSent>): EventTokenSent {
    const message = createBaseEventTokenSent();
    message.sender = object.sender ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventTokenSentAmino): EventTokenSent {
    const message = createBaseEventTokenSent();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    return message;
  },
  toAmino(message: EventTokenSent): EventTokenSentAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.destination_chain = message.destinationChain;
    obj.destination_address = message.destinationAddress;
    obj.symbol = message.symbol;
    obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventTokenSentAminoMsg): EventTokenSent {
    return EventTokenSent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTokenSentProtoMsg): EventTokenSent {
    return EventTokenSent.decode(message.value);
  },
  toProto(message: EventTokenSent): Uint8Array {
    return EventTokenSent.encode(message).finish();
  },
  toProtoMsg(message: EventTokenSent): EventTokenSentProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventTokenSent",
      value: EventTokenSent.encode(message).finish()
    };
  }
};
function createBaseEventContractCall(): EventContractCall {
  return {
    sender: new Uint8Array(),
    destinationChain: "",
    contractAddress: "",
    payloadHash: new Uint8Array()
  };
}
export const EventContractCall = {
  typeUrl: "/axelar.evm.v1beta1.EventContractCall",
  encode(message: EventContractCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(34).bytes(message.payloadHash);
    }
    return writer;
  },
  fromJSON(object: any): EventContractCall {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventContractCall>): EventContractCall {
    const message = createBaseEventContractCall();
    message.sender = object.sender ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventContractCallAmino): EventContractCall {
    const message = createBaseEventContractCall();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.payload_hash !== undefined && object.payload_hash !== null) {
      message.payloadHash = bytesFromBase64(object.payload_hash);
    }
    return message;
  },
  toAmino(message: EventContractCall): EventContractCallAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.destination_chain = message.destinationChain;
    obj.contract_address = message.contractAddress;
    obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventContractCallAminoMsg): EventContractCall {
    return EventContractCall.fromAmino(object.value);
  },
  fromProtoMsg(message: EventContractCallProtoMsg): EventContractCall {
    return EventContractCall.decode(message.value);
  },
  toProto(message: EventContractCall): Uint8Array {
    return EventContractCall.encode(message).finish();
  },
  toProtoMsg(message: EventContractCall): EventContractCallProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventContractCall",
      value: EventContractCall.encode(message).finish()
    };
  }
};
function createBaseEventContractCallWithToken(): EventContractCallWithToken {
  return {
    sender: new Uint8Array(),
    destinationChain: "",
    contractAddress: "",
    payloadHash: new Uint8Array(),
    symbol: "",
    amount: new Uint8Array()
  };
}
export const EventContractCallWithToken = {
  typeUrl: "/axelar.evm.v1beta1.EventContractCallWithToken",
  encode(message: EventContractCallWithToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(34).bytes(message.payloadHash);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.amount.length !== 0) {
      writer.uint32(50).bytes(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventContractCallWithToken {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventContractCallWithToken>): EventContractCallWithToken {
    const message = createBaseEventContractCallWithToken();
    message.sender = object.sender ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventContractCallWithTokenAmino): EventContractCallWithToken {
    const message = createBaseEventContractCallWithToken();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.payload_hash !== undefined && object.payload_hash !== null) {
      message.payloadHash = bytesFromBase64(object.payload_hash);
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    return message;
  },
  toAmino(message: EventContractCallWithToken): EventContractCallWithTokenAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.destination_chain = message.destinationChain;
    obj.contract_address = message.contractAddress;
    obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
    obj.symbol = message.symbol;
    obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventContractCallWithTokenAminoMsg): EventContractCallWithToken {
    return EventContractCallWithToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventContractCallWithTokenProtoMsg): EventContractCallWithToken {
    return EventContractCallWithToken.decode(message.value);
  },
  toProto(message: EventContractCallWithToken): Uint8Array {
    return EventContractCallWithToken.encode(message).finish();
  },
  toProtoMsg(message: EventContractCallWithToken): EventContractCallWithTokenProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventContractCallWithToken",
      value: EventContractCallWithToken.encode(message).finish()
    };
  }
};
function createBaseEventTransfer(): EventTransfer {
  return {
    to: new Uint8Array(),
    amount: new Uint8Array()
  };
}
export const EventTransfer = {
  typeUrl: "/axelar.evm.v1beta1.EventTransfer",
  encode(message: EventTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    if (message.amount.length !== 0) {
      writer.uint32(18).bytes(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventTransfer {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventTransfer>): EventTransfer {
    const message = createBaseEventTransfer();
    message.to = object.to ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventTransferAmino): EventTransfer {
    const message = createBaseEventTransfer();
    if (object.to !== undefined && object.to !== null) {
      message.to = bytesFromBase64(object.to);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    return message;
  },
  toAmino(message: EventTransfer): EventTransferAmino {
    const obj: any = {};
    obj.to = message.to ? base64FromBytes(message.to) : undefined;
    obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventTransferAminoMsg): EventTransfer {
    return EventTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTransferProtoMsg): EventTransfer {
    return EventTransfer.decode(message.value);
  },
  toProto(message: EventTransfer): Uint8Array {
    return EventTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventTransfer): EventTransferProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventTransfer",
      value: EventTransfer.encode(message).finish()
    };
  }
};
function createBaseEventTokenDeployed(): EventTokenDeployed {
  return {
    symbol: "",
    tokenAddress: new Uint8Array()
  };
}
export const EventTokenDeployed = {
  typeUrl: "/axelar.evm.v1beta1.EventTokenDeployed",
  encode(message: EventTokenDeployed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.tokenAddress.length !== 0) {
      writer.uint32(18).bytes(message.tokenAddress);
    }
    return writer;
  },
  fromJSON(object: any): EventTokenDeployed {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventTokenDeployed>): EventTokenDeployed {
    const message = createBaseEventTokenDeployed();
    message.symbol = object.symbol ?? "";
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventTokenDeployedAmino): EventTokenDeployed {
    const message = createBaseEventTokenDeployed();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.token_address !== undefined && object.token_address !== null) {
      message.tokenAddress = bytesFromBase64(object.token_address);
    }
    return message;
  },
  toAmino(message: EventTokenDeployed): EventTokenDeployedAmino {
    const obj: any = {};
    obj.symbol = message.symbol;
    obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventTokenDeployedAminoMsg): EventTokenDeployed {
    return EventTokenDeployed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTokenDeployedProtoMsg): EventTokenDeployed {
    return EventTokenDeployed.decode(message.value);
  },
  toProto(message: EventTokenDeployed): Uint8Array {
    return EventTokenDeployed.encode(message).finish();
  },
  toProtoMsg(message: EventTokenDeployed): EventTokenDeployedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventTokenDeployed",
      value: EventTokenDeployed.encode(message).finish()
    };
  }
};
function createBaseEventMultisigOwnershipTransferred(): EventMultisigOwnershipTransferred {
  return {
    preOwners: [],
    prevThreshold: new Uint8Array(),
    newOwners: [],
    newThreshold: new Uint8Array()
  };
}
export const EventMultisigOwnershipTransferred = {
  typeUrl: "/axelar.evm.v1beta1.EventMultisigOwnershipTransferred",
  encode(message: EventMultisigOwnershipTransferred, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.preOwners) {
      writer.uint32(10).bytes(v!);
    }
    if (message.prevThreshold.length !== 0) {
      writer.uint32(18).bytes(message.prevThreshold);
    }
    for (const v of message.newOwners) {
      writer.uint32(26).bytes(v!);
    }
    if (message.newThreshold.length !== 0) {
      writer.uint32(34).bytes(message.newThreshold);
    }
    return writer;
  },
  fromJSON(object: any): EventMultisigOwnershipTransferred {
    return {
      preOwners: Array.isArray(object?.preOwners) ? object.preOwners.map((e: any) => bytesFromBase64(e)) : [],
      prevThreshold: isSet(object.prevThreshold) ? bytesFromBase64(object.prevThreshold) : new Uint8Array(),
      newOwners: Array.isArray(object?.newOwners) ? object.newOwners.map((e: any) => bytesFromBase64(e)) : [],
      newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EventMultisigOwnershipTransferred>): EventMultisigOwnershipTransferred {
    const message = createBaseEventMultisigOwnershipTransferred();
    message.preOwners = object.preOwners?.map(e => e) || [];
    message.prevThreshold = object.prevThreshold ?? new Uint8Array();
    message.newOwners = object.newOwners?.map(e => e) || [];
    message.newThreshold = object.newThreshold ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventMultisigOwnershipTransferredAmino): EventMultisigOwnershipTransferred {
    const message = createBaseEventMultisigOwnershipTransferred();
    message.preOwners = object.pre_owners?.map(e => bytesFromBase64(e)) || [];
    if (object.prev_threshold !== undefined && object.prev_threshold !== null) {
      message.prevThreshold = bytesFromBase64(object.prev_threshold);
    }
    message.newOwners = object.new_owners?.map(e => bytesFromBase64(e)) || [];
    if (object.new_threshold !== undefined && object.new_threshold !== null) {
      message.newThreshold = bytesFromBase64(object.new_threshold);
    }
    return message;
  },
  toAmino(message: EventMultisigOwnershipTransferred): EventMultisigOwnershipTransferredAmino {
    const obj: any = {};
    if (message.preOwners) {
      obj.pre_owners = message.preOwners.map(e => base64FromBytes(e));
    } else {
      obj.pre_owners = [];
    }
    obj.prev_threshold = message.prevThreshold ? base64FromBytes(message.prevThreshold) : undefined;
    if (message.newOwners) {
      obj.new_owners = message.newOwners.map(e => base64FromBytes(e));
    } else {
      obj.new_owners = [];
    }
    obj.new_threshold = message.newThreshold ? base64FromBytes(message.newThreshold) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventMultisigOwnershipTransferredAminoMsg): EventMultisigOwnershipTransferred {
    return EventMultisigOwnershipTransferred.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMultisigOwnershipTransferredProtoMsg): EventMultisigOwnershipTransferred {
    return EventMultisigOwnershipTransferred.decode(message.value);
  },
  toProto(message: EventMultisigOwnershipTransferred): Uint8Array {
    return EventMultisigOwnershipTransferred.encode(message).finish();
  },
  toProtoMsg(message: EventMultisigOwnershipTransferred): EventMultisigOwnershipTransferredProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventMultisigOwnershipTransferred",
      value: EventMultisigOwnershipTransferred.encode(message).finish()
    };
  }
};
function createBaseEventMultisigOperatorshipTransferred(): EventMultisigOperatorshipTransferred {
  return {
    newOperators: [],
    newThreshold: new Uint8Array(),
    newWeights: []
  };
}
export const EventMultisigOperatorshipTransferred = {
  typeUrl: "/axelar.evm.v1beta1.EventMultisigOperatorshipTransferred",
  encode(message: EventMultisigOperatorshipTransferred, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.newOperators) {
      writer.uint32(26).bytes(v!);
    }
    if (message.newThreshold.length !== 0) {
      writer.uint32(34).bytes(message.newThreshold);
    }
    for (const v of message.newWeights) {
      writer.uint32(42).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): EventMultisigOperatorshipTransferred {
    return {
      newOperators: Array.isArray(object?.newOperators) ? object.newOperators.map((e: any) => bytesFromBase64(e)) : [],
      newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array(),
      newWeights: Array.isArray(object?.newWeights) ? object.newWeights.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<EventMultisigOperatorshipTransferred>): EventMultisigOperatorshipTransferred {
    const message = createBaseEventMultisigOperatorshipTransferred();
    message.newOperators = object.newOperators?.map(e => e) || [];
    message.newThreshold = object.newThreshold ?? new Uint8Array();
    message.newWeights = object.newWeights?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventMultisigOperatorshipTransferredAmino): EventMultisigOperatorshipTransferred {
    const message = createBaseEventMultisigOperatorshipTransferred();
    message.newOperators = object.new_operators?.map(e => bytesFromBase64(e)) || [];
    if (object.new_threshold !== undefined && object.new_threshold !== null) {
      message.newThreshold = bytesFromBase64(object.new_threshold);
    }
    message.newWeights = object.new_weights?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: EventMultisigOperatorshipTransferred): EventMultisigOperatorshipTransferredAmino {
    const obj: any = {};
    if (message.newOperators) {
      obj.new_operators = message.newOperators.map(e => base64FromBytes(e));
    } else {
      obj.new_operators = [];
    }
    obj.new_threshold = message.newThreshold ? base64FromBytes(message.newThreshold) : undefined;
    if (message.newWeights) {
      obj.new_weights = message.newWeights.map(e => base64FromBytes(e));
    } else {
      obj.new_weights = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventMultisigOperatorshipTransferredAminoMsg): EventMultisigOperatorshipTransferred {
    return EventMultisigOperatorshipTransferred.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMultisigOperatorshipTransferredProtoMsg): EventMultisigOperatorshipTransferred {
    return EventMultisigOperatorshipTransferred.decode(message.value);
  },
  toProto(message: EventMultisigOperatorshipTransferred): Uint8Array {
    return EventMultisigOperatorshipTransferred.encode(message).finish();
  },
  toProtoMsg(message: EventMultisigOperatorshipTransferred): EventMultisigOperatorshipTransferredProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventMultisigOperatorshipTransferred",
      value: EventMultisigOperatorshipTransferred.encode(message).finish()
    };
  }
};
function createBaseNetworkInfo(): NetworkInfo {
  return {
    name: "",
    id: new Uint8Array()
  };
}
export const NetworkInfo = {
  typeUrl: "/axelar.evm.v1beta1.NetworkInfo",
  encode(message: NetworkInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id.length !== 0) {
      writer.uint32(18).bytes(message.id);
    }
    return writer;
  },
  fromJSON(object: any): NetworkInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<NetworkInfo>): NetworkInfo {
    const message = createBaseNetworkInfo();
    message.name = object.name ?? "";
    message.id = object.id ?? new Uint8Array();
    return message;
  },
  fromAmino(object: NetworkInfoAmino): NetworkInfo {
    const message = createBaseNetworkInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    return message;
  },
  toAmino(message: NetworkInfo): NetworkInfoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: NetworkInfoAminoMsg): NetworkInfo {
    return NetworkInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: NetworkInfoProtoMsg): NetworkInfo {
    return NetworkInfo.decode(message.value);
  },
  toProto(message: NetworkInfo): Uint8Array {
    return NetworkInfo.encode(message).finish();
  },
  toProtoMsg(message: NetworkInfo): NetworkInfoProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.NetworkInfo",
      value: NetworkInfo.encode(message).finish()
    };
  }
};
function createBaseBurnerInfo(): BurnerInfo {
  return {
    burnerAddress: new Uint8Array(),
    tokenAddress: new Uint8Array(),
    destinationChain: "",
    symbol: "",
    asset: "",
    salt: new Uint8Array()
  };
}
export const BurnerInfo = {
  typeUrl: "/axelar.evm.v1beta1.BurnerInfo",
  encode(message: BurnerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burnerAddress.length !== 0) {
      writer.uint32(10).bytes(message.burnerAddress);
    }
    if (message.tokenAddress.length !== 0) {
      writer.uint32(18).bytes(message.tokenAddress);
    }
    if (message.destinationChain !== "") {
      writer.uint32(26).string(message.destinationChain);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.asset !== "") {
      writer.uint32(42).string(message.asset);
    }
    if (message.salt.length !== 0) {
      writer.uint32(50).bytes(message.salt);
    }
    return writer;
  },
  fromJSON(object: any): BurnerInfo {
    return {
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
      tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<BurnerInfo>): BurnerInfo {
    const message = createBaseBurnerInfo();
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.symbol = object.symbol ?? "";
    message.asset = object.asset ?? "";
    message.salt = object.salt ?? new Uint8Array();
    return message;
  },
  fromAmino(object: BurnerInfoAmino): BurnerInfo {
    const message = createBaseBurnerInfo();
    if (object.burner_address !== undefined && object.burner_address !== null) {
      message.burnerAddress = bytesFromBase64(object.burner_address);
    }
    if (object.token_address !== undefined && object.token_address !== null) {
      message.tokenAddress = bytesFromBase64(object.token_address);
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    return message;
  },
  toAmino(message: BurnerInfo): BurnerInfoAmino {
    const obj: any = {};
    obj.burner_address = message.burnerAddress ? base64FromBytes(message.burnerAddress) : undefined;
    obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
    obj.destination_chain = message.destinationChain;
    obj.symbol = message.symbol;
    obj.asset = message.asset;
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    return obj;
  },
  fromAminoMsg(object: BurnerInfoAminoMsg): BurnerInfo {
    return BurnerInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnerInfoProtoMsg): BurnerInfo {
    return BurnerInfo.decode(message.value);
  },
  toProto(message: BurnerInfo): Uint8Array {
    return BurnerInfo.encode(message).finish();
  },
  toProtoMsg(message: BurnerInfo): BurnerInfoProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BurnerInfo",
      value: BurnerInfo.encode(message).finish()
    };
  }
};
function createBaseERC20Deposit(): ERC20Deposit {
  return {
    txId: new Uint8Array(),
    amount: new Uint8Array(),
    asset: "",
    destinationChain: "",
    burnerAddress: new Uint8Array(),
    logIndex: BigInt(0)
  };
}
export const ERC20Deposit = {
  typeUrl: "/axelar.evm.v1beta1.ERC20Deposit",
  encode(message: ERC20Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.amount.length !== 0) {
      writer.uint32(18).bytes(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.burnerAddress.length !== 0) {
      writer.uint32(42).bytes(message.burnerAddress);
    }
    if (message.logIndex !== BigInt(0)) {
      writer.uint32(48).uint64(message.logIndex);
    }
    return writer;
  },
  fromJSON(object: any): ERC20Deposit {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
      asset: isSet(object.asset) ? String(object.asset) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
      logIndex: isSet(object.logIndex) ? BigInt(object.logIndex.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ERC20Deposit>): ERC20Deposit {
    const message = createBaseERC20Deposit();
    message.txId = object.txId ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    message.asset = object.asset ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    message.logIndex = object.logIndex !== undefined && object.logIndex !== null ? BigInt(object.logIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ERC20DepositAmino): ERC20Deposit {
    const message = createBaseERC20Deposit();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.burner_address !== undefined && object.burner_address !== null) {
      message.burnerAddress = bytesFromBase64(object.burner_address);
    }
    if (object.log_index !== undefined && object.log_index !== null) {
      message.logIndex = BigInt(object.log_index);
    }
    return message;
  },
  toAmino(message: ERC20Deposit): ERC20DepositAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
    obj.asset = message.asset;
    obj.destination_chain = message.destinationChain;
    obj.burner_address = message.burnerAddress ? base64FromBytes(message.burnerAddress) : undefined;
    obj.log_index = message.logIndex ? message.logIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ERC20DepositAminoMsg): ERC20Deposit {
    return ERC20Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20DepositProtoMsg): ERC20Deposit {
    return ERC20Deposit.decode(message.value);
  },
  toProto(message: ERC20Deposit): Uint8Array {
    return ERC20Deposit.encode(message).finish();
  },
  toProtoMsg(message: ERC20Deposit): ERC20DepositProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ERC20Deposit",
      value: ERC20Deposit.encode(message).finish()
    };
  }
};
function createBaseERC20TokenMetadata(): ERC20TokenMetadata {
  return {
    asset: "",
    chainId: new Uint8Array(),
    details: TokenDetails.fromPartial({}),
    tokenAddress: "",
    txHash: "",
    status: 0,
    isExternal: false,
    burnerCode: new Uint8Array()
  };
}
export const ERC20TokenMetadata = {
  typeUrl: "/axelar.evm.v1beta1.ERC20TokenMetadata",
  encode(message: ERC20TokenMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.chainId.length !== 0) {
      writer.uint32(18).bytes(message.chainId);
    }
    if (message.details !== undefined) {
      TokenDetails.encode(message.details, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenAddress !== "") {
      writer.uint32(34).string(message.tokenAddress);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.isExternal === true) {
      writer.uint32(64).bool(message.isExternal);
    }
    if (message.burnerCode.length !== 0) {
      writer.uint32(74).bytes(message.burnerCode);
    }
    return writer;
  },
  fromJSON(object: any): ERC20TokenMetadata {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      chainId: isSet(object.chainId) ? bytesFromBase64(object.chainId) : new Uint8Array(),
      details: isSet(object.details) ? TokenDetails.fromJSON(object.details) : undefined,
      tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
      burnerCode: isSet(object.burnerCode) ? bytesFromBase64(object.burnerCode) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ERC20TokenMetadata>): ERC20TokenMetadata {
    const message = createBaseERC20TokenMetadata();
    message.asset = object.asset ?? "";
    message.chainId = object.chainId ?? new Uint8Array();
    message.details = object.details !== undefined && object.details !== null ? TokenDetails.fromPartial(object.details) : undefined;
    message.tokenAddress = object.tokenAddress ?? "";
    message.txHash = object.txHash ?? "";
    message.status = object.status ?? 0;
    message.isExternal = object.isExternal ?? false;
    message.burnerCode = object.burnerCode ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ERC20TokenMetadataAmino): ERC20TokenMetadata {
    const message = createBaseERC20TokenMetadata();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = bytesFromBase64(object.chain_id);
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = TokenDetails.fromAmino(object.details);
    }
    if (object.token_address !== undefined && object.token_address !== null) {
      message.tokenAddress = object.token_address;
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = statusFromJSON(object.status);
    }
    if (object.is_external !== undefined && object.is_external !== null) {
      message.isExternal = object.is_external;
    }
    if (object.burner_code !== undefined && object.burner_code !== null) {
      message.burnerCode = bytesFromBase64(object.burner_code);
    }
    return message;
  },
  toAmino(message: ERC20TokenMetadata): ERC20TokenMetadataAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.chain_id = message.chainId ? base64FromBytes(message.chainId) : undefined;
    obj.details = message.details ? TokenDetails.toAmino(message.details) : undefined;
    obj.token_address = message.tokenAddress;
    obj.tx_hash = message.txHash;
    obj.status = message.status;
    obj.is_external = message.isExternal;
    obj.burner_code = message.burnerCode ? base64FromBytes(message.burnerCode) : undefined;
    return obj;
  },
  fromAminoMsg(object: ERC20TokenMetadataAminoMsg): ERC20TokenMetadata {
    return ERC20TokenMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20TokenMetadataProtoMsg): ERC20TokenMetadata {
    return ERC20TokenMetadata.decode(message.value);
  },
  toProto(message: ERC20TokenMetadata): Uint8Array {
    return ERC20TokenMetadata.encode(message).finish();
  },
  toProtoMsg(message: ERC20TokenMetadata): ERC20TokenMetadataProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ERC20TokenMetadata",
      value: ERC20TokenMetadata.encode(message).finish()
    };
  }
};
function createBaseTransactionMetadata(): TransactionMetadata {
  return {
    rawTx: new Uint8Array(),
    pubKey: new Uint8Array()
  };
}
export const TransactionMetadata = {
  typeUrl: "/axelar.evm.v1beta1.TransactionMetadata",
  encode(message: TransactionMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rawTx.length !== 0) {
      writer.uint32(10).bytes(message.rawTx);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }
    return writer;
  },
  fromJSON(object: any): TransactionMetadata {
    return {
      rawTx: isSet(object.rawTx) ? bytesFromBase64(object.rawTx) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<TransactionMetadata>): TransactionMetadata {
    const message = createBaseTransactionMetadata();
    message.rawTx = object.rawTx ?? new Uint8Array();
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TransactionMetadataAmino): TransactionMetadata {
    const message = createBaseTransactionMetadata();
    if (object.raw_tx !== undefined && object.raw_tx !== null) {
      message.rawTx = bytesFromBase64(object.raw_tx);
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    return message;
  },
  toAmino(message: TransactionMetadata): TransactionMetadataAmino {
    const obj: any = {};
    obj.raw_tx = message.rawTx ? base64FromBytes(message.rawTx) : undefined;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionMetadataAminoMsg): TransactionMetadata {
    return TransactionMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionMetadataProtoMsg): TransactionMetadata {
    return TransactionMetadata.decode(message.value);
  },
  toProto(message: TransactionMetadata): Uint8Array {
    return TransactionMetadata.encode(message).finish();
  },
  toProtoMsg(message: TransactionMetadata): TransactionMetadataProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.TransactionMetadata",
      value: TransactionMetadata.encode(message).finish()
    };
  }
};
function createBaseCommand(): Command {
  return {
    id: new Uint8Array(),
    command: "",
    params: new Uint8Array(),
    keyId: "",
    maxGasCost: 0,
    type: 0
  };
}
export const Command = {
  typeUrl: "/axelar.evm.v1beta1.Command",
  encode(message: Command, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.command !== "") {
      writer.uint32(18).string(message.command);
    }
    if (message.params.length !== 0) {
      writer.uint32(26).bytes(message.params);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.maxGasCost !== 0) {
      writer.uint32(40).uint32(message.maxGasCost);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },
  fromJSON(object: any): Command {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      command: isSet(object.command) ? String(object.command) : "",
      params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(),
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0,
      type: isSet(object.type) ? commandTypeFromJSON(object.type) : -1
    };
  },
  fromPartial(object: Partial<Command>): Command {
    const message = createBaseCommand();
    message.id = object.id ?? new Uint8Array();
    message.command = object.command ?? "";
    message.params = object.params ?? new Uint8Array();
    message.keyId = object.keyId ?? "";
    message.maxGasCost = object.maxGasCost ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: CommandAmino): Command {
    const message = createBaseCommand();
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = object.command;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = bytesFromBase64(object.params);
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    if (object.max_gas_cost !== undefined && object.max_gas_cost !== null) {
      message.maxGasCost = object.max_gas_cost;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = commandTypeFromJSON(object.type);
    }
    return message;
  },
  toAmino(message: Command): CommandAmino {
    const obj: any = {};
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
    obj.command = message.command;
    obj.params = message.params ? base64FromBytes(message.params) : undefined;
    obj.key_id = message.keyId;
    obj.max_gas_cost = message.maxGasCost;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: CommandAminoMsg): Command {
    return Command.fromAmino(object.value);
  },
  fromProtoMsg(message: CommandProtoMsg): Command {
    return Command.decode(message.value);
  },
  toProto(message: Command): Uint8Array {
    return Command.encode(message).finish();
  },
  toProtoMsg(message: Command): CommandProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Command",
      value: Command.encode(message).finish()
    };
  }
};
function createBaseCommandBatchMetadata(): CommandBatchMetadata {
  return {
    id: new Uint8Array(),
    commandIds: [],
    data: new Uint8Array(),
    sigHash: new Uint8Array(),
    status: 0,
    keyId: "",
    prevBatchedCommandsId: new Uint8Array(),
    signature: undefined
  };
}
export const CommandBatchMetadata = {
  typeUrl: "/axelar.evm.v1beta1.CommandBatchMetadata",
  encode(message: CommandBatchMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    for (const v of message.commandIds) {
      writer.uint32(18).bytes(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.sigHash.length !== 0) {
      writer.uint32(34).bytes(message.sigHash);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.keyId !== "") {
      writer.uint32(50).string(message.keyId);
    }
    if (message.prevBatchedCommandsId.length !== 0) {
      writer.uint32(58).bytes(message.prevBatchedCommandsId);
    }
    if (message.signature !== undefined) {
      Any.encode((message.signature as Any), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommandBatchMetadata {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      commandIds: Array.isArray(object?.commandIds) ? object.commandIds.map((e: any) => bytesFromBase64(e)) : [],
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sigHash: isSet(object.sigHash) ? bytesFromBase64(object.sigHash) : new Uint8Array(),
      status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : -1,
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      prevBatchedCommandsId: isSet(object.prevBatchedCommandsId) ? bytesFromBase64(object.prevBatchedCommandsId) : new Uint8Array(),
      signature: isSet(object.signature) ? Any.fromJSON(object.signature) : undefined
    };
  },
  fromPartial(object: Partial<CommandBatchMetadata>): CommandBatchMetadata {
    const message = createBaseCommandBatchMetadata();
    message.id = object.id ?? new Uint8Array();
    message.commandIds = object.commandIds?.map(e => e) || [];
    message.data = object.data ?? new Uint8Array();
    message.sigHash = object.sigHash ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.keyId = object.keyId ?? "";
    message.prevBatchedCommandsId = object.prevBatchedCommandsId ?? new Uint8Array();
    message.signature = object.signature !== undefined && object.signature !== null ? Any.fromPartial(object.signature) : undefined;
    return message;
  },
  fromAmino(object: CommandBatchMetadataAmino): CommandBatchMetadata {
    const message = createBaseCommandBatchMetadata();
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    message.commandIds = object.command_ids?.map(e => bytesFromBase64(e)) || [];
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.sig_hash !== undefined && object.sig_hash !== null) {
      message.sigHash = bytesFromBase64(object.sig_hash);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = batchedCommandsStatusFromJSON(object.status);
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    if (object.prev_batched_commands_id !== undefined && object.prev_batched_commands_id !== null) {
      message.prevBatchedCommandsId = bytesFromBase64(object.prev_batched_commands_id);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.signature);
    }
    return message;
  },
  toAmino(message: CommandBatchMetadata): CommandBatchMetadataAmino {
    const obj: any = {};
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
    if (message.commandIds) {
      obj.command_ids = message.commandIds.map(e => base64FromBytes(e));
    } else {
      obj.command_ids = [];
    }
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.sig_hash = message.sigHash ? base64FromBytes(message.sigHash) : undefined;
    obj.status = message.status;
    obj.key_id = message.keyId;
    obj.prev_batched_commands_id = message.prevBatchedCommandsId ? base64FromBytes(message.prevBatchedCommandsId) : undefined;
    obj.signature = message.signature ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino((message.signature as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommandBatchMetadataAminoMsg): CommandBatchMetadata {
    return CommandBatchMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: CommandBatchMetadataProtoMsg): CommandBatchMetadata {
    return CommandBatchMetadata.decode(message.value);
  },
  toProto(message: CommandBatchMetadata): Uint8Array {
    return CommandBatchMetadata.encode(message).finish();
  },
  toProtoMsg(message: CommandBatchMetadata): CommandBatchMetadataProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CommandBatchMetadata",
      value: CommandBatchMetadata.encode(message).finish()
    };
  }
};
function createBaseSigMetadata(): SigMetadata {
  return {
    type: 0,
    chain: "",
    commandBatchId: new Uint8Array()
  };
}
export const SigMetadata = {
  typeUrl: "/axelar.evm.v1beta1.SigMetadata",
  encode(message: SigMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.commandBatchId.length !== 0) {
      writer.uint32(26).bytes(message.commandBatchId);
    }
    return writer;
  },
  fromJSON(object: any): SigMetadata {
    return {
      type: isSet(object.type) ? sigTypeFromJSON(object.type) : -1,
      chain: isSet(object.chain) ? String(object.chain) : "",
      commandBatchId: isSet(object.commandBatchId) ? bytesFromBase64(object.commandBatchId) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SigMetadata>): SigMetadata {
    const message = createBaseSigMetadata();
    message.type = object.type ?? 0;
    message.chain = object.chain ?? "";
    message.commandBatchId = object.commandBatchId ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SigMetadataAmino): SigMetadata {
    const message = createBaseSigMetadata();
    if (object.type !== undefined && object.type !== null) {
      message.type = sigTypeFromJSON(object.type);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.command_batch_id !== undefined && object.command_batch_id !== null) {
      message.commandBatchId = bytesFromBase64(object.command_batch_id);
    }
    return message;
  },
  toAmino(message: SigMetadata): SigMetadataAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.chain = message.chain;
    obj.command_batch_id = message.commandBatchId ? base64FromBytes(message.commandBatchId) : undefined;
    return obj;
  },
  fromAminoMsg(object: SigMetadataAminoMsg): SigMetadata {
    return SigMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: SigMetadataProtoMsg): SigMetadata {
    return SigMetadata.decode(message.value);
  },
  toProto(message: SigMetadata): Uint8Array {
    return SigMetadata.encode(message).finish();
  },
  toProtoMsg(message: SigMetadata): SigMetadataProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.SigMetadata",
      value: SigMetadata.encode(message).finish()
    };
  }
};
function createBaseTransferKey(): TransferKey {
  return {
    txId: new Uint8Array(),
    nextKeyId: ""
  };
}
export const TransferKey = {
  typeUrl: "/axelar.evm.v1beta1.TransferKey",
  encode(message: TransferKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.nextKeyId !== "") {
      writer.uint32(26).string(message.nextKeyId);
    }
    return writer;
  },
  fromJSON(object: any): TransferKey {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      nextKeyId: isSet(object.nextKeyId) ? String(object.nextKeyId) : ""
    };
  },
  fromPartial(object: Partial<TransferKey>): TransferKey {
    const message = createBaseTransferKey();
    message.txId = object.txId ?? new Uint8Array();
    message.nextKeyId = object.nextKeyId ?? "";
    return message;
  },
  fromAmino(object: TransferKeyAmino): TransferKey {
    const message = createBaseTransferKey();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.next_key_id !== undefined && object.next_key_id !== null) {
      message.nextKeyId = object.next_key_id;
    }
    return message;
  },
  toAmino(message: TransferKey): TransferKeyAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.next_key_id = message.nextKeyId;
    return obj;
  },
  fromAminoMsg(object: TransferKeyAminoMsg): TransferKey {
    return TransferKey.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferKeyProtoMsg): TransferKey {
    return TransferKey.decode(message.value);
  },
  toProto(message: TransferKey): Uint8Array {
    return TransferKey.encode(message).finish();
  },
  toProtoMsg(message: TransferKey): TransferKeyProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.TransferKey",
      value: TransferKey.encode(message).finish()
    };
  }
};
function createBaseAsset(): Asset {
  return {
    chain: "",
    name: ""
  };
}
export const Asset = {
  typeUrl: "/axelar.evm.v1beta1.Asset",
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): Asset {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.chain = object.chain ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    const message = createBaseAsset();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProtoMsg): Asset {
    return Asset.decode(message.value);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
function createBaseTokenDetails(): TokenDetails {
  return {
    tokenName: "",
    symbol: "",
    decimals: 0,
    capacity: new Uint8Array()
  };
}
export const TokenDetails = {
  typeUrl: "/axelar.evm.v1beta1.TokenDetails",
  encode(message: TokenDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenName !== "") {
      writer.uint32(10).string(message.tokenName);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.decimals !== 0) {
      writer.uint32(24).uint32(message.decimals);
    }
    if (message.capacity.length !== 0) {
      writer.uint32(34).bytes(message.capacity);
    }
    return writer;
  },
  fromJSON(object: any): TokenDetails {
    return {
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      capacity: isSet(object.capacity) ? bytesFromBase64(object.capacity) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<TokenDetails>): TokenDetails {
    const message = createBaseTokenDetails();
    message.tokenName = object.tokenName ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    message.capacity = object.capacity ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TokenDetailsAmino): TokenDetails {
    const message = createBaseTokenDetails();
    if (object.token_name !== undefined && object.token_name !== null) {
      message.tokenName = object.token_name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals;
    }
    if (object.capacity !== undefined && object.capacity !== null) {
      message.capacity = bytesFromBase64(object.capacity);
    }
    return message;
  },
  toAmino(message: TokenDetails): TokenDetailsAmino {
    const obj: any = {};
    obj.token_name = message.tokenName;
    obj.symbol = message.symbol;
    obj.decimals = message.decimals;
    obj.capacity = message.capacity ? base64FromBytes(message.capacity) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenDetailsAminoMsg): TokenDetails {
    return TokenDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenDetailsProtoMsg): TokenDetails {
    return TokenDetails.decode(message.value);
  },
  toProto(message: TokenDetails): Uint8Array {
    return TokenDetails.encode(message).finish();
  },
  toProtoMsg(message: TokenDetails): TokenDetailsProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.TokenDetails",
      value: TokenDetails.encode(message).finish()
    };
  }
};
function createBaseGateway(): Gateway {
  return {
    address: new Uint8Array()
  };
}
export const Gateway = {
  typeUrl: "/axelar.evm.v1beta1.Gateway",
  encode(message: Gateway, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    return writer;
  },
  fromJSON(object: any): Gateway {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Gateway>): Gateway {
    const message = createBaseGateway();
    message.address = object.address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GatewayAmino): Gateway {
    const message = createBaseGateway();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    return message;
  },
  toAmino(message: Gateway): GatewayAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    return obj;
  },
  fromAminoMsg(object: GatewayAminoMsg): Gateway {
    return Gateway.fromAmino(object.value);
  },
  fromProtoMsg(message: GatewayProtoMsg): Gateway {
    return Gateway.decode(message.value);
  },
  toProto(message: Gateway): Uint8Array {
    return Gateway.encode(message).finish();
  },
  toProtoMsg(message: Gateway): GatewayProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Gateway",
      value: Gateway.encode(message).finish()
    };
  }
};
function createBasePollMetadata(): PollMetadata {
  return {
    chain: "",
    txId: new Uint8Array()
  };
}
export const PollMetadata = {
  typeUrl: "/axelar.evm.v1beta1.PollMetadata",
  encode(message: PollMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(18).bytes(message.txId);
    }
    return writer;
  },
  fromJSON(object: any): PollMetadata {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PollMetadata>): PollMetadata {
    const message = createBasePollMetadata();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PollMetadataAmino): PollMetadata {
    const message = createBasePollMetadata();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    return message;
  },
  toAmino(message: PollMetadata): PollMetadataAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    return obj;
  },
  fromAminoMsg(object: PollMetadataAminoMsg): PollMetadata {
    return PollMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: PollMetadataProtoMsg): PollMetadata {
    return PollMetadata.decode(message.value);
  },
  toProto(message: PollMetadata): Uint8Array {
    return PollMetadata.encode(message).finish();
  },
  toProtoMsg(message: PollMetadata): PollMetadataProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PollMetadata",
      value: PollMetadata.encode(message).finish()
    };
  }
};
export const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Github_com_cosmos_codec_ProtoMarshaler_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Github_com_cosmos_codec_ProtoMarshaler_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};