import { Status, StatusAmino, StatusSDKType } from "../../oracle/v1/types";
import { EthBridgeClaim, EthBridgeClaimAmino, EthBridgeClaimSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequest {
  ethereumChainId: bigint;
  /** bridge_contract_address is an EthereumAddress */
  bridgeContractAddress: string;
  nonce: bigint;
  symbol: string;
  /** token_contract_address is an EthereumAddress */
  tokenContractAddress: string;
  /** ethereum_sender is an EthereumAddress */
  ethereumSender: string;
}
export interface QueryEthProphecyRequestProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyRequest";
  value: Uint8Array;
}
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequestAmino {
  ethereum_chain_id?: string;
  /** bridge_contract_address is an EthereumAddress */
  bridge_contract_address?: string;
  nonce?: string;
  symbol?: string;
  /** token_contract_address is an EthereumAddress */
  token_contract_address?: string;
  /** ethereum_sender is an EthereumAddress */
  ethereum_sender?: string;
}
export interface QueryEthProphecyRequestAminoMsg {
  type: "/sifnode.ethbridge.v1.QueryEthProphecyRequest";
  value: QueryEthProphecyRequestAmino;
}
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequestSDKType {
  ethereum_chain_id: bigint;
  bridge_contract_address: string;
  nonce: bigint;
  symbol: string;
  token_contract_address: string;
  ethereum_sender: string;
}
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponse {
  id: string;
  status?: Status;
  claims: EthBridgeClaim[];
}
export interface QueryEthProphecyResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyResponse";
  value: Uint8Array;
}
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponseAmino {
  id?: string;
  status?: StatusAmino;
  claims?: EthBridgeClaimAmino[];
}
export interface QueryEthProphecyResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.QueryEthProphecyResponse";
  value: QueryEthProphecyResponseAmino;
}
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponseSDKType {
  id: string;
  status?: StatusSDKType;
  claims: EthBridgeClaimSDKType[];
}
export interface QueryBlacklistRequest {}
export interface QueryBlacklistRequestProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistRequest";
  value: Uint8Array;
}
export interface QueryBlacklistRequestAmino {}
export interface QueryBlacklistRequestAminoMsg {
  type: "/sifnode.ethbridge.v1.QueryBlacklistRequest";
  value: QueryBlacklistRequestAmino;
}
export interface QueryBlacklistRequestSDKType {}
export interface QueryBlacklistResponse {
  addresses: string[];
}
export interface QueryBlacklistResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistResponse";
  value: Uint8Array;
}
export interface QueryBlacklistResponseAmino {
  addresses?: string[];
}
export interface QueryBlacklistResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.QueryBlacklistResponse";
  value: QueryBlacklistResponseAmino;
}
export interface QueryBlacklistResponseSDKType {
  addresses: string[];
}
export interface QueryPauseRequest {}
export interface QueryPauseRequestProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.QueryPauseRequest";
  value: Uint8Array;
}
export interface QueryPauseRequestAmino {}
export interface QueryPauseRequestAminoMsg {
  type: "/sifnode.ethbridge.v1.QueryPauseRequest";
  value: QueryPauseRequestAmino;
}
export interface QueryPauseRequestSDKType {}
export interface QueryPauseResponse {
  isPaused: boolean;
}
export interface QueryPauseResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.QueryPauseResponse";
  value: Uint8Array;
}
export interface QueryPauseResponseAmino {
  is_paused?: boolean;
}
export interface QueryPauseResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.QueryPauseResponse";
  value: QueryPauseResponseAmino;
}
export interface QueryPauseResponseSDKType {
  is_paused: boolean;
}
function createBaseQueryEthProphecyRequest(): QueryEthProphecyRequest {
  return {
    ethereumChainId: BigInt(0),
    bridgeContractAddress: "",
    nonce: BigInt(0),
    symbol: "",
    tokenContractAddress: "",
    ethereumSender: ""
  };
}
export const QueryEthProphecyRequest = {
  typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyRequest",
  encode(message: QueryEthProphecyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethereumChainId !== BigInt(0)) {
      writer.uint32(8).int64(message.ethereumChainId);
    }
    if (message.bridgeContractAddress !== "") {
      writer.uint32(18).string(message.bridgeContractAddress);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(24).int64(message.nonce);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.tokenContractAddress !== "") {
      writer.uint32(42).string(message.tokenContractAddress);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(50).string(message.ethereumSender);
    }
    return writer;
  },
  fromJSON(object: any): QueryEthProphecyRequest {
    return {
      ethereumChainId: isSet(object.ethereumChainId) ? BigInt(object.ethereumChainId.toString()) : BigInt(0),
      bridgeContractAddress: isSet(object.bridgeContractAddress) ? String(object.bridgeContractAddress) : "",
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenContractAddress: isSet(object.tokenContractAddress) ? String(object.tokenContractAddress) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : ""
    };
  },
  fromPartial(object: Partial<QueryEthProphecyRequest>): QueryEthProphecyRequest {
    const message = createBaseQueryEthProphecyRequest();
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? BigInt(object.ethereumChainId.toString()) : BigInt(0);
    message.bridgeContractAddress = object.bridgeContractAddress ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.symbol = object.symbol ?? "";
    message.tokenContractAddress = object.tokenContractAddress ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    return message;
  },
  fromAmino(object: QueryEthProphecyRequestAmino): QueryEthProphecyRequest {
    const message = createBaseQueryEthProphecyRequest();
    if (object.ethereum_chain_id !== undefined && object.ethereum_chain_id !== null) {
      message.ethereumChainId = BigInt(object.ethereum_chain_id);
    }
    if (object.bridge_contract_address !== undefined && object.bridge_contract_address !== null) {
      message.bridgeContractAddress = object.bridge_contract_address;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.token_contract_address !== undefined && object.token_contract_address !== null) {
      message.tokenContractAddress = object.token_contract_address;
    }
    if (object.ethereum_sender !== undefined && object.ethereum_sender !== null) {
      message.ethereumSender = object.ethereum_sender;
    }
    return message;
  },
  toAmino(message: QueryEthProphecyRequest): QueryEthProphecyRequestAmino {
    const obj: any = {};
    obj.ethereum_chain_id = message.ethereumChainId !== BigInt(0) ? message.ethereumChainId.toString() : undefined;
    obj.bridge_contract_address = message.bridgeContractAddress === "" ? undefined : message.bridgeContractAddress;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.token_contract_address = message.tokenContractAddress === "" ? undefined : message.tokenContractAddress;
    obj.ethereum_sender = message.ethereumSender === "" ? undefined : message.ethereumSender;
    return obj;
  },
  fromAminoMsg(object: QueryEthProphecyRequestAminoMsg): QueryEthProphecyRequest {
    return QueryEthProphecyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEthProphecyRequestProtoMsg): QueryEthProphecyRequest {
    return QueryEthProphecyRequest.decode(message.value);
  },
  toProto(message: QueryEthProphecyRequest): Uint8Array {
    return QueryEthProphecyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEthProphecyRequest): QueryEthProphecyRequestProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyRequest",
      value: QueryEthProphecyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEthProphecyResponse(): QueryEthProphecyResponse {
  return {
    id: "",
    status: undefined,
    claims: []
  };
}
export const QueryEthProphecyResponse = {
  typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyResponse",
  encode(message: QueryEthProphecyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.claims) {
      EthBridgeClaim.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEthProphecyResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => EthBridgeClaim.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryEthProphecyResponse>): QueryEthProphecyResponse {
    const message = createBaseQueryEthProphecyResponse();
    message.id = object.id ?? "";
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    message.claims = object.claims?.map(e => EthBridgeClaim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEthProphecyResponseAmino): QueryEthProphecyResponse {
    const message = createBaseQueryEthProphecyResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromAmino(object.status);
    }
    message.claims = object.claims?.map(e => EthBridgeClaim.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEthProphecyResponse): QueryEthProphecyResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.status = message.status ? Status.toAmino(message.status) : undefined;
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? EthBridgeClaim.toAmino(e) : undefined);
    } else {
      obj.claims = message.claims;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEthProphecyResponseAminoMsg): QueryEthProphecyResponse {
    return QueryEthProphecyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEthProphecyResponseProtoMsg): QueryEthProphecyResponse {
    return QueryEthProphecyResponse.decode(message.value);
  },
  toProto(message: QueryEthProphecyResponse): Uint8Array {
    return QueryEthProphecyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEthProphecyResponse): QueryEthProphecyResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyResponse",
      value: QueryEthProphecyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBlacklistRequest(): QueryBlacklistRequest {
  return {};
}
export const QueryBlacklistRequest = {
  typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistRequest",
  encode(_: QueryBlacklistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryBlacklistRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBlacklistRequest>): QueryBlacklistRequest {
    const message = createBaseQueryBlacklistRequest();
    return message;
  },
  fromAmino(_: QueryBlacklistRequestAmino): QueryBlacklistRequest {
    const message = createBaseQueryBlacklistRequest();
    return message;
  },
  toAmino(_: QueryBlacklistRequest): QueryBlacklistRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBlacklistRequestAminoMsg): QueryBlacklistRequest {
    return QueryBlacklistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlacklistRequestProtoMsg): QueryBlacklistRequest {
    return QueryBlacklistRequest.decode(message.value);
  },
  toProto(message: QueryBlacklistRequest): Uint8Array {
    return QueryBlacklistRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlacklistRequest): QueryBlacklistRequestProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistRequest",
      value: QueryBlacklistRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBlacklistResponse(): QueryBlacklistResponse {
  return {
    addresses: []
  };
}
export const QueryBlacklistResponse = {
  typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistResponse",
  encode(message: QueryBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryBlacklistResponse {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBlacklistResponse>): QueryBlacklistResponse {
    const message = createBaseQueryBlacklistResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryBlacklistResponseAmino): QueryBlacklistResponse {
    const message = createBaseQueryBlacklistResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryBlacklistResponse): QueryBlacklistResponseAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBlacklistResponseAminoMsg): QueryBlacklistResponse {
    return QueryBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlacklistResponseProtoMsg): QueryBlacklistResponse {
    return QueryBlacklistResponse.decode(message.value);
  },
  toProto(message: QueryBlacklistResponse): Uint8Array {
    return QueryBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlacklistResponse): QueryBlacklistResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistResponse",
      value: QueryBlacklistResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPauseRequest(): QueryPauseRequest {
  return {};
}
export const QueryPauseRequest = {
  typeUrl: "/sifnode.ethbridge.v1.QueryPauseRequest",
  encode(_: QueryPauseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPauseRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPauseRequest>): QueryPauseRequest {
    const message = createBaseQueryPauseRequest();
    return message;
  },
  fromAmino(_: QueryPauseRequestAmino): QueryPauseRequest {
    const message = createBaseQueryPauseRequest();
    return message;
  },
  toAmino(_: QueryPauseRequest): QueryPauseRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPauseRequestAminoMsg): QueryPauseRequest {
    return QueryPauseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPauseRequestProtoMsg): QueryPauseRequest {
    return QueryPauseRequest.decode(message.value);
  },
  toProto(message: QueryPauseRequest): Uint8Array {
    return QueryPauseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPauseRequest): QueryPauseRequestProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.QueryPauseRequest",
      value: QueryPauseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPauseResponse(): QueryPauseResponse {
  return {
    isPaused: false
  };
}
export const QueryPauseResponse = {
  typeUrl: "/sifnode.ethbridge.v1.QueryPauseResponse",
  encode(message: QueryPauseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isPaused === true) {
      writer.uint32(8).bool(message.isPaused);
    }
    return writer;
  },
  fromJSON(object: any): QueryPauseResponse {
    return {
      isPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false
    };
  },
  fromPartial(object: Partial<QueryPauseResponse>): QueryPauseResponse {
    const message = createBaseQueryPauseResponse();
    message.isPaused = object.isPaused ?? false;
    return message;
  },
  fromAmino(object: QueryPauseResponseAmino): QueryPauseResponse {
    const message = createBaseQueryPauseResponse();
    if (object.is_paused !== undefined && object.is_paused !== null) {
      message.isPaused = object.is_paused;
    }
    return message;
  },
  toAmino(message: QueryPauseResponse): QueryPauseResponseAmino {
    const obj: any = {};
    obj.is_paused = message.isPaused === false ? undefined : message.isPaused;
    return obj;
  },
  fromAminoMsg(object: QueryPauseResponseAminoMsg): QueryPauseResponse {
    return QueryPauseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPauseResponseProtoMsg): QueryPauseResponse {
    return QueryPauseResponse.decode(message.value);
  },
  toProto(message: QueryPauseResponse): Uint8Array {
    return QueryPauseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPauseResponse): QueryPauseResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.QueryPauseResponse",
      value: QueryPauseResponse.encode(message).finish()
    };
  }
};