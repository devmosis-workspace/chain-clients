import { BatchedCommandsStatus, DepositStatus, Event, EventAmino, EventSDKType, BurnerInfo, BurnerInfoAmino, BurnerInfoSDKType, TokenDetails, TokenDetailsAmino, TokenDetailsSDKType, batchedCommandsStatusFromJSON, depositStatusFromJSON } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, isObject } from "../../../helpers";
export enum ChainStatus {
  CHAIN_STATUS_UNSPECIFIED = 0,
  CHAIN_STATUS_ACTIVATED = 1,
  CHAIN_STATUS_DEACTIVATED = 2,
  UNRECOGNIZED = -1,
}
export const ChainStatusSDKType = ChainStatus;
export const ChainStatusAmino = ChainStatus;
export function chainStatusFromJSON(object: any): ChainStatus {
  switch (object) {
    case 0:
    case "CHAIN_STATUS_UNSPECIFIED":
      return ChainStatus.CHAIN_STATUS_UNSPECIFIED;
    case 1:
    case "CHAIN_STATUS_ACTIVATED":
      return ChainStatus.CHAIN_STATUS_ACTIVATED;
    case 2:
    case "CHAIN_STATUS_DEACTIVATED":
      return ChainStatus.CHAIN_STATUS_DEACTIVATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChainStatus.UNRECOGNIZED;
  }
}
export function chainStatusToJSON(object: ChainStatus): string {
  switch (object) {
    case ChainStatus.CHAIN_STATUS_UNSPECIFIED:
      return "CHAIN_STATUS_UNSPECIFIED";
    case ChainStatus.CHAIN_STATUS_ACTIVATED:
      return "CHAIN_STATUS_ACTIVATED";
    case ChainStatus.CHAIN_STATUS_DEACTIVATED:
      return "CHAIN_STATUS_DEACTIVATED";
    case ChainStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum TokenType {
  TOKEN_TYPE_UNSPECIFIED = 0,
  TOKEN_TYPE_INTERNAL = 1,
  TOKEN_TYPE_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export const TokenTypeSDKType = TokenType;
export const TokenTypeAmino = TokenType;
export function tokenTypeFromJSON(object: any): TokenType {
  switch (object) {
    case 0:
    case "TOKEN_TYPE_UNSPECIFIED":
      return TokenType.TOKEN_TYPE_UNSPECIFIED;
    case 1:
    case "TOKEN_TYPE_INTERNAL":
      return TokenType.TOKEN_TYPE_INTERNAL;
    case 2:
    case "TOKEN_TYPE_EXTERNAL":
      return TokenType.TOKEN_TYPE_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenType.UNRECOGNIZED;
  }
}
export function tokenTypeToJSON(object: TokenType): string {
  switch (object) {
    case TokenType.TOKEN_TYPE_UNSPECIFIED:
      return "TOKEN_TYPE_UNSPECIFIED";
    case TokenType.TOKEN_TYPE_INTERNAL:
      return "TOKEN_TYPE_INTERNAL";
    case TokenType.TOKEN_TYPE_EXTERNAL:
      return "TOKEN_TYPE_EXTERNAL";
    case TokenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParams {
  address: string;
  asset: string;
  chain: string;
}
export interface DepositQueryParamsProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.DepositQueryParams";
  value: Uint8Array;
}
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParamsAmino {
  address: string;
  asset: string;
  chain: string;
}
export interface DepositQueryParamsAminoMsg {
  type: "/axelar.evm.v1beta1.DepositQueryParams";
  value: DepositQueryParamsAmino;
}
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParamsSDKType {
  address: string;
  asset: string;
  chain: string;
}
export interface BatchedCommandsRequest {
  chain: string;
  /**
   * id defines an optional id for the commandsbatch. If not specified the
   * latest will be returned
   */
  id: string;
}
export interface BatchedCommandsRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.BatchedCommandsRequest";
  value: Uint8Array;
}
export interface BatchedCommandsRequestAmino {
  chain: string;
  /**
   * id defines an optional id for the commandsbatch. If not specified the
   * latest will be returned
   */
  id: string;
}
export interface BatchedCommandsRequestAminoMsg {
  type: "/axelar.evm.v1beta1.BatchedCommandsRequest";
  value: BatchedCommandsRequestAmino;
}
export interface BatchedCommandsRequestSDKType {
  chain: string;
  id: string;
}
export interface BatchedCommandsResponse {
  id: string;
  data: string;
  status: BatchedCommandsStatus;
  keyId: string;
  executeData: string;
  prevBatchedCommandsId: string;
  commandIds: string[];
  proof: Proof;
}
export interface BatchedCommandsResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.BatchedCommandsResponse";
  value: Uint8Array;
}
export interface BatchedCommandsResponseAmino {
  id: string;
  data: string;
  status: BatchedCommandsStatus;
  key_id: string;
  execute_data: string;
  prev_batched_commands_id: string;
  command_ids: string[];
  proof?: ProofAmino;
}
export interface BatchedCommandsResponseAminoMsg {
  type: "/axelar.evm.v1beta1.BatchedCommandsResponse";
  value: BatchedCommandsResponseAmino;
}
export interface BatchedCommandsResponseSDKType {
  id: string;
  data: string;
  status: BatchedCommandsStatus;
  key_id: string;
  execute_data: string;
  prev_batched_commands_id: string;
  command_ids: string[];
  proof: ProofSDKType;
}
export interface KeyAddressRequest {
  chain: string;
  keyId: string;
}
export interface KeyAddressRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.KeyAddressRequest";
  value: Uint8Array;
}
export interface KeyAddressRequestAmino {
  chain: string;
  key_id: string;
}
export interface KeyAddressRequestAminoMsg {
  type: "/axelar.evm.v1beta1.KeyAddressRequest";
  value: KeyAddressRequestAmino;
}
export interface KeyAddressRequestSDKType {
  chain: string;
  key_id: string;
}
export interface KeyAddressResponse {
  keyId: string;
  addresses: KeyAddressResponse_WeightedAddress[];
  threshold: string;
}
export interface KeyAddressResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.KeyAddressResponse";
  value: Uint8Array;
}
export interface KeyAddressResponseAmino {
  key_id: string;
  addresses: KeyAddressResponse_WeightedAddressAmino[];
  threshold: string;
}
export interface KeyAddressResponseAminoMsg {
  type: "/axelar.evm.v1beta1.KeyAddressResponse";
  value: KeyAddressResponseAmino;
}
export interface KeyAddressResponseSDKType {
  key_id: string;
  addresses: KeyAddressResponse_WeightedAddressSDKType[];
  threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
  address: string;
  weight: string;
}
export interface KeyAddressResponse_WeightedAddressProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.WeightedAddress";
  value: Uint8Array;
}
export interface KeyAddressResponse_WeightedAddressAmino {
  address: string;
  weight: string;
}
export interface KeyAddressResponse_WeightedAddressAminoMsg {
  type: "/axelar.evm.v1beta1.WeightedAddress";
  value: KeyAddressResponse_WeightedAddressAmino;
}
export interface KeyAddressResponse_WeightedAddressSDKType {
  address: string;
  weight: string;
}
/** @deprecated */
export interface QueryTokenAddressResponse {
  address: string;
  confirmed: boolean;
}
export interface QueryTokenAddressResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.QueryTokenAddressResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryTokenAddressResponseAmino {
  address: string;
  confirmed: boolean;
}
export interface QueryTokenAddressResponseAminoMsg {
  type: "/axelar.evm.v1beta1.QueryTokenAddressResponse";
  value: QueryTokenAddressResponseAmino;
}
/** @deprecated */
export interface QueryTokenAddressResponseSDKType {
  address: string;
  confirmed: boolean;
}
/** @deprecated */
export interface QueryDepositStateParams {
  txId: Uint8Array;
  burnerAddress: Uint8Array;
}
export interface QueryDepositStateParamsProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.QueryDepositStateParams";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryDepositStateParamsAmino {
  tx_id: Uint8Array;
  burner_address: Uint8Array;
}
export interface QueryDepositStateParamsAminoMsg {
  type: "/axelar.evm.v1beta1.QueryDepositStateParams";
  value: QueryDepositStateParamsAmino;
}
/** @deprecated */
export interface QueryDepositStateParamsSDKType {
  tx_id: Uint8Array;
  burner_address: Uint8Array;
}
/** @deprecated */
export interface DepositStateRequest {
  chain: string;
  params: QueryDepositStateParams;
}
export interface DepositStateRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.DepositStateRequest";
  value: Uint8Array;
}
/** @deprecated */
export interface DepositStateRequestAmino {
  chain: string;
  params?: QueryDepositStateParamsAmino;
}
export interface DepositStateRequestAminoMsg {
  type: "/axelar.evm.v1beta1.DepositStateRequest";
  value: DepositStateRequestAmino;
}
/** @deprecated */
export interface DepositStateRequestSDKType {
  chain: string;
  params: QueryDepositStateParamsSDKType;
}
/** @deprecated */
export interface DepositStateResponse {
  status: DepositStatus;
}
export interface DepositStateResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.DepositStateResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface DepositStateResponseAmino {
  status: DepositStatus;
}
export interface DepositStateResponseAminoMsg {
  type: "/axelar.evm.v1beta1.DepositStateResponse";
  value: DepositStateResponseAmino;
}
/** @deprecated */
export interface DepositStateResponseSDKType {
  status: DepositStatus;
}
export interface EventRequest {
  chain: string;
  eventId: string;
}
export interface EventRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.EventRequest";
  value: Uint8Array;
}
export interface EventRequestAmino {
  chain: string;
  event_id: string;
}
export interface EventRequestAminoMsg {
  type: "/axelar.evm.v1beta1.EventRequest";
  value: EventRequestAmino;
}
export interface EventRequestSDKType {
  chain: string;
  event_id: string;
}
export interface EventResponse {
  event: Event;
}
export interface EventResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.EventResponse";
  value: Uint8Array;
}
export interface EventResponseAmino {
  event?: EventAmino;
}
export interface EventResponseAminoMsg {
  type: "/axelar.evm.v1beta1.EventResponse";
  value: EventResponseAmino;
}
export interface EventResponseSDKType {
  event: EventSDKType;
}
export interface QueryBurnerAddressResponse {
  address: string;
}
export interface QueryBurnerAddressResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.QueryBurnerAddressResponse";
  value: Uint8Array;
}
export interface QueryBurnerAddressResponseAmino {
  address: string;
}
export interface QueryBurnerAddressResponseAminoMsg {
  type: "/axelar.evm.v1beta1.QueryBurnerAddressResponse";
  value: QueryBurnerAddressResponseAmino;
}
export interface QueryBurnerAddressResponseSDKType {
  address: string;
}
export interface ChainsRequest {
  status: ChainStatus;
}
export interface ChainsRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ChainsRequest";
  value: Uint8Array;
}
export interface ChainsRequestAmino {
  status: ChainStatus;
}
export interface ChainsRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ChainsRequest";
  value: ChainsRequestAmino;
}
export interface ChainsRequestSDKType {
  status: ChainStatus;
}
export interface ChainsResponse {
  chains: string[];
}
export interface ChainsResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ChainsResponse";
  value: Uint8Array;
}
export interface ChainsResponseAmino {
  chains: string[];
}
export interface ChainsResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ChainsResponse";
  value: ChainsResponseAmino;
}
export interface ChainsResponseSDKType {
  chains: string[];
}
export interface CommandRequest {
  chain: string;
  id: string;
}
export interface CommandRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CommandRequest";
  value: Uint8Array;
}
export interface CommandRequestAmino {
  chain: string;
  id: string;
}
export interface CommandRequestAminoMsg {
  type: "/axelar.evm.v1beta1.CommandRequest";
  value: CommandRequestAmino;
}
export interface CommandRequestSDKType {
  chain: string;
  id: string;
}
export interface CommandResponse_ParamsEntry {
  key: string;
  value: string;
}
export interface CommandResponse_ParamsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface CommandResponse_ParamsEntryAmino {
  key: string;
  value: string;
}
export interface CommandResponse_ParamsEntryAminoMsg {
  type: string;
  value: CommandResponse_ParamsEntryAmino;
}
export interface CommandResponse_ParamsEntrySDKType {
  key: string;
  value: string;
}
export interface CommandResponse {
  id: string;
  type: string;
  params: {
    [key: string]: string;
  };
  keyId: string;
  maxGasCost: number;
}
export interface CommandResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CommandResponse";
  value: Uint8Array;
}
export interface CommandResponseAmino {
  id: string;
  type: string;
  params: {
    [key: string]: string;
  };
  key_id: string;
  max_gas_cost: number;
}
export interface CommandResponseAminoMsg {
  type: "/axelar.evm.v1beta1.CommandResponse";
  value: CommandResponseAmino;
}
export interface CommandResponseSDKType {
  id: string;
  type: string;
  params: {
    [key: string]: string;
  };
  key_id: string;
  max_gas_cost: number;
}
export interface PendingCommandsRequest {
  chain: string;
}
export interface PendingCommandsRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.PendingCommandsRequest";
  value: Uint8Array;
}
export interface PendingCommandsRequestAmino {
  chain: string;
}
export interface PendingCommandsRequestAminoMsg {
  type: "/axelar.evm.v1beta1.PendingCommandsRequest";
  value: PendingCommandsRequestAmino;
}
export interface PendingCommandsRequestSDKType {
  chain: string;
}
export interface PendingCommandsResponse {
  commands: QueryCommandResponse[];
}
export interface PendingCommandsResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.PendingCommandsResponse";
  value: Uint8Array;
}
export interface PendingCommandsResponseAmino {
  commands: QueryCommandResponseAmino[];
}
export interface PendingCommandsResponseAminoMsg {
  type: "/axelar.evm.v1beta1.PendingCommandsResponse";
  value: PendingCommandsResponseAmino;
}
export interface PendingCommandsResponseSDKType {
  commands: QueryCommandResponseSDKType[];
}
export interface QueryCommandResponse_ParamsEntry {
  key: string;
  value: string;
}
export interface QueryCommandResponse_ParamsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QueryCommandResponse_ParamsEntryAmino {
  key: string;
  value: string;
}
export interface QueryCommandResponse_ParamsEntryAminoMsg {
  type: string;
  value: QueryCommandResponse_ParamsEntryAmino;
}
export interface QueryCommandResponse_ParamsEntrySDKType {
  key: string;
  value: string;
}
export interface QueryCommandResponse {
  id: string;
  type: string;
  params: {
    [key: string]: string;
  };
  keyId: string;
  maxGasCost: number;
}
export interface QueryCommandResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.QueryCommandResponse";
  value: Uint8Array;
}
export interface QueryCommandResponseAmino {
  id: string;
  type: string;
  params: {
    [key: string]: string;
  };
  key_id: string;
  max_gas_cost: number;
}
export interface QueryCommandResponseAminoMsg {
  type: "/axelar.evm.v1beta1.QueryCommandResponse";
  value: QueryCommandResponseAmino;
}
export interface QueryCommandResponseSDKType {
  id: string;
  type: string;
  params: {
    [key: string]: string;
  };
  key_id: string;
  max_gas_cost: number;
}
export interface BurnerInfoRequest {
  address: Uint8Array;
}
export interface BurnerInfoRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.BurnerInfoRequest";
  value: Uint8Array;
}
export interface BurnerInfoRequestAmino {
  address: Uint8Array;
}
export interface BurnerInfoRequestAminoMsg {
  type: "/axelar.evm.v1beta1.BurnerInfoRequest";
  value: BurnerInfoRequestAmino;
}
export interface BurnerInfoRequestSDKType {
  address: Uint8Array;
}
export interface BurnerInfoResponse {
  chain: string;
  burnerInfo: BurnerInfo;
}
export interface BurnerInfoResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.BurnerInfoResponse";
  value: Uint8Array;
}
export interface BurnerInfoResponseAmino {
  chain: string;
  burner_info?: BurnerInfoAmino;
}
export interface BurnerInfoResponseAminoMsg {
  type: "/axelar.evm.v1beta1.BurnerInfoResponse";
  value: BurnerInfoResponseAmino;
}
export interface BurnerInfoResponseSDKType {
  chain: string;
  burner_info: BurnerInfoSDKType;
}
export interface ConfirmationHeightRequest {
  chain: string;
}
export interface ConfirmationHeightRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightRequest";
  value: Uint8Array;
}
export interface ConfirmationHeightRequestAmino {
  chain: string;
}
export interface ConfirmationHeightRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmationHeightRequest";
  value: ConfirmationHeightRequestAmino;
}
export interface ConfirmationHeightRequestSDKType {
  chain: string;
}
export interface ConfirmationHeightResponse {
  height: bigint;
}
export interface ConfirmationHeightResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightResponse";
  value: Uint8Array;
}
export interface ConfirmationHeightResponseAmino {
  height: string;
}
export interface ConfirmationHeightResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmationHeightResponse";
  value: ConfirmationHeightResponseAmino;
}
export interface ConfirmationHeightResponseSDKType {
  height: bigint;
}
export interface GatewayAddressRequest {
  chain: string;
}
export interface GatewayAddressRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.GatewayAddressRequest";
  value: Uint8Array;
}
export interface GatewayAddressRequestAmino {
  chain: string;
}
export interface GatewayAddressRequestAminoMsg {
  type: "/axelar.evm.v1beta1.GatewayAddressRequest";
  value: GatewayAddressRequestAmino;
}
export interface GatewayAddressRequestSDKType {
  chain: string;
}
export interface GatewayAddressResponse {
  address: string;
}
export interface GatewayAddressResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.GatewayAddressResponse";
  value: Uint8Array;
}
export interface GatewayAddressResponseAmino {
  address: string;
}
export interface GatewayAddressResponseAminoMsg {
  type: "/axelar.evm.v1beta1.GatewayAddressResponse";
  value: GatewayAddressResponseAmino;
}
export interface GatewayAddressResponseSDKType {
  address: string;
}
export interface BytecodeRequest {
  chain: string;
  contract: string;
}
export interface BytecodeRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.BytecodeRequest";
  value: Uint8Array;
}
export interface BytecodeRequestAmino {
  chain: string;
  contract: string;
}
export interface BytecodeRequestAminoMsg {
  type: "/axelar.evm.v1beta1.BytecodeRequest";
  value: BytecodeRequestAmino;
}
export interface BytecodeRequestSDKType {
  chain: string;
  contract: string;
}
export interface BytecodeResponse {
  bytecode: string;
}
export interface BytecodeResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.BytecodeResponse";
  value: Uint8Array;
}
export interface BytecodeResponseAmino {
  bytecode: string;
}
export interface BytecodeResponseAminoMsg {
  type: "/axelar.evm.v1beta1.BytecodeResponse";
  value: BytecodeResponseAmino;
}
export interface BytecodeResponseSDKType {
  bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
  chain: string;
  type: TokenType;
}
export interface ERC20TokensRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ERC20TokensRequest";
  value: Uint8Array;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequestAmino {
  chain: string;
  type: TokenType;
}
export interface ERC20TokensRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ERC20TokensRequest";
  value: ERC20TokensRequestAmino;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequestSDKType {
  chain: string;
  type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
  tokens: ERC20TokensResponse_Token[];
}
export interface ERC20TokensResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ERC20TokensResponse";
  value: Uint8Array;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponseAmino {
  tokens: ERC20TokensResponse_TokenAmino[];
}
export interface ERC20TokensResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ERC20TokensResponse";
  value: ERC20TokensResponseAmino;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponseSDKType {
  tokens: ERC20TokensResponse_TokenSDKType[];
}
export interface ERC20TokensResponse_Token {
  asset: string;
  symbol: string;
}
export interface ERC20TokensResponse_TokenProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.Token";
  value: Uint8Array;
}
export interface ERC20TokensResponse_TokenAmino {
  asset: string;
  symbol: string;
}
export interface ERC20TokensResponse_TokenAminoMsg {
  type: "/axelar.evm.v1beta1.Token";
  value: ERC20TokensResponse_TokenAmino;
}
export interface ERC20TokensResponse_TokenSDKType {
  asset: string;
  symbol: string;
}
export interface TokenInfoRequest {
  chain: string;
  asset?: string;
  symbol?: string;
  address?: string;
}
export interface TokenInfoRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.TokenInfoRequest";
  value: Uint8Array;
}
export interface TokenInfoRequestAmino {
  chain: string;
  asset?: string;
  symbol?: string;
  address?: string;
}
export interface TokenInfoRequestAminoMsg {
  type: "/axelar.evm.v1beta1.TokenInfoRequest";
  value: TokenInfoRequestAmino;
}
export interface TokenInfoRequestSDKType {
  chain: string;
  asset?: string;
  symbol?: string;
  address?: string;
}
export interface TokenInfoResponse {
  asset: string;
  details: TokenDetails;
  address: string;
  confirmed: boolean;
  isExternal: boolean;
  burnerCodeHash: string;
}
export interface TokenInfoResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.TokenInfoResponse";
  value: Uint8Array;
}
export interface TokenInfoResponseAmino {
  asset: string;
  details?: TokenDetailsAmino;
  address: string;
  confirmed: boolean;
  is_external: boolean;
  burner_code_hash: string;
}
export interface TokenInfoResponseAminoMsg {
  type: "/axelar.evm.v1beta1.TokenInfoResponse";
  value: TokenInfoResponseAmino;
}
export interface TokenInfoResponseSDKType {
  asset: string;
  details: TokenDetailsSDKType;
  address: string;
  confirmed: boolean;
  is_external: boolean;
  burner_code_hash: string;
}
export interface Proof {
  addresses: string[];
  weights: string[];
  threshold: string;
  signatures: string[];
}
export interface ProofProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.Proof";
  value: Uint8Array;
}
export interface ProofAmino {
  addresses: string[];
  weights: string[];
  threshold: string;
  signatures: string[];
}
export interface ProofAminoMsg {
  type: "/axelar.evm.v1beta1.Proof";
  value: ProofAmino;
}
export interface ProofSDKType {
  addresses: string[];
  weights: string[];
  threshold: string;
  signatures: string[];
}
function createBaseDepositQueryParams(): DepositQueryParams {
  return {
    address: "",
    asset: "",
    chain: ""
  };
}
export const DepositQueryParams = {
  typeUrl: "/axelar.evm.v1beta1.DepositQueryParams",
  encode(message: DepositQueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.chain !== "") {
      writer.uint32(26).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): DepositQueryParams {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<DepositQueryParams>): DepositQueryParams {
    const message = createBaseDepositQueryParams();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: DepositQueryParamsAmino): DepositQueryParams {
    return {
      address: object.address,
      asset: object.asset,
      chain: object.chain
    };
  },
  toAmino(message: DepositQueryParams): DepositQueryParamsAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.asset = message.asset;
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: DepositQueryParamsAminoMsg): DepositQueryParams {
    return DepositQueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositQueryParamsProtoMsg): DepositQueryParams {
    return DepositQueryParams.decode(message.value);
  },
  toProto(message: DepositQueryParams): Uint8Array {
    return DepositQueryParams.encode(message).finish();
  },
  toProtoMsg(message: DepositQueryParams): DepositQueryParamsProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.DepositQueryParams",
      value: DepositQueryParams.encode(message).finish()
    };
  }
};
function createBaseBatchedCommandsRequest(): BatchedCommandsRequest {
  return {
    chain: "",
    id: ""
  };
}
export const BatchedCommandsRequest = {
  typeUrl: "/axelar.evm.v1beta1.BatchedCommandsRequest",
  encode(message: BatchedCommandsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): BatchedCommandsRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<BatchedCommandsRequest>): BatchedCommandsRequest {
    const message = createBaseBatchedCommandsRequest();
    message.chain = object.chain ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: BatchedCommandsRequestAmino): BatchedCommandsRequest {
    return {
      chain: object.chain,
      id: object.id
    };
  },
  toAmino(message: BatchedCommandsRequest): BatchedCommandsRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: BatchedCommandsRequestAminoMsg): BatchedCommandsRequest {
    return BatchedCommandsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchedCommandsRequestProtoMsg): BatchedCommandsRequest {
    return BatchedCommandsRequest.decode(message.value);
  },
  toProto(message: BatchedCommandsRequest): Uint8Array {
    return BatchedCommandsRequest.encode(message).finish();
  },
  toProtoMsg(message: BatchedCommandsRequest): BatchedCommandsRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BatchedCommandsRequest",
      value: BatchedCommandsRequest.encode(message).finish()
    };
  }
};
function createBaseBatchedCommandsResponse(): BatchedCommandsResponse {
  return {
    id: "",
    data: "",
    status: 0,
    keyId: "",
    executeData: "",
    prevBatchedCommandsId: "",
    commandIds: [],
    proof: Proof.fromPartial({})
  };
}
export const BatchedCommandsResponse = {
  typeUrl: "/axelar.evm.v1beta1.BatchedCommandsResponse",
  encode(message: BatchedCommandsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.executeData !== "") {
      writer.uint32(50).string(message.executeData);
    }
    if (message.prevBatchedCommandsId !== "") {
      writer.uint32(58).string(message.prevBatchedCommandsId);
    }
    for (const v of message.commandIds) {
      writer.uint32(66).string(v!);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BatchedCommandsResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      data: isSet(object.data) ? String(object.data) : "",
      status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : -1,
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      executeData: isSet(object.executeData) ? String(object.executeData) : "",
      prevBatchedCommandsId: isSet(object.prevBatchedCommandsId) ? String(object.prevBatchedCommandsId) : "",
      commandIds: Array.isArray(object?.commandIds) ? object.commandIds.map((e: any) => String(e)) : [],
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
    };
  },
  fromPartial(object: Partial<BatchedCommandsResponse>): BatchedCommandsResponse {
    const message = createBaseBatchedCommandsResponse();
    message.id = object.id ?? "";
    message.data = object.data ?? "";
    message.status = object.status ?? 0;
    message.keyId = object.keyId ?? "";
    message.executeData = object.executeData ?? "";
    message.prevBatchedCommandsId = object.prevBatchedCommandsId ?? "";
    message.commandIds = object.commandIds?.map(e => e) || [];
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino(object: BatchedCommandsResponseAmino): BatchedCommandsResponse {
    return {
      id: object.id,
      data: object.data,
      status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : -1,
      keyId: object.key_id,
      executeData: object.execute_data,
      prevBatchedCommandsId: object.prev_batched_commands_id,
      commandIds: Array.isArray(object?.command_ids) ? object.command_ids.map((e: any) => e) : [],
      proof: object?.proof ? Proof.fromAmino(object.proof) : undefined
    };
  },
  toAmino(message: BatchedCommandsResponse): BatchedCommandsResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.data = message.data;
    obj.status = message.status;
    obj.key_id = message.keyId;
    obj.execute_data = message.executeData;
    obj.prev_batched_commands_id = message.prevBatchedCommandsId;
    if (message.commandIds) {
      obj.command_ids = message.commandIds.map(e => e);
    } else {
      obj.command_ids = [];
    }
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: BatchedCommandsResponseAminoMsg): BatchedCommandsResponse {
    return BatchedCommandsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchedCommandsResponseProtoMsg): BatchedCommandsResponse {
    return BatchedCommandsResponse.decode(message.value);
  },
  toProto(message: BatchedCommandsResponse): Uint8Array {
    return BatchedCommandsResponse.encode(message).finish();
  },
  toProtoMsg(message: BatchedCommandsResponse): BatchedCommandsResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BatchedCommandsResponse",
      value: BatchedCommandsResponse.encode(message).finish()
    };
  }
};
function createBaseKeyAddressRequest(): KeyAddressRequest {
  return {
    chain: "",
    keyId: ""
  };
}
export const KeyAddressRequest = {
  typeUrl: "/axelar.evm.v1beta1.KeyAddressRequest",
  encode(message: KeyAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeyAddressRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeyAddressRequest>): KeyAddressRequest {
    const message = createBaseKeyAddressRequest();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: KeyAddressRequestAmino): KeyAddressRequest {
    return {
      chain: object.chain,
      keyId: object.key_id
    };
  },
  toAmino(message: KeyAddressRequest): KeyAddressRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeyAddressRequestAminoMsg): KeyAddressRequest {
    return KeyAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyAddressRequestProtoMsg): KeyAddressRequest {
    return KeyAddressRequest.decode(message.value);
  },
  toProto(message: KeyAddressRequest): Uint8Array {
    return KeyAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: KeyAddressRequest): KeyAddressRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.KeyAddressRequest",
      value: KeyAddressRequest.encode(message).finish()
    };
  }
};
function createBaseKeyAddressResponse(): KeyAddressResponse {
  return {
    keyId: "",
    addresses: [],
    threshold: ""
  };
}
export const KeyAddressResponse = {
  typeUrl: "/axelar.evm.v1beta1.KeyAddressResponse",
  encode(message: KeyAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    for (const v of message.addresses) {
      KeyAddressResponse_WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.threshold !== "") {
      writer.uint32(26).string(message.threshold);
    }
    return writer;
  },
  fromJSON(object: any): KeyAddressResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => KeyAddressResponse_WeightedAddress.fromJSON(e)) : [],
      threshold: isSet(object.threshold) ? String(object.threshold) : ""
    };
  },
  fromPartial(object: Partial<KeyAddressResponse>): KeyAddressResponse {
    const message = createBaseKeyAddressResponse();
    message.keyId = object.keyId ?? "";
    message.addresses = object.addresses?.map(e => KeyAddressResponse_WeightedAddress.fromPartial(e)) || [];
    message.threshold = object.threshold ?? "";
    return message;
  },
  fromAmino(object: KeyAddressResponseAmino): KeyAddressResponse {
    return {
      keyId: object.key_id,
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => KeyAddressResponse_WeightedAddress.fromAmino(e)) : [],
      threshold: object.threshold
    };
  },
  toAmino(message: KeyAddressResponse): KeyAddressResponseAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e ? KeyAddressResponse_WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.addresses = [];
    }
    obj.threshold = message.threshold;
    return obj;
  },
  fromAminoMsg(object: KeyAddressResponseAminoMsg): KeyAddressResponse {
    return KeyAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyAddressResponseProtoMsg): KeyAddressResponse {
    return KeyAddressResponse.decode(message.value);
  },
  toProto(message: KeyAddressResponse): Uint8Array {
    return KeyAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: KeyAddressResponse): KeyAddressResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.KeyAddressResponse",
      value: KeyAddressResponse.encode(message).finish()
    };
  }
};
function createBaseKeyAddressResponse_WeightedAddress(): KeyAddressResponse_WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const KeyAddressResponse_WeightedAddress = {
  typeUrl: "/axelar.evm.v1beta1.WeightedAddress",
  encode(message: KeyAddressResponse_WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): KeyAddressResponse_WeightedAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<KeyAddressResponse_WeightedAddress>): KeyAddressResponse_WeightedAddress {
    const message = createBaseKeyAddressResponse_WeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: KeyAddressResponse_WeightedAddressAmino): KeyAddressResponse_WeightedAddress {
    return {
      address: object.address,
      weight: object.weight
    };
  },
  toAmino(message: KeyAddressResponse_WeightedAddress): KeyAddressResponse_WeightedAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: KeyAddressResponse_WeightedAddressAminoMsg): KeyAddressResponse_WeightedAddress {
    return KeyAddressResponse_WeightedAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyAddressResponse_WeightedAddressProtoMsg): KeyAddressResponse_WeightedAddress {
    return KeyAddressResponse_WeightedAddress.decode(message.value);
  },
  toProto(message: KeyAddressResponse_WeightedAddress): Uint8Array {
    return KeyAddressResponse_WeightedAddress.encode(message).finish();
  },
  toProtoMsg(message: KeyAddressResponse_WeightedAddress): KeyAddressResponse_WeightedAddressProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.WeightedAddress",
      value: KeyAddressResponse_WeightedAddress.encode(message).finish()
    };
  }
};
function createBaseQueryTokenAddressResponse(): QueryTokenAddressResponse {
  return {
    address: "",
    confirmed: false
  };
}
export const QueryTokenAddressResponse = {
  typeUrl: "/axelar.evm.v1beta1.QueryTokenAddressResponse",
  encode(message: QueryTokenAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.confirmed === true) {
      writer.uint32(16).bool(message.confirmed);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false
    };
  },
  fromPartial(object: Partial<QueryTokenAddressResponse>): QueryTokenAddressResponse {
    const message = createBaseQueryTokenAddressResponse();
    message.address = object.address ?? "";
    message.confirmed = object.confirmed ?? false;
    return message;
  },
  fromAmino(object: QueryTokenAddressResponseAmino): QueryTokenAddressResponse {
    return {
      address: object.address,
      confirmed: object.confirmed
    };
  },
  toAmino(message: QueryTokenAddressResponse): QueryTokenAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.confirmed = message.confirmed;
    return obj;
  },
  fromAminoMsg(object: QueryTokenAddressResponseAminoMsg): QueryTokenAddressResponse {
    return QueryTokenAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenAddressResponseProtoMsg): QueryTokenAddressResponse {
    return QueryTokenAddressResponse.decode(message.value);
  },
  toProto(message: QueryTokenAddressResponse): Uint8Array {
    return QueryTokenAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenAddressResponse): QueryTokenAddressResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.QueryTokenAddressResponse",
      value: QueryTokenAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositStateParams(): QueryDepositStateParams {
  return {
    txId: new Uint8Array(),
    burnerAddress: new Uint8Array()
  };
}
export const QueryDepositStateParams = {
  typeUrl: "/axelar.evm.v1beta1.QueryDepositStateParams",
  encode(message: QueryDepositStateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.burnerAddress.length !== 0) {
      writer.uint32(18).bytes(message.burnerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositStateParams {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryDepositStateParams>): QueryDepositStateParams {
    const message = createBaseQueryDepositStateParams();
    message.txId = object.txId ?? new Uint8Array();
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryDepositStateParamsAmino): QueryDepositStateParams {
    return {
      txId: object.tx_id,
      burnerAddress: object.burner_address
    };
  },
  toAmino(message: QueryDepositStateParams): QueryDepositStateParamsAmino {
    const obj: any = {};
    obj.tx_id = message.txId;
    obj.burner_address = message.burnerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDepositStateParamsAminoMsg): QueryDepositStateParams {
    return QueryDepositStateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositStateParamsProtoMsg): QueryDepositStateParams {
    return QueryDepositStateParams.decode(message.value);
  },
  toProto(message: QueryDepositStateParams): Uint8Array {
    return QueryDepositStateParams.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositStateParams): QueryDepositStateParamsProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.QueryDepositStateParams",
      value: QueryDepositStateParams.encode(message).finish()
    };
  }
};
function createBaseDepositStateRequest(): DepositStateRequest {
  return {
    chain: "",
    params: QueryDepositStateParams.fromPartial({})
  };
}
export const DepositStateRequest = {
  typeUrl: "/axelar.evm.v1beta1.DepositStateRequest",
  encode(message: DepositStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.params !== undefined) {
      QueryDepositStateParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DepositStateRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      params: isSet(object.params) ? QueryDepositStateParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<DepositStateRequest>): DepositStateRequest {
    const message = createBaseDepositStateRequest();
    message.chain = object.chain ?? "";
    message.params = object.params !== undefined && object.params !== null ? QueryDepositStateParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: DepositStateRequestAmino): DepositStateRequest {
    return {
      chain: object.chain,
      params: object?.params ? QueryDepositStateParams.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: DepositStateRequest): DepositStateRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.params = message.params ? QueryDepositStateParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositStateRequestAminoMsg): DepositStateRequest {
    return DepositStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositStateRequestProtoMsg): DepositStateRequest {
    return DepositStateRequest.decode(message.value);
  },
  toProto(message: DepositStateRequest): Uint8Array {
    return DepositStateRequest.encode(message).finish();
  },
  toProtoMsg(message: DepositStateRequest): DepositStateRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.DepositStateRequest",
      value: DepositStateRequest.encode(message).finish()
    };
  }
};
function createBaseDepositStateResponse(): DepositStateResponse {
  return {
    status: 0
  };
}
export const DepositStateResponse = {
  typeUrl: "/axelar.evm.v1beta1.DepositStateResponse",
  encode(message: DepositStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): DepositStateResponse {
    return {
      status: isSet(object.status) ? depositStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<DepositStateResponse>): DepositStateResponse {
    const message = createBaseDepositStateResponse();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: DepositStateResponseAmino): DepositStateResponse {
    return {
      status: isSet(object.status) ? depositStatusFromJSON(object.status) : -1
    };
  },
  toAmino(message: DepositStateResponse): DepositStateResponseAmino {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: DepositStateResponseAminoMsg): DepositStateResponse {
    return DepositStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositStateResponseProtoMsg): DepositStateResponse {
    return DepositStateResponse.decode(message.value);
  },
  toProto(message: DepositStateResponse): Uint8Array {
    return DepositStateResponse.encode(message).finish();
  },
  toProtoMsg(message: DepositStateResponse): DepositStateResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.DepositStateResponse",
      value: DepositStateResponse.encode(message).finish()
    };
  }
};
function createBaseEventRequest(): EventRequest {
  return {
    chain: "",
    eventId: ""
  };
}
export const EventRequest = {
  typeUrl: "/axelar.evm.v1beta1.EventRequest",
  encode(message: EventRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    return writer;
  },
  fromJSON(object: any): EventRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : ""
    };
  },
  fromPartial(object: Partial<EventRequest>): EventRequest {
    const message = createBaseEventRequest();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  },
  fromAmino(object: EventRequestAmino): EventRequest {
    return {
      chain: object.chain,
      eventId: object.event_id
    };
  },
  toAmino(message: EventRequest): EventRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    return obj;
  },
  fromAminoMsg(object: EventRequestAminoMsg): EventRequest {
    return EventRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRequestProtoMsg): EventRequest {
    return EventRequest.decode(message.value);
  },
  toProto(message: EventRequest): Uint8Array {
    return EventRequest.encode(message).finish();
  },
  toProtoMsg(message: EventRequest): EventRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventRequest",
      value: EventRequest.encode(message).finish()
    };
  }
};
function createBaseEventResponse(): EventResponse {
  return {
    event: Event.fromPartial({})
  };
}
export const EventResponse = {
  typeUrl: "/axelar.evm.v1beta1.EventResponse",
  encode(message: EventResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventResponse {
    return {
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined
    };
  },
  fromPartial(object: Partial<EventResponse>): EventResponse {
    const message = createBaseEventResponse();
    message.event = object.event !== undefined && object.event !== null ? Event.fromPartial(object.event) : undefined;
    return message;
  },
  fromAmino(object: EventResponseAmino): EventResponse {
    return {
      event: object?.event ? Event.fromAmino(object.event) : undefined
    };
  },
  toAmino(message: EventResponse): EventResponseAmino {
    const obj: any = {};
    obj.event = message.event ? Event.toAmino(message.event) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventResponseAminoMsg): EventResponse {
    return EventResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EventResponseProtoMsg): EventResponse {
    return EventResponse.decode(message.value);
  },
  toProto(message: EventResponse): Uint8Array {
    return EventResponse.encode(message).finish();
  },
  toProtoMsg(message: EventResponse): EventResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EventResponse",
      value: EventResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBurnerAddressResponse(): QueryBurnerAddressResponse {
  return {
    address: ""
  };
}
export const QueryBurnerAddressResponse = {
  typeUrl: "/axelar.evm.v1beta1.QueryBurnerAddressResponse",
  encode(message: QueryBurnerAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryBurnerAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryBurnerAddressResponse>): QueryBurnerAddressResponse {
    const message = createBaseQueryBurnerAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryBurnerAddressResponseAmino): QueryBurnerAddressResponse {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryBurnerAddressResponse): QueryBurnerAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBurnerAddressResponseAminoMsg): QueryBurnerAddressResponse {
    return QueryBurnerAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurnerAddressResponseProtoMsg): QueryBurnerAddressResponse {
    return QueryBurnerAddressResponse.decode(message.value);
  },
  toProto(message: QueryBurnerAddressResponse): Uint8Array {
    return QueryBurnerAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBurnerAddressResponse): QueryBurnerAddressResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.QueryBurnerAddressResponse",
      value: QueryBurnerAddressResponse.encode(message).finish()
    };
  }
};
function createBaseChainsRequest(): ChainsRequest {
  return {
    status: 0
  };
}
export const ChainsRequest = {
  typeUrl: "/axelar.evm.v1beta1.ChainsRequest",
  encode(message: ChainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): ChainsRequest {
    return {
      status: isSet(object.status) ? chainStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<ChainsRequest>): ChainsRequest {
    const message = createBaseChainsRequest();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ChainsRequestAmino): ChainsRequest {
    return {
      status: isSet(object.status) ? chainStatusFromJSON(object.status) : -1
    };
  },
  toAmino(message: ChainsRequest): ChainsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: ChainsRequestAminoMsg): ChainsRequest {
    return ChainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainsRequestProtoMsg): ChainsRequest {
    return ChainsRequest.decode(message.value);
  },
  toProto(message: ChainsRequest): Uint8Array {
    return ChainsRequest.encode(message).finish();
  },
  toProtoMsg(message: ChainsRequest): ChainsRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ChainsRequest",
      value: ChainsRequest.encode(message).finish()
    };
  }
};
function createBaseChainsResponse(): ChainsResponse {
  return {
    chains: []
  };
}
export const ChainsResponse = {
  typeUrl: "/axelar.evm.v1beta1.ChainsResponse",
  encode(message: ChainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chains) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ChainsResponse {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ChainsResponse>): ChainsResponse {
    const message = createBaseChainsResponse();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ChainsResponseAmino): ChainsResponse {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => e) : []
    };
  },
  toAmino(message: ChainsResponse): ChainsResponseAmino {
    const obj: any = {};
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainsResponseAminoMsg): ChainsResponse {
    return ChainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainsResponseProtoMsg): ChainsResponse {
    return ChainsResponse.decode(message.value);
  },
  toProto(message: ChainsResponse): Uint8Array {
    return ChainsResponse.encode(message).finish();
  },
  toProtoMsg(message: ChainsResponse): ChainsResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ChainsResponse",
      value: ChainsResponse.encode(message).finish()
    };
  }
};
function createBaseCommandRequest(): CommandRequest {
  return {
    chain: "",
    id: ""
  };
}
export const CommandRequest = {
  typeUrl: "/axelar.evm.v1beta1.CommandRequest",
  encode(message: CommandRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): CommandRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<CommandRequest>): CommandRequest {
    const message = createBaseCommandRequest();
    message.chain = object.chain ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: CommandRequestAmino): CommandRequest {
    return {
      chain: object.chain,
      id: object.id
    };
  },
  toAmino(message: CommandRequest): CommandRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: CommandRequestAminoMsg): CommandRequest {
    return CommandRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CommandRequestProtoMsg): CommandRequest {
    return CommandRequest.decode(message.value);
  },
  toProto(message: CommandRequest): Uint8Array {
    return CommandRequest.encode(message).finish();
  },
  toProtoMsg(message: CommandRequest): CommandRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CommandRequest",
      value: CommandRequest.encode(message).finish()
    };
  }
};
function createBaseCommandResponse_ParamsEntry(): CommandResponse_ParamsEntry {
  return {
    key: "",
    value: ""
  };
}
export const CommandResponse_ParamsEntry = {
  encode(message: CommandResponse_ParamsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): CommandResponse_ParamsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<CommandResponse_ParamsEntry>): CommandResponse_ParamsEntry {
    const message = createBaseCommandResponse_ParamsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: CommandResponse_ParamsEntryAmino): CommandResponse_ParamsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: CommandResponse_ParamsEntry): CommandResponse_ParamsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: CommandResponse_ParamsEntryAminoMsg): CommandResponse_ParamsEntry {
    return CommandResponse_ParamsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CommandResponse_ParamsEntryProtoMsg): CommandResponse_ParamsEntry {
    return CommandResponse_ParamsEntry.decode(message.value);
  },
  toProto(message: CommandResponse_ParamsEntry): Uint8Array {
    return CommandResponse_ParamsEntry.encode(message).finish();
  }
};
function createBaseCommandResponse(): CommandResponse {
  return {
    id: "",
    type: "",
    params: {},
    keyId: "",
    maxGasCost: 0
  };
}
export const CommandResponse = {
  typeUrl: "/axelar.evm.v1beta1.CommandResponse",
  encode(message: CommandResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    Object.entries(message.params).forEach(([key, value]) => {
      CommandResponse_ParamsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.maxGasCost !== 0) {
      writer.uint32(40).uint32(message.maxGasCost);
    }
    return writer;
  },
  fromJSON(object: any): CommandResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      params: isObject(object.params) ? Object.entries(object.params).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0
    };
  },
  fromPartial(object: Partial<CommandResponse>): CommandResponse {
    const message = createBaseCommandResponse();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.params = Object.entries(object.params ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.keyId = object.keyId ?? "";
    message.maxGasCost = object.maxGasCost ?? 0;
    return message;
  },
  fromAmino(object: CommandResponseAmino): CommandResponse {
    return {
      id: object.id,
      type: object.type,
      params: isObject(object.params) ? Object.entries(object.params).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      keyId: object.key_id,
      maxGasCost: object.max_gas_cost
    };
  },
  toAmino(message: CommandResponse): CommandResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.type = message.type;
    obj.params = {};
    if (message.params) {
      Object.entries(message.params).forEach(([k, v]) => {
        obj.params[k] = v;
      });
    }
    obj.key_id = message.keyId;
    obj.max_gas_cost = message.maxGasCost;
    return obj;
  },
  fromAminoMsg(object: CommandResponseAminoMsg): CommandResponse {
    return CommandResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CommandResponseProtoMsg): CommandResponse {
    return CommandResponse.decode(message.value);
  },
  toProto(message: CommandResponse): Uint8Array {
    return CommandResponse.encode(message).finish();
  },
  toProtoMsg(message: CommandResponse): CommandResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CommandResponse",
      value: CommandResponse.encode(message).finish()
    };
  }
};
function createBasePendingCommandsRequest(): PendingCommandsRequest {
  return {
    chain: ""
  };
}
export const PendingCommandsRequest = {
  typeUrl: "/axelar.evm.v1beta1.PendingCommandsRequest",
  encode(message: PendingCommandsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): PendingCommandsRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<PendingCommandsRequest>): PendingCommandsRequest {
    const message = createBasePendingCommandsRequest();
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: PendingCommandsRequestAmino): PendingCommandsRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: PendingCommandsRequest): PendingCommandsRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: PendingCommandsRequestAminoMsg): PendingCommandsRequest {
    return PendingCommandsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingCommandsRequestProtoMsg): PendingCommandsRequest {
    return PendingCommandsRequest.decode(message.value);
  },
  toProto(message: PendingCommandsRequest): Uint8Array {
    return PendingCommandsRequest.encode(message).finish();
  },
  toProtoMsg(message: PendingCommandsRequest): PendingCommandsRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PendingCommandsRequest",
      value: PendingCommandsRequest.encode(message).finish()
    };
  }
};
function createBasePendingCommandsResponse(): PendingCommandsResponse {
  return {
    commands: []
  };
}
export const PendingCommandsResponse = {
  typeUrl: "/axelar.evm.v1beta1.PendingCommandsResponse",
  encode(message: PendingCommandsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.commands) {
      QueryCommandResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PendingCommandsResponse {
    return {
      commands: Array.isArray(object?.commands) ? object.commands.map((e: any) => QueryCommandResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PendingCommandsResponse>): PendingCommandsResponse {
    const message = createBasePendingCommandsResponse();
    message.commands = object.commands?.map(e => QueryCommandResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PendingCommandsResponseAmino): PendingCommandsResponse {
    return {
      commands: Array.isArray(object?.commands) ? object.commands.map((e: any) => QueryCommandResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: PendingCommandsResponse): PendingCommandsResponseAmino {
    const obj: any = {};
    if (message.commands) {
      obj.commands = message.commands.map(e => e ? QueryCommandResponse.toAmino(e) : undefined);
    } else {
      obj.commands = [];
    }
    return obj;
  },
  fromAminoMsg(object: PendingCommandsResponseAminoMsg): PendingCommandsResponse {
    return PendingCommandsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingCommandsResponseProtoMsg): PendingCommandsResponse {
    return PendingCommandsResponse.decode(message.value);
  },
  toProto(message: PendingCommandsResponse): Uint8Array {
    return PendingCommandsResponse.encode(message).finish();
  },
  toProtoMsg(message: PendingCommandsResponse): PendingCommandsResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PendingCommandsResponse",
      value: PendingCommandsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommandResponse_ParamsEntry(): QueryCommandResponse_ParamsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QueryCommandResponse_ParamsEntry = {
  encode(message: QueryCommandResponse_ParamsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueryCommandResponse_ParamsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<QueryCommandResponse_ParamsEntry>): QueryCommandResponse_ParamsEntry {
    const message = createBaseQueryCommandResponse_ParamsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QueryCommandResponse_ParamsEntryAmino): QueryCommandResponse_ParamsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: QueryCommandResponse_ParamsEntry): QueryCommandResponse_ParamsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: QueryCommandResponse_ParamsEntryAminoMsg): QueryCommandResponse_ParamsEntry {
    return QueryCommandResponse_ParamsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommandResponse_ParamsEntryProtoMsg): QueryCommandResponse_ParamsEntry {
    return QueryCommandResponse_ParamsEntry.decode(message.value);
  },
  toProto(message: QueryCommandResponse_ParamsEntry): Uint8Array {
    return QueryCommandResponse_ParamsEntry.encode(message).finish();
  }
};
function createBaseQueryCommandResponse(): QueryCommandResponse {
  return {
    id: "",
    type: "",
    params: {},
    keyId: "",
    maxGasCost: 0
  };
}
export const QueryCommandResponse = {
  typeUrl: "/axelar.evm.v1beta1.QueryCommandResponse",
  encode(message: QueryCommandResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    Object.entries(message.params).forEach(([key, value]) => {
      QueryCommandResponse_ParamsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    if (message.maxGasCost !== 0) {
      writer.uint32(40).uint32(message.maxGasCost);
    }
    return writer;
  },
  fromJSON(object: any): QueryCommandResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      params: isObject(object.params) ? Object.entries(object.params).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0
    };
  },
  fromPartial(object: Partial<QueryCommandResponse>): QueryCommandResponse {
    const message = createBaseQueryCommandResponse();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.params = Object.entries(object.params ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.keyId = object.keyId ?? "";
    message.maxGasCost = object.maxGasCost ?? 0;
    return message;
  },
  fromAmino(object: QueryCommandResponseAmino): QueryCommandResponse {
    return {
      id: object.id,
      type: object.type,
      params: isObject(object.params) ? Object.entries(object.params).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      keyId: object.key_id,
      maxGasCost: object.max_gas_cost
    };
  },
  toAmino(message: QueryCommandResponse): QueryCommandResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.type = message.type;
    obj.params = {};
    if (message.params) {
      Object.entries(message.params).forEach(([k, v]) => {
        obj.params[k] = v;
      });
    }
    obj.key_id = message.keyId;
    obj.max_gas_cost = message.maxGasCost;
    return obj;
  },
  fromAminoMsg(object: QueryCommandResponseAminoMsg): QueryCommandResponse {
    return QueryCommandResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommandResponseProtoMsg): QueryCommandResponse {
    return QueryCommandResponse.decode(message.value);
  },
  toProto(message: QueryCommandResponse): Uint8Array {
    return QueryCommandResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommandResponse): QueryCommandResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.QueryCommandResponse",
      value: QueryCommandResponse.encode(message).finish()
    };
  }
};
function createBaseBurnerInfoRequest(): BurnerInfoRequest {
  return {
    address: new Uint8Array()
  };
}
export const BurnerInfoRequest = {
  typeUrl: "/axelar.evm.v1beta1.BurnerInfoRequest",
  encode(message: BurnerInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    return writer;
  },
  fromJSON(object: any): BurnerInfoRequest {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<BurnerInfoRequest>): BurnerInfoRequest {
    const message = createBaseBurnerInfoRequest();
    message.address = object.address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: BurnerInfoRequestAmino): BurnerInfoRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: BurnerInfoRequest): BurnerInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: BurnerInfoRequestAminoMsg): BurnerInfoRequest {
    return BurnerInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnerInfoRequestProtoMsg): BurnerInfoRequest {
    return BurnerInfoRequest.decode(message.value);
  },
  toProto(message: BurnerInfoRequest): Uint8Array {
    return BurnerInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: BurnerInfoRequest): BurnerInfoRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BurnerInfoRequest",
      value: BurnerInfoRequest.encode(message).finish()
    };
  }
};
function createBaseBurnerInfoResponse(): BurnerInfoResponse {
  return {
    chain: "",
    burnerInfo: BurnerInfo.fromPartial({})
  };
}
export const BurnerInfoResponse = {
  typeUrl: "/axelar.evm.v1beta1.BurnerInfoResponse",
  encode(message: BurnerInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.burnerInfo !== undefined) {
      BurnerInfo.encode(message.burnerInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BurnerInfoResponse {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      burnerInfo: isSet(object.burnerInfo) ? BurnerInfo.fromJSON(object.burnerInfo) : undefined
    };
  },
  fromPartial(object: Partial<BurnerInfoResponse>): BurnerInfoResponse {
    const message = createBaseBurnerInfoResponse();
    message.chain = object.chain ?? "";
    message.burnerInfo = object.burnerInfo !== undefined && object.burnerInfo !== null ? BurnerInfo.fromPartial(object.burnerInfo) : undefined;
    return message;
  },
  fromAmino(object: BurnerInfoResponseAmino): BurnerInfoResponse {
    return {
      chain: object.chain,
      burnerInfo: object?.burner_info ? BurnerInfo.fromAmino(object.burner_info) : undefined
    };
  },
  toAmino(message: BurnerInfoResponse): BurnerInfoResponseAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.burner_info = message.burnerInfo ? BurnerInfo.toAmino(message.burnerInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: BurnerInfoResponseAminoMsg): BurnerInfoResponse {
    return BurnerInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnerInfoResponseProtoMsg): BurnerInfoResponse {
    return BurnerInfoResponse.decode(message.value);
  },
  toProto(message: BurnerInfoResponse): Uint8Array {
    return BurnerInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: BurnerInfoResponse): BurnerInfoResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BurnerInfoResponse",
      value: BurnerInfoResponse.encode(message).finish()
    };
  }
};
function createBaseConfirmationHeightRequest(): ConfirmationHeightRequest {
  return {
    chain: ""
  };
}
export const ConfirmationHeightRequest = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightRequest",
  encode(message: ConfirmationHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmationHeightRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<ConfirmationHeightRequest>): ConfirmationHeightRequest {
    const message = createBaseConfirmationHeightRequest();
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: ConfirmationHeightRequestAmino): ConfirmationHeightRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: ConfirmationHeightRequest): ConfirmationHeightRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: ConfirmationHeightRequestAminoMsg): ConfirmationHeightRequest {
    return ConfirmationHeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmationHeightRequestProtoMsg): ConfirmationHeightRequest {
    return ConfirmationHeightRequest.decode(message.value);
  },
  toProto(message: ConfirmationHeightRequest): Uint8Array {
    return ConfirmationHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfirmationHeightRequest): ConfirmationHeightRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightRequest",
      value: ConfirmationHeightRequest.encode(message).finish()
    };
  }
};
function createBaseConfirmationHeightResponse(): ConfirmationHeightResponse {
  return {
    height: BigInt(0)
  };
}
export const ConfirmationHeightResponse = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightResponse",
  encode(message: ConfirmationHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmationHeightResponse {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ConfirmationHeightResponse>): ConfirmationHeightResponse {
    const message = createBaseConfirmationHeightResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConfirmationHeightResponseAmino): ConfirmationHeightResponse {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino(message: ConfirmationHeightResponse): ConfirmationHeightResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfirmationHeightResponseAminoMsg): ConfirmationHeightResponse {
    return ConfirmationHeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmationHeightResponseProtoMsg): ConfirmationHeightResponse {
    return ConfirmationHeightResponse.decode(message.value);
  },
  toProto(message: ConfirmationHeightResponse): Uint8Array {
    return ConfirmationHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfirmationHeightResponse): ConfirmationHeightResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightResponse",
      value: ConfirmationHeightResponse.encode(message).finish()
    };
  }
};
function createBaseGatewayAddressRequest(): GatewayAddressRequest {
  return {
    chain: ""
  };
}
export const GatewayAddressRequest = {
  typeUrl: "/axelar.evm.v1beta1.GatewayAddressRequest",
  encode(message: GatewayAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): GatewayAddressRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<GatewayAddressRequest>): GatewayAddressRequest {
    const message = createBaseGatewayAddressRequest();
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: GatewayAddressRequestAmino): GatewayAddressRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: GatewayAddressRequest): GatewayAddressRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: GatewayAddressRequestAminoMsg): GatewayAddressRequest {
    return GatewayAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GatewayAddressRequestProtoMsg): GatewayAddressRequest {
    return GatewayAddressRequest.decode(message.value);
  },
  toProto(message: GatewayAddressRequest): Uint8Array {
    return GatewayAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: GatewayAddressRequest): GatewayAddressRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.GatewayAddressRequest",
      value: GatewayAddressRequest.encode(message).finish()
    };
  }
};
function createBaseGatewayAddressResponse(): GatewayAddressResponse {
  return {
    address: ""
  };
}
export const GatewayAddressResponse = {
  typeUrl: "/axelar.evm.v1beta1.GatewayAddressResponse",
  encode(message: GatewayAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): GatewayAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<GatewayAddressResponse>): GatewayAddressResponse {
    const message = createBaseGatewayAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: GatewayAddressResponseAmino): GatewayAddressResponse {
    return {
      address: object.address
    };
  },
  toAmino(message: GatewayAddressResponse): GatewayAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: GatewayAddressResponseAminoMsg): GatewayAddressResponse {
    return GatewayAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GatewayAddressResponseProtoMsg): GatewayAddressResponse {
    return GatewayAddressResponse.decode(message.value);
  },
  toProto(message: GatewayAddressResponse): Uint8Array {
    return GatewayAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: GatewayAddressResponse): GatewayAddressResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.GatewayAddressResponse",
      value: GatewayAddressResponse.encode(message).finish()
    };
  }
};
function createBaseBytecodeRequest(): BytecodeRequest {
  return {
    chain: "",
    contract: ""
  };
}
export const BytecodeRequest = {
  typeUrl: "/axelar.evm.v1beta1.BytecodeRequest",
  encode(message: BytecodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): BytecodeRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<BytecodeRequest>): BytecodeRequest {
    const message = createBaseBytecodeRequest();
    message.chain = object.chain ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: BytecodeRequestAmino): BytecodeRequest {
    return {
      chain: object.chain,
      contract: object.contract
    };
  },
  toAmino(message: BytecodeRequest): BytecodeRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.contract = message.contract;
    return obj;
  },
  fromAminoMsg(object: BytecodeRequestAminoMsg): BytecodeRequest {
    return BytecodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BytecodeRequestProtoMsg): BytecodeRequest {
    return BytecodeRequest.decode(message.value);
  },
  toProto(message: BytecodeRequest): Uint8Array {
    return BytecodeRequest.encode(message).finish();
  },
  toProtoMsg(message: BytecodeRequest): BytecodeRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BytecodeRequest",
      value: BytecodeRequest.encode(message).finish()
    };
  }
};
function createBaseBytecodeResponse(): BytecodeResponse {
  return {
    bytecode: ""
  };
}
export const BytecodeResponse = {
  typeUrl: "/axelar.evm.v1beta1.BytecodeResponse",
  encode(message: BytecodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bytecode !== "") {
      writer.uint32(10).string(message.bytecode);
    }
    return writer;
  },
  fromJSON(object: any): BytecodeResponse {
    return {
      bytecode: isSet(object.bytecode) ? String(object.bytecode) : ""
    };
  },
  fromPartial(object: Partial<BytecodeResponse>): BytecodeResponse {
    const message = createBaseBytecodeResponse();
    message.bytecode = object.bytecode ?? "";
    return message;
  },
  fromAmino(object: BytecodeResponseAmino): BytecodeResponse {
    return {
      bytecode: object.bytecode
    };
  },
  toAmino(message: BytecodeResponse): BytecodeResponseAmino {
    const obj: any = {};
    obj.bytecode = message.bytecode;
    return obj;
  },
  fromAminoMsg(object: BytecodeResponseAminoMsg): BytecodeResponse {
    return BytecodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BytecodeResponseProtoMsg): BytecodeResponse {
    return BytecodeResponse.decode(message.value);
  },
  toProto(message: BytecodeResponse): Uint8Array {
    return BytecodeResponse.encode(message).finish();
  },
  toProtoMsg(message: BytecodeResponse): BytecodeResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BytecodeResponse",
      value: BytecodeResponse.encode(message).finish()
    };
  }
};
function createBaseERC20TokensRequest(): ERC20TokensRequest {
  return {
    chain: "",
    type: 0
  };
}
export const ERC20TokensRequest = {
  typeUrl: "/axelar.evm.v1beta1.ERC20TokensRequest",
  encode(message: ERC20TokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  fromJSON(object: any): ERC20TokensRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : -1
    };
  },
  fromPartial(object: Partial<ERC20TokensRequest>): ERC20TokensRequest {
    const message = createBaseERC20TokensRequest();
    message.chain = object.chain ?? "";
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: ERC20TokensRequestAmino): ERC20TokensRequest {
    return {
      chain: object.chain,
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : -1
    };
  },
  toAmino(message: ERC20TokensRequest): ERC20TokensRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: ERC20TokensRequestAminoMsg): ERC20TokensRequest {
    return ERC20TokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20TokensRequestProtoMsg): ERC20TokensRequest {
    return ERC20TokensRequest.decode(message.value);
  },
  toProto(message: ERC20TokensRequest): Uint8Array {
    return ERC20TokensRequest.encode(message).finish();
  },
  toProtoMsg(message: ERC20TokensRequest): ERC20TokensRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ERC20TokensRequest",
      value: ERC20TokensRequest.encode(message).finish()
    };
  }
};
function createBaseERC20TokensResponse(): ERC20TokensResponse {
  return {
    tokens: []
  };
}
export const ERC20TokensResponse = {
  typeUrl: "/axelar.evm.v1beta1.ERC20TokensResponse",
  encode(message: ERC20TokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      ERC20TokensResponse_Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ERC20TokensResponse {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => ERC20TokensResponse_Token.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ERC20TokensResponse>): ERC20TokensResponse {
    const message = createBaseERC20TokensResponse();
    message.tokens = object.tokens?.map(e => ERC20TokensResponse_Token.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ERC20TokensResponseAmino): ERC20TokensResponse {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => ERC20TokensResponse_Token.fromAmino(e)) : []
    };
  },
  toAmino(message: ERC20TokensResponse): ERC20TokensResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? ERC20TokensResponse_Token.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },
  fromAminoMsg(object: ERC20TokensResponseAminoMsg): ERC20TokensResponse {
    return ERC20TokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20TokensResponseProtoMsg): ERC20TokensResponse {
    return ERC20TokensResponse.decode(message.value);
  },
  toProto(message: ERC20TokensResponse): Uint8Array {
    return ERC20TokensResponse.encode(message).finish();
  },
  toProtoMsg(message: ERC20TokensResponse): ERC20TokensResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ERC20TokensResponse",
      value: ERC20TokensResponse.encode(message).finish()
    };
  }
};
function createBaseERC20TokensResponse_Token(): ERC20TokensResponse_Token {
  return {
    asset: "",
    symbol: ""
  };
}
export const ERC20TokensResponse_Token = {
  typeUrl: "/axelar.evm.v1beta1.Token",
  encode(message: ERC20TokensResponse_Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },
  fromJSON(object: any): ERC20TokensResponse_Token {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  fromPartial(object: Partial<ERC20TokensResponse_Token>): ERC20TokensResponse_Token {
    const message = createBaseERC20TokensResponse_Token();
    message.asset = object.asset ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: ERC20TokensResponse_TokenAmino): ERC20TokensResponse_Token {
    return {
      asset: object.asset,
      symbol: object.symbol
    };
  },
  toAmino(message: ERC20TokensResponse_Token): ERC20TokensResponse_TokenAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.symbol = message.symbol;
    return obj;
  },
  fromAminoMsg(object: ERC20TokensResponse_TokenAminoMsg): ERC20TokensResponse_Token {
    return ERC20TokensResponse_Token.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20TokensResponse_TokenProtoMsg): ERC20TokensResponse_Token {
    return ERC20TokensResponse_Token.decode(message.value);
  },
  toProto(message: ERC20TokensResponse_Token): Uint8Array {
    return ERC20TokensResponse_Token.encode(message).finish();
  },
  toProtoMsg(message: ERC20TokensResponse_Token): ERC20TokensResponse_TokenProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Token",
      value: ERC20TokensResponse_Token.encode(message).finish()
    };
  }
};
function createBaseTokenInfoRequest(): TokenInfoRequest {
  return {
    chain: "",
    asset: undefined,
    symbol: undefined,
    address: undefined
  };
}
export const TokenInfoRequest = {
  typeUrl: "/axelar.evm.v1beta1.TokenInfoRequest",
  encode(message: TokenInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.asset !== undefined) {
      writer.uint32(18).string(message.asset);
    }
    if (message.symbol !== undefined) {
      writer.uint32(26).string(message.symbol);
    }
    if (message.address !== undefined) {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): TokenInfoRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? String(object.asset) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
      address: isSet(object.address) ? String(object.address) : undefined
    };
  },
  fromPartial(object: Partial<TokenInfoRequest>): TokenInfoRequest {
    const message = createBaseTokenInfoRequest();
    message.chain = object.chain ?? "";
    message.asset = object.asset ?? undefined;
    message.symbol = object.symbol ?? undefined;
    message.address = object.address ?? undefined;
    return message;
  },
  fromAmino(object: TokenInfoRequestAmino): TokenInfoRequest {
    return {
      chain: object.chain,
      asset: object?.asset,
      symbol: object?.symbol,
      address: object?.address
    };
  },
  toAmino(message: TokenInfoRequest): TokenInfoRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.asset = message.asset;
    obj.symbol = message.symbol;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: TokenInfoRequestAminoMsg): TokenInfoRequest {
    return TokenInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenInfoRequestProtoMsg): TokenInfoRequest {
    return TokenInfoRequest.decode(message.value);
  },
  toProto(message: TokenInfoRequest): Uint8Array {
    return TokenInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: TokenInfoRequest): TokenInfoRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.TokenInfoRequest",
      value: TokenInfoRequest.encode(message).finish()
    };
  }
};
function createBaseTokenInfoResponse(): TokenInfoResponse {
  return {
    asset: "",
    details: TokenDetails.fromPartial({}),
    address: "",
    confirmed: false,
    isExternal: false,
    burnerCodeHash: ""
  };
}
export const TokenInfoResponse = {
  typeUrl: "/axelar.evm.v1beta1.TokenInfoResponse",
  encode(message: TokenInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.details !== undefined) {
      TokenDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.confirmed === true) {
      writer.uint32(32).bool(message.confirmed);
    }
    if (message.isExternal === true) {
      writer.uint32(40).bool(message.isExternal);
    }
    if (message.burnerCodeHash !== "") {
      writer.uint32(50).string(message.burnerCodeHash);
    }
    return writer;
  },
  fromJSON(object: any): TokenInfoResponse {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      details: isSet(object.details) ? TokenDetails.fromJSON(object.details) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
      isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
      burnerCodeHash: isSet(object.burnerCodeHash) ? String(object.burnerCodeHash) : ""
    };
  },
  fromPartial(object: Partial<TokenInfoResponse>): TokenInfoResponse {
    const message = createBaseTokenInfoResponse();
    message.asset = object.asset ?? "";
    message.details = object.details !== undefined && object.details !== null ? TokenDetails.fromPartial(object.details) : undefined;
    message.address = object.address ?? "";
    message.confirmed = object.confirmed ?? false;
    message.isExternal = object.isExternal ?? false;
    message.burnerCodeHash = object.burnerCodeHash ?? "";
    return message;
  },
  fromAmino(object: TokenInfoResponseAmino): TokenInfoResponse {
    return {
      asset: object.asset,
      details: object?.details ? TokenDetails.fromAmino(object.details) : undefined,
      address: object.address,
      confirmed: object.confirmed,
      isExternal: object.is_external,
      burnerCodeHash: object.burner_code_hash
    };
  },
  toAmino(message: TokenInfoResponse): TokenInfoResponseAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.details = message.details ? TokenDetails.toAmino(message.details) : undefined;
    obj.address = message.address;
    obj.confirmed = message.confirmed;
    obj.is_external = message.isExternal;
    obj.burner_code_hash = message.burnerCodeHash;
    return obj;
  },
  fromAminoMsg(object: TokenInfoResponseAminoMsg): TokenInfoResponse {
    return TokenInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenInfoResponseProtoMsg): TokenInfoResponse {
    return TokenInfoResponse.decode(message.value);
  },
  toProto(message: TokenInfoResponse): Uint8Array {
    return TokenInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: TokenInfoResponse): TokenInfoResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.TokenInfoResponse",
      value: TokenInfoResponse.encode(message).finish()
    };
  }
};
function createBaseProof(): Proof {
  return {
    addresses: [],
    weights: [],
    threshold: "",
    signatures: []
  };
}
export const Proof = {
  typeUrl: "/axelar.evm.v1beta1.Proof",
  encode(message: Proof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.weights) {
      writer.uint32(18).string(v!);
    }
    if (message.threshold !== "") {
      writer.uint32(26).string(message.threshold);
    }
    for (const v of message.signatures) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Proof {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => String(e)) : [],
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Proof>): Proof {
    const message = createBaseProof();
    message.addresses = object.addresses?.map(e => e) || [];
    message.weights = object.weights?.map(e => e) || [];
    message.threshold = object.threshold ?? "";
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ProofAmino): Proof {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => e) : [],
      threshold: object.threshold,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => e) : []
    };
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map(e => e);
    } else {
      obj.weights = [];
    }
    obj.threshold = message.threshold;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Proof",
      value: Proof.encode(message).finish()
    };
  }
};