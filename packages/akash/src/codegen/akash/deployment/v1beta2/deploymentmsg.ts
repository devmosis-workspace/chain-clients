import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  id?: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit?: Coin;
  /** Depositor pays for the deposit */
  depositor: string;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
  id?: DeploymentIDSDKType;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
  deposit?: CoinSDKType;
  depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  id?: DeploymentID;
  amount?: Coin;
  /** Depositor pays for the deposit */
  depositor: string;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
  id?: DeploymentIDSDKType;
  amount?: CoinSDKType;
  depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  id?: DeploymentID;
  version: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
  id?: DeploymentIDSDKType;
  version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  id?: DeploymentID;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
  id?: DeploymentIDSDKType;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {}
function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    id: undefined,
    groups: [],
    version: new Uint8Array(),
    deposit: undefined,
    depositor: ""
  };
}
export const MsgCreateDeployment = {
  encode(message: MsgCreateDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(42).string(message.depositor);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateDeployment>): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  }
};
function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}
export const MsgCreateDeploymentResponse = {
  encode(_: MsgCreateDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateDeploymentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  }
};
function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: undefined,
    amount: undefined,
    depositor: ""
  };
}
export const MsgDepositDeployment = {
  encode(message: MsgDepositDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    return writer;
  },
  fromJSON(object: any): MsgDepositDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  fromPartial(object: Partial<MsgDepositDeployment>): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  }
};
function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return {};
}
export const MsgDepositDeploymentResponse = {
  encode(_: MsgDepositDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDepositDeploymentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  }
};
function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    id: undefined,
    version: new Uint8Array()
  };
}
export const MsgUpdateDeployment = {
  encode(message: MsgUpdateDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgUpdateDeployment>): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.version = object.version ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return {};
}
export const MsgUpdateDeploymentResponse = {
  encode(_: MsgUpdateDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDeploymentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  }
};
function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    id: undefined
  };
}
export const MsgCloseDeployment = {
  encode(message: MsgCloseDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCloseDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined
    };
  },
  fromPartial(object: Partial<MsgCloseDeployment>): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  }
};
function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return {};
}
export const MsgCloseDeploymentResponse = {
  encode(_: MsgCloseDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCloseDeploymentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  }
};