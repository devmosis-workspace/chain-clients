import { AdminAccount, AdminAccountSDKType, Params, ParamsSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgAddAccount {
  signer: string;
  account?: AdminAccount;
}
export interface MsgAddAccountSDKType {
  signer: string;
  account?: AdminAccountSDKType;
}
export interface MsgAddAccountResponse {}
export interface MsgAddAccountResponseSDKType {}
export interface MsgRemoveAccount {
  signer: string;
  account?: AdminAccount;
}
export interface MsgRemoveAccountSDKType {
  signer: string;
  account?: AdminAccountSDKType;
}
export interface MsgRemoveAccountResponse {}
export interface MsgRemoveAccountResponseSDKType {}
export interface MsgSetParams {
  signer: string;
  params?: Params;
}
export interface MsgSetParamsSDKType {
  signer: string;
  params?: ParamsSDKType;
}
export interface MsgSetParamsResponse {}
export interface MsgSetParamsResponseSDKType {}
function createBaseMsgAddAccount(): MsgAddAccount {
  return {
    signer: "",
    account: undefined
  };
}
export const MsgAddAccount = {
  encode(message: MsgAddAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.account !== undefined) {
      AdminAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddAccount {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      account: isSet(object.account) ? AdminAccount.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object: Partial<MsgAddAccount>): MsgAddAccount {
    const message = createBaseMsgAddAccount();
    message.signer = object.signer ?? "";
    message.account = object.account !== undefined && object.account !== null ? AdminAccount.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseMsgAddAccountResponse(): MsgAddAccountResponse {
  return {};
}
export const MsgAddAccountResponse = {
  encode(_: MsgAddAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddAccountResponse>): MsgAddAccountResponse {
    const message = createBaseMsgAddAccountResponse();
    return message;
  }
};
function createBaseMsgRemoveAccount(): MsgRemoveAccount {
  return {
    signer: "",
    account: undefined
  };
}
export const MsgRemoveAccount = {
  encode(message: MsgRemoveAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.account !== undefined) {
      AdminAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveAccount {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      account: isSet(object.account) ? AdminAccount.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object: Partial<MsgRemoveAccount>): MsgRemoveAccount {
    const message = createBaseMsgRemoveAccount();
    message.signer = object.signer ?? "";
    message.account = object.account !== undefined && object.account !== null ? AdminAccount.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseMsgRemoveAccountResponse(): MsgRemoveAccountResponse {
  return {};
}
export const MsgRemoveAccountResponse = {
  encode(_: MsgRemoveAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveAccountResponse>): MsgRemoveAccountResponse {
    const message = createBaseMsgRemoveAccountResponse();
    return message;
  }
};
function createBaseMsgSetParams(): MsgSetParams {
  return {
    signer: "",
    params: undefined
  };
}
export const MsgSetParams = {
  encode(message: MsgSetParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetParams>): MsgSetParams {
    const message = createBaseMsgSetParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgSetParamsResponse(): MsgSetParamsResponse {
  return {};
}
export const MsgSetParamsResponse = {
  encode(_: MsgSetParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetParamsResponse>): MsgSetParamsResponse {
    const message = createBaseMsgSetParamsResponse();
    return message;
  }
};