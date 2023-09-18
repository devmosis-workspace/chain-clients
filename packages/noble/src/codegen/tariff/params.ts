import { BinaryWriter } from "../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../helpers";
/** Params defines the set of params for the distribution module. */
export interface Params {
  /** share is % of tx fees or rewards allocated to distribution_entities */
  share: string;
  /**
   * % of tx fees or rewards allocated to a set of global distribution entities
   * these shares must add up to 1
   */
  distributionEntities: DistributionEntity[];
  transferFeeBps: string;
  transferFeeMax: string;
  transferFeeDenom: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/noble.tariff.Params";
  value: Uint8Array;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsAmino {
  /** share is % of tx fees or rewards allocated to distribution_entities */
  share: string;
  /**
   * % of tx fees or rewards allocated to a set of global distribution entities
   * these shares must add up to 1
   */
  distribution_entities: DistributionEntityAmino[];
  transfer_fee_bps: string;
  transfer_fee_max: string;
  transfer_fee_denom: string;
}
export interface ParamsAminoMsg {
  type: "/noble.tariff.Params";
  value: ParamsAmino;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsSDKType {
  share: string;
  distribution_entities: DistributionEntitySDKType[];
  transfer_fee_bps: string;
  transfer_fee_max: string;
  transfer_fee_denom: string;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntity {
  address: string;
  share: string;
}
export interface DistributionEntityProtoMsg {
  typeUrl: "/noble.tariff.DistributionEntity";
  value: Uint8Array;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntityAmino {
  address: string;
  share: string;
}
export interface DistributionEntityAminoMsg {
  type: "/noble.tariff.DistributionEntity";
  value: DistributionEntityAmino;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntitySDKType {
  address: string;
  share: string;
}
function createBaseParams(): Params {
  return {
    share: "",
    distributionEntities: [],
    transferFeeBps: "",
    transferFeeMax: "",
    transferFeeDenom: ""
  };
}
export const Params = {
  typeUrl: "/noble.tariff.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.share !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.share, 18).atomics);
    }
    for (const v of message.distributionEntities) {
      DistributionEntity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.transferFeeBps !== "") {
      writer.uint32(26).string(message.transferFeeBps);
    }
    if (message.transferFeeMax !== "") {
      writer.uint32(34).string(message.transferFeeMax);
    }
    if (message.transferFeeDenom !== "") {
      writer.uint32(42).string(message.transferFeeDenom);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      share: isSet(object.share) ? String(object.share) : "",
      distributionEntities: Array.isArray(object?.distributionEntities) ? object.distributionEntities.map((e: any) => DistributionEntity.fromJSON(e)) : [],
      transferFeeBps: isSet(object.transferFeeBps) ? String(object.transferFeeBps) : "",
      transferFeeMax: isSet(object.transferFeeMax) ? String(object.transferFeeMax) : "",
      transferFeeDenom: isSet(object.transferFeeDenom) ? String(object.transferFeeDenom) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.share = object.share ?? "";
    message.distributionEntities = object.distributionEntities?.map(e => DistributionEntity.fromPartial(e)) || [];
    message.transferFeeBps = object.transferFeeBps ?? "";
    message.transferFeeMax = object.transferFeeMax ?? "";
    message.transferFeeDenom = object.transferFeeDenom ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      share: object.share,
      distributionEntities: Array.isArray(object?.distribution_entities) ? object.distribution_entities.map((e: any) => DistributionEntity.fromAmino(e)) : [],
      transferFeeBps: object.transfer_fee_bps,
      transferFeeMax: object.transfer_fee_max,
      transferFeeDenom: object.transfer_fee_denom
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.share = message.share;
    if (message.distributionEntities) {
      obj.distribution_entities = message.distributionEntities.map(e => e ? DistributionEntity.toAmino(e) : undefined);
    } else {
      obj.distribution_entities = [];
    }
    obj.transfer_fee_bps = message.transferFeeBps;
    obj.transfer_fee_max = message.transferFeeMax;
    obj.transfer_fee_denom = message.transferFeeDenom;
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
      typeUrl: "/noble.tariff.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDistributionEntity(): DistributionEntity {
  return {
    address: "",
    share: ""
  };
}
export const DistributionEntity = {
  typeUrl: "/noble.tariff.DistributionEntity",
  encode(message: DistributionEntity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.share !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.share, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DistributionEntity {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      share: isSet(object.share) ? String(object.share) : ""
    };
  },
  fromPartial(object: Partial<DistributionEntity>): DistributionEntity {
    const message = createBaseDistributionEntity();
    message.address = object.address ?? "";
    message.share = object.share ?? "";
    return message;
  },
  fromAmino(object: DistributionEntityAmino): DistributionEntity {
    return {
      address: object.address,
      share: object.share
    };
  },
  toAmino(message: DistributionEntity): DistributionEntityAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.share = message.share;
    return obj;
  },
  fromAminoMsg(object: DistributionEntityAminoMsg): DistributionEntity {
    return DistributionEntity.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionEntityProtoMsg): DistributionEntity {
    return DistributionEntity.decode(message.value);
  },
  toProto(message: DistributionEntity): Uint8Array {
    return DistributionEntity.encode(message).finish();
  },
  toProtoMsg(message: DistributionEntity): DistributionEntityProtoMsg {
    return {
      typeUrl: "/noble.tariff.DistributionEntity",
      value: DistributionEntity.encode(message).finish()
    };
  }
};