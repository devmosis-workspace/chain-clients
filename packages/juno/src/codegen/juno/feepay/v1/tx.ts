import { FeePayContract, FeePayContractAmino, FeePayContractSDKType } from "./feepay";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** The message to register a fee pay contract. */
export interface MsgRegisterFeePayContract {
  /** The wallet address of the sender. */
  senderAddress: string;
  /** The fee pay contract to register. */
  feePayContract?: FeePayContract;
}
export interface MsgRegisterFeePayContractProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract";
  value: Uint8Array;
}
/** The message to register a fee pay contract. */
export interface MsgRegisterFeePayContractAmino {
  /** The wallet address of the sender. */
  sender_address?: string;
  /** The fee pay contract to register. */
  fee_pay_contract?: FeePayContractAmino;
}
export interface MsgRegisterFeePayContractAminoMsg {
  type: "/juno.feepay.v1.MsgRegisterFeePayContract";
  value: MsgRegisterFeePayContractAmino;
}
/** The message to register a fee pay contract. */
export interface MsgRegisterFeePayContractSDKType {
  sender_address: string;
  fee_pay_contract?: FeePayContractSDKType;
}
/** The response message for registering a fee pay contract. */
export interface MsgRegisterFeePayContractResponse {}
export interface MsgRegisterFeePayContractResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContractResponse";
  value: Uint8Array;
}
/** The response message for registering a fee pay contract. */
export interface MsgRegisterFeePayContractResponseAmino {}
export interface MsgRegisterFeePayContractResponseAminoMsg {
  type: "/juno.feepay.v1.MsgRegisterFeePayContractResponse";
  value: MsgRegisterFeePayContractResponseAmino;
}
/** The response message for registering a fee pay contract. */
export interface MsgRegisterFeePayContractResponseSDKType {}
/** The message to unregister a fee pay contract. */
export interface MsgUnregisterFeePayContract {
  /** The wallet address of the sender. */
  senderAddress: string;
  /** The fee pay contract address. */
  contractAddress: string;
}
export interface MsgUnregisterFeePayContractProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract";
  value: Uint8Array;
}
/** The message to unregister a fee pay contract. */
export interface MsgUnregisterFeePayContractAmino {
  /** The wallet address of the sender. */
  sender_address?: string;
  /** The fee pay contract address. */
  contract_address?: string;
}
export interface MsgUnregisterFeePayContractAminoMsg {
  type: "/juno.feepay.v1.MsgUnregisterFeePayContract";
  value: MsgUnregisterFeePayContractAmino;
}
/** The message to unregister a fee pay contract. */
export interface MsgUnregisterFeePayContractSDKType {
  sender_address: string;
  contract_address: string;
}
/** The response message for unregistering a fee pay contract. */
export interface MsgUnregisterFeePayContractResponse {}
export interface MsgUnregisterFeePayContractResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContractResponse";
  value: Uint8Array;
}
/** The response message for unregistering a fee pay contract. */
export interface MsgUnregisterFeePayContractResponseAmino {}
export interface MsgUnregisterFeePayContractResponseAminoMsg {
  type: "/juno.feepay.v1.MsgUnregisterFeePayContractResponse";
  value: MsgUnregisterFeePayContractResponseAmino;
}
/** The response message for unregistering a fee pay contract. */
export interface MsgUnregisterFeePayContractResponseSDKType {}
/** The message to fund a fee pay contract */
export interface MsgFundFeePayContract {
  /** The wallet address of the sender. */
  senderAddress: string;
  /** The fee pay contract to fund. */
  contractAddress: string;
  /** The coins to fund the contract with. */
  amount: Coin[];
}
export interface MsgFundFeePayContractProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgFundFeePayContract";
  value: Uint8Array;
}
/** The message to fund a fee pay contract */
export interface MsgFundFeePayContractAmino {
  /** The wallet address of the sender. */
  sender_address?: string;
  /** The fee pay contract to fund. */
  contract_address?: string;
  /** The coins to fund the contract with. */
  amount: CoinAmino[];
}
export interface MsgFundFeePayContractAminoMsg {
  type: "/juno.feepay.v1.MsgFundFeePayContract";
  value: MsgFundFeePayContractAmino;
}
/** The message to fund a fee pay contract */
export interface MsgFundFeePayContractSDKType {
  sender_address: string;
  contract_address: string;
  amount: CoinSDKType[];
}
/** The response message for funding a fee pay contract. */
export interface MsgFundFeePayContractResponse {}
export interface MsgFundFeePayContractResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgFundFeePayContractResponse";
  value: Uint8Array;
}
/** The response message for funding a fee pay contract. */
export interface MsgFundFeePayContractResponseAmino {}
export interface MsgFundFeePayContractResponseAminoMsg {
  type: "/juno.feepay.v1.MsgFundFeePayContractResponse";
  value: MsgFundFeePayContractResponseAmino;
}
/** The response message for funding a fee pay contract. */
export interface MsgFundFeePayContractResponseSDKType {}
/** The message to update a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimit {
  /** The wallet address of the sender. */
  senderAddress: string;
  /** The fee pay contract to fund. */
  contractAddress: string;
  /** The new wallet limit. */
  walletLimit: bigint;
}
export interface MsgUpdateFeePayContractWalletLimitProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit";
  value: Uint8Array;
}
/** The message to update a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitAmino {
  /** The wallet address of the sender. */
  sender_address?: string;
  /** The fee pay contract to fund. */
  contract_address?: string;
  /** The new wallet limit. */
  wallet_limit?: string;
}
export interface MsgUpdateFeePayContractWalletLimitAminoMsg {
  type: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit";
  value: MsgUpdateFeePayContractWalletLimitAmino;
}
/** The message to update a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitSDKType {
  sender_address: string;
  contract_address: string;
  wallet_limit: bigint;
}
/** The response message for updating a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitResponse {}
export interface MsgUpdateFeePayContractWalletLimitResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimitResponse";
  value: Uint8Array;
}
/** The response message for updating a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitResponseAmino {}
export interface MsgUpdateFeePayContractWalletLimitResponseAminoMsg {
  type: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimitResponse";
  value: MsgUpdateFeePayContractWalletLimitResponseAmino;
}
/** The response message for updating a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/feepay parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/feepay parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/juno.feepay.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/juno.feepay.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/juno.feepay.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterFeePayContract(): MsgRegisterFeePayContract {
  return {
    senderAddress: "",
    feePayContract: undefined
  };
}
export const MsgRegisterFeePayContract = {
  typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract",
  encode(message: MsgRegisterFeePayContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.feePayContract !== undefined) {
      FeePayContract.encode(message.feePayContract, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterFeePayContract {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      feePayContract: isSet(object.feePayContract) ? FeePayContract.fromJSON(object.feePayContract) : undefined
    };
  },
  fromPartial(object: Partial<MsgRegisterFeePayContract>): MsgRegisterFeePayContract {
    const message = createBaseMsgRegisterFeePayContract();
    message.senderAddress = object.senderAddress ?? "";
    message.feePayContract = object.feePayContract !== undefined && object.feePayContract !== null ? FeePayContract.fromPartial(object.feePayContract) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterFeePayContractAmino): MsgRegisterFeePayContract {
    const message = createBaseMsgRegisterFeePayContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.fee_pay_contract !== undefined && object.fee_pay_contract !== null) {
      message.feePayContract = FeePayContract.fromAmino(object.fee_pay_contract);
    }
    return message;
  },
  toAmino(message: MsgRegisterFeePayContract): MsgRegisterFeePayContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.fee_pay_contract = message.feePayContract ? FeePayContract.toAmino(message.feePayContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterFeePayContractAminoMsg): MsgRegisterFeePayContract {
    return MsgRegisterFeePayContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterFeePayContractProtoMsg): MsgRegisterFeePayContract {
    return MsgRegisterFeePayContract.decode(message.value);
  },
  toProto(message: MsgRegisterFeePayContract): Uint8Array {
    return MsgRegisterFeePayContract.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterFeePayContract): MsgRegisterFeePayContractProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract",
      value: MsgRegisterFeePayContract.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterFeePayContractResponse(): MsgRegisterFeePayContractResponse {
  return {};
}
export const MsgRegisterFeePayContractResponse = {
  typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContractResponse",
  encode(_: MsgRegisterFeePayContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterFeePayContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterFeePayContractResponse>): MsgRegisterFeePayContractResponse {
    const message = createBaseMsgRegisterFeePayContractResponse();
    return message;
  },
  fromAmino(_: MsgRegisterFeePayContractResponseAmino): MsgRegisterFeePayContractResponse {
    const message = createBaseMsgRegisterFeePayContractResponse();
    return message;
  },
  toAmino(_: MsgRegisterFeePayContractResponse): MsgRegisterFeePayContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterFeePayContractResponseAminoMsg): MsgRegisterFeePayContractResponse {
    return MsgRegisterFeePayContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterFeePayContractResponseProtoMsg): MsgRegisterFeePayContractResponse {
    return MsgRegisterFeePayContractResponse.decode(message.value);
  },
  toProto(message: MsgRegisterFeePayContractResponse): Uint8Array {
    return MsgRegisterFeePayContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterFeePayContractResponse): MsgRegisterFeePayContractResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContractResponse",
      value: MsgRegisterFeePayContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterFeePayContract(): MsgUnregisterFeePayContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
export const MsgUnregisterFeePayContract = {
  typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract",
  encode(message: MsgUnregisterFeePayContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnregisterFeePayContract {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUnregisterFeePayContract>): MsgUnregisterFeePayContract {
    const message = createBaseMsgUnregisterFeePayContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterFeePayContractAmino): MsgUnregisterFeePayContract {
    const message = createBaseMsgUnregisterFeePayContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgUnregisterFeePayContract): MsgUnregisterFeePayContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterFeePayContractAminoMsg): MsgUnregisterFeePayContract {
    return MsgUnregisterFeePayContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterFeePayContractProtoMsg): MsgUnregisterFeePayContract {
    return MsgUnregisterFeePayContract.decode(message.value);
  },
  toProto(message: MsgUnregisterFeePayContract): Uint8Array {
    return MsgUnregisterFeePayContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterFeePayContract): MsgUnregisterFeePayContractProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract",
      value: MsgUnregisterFeePayContract.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterFeePayContractResponse(): MsgUnregisterFeePayContractResponse {
  return {};
}
export const MsgUnregisterFeePayContractResponse = {
  typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContractResponse",
  encode(_: MsgUnregisterFeePayContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnregisterFeePayContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnregisterFeePayContractResponse>): MsgUnregisterFeePayContractResponse {
    const message = createBaseMsgUnregisterFeePayContractResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterFeePayContractResponseAmino): MsgUnregisterFeePayContractResponse {
    const message = createBaseMsgUnregisterFeePayContractResponse();
    return message;
  },
  toAmino(_: MsgUnregisterFeePayContractResponse): MsgUnregisterFeePayContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterFeePayContractResponseAminoMsg): MsgUnregisterFeePayContractResponse {
    return MsgUnregisterFeePayContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterFeePayContractResponseProtoMsg): MsgUnregisterFeePayContractResponse {
    return MsgUnregisterFeePayContractResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterFeePayContractResponse): Uint8Array {
    return MsgUnregisterFeePayContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterFeePayContractResponse): MsgUnregisterFeePayContractResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContractResponse",
      value: MsgUnregisterFeePayContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundFeePayContract(): MsgFundFeePayContract {
  return {
    senderAddress: "",
    contractAddress: "",
    amount: []
  };
}
export const MsgFundFeePayContract = {
  typeUrl: "/juno.feepay.v1.MsgFundFeePayContract",
  encode(message: MsgFundFeePayContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgFundFeePayContract {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgFundFeePayContract>): MsgFundFeePayContract {
    const message = createBaseMsgFundFeePayContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFundFeePayContractAmino): MsgFundFeePayContract {
    const message = createBaseMsgFundFeePayContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFundFeePayContract): MsgFundFeePayContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.contract_address = message.contractAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgFundFeePayContractAminoMsg): MsgFundFeePayContract {
    return MsgFundFeePayContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeePayContractProtoMsg): MsgFundFeePayContract {
    return MsgFundFeePayContract.decode(message.value);
  },
  toProto(message: MsgFundFeePayContract): Uint8Array {
    return MsgFundFeePayContract.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeePayContract): MsgFundFeePayContractProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgFundFeePayContract",
      value: MsgFundFeePayContract.encode(message).finish()
    };
  }
};
function createBaseMsgFundFeePayContractResponse(): MsgFundFeePayContractResponse {
  return {};
}
export const MsgFundFeePayContractResponse = {
  typeUrl: "/juno.feepay.v1.MsgFundFeePayContractResponse",
  encode(_: MsgFundFeePayContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgFundFeePayContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgFundFeePayContractResponse>): MsgFundFeePayContractResponse {
    const message = createBaseMsgFundFeePayContractResponse();
    return message;
  },
  fromAmino(_: MsgFundFeePayContractResponseAmino): MsgFundFeePayContractResponse {
    const message = createBaseMsgFundFeePayContractResponse();
    return message;
  },
  toAmino(_: MsgFundFeePayContractResponse): MsgFundFeePayContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundFeePayContractResponseAminoMsg): MsgFundFeePayContractResponse {
    return MsgFundFeePayContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeePayContractResponseProtoMsg): MsgFundFeePayContractResponse {
    return MsgFundFeePayContractResponse.decode(message.value);
  },
  toProto(message: MsgFundFeePayContractResponse): Uint8Array {
    return MsgFundFeePayContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeePayContractResponse): MsgFundFeePayContractResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgFundFeePayContractResponse",
      value: MsgFundFeePayContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeePayContractWalletLimit(): MsgUpdateFeePayContractWalletLimit {
  return {
    senderAddress: "",
    contractAddress: "",
    walletLimit: BigInt(0)
  };
}
export const MsgUpdateFeePayContractWalletLimit = {
  typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit",
  encode(message: MsgUpdateFeePayContractWalletLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.walletLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.walletLimit);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateFeePayContractWalletLimit {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      walletLimit: isSet(object.walletLimit) ? BigInt(object.walletLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgUpdateFeePayContractWalletLimit>): MsgUpdateFeePayContractWalletLimit {
    const message = createBaseMsgUpdateFeePayContractWalletLimit();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.walletLimit = object.walletLimit !== undefined && object.walletLimit !== null ? BigInt(object.walletLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateFeePayContractWalletLimitAmino): MsgUpdateFeePayContractWalletLimit {
    const message = createBaseMsgUpdateFeePayContractWalletLimit();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.wallet_limit !== undefined && object.wallet_limit !== null) {
      message.walletLimit = BigInt(object.wallet_limit);
    }
    return message;
  },
  toAmino(message: MsgUpdateFeePayContractWalletLimit): MsgUpdateFeePayContractWalletLimitAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.contract_address = message.contractAddress;
    obj.wallet_limit = message.walletLimit ? message.walletLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeePayContractWalletLimitAminoMsg): MsgUpdateFeePayContractWalletLimit {
    return MsgUpdateFeePayContractWalletLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeePayContractWalletLimitProtoMsg): MsgUpdateFeePayContractWalletLimit {
    return MsgUpdateFeePayContractWalletLimit.decode(message.value);
  },
  toProto(message: MsgUpdateFeePayContractWalletLimit): Uint8Array {
    return MsgUpdateFeePayContractWalletLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeePayContractWalletLimit): MsgUpdateFeePayContractWalletLimitProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit",
      value: MsgUpdateFeePayContractWalletLimit.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeePayContractWalletLimitResponse(): MsgUpdateFeePayContractWalletLimitResponse {
  return {};
}
export const MsgUpdateFeePayContractWalletLimitResponse = {
  typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimitResponse",
  encode(_: MsgUpdateFeePayContractWalletLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateFeePayContractWalletLimitResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateFeePayContractWalletLimitResponse>): MsgUpdateFeePayContractWalletLimitResponse {
    const message = createBaseMsgUpdateFeePayContractWalletLimitResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFeePayContractWalletLimitResponseAmino): MsgUpdateFeePayContractWalletLimitResponse {
    const message = createBaseMsgUpdateFeePayContractWalletLimitResponse();
    return message;
  },
  toAmino(_: MsgUpdateFeePayContractWalletLimitResponse): MsgUpdateFeePayContractWalletLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeePayContractWalletLimitResponseAminoMsg): MsgUpdateFeePayContractWalletLimitResponse {
    return MsgUpdateFeePayContractWalletLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeePayContractWalletLimitResponseProtoMsg): MsgUpdateFeePayContractWalletLimitResponse {
    return MsgUpdateFeePayContractWalletLimitResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFeePayContractWalletLimitResponse): Uint8Array {
    return MsgUpdateFeePayContractWalletLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeePayContractWalletLimitResponse): MsgUpdateFeePayContractWalletLimitResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimitResponse",
      value: MsgUpdateFeePayContractWalletLimitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/juno.feepay.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/juno.feepay.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/juno.feepay.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};