import { Chain, ChainAmino, ChainSDKType, Asset, AssetAmino, AssetSDKType } from "../../nexus/exported/v1beta1/types";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Fee, FeeAmino, FeeSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
export interface LinkRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.LinkRequest";
  value: Uint8Array;
}
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequestAmino {
  sender?: string;
  recipient_addr?: string;
  recipient_chain?: string;
  asset?: string;
}
export interface LinkRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.LinkRequest";
  value: LinkRequestAmino;
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
export interface LinkResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.LinkResponse";
  value: Uint8Array;
}
export interface LinkResponseAmino {
  deposit_addr?: string;
}
export interface LinkResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.LinkResponse";
  value: LinkResponseAmino;
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
export interface ConfirmDepositRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest";
  value: Uint8Array;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequestAmino {
  sender?: string;
  deposit_address?: string;
  denom?: string;
}
export interface ConfirmDepositRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest";
  value: ConfirmDepositRequestAmino;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequestSDKType {
  sender: Uint8Array;
  deposit_address: Uint8Array;
  denom: string;
}
export interface ConfirmDepositResponse {}
export interface ConfirmDepositResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse";
  value: Uint8Array;
}
export interface ConfirmDepositResponseAmino {}
export interface ConfirmDepositResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse";
  value: ConfirmDepositResponseAmino;
}
export interface ConfirmDepositResponseSDKType {}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
  sender: Uint8Array;
}
export interface ExecutePendingTransfersRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest";
  value: Uint8Array;
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequestAmino {
  sender?: string;
}
export interface ExecutePendingTransfersRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest";
  value: ExecutePendingTransfersRequestAmino;
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequestSDKType {
  sender: Uint8Array;
}
export interface ExecutePendingTransfersResponse {}
export interface ExecutePendingTransfersResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse";
  value: Uint8Array;
}
export interface ExecutePendingTransfersResponseAmino {}
export interface ExecutePendingTransfersResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse";
  value: ExecutePendingTransfersResponseAmino;
}
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
export interface RegisterIBCPathRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest";
  value: Uint8Array;
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
/** @deprecated */
export interface RegisterIBCPathRequestAmino {
  sender?: string;
  chain?: string;
  path?: string;
}
export interface RegisterIBCPathRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest";
  value: RegisterIBCPathRequestAmino;
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
export interface RegisterIBCPathResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse";
  value: Uint8Array;
}
export interface RegisterIBCPathResponseAmino {}
export interface RegisterIBCPathResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse";
  value: RegisterIBCPathResponseAmino;
}
export interface RegisterIBCPathResponseSDKType {}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
  sender: Uint8Array;
  /** @deprecated */
  chain: Chain;
  addrPrefix: string;
  /** @deprecated */
  nativeAssets: Asset[];
  cosmosChain: string;
  ibcPath: string;
}
export interface AddCosmosBasedChainRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest";
  value: Uint8Array;
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequestAmino {
  sender?: string;
  /** @deprecated */
  chain?: ChainAmino;
  addr_prefix?: string;
  /** @deprecated */
  native_assets?: AssetAmino[];
  cosmos_chain?: string;
  ibc_path?: string;
}
export interface AddCosmosBasedChainRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest";
  value: AddCosmosBasedChainRequestAmino;
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequestSDKType {
  sender: Uint8Array;
  /** @deprecated */
  chain: ChainSDKType;
  addr_prefix: string;
  /** @deprecated */
  native_assets: AssetSDKType[];
  cosmos_chain: string;
  ibc_path: string;
}
export interface AddCosmosBasedChainResponse {}
export interface AddCosmosBasedChainResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
  value: Uint8Array;
}
export interface AddCosmosBasedChainResponseAmino {}
export interface AddCosmosBasedChainResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
  value: AddCosmosBasedChainResponseAmino;
}
export interface AddCosmosBasedChainResponseSDKType {}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
  sender: Uint8Array;
  chain: string;
  asset: Asset;
  limit: Uint8Array;
  window: Duration;
}
export interface RegisterAssetRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetRequest";
  value: Uint8Array;
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequestAmino {
  sender?: string;
  chain?: string;
  asset?: AssetAmino;
  limit?: string;
  window?: DurationAmino;
}
export interface RegisterAssetRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RegisterAssetRequest";
  value: RegisterAssetRequestAmino;
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequestSDKType {
  sender: Uint8Array;
  chain: string;
  asset: AssetSDKType;
  limit: Uint8Array;
  window: DurationSDKType;
}
export interface RegisterAssetResponse {}
export interface RegisterAssetResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetResponse";
  value: Uint8Array;
}
export interface RegisterAssetResponseAmino {}
export interface RegisterAssetResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RegisterAssetResponse";
  value: RegisterAssetResponseAmino;
}
export interface RegisterAssetResponseSDKType {}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
  sender: Uint8Array;
}
export interface RouteIBCTransfersRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest";
  value: Uint8Array;
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequestAmino {
  sender?: string;
}
export interface RouteIBCTransfersRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest";
  value: RouteIBCTransfersRequestAmino;
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequestSDKType {
  sender: Uint8Array;
}
export interface RouteIBCTransfersResponse {}
export interface RouteIBCTransfersResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse";
  value: Uint8Array;
}
export interface RouteIBCTransfersResponseAmino {}
export interface RouteIBCTransfersResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse";
  value: RouteIBCTransfersResponseAmino;
}
export interface RouteIBCTransfersResponseSDKType {}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
  sender: Uint8Array;
  feeCollector: Uint8Array;
}
export interface RegisterFeeCollectorRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest";
  value: Uint8Array;
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequestAmino {
  sender?: string;
  fee_collector?: string;
}
export interface RegisterFeeCollectorRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest";
  value: RegisterFeeCollectorRequestAmino;
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
export interface RegisterFeeCollectorResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
  value: Uint8Array;
}
export interface RegisterFeeCollectorResponseAmino {}
export interface RegisterFeeCollectorResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
  value: RegisterFeeCollectorResponseAmino;
}
export interface RegisterFeeCollectorResponseSDKType {}
export interface RetryIBCTransferRequest {
  sender: Uint8Array;
  /** @deprecated */
  chain: string;
  id: bigint;
}
export interface RetryIBCTransferRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
  value: Uint8Array;
}
export interface RetryIBCTransferRequestAmino {
  sender?: string;
  /** @deprecated */
  chain?: string;
  id?: string;
}
export interface RetryIBCTransferRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
  value: RetryIBCTransferRequestAmino;
}
export interface RetryIBCTransferRequestSDKType {
  sender: Uint8Array;
  /** @deprecated */
  chain: string;
  id: bigint;
}
export interface RetryIBCTransferResponse {}
export interface RetryIBCTransferResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse";
  value: Uint8Array;
}
export interface RetryIBCTransferResponseAmino {}
export interface RetryIBCTransferResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse";
  value: RetryIBCTransferResponseAmino;
}
export interface RetryIBCTransferResponseSDKType {}
export interface RouteMessageRequest {
  sender: Uint8Array;
  id: string;
  payload: Uint8Array;
  feegranter: Uint8Array;
}
export interface RouteMessageRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageRequest";
  value: Uint8Array;
}
export interface RouteMessageRequestAmino {
  sender?: string;
  id?: string;
  payload?: string;
  feegranter?: string;
}
export interface RouteMessageRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RouteMessageRequest";
  value: RouteMessageRequestAmino;
}
export interface RouteMessageRequestSDKType {
  sender: Uint8Array;
  id: string;
  payload: Uint8Array;
  feegranter: Uint8Array;
}
export interface RouteMessageResponse {}
export interface RouteMessageResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageResponse";
  value: Uint8Array;
}
export interface RouteMessageResponseAmino {}
export interface RouteMessageResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.RouteMessageResponse";
  value: RouteMessageResponseAmino;
}
export interface RouteMessageResponseSDKType {}
export interface CallContractRequest {
  sender: Uint8Array;
  chain: string;
  contractAddress: string;
  payload: Uint8Array;
  fee?: Fee;
}
export interface CallContractRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractRequest";
  value: Uint8Array;
}
export interface CallContractRequestAmino {
  sender?: string;
  chain?: string;
  contract_address?: string;
  payload?: string;
  fee?: FeeAmino;
}
export interface CallContractRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.CallContractRequest";
  value: CallContractRequestAmino;
}
export interface CallContractRequestSDKType {
  sender: Uint8Array;
  chain: string;
  contract_address: string;
  payload: Uint8Array;
  fee?: FeeSDKType;
}
export interface CallContractResponse {}
export interface CallContractResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractResponse";
  value: Uint8Array;
}
export interface CallContractResponseAmino {}
export interface CallContractResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.CallContractResponse";
  value: CallContractResponseAmino;
}
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
  typeUrl: "/axelar.axelarnet.v1beta1.LinkRequest",
  encode(message: LinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LinkRequestAmino): LinkRequest {
    const message = createBaseLinkRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.recipient_addr !== undefined && object.recipient_addr !== null) {
      message.recipientAddr = object.recipient_addr;
    }
    if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
      message.recipientChain = object.recipient_chain;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: LinkRequest): LinkRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.recipient_addr = message.recipientAddr;
    obj.recipient_chain = message.recipientChain;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: LinkRequestAminoMsg): LinkRequest {
    return LinkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkRequestProtoMsg): LinkRequest {
    return LinkRequest.decode(message.value);
  },
  toProto(message: LinkRequest): Uint8Array {
    return LinkRequest.encode(message).finish();
  },
  toProtoMsg(message: LinkRequest): LinkRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.LinkRequest",
      value: LinkRequest.encode(message).finish()
    };
  }
};
function createBaseLinkResponse(): LinkResponse {
  return {
    depositAddr: ""
  };
}
export const LinkResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.LinkResponse",
  encode(message: LinkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LinkResponseAmino): LinkResponse {
    const message = createBaseLinkResponse();
    if (object.deposit_addr !== undefined && object.deposit_addr !== null) {
      message.depositAddr = object.deposit_addr;
    }
    return message;
  },
  toAmino(message: LinkResponse): LinkResponseAmino {
    const obj: any = {};
    obj.deposit_addr = message.depositAddr;
    return obj;
  },
  fromAminoMsg(object: LinkResponseAminoMsg): LinkResponse {
    return LinkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkResponseProtoMsg): LinkResponse {
    return LinkResponse.decode(message.value);
  },
  toProto(message: LinkResponse): Uint8Array {
    return LinkResponse.encode(message).finish();
  },
  toProtoMsg(message: LinkResponse): LinkResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.LinkResponse",
      value: LinkResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest",
  encode(message: ConfirmDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConfirmDepositRequestAmino): ConfirmDepositRequest {
    const message = createBaseConfirmDepositRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.deposit_address !== undefined && object.deposit_address !== null) {
      message.depositAddress = bytesFromBase64(object.deposit_address);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: ConfirmDepositRequest): ConfirmDepositRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.deposit_address = message.depositAddress ? base64FromBytes(message.depositAddress) : undefined;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: ConfirmDepositRequestAminoMsg): ConfirmDepositRequest {
    return ConfirmDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmDepositRequestProtoMsg): ConfirmDepositRequest {
    return ConfirmDepositRequest.decode(message.value);
  },
  toProto(message: ConfirmDepositRequest): Uint8Array {
    return ConfirmDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfirmDepositRequest): ConfirmDepositRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest",
      value: ConfirmDepositRequest.encode(message).finish()
    };
  }
};
function createBaseConfirmDepositResponse(): ConfirmDepositResponse {
  return {};
}
export const ConfirmDepositResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse",
  encode(_: ConfirmDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ConfirmDepositResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmDepositResponse>): ConfirmDepositResponse {
    const message = createBaseConfirmDepositResponse();
    return message;
  },
  fromAmino(_: ConfirmDepositResponseAmino): ConfirmDepositResponse {
    const message = createBaseConfirmDepositResponse();
    return message;
  },
  toAmino(_: ConfirmDepositResponse): ConfirmDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfirmDepositResponseAminoMsg): ConfirmDepositResponse {
    return ConfirmDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmDepositResponseProtoMsg): ConfirmDepositResponse {
    return ConfirmDepositResponse.decode(message.value);
  },
  toProto(message: ConfirmDepositResponse): Uint8Array {
    return ConfirmDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfirmDepositResponse): ConfirmDepositResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse",
      value: ConfirmDepositResponse.encode(message).finish()
    };
  }
};
function createBaseExecutePendingTransfersRequest(): ExecutePendingTransfersRequest {
  return {
    sender: new Uint8Array()
  };
}
export const ExecutePendingTransfersRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest",
  encode(message: ExecutePendingTransfersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ExecutePendingTransfersRequestAmino): ExecutePendingTransfersRequest {
    const message = createBaseExecutePendingTransfersRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    return message;
  },
  toAmino(message: ExecutePendingTransfersRequest): ExecutePendingTransfersRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExecutePendingTransfersRequestAminoMsg): ExecutePendingTransfersRequest {
    return ExecutePendingTransfersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutePendingTransfersRequestProtoMsg): ExecutePendingTransfersRequest {
    return ExecutePendingTransfersRequest.decode(message.value);
  },
  toProto(message: ExecutePendingTransfersRequest): Uint8Array {
    return ExecutePendingTransfersRequest.encode(message).finish();
  },
  toProtoMsg(message: ExecutePendingTransfersRequest): ExecutePendingTransfersRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest",
      value: ExecutePendingTransfersRequest.encode(message).finish()
    };
  }
};
function createBaseExecutePendingTransfersResponse(): ExecutePendingTransfersResponse {
  return {};
}
export const ExecutePendingTransfersResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse",
  encode(_: ExecutePendingTransfersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ExecutePendingTransfersResponse {
    return {};
  },
  fromPartial(_: Partial<ExecutePendingTransfersResponse>): ExecutePendingTransfersResponse {
    const message = createBaseExecutePendingTransfersResponse();
    return message;
  },
  fromAmino(_: ExecutePendingTransfersResponseAmino): ExecutePendingTransfersResponse {
    const message = createBaseExecutePendingTransfersResponse();
    return message;
  },
  toAmino(_: ExecutePendingTransfersResponse): ExecutePendingTransfersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ExecutePendingTransfersResponseAminoMsg): ExecutePendingTransfersResponse {
    return ExecutePendingTransfersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutePendingTransfersResponseProtoMsg): ExecutePendingTransfersResponse {
    return ExecutePendingTransfersResponse.decode(message.value);
  },
  toProto(message: ExecutePendingTransfersResponse): Uint8Array {
    return ExecutePendingTransfersResponse.encode(message).finish();
  },
  toProtoMsg(message: ExecutePendingTransfersResponse): ExecutePendingTransfersResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse",
      value: ExecutePendingTransfersResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest",
  encode(message: RegisterIBCPathRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RegisterIBCPathRequestAmino): RegisterIBCPathRequest {
    const message = createBaseRegisterIBCPathRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    return message;
  },
  toAmino(message: RegisterIBCPathRequest): RegisterIBCPathRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain;
    obj.path = message.path;
    return obj;
  },
  fromAminoMsg(object: RegisterIBCPathRequestAminoMsg): RegisterIBCPathRequest {
    return RegisterIBCPathRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterIBCPathRequestProtoMsg): RegisterIBCPathRequest {
    return RegisterIBCPathRequest.decode(message.value);
  },
  toProto(message: RegisterIBCPathRequest): Uint8Array {
    return RegisterIBCPathRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterIBCPathRequest): RegisterIBCPathRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest",
      value: RegisterIBCPathRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterIBCPathResponse(): RegisterIBCPathResponse {
  return {};
}
export const RegisterIBCPathResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse",
  encode(_: RegisterIBCPathResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterIBCPathResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterIBCPathResponse>): RegisterIBCPathResponse {
    const message = createBaseRegisterIBCPathResponse();
    return message;
  },
  fromAmino(_: RegisterIBCPathResponseAmino): RegisterIBCPathResponse {
    const message = createBaseRegisterIBCPathResponse();
    return message;
  },
  toAmino(_: RegisterIBCPathResponse): RegisterIBCPathResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterIBCPathResponseAminoMsg): RegisterIBCPathResponse {
    return RegisterIBCPathResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterIBCPathResponseProtoMsg): RegisterIBCPathResponse {
    return RegisterIBCPathResponse.decode(message.value);
  },
  toProto(message: RegisterIBCPathResponse): Uint8Array {
    return RegisterIBCPathResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterIBCPathResponse): RegisterIBCPathResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse",
      value: RegisterIBCPathResponse.encode(message).finish()
    };
  }
};
function createBaseAddCosmosBasedChainRequest(): AddCosmosBasedChainRequest {
  return {
    sender: new Uint8Array(),
    chain: Chain.fromPartial({}),
    addrPrefix: "",
    nativeAssets: [],
    cosmosChain: "",
    ibcPath: ""
  };
}
export const AddCosmosBasedChainRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest",
  encode(message: AddCosmosBasedChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AddCosmosBasedChainRequestAmino): AddCosmosBasedChainRequest {
    const message = createBaseAddCosmosBasedChainRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = Chain.fromAmino(object.chain);
    }
    if (object.addr_prefix !== undefined && object.addr_prefix !== null) {
      message.addrPrefix = object.addr_prefix;
    }
    message.nativeAssets = object.native_assets?.map(e => Asset.fromAmino(e)) || [];
    if (object.cosmos_chain !== undefined && object.cosmos_chain !== null) {
      message.cosmosChain = object.cosmos_chain;
    }
    if (object.ibc_path !== undefined && object.ibc_path !== null) {
      message.ibcPath = object.ibc_path;
    }
    return message;
  },
  toAmino(message: AddCosmosBasedChainRequest): AddCosmosBasedChainRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
    obj.addr_prefix = message.addrPrefix;
    if (message.nativeAssets) {
      obj.native_assets = message.nativeAssets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.native_assets = [];
    }
    obj.cosmos_chain = message.cosmosChain;
    obj.ibc_path = message.ibcPath;
    return obj;
  },
  fromAminoMsg(object: AddCosmosBasedChainRequestAminoMsg): AddCosmosBasedChainRequest {
    return AddCosmosBasedChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AddCosmosBasedChainRequestProtoMsg): AddCosmosBasedChainRequest {
    return AddCosmosBasedChainRequest.decode(message.value);
  },
  toProto(message: AddCosmosBasedChainRequest): Uint8Array {
    return AddCosmosBasedChainRequest.encode(message).finish();
  },
  toProtoMsg(message: AddCosmosBasedChainRequest): AddCosmosBasedChainRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest",
      value: AddCosmosBasedChainRequest.encode(message).finish()
    };
  }
};
function createBaseAddCosmosBasedChainResponse(): AddCosmosBasedChainResponse {
  return {};
}
export const AddCosmosBasedChainResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse",
  encode(_: AddCosmosBasedChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): AddCosmosBasedChainResponse {
    return {};
  },
  fromPartial(_: Partial<AddCosmosBasedChainResponse>): AddCosmosBasedChainResponse {
    const message = createBaseAddCosmosBasedChainResponse();
    return message;
  },
  fromAmino(_: AddCosmosBasedChainResponseAmino): AddCosmosBasedChainResponse {
    const message = createBaseAddCosmosBasedChainResponse();
    return message;
  },
  toAmino(_: AddCosmosBasedChainResponse): AddCosmosBasedChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AddCosmosBasedChainResponseAminoMsg): AddCosmosBasedChainResponse {
    return AddCosmosBasedChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AddCosmosBasedChainResponseProtoMsg): AddCosmosBasedChainResponse {
    return AddCosmosBasedChainResponse.decode(message.value);
  },
  toProto(message: AddCosmosBasedChainResponse): Uint8Array {
    return AddCosmosBasedChainResponse.encode(message).finish();
  },
  toProtoMsg(message: AddCosmosBasedChainResponse): AddCosmosBasedChainResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse",
      value: AddCosmosBasedChainResponse.encode(message).finish()
    };
  }
};
function createBaseRegisterAssetRequest(): RegisterAssetRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    asset: Asset.fromPartial({}),
    limit: new Uint8Array(),
    window: Duration.fromPartial({})
  };
}
export const RegisterAssetRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetRequest",
  encode(message: RegisterAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RegisterAssetRequestAmino): RegisterAssetRequest {
    const message = createBaseRegisterAssetRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = bytesFromBase64(object.limit);
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = Duration.fromAmino(object.window);
    }
    return message;
  },
  toAmino(message: RegisterAssetRequest): RegisterAssetRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.limit = message.limit ? base64FromBytes(message.limit) : undefined;
    obj.window = message.window ? Duration.toAmino(message.window) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterAssetRequestAminoMsg): RegisterAssetRequest {
    return RegisterAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAssetRequestProtoMsg): RegisterAssetRequest {
    return RegisterAssetRequest.decode(message.value);
  },
  toProto(message: RegisterAssetRequest): Uint8Array {
    return RegisterAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterAssetRequest): RegisterAssetRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetRequest",
      value: RegisterAssetRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterAssetResponse(): RegisterAssetResponse {
  return {};
}
export const RegisterAssetResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetResponse",
  encode(_: RegisterAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterAssetResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterAssetResponse>): RegisterAssetResponse {
    const message = createBaseRegisterAssetResponse();
    return message;
  },
  fromAmino(_: RegisterAssetResponseAmino): RegisterAssetResponse {
    const message = createBaseRegisterAssetResponse();
    return message;
  },
  toAmino(_: RegisterAssetResponse): RegisterAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterAssetResponseAminoMsg): RegisterAssetResponse {
    return RegisterAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAssetResponseProtoMsg): RegisterAssetResponse {
    return RegisterAssetResponse.decode(message.value);
  },
  toProto(message: RegisterAssetResponse): Uint8Array {
    return RegisterAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterAssetResponse): RegisterAssetResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetResponse",
      value: RegisterAssetResponse.encode(message).finish()
    };
  }
};
function createBaseRouteIBCTransfersRequest(): RouteIBCTransfersRequest {
  return {
    sender: new Uint8Array()
  };
}
export const RouteIBCTransfersRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest",
  encode(message: RouteIBCTransfersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RouteIBCTransfersRequestAmino): RouteIBCTransfersRequest {
    const message = createBaseRouteIBCTransfersRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    return message;
  },
  toAmino(message: RouteIBCTransfersRequest): RouteIBCTransfersRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    return obj;
  },
  fromAminoMsg(object: RouteIBCTransfersRequestAminoMsg): RouteIBCTransfersRequest {
    return RouteIBCTransfersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RouteIBCTransfersRequestProtoMsg): RouteIBCTransfersRequest {
    return RouteIBCTransfersRequest.decode(message.value);
  },
  toProto(message: RouteIBCTransfersRequest): Uint8Array {
    return RouteIBCTransfersRequest.encode(message).finish();
  },
  toProtoMsg(message: RouteIBCTransfersRequest): RouteIBCTransfersRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest",
      value: RouteIBCTransfersRequest.encode(message).finish()
    };
  }
};
function createBaseRouteIBCTransfersResponse(): RouteIBCTransfersResponse {
  return {};
}
export const RouteIBCTransfersResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse",
  encode(_: RouteIBCTransfersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RouteIBCTransfersResponse {
    return {};
  },
  fromPartial(_: Partial<RouteIBCTransfersResponse>): RouteIBCTransfersResponse {
    const message = createBaseRouteIBCTransfersResponse();
    return message;
  },
  fromAmino(_: RouteIBCTransfersResponseAmino): RouteIBCTransfersResponse {
    const message = createBaseRouteIBCTransfersResponse();
    return message;
  },
  toAmino(_: RouteIBCTransfersResponse): RouteIBCTransfersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RouteIBCTransfersResponseAminoMsg): RouteIBCTransfersResponse {
    return RouteIBCTransfersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RouteIBCTransfersResponseProtoMsg): RouteIBCTransfersResponse {
    return RouteIBCTransfersResponse.decode(message.value);
  },
  toProto(message: RouteIBCTransfersResponse): Uint8Array {
    return RouteIBCTransfersResponse.encode(message).finish();
  },
  toProtoMsg(message: RouteIBCTransfersResponse): RouteIBCTransfersResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse",
      value: RouteIBCTransfersResponse.encode(message).finish()
    };
  }
};
function createBaseRegisterFeeCollectorRequest(): RegisterFeeCollectorRequest {
  return {
    sender: new Uint8Array(),
    feeCollector: new Uint8Array()
  };
}
export const RegisterFeeCollectorRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest",
  encode(message: RegisterFeeCollectorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RegisterFeeCollectorRequestAmino): RegisterFeeCollectorRequest {
    const message = createBaseRegisterFeeCollectorRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.fee_collector !== undefined && object.fee_collector !== null) {
      message.feeCollector = bytesFromBase64(object.fee_collector);
    }
    return message;
  },
  toAmino(message: RegisterFeeCollectorRequest): RegisterFeeCollectorRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.fee_collector = message.feeCollector ? base64FromBytes(message.feeCollector) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterFeeCollectorRequestAminoMsg): RegisterFeeCollectorRequest {
    return RegisterFeeCollectorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterFeeCollectorRequestProtoMsg): RegisterFeeCollectorRequest {
    return RegisterFeeCollectorRequest.decode(message.value);
  },
  toProto(message: RegisterFeeCollectorRequest): Uint8Array {
    return RegisterFeeCollectorRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterFeeCollectorRequest): RegisterFeeCollectorRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest",
      value: RegisterFeeCollectorRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterFeeCollectorResponse(): RegisterFeeCollectorResponse {
  return {};
}
export const RegisterFeeCollectorResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse",
  encode(_: RegisterFeeCollectorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterFeeCollectorResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterFeeCollectorResponse>): RegisterFeeCollectorResponse {
    const message = createBaseRegisterFeeCollectorResponse();
    return message;
  },
  fromAmino(_: RegisterFeeCollectorResponseAmino): RegisterFeeCollectorResponse {
    const message = createBaseRegisterFeeCollectorResponse();
    return message;
  },
  toAmino(_: RegisterFeeCollectorResponse): RegisterFeeCollectorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterFeeCollectorResponseAminoMsg): RegisterFeeCollectorResponse {
    return RegisterFeeCollectorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterFeeCollectorResponseProtoMsg): RegisterFeeCollectorResponse {
    return RegisterFeeCollectorResponse.decode(message.value);
  },
  toProto(message: RegisterFeeCollectorResponse): Uint8Array {
    return RegisterFeeCollectorResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterFeeCollectorResponse): RegisterFeeCollectorResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse",
      value: RegisterFeeCollectorResponse.encode(message).finish()
    };
  }
};
function createBaseRetryIBCTransferRequest(): RetryIBCTransferRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    id: BigInt(0)
  };
}
export const RetryIBCTransferRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest",
  encode(message: RetryIBCTransferRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): RetryIBCTransferRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RetryIBCTransferRequest>): RetryIBCTransferRequest {
    const message = createBaseRetryIBCTransferRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RetryIBCTransferRequestAmino): RetryIBCTransferRequest {
    const message = createBaseRetryIBCTransferRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: RetryIBCTransferRequest): RetryIBCTransferRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RetryIBCTransferRequestAminoMsg): RetryIBCTransferRequest {
    return RetryIBCTransferRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RetryIBCTransferRequestProtoMsg): RetryIBCTransferRequest {
    return RetryIBCTransferRequest.decode(message.value);
  },
  toProto(message: RetryIBCTransferRequest): Uint8Array {
    return RetryIBCTransferRequest.encode(message).finish();
  },
  toProtoMsg(message: RetryIBCTransferRequest): RetryIBCTransferRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest",
      value: RetryIBCTransferRequest.encode(message).finish()
    };
  }
};
function createBaseRetryIBCTransferResponse(): RetryIBCTransferResponse {
  return {};
}
export const RetryIBCTransferResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse",
  encode(_: RetryIBCTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RetryIBCTransferResponse {
    return {};
  },
  fromPartial(_: Partial<RetryIBCTransferResponse>): RetryIBCTransferResponse {
    const message = createBaseRetryIBCTransferResponse();
    return message;
  },
  fromAmino(_: RetryIBCTransferResponseAmino): RetryIBCTransferResponse {
    const message = createBaseRetryIBCTransferResponse();
    return message;
  },
  toAmino(_: RetryIBCTransferResponse): RetryIBCTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RetryIBCTransferResponseAminoMsg): RetryIBCTransferResponse {
    return RetryIBCTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RetryIBCTransferResponseProtoMsg): RetryIBCTransferResponse {
    return RetryIBCTransferResponse.decode(message.value);
  },
  toProto(message: RetryIBCTransferResponse): Uint8Array {
    return RetryIBCTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: RetryIBCTransferResponse): RetryIBCTransferResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse",
      value: RetryIBCTransferResponse.encode(message).finish()
    };
  }
};
function createBaseRouteMessageRequest(): RouteMessageRequest {
  return {
    sender: new Uint8Array(),
    id: "",
    payload: new Uint8Array(),
    feegranter: new Uint8Array()
  };
}
export const RouteMessageRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageRequest",
  encode(message: RouteMessageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    if (message.feegranter.length !== 0) {
      writer.uint32(34).bytes(message.feegranter);
    }
    return writer;
  },
  fromJSON(object: any): RouteMessageRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      id: isSet(object.id) ? String(object.id) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      feegranter: isSet(object.feegranter) ? bytesFromBase64(object.feegranter) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RouteMessageRequest>): RouteMessageRequest {
    const message = createBaseRouteMessageRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.id = object.id ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.feegranter = object.feegranter ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RouteMessageRequestAmino): RouteMessageRequest {
    const message = createBaseRouteMessageRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.feegranter !== undefined && object.feegranter !== null) {
      message.feegranter = bytesFromBase64(object.feegranter);
    }
    return message;
  },
  toAmino(message: RouteMessageRequest): RouteMessageRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.id = message.id;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.feegranter = message.feegranter ? base64FromBytes(message.feegranter) : undefined;
    return obj;
  },
  fromAminoMsg(object: RouteMessageRequestAminoMsg): RouteMessageRequest {
    return RouteMessageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RouteMessageRequestProtoMsg): RouteMessageRequest {
    return RouteMessageRequest.decode(message.value);
  },
  toProto(message: RouteMessageRequest): Uint8Array {
    return RouteMessageRequest.encode(message).finish();
  },
  toProtoMsg(message: RouteMessageRequest): RouteMessageRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageRequest",
      value: RouteMessageRequest.encode(message).finish()
    };
  }
};
function createBaseRouteMessageResponse(): RouteMessageResponse {
  return {};
}
export const RouteMessageResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageResponse",
  encode(_: RouteMessageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RouteMessageResponse {
    return {};
  },
  fromPartial(_: Partial<RouteMessageResponse>): RouteMessageResponse {
    const message = createBaseRouteMessageResponse();
    return message;
  },
  fromAmino(_: RouteMessageResponseAmino): RouteMessageResponse {
    const message = createBaseRouteMessageResponse();
    return message;
  },
  toAmino(_: RouteMessageResponse): RouteMessageResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RouteMessageResponseAminoMsg): RouteMessageResponse {
    return RouteMessageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RouteMessageResponseProtoMsg): RouteMessageResponse {
    return RouteMessageResponse.decode(message.value);
  },
  toProto(message: RouteMessageResponse): Uint8Array {
    return RouteMessageResponse.encode(message).finish();
  },
  toProtoMsg(message: RouteMessageResponse): RouteMessageResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageResponse",
      value: RouteMessageResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractRequest",
  encode(message: CallContractRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CallContractRequestAmino): CallContractRequest {
    const message = createBaseCallContractRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: CallContractRequest): CallContractRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain;
    obj.contract_address = message.contractAddress;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: CallContractRequestAminoMsg): CallContractRequest {
    return CallContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CallContractRequestProtoMsg): CallContractRequest {
    return CallContractRequest.decode(message.value);
  },
  toProto(message: CallContractRequest): Uint8Array {
    return CallContractRequest.encode(message).finish();
  },
  toProtoMsg(message: CallContractRequest): CallContractRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.CallContractRequest",
      value: CallContractRequest.encode(message).finish()
    };
  }
};
function createBaseCallContractResponse(): CallContractResponse {
  return {};
}
export const CallContractResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractResponse",
  encode(_: CallContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CallContractResponse {
    return {};
  },
  fromPartial(_: Partial<CallContractResponse>): CallContractResponse {
    const message = createBaseCallContractResponse();
    return message;
  },
  fromAmino(_: CallContractResponseAmino): CallContractResponse {
    const message = createBaseCallContractResponse();
    return message;
  },
  toAmino(_: CallContractResponse): CallContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CallContractResponseAminoMsg): CallContractResponse {
    return CallContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CallContractResponseProtoMsg): CallContractResponse {
    return CallContractResponse.decode(message.value);
  },
  toProto(message: CallContractResponse): Uint8Array {
    return CallContractResponse.encode(message).finish();
  },
  toProtoMsg(message: CallContractResponse): CallContractResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.CallContractResponse",
      value: CallContractResponse.encode(message).finish()
    };
  }
};