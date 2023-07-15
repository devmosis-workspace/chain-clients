import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuper {
  description: string;
  address: string;
  addedBy: string;
}
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuperSDKType {
  description: string;
  address: string;
  added_by: string;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponse {}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponseSDKType {}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuper {
  address: string;
  deletedBy: string;
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuperSDKType {
  address: string;
  deleted_by: string;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponse {}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponseSDKType {}
function createBaseMsgAddSuper(): MsgAddSuper {
  return {
    description: "",
    address: "",
    addedBy: ""
  };
}
export const MsgAddSuper = {
  encode(message: MsgAddSuper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.addedBy !== "") {
      writer.uint32(26).string(message.addedBy);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddSuper {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      address: isSet(object.address) ? String(object.address) : "",
      addedBy: isSet(object.addedBy) ? String(object.addedBy) : ""
    };
  },
  fromPartial(object: Partial<MsgAddSuper>): MsgAddSuper {
    const message = createBaseMsgAddSuper();
    message.description = object.description ?? "";
    message.address = object.address ?? "";
    message.addedBy = object.addedBy ?? "";
    return message;
  }
};
function createBaseMsgAddSuperResponse(): MsgAddSuperResponse {
  return {};
}
export const MsgAddSuperResponse = {
  encode(_: MsgAddSuperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddSuperResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddSuperResponse>): MsgAddSuperResponse {
    const message = createBaseMsgAddSuperResponse();
    return message;
  }
};
function createBaseMsgDeleteSuper(): MsgDeleteSuper {
  return {
    address: "",
    deletedBy: ""
  };
}
export const MsgDeleteSuper = {
  encode(message: MsgDeleteSuper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.deletedBy !== "") {
      writer.uint32(26).string(message.deletedBy);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteSuper {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      deletedBy: isSet(object.deletedBy) ? String(object.deletedBy) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteSuper>): MsgDeleteSuper {
    const message = createBaseMsgDeleteSuper();
    message.address = object.address ?? "";
    message.deletedBy = object.deletedBy ?? "";
    return message;
  }
};
function createBaseMsgDeleteSuperResponse(): MsgDeleteSuperResponse {
  return {};
}
export const MsgDeleteSuperResponse = {
  encode(_: MsgDeleteSuperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteSuperResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteSuperResponse>): MsgDeleteSuperResponse {
    const message = createBaseMsgDeleteSuperResponse();
    return message;
  }
};