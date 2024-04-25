import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawerAddress: string;
}
export interface MsgRegisterFeeShareProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShare";
  value: Uint8Array;
}
/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShareAmino {
  /** contract_address in bech32 format */
  contract_address?: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployer_address?: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawer_address?: string;
}
export interface MsgRegisterFeeShareAminoMsg {
  type: "/juno.feeshare.v1.MsgRegisterFeeShare";
  value: MsgRegisterFeeShareAmino;
}
/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShareSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponse {}
export interface MsgRegisterFeeShareResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShareResponse";
  value: Uint8Array;
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponseAmino {}
export interface MsgRegisterFeeShareResponseAminoMsg {
  type: "/juno.feeshare.v1.MsgRegisterFeeShareResponse";
  value: MsgRegisterFeeShareResponseAmino;
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponseSDKType {}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawerAddress: string;
}
export interface MsgUpdateFeeShareProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShare";
  value: Uint8Array;
}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShareAmino {
  /** contract_address in bech32 format */
  contract_address?: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployer_address?: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawer_address?: string;
}
export interface MsgUpdateFeeShareAminoMsg {
  type: "/juno.feeshare.v1.MsgUpdateFeeShare";
  value: MsgUpdateFeeShareAmino;
}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShareSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponse {}
export interface MsgUpdateFeeShareResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShareResponse";
  value: Uint8Array;
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponseAmino {}
export interface MsgUpdateFeeShareResponseAminoMsg {
  type: "/juno.feeshare.v1.MsgUpdateFeeShareResponse";
  value: MsgUpdateFeeShareResponseAmino;
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponseSDKType {}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string;
}
export interface MsgCancelFeeShareProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgCancelFeeShare";
  value: Uint8Array;
}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShareAmino {
  /** contract_address in bech32 format */
  contract_address?: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployer_address?: string;
}
export interface MsgCancelFeeShareAminoMsg {
  type: "/juno.feeshare.v1.MsgCancelFeeShare";
  value: MsgCancelFeeShareAmino;
}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShareSDKType {
  contract_address: string;
  deployer_address: string;
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponse {}
export interface MsgCancelFeeShareResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgCancelFeeShareResponse";
  value: Uint8Array;
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponseAmino {}
export interface MsgCancelFeeShareResponseAminoMsg {
  type: "/juno.feeshare.v1.MsgCancelFeeShareResponse";
  value: MsgCancelFeeShareResponseAmino;
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/feeshare parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/feeshare parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/juno.feeshare.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/juno.feeshare.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/juno.feeshare.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterFeeShare(): MsgRegisterFeeShare {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const MsgRegisterFeeShare = {
  typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShare",
  encode(message: MsgRegisterFeeShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterFeeShare {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterFeeShare>): MsgRegisterFeeShare {
    const message = createBaseMsgRegisterFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterFeeShareAmino): MsgRegisterFeeShare {
    const message = createBaseMsgRegisterFeeShare();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
      message.withdrawerAddress = object.withdrawer_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterFeeShare): MsgRegisterFeeShareAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdrawer_address = message.withdrawerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterFeeShareAminoMsg): MsgRegisterFeeShare {
    return MsgRegisterFeeShare.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterFeeShareProtoMsg): MsgRegisterFeeShare {
    return MsgRegisterFeeShare.decode(message.value);
  },
  toProto(message: MsgRegisterFeeShare): Uint8Array {
    return MsgRegisterFeeShare.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterFeeShare): MsgRegisterFeeShareProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShare",
      value: MsgRegisterFeeShare.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterFeeShareResponse(): MsgRegisterFeeShareResponse {
  return {};
}
export const MsgRegisterFeeShareResponse = {
  typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShareResponse",
  encode(_: MsgRegisterFeeShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterFeeShareResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterFeeShareResponse>): MsgRegisterFeeShareResponse {
    const message = createBaseMsgRegisterFeeShareResponse();
    return message;
  },
  fromAmino(_: MsgRegisterFeeShareResponseAmino): MsgRegisterFeeShareResponse {
    const message = createBaseMsgRegisterFeeShareResponse();
    return message;
  },
  toAmino(_: MsgRegisterFeeShareResponse): MsgRegisterFeeShareResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterFeeShareResponseAminoMsg): MsgRegisterFeeShareResponse {
    return MsgRegisterFeeShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterFeeShareResponseProtoMsg): MsgRegisterFeeShareResponse {
    return MsgRegisterFeeShareResponse.decode(message.value);
  },
  toProto(message: MsgRegisterFeeShareResponse): Uint8Array {
    return MsgRegisterFeeShareResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterFeeShareResponse): MsgRegisterFeeShareResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShareResponse",
      value: MsgRegisterFeeShareResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeeShare(): MsgUpdateFeeShare {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const MsgUpdateFeeShare = {
  typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShare",
  encode(message: MsgUpdateFeeShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateFeeShare {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateFeeShare>): MsgUpdateFeeShare {
    const message = createBaseMsgUpdateFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateFeeShareAmino): MsgUpdateFeeShare {
    const message = createBaseMsgUpdateFeeShare();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
      message.withdrawerAddress = object.withdrawer_address;
    }
    return message;
  },
  toAmino(message: MsgUpdateFeeShare): MsgUpdateFeeShareAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdrawer_address = message.withdrawerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeShareAminoMsg): MsgUpdateFeeShare {
    return MsgUpdateFeeShare.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeeShareProtoMsg): MsgUpdateFeeShare {
    return MsgUpdateFeeShare.decode(message.value);
  },
  toProto(message: MsgUpdateFeeShare): Uint8Array {
    return MsgUpdateFeeShare.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeShare): MsgUpdateFeeShareProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShare",
      value: MsgUpdateFeeShare.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeeShareResponse(): MsgUpdateFeeShareResponse {
  return {};
}
export const MsgUpdateFeeShareResponse = {
  typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShareResponse",
  encode(_: MsgUpdateFeeShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateFeeShareResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateFeeShareResponse>): MsgUpdateFeeShareResponse {
    const message = createBaseMsgUpdateFeeShareResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFeeShareResponseAmino): MsgUpdateFeeShareResponse {
    const message = createBaseMsgUpdateFeeShareResponse();
    return message;
  },
  toAmino(_: MsgUpdateFeeShareResponse): MsgUpdateFeeShareResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeShareResponseAminoMsg): MsgUpdateFeeShareResponse {
    return MsgUpdateFeeShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeeShareResponseProtoMsg): MsgUpdateFeeShareResponse {
    return MsgUpdateFeeShareResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFeeShareResponse): Uint8Array {
    return MsgUpdateFeeShareResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeShareResponse): MsgUpdateFeeShareResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShareResponse",
      value: MsgUpdateFeeShareResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelFeeShare(): MsgCancelFeeShare {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}
export const MsgCancelFeeShare = {
  typeUrl: "/juno.feeshare.v1.MsgCancelFeeShare",
  encode(message: MsgCancelFeeShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelFeeShare {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelFeeShare>): MsgCancelFeeShare {
    const message = createBaseMsgCancelFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCancelFeeShareAmino): MsgCancelFeeShare {
    const message = createBaseMsgCancelFeeShare();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    return message;
  },
  toAmino(message: MsgCancelFeeShare): MsgCancelFeeShareAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCancelFeeShareAminoMsg): MsgCancelFeeShare {
    return MsgCancelFeeShare.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelFeeShareProtoMsg): MsgCancelFeeShare {
    return MsgCancelFeeShare.decode(message.value);
  },
  toProto(message: MsgCancelFeeShare): Uint8Array {
    return MsgCancelFeeShare.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelFeeShare): MsgCancelFeeShareProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.MsgCancelFeeShare",
      value: MsgCancelFeeShare.encode(message).finish()
    };
  }
};
function createBaseMsgCancelFeeShareResponse(): MsgCancelFeeShareResponse {
  return {};
}
export const MsgCancelFeeShareResponse = {
  typeUrl: "/juno.feeshare.v1.MsgCancelFeeShareResponse",
  encode(_: MsgCancelFeeShareResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelFeeShareResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelFeeShareResponse>): MsgCancelFeeShareResponse {
    const message = createBaseMsgCancelFeeShareResponse();
    return message;
  },
  fromAmino(_: MsgCancelFeeShareResponseAmino): MsgCancelFeeShareResponse {
    const message = createBaseMsgCancelFeeShareResponse();
    return message;
  },
  toAmino(_: MsgCancelFeeShareResponse): MsgCancelFeeShareResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelFeeShareResponseAminoMsg): MsgCancelFeeShareResponse {
    return MsgCancelFeeShareResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelFeeShareResponseProtoMsg): MsgCancelFeeShareResponse {
    return MsgCancelFeeShareResponse.decode(message.value);
  },
  toProto(message: MsgCancelFeeShareResponse): Uint8Array {
    return MsgCancelFeeShareResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelFeeShareResponse): MsgCancelFeeShareResponseProtoMsg {
    return {
      typeUrl: "/juno.feeshare.v1.MsgCancelFeeShareResponse",
      value: MsgCancelFeeShareResponse.encode(message).finish()
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
  typeUrl: "/juno.feeshare.v1.MsgUpdateParams",
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
    obj.authority = message.authority;
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
      typeUrl: "/juno.feeshare.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/juno.feeshare.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/juno.feeshare.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};