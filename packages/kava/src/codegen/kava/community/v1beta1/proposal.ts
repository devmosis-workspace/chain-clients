import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposal {
  title: string;
  description: string;
  amount: Coin[];
}
export interface CommunityPoolLendDepositProposalProtoMsg {
  typeUrl: "/kava.community.v1beta1.CommunityPoolLendDepositProposal";
  value: Uint8Array;
}
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposalAmino {
  title: string;
  description: string;
  amount: CoinAmino[];
}
export interface CommunityPoolLendDepositProposalAminoMsg {
  type: "/kava.community.v1beta1.CommunityPoolLendDepositProposal";
  value: CommunityPoolLendDepositProposalAmino;
}
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposalSDKType {
  title: string;
  description: string;
  amount: CoinSDKType[];
}
/** CommunityPoolLendWithdrawProposal withdraws a lend position back to the community pool */
export interface CommunityPoolLendWithdrawProposal {
  title: string;
  description: string;
  amount: Coin[];
}
export interface CommunityPoolLendWithdrawProposalProtoMsg {
  typeUrl: "/kava.community.v1beta1.CommunityPoolLendWithdrawProposal";
  value: Uint8Array;
}
/** CommunityPoolLendWithdrawProposal withdraws a lend position back to the community pool */
export interface CommunityPoolLendWithdrawProposalAmino {
  title: string;
  description: string;
  amount: CoinAmino[];
}
export interface CommunityPoolLendWithdrawProposalAminoMsg {
  type: "/kava.community.v1beta1.CommunityPoolLendWithdrawProposal";
  value: CommunityPoolLendWithdrawProposalAmino;
}
/** CommunityPoolLendWithdrawProposal withdraws a lend position back to the community pool */
export interface CommunityPoolLendWithdrawProposalSDKType {
  title: string;
  description: string;
  amount: CoinSDKType[];
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposal {
  title: string;
  description: string;
  collateralType: string;
  payment: Coin;
}
export interface CommunityCDPRepayDebtProposalProtoMsg {
  typeUrl: "/kava.community.v1beta1.CommunityCDPRepayDebtProposal";
  value: Uint8Array;
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposalAmino {
  title: string;
  description: string;
  collateral_type: string;
  payment?: CoinAmino;
}
export interface CommunityCDPRepayDebtProposalAminoMsg {
  type: "/kava.community.v1beta1.CommunityCDPRepayDebtProposal";
  value: CommunityCDPRepayDebtProposalAmino;
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposalSDKType {
  title: string;
  description: string;
  collateral_type: string;
  payment: CoinSDKType;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposal {
  title: string;
  description: string;
  collateralType: string;
  collateral: Coin;
}
export interface CommunityCDPWithdrawCollateralProposalProtoMsg {
  typeUrl: "/kava.community.v1beta1.CommunityCDPWithdrawCollateralProposal";
  value: Uint8Array;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposalAmino {
  title: string;
  description: string;
  collateral_type: string;
  collateral?: CoinAmino;
}
export interface CommunityCDPWithdrawCollateralProposalAminoMsg {
  type: "/kava.community.v1beta1.CommunityCDPWithdrawCollateralProposal";
  value: CommunityCDPWithdrawCollateralProposalAmino;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposalSDKType {
  title: string;
  description: string;
  collateral_type: string;
  collateral: CoinSDKType;
}
function createBaseCommunityPoolLendDepositProposal(): CommunityPoolLendDepositProposal {
  return {
    title: "",
    description: "",
    amount: []
  };
}
export const CommunityPoolLendDepositProposal = {
  typeUrl: "/kava.community.v1beta1.CommunityPoolLendDepositProposal",
  encode(message: CommunityPoolLendDepositProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolLendDepositProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CommunityPoolLendDepositProposal>): CommunityPoolLendDepositProposal {
    const message = createBaseCommunityPoolLendDepositProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolLendDepositProposalAmino): CommunityPoolLendDepositProposal {
    return {
      title: object.title,
      description: object.description,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CommunityPoolLendDepositProposal): CommunityPoolLendDepositProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolLendDepositProposalAminoMsg): CommunityPoolLendDepositProposal {
    return CommunityPoolLendDepositProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolLendDepositProposalProtoMsg): CommunityPoolLendDepositProposal {
    return CommunityPoolLendDepositProposal.decode(message.value);
  },
  toProto(message: CommunityPoolLendDepositProposal): Uint8Array {
    return CommunityPoolLendDepositProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolLendDepositProposal): CommunityPoolLendDepositProposalProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.CommunityPoolLendDepositProposal",
      value: CommunityPoolLendDepositProposal.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolLendWithdrawProposal(): CommunityPoolLendWithdrawProposal {
  return {
    title: "",
    description: "",
    amount: []
  };
}
export const CommunityPoolLendWithdrawProposal = {
  typeUrl: "/kava.community.v1beta1.CommunityPoolLendWithdrawProposal",
  encode(message: CommunityPoolLendWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityPoolLendWithdrawProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CommunityPoolLendWithdrawProposal>): CommunityPoolLendWithdrawProposal {
    const message = createBaseCommunityPoolLendWithdrawProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolLendWithdrawProposalAmino): CommunityPoolLendWithdrawProposal {
    return {
      title: object.title,
      description: object.description,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CommunityPoolLendWithdrawProposal): CommunityPoolLendWithdrawProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolLendWithdrawProposalAminoMsg): CommunityPoolLendWithdrawProposal {
    return CommunityPoolLendWithdrawProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolLendWithdrawProposalProtoMsg): CommunityPoolLendWithdrawProposal {
    return CommunityPoolLendWithdrawProposal.decode(message.value);
  },
  toProto(message: CommunityPoolLendWithdrawProposal): Uint8Array {
    return CommunityPoolLendWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolLendWithdrawProposal): CommunityPoolLendWithdrawProposalProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.CommunityPoolLendWithdrawProposal",
      value: CommunityPoolLendWithdrawProposal.encode(message).finish()
    };
  }
};
function createBaseCommunityCDPRepayDebtProposal(): CommunityCDPRepayDebtProposal {
  return {
    title: "",
    description: "",
    collateralType: "",
    payment: Coin.fromPartial({})
  };
}
export const CommunityCDPRepayDebtProposal = {
  typeUrl: "/kava.community.v1beta1.CommunityCDPRepayDebtProposal",
  encode(message: CommunityCDPRepayDebtProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.collateralType !== "") {
      writer.uint32(26).string(message.collateralType);
    }
    if (message.payment !== undefined) {
      Coin.encode(message.payment, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityCDPRepayDebtProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      payment: isSet(object.payment) ? Coin.fromJSON(object.payment) : undefined
    };
  },
  fromPartial(object: Partial<CommunityCDPRepayDebtProposal>): CommunityCDPRepayDebtProposal {
    const message = createBaseCommunityCDPRepayDebtProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.collateralType = object.collateralType ?? "";
    message.payment = object.payment !== undefined && object.payment !== null ? Coin.fromPartial(object.payment) : undefined;
    return message;
  },
  fromAmino(object: CommunityCDPRepayDebtProposalAmino): CommunityCDPRepayDebtProposal {
    return {
      title: object.title,
      description: object.description,
      collateralType: object.collateral_type,
      payment: object?.payment ? Coin.fromAmino(object.payment) : undefined
    };
  },
  toAmino(message: CommunityCDPRepayDebtProposal): CommunityCDPRepayDebtProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.collateral_type = message.collateralType;
    obj.payment = message.payment ? Coin.toAmino(message.payment) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommunityCDPRepayDebtProposalAminoMsg): CommunityCDPRepayDebtProposal {
    return CommunityCDPRepayDebtProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityCDPRepayDebtProposalProtoMsg): CommunityCDPRepayDebtProposal {
    return CommunityCDPRepayDebtProposal.decode(message.value);
  },
  toProto(message: CommunityCDPRepayDebtProposal): Uint8Array {
    return CommunityCDPRepayDebtProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityCDPRepayDebtProposal): CommunityCDPRepayDebtProposalProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.CommunityCDPRepayDebtProposal",
      value: CommunityCDPRepayDebtProposal.encode(message).finish()
    };
  }
};
function createBaseCommunityCDPWithdrawCollateralProposal(): CommunityCDPWithdrawCollateralProposal {
  return {
    title: "",
    description: "",
    collateralType: "",
    collateral: Coin.fromPartial({})
  };
}
export const CommunityCDPWithdrawCollateralProposal = {
  typeUrl: "/kava.community.v1beta1.CommunityCDPWithdrawCollateralProposal",
  encode(message: CommunityCDPWithdrawCollateralProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.collateralType !== "") {
      writer.uint32(26).string(message.collateralType);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommunityCDPWithdrawCollateralProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined
    };
  },
  fromPartial(object: Partial<CommunityCDPWithdrawCollateralProposal>): CommunityCDPWithdrawCollateralProposal {
    const message = createBaseCommunityCDPWithdrawCollateralProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.collateralType = object.collateralType ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    return message;
  },
  fromAmino(object: CommunityCDPWithdrawCollateralProposalAmino): CommunityCDPWithdrawCollateralProposal {
    return {
      title: object.title,
      description: object.description,
      collateralType: object.collateral_type,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined
    };
  },
  toAmino(message: CommunityCDPWithdrawCollateralProposal): CommunityCDPWithdrawCollateralProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.collateral_type = message.collateralType;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommunityCDPWithdrawCollateralProposalAminoMsg): CommunityCDPWithdrawCollateralProposal {
    return CommunityCDPWithdrawCollateralProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityCDPWithdrawCollateralProposalProtoMsg): CommunityCDPWithdrawCollateralProposal {
    return CommunityCDPWithdrawCollateralProposal.decode(message.value);
  },
  toProto(message: CommunityCDPWithdrawCollateralProposal): Uint8Array {
    return CommunityCDPWithdrawCollateralProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityCDPWithdrawCollateralProposal): CommunityCDPWithdrawCollateralProposalProtoMsg {
    return {
      typeUrl: "/kava.community.v1beta1.CommunityCDPWithdrawCollateralProposal",
      value: CommunityCDPWithdrawCollateralProposal.encode(message).finish()
    };
  }
};