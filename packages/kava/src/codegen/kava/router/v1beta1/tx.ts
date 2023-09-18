import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDeposit {
  /** depositor represents the owner of the delegation to convert */
  depositor: string;
  /** validator is the validator for the depositor's delegation */
  validator: string;
  /** amount is the delegation balance to convert */
  amount: Coin;
}
export interface MsgMintDepositProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgMintDeposit";
  value: Uint8Array;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDepositAmino {
  /** depositor represents the owner of the delegation to convert */
  depositor: string;
  /** validator is the validator for the depositor's delegation */
  validator: string;
  /** amount is the delegation balance to convert */
  amount?: CoinAmino;
}
export interface MsgMintDepositAminoMsg {
  type: "/kava.router.v1beta1.MsgMintDeposit";
  value: MsgMintDepositAmino;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDepositSDKType {
  depositor: string;
  validator: string;
  amount: CoinSDKType;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponse {}
export interface MsgMintDepositResponseProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgMintDepositResponse";
  value: Uint8Array;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponseAmino {}
export interface MsgMintDepositResponseAminoMsg {
  type: "/kava.router.v1beta1.MsgMintDepositResponse";
  value: MsgMintDepositResponseAmino;
}
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
  amount: Coin;
}
export interface MsgDelegateMintDepositProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit";
  value: Uint8Array;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDepositAmino {
  /** depositor represents the owner of the tokens to delegate */
  depositor: string;
  /** validator is the address of the validator to delegate to */
  validator: string;
  /** amount is the tokens to delegate */
  amount?: CoinAmino;
}
export interface MsgDelegateMintDepositAminoMsg {
  type: "/kava.router.v1beta1.MsgDelegateMintDeposit";
  value: MsgDelegateMintDepositAmino;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDepositSDKType {
  depositor: string;
  validator: string;
  amount: CoinSDKType;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponse {}
export interface MsgDelegateMintDepositResponseProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgDelegateMintDepositResponse";
  value: Uint8Array;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponseAmino {}
export interface MsgDelegateMintDepositResponseAminoMsg {
  type: "/kava.router.v1beta1.MsgDelegateMintDepositResponse";
  value: MsgDelegateMintDepositResponseAmino;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponseSDKType {}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurn {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */
  validator: string;
  /** amount is the staked token equivalent to withdraw */
  amount: Coin;
}
export interface MsgWithdrawBurnProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn";
  value: Uint8Array;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurnAmino {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */
  validator: string;
  /** amount is the staked token equivalent to withdraw */
  amount?: CoinAmino;
}
export interface MsgWithdrawBurnAminoMsg {
  type: "/kava.router.v1beta1.MsgWithdrawBurn";
  value: MsgWithdrawBurnAmino;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurnSDKType {
  from: string;
  validator: string;
  amount: CoinSDKType;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponse {}
export interface MsgWithdrawBurnResponseProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnResponse";
  value: Uint8Array;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponseAmino {}
export interface MsgWithdrawBurnResponseAminoMsg {
  type: "/kava.router.v1beta1.MsgWithdrawBurnResponse";
  value: MsgWithdrawBurnResponseAmino;
}
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
  amount: Coin;
}
export interface MsgWithdrawBurnUndelegateProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate";
  value: Uint8Array;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegateAmino {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */
  validator: string;
  /** amount is the staked token equivalent to withdraw */
  amount?: CoinAmino;
}
export interface MsgWithdrawBurnUndelegateAminoMsg {
  type: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate";
  value: MsgWithdrawBurnUndelegateAmino;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegateSDKType {
  from: string;
  validator: string;
  amount: CoinSDKType;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponse {}
export interface MsgWithdrawBurnUndelegateResponseProtoMsg {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegateResponse";
  value: Uint8Array;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponseAmino {}
export interface MsgWithdrawBurnUndelegateResponseAminoMsg {
  type: "/kava.router.v1beta1.MsgWithdrawBurnUndelegateResponse";
  value: MsgWithdrawBurnUndelegateResponseAmino;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponseSDKType {}
function createBaseMsgMintDeposit(): MsgMintDeposit {
  return {
    depositor: "",
    validator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgMintDeposit = {
  typeUrl: "/kava.router.v1beta1.MsgMintDeposit",
  encode(message: MsgMintDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgMintDepositAmino): MsgMintDeposit {
    return {
      depositor: object.depositor,
      validator: object.validator,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgMintDeposit): MsgMintDepositAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    obj.validator = message.validator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintDepositAminoMsg): MsgMintDeposit {
    return MsgMintDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintDepositProtoMsg): MsgMintDeposit {
    return MsgMintDeposit.decode(message.value);
  },
  toProto(message: MsgMintDeposit): Uint8Array {
    return MsgMintDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgMintDeposit): MsgMintDepositProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgMintDeposit",
      value: MsgMintDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgMintDepositResponse(): MsgMintDepositResponse {
  return {};
}
export const MsgMintDepositResponse = {
  typeUrl: "/kava.router.v1beta1.MsgMintDepositResponse",
  encode(_: MsgMintDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMintDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintDepositResponse>): MsgMintDepositResponse {
    const message = createBaseMsgMintDepositResponse();
    return message;
  },
  fromAmino(_: MsgMintDepositResponseAmino): MsgMintDepositResponse {
    return {};
  },
  toAmino(_: MsgMintDepositResponse): MsgMintDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintDepositResponseAminoMsg): MsgMintDepositResponse {
    return MsgMintDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintDepositResponseProtoMsg): MsgMintDepositResponse {
    return MsgMintDepositResponse.decode(message.value);
  },
  toProto(message: MsgMintDepositResponse): Uint8Array {
    return MsgMintDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintDepositResponse): MsgMintDepositResponseProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgMintDepositResponse",
      value: MsgMintDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateMintDeposit(): MsgDelegateMintDeposit {
  return {
    depositor: "",
    validator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegateMintDeposit = {
  typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit",
  encode(message: MsgDelegateMintDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgDelegateMintDepositAmino): MsgDelegateMintDeposit {
    return {
      depositor: object.depositor,
      validator: object.validator,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgDelegateMintDeposit): MsgDelegateMintDepositAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    obj.validator = message.validator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateMintDepositAminoMsg): MsgDelegateMintDeposit {
    return MsgDelegateMintDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateMintDepositProtoMsg): MsgDelegateMintDeposit {
    return MsgDelegateMintDeposit.decode(message.value);
  },
  toProto(message: MsgDelegateMintDeposit): Uint8Array {
    return MsgDelegateMintDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateMintDeposit): MsgDelegateMintDepositProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit",
      value: MsgDelegateMintDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateMintDepositResponse(): MsgDelegateMintDepositResponse {
  return {};
}
export const MsgDelegateMintDepositResponse = {
  typeUrl: "/kava.router.v1beta1.MsgDelegateMintDepositResponse",
  encode(_: MsgDelegateMintDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDelegateMintDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDelegateMintDepositResponse>): MsgDelegateMintDepositResponse {
    const message = createBaseMsgDelegateMintDepositResponse();
    return message;
  },
  fromAmino(_: MsgDelegateMintDepositResponseAmino): MsgDelegateMintDepositResponse {
    return {};
  },
  toAmino(_: MsgDelegateMintDepositResponse): MsgDelegateMintDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateMintDepositResponseAminoMsg): MsgDelegateMintDepositResponse {
    return MsgDelegateMintDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateMintDepositResponseProtoMsg): MsgDelegateMintDepositResponse {
    return MsgDelegateMintDepositResponse.decode(message.value);
  },
  toProto(message: MsgDelegateMintDepositResponse): Uint8Array {
    return MsgDelegateMintDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateMintDepositResponse): MsgDelegateMintDepositResponseProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgDelegateMintDepositResponse",
      value: MsgDelegateMintDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawBurn(): MsgWithdrawBurn {
  return {
    from: "",
    validator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgWithdrawBurn = {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn",
  encode(message: MsgWithdrawBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgWithdrawBurnAmino): MsgWithdrawBurn {
    return {
      from: object.from,
      validator: object.validator,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgWithdrawBurn): MsgWithdrawBurnAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.validator = message.validator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawBurnAminoMsg): MsgWithdrawBurn {
    return MsgWithdrawBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawBurnProtoMsg): MsgWithdrawBurn {
    return MsgWithdrawBurn.decode(message.value);
  },
  toProto(message: MsgWithdrawBurn): Uint8Array {
    return MsgWithdrawBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawBurn): MsgWithdrawBurnProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn",
      value: MsgWithdrawBurn.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawBurnResponse(): MsgWithdrawBurnResponse {
  return {};
}
export const MsgWithdrawBurnResponse = {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnResponse",
  encode(_: MsgWithdrawBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawBurnResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawBurnResponse>): MsgWithdrawBurnResponse {
    const message = createBaseMsgWithdrawBurnResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawBurnResponseAmino): MsgWithdrawBurnResponse {
    return {};
  },
  toAmino(_: MsgWithdrawBurnResponse): MsgWithdrawBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawBurnResponseAminoMsg): MsgWithdrawBurnResponse {
    return MsgWithdrawBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawBurnResponseProtoMsg): MsgWithdrawBurnResponse {
    return MsgWithdrawBurnResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawBurnResponse): Uint8Array {
    return MsgWithdrawBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawBurnResponse): MsgWithdrawBurnResponseProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnResponse",
      value: MsgWithdrawBurnResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawBurnUndelegate(): MsgWithdrawBurnUndelegate {
  return {
    from: "",
    validator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgWithdrawBurnUndelegate = {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
  encode(message: MsgWithdrawBurnUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgWithdrawBurnUndelegateAmino): MsgWithdrawBurnUndelegate {
    return {
      from: object.from,
      validator: object.validator,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgWithdrawBurnUndelegate): MsgWithdrawBurnUndelegateAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.validator = message.validator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawBurnUndelegateAminoMsg): MsgWithdrawBurnUndelegate {
    return MsgWithdrawBurnUndelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawBurnUndelegateProtoMsg): MsgWithdrawBurnUndelegate {
    return MsgWithdrawBurnUndelegate.decode(message.value);
  },
  toProto(message: MsgWithdrawBurnUndelegate): Uint8Array {
    return MsgWithdrawBurnUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawBurnUndelegate): MsgWithdrawBurnUndelegateProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
      value: MsgWithdrawBurnUndelegate.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawBurnUndelegateResponse(): MsgWithdrawBurnUndelegateResponse {
  return {};
}
export const MsgWithdrawBurnUndelegateResponse = {
  typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegateResponse",
  encode(_: MsgWithdrawBurnUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawBurnUndelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawBurnUndelegateResponse>): MsgWithdrawBurnUndelegateResponse {
    const message = createBaseMsgWithdrawBurnUndelegateResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawBurnUndelegateResponseAmino): MsgWithdrawBurnUndelegateResponse {
    return {};
  },
  toAmino(_: MsgWithdrawBurnUndelegateResponse): MsgWithdrawBurnUndelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawBurnUndelegateResponseAminoMsg): MsgWithdrawBurnUndelegateResponse {
    return MsgWithdrawBurnUndelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawBurnUndelegateResponseProtoMsg): MsgWithdrawBurnUndelegateResponse {
    return MsgWithdrawBurnUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawBurnUndelegateResponse): Uint8Array {
    return MsgWithdrawBurnUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawBurnUndelegateResponse): MsgWithdrawBurnUndelegateResponseProtoMsg {
    return {
      typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegateResponse",
      value: MsgWithdrawBurnUndelegateResponse.encode(message).finish()
    };
  }
};