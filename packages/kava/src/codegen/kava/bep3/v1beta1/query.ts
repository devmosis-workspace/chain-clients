import { SwapStatus, SwapDirection, Params, ParamsAmino, ParamsSDKType, swapStatusFromJSON, swapDirectionFromJSON } from "./bep3";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.bep3.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponse {
  /** params represents the parameters of the module */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponseAmino {
  /** params represents the parameters of the module */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kava.bep3.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequest {
  /** denom filters the asset response for the specified denom */
  denom: string;
}
export interface QueryAssetSupplyRequestProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyRequest";
  value: Uint8Array;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequestAmino {
  /** denom filters the asset response for the specified denom */
  denom: string;
}
export interface QueryAssetSupplyRequestAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAssetSupplyRequest";
  value: QueryAssetSupplyRequestAmino;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequestSDKType {
  denom: string;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponse {
  /** incoming_supply represents the incoming supply of an asset */
  incomingSupply: Coin;
  /** outgoing_supply represents the outgoing supply of an asset */
  outgoingSupply: Coin;
  /** current_supply represents the current on-chain supply of an asset */
  currentSupply: Coin;
  /** time_limited_current_supply represents the time limited current supply of an asset */
  timeLimitedCurrentSupply: Coin;
  /** time_elapsed represents the time elapsed */
  timeElapsed: Duration;
}
export interface AssetSupplyResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.AssetSupplyResponse";
  value: Uint8Array;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponseAmino {
  /** incoming_supply represents the incoming supply of an asset */
  incoming_supply?: CoinAmino;
  /** outgoing_supply represents the outgoing supply of an asset */
  outgoing_supply?: CoinAmino;
  /** current_supply represents the current on-chain supply of an asset */
  current_supply?: CoinAmino;
  /** time_limited_current_supply represents the time limited current supply of an asset */
  time_limited_current_supply?: CoinAmino;
  /** time_elapsed represents the time elapsed */
  time_elapsed?: DurationAmino;
}
export interface AssetSupplyResponseAminoMsg {
  type: "/kava.bep3.v1beta1.AssetSupplyResponse";
  value: AssetSupplyResponseAmino;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponseSDKType {
  incoming_supply: CoinSDKType;
  outgoing_supply: CoinSDKType;
  current_supply: CoinSDKType;
  time_limited_current_supply: CoinSDKType;
  time_elapsed: DurationSDKType;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponse {
  /** asset_supply represents the supply of the asset */
  assetSupply: AssetSupplyResponse;
}
export interface QueryAssetSupplyResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyResponse";
  value: Uint8Array;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponseAmino {
  /** asset_supply represents the supply of the asset */
  asset_supply?: AssetSupplyResponseAmino;
}
export interface QueryAssetSupplyResponseAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAssetSupplyResponse";
  value: QueryAssetSupplyResponseAmino;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponseSDKType {
  asset_supply: AssetSupplyResponseSDKType;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequest {}
export interface QueryAssetSuppliesRequestProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesRequest";
  value: Uint8Array;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequestAmino {}
export interface QueryAssetSuppliesRequestAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAssetSuppliesRequest";
  value: QueryAssetSuppliesRequestAmino;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequestSDKType {}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponse {
  /** asset_supplies represents the supplies of returned assets */
  assetSupplies: AssetSupplyResponse[];
}
export interface QueryAssetSuppliesResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesResponse";
  value: Uint8Array;
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponseAmino {
  /** asset_supplies represents the supplies of returned assets */
  asset_supplies: AssetSupplyResponseAmino[];
}
export interface QueryAssetSuppliesResponseAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAssetSuppliesResponse";
  value: QueryAssetSuppliesResponseAmino;
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponseSDKType {
  asset_supplies: AssetSupplyResponseSDKType[];
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequest {
  /** swap_id represents the id of the swap to query */
  swapId: string;
}
export interface QueryAtomicSwapRequestProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapRequest";
  value: Uint8Array;
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequestAmino {
  /** swap_id represents the id of the swap to query */
  swap_id: string;
}
export interface QueryAtomicSwapRequestAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAtomicSwapRequest";
  value: QueryAtomicSwapRequestAmino;
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequestSDKType {
  swap_id: string;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponse {
  atomicSwap: AtomicSwapResponse;
}
export interface QueryAtomicSwapResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapResponse";
  value: Uint8Array;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponseAmino {
  atomic_swap?: AtomicSwapResponseAmino;
}
export interface QueryAtomicSwapResponseAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAtomicSwapResponse";
  value: QueryAtomicSwapResponseAmino;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponseSDKType {
  atomic_swap: AtomicSwapResponseSDKType;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponse {
  /** id represents the id of the atomic swap */
  id: string;
  /** amount represents the amount being swapped */
  amount: Coin[];
  /** random_number_hash represents the hash of the random number */
  randomNumberHash: string;
  /** expire_height represents the height when the swap expires */
  expireHeight: bigint;
  /** timestamp represents the timestamp of the swap */
  timestamp: bigint;
  /** sender is the kava chain sender of the swap */
  sender: string;
  /** recipient is the kava chain recipient of the swap */
  recipient: string;
  /** sender_other_chain is the sender on the other chain */
  senderOtherChain: string;
  /** recipient_other_chain is the recipient on the other chain */
  recipientOtherChain: string;
  /** closed_block is the block when the swap is closed */
  closedBlock: bigint;
  /** status represents the current status of the swap */
  status: SwapStatus;
  /** cross_chain identifies whether the atomic swap is cross chain */
  crossChain: boolean;
  /** direction identifies if the swap is incoming or outgoing */
  direction: SwapDirection;
}
export interface AtomicSwapResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.AtomicSwapResponse";
  value: Uint8Array;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponseAmino {
  /** id represents the id of the atomic swap */
  id: string;
  /** amount represents the amount being swapped */
  amount: CoinAmino[];
  /** random_number_hash represents the hash of the random number */
  random_number_hash: string;
  /** expire_height represents the height when the swap expires */
  expire_height: string;
  /** timestamp represents the timestamp of the swap */
  timestamp: string;
  /** sender is the kava chain sender of the swap */
  sender: string;
  /** recipient is the kava chain recipient of the swap */
  recipient: string;
  /** sender_other_chain is the sender on the other chain */
  sender_other_chain: string;
  /** recipient_other_chain is the recipient on the other chain */
  recipient_other_chain: string;
  /** closed_block is the block when the swap is closed */
  closed_block: string;
  /** status represents the current status of the swap */
  status: SwapStatus;
  /** cross_chain identifies whether the atomic swap is cross chain */
  cross_chain: boolean;
  /** direction identifies if the swap is incoming or outgoing */
  direction: SwapDirection;
}
export interface AtomicSwapResponseAminoMsg {
  type: "/kava.bep3.v1beta1.AtomicSwapResponse";
  value: AtomicSwapResponseAmino;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponseSDKType {
  id: string;
  amount: CoinSDKType[];
  random_number_hash: string;
  expire_height: bigint;
  timestamp: bigint;
  sender: string;
  recipient: string;
  sender_other_chain: string;
  recipient_other_chain: string;
  closed_block: bigint;
  status: SwapStatus;
  cross_chain: boolean;
  direction: SwapDirection;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequest {
  /** involve filters by address */
  involve: string;
  /** expiration filters by expiration block height */
  expiration: bigint;
  /** status filters by swap status */
  status: SwapStatus;
  /** direction fitlers by swap direction */
  direction: SwapDirection;
  pagination: PageRequest;
}
export interface QueryAtomicSwapsRequestProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsRequest";
  value: Uint8Array;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequestAmino {
  /** involve filters by address */
  involve: string;
  /** expiration filters by expiration block height */
  expiration: string;
  /** status filters by swap status */
  status: SwapStatus;
  /** direction fitlers by swap direction */
  direction: SwapDirection;
  pagination?: PageRequestAmino;
}
export interface QueryAtomicSwapsRequestAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAtomicSwapsRequest";
  value: QueryAtomicSwapsRequestAmino;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequestSDKType {
  involve: string;
  expiration: bigint;
  status: SwapStatus;
  direction: SwapDirection;
  pagination: PageRequestSDKType;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponse {
  /** atomic_swap represents the returned atomic swaps for the request */
  atomicSwaps: AtomicSwapResponse[];
  pagination: PageResponse;
}
export interface QueryAtomicSwapsResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsResponse";
  value: Uint8Array;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponseAmino {
  /** atomic_swap represents the returned atomic swaps for the request */
  atomic_swaps: AtomicSwapResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAtomicSwapsResponseAminoMsg {
  type: "/kava.bep3.v1beta1.QueryAtomicSwapsResponse";
  value: QueryAtomicSwapsResponseAmino;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponseSDKType {
  atomic_swaps: AtomicSwapResponseSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.bep3.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kava.bep3.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetSupplyRequest(): QueryAssetSupplyRequest {
  return {
    denom: ""
  };
}
export const QueryAssetSupplyRequest = {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyRequest",
  encode(message: QueryAssetSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryAssetSupplyRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryAssetSupplyRequest>): QueryAssetSupplyRequest {
    const message = createBaseQueryAssetSupplyRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAssetSupplyRequestAmino): QueryAssetSupplyRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryAssetSupplyRequest): QueryAssetSupplyRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAssetSupplyRequestAminoMsg): QueryAssetSupplyRequest {
    return QueryAssetSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetSupplyRequestProtoMsg): QueryAssetSupplyRequest {
    return QueryAssetSupplyRequest.decode(message.value);
  },
  toProto(message: QueryAssetSupplyRequest): Uint8Array {
    return QueryAssetSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetSupplyRequest): QueryAssetSupplyRequestProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyRequest",
      value: QueryAssetSupplyRequest.encode(message).finish()
    };
  }
};
function createBaseAssetSupplyResponse(): AssetSupplyResponse {
  return {
    incomingSupply: Coin.fromPartial({}),
    outgoingSupply: Coin.fromPartial({}),
    currentSupply: Coin.fromPartial({}),
    timeLimitedCurrentSupply: Coin.fromPartial({}),
    timeElapsed: Duration.fromPartial({})
  };
}
export const AssetSupplyResponse = {
  typeUrl: "/kava.bep3.v1beta1.AssetSupplyResponse",
  encode(message: AssetSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incomingSupply !== undefined) {
      Coin.encode(message.incomingSupply, writer.uint32(10).fork()).ldelim();
    }
    if (message.outgoingSupply !== undefined) {
      Coin.encode(message.outgoingSupply, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentSupply !== undefined) {
      Coin.encode(message.currentSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeLimitedCurrentSupply !== undefined) {
      Coin.encode(message.timeLimitedCurrentSupply, writer.uint32(34).fork()).ldelim();
    }
    if (message.timeElapsed !== undefined) {
      Duration.encode(message.timeElapsed, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AssetSupplyResponse {
    return {
      incomingSupply: isSet(object.incomingSupply) ? Coin.fromJSON(object.incomingSupply) : undefined,
      outgoingSupply: isSet(object.outgoingSupply) ? Coin.fromJSON(object.outgoingSupply) : undefined,
      currentSupply: isSet(object.currentSupply) ? Coin.fromJSON(object.currentSupply) : undefined,
      timeLimitedCurrentSupply: isSet(object.timeLimitedCurrentSupply) ? Coin.fromJSON(object.timeLimitedCurrentSupply) : undefined,
      timeElapsed: isSet(object.timeElapsed) ? Duration.fromJSON(object.timeElapsed) : undefined
    };
  },
  fromPartial(object: Partial<AssetSupplyResponse>): AssetSupplyResponse {
    const message = createBaseAssetSupplyResponse();
    message.incomingSupply = object.incomingSupply !== undefined && object.incomingSupply !== null ? Coin.fromPartial(object.incomingSupply) : undefined;
    message.outgoingSupply = object.outgoingSupply !== undefined && object.outgoingSupply !== null ? Coin.fromPartial(object.outgoingSupply) : undefined;
    message.currentSupply = object.currentSupply !== undefined && object.currentSupply !== null ? Coin.fromPartial(object.currentSupply) : undefined;
    message.timeLimitedCurrentSupply = object.timeLimitedCurrentSupply !== undefined && object.timeLimitedCurrentSupply !== null ? Coin.fromPartial(object.timeLimitedCurrentSupply) : undefined;
    message.timeElapsed = object.timeElapsed !== undefined && object.timeElapsed !== null ? Duration.fromPartial(object.timeElapsed) : undefined;
    return message;
  },
  fromAmino(object: AssetSupplyResponseAmino): AssetSupplyResponse {
    return {
      incomingSupply: object?.incoming_supply ? Coin.fromAmino(object.incoming_supply) : undefined,
      outgoingSupply: object?.outgoing_supply ? Coin.fromAmino(object.outgoing_supply) : undefined,
      currentSupply: object?.current_supply ? Coin.fromAmino(object.current_supply) : undefined,
      timeLimitedCurrentSupply: object?.time_limited_current_supply ? Coin.fromAmino(object.time_limited_current_supply) : undefined,
      timeElapsed: object?.time_elapsed ? Duration.fromAmino(object.time_elapsed) : undefined
    };
  },
  toAmino(message: AssetSupplyResponse): AssetSupplyResponseAmino {
    const obj: any = {};
    obj.incoming_supply = message.incomingSupply ? Coin.toAmino(message.incomingSupply) : undefined;
    obj.outgoing_supply = message.outgoingSupply ? Coin.toAmino(message.outgoingSupply) : undefined;
    obj.current_supply = message.currentSupply ? Coin.toAmino(message.currentSupply) : undefined;
    obj.time_limited_current_supply = message.timeLimitedCurrentSupply ? Coin.toAmino(message.timeLimitedCurrentSupply) : undefined;
    obj.time_elapsed = message.timeElapsed ? Duration.toAmino(message.timeElapsed) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetSupplyResponseAminoMsg): AssetSupplyResponse {
    return AssetSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetSupplyResponseProtoMsg): AssetSupplyResponse {
    return AssetSupplyResponse.decode(message.value);
  },
  toProto(message: AssetSupplyResponse): Uint8Array {
    return AssetSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: AssetSupplyResponse): AssetSupplyResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.AssetSupplyResponse",
      value: AssetSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetSupplyResponse(): QueryAssetSupplyResponse {
  return {
    assetSupply: AssetSupplyResponse.fromPartial({})
  };
}
export const QueryAssetSupplyResponse = {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyResponse",
  encode(message: QueryAssetSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetSupply !== undefined) {
      AssetSupplyResponse.encode(message.assetSupply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAssetSupplyResponse {
    return {
      assetSupply: isSet(object.assetSupply) ? AssetSupplyResponse.fromJSON(object.assetSupply) : undefined
    };
  },
  fromPartial(object: Partial<QueryAssetSupplyResponse>): QueryAssetSupplyResponse {
    const message = createBaseQueryAssetSupplyResponse();
    message.assetSupply = object.assetSupply !== undefined && object.assetSupply !== null ? AssetSupplyResponse.fromPartial(object.assetSupply) : undefined;
    return message;
  },
  fromAmino(object: QueryAssetSupplyResponseAmino): QueryAssetSupplyResponse {
    return {
      assetSupply: object?.asset_supply ? AssetSupplyResponse.fromAmino(object.asset_supply) : undefined
    };
  },
  toAmino(message: QueryAssetSupplyResponse): QueryAssetSupplyResponseAmino {
    const obj: any = {};
    obj.asset_supply = message.assetSupply ? AssetSupplyResponse.toAmino(message.assetSupply) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetSupplyResponseAminoMsg): QueryAssetSupplyResponse {
    return QueryAssetSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetSupplyResponseProtoMsg): QueryAssetSupplyResponse {
    return QueryAssetSupplyResponse.decode(message.value);
  },
  toProto(message: QueryAssetSupplyResponse): Uint8Array {
    return QueryAssetSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetSupplyResponse): QueryAssetSupplyResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAssetSupplyResponse",
      value: QueryAssetSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetSuppliesRequest(): QueryAssetSuppliesRequest {
  return {};
}
export const QueryAssetSuppliesRequest = {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesRequest",
  encode(_: QueryAssetSuppliesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAssetSuppliesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAssetSuppliesRequest>): QueryAssetSuppliesRequest {
    const message = createBaseQueryAssetSuppliesRequest();
    return message;
  },
  fromAmino(_: QueryAssetSuppliesRequestAmino): QueryAssetSuppliesRequest {
    return {};
  },
  toAmino(_: QueryAssetSuppliesRequest): QueryAssetSuppliesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAssetSuppliesRequestAminoMsg): QueryAssetSuppliesRequest {
    return QueryAssetSuppliesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetSuppliesRequestProtoMsg): QueryAssetSuppliesRequest {
    return QueryAssetSuppliesRequest.decode(message.value);
  },
  toProto(message: QueryAssetSuppliesRequest): Uint8Array {
    return QueryAssetSuppliesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetSuppliesRequest): QueryAssetSuppliesRequestProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesRequest",
      value: QueryAssetSuppliesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetSuppliesResponse(): QueryAssetSuppliesResponse {
  return {
    assetSupplies: []
  };
}
export const QueryAssetSuppliesResponse = {
  typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesResponse",
  encode(message: QueryAssetSuppliesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetSupplies) {
      AssetSupplyResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAssetSuppliesResponse {
    return {
      assetSupplies: Array.isArray(object?.assetSupplies) ? object.assetSupplies.map((e: any) => AssetSupplyResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAssetSuppliesResponse>): QueryAssetSuppliesResponse {
    const message = createBaseQueryAssetSuppliesResponse();
    message.assetSupplies = object.assetSupplies?.map(e => AssetSupplyResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAssetSuppliesResponseAmino): QueryAssetSuppliesResponse {
    return {
      assetSupplies: Array.isArray(object?.asset_supplies) ? object.asset_supplies.map((e: any) => AssetSupplyResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAssetSuppliesResponse): QueryAssetSuppliesResponseAmino {
    const obj: any = {};
    if (message.assetSupplies) {
      obj.asset_supplies = message.assetSupplies.map(e => e ? AssetSupplyResponse.toAmino(e) : undefined);
    } else {
      obj.asset_supplies = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAssetSuppliesResponseAminoMsg): QueryAssetSuppliesResponse {
    return QueryAssetSuppliesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetSuppliesResponseProtoMsg): QueryAssetSuppliesResponse {
    return QueryAssetSuppliesResponse.decode(message.value);
  },
  toProto(message: QueryAssetSuppliesResponse): Uint8Array {
    return QueryAssetSuppliesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetSuppliesResponse): QueryAssetSuppliesResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAssetSuppliesResponse",
      value: QueryAssetSuppliesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAtomicSwapRequest(): QueryAtomicSwapRequest {
  return {
    swapId: ""
  };
}
export const QueryAtomicSwapRequest = {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapRequest",
  encode(message: QueryAtomicSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapId !== "") {
      writer.uint32(10).string(message.swapId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAtomicSwapRequest {
    return {
      swapId: isSet(object.swapId) ? String(object.swapId) : ""
    };
  },
  fromPartial(object: Partial<QueryAtomicSwapRequest>): QueryAtomicSwapRequest {
    const message = createBaseQueryAtomicSwapRequest();
    message.swapId = object.swapId ?? "";
    return message;
  },
  fromAmino(object: QueryAtomicSwapRequestAmino): QueryAtomicSwapRequest {
    return {
      swapId: object.swap_id
    };
  },
  toAmino(message: QueryAtomicSwapRequest): QueryAtomicSwapRequestAmino {
    const obj: any = {};
    obj.swap_id = message.swapId;
    return obj;
  },
  fromAminoMsg(object: QueryAtomicSwapRequestAminoMsg): QueryAtomicSwapRequest {
    return QueryAtomicSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAtomicSwapRequestProtoMsg): QueryAtomicSwapRequest {
    return QueryAtomicSwapRequest.decode(message.value);
  },
  toProto(message: QueryAtomicSwapRequest): Uint8Array {
    return QueryAtomicSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAtomicSwapRequest): QueryAtomicSwapRequestProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapRequest",
      value: QueryAtomicSwapRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAtomicSwapResponse(): QueryAtomicSwapResponse {
  return {
    atomicSwap: AtomicSwapResponse.fromPartial({})
  };
}
export const QueryAtomicSwapResponse = {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapResponse",
  encode(message: QueryAtomicSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atomicSwap !== undefined) {
      AtomicSwapResponse.encode(message.atomicSwap, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAtomicSwapResponse {
    return {
      atomicSwap: isSet(object.atomicSwap) ? AtomicSwapResponse.fromJSON(object.atomicSwap) : undefined
    };
  },
  fromPartial(object: Partial<QueryAtomicSwapResponse>): QueryAtomicSwapResponse {
    const message = createBaseQueryAtomicSwapResponse();
    message.atomicSwap = object.atomicSwap !== undefined && object.atomicSwap !== null ? AtomicSwapResponse.fromPartial(object.atomicSwap) : undefined;
    return message;
  },
  fromAmino(object: QueryAtomicSwapResponseAmino): QueryAtomicSwapResponse {
    return {
      atomicSwap: object?.atomic_swap ? AtomicSwapResponse.fromAmino(object.atomic_swap) : undefined
    };
  },
  toAmino(message: QueryAtomicSwapResponse): QueryAtomicSwapResponseAmino {
    const obj: any = {};
    obj.atomic_swap = message.atomicSwap ? AtomicSwapResponse.toAmino(message.atomicSwap) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAtomicSwapResponseAminoMsg): QueryAtomicSwapResponse {
    return QueryAtomicSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAtomicSwapResponseProtoMsg): QueryAtomicSwapResponse {
    return QueryAtomicSwapResponse.decode(message.value);
  },
  toProto(message: QueryAtomicSwapResponse): Uint8Array {
    return QueryAtomicSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAtomicSwapResponse): QueryAtomicSwapResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapResponse",
      value: QueryAtomicSwapResponse.encode(message).finish()
    };
  }
};
function createBaseAtomicSwapResponse(): AtomicSwapResponse {
  return {
    id: "",
    amount: [],
    randomNumberHash: "",
    expireHeight: BigInt(0),
    timestamp: BigInt(0),
    sender: "",
    recipient: "",
    senderOtherChain: "",
    recipientOtherChain: "",
    closedBlock: BigInt(0),
    status: 0,
    crossChain: false,
    direction: 0
  };
}
export const AtomicSwapResponse = {
  typeUrl: "/kava.bep3.v1beta1.AtomicSwapResponse",
  encode(message: AtomicSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.randomNumberHash !== "") {
      writer.uint32(26).string(message.randomNumberHash);
    }
    if (message.expireHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.expireHeight);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(40).int64(message.timestamp);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    if (message.senderOtherChain !== "") {
      writer.uint32(66).string(message.senderOtherChain);
    }
    if (message.recipientOtherChain !== "") {
      writer.uint32(74).string(message.recipientOtherChain);
    }
    if (message.closedBlock !== BigInt(0)) {
      writer.uint32(80).int64(message.closedBlock);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.crossChain === true) {
      writer.uint32(96).bool(message.crossChain);
    }
    if (message.direction !== 0) {
      writer.uint32(104).int32(message.direction);
    }
    return writer;
  },
  fromJSON(object: any): AtomicSwapResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      randomNumberHash: isSet(object.randomNumberHash) ? String(object.randomNumberHash) : "",
      expireHeight: isSet(object.expireHeight) ? BigInt(object.expireHeight.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      senderOtherChain: isSet(object.senderOtherChain) ? String(object.senderOtherChain) : "",
      recipientOtherChain: isSet(object.recipientOtherChain) ? String(object.recipientOtherChain) : "",
      closedBlock: isSet(object.closedBlock) ? BigInt(object.closedBlock.toString()) : BigInt(0),
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : -1,
      crossChain: isSet(object.crossChain) ? Boolean(object.crossChain) : false,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : -1
    };
  },
  fromPartial(object: Partial<AtomicSwapResponse>): AtomicSwapResponse {
    const message = createBaseAtomicSwapResponse();
    message.id = object.id ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.randomNumberHash = object.randomNumberHash ?? "";
    message.expireHeight = object.expireHeight !== undefined && object.expireHeight !== null ? BigInt(object.expireHeight.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.closedBlock = object.closedBlock !== undefined && object.closedBlock !== null ? BigInt(object.closedBlock.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.crossChain = object.crossChain ?? false;
    message.direction = object.direction ?? 0;
    return message;
  },
  fromAmino(object: AtomicSwapResponseAmino): AtomicSwapResponse {
    return {
      id: object.id,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      randomNumberHash: object.random_number_hash,
      expireHeight: BigInt(object.expire_height),
      timestamp: BigInt(object.timestamp),
      sender: object.sender,
      recipient: object.recipient,
      senderOtherChain: object.sender_other_chain,
      recipientOtherChain: object.recipient_other_chain,
      closedBlock: BigInt(object.closed_block),
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : -1,
      crossChain: object.cross_chain,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : -1
    };
  },
  toAmino(message: AtomicSwapResponse): AtomicSwapResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.random_number_hash = message.randomNumberHash;
    obj.expire_height = message.expireHeight ? message.expireHeight.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    obj.sender_other_chain = message.senderOtherChain;
    obj.recipient_other_chain = message.recipientOtherChain;
    obj.closed_block = message.closedBlock ? message.closedBlock.toString() : undefined;
    obj.status = message.status;
    obj.cross_chain = message.crossChain;
    obj.direction = message.direction;
    return obj;
  },
  fromAminoMsg(object: AtomicSwapResponseAminoMsg): AtomicSwapResponse {
    return AtomicSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AtomicSwapResponseProtoMsg): AtomicSwapResponse {
    return AtomicSwapResponse.decode(message.value);
  },
  toProto(message: AtomicSwapResponse): Uint8Array {
    return AtomicSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: AtomicSwapResponse): AtomicSwapResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.AtomicSwapResponse",
      value: AtomicSwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAtomicSwapsRequest(): QueryAtomicSwapsRequest {
  return {
    involve: "",
    expiration: BigInt(0),
    status: 0,
    direction: 0,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAtomicSwapsRequest = {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsRequest",
  encode(message: QueryAtomicSwapsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.involve !== "") {
      writer.uint32(10).string(message.involve);
    }
    if (message.expiration !== BigInt(0)) {
      writer.uint32(16).uint64(message.expiration);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAtomicSwapsRequest {
    return {
      involve: isSet(object.involve) ? String(object.involve) : "",
      expiration: isSet(object.expiration) ? BigInt(object.expiration.toString()) : BigInt(0),
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : -1,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAtomicSwapsRequest>): QueryAtomicSwapsRequest {
    const message = createBaseQueryAtomicSwapsRequest();
    message.involve = object.involve ?? "";
    message.expiration = object.expiration !== undefined && object.expiration !== null ? BigInt(object.expiration.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.direction = object.direction ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAtomicSwapsRequestAmino): QueryAtomicSwapsRequest {
    return {
      involve: object.involve,
      expiration: BigInt(object.expiration),
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : -1,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : -1,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAtomicSwapsRequest): QueryAtomicSwapsRequestAmino {
    const obj: any = {};
    obj.involve = message.involve;
    obj.expiration = message.expiration ? message.expiration.toString() : undefined;
    obj.status = message.status;
    obj.direction = message.direction;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAtomicSwapsRequestAminoMsg): QueryAtomicSwapsRequest {
    return QueryAtomicSwapsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAtomicSwapsRequestProtoMsg): QueryAtomicSwapsRequest {
    return QueryAtomicSwapsRequest.decode(message.value);
  },
  toProto(message: QueryAtomicSwapsRequest): Uint8Array {
    return QueryAtomicSwapsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAtomicSwapsRequest): QueryAtomicSwapsRequestProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsRequest",
      value: QueryAtomicSwapsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAtomicSwapsResponse(): QueryAtomicSwapsResponse {
  return {
    atomicSwaps: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAtomicSwapsResponse = {
  typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsResponse",
  encode(message: QueryAtomicSwapsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.atomicSwaps) {
      AtomicSwapResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAtomicSwapsResponse {
    return {
      atomicSwaps: Array.isArray(object?.atomicSwaps) ? object.atomicSwaps.map((e: any) => AtomicSwapResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAtomicSwapsResponse>): QueryAtomicSwapsResponse {
    const message = createBaseQueryAtomicSwapsResponse();
    message.atomicSwaps = object.atomicSwaps?.map(e => AtomicSwapResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAtomicSwapsResponseAmino): QueryAtomicSwapsResponse {
    return {
      atomicSwaps: Array.isArray(object?.atomic_swaps) ? object.atomic_swaps.map((e: any) => AtomicSwapResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAtomicSwapsResponse): QueryAtomicSwapsResponseAmino {
    const obj: any = {};
    if (message.atomicSwaps) {
      obj.atomic_swaps = message.atomicSwaps.map(e => e ? AtomicSwapResponse.toAmino(e) : undefined);
    } else {
      obj.atomic_swaps = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAtomicSwapsResponseAminoMsg): QueryAtomicSwapsResponse {
    return QueryAtomicSwapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAtomicSwapsResponseProtoMsg): QueryAtomicSwapsResponse {
    return QueryAtomicSwapsResponse.decode(message.value);
  },
  toProto(message: QueryAtomicSwapsResponse): Uint8Array {
    return QueryAtomicSwapsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAtomicSwapsResponse): QueryAtomicSwapsResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.QueryAtomicSwapsResponse",
      value: QueryAtomicSwapsResponse.encode(message).finish()
    };
  }
};