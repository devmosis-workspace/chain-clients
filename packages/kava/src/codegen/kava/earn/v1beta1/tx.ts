import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { StrategyType, strategyTypeFromJSON } from "./strategy";
import { VaultShare, VaultShareAmino, VaultShareSDKType } from "./vault";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDeposit {
  /** depositor represents the address to deposit funds from */
  depositor: string;
  /**
   * Amount represents the token to deposit. The vault corresponds to the denom
   * of the amount coin.
   */
  amount: Coin;
  /** Strategy is the vault strategy to use. */
  strategy: StrategyType;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/kava.earn.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDepositAmino {
  /** depositor represents the address to deposit funds from */
  depositor?: string;
  /**
   * Amount represents the token to deposit. The vault corresponds to the denom
   * of the amount coin.
   */
  amount?: CoinAmino;
  /** Strategy is the vault strategy to use. */
  strategy?: StrategyType;
}
export interface MsgDepositAminoMsg {
  type: "/kava.earn.v1beta1.MsgDeposit";
  value: MsgDepositAmino;
}
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDepositSDKType {
  depositor: string;
  amount: CoinSDKType;
  strategy: StrategyType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
  shares: VaultShare;
}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
  shares?: VaultShareAmino;
}
export interface MsgDepositResponseAminoMsg {
  type: "/kava.earn.v1beta1.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
  shares: VaultShareSDKType;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdraw {
  /** from represents the address we are withdrawing for */
  from: string;
  /**
   * Amount represents the token to withdraw. The vault corresponds to the denom
   * of the amount coin.
   */
  amount: Coin;
  /** Strategy is the vault strategy to use. */
  strategy: StrategyType;
}
export interface MsgWithdrawProtoMsg {
  typeUrl: "/kava.earn.v1beta1.MsgWithdraw";
  value: Uint8Array;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdrawAmino {
  /** from represents the address we are withdrawing for */
  from?: string;
  /**
   * Amount represents the token to withdraw. The vault corresponds to the denom
   * of the amount coin.
   */
  amount?: CoinAmino;
  /** Strategy is the vault strategy to use. */
  strategy?: StrategyType;
}
export interface MsgWithdrawAminoMsg {
  type: "/kava.earn.v1beta1.MsgWithdraw";
  value: MsgWithdrawAmino;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdrawSDKType {
  from: string;
  amount: CoinSDKType;
  strategy: StrategyType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
  shares: VaultShare;
}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.MsgWithdrawResponse";
  value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
  shares?: VaultShareAmino;
}
export interface MsgWithdrawResponseAminoMsg {
  type: "/kava.earn.v1beta1.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
  shares: VaultShareSDKType;
}
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    amount: Coin.fromPartial({}),
    strategy: 0
  };
}
export const MsgDeposit = {
  typeUrl: "/kava.earn.v1beta1.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.strategy !== 0) {
      writer.uint32(24).int32(message.strategy);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      strategy: isSet(object.strategy) ? strategyTypeFromJSON(object.strategy) : -1
    };
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.strategy = object.strategy ?? 0;
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = strategyTypeFromJSON(object.strategy);
    }
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.strategy = message.strategy;
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
      typeUrl: "/kava.earn.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {
    shares: VaultShare.fromPartial({})
  };
}
export const MsgDepositResponse = {
  typeUrl: "/kava.earn.v1beta1.MsgDepositResponse",
  encode(message: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shares !== undefined) {
      VaultShare.encode(message.shares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDepositResponse {
    return {
      shares: isSet(object.shares) ? VaultShare.fromJSON(object.shares) : undefined
    };
  },
  fromPartial(object: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.shares = object.shares !== undefined && object.shares !== null ? VaultShare.fromPartial(object.shares) : undefined;
    return message;
  },
  fromAmino(object: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = VaultShare.fromAmino(object.shares);
    }
    return message;
  },
  toAmino(message: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    obj.shares = message.shares ? VaultShare.toAmino(message.shares) : undefined;
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
      typeUrl: "/kava.earn.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    from: "",
    amount: Coin.fromPartial({}),
    strategy: 0
  };
}
export const MsgWithdraw = {
  typeUrl: "/kava.earn.v1beta1.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.strategy !== 0) {
      writer.uint32(24).int32(message.strategy);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdraw {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      strategy: isSet(object.strategy) ? strategyTypeFromJSON(object.strategy) : -1
    };
  },
  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.from = object.from ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.strategy = object.strategy ?? 0;
    return message;
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = strategyTypeFromJSON(object.strategy);
    }
    return message;
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.strategy = message.strategy;
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
      typeUrl: "/kava.earn.v1beta1.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {
    shares: VaultShare.fromPartial({})
  };
}
export const MsgWithdrawResponse = {
  typeUrl: "/kava.earn.v1beta1.MsgWithdrawResponse",
  encode(message: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shares !== undefined) {
      VaultShare.encode(message.shares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawResponse {
    return {
      shares: isSet(object.shares) ? VaultShare.fromJSON(object.shares) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.shares = object.shares !== undefined && object.shares !== null ? VaultShare.fromPartial(object.shares) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = VaultShare.fromAmino(object.shares);
    }
    return message;
  },
  toAmino(message: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    obj.shares = message.shares ? VaultShare.toAmino(message.shares) : undefined;
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
      typeUrl: "/kava.earn.v1beta1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};