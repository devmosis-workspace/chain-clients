import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  nextAuctionId: bigint;
  params: Params;
  /** Genesis auctions */
  auctions: (Any)[] | Any[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.auction.v1beta1.GenesisState";
  value: Uint8Array;
}
export type GenesisStateEncoded = Omit<GenesisState, "auctions"> & {
  /** Genesis auctions */auctions: (AnyProtoMsg)[];
};
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateAmino {
  next_auction_id?: string;
  params?: ParamsAmino;
  /** Genesis auctions */
  auctions?: AnyAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.auction.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
  next_auction_id: bigint;
  params: ParamsSDKType;
  auctions: (AnySDKType)[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
  maxAuctionDuration: Duration;
  forwardBidDuration: Duration;
  reverseBidDuration: Duration;
  incrementSurplus: Uint8Array;
  incrementDebt: Uint8Array;
  incrementCollateral: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.auction.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsAmino {
  max_auction_duration?: DurationAmino;
  forward_bid_duration?: DurationAmino;
  reverse_bid_duration?: DurationAmino;
  increment_surplus?: string;
  increment_debt?: string;
  increment_collateral?: string;
}
export interface ParamsAminoMsg {
  type: "/kava.auction.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsSDKType {
  max_auction_duration: DurationSDKType;
  forward_bid_duration: DurationSDKType;
  reverse_bid_duration: DurationSDKType;
  increment_surplus: Uint8Array;
  increment_debt: Uint8Array;
  increment_collateral: Uint8Array;
}
function createBaseGenesisState(): GenesisState {
  return {
    nextAuctionId: BigInt(0),
    params: Params.fromPartial({}),
    auctions: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.auction.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextAuctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextAuctionId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.auctions) {
      Any.encode((v! as Any), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      nextAuctionId: isSet(object.nextAuctionId) ? BigInt(object.nextAuctionId.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      auctions: Array.isArray(object?.auctions) ? object.auctions.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextAuctionId = object.nextAuctionId !== undefined && object.nextAuctionId !== null ? BigInt(object.nextAuctionId.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctions = object.auctions?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.next_auction_id !== undefined && object.next_auction_id !== null) {
      message.nextAuctionId = BigInt(object.next_auction_id);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.auctions = object.auctions?.map(e => GenesisAuction_FromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_auction_id = message.nextAuctionId ? message.nextAuctionId.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? GenesisAuction_ToAmino((e as Any)) : undefined);
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    maxAuctionDuration: Duration.fromPartial({}),
    forwardBidDuration: Duration.fromPartial({}),
    reverseBidDuration: Duration.fromPartial({}),
    incrementSurplus: new Uint8Array(),
    incrementDebt: new Uint8Array(),
    incrementCollateral: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/kava.auction.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxAuctionDuration !== undefined) {
      Duration.encode(message.maxAuctionDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.forwardBidDuration !== undefined) {
      Duration.encode(message.forwardBidDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.reverseBidDuration !== undefined) {
      Duration.encode(message.reverseBidDuration, writer.uint32(58).fork()).ldelim();
    }
    if (message.incrementSurplus.length !== 0) {
      writer.uint32(26).bytes(message.incrementSurplus);
    }
    if (message.incrementDebt.length !== 0) {
      writer.uint32(34).bytes(message.incrementDebt);
    }
    if (message.incrementCollateral.length !== 0) {
      writer.uint32(42).bytes(message.incrementCollateral);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      maxAuctionDuration: isSet(object.maxAuctionDuration) ? Duration.fromJSON(object.maxAuctionDuration) : undefined,
      forwardBidDuration: isSet(object.forwardBidDuration) ? Duration.fromJSON(object.forwardBidDuration) : undefined,
      reverseBidDuration: isSet(object.reverseBidDuration) ? Duration.fromJSON(object.reverseBidDuration) : undefined,
      incrementSurplus: isSet(object.incrementSurplus) ? bytesFromBase64(object.incrementSurplus) : new Uint8Array(),
      incrementDebt: isSet(object.incrementDebt) ? bytesFromBase64(object.incrementDebt) : new Uint8Array(),
      incrementCollateral: isSet(object.incrementCollateral) ? bytesFromBase64(object.incrementCollateral) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxAuctionDuration = object.maxAuctionDuration !== undefined && object.maxAuctionDuration !== null ? Duration.fromPartial(object.maxAuctionDuration) : undefined;
    message.forwardBidDuration = object.forwardBidDuration !== undefined && object.forwardBidDuration !== null ? Duration.fromPartial(object.forwardBidDuration) : undefined;
    message.reverseBidDuration = object.reverseBidDuration !== undefined && object.reverseBidDuration !== null ? Duration.fromPartial(object.reverseBidDuration) : undefined;
    message.incrementSurplus = object.incrementSurplus ?? new Uint8Array();
    message.incrementDebt = object.incrementDebt ?? new Uint8Array();
    message.incrementCollateral = object.incrementCollateral ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_auction_duration !== undefined && object.max_auction_duration !== null) {
      message.maxAuctionDuration = Duration.fromAmino(object.max_auction_duration);
    }
    if (object.forward_bid_duration !== undefined && object.forward_bid_duration !== null) {
      message.forwardBidDuration = Duration.fromAmino(object.forward_bid_duration);
    }
    if (object.reverse_bid_duration !== undefined && object.reverse_bid_duration !== null) {
      message.reverseBidDuration = Duration.fromAmino(object.reverse_bid_duration);
    }
    if (object.increment_surplus !== undefined && object.increment_surplus !== null) {
      message.incrementSurplus = bytesFromBase64(object.increment_surplus);
    }
    if (object.increment_debt !== undefined && object.increment_debt !== null) {
      message.incrementDebt = bytesFromBase64(object.increment_debt);
    }
    if (object.increment_collateral !== undefined && object.increment_collateral !== null) {
      message.incrementCollateral = bytesFromBase64(object.increment_collateral);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_auction_duration = message.maxAuctionDuration ? Duration.toAmino(message.maxAuctionDuration) : undefined;
    obj.forward_bid_duration = message.forwardBidDuration ? Duration.toAmino(message.forwardBidDuration) : undefined;
    obj.reverse_bid_duration = message.reverseBidDuration ? Duration.toAmino(message.reverseBidDuration) : undefined;
    obj.increment_surplus = message.incrementSurplus ? base64FromBytes(message.incrementSurplus) : undefined;
    obj.increment_debt = message.incrementDebt ? base64FromBytes(message.incrementDebt) : undefined;
    obj.increment_collateral = message.incrementCollateral ? base64FromBytes(message.incrementCollateral) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
export const GenesisAuction_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const GenesisAuction_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const GenesisAuction_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};