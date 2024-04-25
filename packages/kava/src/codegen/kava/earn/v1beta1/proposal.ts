import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposal {
  title: string;
  description: string;
  amount: Coin;
}
export interface CommunityPoolDepositProposalProtoMsg {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposal";
  value: Uint8Array;
}
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposalAmino {
  title?: string;
  description?: string;
  amount?: CoinAmino;
}
export interface CommunityPoolDepositProposalAminoMsg {
  type: "/kava.earn.v1beta1.CommunityPoolDepositProposal";
  value: CommunityPoolDepositProposalAmino;
}
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposalSDKType {
  title: string;
  description: string;
  amount: CoinSDKType;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSON {
  title: string;
  description: string;
  amount: Coin;
  deposit: Coin[];
}
export interface CommunityPoolDepositProposalJSONProtoMsg {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposalJSON";
  value: Uint8Array;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSONAmino {
  title?: string;
  description?: string;
  amount?: CoinAmino;
  deposit?: CoinAmino[];
}
export interface CommunityPoolDepositProposalJSONAminoMsg {
  type: "/kava.earn.v1beta1.CommunityPoolDepositProposalJSON";
  value: CommunityPoolDepositProposalJSONAmino;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSONSDKType {
  title: string;
  description: string;
  amount: CoinSDKType;
  deposit: CoinSDKType[];
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposal {
  title: string;
  description: string;
  amount: Coin;
}
export interface CommunityPoolWithdrawProposalProtoMsg {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposal";
  value: Uint8Array;
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposalAmino {
  title?: string;
  description?: string;
  amount?: CoinAmino;
}
export interface CommunityPoolWithdrawProposalAminoMsg {
  type: "/kava.earn.v1beta1.CommunityPoolWithdrawProposal";
  value: CommunityPoolWithdrawProposalAmino;
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposalSDKType {
  title: string;
  description: string;
  amount: CoinSDKType;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSON {
  title: string;
  description: string;
  amount: Coin;
  deposit: Coin[];
}
export interface CommunityPoolWithdrawProposalJSONProtoMsg {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposalJSON";
  value: Uint8Array;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSONAmino {
  title?: string;
  description?: string;
  amount?: CoinAmino;
  deposit?: CoinAmino[];
}
export interface CommunityPoolWithdrawProposalJSONAminoMsg {
  type: "/kava.earn.v1beta1.CommunityPoolWithdrawProposalJSON";
  value: CommunityPoolWithdrawProposalJSONAmino;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSONSDKType {
  title: string;
  description: string;
  amount: CoinSDKType;
  deposit: CoinSDKType[];
}
function createBaseCommunityPoolDepositProposal(): CommunityPoolDepositProposal {
  return {
    title: "",
    description: "",
    amount: Coin.fromPartial({})
  };
}
export const CommunityPoolDepositProposal = {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposal",
  encode(message: CommunityPoolDepositProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolDepositProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<CommunityPoolDepositProposal>): CommunityPoolDepositProposal {
    const message = createBaseCommunityPoolDepositProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: CommunityPoolDepositProposalAmino): CommunityPoolDepositProposal {
    const message = createBaseCommunityPoolDepositProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: CommunityPoolDepositProposal): CommunityPoolDepositProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommunityPoolDepositProposalAminoMsg): CommunityPoolDepositProposal {
    return CommunityPoolDepositProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolDepositProposalProtoMsg): CommunityPoolDepositProposal {
    return CommunityPoolDepositProposal.decode(message.value);
  },
  toProto(message: CommunityPoolDepositProposal): Uint8Array {
    return CommunityPoolDepositProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolDepositProposal): CommunityPoolDepositProposalProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposal",
      value: CommunityPoolDepositProposal.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolDepositProposalJSON(): CommunityPoolDepositProposalJSON {
  return {
    title: "",
    description: "",
    amount: Coin.fromPartial({}),
    deposit: []
  };
}
export const CommunityPoolDepositProposalJSON = {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposalJSON",
  encode(message: CommunityPoolDepositProposalJSON, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolDepositProposalJSON {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CommunityPoolDepositProposalJSON>): CommunityPoolDepositProposalJSON {
    const message = createBaseCommunityPoolDepositProposalJSON();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolDepositProposalJSONAmino): CommunityPoolDepositProposalJSON {
    const message = createBaseCommunityPoolDepositProposalJSON();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    message.deposit = object.deposit?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommunityPoolDepositProposalJSON): CommunityPoolDepositProposalJSONAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolDepositProposalJSONAminoMsg): CommunityPoolDepositProposalJSON {
    return CommunityPoolDepositProposalJSON.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolDepositProposalJSONProtoMsg): CommunityPoolDepositProposalJSON {
    return CommunityPoolDepositProposalJSON.decode(message.value);
  },
  toProto(message: CommunityPoolDepositProposalJSON): Uint8Array {
    return CommunityPoolDepositProposalJSON.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolDepositProposalJSON): CommunityPoolDepositProposalJSONProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposalJSON",
      value: CommunityPoolDepositProposalJSON.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolWithdrawProposal(): CommunityPoolWithdrawProposal {
  return {
    title: "",
    description: "",
    amount: Coin.fromPartial({})
  };
}
export const CommunityPoolWithdrawProposal = {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposal",
  encode(message: CommunityPoolWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolWithdrawProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<CommunityPoolWithdrawProposal>): CommunityPoolWithdrawProposal {
    const message = createBaseCommunityPoolWithdrawProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: CommunityPoolWithdrawProposalAmino): CommunityPoolWithdrawProposal {
    const message = createBaseCommunityPoolWithdrawProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: CommunityPoolWithdrawProposal): CommunityPoolWithdrawProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommunityPoolWithdrawProposalAminoMsg): CommunityPoolWithdrawProposal {
    return CommunityPoolWithdrawProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolWithdrawProposalProtoMsg): CommunityPoolWithdrawProposal {
    return CommunityPoolWithdrawProposal.decode(message.value);
  },
  toProto(message: CommunityPoolWithdrawProposal): Uint8Array {
    return CommunityPoolWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolWithdrawProposal): CommunityPoolWithdrawProposalProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposal",
      value: CommunityPoolWithdrawProposal.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolWithdrawProposalJSON(): CommunityPoolWithdrawProposalJSON {
  return {
    title: "",
    description: "",
    amount: Coin.fromPartial({}),
    deposit: []
  };
}
export const CommunityPoolWithdrawProposalJSON = {
  typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposalJSON",
  encode(message: CommunityPoolWithdrawProposalJSON, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolWithdrawProposalJSON {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CommunityPoolWithdrawProposalJSON>): CommunityPoolWithdrawProposalJSON {
    const message = createBaseCommunityPoolWithdrawProposalJSON();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolWithdrawProposalJSONAmino): CommunityPoolWithdrawProposalJSON {
    const message = createBaseCommunityPoolWithdrawProposalJSON();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    message.deposit = object.deposit?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommunityPoolWithdrawProposalJSON): CommunityPoolWithdrawProposalJSONAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolWithdrawProposalJSONAminoMsg): CommunityPoolWithdrawProposalJSON {
    return CommunityPoolWithdrawProposalJSON.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolWithdrawProposalJSONProtoMsg): CommunityPoolWithdrawProposalJSON {
    return CommunityPoolWithdrawProposalJSON.decode(message.value);
  },
  toProto(message: CommunityPoolWithdrawProposalJSON): Uint8Array {
    return CommunityPoolWithdrawProposalJSON.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolWithdrawProposalJSON): CommunityPoolWithdrawProposalJSONProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposalJSON",
      value: CommunityPoolWithdrawProposalJSON.encode(message).finish()
    };
  }
};