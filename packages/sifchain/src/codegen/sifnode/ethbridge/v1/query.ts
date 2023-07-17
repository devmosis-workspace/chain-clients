import { Status, StatusSDKType } from "../../oracle/v1/types";
import { EthBridgeClaim, EthBridgeClaimSDKType } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequest {
  ethereumChainId: Long;
  /** bridge_contract_address is an EthereumAddress */
  bridgeContractAddress: string;
  nonce: Long;
  symbol: string;
  /** token_contract_address is an EthereumAddress */
  tokenContractAddress: string;
  /** ethereum_sender is an EthereumAddress */
  ethereumSender: string;
}
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequestSDKType {
  ethereum_chain_id: Long;
  bridge_contract_address: string;
  nonce: Long;
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
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponseSDKType {
  id: string;
  status?: StatusSDKType;
  claims: EthBridgeClaimSDKType[];
}
export interface QueryBlacklistRequest {}
export interface QueryBlacklistRequestSDKType {}
export interface QueryBlacklistResponse {
  addresses: string[];
}
export interface QueryBlacklistResponseSDKType {
  addresses: string[];
}
export interface QueryPauseRequest {}
export interface QueryPauseRequestSDKType {}
export interface QueryPauseResponse {
  isPaused: boolean;
}
export interface QueryPauseResponseSDKType {
  is_paused: boolean;
}
function createBaseQueryEthProphecyRequest(): QueryEthProphecyRequest {
  return {
    ethereumChainId: Long.ZERO,
    bridgeContractAddress: "",
    nonce: Long.ZERO,
    symbol: "",
    tokenContractAddress: "",
    ethereumSender: ""
  };
}
export const QueryEthProphecyRequest = {
  encode(message: QueryEthProphecyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ethereumChainId.isZero()) {
      writer.uint32(8).int64(message.ethereumChainId);
    }
    if (message.bridgeContractAddress !== "") {
      writer.uint32(18).string(message.bridgeContractAddress);
    }
    if (!message.nonce.isZero()) {
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
      ethereumChainId: isSet(object.ethereumChainId) ? Long.fromValue(object.ethereumChainId) : Long.ZERO,
      bridgeContractAddress: isSet(object.bridgeContractAddress) ? String(object.bridgeContractAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.ZERO,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenContractAddress: isSet(object.tokenContractAddress) ? String(object.tokenContractAddress) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : ""
    };
  },
  fromPartial(object: Partial<QueryEthProphecyRequest>): QueryEthProphecyRequest {
    const message = createBaseQueryEthProphecyRequest();
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? Long.fromValue(object.ethereumChainId) : Long.ZERO;
    message.bridgeContractAddress = object.bridgeContractAddress ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.ZERO;
    message.symbol = object.symbol ?? "";
    message.tokenContractAddress = object.tokenContractAddress ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    return message;
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
  encode(message: QueryEthProphecyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryBlacklistRequest(): QueryBlacklistRequest {
  return {};
}
export const QueryBlacklistRequest = {
  encode(_: QueryBlacklistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBlacklistRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBlacklistRequest>): QueryBlacklistRequest {
    const message = createBaseQueryBlacklistRequest();
    return message;
  }
};
function createBaseQueryBlacklistResponse(): QueryBlacklistResponse {
  return {
    addresses: []
  };
}
export const QueryBlacklistResponse = {
  encode(message: QueryBlacklistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryPauseRequest(): QueryPauseRequest {
  return {};
}
export const QueryPauseRequest = {
  encode(_: QueryPauseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryPauseRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPauseRequest>): QueryPauseRequest {
    const message = createBaseQueryPauseRequest();
    return message;
  }
};
function createBaseQueryPauseResponse(): QueryPauseResponse {
  return {
    isPaused: false
  };
}
export const QueryPauseResponse = {
  encode(message: QueryPauseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};