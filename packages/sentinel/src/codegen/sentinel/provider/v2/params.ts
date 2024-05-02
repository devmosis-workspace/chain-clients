import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params {
  deposit: Coin;
  stakingShare: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sentinel.provider.v2.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  deposit?: CoinAmino;
  staking_share?: string;
}
export interface ParamsAminoMsg {
  type: "/sentinel.provider.v2.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  deposit: CoinSDKType;
  staking_share: string;
}
function createBaseParams(): Params {
  return {
    deposit: Coin.fromPartial({}),
    stakingShare: ""
  };
}
export const Params = {
  typeUrl: "/sentinel.provider.v2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakingShare !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.stakingShare, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      stakingShare: isSet(object.stakingShare) ? String(object.stakingShare) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.stakingShare = object.stakingShare ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.staking_share !== undefined && object.staking_share !== null) {
      message.stakingShare = object.staking_share;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.staking_share = message.stakingShare === "" ? undefined : message.stakingShare;
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
      typeUrl: "/sentinel.provider.v2.Params",
      value: Params.encode(message).finish()
    };
  }
};