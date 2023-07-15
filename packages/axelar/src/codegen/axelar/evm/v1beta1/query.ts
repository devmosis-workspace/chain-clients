import { BatchedCommandsStatus, DepositStatus, Event, EventSDKType, BurnerInfo, BurnerInfoSDKType, TokenDetails, TokenDetailsSDKType, batchedCommandsStatusFromJSON, depositStatusFromJSON } from "./types";
import { Long, isSet, bytesFromBase64, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ChainStatus {
  CHAIN_STATUS_UNSPECIFIED = 0,
  CHAIN_STATUS_ACTIVATED = 1,
  CHAIN_STATUS_DEACTIVATED = 2,
  UNRECOGNIZED = -1,
}
export const ChainStatusSDKType = ChainStatus;
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
  proof?: Proof;
}
export interface BatchedCommandsResponseSDKType {
  id: string;
  data: string;
  status: BatchedCommandsStatus;
  key_id: string;
  execute_data: string;
  prev_batched_commands_id: string;
  command_ids: string[];
  proof?: ProofSDKType;
}
export interface KeyAddressRequest {
  chain: string;
  keyId: string;
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
export interface KeyAddressResponseSDKType {
  key_id: string;
  addresses: KeyAddressResponse_WeightedAddressSDKType[];
  threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
  address: string;
  weight: string;
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
/** @deprecated */
export interface QueryDepositStateParamsSDKType {
  tx_id: Uint8Array;
  burner_address: Uint8Array;
}
/** @deprecated */
export interface DepositStateRequest {
  chain: string;
  params?: QueryDepositStateParams;
}
/** @deprecated */
export interface DepositStateRequestSDKType {
  chain: string;
  params?: QueryDepositStateParamsSDKType;
}
/** @deprecated */
export interface DepositStateResponse {
  status: DepositStatus;
}
/** @deprecated */
export interface DepositStateResponseSDKType {
  status: DepositStatus;
}
export interface EventRequest {
  chain: string;
  eventId: string;
}
export interface EventRequestSDKType {
  chain: string;
  event_id: string;
}
export interface EventResponse {
  event?: Event;
}
export interface EventResponseSDKType {
  event?: EventSDKType;
}
export interface QueryBurnerAddressResponse {
  address: string;
}
export interface QueryBurnerAddressResponseSDKType {
  address: string;
}
export interface ChainsRequest {
  status: ChainStatus;
}
export interface ChainsRequestSDKType {
  status: ChainStatus;
}
export interface ChainsResponse {
  chains: string[];
}
export interface ChainsResponseSDKType {
  chains: string[];
}
export interface CommandRequest {
  chain: string;
  id: string;
}
export interface CommandRequestSDKType {
  chain: string;
  id: string;
}
export interface CommandResponse_ParamsEntry {
  key: string;
  value: string;
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
export interface PendingCommandsRequestSDKType {
  chain: string;
}
export interface PendingCommandsResponse {
  commands: QueryCommandResponse[];
}
export interface PendingCommandsResponseSDKType {
  commands: QueryCommandResponseSDKType[];
}
export interface QueryCommandResponse_ParamsEntry {
  key: string;
  value: string;
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
export interface BurnerInfoRequestSDKType {
  address: Uint8Array;
}
export interface BurnerInfoResponse {
  chain: string;
  burnerInfo?: BurnerInfo;
}
export interface BurnerInfoResponseSDKType {
  chain: string;
  burner_info?: BurnerInfoSDKType;
}
export interface ConfirmationHeightRequest {
  chain: string;
}
export interface ConfirmationHeightRequestSDKType {
  chain: string;
}
export interface ConfirmationHeightResponse {
  height: Long;
}
export interface ConfirmationHeightResponseSDKType {
  height: Long;
}
export interface GatewayAddressRequest {
  chain: string;
}
export interface GatewayAddressRequestSDKType {
  chain: string;
}
export interface GatewayAddressResponse {
  address: string;
}
export interface GatewayAddressResponseSDKType {
  address: string;
}
export interface BytecodeRequest {
  chain: string;
  contract: string;
}
export interface BytecodeRequestSDKType {
  chain: string;
  contract: string;
}
export interface BytecodeResponse {
  bytecode: string;
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
export interface TokenInfoRequestSDKType {
  chain: string;
  asset?: string;
  symbol?: string;
  address?: string;
}
export interface TokenInfoResponse {
  asset: string;
  details?: TokenDetails;
  address: string;
  confirmed: boolean;
  isExternal: boolean;
  burnerCodeHash: string;
}
export interface TokenInfoResponseSDKType {
  asset: string;
  details?: TokenDetailsSDKType;
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
  encode(message: DepositQueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseBatchedCommandsRequest(): BatchedCommandsRequest {
  return {
    chain: "",
    id: ""
  };
}
export const BatchedCommandsRequest = {
  encode(message: BatchedCommandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    proof: undefined
  };
}
export const BatchedCommandsResponse = {
  encode(message: BatchedCommandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : 0,
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
  }
};
function createBaseKeyAddressRequest(): KeyAddressRequest {
  return {
    chain: "",
    keyId: ""
  };
}
export const KeyAddressRequest = {
  encode(message: KeyAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: KeyAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKeyAddressResponse_WeightedAddress(): KeyAddressResponse_WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const KeyAddressResponse_WeightedAddress = {
  encode(message: KeyAddressResponse_WeightedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTokenAddressResponse(): QueryTokenAddressResponse {
  return {
    address: "",
    confirmed: false
  };
}
export const QueryTokenAddressResponse = {
  encode(message: QueryTokenAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDepositStateParams(): QueryDepositStateParams {
  return {
    txId: new Uint8Array(),
    burnerAddress: new Uint8Array()
  };
}
export const QueryDepositStateParams = {
  encode(message: QueryDepositStateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDepositStateRequest(): DepositStateRequest {
  return {
    chain: "",
    params: undefined
  };
}
export const DepositStateRequest = {
  encode(message: DepositStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDepositStateResponse(): DepositStateResponse {
  return {
    status: 0
  };
}
export const DepositStateResponse = {
  encode(message: DepositStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): DepositStateResponse {
    return {
      status: isSet(object.status) ? depositStatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<DepositStateResponse>): DepositStateResponse {
    const message = createBaseDepositStateResponse();
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseEventRequest(): EventRequest {
  return {
    chain: "",
    eventId: ""
  };
}
export const EventRequest = {
  encode(message: EventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventResponse(): EventResponse {
  return {
    event: undefined
  };
}
export const EventResponse = {
  encode(message: EventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryBurnerAddressResponse(): QueryBurnerAddressResponse {
  return {
    address: ""
  };
}
export const QueryBurnerAddressResponse = {
  encode(message: QueryBurnerAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseChainsRequest(): ChainsRequest {
  return {
    status: 0
  };
}
export const ChainsRequest = {
  encode(message: ChainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): ChainsRequest {
    return {
      status: isSet(object.status) ? chainStatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<ChainsRequest>): ChainsRequest {
    const message = createBaseChainsRequest();
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseChainsResponse(): ChainsResponse {
  return {
    chains: []
  };
}
export const ChainsResponse = {
  encode(message: ChainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCommandRequest(): CommandRequest {
  return {
    chain: "",
    id: ""
  };
}
export const CommandRequest = {
  encode(message: CommandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCommandResponse_ParamsEntry(): CommandResponse_ParamsEntry {
  return {
    key: "",
    value: ""
  };
}
export const CommandResponse_ParamsEntry = {
  encode(message: CommandResponse_ParamsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: CommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBasePendingCommandsRequest(): PendingCommandsRequest {
  return {
    chain: ""
  };
}
export const PendingCommandsRequest = {
  encode(message: PendingCommandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBasePendingCommandsResponse(): PendingCommandsResponse {
  return {
    commands: []
  };
}
export const PendingCommandsResponse = {
  encode(message: PendingCommandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryCommandResponse_ParamsEntry(): QueryCommandResponse_ParamsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QueryCommandResponse_ParamsEntry = {
  encode(message: QueryCommandResponse_ParamsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: QueryCommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseBurnerInfoRequest(): BurnerInfoRequest {
  return {
    address: new Uint8Array()
  };
}
export const BurnerInfoRequest = {
  encode(message: BurnerInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseBurnerInfoResponse(): BurnerInfoResponse {
  return {
    chain: "",
    burnerInfo: undefined
  };
}
export const BurnerInfoResponse = {
  encode(message: BurnerInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseConfirmationHeightRequest(): ConfirmationHeightRequest {
  return {
    chain: ""
  };
}
export const ConfirmationHeightRequest = {
  encode(message: ConfirmationHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseConfirmationHeightResponse(): ConfirmationHeightResponse {
  return {
    height: Long.UZERO
  };
}
export const ConfirmationHeightResponse = {
  encode(message: ConfirmationHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmationHeightResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ConfirmationHeightResponse>): ConfirmationHeightResponse {
    const message = createBaseConfirmationHeightResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  }
};
function createBaseGatewayAddressRequest(): GatewayAddressRequest {
  return {
    chain: ""
  };
}
export const GatewayAddressRequest = {
  encode(message: GatewayAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseGatewayAddressResponse(): GatewayAddressResponse {
  return {
    address: ""
  };
}
export const GatewayAddressResponse = {
  encode(message: GatewayAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseBytecodeRequest(): BytecodeRequest {
  return {
    chain: "",
    contract: ""
  };
}
export const BytecodeRequest = {
  encode(message: BytecodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseBytecodeResponse(): BytecodeResponse {
  return {
    bytecode: ""
  };
}
export const BytecodeResponse = {
  encode(message: BytecodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseERC20TokensRequest(): ERC20TokensRequest {
  return {
    chain: "",
    type: 0
  };
}
export const ERC20TokensRequest = {
  encode(message: ERC20TokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : 0
    };
  },
  fromPartial(object: Partial<ERC20TokensRequest>): ERC20TokensRequest {
    const message = createBaseERC20TokensRequest();
    message.chain = object.chain ?? "";
    message.type = object.type ?? 0;
    return message;
  }
};
function createBaseERC20TokensResponse(): ERC20TokensResponse {
  return {
    tokens: []
  };
}
export const ERC20TokensResponse = {
  encode(message: ERC20TokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseERC20TokensResponse_Token(): ERC20TokensResponse_Token {
  return {
    asset: "",
    symbol: ""
  };
}
export const ERC20TokensResponse_Token = {
  encode(message: ERC20TokensResponse_Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: TokenInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseTokenInfoResponse(): TokenInfoResponse {
  return {
    asset: "",
    details: undefined,
    address: "",
    confirmed: false,
    isExternal: false,
    burnerCodeHash: ""
  };
}
export const TokenInfoResponse = {
  encode(message: TokenInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};