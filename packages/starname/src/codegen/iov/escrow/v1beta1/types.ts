import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  object?: Any;
  /**
   * TODO: refactor this to use sdk.Coin instead of sdk.Coins
   * Although the price contains multiple coins, for now we enforce a specific
   * denomination, so there will be only one coin type in a valid escrow
   */
  price: Coin[];
  state: EscrowState;
  deadline: Long;
  brokerAddress: string;
  brokerCommission: string;
}
/** Escrow defines the struct of an escrow */
export interface EscrowSDKType {
  id: string;
  seller: string;
  object?: AnySDKType;
  price: CoinSDKType[];
  state: EscrowState;
  deadline: Long;
  broker_address: string;
  broker_commission: string;
}
function createBaseEscrow(): Escrow {
  return {
    id: "",
    seller: "",
    object: undefined,
    price: [],
    state: 0,
    deadline: Long.UZERO,
    brokerAddress: "",
    brokerCommission: ""
  };
}
export const Escrow = {
  encode(message: Escrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    if (message.object !== undefined) {
      Any.encode(message.object, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(48).uint64(message.deadline);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(58).string(message.brokerAddress);
    }
    if (message.brokerCommission !== "") {
      writer.uint32(66).string(message.brokerCommission);
    }
    return writer;
  },
  fromJSON(object: any): Escrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      object: isSet(object.object) ? Any.fromJSON(object.object) : undefined,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      state: isSet(object.state) ? escrowStateFromJSON(object.state) : 0,
      deadline: isSet(object.deadline) ? Long.fromValue(object.deadline) : Long.UZERO,
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
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.UZERO;
    message.brokerAddress = object.brokerAddress ?? "";
    message.brokerCommission = object.brokerCommission ?? "";
    return message;
  }
};