import { TransferState, CrossChainTransfer, CrossChainTransferAmino, CrossChainTransferSDKType, FeeInfo, FeeInfoAmino, FeeInfoSDKType, GeneralMessage, GeneralMessageAmino, GeneralMessageSDKType, transferStateFromJSON } from "../exported/v1beta1/types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ChainState, ChainStateAmino, ChainStateSDKType } from "./types";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
export interface ChainMaintainersRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersRequest";
  value: Uint8Array;
}
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequestAmino {
  /**
   * ChainMaintainersRequest represents a message that queries
   * the chain maintainers for the specified chain
   */
  chain: string;
}
export interface ChainMaintainersRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainMaintainersRequest";
  value: ChainMaintainersRequestAmino;
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
export interface ChainMaintainersResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersResponse";
  value: Uint8Array;
}
export interface ChainMaintainersResponseAmino {
  maintainers: Uint8Array[];
}
export interface ChainMaintainersResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainMaintainersResponse";
  value: ChainMaintainersResponseAmino;
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
export interface LatestDepositAddressRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressRequest";
  value: Uint8Array;
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequestAmino {
  recipient_addr: string;
  recipient_chain: string;
  deposit_chain: string;
}
export interface LatestDepositAddressRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.LatestDepositAddressRequest";
  value: LatestDepositAddressRequestAmino;
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
export interface LatestDepositAddressResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressResponse";
  value: Uint8Array;
}
export interface LatestDepositAddressResponseAmino {
  deposit_addr: string;
}
export interface LatestDepositAddressResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.LatestDepositAddressResponse";
  value: LatestDepositAddressResponseAmino;
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
  pagination: PageRequest;
}
export interface TransfersForChainRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransfersForChainRequest";
  value: Uint8Array;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequestAmino {
  chain: string;
  state: TransferState;
  pagination?: PageRequestAmino;
}
export interface TransfersForChainRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.TransfersForChainRequest";
  value: TransfersForChainRequestAmino;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequestSDKType {
  chain: string;
  state: TransferState;
  pagination: PageRequestSDKType;
}
export interface TransfersForChainResponse {
  transfers: CrossChainTransfer[];
  pagination: PageResponse;
}
export interface TransfersForChainResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransfersForChainResponse";
  value: Uint8Array;
}
export interface TransfersForChainResponseAmino {
  transfers: CrossChainTransferAmino[];
  pagination?: PageResponseAmino;
}
export interface TransfersForChainResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.TransfersForChainResponse";
  value: TransfersForChainResponseAmino;
}
export interface TransfersForChainResponseSDKType {
  transfers: CrossChainTransferSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
  chain: string;
  asset: string;
}
export interface FeeInfoRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.FeeInfoRequest";
  value: Uint8Array;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequestAmino {
  chain: string;
  asset: string;
}
export interface FeeInfoRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.FeeInfoRequest";
  value: FeeInfoRequestAmino;
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
  feeInfo: FeeInfo;
}
export interface FeeInfoResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.FeeInfoResponse";
  value: Uint8Array;
}
export interface FeeInfoResponseAmino {
  fee_info?: FeeInfoAmino;
}
export interface FeeInfoResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.FeeInfoResponse";
  value: FeeInfoResponseAmino;
}
export interface FeeInfoResponseSDKType {
  fee_info: FeeInfoSDKType;
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
export interface TransferFeeRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransferFeeRequest";
  value: Uint8Array;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequestAmino {
  source_chain: string;
  destination_chain: string;
  amount: string;
}
export interface TransferFeeRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.TransferFeeRequest";
  value: TransferFeeRequestAmino;
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
  fee: Coin;
}
export interface TransferFeeResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransferFeeResponse";
  value: Uint8Array;
}
export interface TransferFeeResponseAmino {
  fee?: CoinAmino;
}
export interface TransferFeeResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.TransferFeeResponse";
  value: TransferFeeResponseAmino;
}
export interface TransferFeeResponseSDKType {
  fee: CoinSDKType;
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
export interface ChainsRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainsRequest";
  value: Uint8Array;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequestAmino {
  /**
   * ChainsRequest represents a message that queries the chains
   * registered on the network
   */
  status: ChainStatus;
}
export interface ChainsRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainsRequest";
  value: ChainsRequestAmino;
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
export interface ChainsResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainsResponse";
  value: Uint8Array;
}
export interface ChainsResponseAmino {
  chains: string[];
}
export interface ChainsResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainsResponse";
  value: ChainsResponseAmino;
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
export interface AssetsRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.AssetsRequest";
  value: Uint8Array;
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequestAmino {
  /**
   * AssetsRequest represents a message that queries the registered assets of a
   * chain
   */
  chain: string;
}
export interface AssetsRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.AssetsRequest";
  value: AssetsRequestAmino;
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
export interface AssetsResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.AssetsResponse";
  value: Uint8Array;
}
export interface AssetsResponseAmino {
  assets: string[];
}
export interface AssetsResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.AssetsResponse";
  value: AssetsResponseAmino;
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
export interface ChainStateRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainStateRequest";
  value: Uint8Array;
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequestAmino {
  /**
   * ChainStateRequest represents a message that queries the state of a chain
   * registered on the network
   */
  chain: string;
}
export interface ChainStateRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainStateRequest";
  value: ChainStateRequestAmino;
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequestSDKType {
  chain: string;
}
export interface ChainStateResponse {
  state: ChainState;
}
export interface ChainStateResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainStateResponse";
  value: Uint8Array;
}
export interface ChainStateResponseAmino {
  state?: ChainStateAmino;
}
export interface ChainStateResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainStateResponse";
  value: ChainStateResponseAmino;
}
export interface ChainStateResponseSDKType {
  state: ChainStateSDKType;
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
export interface ChainsByAssetRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetRequest";
  value: Uint8Array;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequestAmino {
  /**
   * ChainsByAssetRequest represents a message that queries the chains
   * that support an asset on the network
   */
  asset: string;
}
export interface ChainsByAssetRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainsByAssetRequest";
  value: ChainsByAssetRequestAmino;
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
export interface ChainsByAssetResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetResponse";
  value: Uint8Array;
}
export interface ChainsByAssetResponseAmino {
  chains: string[];
}
export interface ChainsByAssetResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainsByAssetResponse";
  value: ChainsByAssetResponseAmino;
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
export interface RecipientAddressRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RecipientAddressRequest";
  value: Uint8Array;
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequestAmino {
  deposit_addr: string;
  deposit_chain: string;
}
export interface RecipientAddressRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.RecipientAddressRequest";
  value: RecipientAddressRequestAmino;
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
export interface RecipientAddressResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RecipientAddressResponse";
  value: Uint8Array;
}
export interface RecipientAddressResponseAmino {
  recipient_addr: string;
  recipient_chain: string;
}
export interface RecipientAddressResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.RecipientAddressResponse";
  value: RecipientAddressResponseAmino;
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
export interface TransferRateLimitRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitRequest";
  value: Uint8Array;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequestAmino {
  chain: string;
  asset: string;
}
export interface TransferRateLimitRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.TransferRateLimitRequest";
  value: TransferRateLimitRequestAmino;
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
  transferRateLimit: TransferRateLimit;
}
export interface TransferRateLimitResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitResponse";
  value: Uint8Array;
}
export interface TransferRateLimitResponseAmino {
  transfer_rate_limit?: TransferRateLimitAmino;
}
export interface TransferRateLimitResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.TransferRateLimitResponse";
  value: TransferRateLimitResponseAmino;
}
export interface TransferRateLimitResponseSDKType {
  transfer_rate_limit: TransferRateLimitSDKType;
}
export interface TransferRateLimit {
  limit: Uint8Array;
  window: Duration;
  incoming: Uint8Array;
  outgoing: Uint8Array;
  /** time_left indicates the time left in the rate limit window */
  timeLeft: Duration;
}
export interface TransferRateLimitProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransferRateLimit";
  value: Uint8Array;
}
export interface TransferRateLimitAmino {
  limit: Uint8Array;
  window?: DurationAmino;
  incoming: Uint8Array;
  outgoing: Uint8Array;
  /** time_left indicates the time left in the rate limit window */
  time_left?: DurationAmino;
}
export interface TransferRateLimitAminoMsg {
  type: "/axelar.nexus.v1beta1.TransferRateLimit";
  value: TransferRateLimitAmino;
}
export interface TransferRateLimitSDKType {
  limit: Uint8Array;
  window: DurationSDKType;
  incoming: Uint8Array;
  outgoing: Uint8Array;
  time_left: DurationSDKType;
}
export interface MessageRequest {
  id: string;
}
export interface MessageRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.MessageRequest";
  value: Uint8Array;
}
export interface MessageRequestAmino {
  id: string;
}
export interface MessageRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.MessageRequest";
  value: MessageRequestAmino;
}
export interface MessageRequestSDKType {
  id: string;
}
export interface MessageResponse {
  message: GeneralMessage;
}
export interface MessageResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.MessageResponse";
  value: Uint8Array;
}
export interface MessageResponseAmino {
  message?: GeneralMessageAmino;
}
export interface MessageResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.MessageResponse";
  value: MessageResponseAmino;
}
export interface MessageResponseSDKType {
  message: GeneralMessageSDKType;
}
function createBaseChainMaintainersRequest(): ChainMaintainersRequest {
  return {
    chain: ""
  };
}
export const ChainMaintainersRequest = {
  typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersRequest",
  encode(message: ChainMaintainersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChainMaintainersRequestAmino): ChainMaintainersRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: ChainMaintainersRequest): ChainMaintainersRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: ChainMaintainersRequestAminoMsg): ChainMaintainersRequest {
    return ChainMaintainersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainMaintainersRequestProtoMsg): ChainMaintainersRequest {
    return ChainMaintainersRequest.decode(message.value);
  },
  toProto(message: ChainMaintainersRequest): Uint8Array {
    return ChainMaintainersRequest.encode(message).finish();
  },
  toProtoMsg(message: ChainMaintainersRequest): ChainMaintainersRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersRequest",
      value: ChainMaintainersRequest.encode(message).finish()
    };
  }
};
function createBaseChainMaintainersResponse(): ChainMaintainersResponse {
  return {
    maintainers: []
  };
}
export const ChainMaintainersResponse = {
  typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersResponse",
  encode(message: ChainMaintainersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChainMaintainersResponseAmino): ChainMaintainersResponse {
    return {
      maintainers: Array.isArray(object?.maintainers) ? object.maintainers.map((e: any) => e) : []
    };
  },
  toAmino(message: ChainMaintainersResponse): ChainMaintainersResponseAmino {
    const obj: any = {};
    if (message.maintainers) {
      obj.maintainers = message.maintainers.map(e => e);
    } else {
      obj.maintainers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainMaintainersResponseAminoMsg): ChainMaintainersResponse {
    return ChainMaintainersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainMaintainersResponseProtoMsg): ChainMaintainersResponse {
    return ChainMaintainersResponse.decode(message.value);
  },
  toProto(message: ChainMaintainersResponse): Uint8Array {
    return ChainMaintainersResponse.encode(message).finish();
  },
  toProtoMsg(message: ChainMaintainersResponse): ChainMaintainersResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersResponse",
      value: ChainMaintainersResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressRequest",
  encode(message: LatestDepositAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LatestDepositAddressRequestAmino): LatestDepositAddressRequest {
    return {
      recipientAddr: object.recipient_addr,
      recipientChain: object.recipient_chain,
      depositChain: object.deposit_chain
    };
  },
  toAmino(message: LatestDepositAddressRequest): LatestDepositAddressRequestAmino {
    const obj: any = {};
    obj.recipient_addr = message.recipientAddr;
    obj.recipient_chain = message.recipientChain;
    obj.deposit_chain = message.depositChain;
    return obj;
  },
  fromAminoMsg(object: LatestDepositAddressRequestAminoMsg): LatestDepositAddressRequest {
    return LatestDepositAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: LatestDepositAddressRequestProtoMsg): LatestDepositAddressRequest {
    return LatestDepositAddressRequest.decode(message.value);
  },
  toProto(message: LatestDepositAddressRequest): Uint8Array {
    return LatestDepositAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: LatestDepositAddressRequest): LatestDepositAddressRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressRequest",
      value: LatestDepositAddressRequest.encode(message).finish()
    };
  }
};
function createBaseLatestDepositAddressResponse(): LatestDepositAddressResponse {
  return {
    depositAddr: ""
  };
}
export const LatestDepositAddressResponse = {
  typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressResponse",
  encode(message: LatestDepositAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LatestDepositAddressResponseAmino): LatestDepositAddressResponse {
    return {
      depositAddr: object.deposit_addr
    };
  },
  toAmino(message: LatestDepositAddressResponse): LatestDepositAddressResponseAmino {
    const obj: any = {};
    obj.deposit_addr = message.depositAddr;
    return obj;
  },
  fromAminoMsg(object: LatestDepositAddressResponseAminoMsg): LatestDepositAddressResponse {
    return LatestDepositAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: LatestDepositAddressResponseProtoMsg): LatestDepositAddressResponse {
    return LatestDepositAddressResponse.decode(message.value);
  },
  toProto(message: LatestDepositAddressResponse): Uint8Array {
    return LatestDepositAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: LatestDepositAddressResponse): LatestDepositAddressResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressResponse",
      value: LatestDepositAddressResponse.encode(message).finish()
    };
  }
};
function createBaseTransfersForChainRequest(): TransfersForChainRequest {
  return {
    chain: "",
    state: 0,
    pagination: PageRequest.fromPartial({})
  };
}
export const TransfersForChainRequest = {
  typeUrl: "/axelar.nexus.v1beta1.TransfersForChainRequest",
  encode(message: TransfersForChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      state: isSet(object.state) ? transferStateFromJSON(object.state) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<TransfersForChainRequest>): TransfersForChainRequest {
    const message = createBaseTransfersForChainRequest();
    message.chain = object.chain ?? "";
    message.state = object.state ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: TransfersForChainRequestAmino): TransfersForChainRequest {
    return {
      chain: object.chain,
      state: isSet(object.state) ? transferStateFromJSON(object.state) : -1,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: TransfersForChainRequest): TransfersForChainRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.state = message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransfersForChainRequestAminoMsg): TransfersForChainRequest {
    return TransfersForChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: TransfersForChainRequestProtoMsg): TransfersForChainRequest {
    return TransfersForChainRequest.decode(message.value);
  },
  toProto(message: TransfersForChainRequest): Uint8Array {
    return TransfersForChainRequest.encode(message).finish();
  },
  toProtoMsg(message: TransfersForChainRequest): TransfersForChainRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransfersForChainRequest",
      value: TransfersForChainRequest.encode(message).finish()
    };
  }
};
function createBaseTransfersForChainResponse(): TransfersForChainResponse {
  return {
    transfers: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const TransfersForChainResponse = {
  typeUrl: "/axelar.nexus.v1beta1.TransfersForChainResponse",
  encode(message: TransfersForChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TransfersForChainResponseAmino): TransfersForChainResponse {
    return {
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => CrossChainTransfer.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: TransfersForChainResponse): TransfersForChainResponseAmino {
    const obj: any = {};
    if (message.transfers) {
      obj.transfers = message.transfers.map(e => e ? CrossChainTransfer.toAmino(e) : undefined);
    } else {
      obj.transfers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransfersForChainResponseAminoMsg): TransfersForChainResponse {
    return TransfersForChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TransfersForChainResponseProtoMsg): TransfersForChainResponse {
    return TransfersForChainResponse.decode(message.value);
  },
  toProto(message: TransfersForChainResponse): Uint8Array {
    return TransfersForChainResponse.encode(message).finish();
  },
  toProtoMsg(message: TransfersForChainResponse): TransfersForChainResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransfersForChainResponse",
      value: TransfersForChainResponse.encode(message).finish()
    };
  }
};
function createBaseFeeInfoRequest(): FeeInfoRequest {
  return {
    chain: "",
    asset: ""
  };
}
export const FeeInfoRequest = {
  typeUrl: "/axelar.nexus.v1beta1.FeeInfoRequest",
  encode(message: FeeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeeInfoRequestAmino): FeeInfoRequest {
    return {
      chain: object.chain,
      asset: object.asset
    };
  },
  toAmino(message: FeeInfoRequest): FeeInfoRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: FeeInfoRequestAminoMsg): FeeInfoRequest {
    return FeeInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeInfoRequestProtoMsg): FeeInfoRequest {
    return FeeInfoRequest.decode(message.value);
  },
  toProto(message: FeeInfoRequest): Uint8Array {
    return FeeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: FeeInfoRequest): FeeInfoRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.FeeInfoRequest",
      value: FeeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseFeeInfoResponse(): FeeInfoResponse {
  return {
    feeInfo: FeeInfo.fromPartial({})
  };
}
export const FeeInfoResponse = {
  typeUrl: "/axelar.nexus.v1beta1.FeeInfoResponse",
  encode(message: FeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeeInfoResponseAmino): FeeInfoResponse {
    return {
      feeInfo: object?.fee_info ? FeeInfo.fromAmino(object.fee_info) : undefined
    };
  },
  toAmino(message: FeeInfoResponse): FeeInfoResponseAmino {
    const obj: any = {};
    obj.fee_info = message.feeInfo ? FeeInfo.toAmino(message.feeInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeInfoResponseAminoMsg): FeeInfoResponse {
    return FeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeInfoResponseProtoMsg): FeeInfoResponse {
    return FeeInfoResponse.decode(message.value);
  },
  toProto(message: FeeInfoResponse): Uint8Array {
    return FeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: FeeInfoResponse): FeeInfoResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.FeeInfoResponse",
      value: FeeInfoResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.nexus.v1beta1.TransferFeeRequest",
  encode(message: TransferFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TransferFeeRequestAmino): TransferFeeRequest {
    return {
      sourceChain: object.source_chain,
      destinationChain: object.destination_chain,
      amount: object.amount
    };
  },
  toAmino(message: TransferFeeRequest): TransferFeeRequestAmino {
    const obj: any = {};
    obj.source_chain = message.sourceChain;
    obj.destination_chain = message.destinationChain;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: TransferFeeRequestAminoMsg): TransferFeeRequest {
    return TransferFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferFeeRequestProtoMsg): TransferFeeRequest {
    return TransferFeeRequest.decode(message.value);
  },
  toProto(message: TransferFeeRequest): Uint8Array {
    return TransferFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: TransferFeeRequest): TransferFeeRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransferFeeRequest",
      value: TransferFeeRequest.encode(message).finish()
    };
  }
};
function createBaseTransferFeeResponse(): TransferFeeResponse {
  return {
    fee: Coin.fromPartial({})
  };
}
export const TransferFeeResponse = {
  typeUrl: "/axelar.nexus.v1beta1.TransferFeeResponse",
  encode(message: TransferFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TransferFeeResponseAmino): TransferFeeResponse {
    return {
      fee: object?.fee ? Coin.fromAmino(object.fee) : undefined
    };
  },
  toAmino(message: TransferFeeResponse): TransferFeeResponseAmino {
    const obj: any = {};
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferFeeResponseAminoMsg): TransferFeeResponse {
    return TransferFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferFeeResponseProtoMsg): TransferFeeResponse {
    return TransferFeeResponse.decode(message.value);
  },
  toProto(message: TransferFeeResponse): Uint8Array {
    return TransferFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: TransferFeeResponse): TransferFeeResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransferFeeResponse",
      value: TransferFeeResponse.encode(message).finish()
    };
  }
};
function createBaseChainsRequest(): ChainsRequest {
  return {
    status: 0
  };
}
export const ChainsRequest = {
  typeUrl: "/axelar.nexus.v1beta1.ChainsRequest",
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
      typeUrl: "/axelar.nexus.v1beta1.ChainsRequest",
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
  typeUrl: "/axelar.nexus.v1beta1.ChainsResponse",
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
      typeUrl: "/axelar.nexus.v1beta1.ChainsResponse",
      value: ChainsResponse.encode(message).finish()
    };
  }
};
function createBaseAssetsRequest(): AssetsRequest {
  return {
    chain: ""
  };
}
export const AssetsRequest = {
  typeUrl: "/axelar.nexus.v1beta1.AssetsRequest",
  encode(message: AssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AssetsRequestAmino): AssetsRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: AssetsRequest): AssetsRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: AssetsRequestAminoMsg): AssetsRequest {
    return AssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetsRequestProtoMsg): AssetsRequest {
    return AssetsRequest.decode(message.value);
  },
  toProto(message: AssetsRequest): Uint8Array {
    return AssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: AssetsRequest): AssetsRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.AssetsRequest",
      value: AssetsRequest.encode(message).finish()
    };
  }
};
function createBaseAssetsResponse(): AssetsResponse {
  return {
    assets: []
  };
}
export const AssetsResponse = {
  typeUrl: "/axelar.nexus.v1beta1.AssetsResponse",
  encode(message: AssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AssetsResponseAmino): AssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => e) : []
    };
  },
  toAmino(message: AssetsResponse): AssetsResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromAminoMsg(object: AssetsResponseAminoMsg): AssetsResponse {
    return AssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetsResponseProtoMsg): AssetsResponse {
    return AssetsResponse.decode(message.value);
  },
  toProto(message: AssetsResponse): Uint8Array {
    return AssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: AssetsResponse): AssetsResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.AssetsResponse",
      value: AssetsResponse.encode(message).finish()
    };
  }
};
function createBaseChainStateRequest(): ChainStateRequest {
  return {
    chain: ""
  };
}
export const ChainStateRequest = {
  typeUrl: "/axelar.nexus.v1beta1.ChainStateRequest",
  encode(message: ChainStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChainStateRequestAmino): ChainStateRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: ChainStateRequest): ChainStateRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: ChainStateRequestAminoMsg): ChainStateRequest {
    return ChainStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainStateRequestProtoMsg): ChainStateRequest {
    return ChainStateRequest.decode(message.value);
  },
  toProto(message: ChainStateRequest): Uint8Array {
    return ChainStateRequest.encode(message).finish();
  },
  toProtoMsg(message: ChainStateRequest): ChainStateRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ChainStateRequest",
      value: ChainStateRequest.encode(message).finish()
    };
  }
};
function createBaseChainStateResponse(): ChainStateResponse {
  return {
    state: ChainState.fromPartial({})
  };
}
export const ChainStateResponse = {
  typeUrl: "/axelar.nexus.v1beta1.ChainStateResponse",
  encode(message: ChainStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChainStateResponseAmino): ChainStateResponse {
    return {
      state: object?.state ? ChainState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: ChainStateResponse): ChainStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? ChainState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: ChainStateResponseAminoMsg): ChainStateResponse {
    return ChainStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainStateResponseProtoMsg): ChainStateResponse {
    return ChainStateResponse.decode(message.value);
  },
  toProto(message: ChainStateResponse): Uint8Array {
    return ChainStateResponse.encode(message).finish();
  },
  toProtoMsg(message: ChainStateResponse): ChainStateResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ChainStateResponse",
      value: ChainStateResponse.encode(message).finish()
    };
  }
};
function createBaseChainsByAssetRequest(): ChainsByAssetRequest {
  return {
    asset: ""
  };
}
export const ChainsByAssetRequest = {
  typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetRequest",
  encode(message: ChainsByAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChainsByAssetRequestAmino): ChainsByAssetRequest {
    return {
      asset: object.asset
    };
  },
  toAmino(message: ChainsByAssetRequest): ChainsByAssetRequestAmino {
    const obj: any = {};
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: ChainsByAssetRequestAminoMsg): ChainsByAssetRequest {
    return ChainsByAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainsByAssetRequestProtoMsg): ChainsByAssetRequest {
    return ChainsByAssetRequest.decode(message.value);
  },
  toProto(message: ChainsByAssetRequest): Uint8Array {
    return ChainsByAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: ChainsByAssetRequest): ChainsByAssetRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetRequest",
      value: ChainsByAssetRequest.encode(message).finish()
    };
  }
};
function createBaseChainsByAssetResponse(): ChainsByAssetResponse {
  return {
    chains: []
  };
}
export const ChainsByAssetResponse = {
  typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetResponse",
  encode(message: ChainsByAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChainsByAssetResponseAmino): ChainsByAssetResponse {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => e) : []
    };
  },
  toAmino(message: ChainsByAssetResponse): ChainsByAssetResponseAmino {
    const obj: any = {};
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainsByAssetResponseAminoMsg): ChainsByAssetResponse {
    return ChainsByAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainsByAssetResponseProtoMsg): ChainsByAssetResponse {
    return ChainsByAssetResponse.decode(message.value);
  },
  toProto(message: ChainsByAssetResponse): Uint8Array {
    return ChainsByAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: ChainsByAssetResponse): ChainsByAssetResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetResponse",
      value: ChainsByAssetResponse.encode(message).finish()
    };
  }
};
function createBaseRecipientAddressRequest(): RecipientAddressRequest {
  return {
    depositAddr: "",
    depositChain: ""
  };
}
export const RecipientAddressRequest = {
  typeUrl: "/axelar.nexus.v1beta1.RecipientAddressRequest",
  encode(message: RecipientAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RecipientAddressRequestAmino): RecipientAddressRequest {
    return {
      depositAddr: object.deposit_addr,
      depositChain: object.deposit_chain
    };
  },
  toAmino(message: RecipientAddressRequest): RecipientAddressRequestAmino {
    const obj: any = {};
    obj.deposit_addr = message.depositAddr;
    obj.deposit_chain = message.depositChain;
    return obj;
  },
  fromAminoMsg(object: RecipientAddressRequestAminoMsg): RecipientAddressRequest {
    return RecipientAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RecipientAddressRequestProtoMsg): RecipientAddressRequest {
    return RecipientAddressRequest.decode(message.value);
  },
  toProto(message: RecipientAddressRequest): Uint8Array {
    return RecipientAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: RecipientAddressRequest): RecipientAddressRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RecipientAddressRequest",
      value: RecipientAddressRequest.encode(message).finish()
    };
  }
};
function createBaseRecipientAddressResponse(): RecipientAddressResponse {
  return {
    recipientAddr: "",
    recipientChain: ""
  };
}
export const RecipientAddressResponse = {
  typeUrl: "/axelar.nexus.v1beta1.RecipientAddressResponse",
  encode(message: RecipientAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RecipientAddressResponseAmino): RecipientAddressResponse {
    return {
      recipientAddr: object.recipient_addr,
      recipientChain: object.recipient_chain
    };
  },
  toAmino(message: RecipientAddressResponse): RecipientAddressResponseAmino {
    const obj: any = {};
    obj.recipient_addr = message.recipientAddr;
    obj.recipient_chain = message.recipientChain;
    return obj;
  },
  fromAminoMsg(object: RecipientAddressResponseAminoMsg): RecipientAddressResponse {
    return RecipientAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RecipientAddressResponseProtoMsg): RecipientAddressResponse {
    return RecipientAddressResponse.decode(message.value);
  },
  toProto(message: RecipientAddressResponse): Uint8Array {
    return RecipientAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: RecipientAddressResponse): RecipientAddressResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RecipientAddressResponse",
      value: RecipientAddressResponse.encode(message).finish()
    };
  }
};
function createBaseTransferRateLimitRequest(): TransferRateLimitRequest {
  return {
    chain: "",
    asset: ""
  };
}
export const TransferRateLimitRequest = {
  typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitRequest",
  encode(message: TransferRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TransferRateLimitRequestAmino): TransferRateLimitRequest {
    return {
      chain: object.chain,
      asset: object.asset
    };
  },
  toAmino(message: TransferRateLimitRequest): TransferRateLimitRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: TransferRateLimitRequestAminoMsg): TransferRateLimitRequest {
    return TransferRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferRateLimitRequestProtoMsg): TransferRateLimitRequest {
    return TransferRateLimitRequest.decode(message.value);
  },
  toProto(message: TransferRateLimitRequest): Uint8Array {
    return TransferRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: TransferRateLimitRequest): TransferRateLimitRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitRequest",
      value: TransferRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseTransferRateLimitResponse(): TransferRateLimitResponse {
  return {
    transferRateLimit: TransferRateLimit.fromPartial({})
  };
}
export const TransferRateLimitResponse = {
  typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitResponse",
  encode(message: TransferRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TransferRateLimitResponseAmino): TransferRateLimitResponse {
    return {
      transferRateLimit: object?.transfer_rate_limit ? TransferRateLimit.fromAmino(object.transfer_rate_limit) : undefined
    };
  },
  toAmino(message: TransferRateLimitResponse): TransferRateLimitResponseAmino {
    const obj: any = {};
    obj.transfer_rate_limit = message.transferRateLimit ? TransferRateLimit.toAmino(message.transferRateLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferRateLimitResponseAminoMsg): TransferRateLimitResponse {
    return TransferRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferRateLimitResponseProtoMsg): TransferRateLimitResponse {
    return TransferRateLimitResponse.decode(message.value);
  },
  toProto(message: TransferRateLimitResponse): Uint8Array {
    return TransferRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: TransferRateLimitResponse): TransferRateLimitResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitResponse",
      value: TransferRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseTransferRateLimit(): TransferRateLimit {
  return {
    limit: new Uint8Array(),
    window: Duration.fromPartial({}),
    incoming: new Uint8Array(),
    outgoing: new Uint8Array(),
    timeLeft: Duration.fromPartial({})
  };
}
export const TransferRateLimit = {
  typeUrl: "/axelar.nexus.v1beta1.TransferRateLimit",
  encode(message: TransferRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TransferRateLimitAmino): TransferRateLimit {
    return {
      limit: object.limit,
      window: object?.window ? Duration.fromAmino(object.window) : undefined,
      incoming: object.incoming,
      outgoing: object.outgoing,
      timeLeft: object?.time_left ? Duration.fromAmino(object.time_left) : undefined
    };
  },
  toAmino(message: TransferRateLimit): TransferRateLimitAmino {
    const obj: any = {};
    obj.limit = message.limit;
    obj.window = message.window ? Duration.toAmino(message.window) : undefined;
    obj.incoming = message.incoming;
    obj.outgoing = message.outgoing;
    obj.time_left = message.timeLeft ? Duration.toAmino(message.timeLeft) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferRateLimitAminoMsg): TransferRateLimit {
    return TransferRateLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferRateLimitProtoMsg): TransferRateLimit {
    return TransferRateLimit.decode(message.value);
  },
  toProto(message: TransferRateLimit): Uint8Array {
    return TransferRateLimit.encode(message).finish();
  },
  toProtoMsg(message: TransferRateLimit): TransferRateLimitProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransferRateLimit",
      value: TransferRateLimit.encode(message).finish()
    };
  }
};
function createBaseMessageRequest(): MessageRequest {
  return {
    id: ""
  };
}
export const MessageRequest = {
  typeUrl: "/axelar.nexus.v1beta1.MessageRequest",
  encode(message: MessageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageRequestAmino): MessageRequest {
    return {
      id: object.id
    };
  },
  toAmino(message: MessageRequest): MessageRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MessageRequestAminoMsg): MessageRequest {
    return MessageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageRequestProtoMsg): MessageRequest {
    return MessageRequest.decode(message.value);
  },
  toProto(message: MessageRequest): Uint8Array {
    return MessageRequest.encode(message).finish();
  },
  toProtoMsg(message: MessageRequest): MessageRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.MessageRequest",
      value: MessageRequest.encode(message).finish()
    };
  }
};
function createBaseMessageResponse(): MessageResponse {
  return {
    message: GeneralMessage.fromPartial({})
  };
}
export const MessageResponse = {
  typeUrl: "/axelar.nexus.v1beta1.MessageResponse",
  encode(message: MessageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageResponseAmino): MessageResponse {
    return {
      message: object?.message ? GeneralMessage.fromAmino(object.message) : undefined
    };
  },
  toAmino(message: MessageResponse): MessageResponseAmino {
    const obj: any = {};
    obj.message = message.message ? GeneralMessage.toAmino(message.message) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageResponseAminoMsg): MessageResponse {
    return MessageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageResponseProtoMsg): MessageResponse {
    return MessageResponse.decode(message.value);
  },
  toProto(message: MessageResponse): Uint8Array {
    return MessageResponse.encode(message).finish();
  },
  toProtoMsg(message: MessageResponse): MessageResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.MessageResponse",
      value: MessageResponse.encode(message).finish()
    };
  }
};