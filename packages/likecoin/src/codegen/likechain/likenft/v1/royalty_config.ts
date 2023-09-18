import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RoyaltyConfigByClass {
  classId: string;
  royaltyConfig: RoyaltyConfig;
}
export interface RoyaltyConfigByClassProtoMsg {
  typeUrl: "/likechain.likenft.v1.RoyaltyConfigByClass";
  value: Uint8Array;
}
export interface RoyaltyConfigByClassAmino {
  class_id: string;
  royalty_config?: RoyaltyConfigAmino;
}
export interface RoyaltyConfigByClassAminoMsg {
  type: "/likechain.likenft.v1.RoyaltyConfigByClass";
  value: RoyaltyConfigByClassAmino;
}
export interface RoyaltyConfigByClassSDKType {
  class_id: string;
  royalty_config: RoyaltyConfigSDKType;
}
export interface RoyaltyConfig {
  rateBasisPoints: bigint;
  stakeholders: RoyaltyStakeholder[];
}
export interface RoyaltyConfigProtoMsg {
  typeUrl: "/likechain.likenft.v1.RoyaltyConfig";
  value: Uint8Array;
}
export interface RoyaltyConfigAmino {
  rate_basis_points: string;
  stakeholders: RoyaltyStakeholderAmino[];
}
export interface RoyaltyConfigAminoMsg {
  type: "/likechain.likenft.v1.RoyaltyConfig";
  value: RoyaltyConfigAmino;
}
export interface RoyaltyConfigSDKType {
  rate_basis_points: bigint;
  stakeholders: RoyaltyStakeholderSDKType[];
}
export interface RoyaltyStakeholder {
  account: Uint8Array;
  weight: bigint;
}
export interface RoyaltyStakeholderProtoMsg {
  typeUrl: "/likechain.likenft.v1.RoyaltyStakeholder";
  value: Uint8Array;
}
export interface RoyaltyStakeholderAmino {
  account: Uint8Array;
  weight: string;
}
export interface RoyaltyStakeholderAminoMsg {
  type: "/likechain.likenft.v1.RoyaltyStakeholder";
  value: RoyaltyStakeholderAmino;
}
export interface RoyaltyStakeholderSDKType {
  account: Uint8Array;
  weight: bigint;
}
export interface RoyaltyConfigInput {
  rateBasisPoints: bigint;
  stakeholders: RoyaltyStakeholderInput[];
}
export interface RoyaltyConfigInputProtoMsg {
  typeUrl: "/likechain.likenft.v1.RoyaltyConfigInput";
  value: Uint8Array;
}
export interface RoyaltyConfigInputAmino {
  rate_basis_points: string;
  stakeholders: RoyaltyStakeholderInputAmino[];
}
export interface RoyaltyConfigInputAminoMsg {
  type: "/likechain.likenft.v1.RoyaltyConfigInput";
  value: RoyaltyConfigInputAmino;
}
export interface RoyaltyConfigInputSDKType {
  rate_basis_points: bigint;
  stakeholders: RoyaltyStakeholderInputSDKType[];
}
export interface RoyaltyStakeholderInput {
  account: string;
  weight: bigint;
}
export interface RoyaltyStakeholderInputProtoMsg {
  typeUrl: "/likechain.likenft.v1.RoyaltyStakeholderInput";
  value: Uint8Array;
}
export interface RoyaltyStakeholderInputAmino {
  account: string;
  weight: string;
}
export interface RoyaltyStakeholderInputAminoMsg {
  type: "/likechain.likenft.v1.RoyaltyStakeholderInput";
  value: RoyaltyStakeholderInputAmino;
}
export interface RoyaltyStakeholderInputSDKType {
  account: string;
  weight: bigint;
}
function createBaseRoyaltyConfigByClass(): RoyaltyConfigByClass {
  return {
    classId: "",
    royaltyConfig: RoyaltyConfig.fromPartial({})
  };
}
export const RoyaltyConfigByClass = {
  typeUrl: "/likechain.likenft.v1.RoyaltyConfigByClass",
  encode(message: RoyaltyConfigByClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyConfigByClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },
  fromPartial(object: Partial<RoyaltyConfigByClass>): RoyaltyConfigByClass {
    const message = createBaseRoyaltyConfigByClass();
    message.classId = object.classId ?? "";
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  },
  fromAmino(object: RoyaltyConfigByClassAmino): RoyaltyConfigByClass {
    return {
      classId: object.class_id,
      royaltyConfig: object?.royalty_config ? RoyaltyConfig.fromAmino(object.royalty_config) : undefined
    };
  },
  toAmino(message: RoyaltyConfigByClass): RoyaltyConfigByClassAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.royalty_config = message.royaltyConfig ? RoyaltyConfig.toAmino(message.royaltyConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: RoyaltyConfigByClassAminoMsg): RoyaltyConfigByClass {
    return RoyaltyConfigByClass.fromAmino(object.value);
  },
  fromProtoMsg(message: RoyaltyConfigByClassProtoMsg): RoyaltyConfigByClass {
    return RoyaltyConfigByClass.decode(message.value);
  },
  toProto(message: RoyaltyConfigByClass): Uint8Array {
    return RoyaltyConfigByClass.encode(message).finish();
  },
  toProtoMsg(message: RoyaltyConfigByClass): RoyaltyConfigByClassProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.RoyaltyConfigByClass",
      value: RoyaltyConfigByClass.encode(message).finish()
    };
  }
};
function createBaseRoyaltyConfig(): RoyaltyConfig {
  return {
    rateBasisPoints: BigInt(0),
    stakeholders: []
  };
}
export const RoyaltyConfig = {
  typeUrl: "/likechain.likenft.v1.RoyaltyConfig",
  encode(message: RoyaltyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rateBasisPoints !== BigInt(0)) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }
    for (const v of message.stakeholders) {
      RoyaltyStakeholder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyConfig {
    return {
      rateBasisPoints: isSet(object.rateBasisPoints) ? BigInt(object.rateBasisPoints.toString()) : BigInt(0),
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RoyaltyConfig>): RoyaltyConfig {
    const message = createBaseRoyaltyConfig();
    message.rateBasisPoints = object.rateBasisPoints !== undefined && object.rateBasisPoints !== null ? BigInt(object.rateBasisPoints.toString()) : BigInt(0);
    message.stakeholders = object.stakeholders?.map(e => RoyaltyStakeholder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RoyaltyConfigAmino): RoyaltyConfig {
    return {
      rateBasisPoints: BigInt(object.rate_basis_points),
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholder.fromAmino(e)) : []
    };
  },
  toAmino(message: RoyaltyConfig): RoyaltyConfigAmino {
    const obj: any = {};
    obj.rate_basis_points = message.rateBasisPoints ? message.rateBasisPoints.toString() : undefined;
    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map(e => e ? RoyaltyStakeholder.toAmino(e) : undefined);
    } else {
      obj.stakeholders = [];
    }
    return obj;
  },
  fromAminoMsg(object: RoyaltyConfigAminoMsg): RoyaltyConfig {
    return RoyaltyConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: RoyaltyConfigProtoMsg): RoyaltyConfig {
    return RoyaltyConfig.decode(message.value);
  },
  toProto(message: RoyaltyConfig): Uint8Array {
    return RoyaltyConfig.encode(message).finish();
  },
  toProtoMsg(message: RoyaltyConfig): RoyaltyConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.RoyaltyConfig",
      value: RoyaltyConfig.encode(message).finish()
    };
  }
};
function createBaseRoyaltyStakeholder(): RoyaltyStakeholder {
  return {
    account: new Uint8Array(),
    weight: BigInt(0)
  };
}
export const RoyaltyStakeholder = {
  typeUrl: "/likechain.likenft.v1.RoyaltyStakeholder",
  encode(message: RoyaltyStakeholder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyStakeholder {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RoyaltyStakeholder>): RoyaltyStakeholder {
    const message = createBaseRoyaltyStakeholder();
    message.account = object.account ?? new Uint8Array();
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoyaltyStakeholderAmino): RoyaltyStakeholder {
    return {
      account: object.account,
      weight: BigInt(object.weight)
    };
  },
  toAmino(message: RoyaltyStakeholder): RoyaltyStakeholderAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.weight = message.weight ? message.weight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoyaltyStakeholderAminoMsg): RoyaltyStakeholder {
    return RoyaltyStakeholder.fromAmino(object.value);
  },
  fromProtoMsg(message: RoyaltyStakeholderProtoMsg): RoyaltyStakeholder {
    return RoyaltyStakeholder.decode(message.value);
  },
  toProto(message: RoyaltyStakeholder): Uint8Array {
    return RoyaltyStakeholder.encode(message).finish();
  },
  toProtoMsg(message: RoyaltyStakeholder): RoyaltyStakeholderProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.RoyaltyStakeholder",
      value: RoyaltyStakeholder.encode(message).finish()
    };
  }
};
function createBaseRoyaltyConfigInput(): RoyaltyConfigInput {
  return {
    rateBasisPoints: BigInt(0),
    stakeholders: []
  };
}
export const RoyaltyConfigInput = {
  typeUrl: "/likechain.likenft.v1.RoyaltyConfigInput",
  encode(message: RoyaltyConfigInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rateBasisPoints !== BigInt(0)) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }
    for (const v of message.stakeholders) {
      RoyaltyStakeholderInput.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyConfigInput {
    return {
      rateBasisPoints: isSet(object.rateBasisPoints) ? BigInt(object.rateBasisPoints.toString()) : BigInt(0),
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholderInput.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RoyaltyConfigInput>): RoyaltyConfigInput {
    const message = createBaseRoyaltyConfigInput();
    message.rateBasisPoints = object.rateBasisPoints !== undefined && object.rateBasisPoints !== null ? BigInt(object.rateBasisPoints.toString()) : BigInt(0);
    message.stakeholders = object.stakeholders?.map(e => RoyaltyStakeholderInput.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RoyaltyConfigInputAmino): RoyaltyConfigInput {
    return {
      rateBasisPoints: BigInt(object.rate_basis_points),
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholderInput.fromAmino(e)) : []
    };
  },
  toAmino(message: RoyaltyConfigInput): RoyaltyConfigInputAmino {
    const obj: any = {};
    obj.rate_basis_points = message.rateBasisPoints ? message.rateBasisPoints.toString() : undefined;
    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map(e => e ? RoyaltyStakeholderInput.toAmino(e) : undefined);
    } else {
      obj.stakeholders = [];
    }
    return obj;
  },
  fromAminoMsg(object: RoyaltyConfigInputAminoMsg): RoyaltyConfigInput {
    return RoyaltyConfigInput.fromAmino(object.value);
  },
  fromProtoMsg(message: RoyaltyConfigInputProtoMsg): RoyaltyConfigInput {
    return RoyaltyConfigInput.decode(message.value);
  },
  toProto(message: RoyaltyConfigInput): Uint8Array {
    return RoyaltyConfigInput.encode(message).finish();
  },
  toProtoMsg(message: RoyaltyConfigInput): RoyaltyConfigInputProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.RoyaltyConfigInput",
      value: RoyaltyConfigInput.encode(message).finish()
    };
  }
};
function createBaseRoyaltyStakeholderInput(): RoyaltyStakeholderInput {
  return {
    account: "",
    weight: BigInt(0)
  };
}
export const RoyaltyStakeholderInput = {
  typeUrl: "/likechain.likenft.v1.RoyaltyStakeholderInput",
  encode(message: RoyaltyStakeholderInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyStakeholderInput {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RoyaltyStakeholderInput>): RoyaltyStakeholderInput {
    const message = createBaseRoyaltyStakeholderInput();
    message.account = object.account ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoyaltyStakeholderInputAmino): RoyaltyStakeholderInput {
    return {
      account: object.account,
      weight: BigInt(object.weight)
    };
  },
  toAmino(message: RoyaltyStakeholderInput): RoyaltyStakeholderInputAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.weight = message.weight ? message.weight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoyaltyStakeholderInputAminoMsg): RoyaltyStakeholderInput {
    return RoyaltyStakeholderInput.fromAmino(object.value);
  },
  fromProtoMsg(message: RoyaltyStakeholderInputProtoMsg): RoyaltyStakeholderInput {
    return RoyaltyStakeholderInput.decode(message.value);
  },
  toProto(message: RoyaltyStakeholderInput): Uint8Array {
    return RoyaltyStakeholderInput.encode(message).finish();
  },
  toProtoMsg(message: RoyaltyStakeholderInput): RoyaltyStakeholderInputProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.RoyaltyStakeholderInput",
      value: RoyaltyStakeholderInput.encode(message).finish()
    };
  }
};