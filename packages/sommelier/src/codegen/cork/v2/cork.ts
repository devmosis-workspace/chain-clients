import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface Cork {
  /** call body containing the ABI encoded bytes to send to the contract */
  encodedContractCall: Uint8Array;
  /** address of the contract to send the call */
  targetContractAddress: string;
}
export interface CorkProtoMsg {
  typeUrl: "/cork.v2.Cork";
  value: Uint8Array;
}
export interface CorkAmino {
  /** call body containing the ABI encoded bytes to send to the contract */
  encoded_contract_call?: string;
  /** address of the contract to send the call */
  target_contract_address?: string;
}
export interface CorkAminoMsg {
  type: "/cork.v2.Cork";
  value: CorkAmino;
}
export interface CorkSDKType {
  encoded_contract_call: Uint8Array;
  target_contract_address: string;
}
export interface ScheduledCork {
  cork?: Cork;
  blockHeight: bigint;
  validator: string;
  id: Uint8Array;
}
export interface ScheduledCorkProtoMsg {
  typeUrl: "/cork.v2.ScheduledCork";
  value: Uint8Array;
}
export interface ScheduledCorkAmino {
  cork?: CorkAmino;
  block_height?: string;
  validator?: string;
  id?: string;
}
export interface ScheduledCorkAminoMsg {
  type: "/cork.v2.ScheduledCork";
  value: ScheduledCorkAmino;
}
export interface ScheduledCorkSDKType {
  cork?: CorkSDKType;
  block_height: bigint;
  validator: string;
  id: Uint8Array;
}
export interface CorkResult {
  cork?: Cork;
  blockHeight: bigint;
  approved: boolean;
  approvalPercentage: string;
}
export interface CorkResultProtoMsg {
  typeUrl: "/cork.v2.CorkResult";
  value: Uint8Array;
}
export interface CorkResultAmino {
  cork?: CorkAmino;
  block_height?: string;
  approved?: boolean;
  approval_percentage?: string;
}
export interface CorkResultAminoMsg {
  type: "/cork.v2.CorkResult";
  value: CorkResultAmino;
}
export interface CorkResultSDKType {
  cork?: CorkSDKType;
  block_height: bigint;
  approved: boolean;
  approval_percentage: string;
}
export interface CellarIDSet {
  ids: string[];
}
export interface CellarIDSetProtoMsg {
  typeUrl: "/cork.v2.CellarIDSet";
  value: Uint8Array;
}
export interface CellarIDSetAmino {
  ids?: string[];
}
export interface CellarIDSetAminoMsg {
  type: "/cork.v2.CellarIDSet";
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
  typeUrl: "/cork.v2.Cork",
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
    const message = createBaseCork();
    if (object.encoded_contract_call !== undefined && object.encoded_contract_call !== null) {
      message.encodedContractCall = bytesFromBase64(object.encoded_contract_call);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    return message;
  },
  toAmino(message: Cork): CorkAmino {
    const obj: any = {};
    obj.encoded_contract_call = message.encodedContractCall ? base64FromBytes(message.encodedContractCall) : undefined;
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
      typeUrl: "/cork.v2.Cork",
      value: Cork.encode(message).finish()
    };
  }
};
function createBaseScheduledCork(): ScheduledCork {
  return {
    cork: undefined,
    blockHeight: BigInt(0),
    validator: "",
    id: new Uint8Array()
  };
}
export const ScheduledCork = {
  typeUrl: "/cork.v2.ScheduledCork",
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
    if (message.id.length !== 0) {
      writer.uint32(34).bytes(message.id);
    }
    return writer;
  },
  fromJSON(object: any): ScheduledCork {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      validator: isSet(object.validator) ? String(object.validator) : "",
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ScheduledCork>): ScheduledCork {
    const message = createBaseScheduledCork();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validator = object.validator ?? "";
    message.id = object.id ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ScheduledCorkAmino): ScheduledCork {
    const message = createBaseScheduledCork();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = Cork.fromAmino(object.cork);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    return message;
  },
  toAmino(message: ScheduledCork): ScheduledCorkAmino {
    const obj: any = {};
    obj.cork = message.cork ? Cork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.validator = message.validator;
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
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
      typeUrl: "/cork.v2.ScheduledCork",
      value: ScheduledCork.encode(message).finish()
    };
  }
};
function createBaseCorkResult(): CorkResult {
  return {
    cork: undefined,
    blockHeight: BigInt(0),
    approved: false,
    approvalPercentage: ""
  };
}
export const CorkResult = {
  typeUrl: "/cork.v2.CorkResult",
  encode(message: CorkResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.approved === true) {
      writer.uint32(24).bool(message.approved);
    }
    if (message.approvalPercentage !== "") {
      writer.uint32(34).string(message.approvalPercentage);
    }
    return writer;
  },
  fromJSON(object: any): CorkResult {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      approved: isSet(object.approved) ? Boolean(object.approved) : false,
      approvalPercentage: isSet(object.approvalPercentage) ? String(object.approvalPercentage) : ""
    };
  },
  fromPartial(object: Partial<CorkResult>): CorkResult {
    const message = createBaseCorkResult();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.approved = object.approved ?? false;
    message.approvalPercentage = object.approvalPercentage ?? "";
    return message;
  },
  fromAmino(object: CorkResultAmino): CorkResult {
    const message = createBaseCorkResult();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = Cork.fromAmino(object.cork);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    }
    if (object.approval_percentage !== undefined && object.approval_percentage !== null) {
      message.approvalPercentage = object.approval_percentage;
    }
    return message;
  },
  toAmino(message: CorkResult): CorkResultAmino {
    const obj: any = {};
    obj.cork = message.cork ? Cork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.approved = message.approved;
    obj.approval_percentage = message.approvalPercentage;
    return obj;
  },
  fromAminoMsg(object: CorkResultAminoMsg): CorkResult {
    return CorkResult.fromAmino(object.value);
  },
  fromProtoMsg(message: CorkResultProtoMsg): CorkResult {
    return CorkResult.decode(message.value);
  },
  toProto(message: CorkResult): Uint8Array {
    return CorkResult.encode(message).finish();
  },
  toProtoMsg(message: CorkResult): CorkResultProtoMsg {
    return {
      typeUrl: "/cork.v2.CorkResult",
      value: CorkResult.encode(message).finish()
    };
  }
};
function createBaseCellarIDSet(): CellarIDSet {
  return {
    ids: []
  };
}
export const CellarIDSet = {
  typeUrl: "/cork.v2.CellarIDSet",
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
    const message = createBaseCellarIDSet();
    message.ids = object.ids?.map(e => e) || [];
    return message;
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
      typeUrl: "/cork.v2.CellarIDSet",
      value: CellarIDSet.encode(message).finish()
    };
  }
};