import * as _m0 from "protobufjs/minimal";
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.share !== "") {
      writer.uint32(10).string(message.share);
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
  }
};
function createBaseDistributionEntity(): DistributionEntity {
  return {
    address: "",
    share: ""
  };
}
export const DistributionEntity = {
  encode(message: DistributionEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.share !== "") {
      writer.uint32(18).string(message.share);
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
  }
};