import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDP {
  sender: string;
  collateral?: Coin;
  principal?: Coin;
  collateralType: string;
}
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDPSDKType {
  sender: string;
  collateral?: CoinSDKType;
  principal?: CoinSDKType;
  collateral_type: string;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponse {
  cdpId: Long;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponseSDKType {
  cdp_id: Long;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDeposit {
  depositor: string;
  owner: string;
  collateral?: Coin;
  collateralType: string;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDepositSDKType {
  depositor: string;
  owner: string;
  collateral?: CoinSDKType;
  collateral_type: string;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdraw {
  depositor: string;
  owner: string;
  collateral?: Coin;
  collateralType: string;
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdrawSDKType {
  depositor: string;
  owner: string;
  collateral?: CoinSDKType;
  collateral_type: string;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebt {
  sender: string;
  collateralType: string;
  principal?: Coin;
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebtSDKType {
  sender: string;
  collateral_type: string;
  principal?: CoinSDKType;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponse {}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponseSDKType {}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebt {
  sender: string;
  collateralType: string;
  payment?: Coin;
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebtSDKType {
  sender: string;
  collateral_type: string;
  payment?: CoinSDKType;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponse {}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponseSDKType {}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidate {
  keeper: string;
  borrower: string;
  collateralType: string;
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidateSDKType {
  keeper: string;
  borrower: string;
  collateral_type: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {}
function createBaseMsgCreateCDP(): MsgCreateCDP {
  return {
    sender: "",
    collateral: undefined,
    principal: undefined,
    collateralType: ""
  };
}
export const MsgCreateCDP = {
  encode(message: MsgCreateCDP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(34).string(message.collateralType);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCDP {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateCDP>): MsgCreateCDP {
    const message = createBaseMsgCreateCDP();
    message.sender = object.sender ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.principal = object.principal !== undefined && object.principal !== null ? Coin.fromPartial(object.principal) : undefined;
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgCreateCDPResponse(): MsgCreateCDPResponse {
  return {
    cdpId: Long.UZERO
  };
}
export const MsgCreateCDPResponse = {
  encode(message: MsgCreateCDPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cdpId.isZero()) {
      writer.uint32(8).uint64(message.cdpId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCDPResponse {
    return {
      cdpId: isSet(object.cdpId) ? Long.fromValue(object.cdpId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateCDPResponse>): MsgCreateCDPResponse {
    const message = createBaseMsgCreateCDPResponse();
    message.cdpId = object.cdpId !== undefined && object.cdpId !== null ? Long.fromValue(object.cdpId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    owner: "",
    collateral: undefined,
    collateralType: ""
  };
}
export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(34).string(message.collateralType);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.owner = object.owner ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    depositor: "",
    owner: "",
    collateral: undefined,
    collateralType: ""
  };
}
export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(34).string(message.collateralType);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.depositor = object.depositor ?? "";
    message.owner = object.owner ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }
};
function createBaseMsgDrawDebt(): MsgDrawDebt {
  return {
    sender: "",
    collateralType: "",
    principal: undefined
  };
}
export const MsgDrawDebt = {
  encode(message: MsgDrawDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDrawDebt {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined
    };
  },
  fromPartial(object: Partial<MsgDrawDebt>): MsgDrawDebt {
    const message = createBaseMsgDrawDebt();
    message.sender = object.sender ?? "";
    message.collateralType = object.collateralType ?? "";
    message.principal = object.principal !== undefined && object.principal !== null ? Coin.fromPartial(object.principal) : undefined;
    return message;
  }
};
function createBaseMsgDrawDebtResponse(): MsgDrawDebtResponse {
  return {};
}
export const MsgDrawDebtResponse = {
  encode(_: MsgDrawDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDrawDebtResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDrawDebtResponse>): MsgDrawDebtResponse {
    const message = createBaseMsgDrawDebtResponse();
    return message;
  }
};
function createBaseMsgRepayDebt(): MsgRepayDebt {
  return {
    sender: "",
    collateralType: "",
    payment: undefined
  };
}
export const MsgRepayDebt = {
  encode(message: MsgRepayDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.payment !== undefined) {
      Coin.encode(message.payment, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRepayDebt {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      payment: isSet(object.payment) ? Coin.fromJSON(object.payment) : undefined
    };
  },
  fromPartial(object: Partial<MsgRepayDebt>): MsgRepayDebt {
    const message = createBaseMsgRepayDebt();
    message.sender = object.sender ?? "";
    message.collateralType = object.collateralType ?? "";
    message.payment = object.payment !== undefined && object.payment !== null ? Coin.fromPartial(object.payment) : undefined;
    return message;
  }
};
function createBaseMsgRepayDebtResponse(): MsgRepayDebtResponse {
  return {};
}
export const MsgRepayDebtResponse = {
  encode(_: MsgRepayDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRepayDebtResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRepayDebtResponse>): MsgRepayDebtResponse {
    const message = createBaseMsgRepayDebtResponse();
    return message;
  }
};
function createBaseMsgLiquidate(): MsgLiquidate {
  return {
    keeper: "",
    borrower: "",
    collateralType: ""
  };
}
export const MsgLiquidate = {
  encode(message: MsgLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keeper !== "") {
      writer.uint32(10).string(message.keeper);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.collateralType !== "") {
      writer.uint32(26).string(message.collateralType);
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidate {
    return {
      keeper: isSet(object.keeper) ? String(object.keeper) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },
  fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.keeper = object.keeper ?? "";
    message.borrower = object.borrower ?? "";
    message.collateralType = object.collateralType ?? "";
    return message;
  }
};
function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {};
}
export const MsgLiquidateResponse = {
  encode(_: MsgLiquidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgLiquidateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    return message;
  }
};