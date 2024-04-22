import { ProposedTokenPrice, ProposedTokenPriceAmino, ProposedTokenPriceSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface SetTokenPricesProposal {
  title: string;
  description: string;
  tokenPrices: ProposedTokenPrice[];
}
export interface SetTokenPricesProposalProtoMsg {
  typeUrl: "/auction.v1.SetTokenPricesProposal";
  value: Uint8Array;
}
export interface SetTokenPricesProposalAmino {
  title?: string;
  description?: string;
  token_prices?: ProposedTokenPriceAmino[];
}
export interface SetTokenPricesProposalAminoMsg {
  type: "/auction.v1.SetTokenPricesProposal";
  value: SetTokenPricesProposalAmino;
}
export interface SetTokenPricesProposalSDKType {
  title: string;
  description: string;
  token_prices: ProposedTokenPriceSDKType[];
}
export interface SetTokenPricesProposalWithDeposit {
  title: string;
  description: string;
  tokenPrices: ProposedTokenPrice[];
  deposit: string;
}
export interface SetTokenPricesProposalWithDepositProtoMsg {
  typeUrl: "/auction.v1.SetTokenPricesProposalWithDeposit";
  value: Uint8Array;
}
export interface SetTokenPricesProposalWithDepositAmino {
  title?: string;
  description?: string;
  token_prices?: ProposedTokenPriceAmino[];
  deposit?: string;
}
export interface SetTokenPricesProposalWithDepositAminoMsg {
  type: "/auction.v1.SetTokenPricesProposalWithDeposit";
  value: SetTokenPricesProposalWithDepositAmino;
}
export interface SetTokenPricesProposalWithDepositSDKType {
  title: string;
  description: string;
  token_prices: ProposedTokenPriceSDKType[];
  deposit: string;
}
function createBaseSetTokenPricesProposal(): SetTokenPricesProposal {
  return {
    title: "",
    description: "",
    tokenPrices: []
  };
}
export const SetTokenPricesProposal = {
  typeUrl: "/auction.v1.SetTokenPricesProposal",
  encode(message: SetTokenPricesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tokenPrices) {
      ProposedTokenPrice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SetTokenPricesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tokenPrices: Array.isArray(object?.tokenPrices) ? object.tokenPrices.map((e: any) => ProposedTokenPrice.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SetTokenPricesProposal>): SetTokenPricesProposal {
    const message = createBaseSetTokenPricesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tokenPrices = object.tokenPrices?.map(e => ProposedTokenPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SetTokenPricesProposalAmino): SetTokenPricesProposal {
    const message = createBaseSetTokenPricesProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.tokenPrices = object.token_prices?.map(e => ProposedTokenPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SetTokenPricesProposal): SetTokenPricesProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map(e => e ? ProposedTokenPrice.toAmino(e) : undefined);
    } else {
      obj.token_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: SetTokenPricesProposalAminoMsg): SetTokenPricesProposal {
    return SetTokenPricesProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SetTokenPricesProposalProtoMsg): SetTokenPricesProposal {
    return SetTokenPricesProposal.decode(message.value);
  },
  toProto(message: SetTokenPricesProposal): Uint8Array {
    return SetTokenPricesProposal.encode(message).finish();
  },
  toProtoMsg(message: SetTokenPricesProposal): SetTokenPricesProposalProtoMsg {
    return {
      typeUrl: "/auction.v1.SetTokenPricesProposal",
      value: SetTokenPricesProposal.encode(message).finish()
    };
  }
};
function createBaseSetTokenPricesProposalWithDeposit(): SetTokenPricesProposalWithDeposit {
  return {
    title: "",
    description: "",
    tokenPrices: [],
    deposit: ""
  };
}
export const SetTokenPricesProposalWithDeposit = {
  typeUrl: "/auction.v1.SetTokenPricesProposalWithDeposit",
  encode(message: SetTokenPricesProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.tokenPrices) {
      ProposedTokenPrice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): SetTokenPricesProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tokenPrices: Array.isArray(object?.tokenPrices) ? object.tokenPrices.map((e: any) => ProposedTokenPrice.fromJSON(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<SetTokenPricesProposalWithDeposit>): SetTokenPricesProposalWithDeposit {
    const message = createBaseSetTokenPricesProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tokenPrices = object.tokenPrices?.map(e => ProposedTokenPrice.fromPartial(e)) || [];
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: SetTokenPricesProposalWithDepositAmino): SetTokenPricesProposalWithDeposit {
    const message = createBaseSetTokenPricesProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.tokenPrices = object.token_prices?.map(e => ProposedTokenPrice.fromAmino(e)) || [];
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: SetTokenPricesProposalWithDeposit): SetTokenPricesProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map(e => e ? ProposedTokenPrice.toAmino(e) : undefined);
    } else {
      obj.token_prices = [];
    }
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: SetTokenPricesProposalWithDepositAminoMsg): SetTokenPricesProposalWithDeposit {
    return SetTokenPricesProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: SetTokenPricesProposalWithDepositProtoMsg): SetTokenPricesProposalWithDeposit {
    return SetTokenPricesProposalWithDeposit.decode(message.value);
  },
  toProto(message: SetTokenPricesProposalWithDeposit): Uint8Array {
    return SetTokenPricesProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: SetTokenPricesProposalWithDeposit): SetTokenPricesProposalWithDepositProtoMsg {
    return {
      typeUrl: "/auction.v1.SetTokenPricesProposalWithDeposit",
      value: SetTokenPricesProposalWithDeposit.encode(message).finish()
    };
  }
};