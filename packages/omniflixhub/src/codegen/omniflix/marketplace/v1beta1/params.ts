import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params {
  saleCommission: string;
  distribution: Distribution;
  bidCloseDuration: Duration;
  maxAuctionDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  sale_commission?: string;
  distribution?: DistributionAmino;
  bid_close_duration?: DurationAmino;
  max_auction_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  sale_commission: string;
  distribution: DistributionSDKType;
  bid_close_duration: DurationSDKType;
  max_auction_duration: DurationSDKType;
}
export interface Distribution {
  staking: string;
  communityPool: string;
}
export interface DistributionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution";
  value: Uint8Array;
}
export interface DistributionAmino {
  staking?: string;
  community_pool?: string;
}
export interface DistributionAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.Distribution";
  value: DistributionAmino;
}
export interface DistributionSDKType {
  staking: string;
  community_pool: string;
}
function createBaseParams(): Params {
  return {
    saleCommission: "",
    distribution: Distribution.fromPartial({}),
    bidCloseDuration: Duration.fromPartial({}),
    maxAuctionDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.saleCommission !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.saleCommission, 18).atomics);
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(18).fork()).ldelim();
    }
    if (message.bidCloseDuration !== undefined) {
      Duration.encode(message.bidCloseDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxAuctionDuration !== undefined) {
      Duration.encode(message.maxAuctionDuration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      saleCommission: isSet(object.saleCommission) ? String(object.saleCommission) : "",
      distribution: isSet(object.distribution) ? Distribution.fromJSON(object.distribution) : undefined,
      bidCloseDuration: isSet(object.bidCloseDuration) ? Duration.fromJSON(object.bidCloseDuration) : undefined,
      maxAuctionDuration: isSet(object.maxAuctionDuration) ? Duration.fromJSON(object.maxAuctionDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.saleCommission = object.saleCommission ?? "";
    message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
    message.bidCloseDuration = object.bidCloseDuration !== undefined && object.bidCloseDuration !== null ? Duration.fromPartial(object.bidCloseDuration) : undefined;
    message.maxAuctionDuration = object.maxAuctionDuration !== undefined && object.maxAuctionDuration !== null ? Duration.fromPartial(object.maxAuctionDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.sale_commission !== undefined && object.sale_commission !== null) {
      message.saleCommission = object.sale_commission;
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromAmino(object.distribution);
    }
    if (object.bid_close_duration !== undefined && object.bid_close_duration !== null) {
      message.bidCloseDuration = Duration.fromAmino(object.bid_close_duration);
    }
    if (object.max_auction_duration !== undefined && object.max_auction_duration !== null) {
      message.maxAuctionDuration = Duration.fromAmino(object.max_auction_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.sale_commission = message.saleCommission;
    obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
    obj.bid_close_duration = message.bidCloseDuration ? Duration.toAmino(message.bidCloseDuration) : undefined;
    obj.max_auction_duration = message.maxAuctionDuration ? Duration.toAmino(message.maxAuctionDuration) : undefined;
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDistribution(): Distribution {
  return {
    staking: "",
    communityPool: ""
  };
}
export const Distribution = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.communityPool !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Distribution {
    return {
      staking: isSet(object.staking) ? String(object.staking) : "",
      communityPool: isSet(object.communityPool) ? String(object.communityPool) : ""
    };
  },
  fromPartial(object: Partial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.staking = object.staking ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.staking = message.staking;
    obj.community_pool = message.communityPool;
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution",
      value: Distribution.encode(message).finish()
    };
  }
};