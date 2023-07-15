import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDeposit {
  /** depositor represents the owner of the delegation to convert */
  depositor: string;
  /** validator is the validator for the depositor's delegation */
  validator: string;
  /** amount is the delegation balance to convert */
  amount?: Coin;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDepositSDKType {
  depositor: string;
  validator: string;
  amount?: CoinSDKType;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponse {}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponseSDKType {}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDeposit {
  /** depositor represents the owner of the tokens to delegate */
  depositor: string;
  /** validator is the address of the validator to delegate to */
  validator: string;
  /** amount is the tokens to delegate */
  amount?: Coin;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDepositSDKType {
  depositor: string;
  validator: string;
  amount?: CoinSDKType;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponse {}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponseSDKType {}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurn {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */
  validator: string;
  /** amount is the staked token equivalent to withdraw */
  amount?: Coin;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurnSDKType {
  from: string;
  validator: string;
  amount?: CoinSDKType;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponse {}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponseSDKType {}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegate {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */
  validator: string;
  /** amount is the staked token equivalent to withdraw */
  amount?: Coin;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegateSDKType {
  from: string;
  validator: string;
  amount?: CoinSDKType;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponse {}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponseSDKType {}
function createBaseMsgMintDeposit(): MsgMintDeposit {
  return {
    depositor: "",
    validator: "",
    amount: undefined
  };
}
export const MsgMintDeposit = {
  encode(message: MsgMintDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMintDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgMintDeposit>): MsgMintDeposit {
    const message = createBaseMsgMintDeposit();
    message.depositor = object.depositor ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgMintDepositResponse(): MsgMintDepositResponse {
  return {};
}
export const MsgMintDepositResponse = {
  encode(_: MsgMintDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgMintDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintDepositResponse>): MsgMintDepositResponse {
    const message = createBaseMsgMintDepositResponse();
    return message;
  }
};
function createBaseMsgDelegateMintDeposit(): MsgDelegateMintDeposit {
  return {
    depositor: "",
    validator: "",
    amount: undefined
  };
}
export const MsgDelegateMintDeposit = {
  encode(message: MsgDelegateMintDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDelegateMintDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgDelegateMintDeposit>): MsgDelegateMintDeposit {
    const message = createBaseMsgDelegateMintDeposit();
    message.depositor = object.depositor ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgDelegateMintDepositResponse(): MsgDelegateMintDepositResponse {
  return {};
}
export const MsgDelegateMintDepositResponse = {
  encode(_: MsgDelegateMintDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDelegateMintDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDelegateMintDepositResponse>): MsgDelegateMintDepositResponse {
    const message = createBaseMsgDelegateMintDepositResponse();
    return message;
  }
};
function createBaseMsgWithdrawBurn(): MsgWithdrawBurn {
  return {
    from: "",
    validator: "",
    amount: undefined
  };
}
export const MsgWithdrawBurn = {
  encode(message: MsgWithdrawBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawBurn {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdrawBurn>): MsgWithdrawBurn {
    const message = createBaseMsgWithdrawBurn();
    message.from = object.from ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgWithdrawBurnResponse(): MsgWithdrawBurnResponse {
  return {};
}
export const MsgWithdrawBurnResponse = {
  encode(_: MsgWithdrawBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawBurnResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawBurnResponse>): MsgWithdrawBurnResponse {
    const message = createBaseMsgWithdrawBurnResponse();
    return message;
  }
};
function createBaseMsgWithdrawBurnUndelegate(): MsgWithdrawBurnUndelegate {
  return {
    from: "",
    validator: "",
    amount: undefined
  };
}
export const MsgWithdrawBurnUndelegate = {
  encode(message: MsgWithdrawBurnUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawBurnUndelegate {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdrawBurnUndelegate>): MsgWithdrawBurnUndelegate {
    const message = createBaseMsgWithdrawBurnUndelegate();
    message.from = object.from ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgWithdrawBurnUndelegateResponse(): MsgWithdrawBurnUndelegateResponse {
  return {};
}
export const MsgWithdrawBurnUndelegateResponse = {
  encode(_: MsgWithdrawBurnUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawBurnUndelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawBurnUndelegateResponse>): MsgWithdrawBurnUndelegateResponse {
    const message = createBaseMsgWithdrawBurnUndelegateResponse();
    return message;
  }
};