import { Params, ParamsSDKType } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  nonces: Long[];
}
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenueSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
  nonces: Long[];
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponse {}
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
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenueSDKType {
  contract_address: string;
  deployer_address: string;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponse {}
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
  params?: Params;
}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
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
  encode(message: MsgRegisterRevenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRegisterRevenue>): MsgRegisterRevenue {
    const message = createBaseMsgRegisterRevenue();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.nonces = object.nonces?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseMsgRegisterRevenueResponse(): MsgRegisterRevenueResponse {
  return {};
}
export const MsgRegisterRevenueResponse = {
  encode(_: MsgRegisterRevenueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRegisterRevenueResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterRevenueResponse>): MsgRegisterRevenueResponse {
    const message = createBaseMsgRegisterRevenueResponse();
    return message;
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
  encode(message: MsgUpdateRevenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateRevenueResponse(): MsgUpdateRevenueResponse {
  return {};
}
export const MsgUpdateRevenueResponse = {
  encode(_: MsgUpdateRevenueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRevenueResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRevenueResponse>): MsgUpdateRevenueResponse {
    const message = createBaseMsgUpdateRevenueResponse();
    return message;
  }
};
function createBaseMsgCancelRevenue(): MsgCancelRevenue {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}
export const MsgCancelRevenue = {
  encode(message: MsgCancelRevenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCancelRevenueResponse(): MsgCancelRevenueResponse {
  return {};
}
export const MsgCancelRevenueResponse = {
  encode(_: MsgCancelRevenueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelRevenueResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelRevenueResponse>): MsgCancelRevenueResponse {
    const message = createBaseMsgCancelRevenueResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};