import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for x/rewards module. */
export interface Params {
  /** The module account to distribute rewards from. */
  treasuryAccount: string;
  /** The denom of the rewards token. */
  denom: string;
  /**
   * The exponent of converting one unit of `denom` to a full coin.
   * For example, `denom=uatom, denom_exponent=-6` defines that
   * `1 uatom = 10^(-6) ATOM`. This conversion is needed since the
   * `market_id` retrieves the price of a full coin of the reward token.
   */
  denomExponent: number;
  /** The id of the market that has the price of the rewards token. */
  marketId: number;
  /**
   * The amount (in ppm) that fees are multiplied by to get
   * the maximum rewards amount.
   */
  feeMultiplierPpm: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/dydxprotocol.rewards.Params";
  value: Uint8Array;
}
/** Params defines the parameters for x/rewards module. */
export interface ParamsAmino {
  /** The module account to distribute rewards from. */
  treasury_account: string;
  /** The denom of the rewards token. */
  denom: string;
  /**
   * The exponent of converting one unit of `denom` to a full coin.
   * For example, `denom=uatom, denom_exponent=-6` defines that
   * `1 uatom = 10^(-6) ATOM`. This conversion is needed since the
   * `market_id` retrieves the price of a full coin of the reward token.
   */
  denom_exponent: number;
  /** The id of the market that has the price of the rewards token. */
  market_id: number;
  /**
   * The amount (in ppm) that fees are multiplied by to get
   * the maximum rewards amount.
   */
  fee_multiplier_ppm: number;
}
export interface ParamsAminoMsg {
  type: "/dydxprotocol.rewards.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for x/rewards module. */
export interface ParamsSDKType {
  treasury_account: string;
  denom: string;
  denom_exponent: number;
  market_id: number;
  fee_multiplier_ppm: number;
}
function createBaseParams(): Params {
  return {
    treasuryAccount: "",
    denom: "",
    denomExponent: 0,
    marketId: 0,
    feeMultiplierPpm: 0
  };
}
export const Params = {
  typeUrl: "/dydxprotocol.rewards.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.treasuryAccount !== "") {
      writer.uint32(10).string(message.treasuryAccount);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.denomExponent !== 0) {
      writer.uint32(24).sint32(message.denomExponent);
    }
    if (message.marketId !== 0) {
      writer.uint32(32).uint32(message.marketId);
    }
    if (message.feeMultiplierPpm !== 0) {
      writer.uint32(40).uint32(message.feeMultiplierPpm);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      treasuryAccount: isSet(object.treasuryAccount) ? String(object.treasuryAccount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      denomExponent: isSet(object.denomExponent) ? Number(object.denomExponent) : 0,
      marketId: isSet(object.marketId) ? Number(object.marketId) : 0,
      feeMultiplierPpm: isSet(object.feeMultiplierPpm) ? Number(object.feeMultiplierPpm) : 0
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.treasuryAccount = object.treasuryAccount ?? "";
    message.denom = object.denom ?? "";
    message.denomExponent = object.denomExponent ?? 0;
    message.marketId = object.marketId ?? 0;
    message.feeMultiplierPpm = object.feeMultiplierPpm ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      treasuryAccount: object.treasury_account,
      denom: object.denom,
      denomExponent: object.denom_exponent,
      marketId: object.market_id,
      feeMultiplierPpm: object.fee_multiplier_ppm
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.treasury_account = message.treasuryAccount;
    obj.denom = message.denom;
    obj.denom_exponent = message.denomExponent;
    obj.market_id = message.marketId;
    obj.fee_multiplier_ppm = message.feeMultiplierPpm;
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
      typeUrl: "/dydxprotocol.rewards.Params",
      value: Params.encode(message).finish()
    };
  }
};