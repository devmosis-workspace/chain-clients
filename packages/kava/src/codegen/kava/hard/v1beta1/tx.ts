import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDeposit {
  depositor: string;
  amount: Coin[];
}
export interface MsgDepositProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDepositAmino {
  depositor: string;
  amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
  type: "/kava.hard.v1beta1.MsgDeposit";
  value: MsgDepositAmino;
}
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDepositSDKType {
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "/kava.hard.v1beta1.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdraw {
  depositor: string;
  amount: Coin[];
}
export interface MsgWithdrawProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgWithdraw";
  value: Uint8Array;
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdrawAmino {
  depositor: string;
  amount: CoinAmino[];
}
export interface MsgWithdrawAminoMsg {
  type: "/kava.hard.v1beta1.MsgWithdraw";
  value: MsgWithdrawAmino;
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdrawSDKType {
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgWithdrawResponse";
  value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {}
export interface MsgWithdrawResponseAminoMsg {
  type: "/kava.hard.v1beta1.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrow {
  borrower: string;
  amount: Coin[];
}
export interface MsgBorrowProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgBorrow";
  value: Uint8Array;
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrowAmino {
  borrower: string;
  amount: CoinAmino[];
}
export interface MsgBorrowAminoMsg {
  type: "/kava.hard.v1beta1.MsgBorrow";
  value: MsgBorrowAmino;
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrowSDKType {
  borrower: string;
  amount: CoinSDKType[];
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {}
export interface MsgBorrowResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgBorrowResponse";
  value: Uint8Array;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseAmino {}
export interface MsgBorrowResponseAminoMsg {
  type: "/kava.hard.v1beta1.MsgBorrowResponse";
  value: MsgBorrowResponseAmino;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {}
/** MsgRepay defines the Msg/Repay request type. */
export interface MsgRepay {
  sender: string;
  owner: string;
  amount: Coin[];
}
export interface MsgRepayProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgRepay";
  value: Uint8Array;
}
/** MsgRepay defines the Msg/Repay request type. */
export interface MsgRepayAmino {
  sender: string;
  owner: string;
  amount: CoinAmino[];
}
export interface MsgRepayAminoMsg {
  type: "/kava.hard.v1beta1.MsgRepay";
  value: MsgRepayAmino;
}
/** MsgRepay defines the Msg/Repay request type. */
export interface MsgRepaySDKType {
  sender: string;
  owner: string;
  amount: CoinSDKType[];
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {}
export interface MsgRepayResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgRepayResponse";
  value: Uint8Array;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseAmino {}
export interface MsgRepayResponseAminoMsg {
  type: "/kava.hard.v1beta1.MsgRepayResponse";
  value: MsgRepayResponseAmino;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidate {
  keeper: string;
  borrower: string;
}
export interface MsgLiquidateProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgLiquidate";
  value: Uint8Array;
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidateAmino {
  keeper: string;
  borrower: string;
}
export interface MsgLiquidateAminoMsg {
  type: "/kava.hard.v1beta1.MsgLiquidate";
  value: MsgLiquidateAmino;
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidateSDKType {
  keeper: string;
  borrower: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {}
export interface MsgLiquidateResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MsgLiquidateResponse";
  value: Uint8Array;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseAmino {}
export interface MsgLiquidateResponseAminoMsg {
  type: "/kava.hard.v1beta1.MsgLiquidateResponse";
  value: MsgLiquidateResponseAmino;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {}
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    amount: []
  };
}
export const MsgDeposit = {
  typeUrl: "/kava.hard.v1beta1.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    return {
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
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
      typeUrl: "/kava.hard.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/kava.hard.v1beta1.MsgDepositResponse",
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
      typeUrl: "/kava.hard.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    depositor: "",
    amount: []
  };
}
export const MsgWithdraw = {
  typeUrl: "/kava.hard.v1beta1.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    return {
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
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
      typeUrl: "/kava.hard.v1beta1.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  typeUrl: "/kava.hard.v1beta1.MsgWithdrawResponse",
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
      typeUrl: "/kava.hard.v1beta1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBorrow(): MsgBorrow {
  return {
    borrower: "",
    amount: []
  };
}
export const MsgBorrow = {
  typeUrl: "/kava.hard.v1beta1.MsgBorrow",
  encode(message: MsgBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBorrow>): MsgBorrow {
    const message = createBaseMsgBorrow();
    message.borrower = object.borrower ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBorrowAmino): MsgBorrow {
    return {
      borrower: object.borrower,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBorrow): MsgBorrowAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBorrowAminoMsg): MsgBorrow {
    return MsgBorrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBorrowProtoMsg): MsgBorrow {
    return MsgBorrow.decode(message.value);
  },
  toProto(message: MsgBorrow): Uint8Array {
    return MsgBorrow.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrow): MsgBorrowProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.MsgBorrow",
      value: MsgBorrow.encode(message).finish()
    };
  }
};
function createBaseMsgBorrowResponse(): MsgBorrowResponse {
  return {};
}
export const MsgBorrowResponse = {
  typeUrl: "/kava.hard.v1beta1.MsgBorrowResponse",
  encode(_: MsgBorrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBorrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse {
    const message = createBaseMsgBorrowResponse();
    return message;
  },
  fromAmino(_: MsgBorrowResponseAmino): MsgBorrowResponse {
    return {};
  },
  toAmino(_: MsgBorrowResponse): MsgBorrowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBorrowResponseAminoMsg): MsgBorrowResponse {
    return MsgBorrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBorrowResponseProtoMsg): MsgBorrowResponse {
    return MsgBorrowResponse.decode(message.value);
  },
  toProto(message: MsgBorrowResponse): Uint8Array {
    return MsgBorrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrowResponse): MsgBorrowResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.MsgBorrowResponse",
      value: MsgBorrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRepay(): MsgRepay {
  return {
    sender: "",
    owner: "",
    amount: []
  };
}
export const MsgRepay = {
  typeUrl: "/kava.hard.v1beta1.MsgRepay",
  encode(message: MsgRepay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRepay {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRepay>): MsgRepay {
    const message = createBaseMsgRepay();
    message.sender = object.sender ?? "";
    message.owner = object.owner ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRepayAmino): MsgRepay {
    return {
      sender: object.sender,
      owner: object.owner,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgRepay): MsgRepayAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.owner = message.owner;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRepayAminoMsg): MsgRepay {
    return MsgRepay.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayProtoMsg): MsgRepay {
    return MsgRepay.decode(message.value);
  },
  toProto(message: MsgRepay): Uint8Array {
    return MsgRepay.encode(message).finish();
  },
  toProtoMsg(message: MsgRepay): MsgRepayProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.MsgRepay",
      value: MsgRepay.encode(message).finish()
    };
  }
};
function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {};
}
export const MsgRepayResponse = {
  typeUrl: "/kava.hard.v1beta1.MsgRepayResponse",
  encode(_: MsgRepayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRepayResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRepayResponse>): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    return message;
  },
  fromAmino(_: MsgRepayResponseAmino): MsgRepayResponse {
    return {};
  },
  toAmino(_: MsgRepayResponse): MsgRepayResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse {
    return MsgRepayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse {
    return MsgRepayResponse.decode(message.value);
  },
  toProto(message: MsgRepayResponse): Uint8Array {
    return MsgRepayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.MsgRepayResponse",
      value: MsgRepayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidate(): MsgLiquidate {
  return {
    keeper: "",
    borrower: ""
  };
}
export const MsgLiquidate = {
  typeUrl: "/kava.hard.v1beta1.MsgLiquidate",
  encode(message: MsgLiquidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keeper !== "") {
      writer.uint32(10).string(message.keeper);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidate {
    return {
      keeper: isSet(object.keeper) ? String(object.keeper) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : ""
    };
  },
  fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.keeper = object.keeper ?? "";
    message.borrower = object.borrower ?? "";
    return message;
  },
  fromAmino(object: MsgLiquidateAmino): MsgLiquidate {
    return {
      keeper: object.keeper,
      borrower: object.borrower
    };
  },
  toAmino(message: MsgLiquidate): MsgLiquidateAmino {
    const obj: any = {};
    obj.keeper = message.keeper;
    obj.borrower = message.borrower;
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
      typeUrl: "/kava.hard.v1beta1.MsgLiquidate",
      value: MsgLiquidate.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {};
}
export const MsgLiquidateResponse = {
  typeUrl: "/kava.hard.v1beta1.MsgLiquidateResponse",
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
      typeUrl: "/kava.hard.v1beta1.MsgLiquidateResponse",
      value: MsgLiquidateResponse.encode(message).finish()
    };
  }
};