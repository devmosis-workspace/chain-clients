import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenue {
  /** contract_address in hex format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawerAddress: string;
  /**
   * nonces is an array of nonces from the address path, where the last nonce is the nonce
   * that determines the contract's address - it can be an EOA nonce or a
   * factory contract nonce
   */
  nonces: bigint[];
}
export interface MsgRegisterRevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue";
  value: Uint8Array;
}
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenueAmino {
  /** contract_address in hex format */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawer_address: string;
  /**
   * nonces is an array of nonces from the address path, where the last nonce is the nonce
   * that determines the contract's address - it can be an EOA nonce or a
   * factory contract nonce
   */
  nonces: string[];
}
export interface MsgRegisterRevenueAminoMsg {
  type: "/evmos.revenue.v1.MsgRegisterRevenue";
  value: MsgRegisterRevenueAmino;
}
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenueSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
  nonces: bigint[];
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponse {}
export interface MsgRegisterRevenueResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgRegisterRevenueResponse";
  value: Uint8Array;
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponseAmino {}
export interface MsgRegisterRevenueResponseAminoMsg {
  type: "/evmos.revenue.v1.MsgRegisterRevenueResponse";
  value: MsgRegisterRevenueResponseAmino;
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponseSDKType {}
/**
 * MsgUpdateRevenue defines a message that updates the withdrawer address for a
 * registered Revenue
 */
export interface MsgUpdateRevenue {
  /** contract_address in hex format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawerAddress: string;
}
export interface MsgUpdateRevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue";
  value: Uint8Array;
}
/**
 * MsgUpdateRevenue defines a message that updates the withdrawer address for a
 * registered Revenue
 */
export interface MsgUpdateRevenueAmino {
  /** contract_address in hex format */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawer_address: string;
}
export interface MsgUpdateRevenueAminoMsg {
  type: "/evmos.revenue.v1.MsgUpdateRevenue";
  value: MsgUpdateRevenueAmino;
}
/**
 * MsgUpdateRevenue defines a message that updates the withdrawer address for a
 * registered Revenue
 */
export interface MsgUpdateRevenueSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
/** MsgUpdateRevenueResponse defines the MsgUpdateRevenue response type */
export interface MsgUpdateRevenueResponse {}
export interface MsgUpdateRevenueResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgUpdateRevenueResponse";
  value: Uint8Array;
}
/** MsgUpdateRevenueResponse defines the MsgUpdateRevenue response type */
export interface MsgUpdateRevenueResponseAmino {}
export interface MsgUpdateRevenueResponseAminoMsg {
  type: "/evmos.revenue.v1.MsgUpdateRevenueResponse";
  value: MsgUpdateRevenueResponseAmino;
}
/** MsgUpdateRevenueResponse defines the MsgUpdateRevenue response type */
export interface MsgUpdateRevenueResponseSDKType {}
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenue {
  /** contract_address in hex format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
}
export interface MsgCancelRevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgCancelRevenue";
  value: Uint8Array;
}
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenueAmino {
  /** contract_address in hex format */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
}
export interface MsgCancelRevenueAminoMsg {
  type: "/evmos.revenue.v1.MsgCancelRevenue";
  value: MsgCancelRevenueAmino;
}
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenueSDKType {
  contract_address: string;
  deployer_address: string;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponse {}
export interface MsgCancelRevenueResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgCancelRevenueResponse";
  value: Uint8Array;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponseAmino {}
export interface MsgCancelRevenueResponseAminoMsg {
  type: "/evmos.revenue.v1.MsgCancelRevenueResponse";
  value: MsgCancelRevenueResponseAmino;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponseSDKType {}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/revenue parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/revenue parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/evmos.revenue.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/evmos.revenue.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/evmos.revenue.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterRevenue(): MsgRegisterRevenue {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: "",
    nonces: []
  };
}
export const MsgRegisterRevenue = {
  typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
  encode(message: MsgRegisterRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    writer.uint32(34).fork();
    for (const v of message.nonces) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgRegisterRevenue {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<MsgRegisterRevenue>): MsgRegisterRevenue {
    const message = createBaseMsgRegisterRevenue();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.nonces = object.nonces?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRegisterRevenueAmino): MsgRegisterRevenue {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address,
      withdrawerAddress: object.withdrawer_address,
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: MsgRegisterRevenue): MsgRegisterRevenueAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdrawer_address = message.withdrawerAddress;
    if (message.nonces) {
      obj.nonces = message.nonces.map(e => e.toString());
    } else {
      obj.nonces = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterRevenueAminoMsg): MsgRegisterRevenue {
    return MsgRegisterRevenue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterRevenueProtoMsg): MsgRegisterRevenue {
    return MsgRegisterRevenue.decode(message.value);
  },
  toProto(message: MsgRegisterRevenue): Uint8Array {
    return MsgRegisterRevenue.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterRevenue): MsgRegisterRevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue",
      value: MsgRegisterRevenue.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterRevenueResponse(): MsgRegisterRevenueResponse {
  return {};
}
export const MsgRegisterRevenueResponse = {
  typeUrl: "/evmos.revenue.v1.MsgRegisterRevenueResponse",
  encode(_: MsgRegisterRevenueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterRevenueResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterRevenueResponse>): MsgRegisterRevenueResponse {
    const message = createBaseMsgRegisterRevenueResponse();
    return message;
  },
  fromAmino(_: MsgRegisterRevenueResponseAmino): MsgRegisterRevenueResponse {
    return {};
  },
  toAmino(_: MsgRegisterRevenueResponse): MsgRegisterRevenueResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterRevenueResponseAminoMsg): MsgRegisterRevenueResponse {
    return MsgRegisterRevenueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterRevenueResponseProtoMsg): MsgRegisterRevenueResponse {
    return MsgRegisterRevenueResponse.decode(message.value);
  },
  toProto(message: MsgRegisterRevenueResponse): Uint8Array {
    return MsgRegisterRevenueResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterRevenueResponse): MsgRegisterRevenueResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.MsgRegisterRevenueResponse",
      value: MsgRegisterRevenueResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRevenue(): MsgUpdateRevenue {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const MsgUpdateRevenue = {
  typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
  encode(message: MsgUpdateRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): MsgUpdateRevenue {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateRevenue>): MsgUpdateRevenue {
    const message = createBaseMsgUpdateRevenue();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateRevenueAmino): MsgUpdateRevenue {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address,
      withdrawerAddress: object.withdrawer_address
    };
  },
  toAmino(message: MsgUpdateRevenue): MsgUpdateRevenueAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdrawer_address = message.withdrawerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRevenueAminoMsg): MsgUpdateRevenue {
    return MsgUpdateRevenue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRevenueProtoMsg): MsgUpdateRevenue {
    return MsgUpdateRevenue.decode(message.value);
  },
  toProto(message: MsgUpdateRevenue): Uint8Array {
    return MsgUpdateRevenue.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRevenue): MsgUpdateRevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue",
      value: MsgUpdateRevenue.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRevenueResponse(): MsgUpdateRevenueResponse {
  return {};
}
export const MsgUpdateRevenueResponse = {
  typeUrl: "/evmos.revenue.v1.MsgUpdateRevenueResponse",
  encode(_: MsgUpdateRevenueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRevenueResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRevenueResponse>): MsgUpdateRevenueResponse {
    const message = createBaseMsgUpdateRevenueResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRevenueResponseAmino): MsgUpdateRevenueResponse {
    return {};
  },
  toAmino(_: MsgUpdateRevenueResponse): MsgUpdateRevenueResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRevenueResponseAminoMsg): MsgUpdateRevenueResponse {
    return MsgUpdateRevenueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRevenueResponseProtoMsg): MsgUpdateRevenueResponse {
    return MsgUpdateRevenueResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRevenueResponse): Uint8Array {
    return MsgUpdateRevenueResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRevenueResponse): MsgUpdateRevenueResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.MsgUpdateRevenueResponse",
      value: MsgUpdateRevenueResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRevenue(): MsgCancelRevenue {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}
export const MsgCancelRevenue = {
  typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
  encode(message: MsgCancelRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelRevenue {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelRevenue>): MsgCancelRevenue {
    const message = createBaseMsgCancelRevenue();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCancelRevenueAmino): MsgCancelRevenue {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address
    };
  },
  toAmino(message: MsgCancelRevenue): MsgCancelRevenueAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCancelRevenueAminoMsg): MsgCancelRevenue {
    return MsgCancelRevenue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelRevenueProtoMsg): MsgCancelRevenue {
    return MsgCancelRevenue.decode(message.value);
  },
  toProto(message: MsgCancelRevenue): Uint8Array {
    return MsgCancelRevenue.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRevenue): MsgCancelRevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.MsgCancelRevenue",
      value: MsgCancelRevenue.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRevenueResponse(): MsgCancelRevenueResponse {
  return {};
}
export const MsgCancelRevenueResponse = {
  typeUrl: "/evmos.revenue.v1.MsgCancelRevenueResponse",
  encode(_: MsgCancelRevenueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelRevenueResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelRevenueResponse>): MsgCancelRevenueResponse {
    const message = createBaseMsgCancelRevenueResponse();
    return message;
  },
  fromAmino(_: MsgCancelRevenueResponseAmino): MsgCancelRevenueResponse {
    return {};
  },
  toAmino(_: MsgCancelRevenueResponse): MsgCancelRevenueResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelRevenueResponseAminoMsg): MsgCancelRevenueResponse {
    return MsgCancelRevenueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelRevenueResponseProtoMsg): MsgCancelRevenueResponse {
    return MsgCancelRevenueResponse.decode(message.value);
  },
  toProto(message: MsgCancelRevenueResponse): Uint8Array {
    return MsgCancelRevenueResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRevenueResponse): MsgCancelRevenueResponseProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.MsgCancelRevenueResponse",
      value: MsgCancelRevenueResponse.encode(message).finish()
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
  typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
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
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
      typeUrl: "/evmos.revenue.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/evmos.revenue.v1.MsgUpdateParamsResponse",
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
    return {};
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
      typeUrl: "/evmos.revenue.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};