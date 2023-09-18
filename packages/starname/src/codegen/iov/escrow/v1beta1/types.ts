import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** EscrowState defines the state of an escrow */
export enum EscrowState {
  /**
   * ESCROW_STATE_OPEN_UNSPECIFIED - ESCROW_STATE_OPEN_UNSPECIFIED defines an open state. TODO:: review the
   * _UNSPECIFIED sufix
   */
  ESCROW_STATE_OPEN_UNSPECIFIED = 0,
  /** ESCROW_STATE_COMPLETED - ESCROW_STATE_COMPLETED defines a completed state. */
  ESCROW_STATE_COMPLETED = 1,
  /** ESCROW_STATE_REFUNDED - ESCROW_STATE_REFUNDED defines a refunded state. */
  ESCROW_STATE_REFUNDED = 2,
  /** ESCROW_STATE_EXPIRED - ESCROW_STATE_REFUNDED defines an expired state. */
  ESCROW_STATE_EXPIRED = 3,
  UNRECOGNIZED = -1,
}
export const EscrowStateSDKType = EscrowState;
export const EscrowStateAmino = EscrowState;
export function escrowStateFromJSON(object: any): EscrowState {
  switch (object) {
    case 0:
    case "ESCROW_STATE_OPEN_UNSPECIFIED":
      return EscrowState.ESCROW_STATE_OPEN_UNSPECIFIED;
    case 1:
    case "ESCROW_STATE_COMPLETED":
      return EscrowState.ESCROW_STATE_COMPLETED;
    case 2:
    case "ESCROW_STATE_REFUNDED":
      return EscrowState.ESCROW_STATE_REFUNDED;
    case 3:
    case "ESCROW_STATE_EXPIRED":
      return EscrowState.ESCROW_STATE_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EscrowState.UNRECOGNIZED;
  }
}
export function escrowStateToJSON(object: EscrowState): string {
  switch (object) {
    case EscrowState.ESCROW_STATE_OPEN_UNSPECIFIED:
      return "ESCROW_STATE_OPEN_UNSPECIFIED";
    case EscrowState.ESCROW_STATE_COMPLETED:
      return "ESCROW_STATE_COMPLETED";
    case EscrowState.ESCROW_STATE_REFUNDED:
      return "ESCROW_STATE_REFUNDED";
    case EscrowState.ESCROW_STATE_EXPIRED:
      return "ESCROW_STATE_EXPIRED";
    case EscrowState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Escrow defines the struct of an escrow */
export interface Escrow {
  id: string;
  seller: string;
  object: (Any) | undefined;
  /**
   * TODO: refactor this to use sdk.Coin instead of sdk.Coins
   * Although the price contains multiple coins, for now we enforce a specific
   * denomination, so there will be only one coin type in a valid escrow
   */
  price: Coin[];
  state: EscrowState;
  deadline: bigint;
  brokerAddress: string;
  brokerCommission: string;
}
export interface EscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.Escrow";
  value: Uint8Array;
}
export type EscrowEncoded = Omit<Escrow, "object"> & {
  object?: AnyProtoMsg | undefined;
};
/** Escrow defines the struct of an escrow */
export interface EscrowAmino {
  id: string;
  seller: string;
  object?: AnyAmino;
  /**
   * TODO: refactor this to use sdk.Coin instead of sdk.Coins
   * Although the price contains multiple coins, for now we enforce a specific
   * denomination, so there will be only one coin type in a valid escrow
   */
  price: CoinAmino[];
  state: EscrowState;
  deadline: string;
  broker_address: string;
  broker_commission: string;
}
export interface EscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.Escrow";
  value: EscrowAmino;
}
/** Escrow defines the struct of an escrow */
export interface EscrowSDKType {
  id: string;
  seller: string;
  object: AnySDKType | undefined;
  price: CoinSDKType[];
  state: EscrowState;
  deadline: bigint;
  broker_address: string;
  broker_commission: string;
}
function createBaseEscrow(): Escrow {
  return {
    id: "",
    seller: "",
    object: Any.fromPartial({}),
    price: [],
    state: 0,
    deadline: BigInt(0),
    brokerAddress: "",
    brokerCommission: ""
  };
}
export const Escrow = {
  typeUrl: "/starnamed.x.escrow.v1beta1.Escrow",
  encode(message: Escrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    if (message.object !== undefined) {
      Any.encode((message.object as Any), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(48).uint64(message.deadline);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(58).string(message.brokerAddress);
    }
    if (message.brokerCommission !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.brokerCommission, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Escrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      object: isSet(object.object) ? Any.fromJSON(object.object) : undefined,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      state: isSet(object.state) ? escrowStateFromJSON(object.state) : -1,
      deadline: isSet(object.deadline) ? BigInt(object.deadline.toString()) : BigInt(0),
      brokerAddress: isSet(object.brokerAddress) ? String(object.brokerAddress) : "",
      brokerCommission: isSet(object.brokerCommission) ? String(object.brokerCommission) : ""
    };
  },
  fromPartial(object: Partial<Escrow>): Escrow {
    const message = createBaseEscrow();
    message.id = object.id ?? "";
    message.seller = object.seller ?? "";
    message.object = object.object !== undefined && object.object !== null ? Any.fromPartial(object.object) : undefined;
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.brokerAddress = object.brokerAddress ?? "";
    message.brokerCommission = object.brokerCommission ?? "";
    return message;
  },
  fromAmino(object: EscrowAmino): Escrow {
    return {
      id: object.id,
      seller: object.seller,
      object: object?.object ? TransferableObject_FromAmino(object.object) : undefined,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromAmino(e)) : [],
      state: isSet(object.state) ? escrowStateFromJSON(object.state) : -1,
      deadline: BigInt(object.deadline),
      brokerAddress: object.broker_address,
      brokerCommission: object.broker_commission
    };
  },
  toAmino(message: Escrow): EscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.seller = message.seller;
    obj.object = message.object ? TransferableObject_ToAmino((message.object as Any)) : undefined;
    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.price = [];
    }
    obj.state = message.state;
    obj.deadline = message.deadline ? message.deadline.toString() : undefined;
    obj.broker_address = message.brokerAddress;
    obj.broker_commission = message.brokerCommission;
    return obj;
  },
  fromAminoMsg(object: EscrowAminoMsg): Escrow {
    return Escrow.fromAmino(object.value);
  },
  fromProtoMsg(message: EscrowProtoMsg): Escrow {
    return Escrow.decode(message.value);
  },
  toProto(message: Escrow): Uint8Array {
    return Escrow.encode(message).finish();
  },
  toProtoMsg(message: Escrow): EscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.Escrow",
      value: Escrow.encode(message).finish()
    };
  }
};
export const TransferableObject_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const TransferableObject_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const TransferableObject_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};