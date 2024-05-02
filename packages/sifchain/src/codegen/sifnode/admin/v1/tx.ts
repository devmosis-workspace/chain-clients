import { AdminAccount, AdminAccountAmino, AdminAccountSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgAddAccount {
  signer: string;
  account?: AdminAccount;
}
export interface MsgAddAccountProtoMsg {
  typeUrl: "/sifnode.admin.v1.MsgAddAccount";
  value: Uint8Array;
}
export interface MsgAddAccountAmino {
  signer?: string;
  account?: AdminAccountAmino;
}
export interface MsgAddAccountAminoMsg {
  type: "/sifnode.admin.v1.MsgAddAccount";
  value: MsgAddAccountAmino;
}
export interface MsgAddAccountSDKType {
  signer: string;
  account?: AdminAccountSDKType;
}
export interface MsgAddAccountResponse {}
export interface MsgAddAccountResponseProtoMsg {
  typeUrl: "/sifnode.admin.v1.MsgAddAccountResponse";
  value: Uint8Array;
}
export interface MsgAddAccountResponseAmino {}
export interface MsgAddAccountResponseAminoMsg {
  type: "/sifnode.admin.v1.MsgAddAccountResponse";
  value: MsgAddAccountResponseAmino;
}
export interface MsgAddAccountResponseSDKType {}
export interface MsgRemoveAccount {
  signer: string;
  account?: AdminAccount;
}
export interface MsgRemoveAccountProtoMsg {
  typeUrl: "/sifnode.admin.v1.MsgRemoveAccount";
  value: Uint8Array;
}
export interface MsgRemoveAccountAmino {
  signer?: string;
  account?: AdminAccountAmino;
}
export interface MsgRemoveAccountAminoMsg {
  type: "/sifnode.admin.v1.MsgRemoveAccount";
  value: MsgRemoveAccountAmino;
}
export interface MsgRemoveAccountSDKType {
  signer: string;
  account?: AdminAccountSDKType;
}
export interface MsgRemoveAccountResponse {}
export interface MsgRemoveAccountResponseProtoMsg {
  typeUrl: "/sifnode.admin.v1.MsgRemoveAccountResponse";
  value: Uint8Array;
}
export interface MsgRemoveAccountResponseAmino {}
export interface MsgRemoveAccountResponseAminoMsg {
  type: "/sifnode.admin.v1.MsgRemoveAccountResponse";
  value: MsgRemoveAccountResponseAmino;
}
export interface MsgRemoveAccountResponseSDKType {}
export interface MsgSetParams {
  signer: string;
  params?: Params;
}
export interface MsgSetParamsProtoMsg {
  typeUrl: "/sifnode.admin.v1.MsgSetParams";
  value: Uint8Array;
}
export interface MsgSetParamsAmino {
  signer?: string;
  params?: ParamsAmino;
}
export interface MsgSetParamsAminoMsg {
  type: "/sifnode.admin.v1.MsgSetParams";
  value: MsgSetParamsAmino;
}
export interface MsgSetParamsSDKType {
  signer: string;
  params?: ParamsSDKType;
}
export interface MsgSetParamsResponse {}
export interface MsgSetParamsResponseProtoMsg {
  typeUrl: "/sifnode.admin.v1.MsgSetParamsResponse";
  value: Uint8Array;
}
export interface MsgSetParamsResponseAmino {}
export interface MsgSetParamsResponseAminoMsg {
  type: "/sifnode.admin.v1.MsgSetParamsResponse";
  value: MsgSetParamsResponseAmino;
}
export interface MsgSetParamsResponseSDKType {}
function createBaseMsgAddAccount(): MsgAddAccount {
  return {
    signer: "",
    account: undefined
  };
}
export const MsgAddAccount = {
  typeUrl: "/sifnode.admin.v1.MsgAddAccount",
  encode(message: MsgAddAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgAddAccountAmino): MsgAddAccount {
    const message = createBaseMsgAddAccount();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = AdminAccount.fromAmino(object.account);
    }
    return message;
  },
  toAmino(message: MsgAddAccount): MsgAddAccountAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.account = message.account ? AdminAccount.toAmino(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddAccountAminoMsg): MsgAddAccount {
    return MsgAddAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAccountProtoMsg): MsgAddAccount {
    return MsgAddAccount.decode(message.value);
  },
  toProto(message: MsgAddAccount): Uint8Array {
    return MsgAddAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAccount): MsgAddAccountProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.MsgAddAccount",
      value: MsgAddAccount.encode(message).finish()
    };
  }
};
function createBaseMsgAddAccountResponse(): MsgAddAccountResponse {
  return {};
}
export const MsgAddAccountResponse = {
  typeUrl: "/sifnode.admin.v1.MsgAddAccountResponse",
  encode(_: MsgAddAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddAccountResponse>): MsgAddAccountResponse {
    const message = createBaseMsgAddAccountResponse();
    return message;
  },
  fromAmino(_: MsgAddAccountResponseAmino): MsgAddAccountResponse {
    const message = createBaseMsgAddAccountResponse();
    return message;
  },
  toAmino(_: MsgAddAccountResponse): MsgAddAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddAccountResponseAminoMsg): MsgAddAccountResponse {
    return MsgAddAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAccountResponseProtoMsg): MsgAddAccountResponse {
    return MsgAddAccountResponse.decode(message.value);
  },
  toProto(message: MsgAddAccountResponse): Uint8Array {
    return MsgAddAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAccountResponse): MsgAddAccountResponseProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.MsgAddAccountResponse",
      value: MsgAddAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAccount(): MsgRemoveAccount {
  return {
    signer: "",
    account: undefined
  };
}
export const MsgRemoveAccount = {
  typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
  encode(message: MsgRemoveAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgRemoveAccountAmino): MsgRemoveAccount {
    const message = createBaseMsgRemoveAccount();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = AdminAccount.fromAmino(object.account);
    }
    return message;
  },
  toAmino(message: MsgRemoveAccount): MsgRemoveAccountAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.account = message.account ? AdminAccount.toAmino(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAccountAminoMsg): MsgRemoveAccount {
    return MsgRemoveAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAccountProtoMsg): MsgRemoveAccount {
    return MsgRemoveAccount.decode(message.value);
  },
  toProto(message: MsgRemoveAccount): Uint8Array {
    return MsgRemoveAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAccount): MsgRemoveAccountProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
      value: MsgRemoveAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAccountResponse(): MsgRemoveAccountResponse {
  return {};
}
export const MsgRemoveAccountResponse = {
  typeUrl: "/sifnode.admin.v1.MsgRemoveAccountResponse",
  encode(_: MsgRemoveAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveAccountResponse>): MsgRemoveAccountResponse {
    const message = createBaseMsgRemoveAccountResponse();
    return message;
  },
  fromAmino(_: MsgRemoveAccountResponseAmino): MsgRemoveAccountResponse {
    const message = createBaseMsgRemoveAccountResponse();
    return message;
  },
  toAmino(_: MsgRemoveAccountResponse): MsgRemoveAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAccountResponseAminoMsg): MsgRemoveAccountResponse {
    return MsgRemoveAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAccountResponseProtoMsg): MsgRemoveAccountResponse {
    return MsgRemoveAccountResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAccountResponse): Uint8Array {
    return MsgRemoveAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAccountResponse): MsgRemoveAccountResponseProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.MsgRemoveAccountResponse",
      value: MsgRemoveAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetParams(): MsgSetParams {
  return {
    signer: "",
    params: undefined
  };
}
export const MsgSetParams = {
  typeUrl: "/sifnode.admin.v1.MsgSetParams",
  encode(message: MsgSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgSetParamsAmino): MsgSetParams {
    const message = createBaseMsgSetParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgSetParams): MsgSetParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetParamsAminoMsg): MsgSetParams {
    return MsgSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetParamsProtoMsg): MsgSetParams {
    return MsgSetParams.decode(message.value);
  },
  toProto(message: MsgSetParams): Uint8Array {
    return MsgSetParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetParams): MsgSetParamsProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.MsgSetParams",
      value: MsgSetParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetParamsResponse(): MsgSetParamsResponse {
  return {};
}
export const MsgSetParamsResponse = {
  typeUrl: "/sifnode.admin.v1.MsgSetParamsResponse",
  encode(_: MsgSetParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetParamsResponse>): MsgSetParamsResponse {
    const message = createBaseMsgSetParamsResponse();
    return message;
  },
  fromAmino(_: MsgSetParamsResponseAmino): MsgSetParamsResponse {
    const message = createBaseMsgSetParamsResponse();
    return message;
  },
  toAmino(_: MsgSetParamsResponse): MsgSetParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetParamsResponseAminoMsg): MsgSetParamsResponse {
    return MsgSetParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetParamsResponseProtoMsg): MsgSetParamsResponse {
    return MsgSetParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetParamsResponse): Uint8Array {
    return MsgSetParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetParamsResponse): MsgSetParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.MsgSetParamsResponse",
      value: MsgSetParamsResponse.encode(message).finish()
    };
  }
};