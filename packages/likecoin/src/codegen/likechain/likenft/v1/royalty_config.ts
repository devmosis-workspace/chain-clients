import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RoyaltyConfigByClass {
  classId: string;
  royaltyConfig?: RoyaltyConfig;
}
export interface RoyaltyConfigByClassSDKType {
  class_id: string;
  royalty_config?: RoyaltyConfigSDKType;
}
export interface RoyaltyConfig {
  rateBasisPoints: Long;
  stakeholders: RoyaltyStakeholder[];
}
export interface RoyaltyConfigSDKType {
  rate_basis_points: Long;
  stakeholders: RoyaltyStakeholderSDKType[];
}
export interface RoyaltyStakeholder {
  account: Uint8Array;
  weight: Long;
}
export interface RoyaltyStakeholderSDKType {
  account: Uint8Array;
  weight: Long;
}
export interface RoyaltyConfigInput {
  rateBasisPoints: Long;
  stakeholders: RoyaltyStakeholderInput[];
}
export interface RoyaltyConfigInputSDKType {
  rate_basis_points: Long;
  stakeholders: RoyaltyStakeholderInputSDKType[];
}
export interface RoyaltyStakeholderInput {
  account: string;
  weight: Long;
}
export interface RoyaltyStakeholderInputSDKType {
  account: string;
  weight: Long;
}
function createBaseRoyaltyConfigByClass(): RoyaltyConfigByClass {
  return {
    classId: "",
    royaltyConfig: undefined
  };
}
export const RoyaltyConfigByClass = {
  encode(message: RoyaltyConfigByClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRoyaltyConfig(): RoyaltyConfig {
  return {
    rateBasisPoints: Long.UZERO,
    stakeholders: []
  };
}
export const RoyaltyConfig = {
  encode(message: RoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rateBasisPoints.isZero()) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }
    for (const v of message.stakeholders) {
      RoyaltyStakeholder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyConfig {
    return {
      rateBasisPoints: isSet(object.rateBasisPoints) ? Long.fromValue(object.rateBasisPoints) : Long.UZERO,
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RoyaltyConfig>): RoyaltyConfig {
    const message = createBaseRoyaltyConfig();
    message.rateBasisPoints = object.rateBasisPoints !== undefined && object.rateBasisPoints !== null ? Long.fromValue(object.rateBasisPoints) : Long.UZERO;
    message.stakeholders = object.stakeholders?.map(e => RoyaltyStakeholder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRoyaltyStakeholder(): RoyaltyStakeholder {
  return {
    account: new Uint8Array(),
    weight: Long.UZERO
  };
}
export const RoyaltyStakeholder = {
  encode(message: RoyaltyStakeholder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }
    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyStakeholder {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      weight: isSet(object.weight) ? Long.fromValue(object.weight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RoyaltyStakeholder>): RoyaltyStakeholder {
    const message = createBaseRoyaltyStakeholder();
    message.account = object.account ?? new Uint8Array();
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }
};
function createBaseRoyaltyConfigInput(): RoyaltyConfigInput {
  return {
    rateBasisPoints: Long.UZERO,
    stakeholders: []
  };
}
export const RoyaltyConfigInput = {
  encode(message: RoyaltyConfigInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rateBasisPoints.isZero()) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }
    for (const v of message.stakeholders) {
      RoyaltyStakeholderInput.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyConfigInput {
    return {
      rateBasisPoints: isSet(object.rateBasisPoints) ? Long.fromValue(object.rateBasisPoints) : Long.UZERO,
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholderInput.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RoyaltyConfigInput>): RoyaltyConfigInput {
    const message = createBaseRoyaltyConfigInput();
    message.rateBasisPoints = object.rateBasisPoints !== undefined && object.rateBasisPoints !== null ? Long.fromValue(object.rateBasisPoints) : Long.UZERO;
    message.stakeholders = object.stakeholders?.map(e => RoyaltyStakeholderInput.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRoyaltyStakeholderInput(): RoyaltyStakeholderInput {
  return {
    account: "",
    weight: Long.UZERO
  };
}
export const RoyaltyStakeholderInput = {
  encode(message: RoyaltyStakeholderInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): RoyaltyStakeholderInput {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      weight: isSet(object.weight) ? Long.fromValue(object.weight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RoyaltyStakeholderInput>): RoyaltyStakeholderInput {
    const message = createBaseRoyaltyStakeholderInput();
    message.account = object.account ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }
};