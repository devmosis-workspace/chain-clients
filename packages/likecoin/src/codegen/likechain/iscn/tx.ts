import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
export interface IscnRecord {
  /** Using camelCases to make the record JSON in tx more like general JSON documents */
  recordNotes: string;
  contentFingerprints: string[];
  /** Here, `IscnInput` is JSON encoded bytes */
  stakeholders: Uint8Array[];
  contentMetadata: Uint8Array;
}
export interface IscnRecordProtoMsg {
  typeUrl: "/likechain.iscn.IscnRecord";
  value: Uint8Array;
}
export interface IscnRecordAmino {
  /** Using camelCases to make the record JSON in tx more like general JSON documents */
  recordNotes: string;
  contentFingerprints: string[];
  /** Here, `IscnInput` is JSON encoded bytes */
  stakeholders: Uint8Array[];
  contentMetadata: Uint8Array;
}
export interface IscnRecordAminoMsg {
  type: "/likechain.iscn.IscnRecord";
  value: IscnRecordAmino;
}
export interface IscnRecordSDKType {
  recordNotes: string;
  contentFingerprints: string[];
  stakeholders: Uint8Array[];
  contentMetadata: Uint8Array;
}
export interface MsgCreateIscnRecord {
  from: string;
  record: IscnRecord;
  nonce: bigint;
}
export interface MsgCreateIscnRecordProtoMsg {
  typeUrl: "/likechain.iscn.MsgCreateIscnRecord";
  value: Uint8Array;
}
export interface MsgCreateIscnRecordAmino {
  from: string;
  record?: IscnRecordAmino;
  nonce: string;
}
export interface MsgCreateIscnRecordAminoMsg {
  type: "/likechain.iscn.MsgCreateIscnRecord";
  value: MsgCreateIscnRecordAmino;
}
export interface MsgCreateIscnRecordSDKType {
  from: string;
  record: IscnRecordSDKType;
  nonce: bigint;
}
export interface MsgCreateIscnRecordResponse {
  iscnId: string;
  recordIpld: string;
}
export interface MsgCreateIscnRecordResponseProtoMsg {
  typeUrl: "/likechain.iscn.MsgCreateIscnRecordResponse";
  value: Uint8Array;
}
export interface MsgCreateIscnRecordResponseAmino {
  iscn_id: string;
  record_ipld: string;
}
export interface MsgCreateIscnRecordResponseAminoMsg {
  type: "/likechain.iscn.MsgCreateIscnRecordResponse";
  value: MsgCreateIscnRecordResponseAmino;
}
export interface MsgCreateIscnRecordResponseSDKType {
  iscn_id: string;
  record_ipld: string;
}
export interface MsgUpdateIscnRecord {
  from: string;
  iscnId: string;
  record: IscnRecord;
}
export interface MsgUpdateIscnRecordProtoMsg {
  typeUrl: "/likechain.iscn.MsgUpdateIscnRecord";
  value: Uint8Array;
}
export interface MsgUpdateIscnRecordAmino {
  from: string;
  iscn_id: string;
  record?: IscnRecordAmino;
}
export interface MsgUpdateIscnRecordAminoMsg {
  type: "/likechain.iscn.MsgUpdateIscnRecord";
  value: MsgUpdateIscnRecordAmino;
}
export interface MsgUpdateIscnRecordSDKType {
  from: string;
  iscn_id: string;
  record: IscnRecordSDKType;
}
export interface MsgUpdateIscnRecordResponse {
  iscnId: string;
  recordIpld: string;
}
export interface MsgUpdateIscnRecordResponseProtoMsg {
  typeUrl: "/likechain.iscn.MsgUpdateIscnRecordResponse";
  value: Uint8Array;
}
export interface MsgUpdateIscnRecordResponseAmino {
  iscn_id: string;
  record_ipld: string;
}
export interface MsgUpdateIscnRecordResponseAminoMsg {
  type: "/likechain.iscn.MsgUpdateIscnRecordResponse";
  value: MsgUpdateIscnRecordResponseAmino;
}
export interface MsgUpdateIscnRecordResponseSDKType {
  iscn_id: string;
  record_ipld: string;
}
export interface MsgChangeIscnRecordOwnership {
  from: string;
  iscnId: string;
  newOwner: string;
}
export interface MsgChangeIscnRecordOwnershipProtoMsg {
  typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership";
  value: Uint8Array;
}
export interface MsgChangeIscnRecordOwnershipAmino {
  from: string;
  iscn_id: string;
  new_owner: string;
}
export interface MsgChangeIscnRecordOwnershipAminoMsg {
  type: "/likechain.iscn.MsgChangeIscnRecordOwnership";
  value: MsgChangeIscnRecordOwnershipAmino;
}
export interface MsgChangeIscnRecordOwnershipSDKType {
  from: string;
  iscn_id: string;
  new_owner: string;
}
export interface MsgChangeIscnRecordOwnershipResponse {}
export interface MsgChangeIscnRecordOwnershipResponseProtoMsg {
  typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnershipResponse";
  value: Uint8Array;
}
export interface MsgChangeIscnRecordOwnershipResponseAmino {}
export interface MsgChangeIscnRecordOwnershipResponseAminoMsg {
  type: "/likechain.iscn.MsgChangeIscnRecordOwnershipResponse";
  value: MsgChangeIscnRecordOwnershipResponseAmino;
}
export interface MsgChangeIscnRecordOwnershipResponseSDKType {}
function createBaseIscnRecord(): IscnRecord {
  return {
    recordNotes: "",
    contentFingerprints: [],
    stakeholders: [],
    contentMetadata: new Uint8Array()
  };
}
export const IscnRecord = {
  typeUrl: "/likechain.iscn.IscnRecord",
  encode(message: IscnRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recordNotes !== "") {
      writer.uint32(10).string(message.recordNotes);
    }
    for (const v of message.contentFingerprints) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.stakeholders) {
      writer.uint32(26).bytes(v!);
    }
    if (message.contentMetadata.length !== 0) {
      writer.uint32(34).bytes(message.contentMetadata);
    }
    return writer;
  },
  fromJSON(object: any): IscnRecord {
    return {
      recordNotes: isSet(object.recordNotes) ? String(object.recordNotes) : "",
      contentFingerprints: Array.isArray(object?.contentFingerprints) ? object.contentFingerprints.map((e: any) => String(e)) : [],
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => bytesFromBase64(e)) : [],
      contentMetadata: isSet(object.contentMetadata) ? bytesFromBase64(object.contentMetadata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<IscnRecord>): IscnRecord {
    const message = createBaseIscnRecord();
    message.recordNotes = object.recordNotes ?? "";
    message.contentFingerprints = object.contentFingerprints?.map(e => e) || [];
    message.stakeholders = object.stakeholders?.map(e => e) || [];
    message.contentMetadata = object.contentMetadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: IscnRecordAmino): IscnRecord {
    return {
      recordNotes: object.recordNotes,
      contentFingerprints: Array.isArray(object?.contentFingerprints) ? object.contentFingerprints.map((e: any) => e) : [],
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => e) : [],
      contentMetadata: object.contentMetadata
    };
  },
  toAmino(message: IscnRecord): IscnRecordAmino {
    const obj: any = {};
    obj.recordNotes = message.recordNotes;
    if (message.contentFingerprints) {
      obj.contentFingerprints = message.contentFingerprints.map(e => e);
    } else {
      obj.contentFingerprints = [];
    }
    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map(e => e);
    } else {
      obj.stakeholders = [];
    }
    obj.contentMetadata = message.contentMetadata;
    return obj;
  },
  fromAminoMsg(object: IscnRecordAminoMsg): IscnRecord {
    return IscnRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: IscnRecordProtoMsg): IscnRecord {
    return IscnRecord.decode(message.value);
  },
  toProto(message: IscnRecord): Uint8Array {
    return IscnRecord.encode(message).finish();
  },
  toProtoMsg(message: IscnRecord): IscnRecordProtoMsg {
    return {
      typeUrl: "/likechain.iscn.IscnRecord",
      value: IscnRecord.encode(message).finish()
    };
  }
};
function createBaseMsgCreateIscnRecord(): MsgCreateIscnRecord {
  return {
    from: "",
    record: IscnRecord.fromPartial({}),
    nonce: BigInt(0)
  };
}
export const MsgCreateIscnRecord = {
  typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
  encode(message: MsgCreateIscnRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.record !== undefined) {
      IscnRecord.encode(message.record, writer.uint32(18).fork()).ldelim();
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateIscnRecord {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      record: isSet(object.record) ? IscnRecord.fromJSON(object.record) : undefined,
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateIscnRecord>): MsgCreateIscnRecord {
    const message = createBaseMsgCreateIscnRecord();
    message.from = object.from ?? "";
    message.record = object.record !== undefined && object.record !== null ? IscnRecord.fromPartial(object.record) : undefined;
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateIscnRecordAmino): MsgCreateIscnRecord {
    return {
      from: object.from,
      record: object?.record ? IscnRecord.fromAmino(object.record) : undefined,
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: MsgCreateIscnRecord): MsgCreateIscnRecordAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.record = message.record ? IscnRecord.toAmino(message.record) : undefined;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateIscnRecordAminoMsg): MsgCreateIscnRecord {
    return MsgCreateIscnRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateIscnRecordProtoMsg): MsgCreateIscnRecord {
    return MsgCreateIscnRecord.decode(message.value);
  },
  toProto(message: MsgCreateIscnRecord): Uint8Array {
    return MsgCreateIscnRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIscnRecord): MsgCreateIscnRecordProtoMsg {
    return {
      typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
      value: MsgCreateIscnRecord.encode(message).finish()
    };
  }
};
function createBaseMsgCreateIscnRecordResponse(): MsgCreateIscnRecordResponse {
  return {
    iscnId: "",
    recordIpld: ""
  };
}
export const MsgCreateIscnRecordResponse = {
  typeUrl: "/likechain.iscn.MsgCreateIscnRecordResponse",
  encode(message: MsgCreateIscnRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }
    if (message.recordIpld !== "") {
      writer.uint32(18).string(message.recordIpld);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateIscnRecordResponse {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      recordIpld: isSet(object.recordIpld) ? String(object.recordIpld) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateIscnRecordResponse>): MsgCreateIscnRecordResponse {
    const message = createBaseMsgCreateIscnRecordResponse();
    message.iscnId = object.iscnId ?? "";
    message.recordIpld = object.recordIpld ?? "";
    return message;
  },
  fromAmino(object: MsgCreateIscnRecordResponseAmino): MsgCreateIscnRecordResponse {
    return {
      iscnId: object.iscn_id,
      recordIpld: object.record_ipld
    };
  },
  toAmino(message: MsgCreateIscnRecordResponse): MsgCreateIscnRecordResponseAmino {
    const obj: any = {};
    obj.iscn_id = message.iscnId;
    obj.record_ipld = message.recordIpld;
    return obj;
  },
  fromAminoMsg(object: MsgCreateIscnRecordResponseAminoMsg): MsgCreateIscnRecordResponse {
    return MsgCreateIscnRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateIscnRecordResponseProtoMsg): MsgCreateIscnRecordResponse {
    return MsgCreateIscnRecordResponse.decode(message.value);
  },
  toProto(message: MsgCreateIscnRecordResponse): Uint8Array {
    return MsgCreateIscnRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIscnRecordResponse): MsgCreateIscnRecordResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.MsgCreateIscnRecordResponse",
      value: MsgCreateIscnRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIscnRecord(): MsgUpdateIscnRecord {
  return {
    from: "",
    iscnId: "",
    record: IscnRecord.fromPartial({})
  };
}
export const MsgUpdateIscnRecord = {
  typeUrl: "/likechain.iscn.MsgUpdateIscnRecord",
  encode(message: MsgUpdateIscnRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.iscnId !== "") {
      writer.uint32(18).string(message.iscnId);
    }
    if (message.record !== undefined) {
      IscnRecord.encode(message.record, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateIscnRecord {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      record: isSet(object.record) ? IscnRecord.fromJSON(object.record) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateIscnRecord>): MsgUpdateIscnRecord {
    const message = createBaseMsgUpdateIscnRecord();
    message.from = object.from ?? "";
    message.iscnId = object.iscnId ?? "";
    message.record = object.record !== undefined && object.record !== null ? IscnRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateIscnRecordAmino): MsgUpdateIscnRecord {
    return {
      from: object.from,
      iscnId: object.iscn_id,
      record: object?.record ? IscnRecord.fromAmino(object.record) : undefined
    };
  },
  toAmino(message: MsgUpdateIscnRecord): MsgUpdateIscnRecordAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.iscn_id = message.iscnId;
    obj.record = message.record ? IscnRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIscnRecordAminoMsg): MsgUpdateIscnRecord {
    return MsgUpdateIscnRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIscnRecordProtoMsg): MsgUpdateIscnRecord {
    return MsgUpdateIscnRecord.decode(message.value);
  },
  toProto(message: MsgUpdateIscnRecord): Uint8Array {
    return MsgUpdateIscnRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIscnRecord): MsgUpdateIscnRecordProtoMsg {
    return {
      typeUrl: "/likechain.iscn.MsgUpdateIscnRecord",
      value: MsgUpdateIscnRecord.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIscnRecordResponse(): MsgUpdateIscnRecordResponse {
  return {
    iscnId: "",
    recordIpld: ""
  };
}
export const MsgUpdateIscnRecordResponse = {
  typeUrl: "/likechain.iscn.MsgUpdateIscnRecordResponse",
  encode(message: MsgUpdateIscnRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }
    if (message.recordIpld !== "") {
      writer.uint32(18).string(message.recordIpld);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateIscnRecordResponse {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      recordIpld: isSet(object.recordIpld) ? String(object.recordIpld) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateIscnRecordResponse>): MsgUpdateIscnRecordResponse {
    const message = createBaseMsgUpdateIscnRecordResponse();
    message.iscnId = object.iscnId ?? "";
    message.recordIpld = object.recordIpld ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateIscnRecordResponseAmino): MsgUpdateIscnRecordResponse {
    return {
      iscnId: object.iscn_id,
      recordIpld: object.record_ipld
    };
  },
  toAmino(message: MsgUpdateIscnRecordResponse): MsgUpdateIscnRecordResponseAmino {
    const obj: any = {};
    obj.iscn_id = message.iscnId;
    obj.record_ipld = message.recordIpld;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIscnRecordResponseAminoMsg): MsgUpdateIscnRecordResponse {
    return MsgUpdateIscnRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIscnRecordResponseProtoMsg): MsgUpdateIscnRecordResponse {
    return MsgUpdateIscnRecordResponse.decode(message.value);
  },
  toProto(message: MsgUpdateIscnRecordResponse): Uint8Array {
    return MsgUpdateIscnRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIscnRecordResponse): MsgUpdateIscnRecordResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.MsgUpdateIscnRecordResponse",
      value: MsgUpdateIscnRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeIscnRecordOwnership(): MsgChangeIscnRecordOwnership {
  return {
    from: "",
    iscnId: "",
    newOwner: ""
  };
}
export const MsgChangeIscnRecordOwnership = {
  typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership",
  encode(message: MsgChangeIscnRecordOwnership, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.iscnId !== "") {
      writer.uint32(18).string(message.iscnId);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeIscnRecordOwnership {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : ""
    };
  },
  fromPartial(object: Partial<MsgChangeIscnRecordOwnership>): MsgChangeIscnRecordOwnership {
    const message = createBaseMsgChangeIscnRecordOwnership();
    message.from = object.from ?? "";
    message.iscnId = object.iscnId ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: MsgChangeIscnRecordOwnershipAmino): MsgChangeIscnRecordOwnership {
    return {
      from: object.from,
      iscnId: object.iscn_id,
      newOwner: object.new_owner
    };
  },
  toAmino(message: MsgChangeIscnRecordOwnership): MsgChangeIscnRecordOwnershipAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.iscn_id = message.iscnId;
    obj.new_owner = message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeIscnRecordOwnershipAminoMsg): MsgChangeIscnRecordOwnership {
    return MsgChangeIscnRecordOwnership.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeIscnRecordOwnershipProtoMsg): MsgChangeIscnRecordOwnership {
    return MsgChangeIscnRecordOwnership.decode(message.value);
  },
  toProto(message: MsgChangeIscnRecordOwnership): Uint8Array {
    return MsgChangeIscnRecordOwnership.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeIscnRecordOwnership): MsgChangeIscnRecordOwnershipProtoMsg {
    return {
      typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership",
      value: MsgChangeIscnRecordOwnership.encode(message).finish()
    };
  }
};
function createBaseMsgChangeIscnRecordOwnershipResponse(): MsgChangeIscnRecordOwnershipResponse {
  return {};
}
export const MsgChangeIscnRecordOwnershipResponse = {
  typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnershipResponse",
  encode(_: MsgChangeIscnRecordOwnershipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeIscnRecordOwnershipResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeIscnRecordOwnershipResponse>): MsgChangeIscnRecordOwnershipResponse {
    const message = createBaseMsgChangeIscnRecordOwnershipResponse();
    return message;
  },
  fromAmino(_: MsgChangeIscnRecordOwnershipResponseAmino): MsgChangeIscnRecordOwnershipResponse {
    return {};
  },
  toAmino(_: MsgChangeIscnRecordOwnershipResponse): MsgChangeIscnRecordOwnershipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeIscnRecordOwnershipResponseAminoMsg): MsgChangeIscnRecordOwnershipResponse {
    return MsgChangeIscnRecordOwnershipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeIscnRecordOwnershipResponseProtoMsg): MsgChangeIscnRecordOwnershipResponse {
    return MsgChangeIscnRecordOwnershipResponse.decode(message.value);
  },
  toProto(message: MsgChangeIscnRecordOwnershipResponse): Uint8Array {
    return MsgChangeIscnRecordOwnershipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeIscnRecordOwnershipResponse): MsgChangeIscnRecordOwnershipResponseProtoMsg {
    return {
      typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnershipResponse",
      value: MsgChangeIscnRecordOwnershipResponse.encode(message).finish()
    };
  }
};