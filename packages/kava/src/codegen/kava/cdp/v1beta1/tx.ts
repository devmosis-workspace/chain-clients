import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDP {
  sender: string;
  collateral: Coin;
  principal: Coin;
  collateralType: string;
}
export interface MsgCreateCDPProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP";
  value: Uint8Array;
}
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDPAmino {
  sender: string;
  collateral?: CoinAmino;
  principal?: CoinAmino;
  collateral_type: string;
}
export interface MsgCreateCDPAminoMsg {
  type: "/kava.cdp.v1beta1.MsgCreateCDP";
  value: MsgCreateCDPAmino;
}
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDPSDKType {
  sender: string;
  collateral: CoinSDKType;
  principal: CoinSDKType;
  collateral_type: string;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponse {
  cdpId: bigint;
}
export interface MsgCreateCDPResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgCreateCDPResponse";
  value: Uint8Array;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponseAmino {
  cdp_id: string;
}
export interface MsgCreateCDPResponseAminoMsg {
  type: "/kava.cdp.v1beta1.MsgCreateCDPResponse";
  value: MsgCreateCDPResponseAmino;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponseSDKType {
  cdp_id: bigint;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDeposit {
  depositor: string;
  owner: string;
  collateral: Coin;
  collateralType: string;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDepositAmino {
  depositor: string;
  owner: string;
  collateral?: CoinAmino;
  collateral_type: string;
}
export interface MsgDepositAminoMsg {
  type: "/kava.cdp.v1beta1.MsgDeposit";
  value: MsgDepositAmino;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDepositSDKType {
  depositor: string;
  owner: string;
  collateral: CoinSDKType;
  collateral_type: string;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "/kava.cdp.v1beta1.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdraw {
  depositor: string;
  owner: string;
  collateral: Coin;
  collateralType: string;
}
export interface MsgWithdrawProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgWithdraw";
  value: Uint8Array;
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdrawAmino {
  depositor: string;
  owner: string;
  collateral?: CoinAmino;
  collateral_type: string;
}
export interface MsgWithdrawAminoMsg {
  type: "/kava.cdp.v1beta1.MsgWithdraw";
  value: MsgWithdrawAmino;
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdrawSDKType {
  depositor: string;
  owner: string;
  collateral: CoinSDKType;
  collateral_type: string;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgWithdrawResponse";
  value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {}
export interface MsgWithdrawResponseAminoMsg {
  type: "/kava.cdp.v1beta1.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebt {
  sender: string;
  collateralType: string;
  principal: Coin;
}
export interface MsgDrawDebtProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt";
  value: Uint8Array;
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebtAmino {
  sender: string;
  collateral_type: string;
  principal?: CoinAmino;
}
export interface MsgDrawDebtAminoMsg {
  type: "/kava.cdp.v1beta1.MsgDrawDebt";
  value: MsgDrawDebtAmino;
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebtSDKType {
  sender: string;
  collateral_type: string;
  principal: CoinSDKType;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponse {}
export interface MsgDrawDebtResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgDrawDebtResponse";
  value: Uint8Array;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponseAmino {}
export interface MsgDrawDebtResponseAminoMsg {
  type: "/kava.cdp.v1beta1.MsgDrawDebtResponse";
  value: MsgDrawDebtResponseAmino;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponseSDKType {}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebt {
  sender: string;
  collateralType: string;
  payment: Coin;
}
export interface MsgRepayDebtProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt";
  value: Uint8Array;
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebtAmino {
  sender: string;
  collateral_type: string;
  payment?: CoinAmino;
}
export interface MsgRepayDebtAminoMsg {
  type: "/kava.cdp.v1beta1.MsgRepayDebt";
  value: MsgRepayDebtAmino;
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebtSDKType {
  sender: string;
  collateral_type: string;
  payment: CoinSDKType;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponse {}
export interface MsgRepayDebtResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgRepayDebtResponse";
  value: Uint8Array;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponseAmino {}
export interface MsgRepayDebtResponseAminoMsg {
  type: "/kava.cdp.v1beta1.MsgRepayDebtResponse";
  value: MsgRepayDebtResponseAmino;
}
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
export interface MsgLiquidateProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgLiquidate";
  value: Uint8Array;
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidateAmino {
  keeper: string;
  borrower: string;
  collateral_type: string;
}
export interface MsgLiquidateAminoMsg {
  type: "/kava.cdp.v1beta1.MsgLiquidate";
  value: MsgLiquidateAmino;
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
export interface MsgLiquidateResponseProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.MsgLiquidateResponse";
  value: Uint8Array;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseAmino {}
export interface MsgLiquidateResponseAminoMsg {
  type: "/kava.cdp.v1beta1.MsgLiquidateResponse";
  value: MsgLiquidateResponseAmino;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {}
function createBaseMsgCreateCDP(): MsgCreateCDP {
  return {
    sender: "",
    collateral: Coin.fromPartial({}),
    principal: Coin.fromPartial({}),
    collateralType: ""
  };
}
export const MsgCreateCDP = {
  typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP",
  encode(message: MsgCreateCDP, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateCDPAmino): MsgCreateCDP {
    return {
      sender: object.sender,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      principal: object?.principal ? Coin.fromAmino(object.principal) : undefined,
      collateralType: object.collateral_type
    };
  },
  toAmino(message: MsgCreateCDP): MsgCreateCDPAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.principal = message.principal ? Coin.toAmino(message.principal) : undefined;
    obj.collateral_type = message.collateralType;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCDPAminoMsg): MsgCreateCDP {
    return MsgCreateCDP.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCDPProtoMsg): MsgCreateCDP {
    return MsgCreateCDP.decode(message.value);
  },
  toProto(message: MsgCreateCDP): Uint8Array {
    return MsgCreateCDP.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCDP): MsgCreateCDPProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP",
      value: MsgCreateCDP.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCDPResponse(): MsgCreateCDPResponse {
  return {
    cdpId: BigInt(0)
  };
}
export const MsgCreateCDPResponse = {
  typeUrl: "/kava.cdp.v1beta1.MsgCreateCDPResponse",
  encode(message: MsgCreateCDPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cdpId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cdpId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCDPResponse {
    return {
      cdpId: isSet(object.cdpId) ? BigInt(object.cdpId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateCDPResponse>): MsgCreateCDPResponse {
    const message = createBaseMsgCreateCDPResponse();
    message.cdpId = object.cdpId !== undefined && object.cdpId !== null ? BigInt(object.cdpId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateCDPResponseAmino): MsgCreateCDPResponse {
    return {
      cdpId: BigInt(object.cdp_id)
    };
  },
  toAmino(message: MsgCreateCDPResponse): MsgCreateCDPResponseAmino {
    const obj: any = {};
    obj.cdp_id = message.cdpId ? message.cdpId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCDPResponseAminoMsg): MsgCreateCDPResponse {
    return MsgCreateCDPResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCDPResponseProtoMsg): MsgCreateCDPResponse {
    return MsgCreateCDPResponse.decode(message.value);
  },
  toProto(message: MsgCreateCDPResponse): Uint8Array {
    return MsgCreateCDPResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCDPResponse): MsgCreateCDPResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgCreateCDPResponse",
      value: MsgCreateCDPResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    owner: "",
    collateral: Coin.fromPartial({}),
    collateralType: ""
  };
}
export const MsgDeposit = {
  typeUrl: "/kava.cdp.v1beta1.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    return {
      depositor: object.depositor,
      owner: object.owner,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      collateralType: object.collateral_type
    };
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    obj.owner = message.owner;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.collateral_type = message.collateralType;
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/kava.cdp.v1beta1.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    return {};
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    depositor: "",
    owner: "",
    collateral: Coin.fromPartial({}),
    collateralType: ""
  };
}
export const MsgWithdraw = {
  typeUrl: "/kava.cdp.v1beta1.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    return {
      depositor: object.depositor,
      owner: object.owner,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      collateralType: object.collateral_type
    };
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    obj.owner = message.owner;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.collateral_type = message.collateralType;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
    return MsgWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
    return MsgWithdraw.decode(message.value);
  },
  toProto(message: MsgWithdraw): Uint8Array {
    return MsgWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  typeUrl: "/kava.cdp.v1beta1.MsgWithdrawResponse",
  encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    return {};
  },
  toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDrawDebt(): MsgDrawDebt {
  return {
    sender: "",
    collateralType: "",
    principal: Coin.fromPartial({})
  };
}
export const MsgDrawDebt = {
  typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt",
  encode(message: MsgDrawDebt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgDrawDebtAmino): MsgDrawDebt {
    return {
      sender: object.sender,
      collateralType: object.collateral_type,
      principal: object?.principal ? Coin.fromAmino(object.principal) : undefined
    };
  },
  toAmino(message: MsgDrawDebt): MsgDrawDebtAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.collateral_type = message.collateralType;
    obj.principal = message.principal ? Coin.toAmino(message.principal) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDrawDebtAminoMsg): MsgDrawDebt {
    return MsgDrawDebt.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDrawDebtProtoMsg): MsgDrawDebt {
    return MsgDrawDebt.decode(message.value);
  },
  toProto(message: MsgDrawDebt): Uint8Array {
    return MsgDrawDebt.encode(message).finish();
  },
  toProtoMsg(message: MsgDrawDebt): MsgDrawDebtProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt",
      value: MsgDrawDebt.encode(message).finish()
    };
  }
};
function createBaseMsgDrawDebtResponse(): MsgDrawDebtResponse {
  return {};
}
export const MsgDrawDebtResponse = {
  typeUrl: "/kava.cdp.v1beta1.MsgDrawDebtResponse",
  encode(_: MsgDrawDebtResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDrawDebtResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDrawDebtResponse>): MsgDrawDebtResponse {
    const message = createBaseMsgDrawDebtResponse();
    return message;
  },
  fromAmino(_: MsgDrawDebtResponseAmino): MsgDrawDebtResponse {
    return {};
  },
  toAmino(_: MsgDrawDebtResponse): MsgDrawDebtResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDrawDebtResponseAminoMsg): MsgDrawDebtResponse {
    return MsgDrawDebtResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDrawDebtResponseProtoMsg): MsgDrawDebtResponse {
    return MsgDrawDebtResponse.decode(message.value);
  },
  toProto(message: MsgDrawDebtResponse): Uint8Array {
    return MsgDrawDebtResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDrawDebtResponse): MsgDrawDebtResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgDrawDebtResponse",
      value: MsgDrawDebtResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRepayDebt(): MsgRepayDebt {
  return {
    sender: "",
    collateralType: "",
    payment: Coin.fromPartial({})
  };
}
export const MsgRepayDebt = {
  typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt",
  encode(message: MsgRepayDebt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgRepayDebtAmino): MsgRepayDebt {
    return {
      sender: object.sender,
      collateralType: object.collateral_type,
      payment: object?.payment ? Coin.fromAmino(object.payment) : undefined
    };
  },
  toAmino(message: MsgRepayDebt): MsgRepayDebtAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.collateral_type = message.collateralType;
    obj.payment = message.payment ? Coin.toAmino(message.payment) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRepayDebtAminoMsg): MsgRepayDebt {
    return MsgRepayDebt.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayDebtProtoMsg): MsgRepayDebt {
    return MsgRepayDebt.decode(message.value);
  },
  toProto(message: MsgRepayDebt): Uint8Array {
    return MsgRepayDebt.encode(message).finish();
  },
  toProtoMsg(message: MsgRepayDebt): MsgRepayDebtProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt",
      value: MsgRepayDebt.encode(message).finish()
    };
  }
};
function createBaseMsgRepayDebtResponse(): MsgRepayDebtResponse {
  return {};
}
export const MsgRepayDebtResponse = {
  typeUrl: "/kava.cdp.v1beta1.MsgRepayDebtResponse",
  encode(_: MsgRepayDebtResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRepayDebtResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRepayDebtResponse>): MsgRepayDebtResponse {
    const message = createBaseMsgRepayDebtResponse();
    return message;
  },
  fromAmino(_: MsgRepayDebtResponseAmino): MsgRepayDebtResponse {
    return {};
  },
  toAmino(_: MsgRepayDebtResponse): MsgRepayDebtResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRepayDebtResponseAminoMsg): MsgRepayDebtResponse {
    return MsgRepayDebtResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayDebtResponseProtoMsg): MsgRepayDebtResponse {
    return MsgRepayDebtResponse.decode(message.value);
  },
  toProto(message: MsgRepayDebtResponse): Uint8Array {
    return MsgRepayDebtResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRepayDebtResponse): MsgRepayDebtResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgRepayDebtResponse",
      value: MsgRepayDebtResponse.encode(message).finish()
    };
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
  typeUrl: "/kava.cdp.v1beta1.MsgLiquidate",
  encode(message: MsgLiquidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgLiquidateAmino): MsgLiquidate {
    return {
      keeper: object.keeper,
      borrower: object.borrower,
      collateralType: object.collateral_type
    };
  },
  toAmino(message: MsgLiquidate): MsgLiquidateAmino {
    const obj: any = {};
    obj.keeper = message.keeper;
    obj.borrower = message.borrower;
    obj.collateral_type = message.collateralType;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidateAminoMsg): MsgLiquidate {
    return MsgLiquidate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidateProtoMsg): MsgLiquidate {
    return MsgLiquidate.decode(message.value);
  },
  toProto(message: MsgLiquidate): Uint8Array {
    return MsgLiquidate.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidate): MsgLiquidateProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgLiquidate",
      value: MsgLiquidate.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {};
}
export const MsgLiquidateResponse = {
  typeUrl: "/kava.cdp.v1beta1.MsgLiquidateResponse",
  encode(_: MsgLiquidateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLiquidateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    return message;
  },
  fromAmino(_: MsgLiquidateResponseAmino): MsgLiquidateResponse {
    return {};
  },
  toAmino(_: MsgLiquidateResponse): MsgLiquidateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLiquidateResponseAminoMsg): MsgLiquidateResponse {
    return MsgLiquidateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidateResponseProtoMsg): MsgLiquidateResponse {
    return MsgLiquidateResponse.decode(message.value);
  },
  toProto(message: MsgLiquidateResponse): Uint8Array {
    return MsgLiquidateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidateResponse): MsgLiquidateResponseProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.MsgLiquidateResponse",
      value: MsgLiquidateResponse.encode(message).finish()
    };
  }
};