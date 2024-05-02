import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * FeeShareEvent defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeePayoutEvent {
  /** Address of the account that will receive the payout */
  withdrawAddress: string;
  /** Amount of the payout */
  feesPaid: Coin[];
}
export interface FeePayoutEventProtoMsg {
  typeUrl: "/juno.feeshare.v1.FeePayoutEvent";
  value: Uint8Array;
}
/**
 * FeeShareEvent defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeePayoutEventAmino {
  /** Address of the account that will receive the payout */
  withdraw_address?: string;
  /** Amount of the payout */
  fees_paid?: CoinAmino[];
}
export interface FeePayoutEventAminoMsg {
  type: "/juno.feeshare.v1.FeePayoutEvent";
  value: FeePayoutEventAmino;
}
/**
 * FeeShareEvent defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeePayoutEventSDKType {
  withdraw_address: string;
  fees_paid: CoinSDKType[];
}
function createBaseFeePayoutEvent(): FeePayoutEvent {
  return {
    withdrawAddress: "",
    feesPaid: []
  };
}
export const FeePayoutEvent = {
  typeUrl: "/juno.feeshare.v1.FeePayoutEvent",
  encode(message: FeePayoutEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    for (const v of message.feesPaid) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeePayoutEvent {
    return {
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      feesPaid: Array.isArray(object?.feesPaid) ? object.feesPaid.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FeePayoutEvent>): FeePayoutEvent {
    const message = createBaseFeePayoutEvent();
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.feesPaid = object.feesPaid?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeePayoutEventAmino): FeePayoutEvent {
    const message = createBaseFeePayoutEvent();
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    message.feesPaid = object.fees_paid?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeePayoutEvent): FeePayoutEventAmino {
    const obj: any = {};
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    if (message.feesPaid) {
      obj.fees_paid = message.feesPaid.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees_paid = message.feesPaid;
    }
    return obj;
  },
  fromAminoMsg(object: FeePayoutEventAminoMsg): FeePayoutEvent {
    return FeePayoutEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: FeePayoutEventProtoMsg): FeePayoutEvent {
    return FeePayoutEvent.decode(message.value);
  },
  toProto(message: FeePayoutEvent): Uint8Array {
    return FeePayoutEvent.encode(message).finish();
  },
  toProtoMsg(message: FeePayoutEvent): FeePayoutEventProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.FeePayoutEvent",
      value: FeePayoutEvent.encode(message).finish()
    };
  }
};