import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface IscnRecord {
  /** Using camelCases to make the record JSON in tx more like general JSON documents */
  recordNotes: string;
  contentFingerprints: string[];
  /** Here, `IscnInput` is JSON encoded bytes */
  stakeholders: Uint8Array[];
  contentMetadata: Uint8Array;
}
export interface IscnRecordSDKType {
  recordNotes: string;
  contentFingerprints: string[];
  stakeholders: Uint8Array[];
  contentMetadata: Uint8Array;
}
export interface MsgCreateIscnRecord {
  from: string;
  record?: IscnRecord;
  nonce: Long;
}
export interface MsgCreateIscnRecordSDKType {
  from: string;
  record?: IscnRecordSDKType;
  nonce: Long;
}
export interface MsgCreateIscnRecordResponse {
  iscnId: string;
  recordIpld: string;
}
export interface MsgCreateIscnRecordResponseSDKType {
  iscn_id: string;
  record_ipld: string;
}
export interface MsgUpdateIscnRecord {
  from: string;
  iscnId: string;
  record?: IscnRecord;
}
export interface MsgUpdateIscnRecordSDKType {
  from: string;
  iscn_id: string;
  record?: IscnRecordSDKType;
}
export interface MsgUpdateIscnRecordResponse {
  iscnId: string;
  recordIpld: string;
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
export interface MsgChangeIscnRecordOwnershipSDKType {
  from: string;
  iscn_id: string;
  new_owner: string;
}
export interface MsgChangeIscnRecordOwnershipResponse {}
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
  encode(message: IscnRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCreateIscnRecord(): MsgCreateIscnRecord {
  return {
    from: "",
    record: undefined,
    nonce: Long.UZERO
  };
}
export const MsgCreateIscnRecord = {
  encode(message: MsgCreateIscnRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.record !== undefined) {
      IscnRecord.encode(message.record, writer.uint32(18).fork()).ldelim();
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateIscnRecord {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      record: isSet(object.record) ? IscnRecord.fromJSON(object.record) : undefined,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateIscnRecord>): MsgCreateIscnRecord {
    const message = createBaseMsgCreateIscnRecord();
    message.from = object.from ?? "";
    message.record = object.record !== undefined && object.record !== null ? IscnRecord.fromPartial(object.record) : undefined;
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCreateIscnRecordResponse(): MsgCreateIscnRecordResponse {
  return {
    iscnId: "",
    recordIpld: ""
  };
}
export const MsgCreateIscnRecordResponse = {
  encode(message: MsgCreateIscnRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateIscnRecord(): MsgUpdateIscnRecord {
  return {
    from: "",
    iscnId: "",
    record: undefined
  };
}
export const MsgUpdateIscnRecord = {
  encode(message: MsgUpdateIscnRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateIscnRecordResponse(): MsgUpdateIscnRecordResponse {
  return {
    iscnId: "",
    recordIpld: ""
  };
}
export const MsgUpdateIscnRecordResponse = {
  encode(message: MsgUpdateIscnRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MsgChangeIscnRecordOwnership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgChangeIscnRecordOwnershipResponse(): MsgChangeIscnRecordOwnershipResponse {
  return {};
}
export const MsgChangeIscnRecordOwnershipResponse = {
  encode(_: MsgChangeIscnRecordOwnershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgChangeIscnRecordOwnershipResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeIscnRecordOwnershipResponse>): MsgChangeIscnRecordOwnershipResponse {
    const message = createBaseMsgChangeIscnRecordOwnershipResponse();
    return message;
  }
};