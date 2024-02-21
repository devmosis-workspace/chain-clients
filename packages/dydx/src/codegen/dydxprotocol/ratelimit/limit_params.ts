import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** LimitParams defines rate limit params on a denom. */
export interface LimitParams {
  /**
   * denom is the denomination of the token being rate limited.
   * e.g. ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5
   */
  denom: string;
  /**
   * limiters is a list of rate-limiters on this denom. All limiters
   * must be satified for a withdrawal to proceed.
   */
  limiters: Limiter[];
}
export interface LimitParamsProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.LimitParams";
  value: Uint8Array;
}
/** LimitParams defines rate limit params on a denom. */
export interface LimitParamsSDKType {
  denom: string;
  limiters: LimiterSDKType[];
}
/** Limiter defines one rate-limiter on a specfic denom. */
export interface Limiter {
  /**
   * period_sec is the rolling time period for which the limit applies
   * e.g. 3600 (an hour)
   */
  periodSec: number;
  /**
   * baseline_minimum is the minimum maximum withdrawal coin amount within the
   * time period.
   * e.g. 100_000_000_000 uusdc for 100k USDC; 5e22 adv4tnt for 50k DV4TNT
   */
  baselineMinimum: Uint8Array;
  /**
   * baseline_tvl_ppm is the maximum ratio of TVL withdrawable in
   * the time period, in part-per-million.
   * e.g. 100_000 (10%)
   */
  baselineTvlPpm: number;
}
export interface LimiterProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.Limiter";
  value: Uint8Array;
}
/** Limiter defines one rate-limiter on a specfic denom. */
export interface LimiterSDKType {
  period_sec: number;
  baseline_minimum: Uint8Array;
  baseline_tvl_ppm: number;
}
function createBaseLimitParams(): LimitParams {
  return {
    denom: "",
    limiters: []
  };
}
export const LimitParams = {
  typeUrl: "/dydxprotocol.ratelimit.LimitParams",
  encode(message: LimitParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.limiters) {
      Limiter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LimitParams {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      limiters: Array.isArray(object?.limiters) ? object.limiters.map((e: any) => Limiter.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LimitParams>): LimitParams {
    const message = createBaseLimitParams();
    message.denom = object.denom ?? "";
    message.limiters = object.limiters?.map(e => Limiter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LimitParamsAmino): LimitParams {
    const message = createBaseLimitParams();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.limiters = object.limiters?.map(e => Limiter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LimitParams): LimitParamsAmino {
    const obj: any = {};
    obj.denom = message.denom;
    if (message.limiters) {
      obj.limiters = message.limiters.map(e => e ? Limiter.toAmino(e) : undefined);
    } else {
      obj.limiters = [];
    }
    return obj;
  },
  fromAminoMsg(object: LimitParamsAminoMsg): LimitParams {
    return LimitParams.fromAmino(object.value);
  },
  fromProtoMsg(message: LimitParamsProtoMsg): LimitParams {
    return LimitParams.decode(message.value);
  },
  toProto(message: LimitParams): Uint8Array {
    return LimitParams.encode(message).finish();
  },
  toProtoMsg(message: LimitParams): LimitParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.LimitParams",
      value: LimitParams.encode(message).finish()
    };
  }
};
function createBaseLimiter(): Limiter {
  return {
    periodSec: 0,
    baselineMinimum: new Uint8Array(),
    baselineTvlPpm: 0
  };
}
export const Limiter = {
  typeUrl: "/dydxprotocol.ratelimit.Limiter",
  encode(message: Limiter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.periodSec !== 0) {
      writer.uint32(16).uint32(message.periodSec);
    }
    if (message.baselineMinimum.length !== 0) {
      writer.uint32(26).bytes(message.baselineMinimum);
    }
    if (message.baselineTvlPpm !== 0) {
      writer.uint32(32).uint32(message.baselineTvlPpm);
    }
    return writer;
  },
  fromJSON(object: any): Limiter {
    return {
      periodSec: isSet(object.periodSec) ? Number(object.periodSec) : 0,
      baselineMinimum: isSet(object.baselineMinimum) ? bytesFromBase64(object.baselineMinimum) : new Uint8Array(),
      baselineTvlPpm: isSet(object.baselineTvlPpm) ? Number(object.baselineTvlPpm) : 0
    };
  },
  fromPartial(object: Partial<Limiter>): Limiter {
    const message = createBaseLimiter();
    message.periodSec = object.periodSec ?? 0;
    message.baselineMinimum = object.baselineMinimum ?? new Uint8Array();
    message.baselineTvlPpm = object.baselineTvlPpm ?? 0;
    return message;
  },
  fromAmino(object: LimiterAmino): Limiter {
    const message = createBaseLimiter();
    if (object.period_sec !== undefined && object.period_sec !== null) {
      message.periodSec = object.period_sec;
    }
    if (object.baseline_minimum !== undefined && object.baseline_minimum !== null) {
      message.baselineMinimum = bytesFromBase64(object.baseline_minimum);
    }
    if (object.baseline_tvl_ppm !== undefined && object.baseline_tvl_ppm !== null) {
      message.baselineTvlPpm = object.baseline_tvl_ppm;
    }
    return message;
  },
  toAmino(message: Limiter): LimiterAmino {
    const obj: any = {};
    obj.period_sec = message.periodSec;
    obj.baseline_minimum = message.baselineMinimum ? base64FromBytes(message.baselineMinimum) : undefined;
    obj.baseline_tvl_ppm = message.baselineTvlPpm;
    return obj;
  },
  fromAminoMsg(object: LimiterAminoMsg): Limiter {
    return Limiter.fromAmino(object.value);
  },
  fromProtoMsg(message: LimiterProtoMsg): Limiter {
    return Limiter.decode(message.value);
  },
  toProto(message: Limiter): Uint8Array {
    return Limiter.encode(message).finish();
  },
  toProtoMsg(message: Limiter): LimiterProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.Limiter",
      value: Limiter.encode(message).finish()
    };
  }
};