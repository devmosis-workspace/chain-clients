import { Params, ParamsAmino, ParamsSDKType } from "./cron";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** MsgPromoteToPrivilegedContract defines the Msg/PromoteToPrivilegedContract */
export interface MsgPromoteToPrivilegedContract {
  /**
   * Authority is the address of the governance account or any whitelisted
   * address
   */
  authority: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface MsgPromoteToPrivilegedContractProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract";
  value: Uint8Array;
}
/** MsgPromoteToPrivilegedContract defines the Msg/PromoteToPrivilegedContract */
export interface MsgPromoteToPrivilegedContractAmino {
  /**
   * Authority is the address of the governance account or any whitelisted
   * address
   */
  authority?: string;
  /** Contract is the bech32 address of the smart contract */
  contract?: string;
}
export interface MsgPromoteToPrivilegedContractAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract";
  value: MsgPromoteToPrivilegedContractAmino;
}
/** MsgPromoteToPrivilegedContract defines the Msg/PromoteToPrivilegedContract */
export interface MsgPromoteToPrivilegedContractSDKType {
  authority: string;
  contract: string;
}
export interface MsgPromoteToPrivilegedContractResponse {}
export interface MsgPromoteToPrivilegedContractResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContractResponse";
  value: Uint8Array;
}
export interface MsgPromoteToPrivilegedContractResponseAmino {}
export interface MsgPromoteToPrivilegedContractResponseAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContractResponse";
  value: MsgPromoteToPrivilegedContractResponseAmino;
}
export interface MsgPromoteToPrivilegedContractResponseSDKType {}
export interface MsgDemoteFromPrivilegedContract {
  /**
   * Authority is the address of the governance account or any whitelisted
   * address
   */
  authority: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface MsgDemoteFromPrivilegedContractProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract";
  value: Uint8Array;
}
export interface MsgDemoteFromPrivilegedContractAmino {
  /**
   * Authority is the address of the governance account or any whitelisted
   * address
   */
  authority?: string;
  /** Contract is the bech32 address of the smart contract */
  contract?: string;
}
export interface MsgDemoteFromPrivilegedContractAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract";
  value: MsgDemoteFromPrivilegedContractAmino;
}
export interface MsgDemoteFromPrivilegedContractSDKType {
  authority: string;
  contract: string;
}
export interface MsgDemoteFromPrivilegedContractResponse {}
export interface MsgDemoteFromPrivilegedContractResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContractResponse";
  value: Uint8Array;
}
export interface MsgDemoteFromPrivilegedContractResponseAmino {}
export interface MsgDemoteFromPrivilegedContractResponseAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContractResponse";
  value: MsgDemoteFromPrivilegedContractResponseAmino;
}
export interface MsgDemoteFromPrivilegedContractResponseSDKType {}
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** Authority is the address of the governance account. */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgPromoteToPrivilegedContract(): MsgPromoteToPrivilegedContract {
  return {
    authority: "",
    contract: ""
  };
}
export const MsgPromoteToPrivilegedContract = {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract",
  encode(message: MsgPromoteToPrivilegedContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): MsgPromoteToPrivilegedContract {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<MsgPromoteToPrivilegedContract>): MsgPromoteToPrivilegedContract {
    const message = createBaseMsgPromoteToPrivilegedContract();
    message.authority = object.authority ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: MsgPromoteToPrivilegedContractAmino): MsgPromoteToPrivilegedContract {
    const message = createBaseMsgPromoteToPrivilegedContract();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: MsgPromoteToPrivilegedContract): MsgPromoteToPrivilegedContractAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgPromoteToPrivilegedContractAminoMsg): MsgPromoteToPrivilegedContract {
    return MsgPromoteToPrivilegedContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPromoteToPrivilegedContractProtoMsg): MsgPromoteToPrivilegedContract {
    return MsgPromoteToPrivilegedContract.decode(message.value);
  },
  toProto(message: MsgPromoteToPrivilegedContract): Uint8Array {
    return MsgPromoteToPrivilegedContract.encode(message).finish();
  },
  toProtoMsg(message: MsgPromoteToPrivilegedContract): MsgPromoteToPrivilegedContractProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract",
      value: MsgPromoteToPrivilegedContract.encode(message).finish()
    };
  }
};
function createBaseMsgPromoteToPrivilegedContractResponse(): MsgPromoteToPrivilegedContractResponse {
  return {};
}
export const MsgPromoteToPrivilegedContractResponse = {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContractResponse",
  encode(_: MsgPromoteToPrivilegedContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPromoteToPrivilegedContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPromoteToPrivilegedContractResponse>): MsgPromoteToPrivilegedContractResponse {
    const message = createBaseMsgPromoteToPrivilegedContractResponse();
    return message;
  },
  fromAmino(_: MsgPromoteToPrivilegedContractResponseAmino): MsgPromoteToPrivilegedContractResponse {
    const message = createBaseMsgPromoteToPrivilegedContractResponse();
    return message;
  },
  toAmino(_: MsgPromoteToPrivilegedContractResponse): MsgPromoteToPrivilegedContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPromoteToPrivilegedContractResponseAminoMsg): MsgPromoteToPrivilegedContractResponse {
    return MsgPromoteToPrivilegedContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPromoteToPrivilegedContractResponseProtoMsg): MsgPromoteToPrivilegedContractResponse {
    return MsgPromoteToPrivilegedContractResponse.decode(message.value);
  },
  toProto(message: MsgPromoteToPrivilegedContractResponse): Uint8Array {
    return MsgPromoteToPrivilegedContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPromoteToPrivilegedContractResponse): MsgPromoteToPrivilegedContractResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContractResponse",
      value: MsgPromoteToPrivilegedContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDemoteFromPrivilegedContract(): MsgDemoteFromPrivilegedContract {
  return {
    authority: "",
    contract: ""
  };
}
export const MsgDemoteFromPrivilegedContract = {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract",
  encode(message: MsgDemoteFromPrivilegedContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): MsgDemoteFromPrivilegedContract {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<MsgDemoteFromPrivilegedContract>): MsgDemoteFromPrivilegedContract {
    const message = createBaseMsgDemoteFromPrivilegedContract();
    message.authority = object.authority ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: MsgDemoteFromPrivilegedContractAmino): MsgDemoteFromPrivilegedContract {
    const message = createBaseMsgDemoteFromPrivilegedContract();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: MsgDemoteFromPrivilegedContract): MsgDemoteFromPrivilegedContractAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgDemoteFromPrivilegedContractAminoMsg): MsgDemoteFromPrivilegedContract {
    return MsgDemoteFromPrivilegedContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDemoteFromPrivilegedContractProtoMsg): MsgDemoteFromPrivilegedContract {
    return MsgDemoteFromPrivilegedContract.decode(message.value);
  },
  toProto(message: MsgDemoteFromPrivilegedContract): Uint8Array {
    return MsgDemoteFromPrivilegedContract.encode(message).finish();
  },
  toProtoMsg(message: MsgDemoteFromPrivilegedContract): MsgDemoteFromPrivilegedContractProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract",
      value: MsgDemoteFromPrivilegedContract.encode(message).finish()
    };
  }
};
function createBaseMsgDemoteFromPrivilegedContractResponse(): MsgDemoteFromPrivilegedContractResponse {
  return {};
}
export const MsgDemoteFromPrivilegedContractResponse = {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContractResponse",
  encode(_: MsgDemoteFromPrivilegedContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDemoteFromPrivilegedContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDemoteFromPrivilegedContractResponse>): MsgDemoteFromPrivilegedContractResponse {
    const message = createBaseMsgDemoteFromPrivilegedContractResponse();
    return message;
  },
  fromAmino(_: MsgDemoteFromPrivilegedContractResponseAmino): MsgDemoteFromPrivilegedContractResponse {
    const message = createBaseMsgDemoteFromPrivilegedContractResponse();
    return message;
  },
  toAmino(_: MsgDemoteFromPrivilegedContractResponse): MsgDemoteFromPrivilegedContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDemoteFromPrivilegedContractResponseAminoMsg): MsgDemoteFromPrivilegedContractResponse {
    return MsgDemoteFromPrivilegedContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDemoteFromPrivilegedContractResponseProtoMsg): MsgDemoteFromPrivilegedContractResponse {
    return MsgDemoteFromPrivilegedContractResponse.decode(message.value);
  },
  toProto(message: MsgDemoteFromPrivilegedContractResponse): Uint8Array {
    return MsgDemoteFromPrivilegedContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDemoteFromPrivilegedContractResponse): MsgDemoteFromPrivilegedContractResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContractResponse",
      value: MsgDemoteFromPrivilegedContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};