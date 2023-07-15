import { Chain, ChainSDKType, Asset, AssetSDKType } from "../../nexus/exported/v1beta1/types";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Fee, FeeSDKType } from "./types";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequest {
  sender: Uint8Array;
  recipientAddr: string;
  recipientChain: string;
  asset: string;
}
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequestSDKType {
  sender: Uint8Array;
  recipient_addr: string;
  recipient_chain: string;
  asset: string;
}
export interface LinkResponse {
  depositAddr: string;
}
export interface LinkResponseSDKType {
  deposit_addr: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
  sender: Uint8Array;
  depositAddress: Uint8Array;
  denom: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequestSDKType {
  sender: Uint8Array;
  deposit_address: Uint8Array;
  denom: string;
}
export interface ConfirmDepositResponse {}
export interface ConfirmDepositResponseSDKType {}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
  sender: Uint8Array;
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequestSDKType {
  sender: Uint8Array;
}
export interface ExecutePendingTransfersResponse {}
export interface ExecutePendingTransfersResponseSDKType {}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
/** @deprecated */
export interface RegisterIBCPathRequest {
  sender: Uint8Array;
  chain: string;
  path: string;
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
/** @deprecated */
export interface RegisterIBCPathRequestSDKType {
  sender: Uint8Array;
  chain: string;
  path: string;
}
export interface RegisterIBCPathResponse {}
export interface RegisterIBCPathResponseSDKType {}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
  sender: Uint8Array;
  /** @deprecated */
  chain?: Chain;
  addrPrefix: string;
  /** @deprecated */
  nativeAssets: Asset[];
  cosmosChain: string;
  ibcPath: string;
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequestSDKType {
  sender: Uint8Array;
  /** @deprecated */
  chain?: ChainSDKType;
  addr_prefix: string;
  /** @deprecated */
  native_assets: AssetSDKType[];
  cosmos_chain: string;
  ibc_path: string;
}
export interface AddCosmosBasedChainResponse {}
export interface AddCosmosBasedChainResponseSDKType {}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
  sender: Uint8Array;
  chain: string;
  asset?: Asset;
  limit: Uint8Array;
  window?: Duration;
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequestSDKType {
  sender: Uint8Array;
  chain: string;
  asset?: AssetSDKType;
  limit: Uint8Array;
  window?: DurationSDKType;
}
export interface RegisterAssetResponse {}
export interface RegisterAssetResponseSDKType {}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
  sender: Uint8Array;
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequestSDKType {
  sender: Uint8Array;
}
export interface RouteIBCTransfersResponse {}
export interface RouteIBCTransfersResponseSDKType {}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
  sender: Uint8Array;
  feeCollector: Uint8Array;
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequestSDKType {
  sender: Uint8Array;
  fee_collector: Uint8Array;
}
export interface RegisterFeeCollectorResponse {}
export interface RegisterFeeCollectorResponseSDKType {}
export interface RetryIBCTransferRequest {
  sender: Uint8Array;
  chain: string;
  id: Long;
}
export interface RetryIBCTransferRequestSDKType {
  sender: Uint8Array;
  chain: string;
  id: Long;
}
export interface RetryIBCTransferResponse {}
export interface RetryIBCTransferResponseSDKType {}
export interface RouteMessageRequest {
  sender: Uint8Array;
  id: string;
  payload: Uint8Array;
}
export interface RouteMessageRequestSDKType {
  sender: Uint8Array;
  id: string;
  payload: Uint8Array;
}
export interface RouteMessageResponse {}
export interface RouteMessageResponseSDKType {}
export interface CallContractRequest {
  sender: Uint8Array;
  chain: string;
  contractAddress: string;
  payload: Uint8Array;
  fee?: Fee;
}
export interface CallContractRequestSDKType {
  sender: Uint8Array;
  chain: string;
  contract_address: string;
  payload: Uint8Array;
  fee?: FeeSDKType;
}
export interface CallContractResponse {}
export interface CallContractResponseSDKType {}
function createBaseLinkRequest(): LinkRequest {
  return {
    sender: new Uint8Array(),
    recipientAddr: "",
    recipientChain: "",
    asset: ""
  };
}
export const LinkRequest = {
  encode(message: LinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.recipientAddr !== "") {
      writer.uint32(18).string(message.recipientAddr);
    }
    if (message.recipientChain !== "") {
      writer.uint32(26).string(message.recipientChain);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    return writer;
  },
  fromJSON(object: any): LinkRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  fromPartial(object: Partial<LinkRequest>): LinkRequest {
    const message = createBaseLinkRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.recipientAddr = object.recipientAddr ?? "";
    message.recipientChain = object.recipientChain ?? "";
    message.asset = object.asset ?? "";
    return message;
  }
};
function createBaseLinkResponse(): LinkResponse {
  return {
    depositAddr: ""
  };
}
export const LinkResponse = {
  encode(message: LinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }
    return writer;
  },
  fromJSON(object: any): LinkResponse {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : ""
    };
  },
  fromPartial(object: Partial<LinkResponse>): LinkResponse {
    const message = createBaseLinkResponse();
    message.depositAddr = object.depositAddr ?? "";
    return message;
  }
};
function createBaseConfirmDepositRequest(): ConfirmDepositRequest {
  return {
    sender: new Uint8Array(),
    depositAddress: new Uint8Array(),
    denom: ""
  };
}
export const ConfirmDepositRequest = {
  encode(message: ConfirmDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.depositAddress.length !== 0) {
      writer.uint32(34).bytes(message.depositAddress);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmDepositRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      depositAddress: isSet(object.depositAddress) ? bytesFromBase64(object.depositAddress) : new Uint8Array(),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<ConfirmDepositRequest>): ConfirmDepositRequest {
    const message = createBaseConfirmDepositRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.depositAddress = object.depositAddress ?? new Uint8Array();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseConfirmDepositResponse(): ConfirmDepositResponse {
  return {};
}
export const ConfirmDepositResponse = {
  encode(_: ConfirmDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ConfirmDepositResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmDepositResponse>): ConfirmDepositResponse {
    const message = createBaseConfirmDepositResponse();
    return message;
  }
};
function createBaseExecutePendingTransfersRequest(): ExecutePendingTransfersRequest {
  return {
    sender: new Uint8Array()
  };
}
export const ExecutePendingTransfersRequest = {
  encode(message: ExecutePendingTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): ExecutePendingTransfersRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ExecutePendingTransfersRequest>): ExecutePendingTransfersRequest {
    const message = createBaseExecutePendingTransfersRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  }
};
function createBaseExecutePendingTransfersResponse(): ExecutePendingTransfersResponse {
  return {};
}
export const ExecutePendingTransfersResponse = {
  encode(_: ExecutePendingTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ExecutePendingTransfersResponse {
    return {};
  },
  fromPartial(_: Partial<ExecutePendingTransfersResponse>): ExecutePendingTransfersResponse {
    const message = createBaseExecutePendingTransfersResponse();
    return message;
  }
};
function createBaseRegisterIBCPathRequest(): RegisterIBCPathRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    path: ""
  };
}
export const RegisterIBCPathRequest = {
  encode(message: RegisterIBCPathRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },
  fromJSON(object: any): RegisterIBCPathRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      path: isSet(object.path) ? String(object.path) : ""
    };
  },
  fromPartial(object: Partial<RegisterIBCPathRequest>): RegisterIBCPathRequest {
    const message = createBaseRegisterIBCPathRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.path = object.path ?? "";
    return message;
  }
};
function createBaseRegisterIBCPathResponse(): RegisterIBCPathResponse {
  return {};
}
export const RegisterIBCPathResponse = {
  encode(_: RegisterIBCPathResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterIBCPathResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterIBCPathResponse>): RegisterIBCPathResponse {
    const message = createBaseRegisterIBCPathResponse();
    return message;
  }
};
function createBaseAddCosmosBasedChainRequest(): AddCosmosBasedChainRequest {
  return {
    sender: new Uint8Array(),
    chain: undefined,
    addrPrefix: "",
    nativeAssets: [],
    cosmosChain: "",
    ibcPath: ""
  };
}
export const AddCosmosBasedChainRequest = {
  encode(message: AddCosmosBasedChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.addrPrefix !== "") {
      writer.uint32(26).string(message.addrPrefix);
    }
    for (const v of message.nativeAssets) {
      Asset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.cosmosChain !== "") {
      writer.uint32(50).string(message.cosmosChain);
    }
    if (message.ibcPath !== "") {
      writer.uint32(58).string(message.ibcPath);
    }
    return writer;
  },
  fromJSON(object: any): AddCosmosBasedChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
      addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : "",
      nativeAssets: Array.isArray(object?.nativeAssets) ? object.nativeAssets.map((e: any) => Asset.fromJSON(e)) : [],
      cosmosChain: isSet(object.cosmosChain) ? String(object.cosmosChain) : "",
      ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : ""
    };
  },
  fromPartial(object: Partial<AddCosmosBasedChainRequest>): AddCosmosBasedChainRequest {
    const message = createBaseAddCosmosBasedChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
    message.addrPrefix = object.addrPrefix ?? "";
    message.nativeAssets = object.nativeAssets?.map(e => Asset.fromPartial(e)) || [];
    message.cosmosChain = object.cosmosChain ?? "";
    message.ibcPath = object.ibcPath ?? "";
    return message;
  }
};
function createBaseAddCosmosBasedChainResponse(): AddCosmosBasedChainResponse {
  return {};
}
export const AddCosmosBasedChainResponse = {
  encode(_: AddCosmosBasedChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): AddCosmosBasedChainResponse {
    return {};
  },
  fromPartial(_: Partial<AddCosmosBasedChainResponse>): AddCosmosBasedChainResponse {
    const message = createBaseAddCosmosBasedChainResponse();
    return message;
  }
};
function createBaseRegisterAssetRequest(): RegisterAssetRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    asset: undefined,
    limit: new Uint8Array(),
    window: undefined
  };
}
export const RegisterAssetRequest = {
  encode(message: RegisterAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.limit.length !== 0) {
      writer.uint32(34).bytes(message.limit);
    }
    if (message.window !== undefined) {
      Duration.encode(message.window, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RegisterAssetRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
      window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
    };
  },
  fromPartial(object: Partial<RegisterAssetRequest>): RegisterAssetRequest {
    const message = createBaseRegisterAssetRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.limit = object.limit ?? new Uint8Array();
    message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
    return message;
  }
};
function createBaseRegisterAssetResponse(): RegisterAssetResponse {
  return {};
}
export const RegisterAssetResponse = {
  encode(_: RegisterAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterAssetResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterAssetResponse>): RegisterAssetResponse {
    const message = createBaseRegisterAssetResponse();
    return message;
  }
};
function createBaseRouteIBCTransfersRequest(): RouteIBCTransfersRequest {
  return {
    sender: new Uint8Array()
  };
}
export const RouteIBCTransfersRequest = {
  encode(message: RouteIBCTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): RouteIBCTransfersRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RouteIBCTransfersRequest>): RouteIBCTransfersRequest {
    const message = createBaseRouteIBCTransfersRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  }
};
function createBaseRouteIBCTransfersResponse(): RouteIBCTransfersResponse {
  return {};
}
export const RouteIBCTransfersResponse = {
  encode(_: RouteIBCTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RouteIBCTransfersResponse {
    return {};
  },
  fromPartial(_: Partial<RouteIBCTransfersResponse>): RouteIBCTransfersResponse {
    const message = createBaseRouteIBCTransfersResponse();
    return message;
  }
};
function createBaseRegisterFeeCollectorRequest(): RegisterFeeCollectorRequest {
  return {
    sender: new Uint8Array(),
    feeCollector: new Uint8Array()
  };
}
export const RegisterFeeCollectorRequest = {
  encode(message: RegisterFeeCollectorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.feeCollector.length !== 0) {
      writer.uint32(18).bytes(message.feeCollector);
    }
    return writer;
  },
  fromJSON(object: any): RegisterFeeCollectorRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      feeCollector: isSet(object.feeCollector) ? bytesFromBase64(object.feeCollector) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RegisterFeeCollectorRequest>): RegisterFeeCollectorRequest {
    const message = createBaseRegisterFeeCollectorRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.feeCollector = object.feeCollector ?? new Uint8Array();
    return message;
  }
};
function createBaseRegisterFeeCollectorResponse(): RegisterFeeCollectorResponse {
  return {};
}
export const RegisterFeeCollectorResponse = {
  encode(_: RegisterFeeCollectorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterFeeCollectorResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterFeeCollectorResponse>): RegisterFeeCollectorResponse {
    const message = createBaseRegisterFeeCollectorResponse();
    return message;
  }
};
function createBaseRetryIBCTransferRequest(): RetryIBCTransferRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    id: Long.UZERO
  };
}
export const RetryIBCTransferRequest = {
  encode(message: RetryIBCTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): RetryIBCTransferRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RetryIBCTransferRequest>): RetryIBCTransferRequest {
    const message = createBaseRetryIBCTransferRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseRetryIBCTransferResponse(): RetryIBCTransferResponse {
  return {};
}
export const RetryIBCTransferResponse = {
  encode(_: RetryIBCTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RetryIBCTransferResponse {
    return {};
  },
  fromPartial(_: Partial<RetryIBCTransferResponse>): RetryIBCTransferResponse {
    const message = createBaseRetryIBCTransferResponse();
    return message;
  }
};
function createBaseRouteMessageRequest(): RouteMessageRequest {
  return {
    sender: new Uint8Array(),
    id: "",
    payload: new Uint8Array()
  };
}
export const RouteMessageRequest = {
  encode(message: RouteMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): RouteMessageRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      id: isSet(object.id) ? String(object.id) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RouteMessageRequest>): RouteMessageRequest {
    const message = createBaseRouteMessageRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.id = object.id ?? "";
    message.payload = object.payload ?? new Uint8Array();
    return message;
  }
};
function createBaseRouteMessageResponse(): RouteMessageResponse {
  return {};
}
export const RouteMessageResponse = {
  encode(_: RouteMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RouteMessageResponse {
    return {};
  },
  fromPartial(_: Partial<RouteMessageResponse>): RouteMessageResponse {
    const message = createBaseRouteMessageResponse();
    return message;
  }
};
function createBaseCallContractRequest(): CallContractRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    contractAddress: "",
    payload: new Uint8Array(),
    fee: undefined
  };
}
export const CallContractRequest = {
  encode(message: CallContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CallContractRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<CallContractRequest>): CallContractRequest {
    const message = createBaseCallContractRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseCallContractResponse(): CallContractResponse {
  return {};
}
export const CallContractResponse = {
  encode(_: CallContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): CallContractResponse {
    return {};
  },
  fromPartial(_: Partial<CallContractResponse>): CallContractResponse {
    const message = createBaseCallContractResponse();
    return message;
  }
};