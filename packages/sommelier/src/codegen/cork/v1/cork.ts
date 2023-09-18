import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
export interface Cork {
  /** call body containing the ABI encoded bytes to send to the contract */
  encodedContractCall: Uint8Array;
  /** address of the contract to send the call */
  targetContractAddress: string;
}
export interface CorkProtoMsg {
  typeUrl: "/cork.v1.Cork";
  value: Uint8Array;
}
export interface CorkAmino {
  /** call body containing the ABI encoded bytes to send to the contract */
  encoded_contract_call: Uint8Array;
  /** address of the contract to send the call */
  target_contract_address: string;
}
export interface CorkAminoMsg {
  type: "/cork.v1.Cork";
  value: CorkAmino;
}
export interface CorkSDKType {
  encoded_contract_call: Uint8Array;
  target_contract_address: string;
}
export interface ValidatorCork {
  cork: Cork;
  validator: string;
}
export interface ValidatorCorkProtoMsg {
  typeUrl: "/cork.v1.ValidatorCork";
  value: Uint8Array;
}
export interface ValidatorCorkAmino {
  cork?: CorkAmino;
  validator: string;
}
export interface ValidatorCorkAminoMsg {
  type: "/cork.v1.ValidatorCork";
  value: ValidatorCorkAmino;
}
export interface ValidatorCorkSDKType {
  cork: CorkSDKType;
  validator: string;
}
export interface ScheduledCork {
  cork: Cork;
  blockHeight: bigint;
  validator: string;
}
export interface ScheduledCorkProtoMsg {
  typeUrl: "/cork.v1.ScheduledCork";
  value: Uint8Array;
}
export interface ScheduledCorkAmino {
  cork?: CorkAmino;
  block_height: string;
  validator: string;
}
export interface ScheduledCorkAminoMsg {
  type: "/cork.v1.ScheduledCork";
  value: ScheduledCorkAmino;
}
export interface ScheduledCorkSDKType {
  cork: CorkSDKType;
  block_height: bigint;
  validator: string;
}
export interface CellarIDSet {
  ids: string[];
}
export interface CellarIDSetProtoMsg {
  typeUrl: "/cork.v1.CellarIDSet";
  value: Uint8Array;
}
export interface CellarIDSetAmino {
  ids: string[];
}
export interface CellarIDSetAminoMsg {
  type: "/cork.v1.CellarIDSet";
  value: CellarIDSetAmino;
}
export interface CellarIDSetSDKType {
  ids: string[];
}
function createBaseCork(): Cork {
  return {
    encodedContractCall: new Uint8Array(),
    targetContractAddress: ""
  };
}
export const Cork = {
  typeUrl: "/cork.v1.Cork",
  encode(message: Cork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.encodedContractCall.length !== 0) {
      writer.uint32(10).bytes(message.encodedContractCall);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(18).string(message.targetContractAddress);
    }
    return writer;
  },
  fromJSON(object: any): Cork {
    return {
      encodedContractCall: isSet(object.encodedContractCall) ? bytesFromBase64(object.encodedContractCall) : new Uint8Array(),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : ""
    };
  },
  fromPartial(object: Partial<Cork>): Cork {
    const message = createBaseCork();
    message.encodedContractCall = object.encodedContractCall ?? new Uint8Array();
    message.targetContractAddress = object.targetContractAddress ?? "";
    return message;
  },
  fromAmino(object: CorkAmino): Cork {
    return {
      encodedContractCall: object.encoded_contract_call,
      targetContractAddress: object.target_contract_address
    };
  },
  toAmino(message: Cork): CorkAmino {
    const obj: any = {};
    obj.encoded_contract_call = message.encodedContractCall;
    obj.target_contract_address = message.targetContractAddress;
    return obj;
  },
  fromAminoMsg(object: CorkAminoMsg): Cork {
    return Cork.fromAmino(object.value);
  },
  fromProtoMsg(message: CorkProtoMsg): Cork {
    return Cork.decode(message.value);
  },
  toProto(message: Cork): Uint8Array {
    return Cork.encode(message).finish();
  },
  toProtoMsg(message: Cork): CorkProtoMsg {
    return {
      typeUrl: "/cork.v1.Cork",
      value: Cork.encode(message).finish()
    };
  }
};
function createBaseValidatorCork(): ValidatorCork {
  return {
    cork: Cork.fromPartial({}),
    validator: ""
  };
}
export const ValidatorCork = {
  typeUrl: "/cork.v1.ValidatorCork",
  encode(message: ValidatorCork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorCork {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<ValidatorCork>): ValidatorCork {
    const message = createBaseValidatorCork();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: ValidatorCorkAmino): ValidatorCork {
    return {
      cork: object?.cork ? Cork.fromAmino(object.cork) : undefined,
      validator: object.validator
    };
  },
  toAmino(message: ValidatorCork): ValidatorCorkAmino {
    const obj: any = {};
    obj.cork = message.cork ? Cork.toAmino(message.cork) : undefined;
    obj.validator = message.validator;
    return obj;
  },
  fromAminoMsg(object: ValidatorCorkAminoMsg): ValidatorCork {
    return ValidatorCork.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorCorkProtoMsg): ValidatorCork {
    return ValidatorCork.decode(message.value);
  },
  toProto(message: ValidatorCork): Uint8Array {
    return ValidatorCork.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCork): ValidatorCorkProtoMsg {
    return {
      typeUrl: "/cork.v1.ValidatorCork",
      value: ValidatorCork.encode(message).finish()
    };
  }
};
function createBaseScheduledCork(): ScheduledCork {
  return {
    cork: Cork.fromPartial({}),
    blockHeight: BigInt(0),
    validator: ""
  };
}
export const ScheduledCork = {
  typeUrl: "/cork.v1.ScheduledCork",
  encode(message: ScheduledCork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): ScheduledCork {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<ScheduledCork>): ScheduledCork {
    const message = createBaseScheduledCork();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: ScheduledCorkAmino): ScheduledCork {
    return {
      cork: object?.cork ? Cork.fromAmino(object.cork) : undefined,
      blockHeight: BigInt(object.block_height),
      validator: object.validator
    };
  },
  toAmino(message: ScheduledCork): ScheduledCorkAmino {
    const obj: any = {};
    obj.cork = message.cork ? Cork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.validator = message.validator;
    return obj;
  },
  fromAminoMsg(object: ScheduledCorkAminoMsg): ScheduledCork {
    return ScheduledCork.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduledCorkProtoMsg): ScheduledCork {
    return ScheduledCork.decode(message.value);
  },
  toProto(message: ScheduledCork): Uint8Array {
    return ScheduledCork.encode(message).finish();
  },
  toProtoMsg(message: ScheduledCork): ScheduledCorkProtoMsg {
    return {
      typeUrl: "/cork.v1.ScheduledCork",
      value: ScheduledCork.encode(message).finish()
    };
  }
};
function createBaseCellarIDSet(): CellarIDSet {
  return {
    ids: []
  };
}
export const CellarIDSet = {
  typeUrl: "/cork.v1.CellarIDSet",
  encode(message: CellarIDSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CellarIDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CellarIDSet>): CellarIDSet {
    const message = createBaseCellarIDSet();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CellarIDSetAmino): CellarIDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => e) : []
    };
  },
  toAmino(message: CellarIDSet): CellarIDSetAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CellarIDSetAminoMsg): CellarIDSet {
    return CellarIDSet.fromAmino(object.value);
  },
  fromProtoMsg(message: CellarIDSetProtoMsg): CellarIDSet {
    return CellarIDSet.decode(message.value);
  },
  toProto(message: CellarIDSet): Uint8Array {
    return CellarIDSet.encode(message).finish();
  },
  toProtoMsg(message: CellarIDSet): CellarIDSetProtoMsg {
    return {
      typeUrl: "/cork.v1.CellarIDSet",
      value: CellarIDSet.encode(message).finish()
    };
  }
};