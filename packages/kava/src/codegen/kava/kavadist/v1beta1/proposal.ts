import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposal {
  title: string;
  description: string;
  recipientList: MultiSpendRecipient[];
}
export interface CommunityPoolMultiSpendProposalProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal";
  value: Uint8Array;
}
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposalAmino {
  title?: string;
  description?: string;
  recipient_list?: MultiSpendRecipientAmino[];
}
export interface CommunityPoolMultiSpendProposalAminoMsg {
  type: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal";
  value: CommunityPoolMultiSpendProposalAmino;
}
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposalSDKType {
  title: string;
  description: string;
  recipient_list: MultiSpendRecipientSDKType[];
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSON {
  title: string;
  description: string;
  recipientList: MultiSpendRecipient[];
  deposit: Coin[];
}
export interface CommunityPoolMultiSpendProposalJSONProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON";
  value: Uint8Array;
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSONAmino {
  title?: string;
  description?: string;
  recipient_list?: MultiSpendRecipientAmino[];
  deposit?: CoinAmino[];
}
export interface CommunityPoolMultiSpendProposalJSONAminoMsg {
  type: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON";
  value: CommunityPoolMultiSpendProposalJSONAmino;
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSONSDKType {
  title: string;
  description: string;
  recipient_list: MultiSpendRecipientSDKType[];
  deposit: CoinSDKType[];
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipient {
  address: string;
  amount: Coin[];
}
export interface MultiSpendRecipientProtoMsg {
  typeUrl: "/kava.kavadist.v1beta1.MultiSpendRecipient";
  value: Uint8Array;
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipientAmino {
  address?: string;
  amount?: CoinAmino[];
}
export interface MultiSpendRecipientAminoMsg {
  type: "/kava.kavadist.v1beta1.MultiSpendRecipient";
  value: MultiSpendRecipientAmino;
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipientSDKType {
  address: string;
  amount: CoinSDKType[];
}
function createBaseCommunityPoolMultiSpendProposal(): CommunityPoolMultiSpendProposal {
  return {
    title: "",
    description: "",
    recipientList: []
  };
}
export const CommunityPoolMultiSpendProposal = {
  typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal",
  encode(message: CommunityPoolMultiSpendProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.recipientList) {
      MultiSpendRecipient.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolMultiSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipientList: Array.isArray(object?.recipientList) ? object.recipientList.map((e: any) => MultiSpendRecipient.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CommunityPoolMultiSpendProposal>): CommunityPoolMultiSpendProposal {
    const message = createBaseCommunityPoolMultiSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipientList = object.recipientList?.map(e => MultiSpendRecipient.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolMultiSpendProposalAmino): CommunityPoolMultiSpendProposal {
    const message = createBaseCommunityPoolMultiSpendProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.recipientList = object.recipient_list?.map(e => MultiSpendRecipient.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommunityPoolMultiSpendProposal): CommunityPoolMultiSpendProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.recipientList) {
      obj.recipient_list = message.recipientList.map(e => e ? MultiSpendRecipient.toAmino(e) : undefined);
    } else {
      obj.recipient_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolMultiSpendProposalAminoMsg): CommunityPoolMultiSpendProposal {
    return CommunityPoolMultiSpendProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolMultiSpendProposalProtoMsg): CommunityPoolMultiSpendProposal {
    return CommunityPoolMultiSpendProposal.decode(message.value);
  },
  toProto(message: CommunityPoolMultiSpendProposal): Uint8Array {
    return CommunityPoolMultiSpendProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolMultiSpendProposal): CommunityPoolMultiSpendProposalProtoMsg {
    return {
      typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal",
      value: CommunityPoolMultiSpendProposal.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolMultiSpendProposalJSON(): CommunityPoolMultiSpendProposalJSON {
  return {
    title: "",
    description: "",
    recipientList: [],
    deposit: []
  };
}
export const CommunityPoolMultiSpendProposalJSON = {
  typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON",
  encode(message: CommunityPoolMultiSpendProposalJSON, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.recipientList) {
      MultiSpendRecipient.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolMultiSpendProposalJSON {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipientList: Array.isArray(object?.recipientList) ? object.recipientList.map((e: any) => MultiSpendRecipient.fromJSON(e)) : [],
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CommunityPoolMultiSpendProposalJSON>): CommunityPoolMultiSpendProposalJSON {
    const message = createBaseCommunityPoolMultiSpendProposalJSON();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipientList = object.recipientList?.map(e => MultiSpendRecipient.fromPartial(e)) || [];
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolMultiSpendProposalJSONAmino): CommunityPoolMultiSpendProposalJSON {
    const message = createBaseCommunityPoolMultiSpendProposalJSON();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.recipientList = object.recipient_list?.map(e => MultiSpendRecipient.fromAmino(e)) || [];
    message.deposit = object.deposit?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommunityPoolMultiSpendProposalJSON): CommunityPoolMultiSpendProposalJSONAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.recipientList) {
      obj.recipient_list = message.recipientList.map(e => e ? MultiSpendRecipient.toAmino(e) : undefined);
    } else {
      obj.recipient_list = [];
    }
    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolMultiSpendProposalJSONAminoMsg): CommunityPoolMultiSpendProposalJSON {
    return CommunityPoolMultiSpendProposalJSON.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolMultiSpendProposalJSONProtoMsg): CommunityPoolMultiSpendProposalJSON {
    return CommunityPoolMultiSpendProposalJSON.decode(message.value);
  },
  toProto(message: CommunityPoolMultiSpendProposalJSON): Uint8Array {
    return CommunityPoolMultiSpendProposalJSON.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolMultiSpendProposalJSON): CommunityPoolMultiSpendProposalJSONProtoMsg {
    return {
      typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON",
      value: CommunityPoolMultiSpendProposalJSON.encode(message).finish()
    };
  }
};
function createBaseMultiSpendRecipient(): MultiSpendRecipient {
  return {
    address: "",
    amount: []
  };
}
export const MultiSpendRecipient = {
  typeUrl: "/kava.kavadist.v1beta1.MultiSpendRecipient",
  encode(message: MultiSpendRecipient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MultiSpendRecipient {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MultiSpendRecipient>): MultiSpendRecipient {
    const message = createBaseMultiSpendRecipient();
    message.address = object.address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MultiSpendRecipientAmino): MultiSpendRecipient {
    const message = createBaseMultiSpendRecipient();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MultiSpendRecipient): MultiSpendRecipientAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MultiSpendRecipientAminoMsg): MultiSpendRecipient {
    return MultiSpendRecipient.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiSpendRecipientProtoMsg): MultiSpendRecipient {
    return MultiSpendRecipient.decode(message.value);
  },
  toProto(message: MultiSpendRecipient): Uint8Array {
    return MultiSpendRecipient.encode(message).finish();
  },
  toProtoMsg(message: MultiSpendRecipient): MultiSpendRecipientProtoMsg {
    return {
      typeUrl: "/kava.kavadist.v1beta1.MultiSpendRecipient",
      value: MultiSpendRecipient.encode(message).finish()
    };
  }
};