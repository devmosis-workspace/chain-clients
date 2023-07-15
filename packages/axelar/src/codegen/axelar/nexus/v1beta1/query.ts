import { TransferState, CrossChainTransfer, CrossChainTransferSDKType, FeeInfo, FeeInfoSDKType, GeneralMessage, GeneralMessageSDKType, transferStateFromJSON } from "../exported/v1beta1/types";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ChainState, ChainStateSDKType } from "./types";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequest {
  /**
   * ChainMaintainersRequest represents a message that queries
   * the chain maintainers for the specified chain
   */
  chain: string;
}
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequestSDKType {
  chain: string;
}
export interface ChainMaintainersResponse {
  maintainers: Uint8Array[];
}
export interface ChainMaintainersResponseSDKType {
  maintainers: Uint8Array[];
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
  recipientAddr: string;
  recipientChain: string;
  depositChain: string;
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequestSDKType {
  recipient_addr: string;
  recipient_chain: string;
  deposit_chain: string;
}
export interface LatestDepositAddressResponse {
  depositAddr: string;
}
export interface LatestDepositAddressResponseSDKType {
  deposit_addr: string;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
  chain: string;
  state: TransferState;
  pagination?: PageRequest;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequestSDKType {
  chain: string;
  state: TransferState;
  pagination?: PageRequestSDKType;
}
export interface TransfersForChainResponse {
  transfers: CrossChainTransfer[];
  pagination?: PageResponse;
}
export interface TransfersForChainResponseSDKType {
  transfers: CrossChainTransferSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
  chain: string;
  asset: string;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequestSDKType {
  chain: string;
  asset: string;
}
export interface FeeInfoResponse {
  feeInfo?: FeeInfo;
}
export interface FeeInfoResponseSDKType {
  fee_info?: FeeInfoSDKType;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
  sourceChain: string;
  destinationChain: string;
  amount: string;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequestSDKType {
  source_chain: string;
  destination_chain: string;
  amount: string;
}
export interface TransferFeeResponse {
  fee?: Coin;
}
export interface TransferFeeResponseSDKType {
  fee?: CoinSDKType;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
  /**
   * ChainsRequest represents a message that queries the chains
   * registered on the network
   */
  status: ChainStatus;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequestSDKType {
  status: ChainStatus;
}
export interface ChainsResponse {
  chains: string[];
}
export interface ChainsResponseSDKType {
  chains: string[];
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
  /**
   * AssetsRequest represents a message that queries the registered assets of a
   * chain
   */
  chain: string;
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequestSDKType {
  chain: string;
}
export interface AssetsResponse {
  assets: string[];
}
export interface AssetsResponseSDKType {
  assets: string[];
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
  /**
   * ChainStateRequest represents a message that queries the state of a chain
   * registered on the network
   */
  chain: string;
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequestSDKType {
  chain: string;
}
export interface ChainStateResponse {
  state?: ChainState;
}
export interface ChainStateResponseSDKType {
  state?: ChainStateSDKType;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
  /**
   * ChainsByAssetRequest represents a message that queries the chains
   * that support an asset on the network
   */
  asset: string;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequestSDKType {
  asset: string;
}
export interface ChainsByAssetResponse {
  chains: string[];
}
export interface ChainsByAssetResponseSDKType {
  chains: string[];
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
  depositAddr: string;
  depositChain: string;
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequestSDKType {
  deposit_addr: string;
  deposit_chain: string;
}
export interface RecipientAddressResponse {
  recipientAddr: string;
  recipientChain: string;
}
export interface RecipientAddressResponseSDKType {
  recipient_addr: string;
  recipient_chain: string;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequest {
  chain: string;
  asset: string;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequestSDKType {
  chain: string;
  asset: string;
}
export interface TransferRateLimitResponse {
  transferRateLimit?: TransferRateLimit;
}
export interface TransferRateLimitResponseSDKType {
  transfer_rate_limit?: TransferRateLimitSDKType;
}
export interface TransferRateLimit {
  limit: Uint8Array;
  window?: Duration;
  incoming: Uint8Array;
  outgoing: Uint8Array;
  /** time_left indicates the time left in the rate limit window */
  timeLeft?: Duration;
}
export interface TransferRateLimitSDKType {
  limit: Uint8Array;
  window?: DurationSDKType;
  incoming: Uint8Array;
  outgoing: Uint8Array;
  time_left?: DurationSDKType;
}
export interface MessageRequest {
  id: string;
}
export interface MessageRequestSDKType {
  id: string;
}
export interface MessageResponse {
  message?: GeneralMessage;
}
export interface MessageResponseSDKType {
  message?: GeneralMessageSDKType;
}
function createBaseChainMaintainersRequest(): ChainMaintainersRequest {
  return {
    chain: ""
  };
}
export const ChainMaintainersRequest = {
  encode(message: ChainMaintainersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): ChainMaintainersRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<ChainMaintainersRequest>): ChainMaintainersRequest {
    const message = createBaseChainMaintainersRequest();
    message.chain = object.chain ?? "";
    return message;
  }
};
function createBaseChainMaintainersResponse(): ChainMaintainersResponse {
  return {
    maintainers: []
  };
}
export const ChainMaintainersResponse = {
  encode(message: ChainMaintainersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.maintainers) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): ChainMaintainersResponse {
    return {
      maintainers: Array.isArray(object?.maintainers) ? object.maintainers.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<ChainMaintainersResponse>): ChainMaintainersResponse {
    const message = createBaseChainMaintainersResponse();
    message.maintainers = object.maintainers?.map(e => e) || [];
    return message;
  }
};
function createBaseLatestDepositAddressRequest(): LatestDepositAddressRequest {
  return {
    recipientAddr: "",
    recipientChain: "",
    depositChain: ""
  };
}
export const LatestDepositAddressRequest = {
  encode(message: LatestDepositAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientAddr !== "") {
      writer.uint32(10).string(message.recipientAddr);
    }
    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }
    if (message.depositChain !== "") {
      writer.uint32(26).string(message.depositChain);
    }
    return writer;
  },
  fromJSON(object: any): LatestDepositAddressRequest {
    return {
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      depositChain: isSet(object.depositChain) ? String(object.depositChain) : ""
    };
  },
  fromPartial(object: Partial<LatestDepositAddressRequest>): LatestDepositAddressRequest {
    const message = createBaseLatestDepositAddressRequest();
    message.recipientAddr = object.recipientAddr ?? "";
    message.recipientChain = object.recipientChain ?? "";
    message.depositChain = object.depositChain ?? "";
    return message;
  }
};
function createBaseLatestDepositAddressResponse(): LatestDepositAddressResponse {
  return {
    depositAddr: ""
  };
}
export const LatestDepositAddressResponse = {
  encode(message: LatestDepositAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }
    return writer;
  },
  fromJSON(object: any): LatestDepositAddressResponse {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : ""
    };
  },
  fromPartial(object: Partial<LatestDepositAddressResponse>): LatestDepositAddressResponse {
    const message = createBaseLatestDepositAddressResponse();
    message.depositAddr = object.depositAddr ?? "";
    return message;
  }
};
function createBaseTransfersForChainRequest(): TransfersForChainRequest {
  return {
    chain: "",
    state: 0,
    pagination: undefined
  };
}
export const TransfersForChainRequest = {
  encode(message: TransfersForChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransfersForChainRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      state: isSet(object.state) ? transferStateFromJSON(object.state) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<TransfersForChainRequest>): TransfersForChainRequest {
    const message = createBaseTransfersForChainRequest();
    message.chain = object.chain ?? "";
    message.state = object.state ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseTransfersForChainResponse(): TransfersForChainResponse {
  return {
    transfers: [],
    pagination: undefined
  };
}
export const TransfersForChainResponse = {
  encode(message: TransfersForChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfers) {
      CrossChainTransfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransfersForChainResponse {
    return {
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => CrossChainTransfer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<TransfersForChainResponse>): TransfersForChainResponse {
    const message = createBaseTransfersForChainResponse();
    message.transfers = object.transfers?.map(e => CrossChainTransfer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseFeeInfoRequest(): FeeInfoRequest {
  return {
    chain: "",
    asset: ""
  };
}
export const FeeInfoRequest = {
  encode(message: FeeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  fromJSON(object: any): FeeInfoRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  fromPartial(object: Partial<FeeInfoRequest>): FeeInfoRequest {
    const message = createBaseFeeInfoRequest();
    message.chain = object.chain ?? "";
    message.asset = object.asset ?? "";
    return message;
  }
};
function createBaseFeeInfoResponse(): FeeInfoResponse {
  return {
    feeInfo: undefined
  };
}
export const FeeInfoResponse = {
  encode(message: FeeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeInfo !== undefined) {
      FeeInfo.encode(message.feeInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeInfoResponse {
    return {
      feeInfo: isSet(object.feeInfo) ? FeeInfo.fromJSON(object.feeInfo) : undefined
    };
  },
  fromPartial(object: Partial<FeeInfoResponse>): FeeInfoResponse {
    const message = createBaseFeeInfoResponse();
    message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
    return message;
  }
};
function createBaseTransferFeeRequest(): TransferFeeRequest {
  return {
    sourceChain: "",
    destinationChain: "",
    amount: ""
  };
}
export const TransferFeeRequest = {
  encode(message: TransferFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceChain !== "") {
      writer.uint32(10).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): TransferFeeRequest {
    return {
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<TransferFeeRequest>): TransferFeeRequest {
    const message = createBaseTransferFeeRequest();
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseTransferFeeResponse(): TransferFeeResponse {
  return {
    fee: undefined
  };
}
export const TransferFeeResponse = {
  encode(message: TransferFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransferFeeResponse {
    return {
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<TransferFeeResponse>): TransferFeeResponse {
    const message = createBaseTransferFeeResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
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
function createBaseAssetsRequest(): AssetsRequest {
  return {
    chain: ""
  };
}
export const AssetsRequest = {
  encode(message: AssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): AssetsRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<AssetsRequest>): AssetsRequest {
    const message = createBaseAssetsRequest();
    message.chain = object.chain ?? "";
    return message;
  }
};
function createBaseAssetsResponse(): AssetsResponse {
  return {
    assets: []
  };
}
export const AssetsResponse = {
  encode(message: AssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): AssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<AssetsResponse>): AssetsResponse {
    const message = createBaseAssetsResponse();
    message.assets = object.assets?.map(e => e) || [];
    return message;
  }
};
function createBaseChainStateRequest(): ChainStateRequest {
  return {
    chain: ""
  };
}
export const ChainStateRequest = {
  encode(message: ChainStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): ChainStateRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<ChainStateRequest>): ChainStateRequest {
    const message = createBaseChainStateRequest();
    message.chain = object.chain ?? "";
    return message;
  }
};
function createBaseChainStateResponse(): ChainStateResponse {
  return {
    state: undefined
  };
}
export const ChainStateResponse = {
  encode(message: ChainStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      ChainState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ChainStateResponse {
    return {
      state: isSet(object.state) ? ChainState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<ChainStateResponse>): ChainStateResponse {
    const message = createBaseChainStateResponse();
    message.state = object.state !== undefined && object.state !== null ? ChainState.fromPartial(object.state) : undefined;
    return message;
  }
};
function createBaseChainsByAssetRequest(): ChainsByAssetRequest {
  return {
    asset: ""
  };
}
export const ChainsByAssetRequest = {
  encode(message: ChainsByAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    return writer;
  },
  fromJSON(object: any): ChainsByAssetRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  fromPartial(object: Partial<ChainsByAssetRequest>): ChainsByAssetRequest {
    const message = createBaseChainsByAssetRequest();
    message.asset = object.asset ?? "";
    return message;
  }
};
function createBaseChainsByAssetResponse(): ChainsByAssetResponse {
  return {
    chains: []
  };
}
export const ChainsByAssetResponse = {
  encode(message: ChainsByAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chains) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ChainsByAssetResponse {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ChainsByAssetResponse>): ChainsByAssetResponse {
    const message = createBaseChainsByAssetResponse();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  }
};
function createBaseRecipientAddressRequest(): RecipientAddressRequest {
  return {
    depositAddr: "",
    depositChain: ""
  };
}
export const RecipientAddressRequest = {
  encode(message: RecipientAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }
    if (message.depositChain !== "") {
      writer.uint32(18).string(message.depositChain);
    }
    return writer;
  },
  fromJSON(object: any): RecipientAddressRequest {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
      depositChain: isSet(object.depositChain) ? String(object.depositChain) : ""
    };
  },
  fromPartial(object: Partial<RecipientAddressRequest>): RecipientAddressRequest {
    const message = createBaseRecipientAddressRequest();
    message.depositAddr = object.depositAddr ?? "";
    message.depositChain = object.depositChain ?? "";
    return message;
  }
};
function createBaseRecipientAddressResponse(): RecipientAddressResponse {
  return {
    recipientAddr: "",
    recipientChain: ""
  };
}
export const RecipientAddressResponse = {
  encode(message: RecipientAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientAddr !== "") {
      writer.uint32(10).string(message.recipientAddr);
    }
    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }
    return writer;
  },
  fromJSON(object: any): RecipientAddressResponse {
    return {
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : ""
    };
  },
  fromPartial(object: Partial<RecipientAddressResponse>): RecipientAddressResponse {
    const message = createBaseRecipientAddressResponse();
    message.recipientAddr = object.recipientAddr ?? "";
    message.recipientChain = object.recipientChain ?? "";
    return message;
  }
};
function createBaseTransferRateLimitRequest(): TransferRateLimitRequest {
  return {
    chain: "",
    asset: ""
  };
}
export const TransferRateLimitRequest = {
  encode(message: TransferRateLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  fromJSON(object: any): TransferRateLimitRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  fromPartial(object: Partial<TransferRateLimitRequest>): TransferRateLimitRequest {
    const message = createBaseTransferRateLimitRequest();
    message.chain = object.chain ?? "";
    message.asset = object.asset ?? "";
    return message;
  }
};
function createBaseTransferRateLimitResponse(): TransferRateLimitResponse {
  return {
    transferRateLimit: undefined
  };
}
export const TransferRateLimitResponse = {
  encode(message: TransferRateLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferRateLimit !== undefined) {
      TransferRateLimit.encode(message.transferRateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransferRateLimitResponse {
    return {
      transferRateLimit: isSet(object.transferRateLimit) ? TransferRateLimit.fromJSON(object.transferRateLimit) : undefined
    };
  },
  fromPartial(object: Partial<TransferRateLimitResponse>): TransferRateLimitResponse {
    const message = createBaseTransferRateLimitResponse();
    message.transferRateLimit = object.transferRateLimit !== undefined && object.transferRateLimit !== null ? TransferRateLimit.fromPartial(object.transferRateLimit) : undefined;
    return message;
  }
};
function createBaseTransferRateLimit(): TransferRateLimit {
  return {
    limit: new Uint8Array(),
    window: undefined,
    incoming: new Uint8Array(),
    outgoing: new Uint8Array(),
    timeLeft: undefined
  };
}
export const TransferRateLimit = {
  encode(message: TransferRateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit.length !== 0) {
      writer.uint32(10).bytes(message.limit);
    }
    if (message.window !== undefined) {
      Duration.encode(message.window, writer.uint32(18).fork()).ldelim();
    }
    if (message.incoming.length !== 0) {
      writer.uint32(26).bytes(message.incoming);
    }
    if (message.outgoing.length !== 0) {
      writer.uint32(34).bytes(message.outgoing);
    }
    if (message.timeLeft !== undefined) {
      Duration.encode(message.timeLeft, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransferRateLimit {
    return {
      limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
      window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined,
      incoming: isSet(object.incoming) ? bytesFromBase64(object.incoming) : new Uint8Array(),
      outgoing: isSet(object.outgoing) ? bytesFromBase64(object.outgoing) : new Uint8Array(),
      timeLeft: isSet(object.timeLeft) ? Duration.fromJSON(object.timeLeft) : undefined
    };
  },
  fromPartial(object: Partial<TransferRateLimit>): TransferRateLimit {
    const message = createBaseTransferRateLimit();
    message.limit = object.limit ?? new Uint8Array();
    message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
    message.incoming = object.incoming ?? new Uint8Array();
    message.outgoing = object.outgoing ?? new Uint8Array();
    message.timeLeft = object.timeLeft !== undefined && object.timeLeft !== null ? Duration.fromPartial(object.timeLeft) : undefined;
    return message;
  }
};
function createBaseMessageRequest(): MessageRequest {
  return {
    id: ""
  };
}
export const MessageRequest = {
  encode(message: MessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MessageRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MessageRequest>): MessageRequest {
    const message = createBaseMessageRequest();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseMessageResponse(): MessageResponse {
  return {
    message: undefined
  };
}
export const MessageResponse = {
  encode(message: MessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      GeneralMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MessageResponse {
    return {
      message: isSet(object.message) ? GeneralMessage.fromJSON(object.message) : undefined
    };
  },
  fromPartial(object: Partial<MessageResponse>): MessageResponse {
    const message = createBaseMessageResponse();
    message.message = object.message !== undefined && object.message !== null ? GeneralMessage.fromPartial(object.message) : undefined;
    return message;
  }
};