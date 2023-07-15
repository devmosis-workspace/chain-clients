import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposal {
  title: string;
  description: string;
  amount: Coin[];
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
  payment?: Coin;
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposalSDKType {
  title: string;
  description: string;
  collateral_type: string;
  payment?: CoinSDKType;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposal {
  title: string;
  description: string;
  collateralType: string;
  collateral?: Coin;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposalSDKType {
  title: string;
  description: string;
  collateral_type: string;
  collateral?: CoinSDKType;
}
function createBaseCommunityPoolLendDepositProposal(): CommunityPoolLendDepositProposal {
  return {
    title: "",
    description: "",
    amount: []
  };
}
export const CommunityPoolLendDepositProposal = {
  encode(message: CommunityPoolLendDepositProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: CommunityPoolLendWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCommunityCDPRepayDebtProposal(): CommunityCDPRepayDebtProposal {
  return {
    title: "",
    description: "",
    collateralType: "",
    payment: undefined
  };
}
export const CommunityCDPRepayDebtProposal = {
  encode(message: CommunityCDPRepayDebtProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCommunityCDPWithdrawCollateralProposal(): CommunityCDPWithdrawCollateralProposal {
  return {
    title: "",
    description: "",
    collateralType: "",
    collateral: undefined
  };
}
export const CommunityCDPWithdrawCollateralProposal = {
  encode(message: CommunityCDPWithdrawCollateralProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};