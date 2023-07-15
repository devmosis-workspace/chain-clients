import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { StrategyType, strategyTypeFromJSON } from "./strategy";
import { VaultShare, VaultShareSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDeposit {
  /** depositor represents the address to deposit funds from */
  depositor: string;
  /**
   * Amount represents the token to deposit. The vault corresponds to the denom
   * of the amount coin.
   */
  amount?: Coin;
  /** Strategy is the vault strategy to use. */
  strategy: StrategyType;
}
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDepositSDKType {
  depositor: string;
  amount?: CoinSDKType;
  strategy: StrategyType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
  shares?: VaultShare;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
  shares?: VaultShareSDKType;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdraw {
  /** from represents the address we are withdrawing for */
  from: string;
  /**
   * Amount represents the token to withdraw. The vault corresponds to the denom
   * of the amount coin.
   */
  amount?: Coin;
  /** Strategy is the vault strategy to use. */
  strategy: StrategyType;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdrawSDKType {
  from: string;
  amount?: CoinSDKType;
  strategy: StrategyType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
  shares?: VaultShare;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
  shares?: VaultShareSDKType;
}
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    amount: undefined,
    strategy: 0
  };
}
export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      strategy: isSet(object.strategy) ? strategyTypeFromJSON(object.strategy) : 0
    };
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.strategy = object.strategy ?? 0;
    return message;
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {
    shares: undefined
  };
}
export const MsgDepositResponse = {
  encode(message: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    from: "",
    amount: undefined,
    strategy: 0
  };
}
export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      strategy: isSet(object.strategy) ? strategyTypeFromJSON(object.strategy) : 0
    };
  },
  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.from = object.from ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.strategy = object.strategy ?? 0;
    return message;
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {
    shares: undefined
  };
}
export const MsgWithdrawResponse = {
  encode(message: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};