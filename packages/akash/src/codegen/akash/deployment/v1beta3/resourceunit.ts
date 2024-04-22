import { Resources, ResourcesAmino, ResourcesSDKType } from "../../base/v1beta3/resources";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnit {
  resource: Resources;
  count: number;
  price: DecCoin;
}
export interface ResourceUnitProtoMsg {
  typeUrl: "/akash.deployment.v1beta3.ResourceUnit";
  value: Uint8Array;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitAmino {
  resource?: ResourcesAmino;
  count?: number;
  price?: DecCoinAmino;
}
export interface ResourceUnitAminoMsg {
  type: "/akash.deployment.v1beta3.ResourceUnit";
  value: ResourceUnitAmino;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitSDKType {
  resource: ResourcesSDKType;
  count: number;
  price: DecCoinSDKType;
}
function createBaseResourceUnit(): ResourceUnit {
  return {
    resource: Resources.fromPartial({}),
    count: 0,
    price: DecCoin.fromPartial({})
  };
}
export const ResourceUnit = {
  typeUrl: "/akash.deployment.v1beta3.ResourceUnit",
  encode(message: ResourceUnit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resource !== undefined) {
      Resources.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ResourceUnit {
    return {
      resource: isSet(object.resource) ? Resources.fromJSON(object.resource) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined
    };
  },
  fromPartial(object: Partial<ResourceUnit>): ResourceUnit {
    const message = createBaseResourceUnit();
    message.resource = object.resource !== undefined && object.resource !== null ? Resources.fromPartial(object.resource) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: ResourceUnitAmino): ResourceUnit {
    const message = createBaseResourceUnit();
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resources.fromAmino(object.resource);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: ResourceUnit): ResourceUnitAmino {
    const obj: any = {};
    obj.resource = message.resource ? Resources.toAmino(message.resource) : undefined;
    obj.count = message.count;
    obj.price = message.price ? DecCoin.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResourceUnitAminoMsg): ResourceUnit {
    return ResourceUnit.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceUnitProtoMsg): ResourceUnit {
    return ResourceUnit.decode(message.value);
  },
  toProto(message: ResourceUnit): Uint8Array {
    return ResourceUnit.encode(message).finish();
  },
  toProtoMsg(message: ResourceUnit): ResourceUnitProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta3.ResourceUnit",
      value: ResourceUnit.encode(message).finish()
    };
  }
};