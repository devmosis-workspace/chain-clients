import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
  encode(message: CommunityPoolMultiSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: CommunityPoolMultiSpendProposalJSON, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMultiSpendRecipient(): MultiSpendRecipient {
  return {
    address: "",
    amount: []
  };
}
export const MultiSpendRecipient = {
  encode(message: MultiSpendRecipient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};