import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType, AccessTuple, AccessTupleAmino, AccessTupleSDKType, Log, LogAmino, LogSDKType } from "./evm";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
  /** data is inner transaction data of the Ethereum transaction */
  data: Any;
  /** size is the encoded storage size of the transaction (DEPRECATED) */
  size: number;
  /** hash of the transaction in hex format */
  hash: string;
  /**
   * from is the ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */
  from: string;
}
export interface MsgEthereumTxProtoMsg {
  typeUrl: "/ethermint.evm.v1.MsgEthereumTx";
  value: Uint8Array;
}
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTxAmino {
  /** data is inner transaction data of the Ethereum transaction */
  data?: AnyAmino;
  /** size is the encoded storage size of the transaction (DEPRECATED) */
  size: number;
  /** hash of the transaction in hex format */
  hash: string;
  /**
   * from is the ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */
  from: string;
}
export interface MsgEthereumTxAminoMsg {
  type: "/ethermint.evm.v1.MsgEthereumTx";
  value: MsgEthereumTxAmino;
}
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTxSDKType {
  data: AnySDKType;
  size: number;
  hash: string;
  from: string;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTx {
  $typeUrl?: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: bigint;
  /** gas_price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: bigint;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface LegacyTxProtoMsg {
  typeUrl: "/ethermint.evm.v1.LegacyTx";
  value: Uint8Array;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTxAmino {
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: string;
  /** gas_price defines the value for each gas unit */
  gas_price: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: string;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface LegacyTxAminoMsg {
  type: "/ethermint.evm.v1.LegacyTx";
  value: LegacyTxAmino;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTxSDKType {
  $typeUrl?: string;
  nonce: bigint;
  gas_price: string;
  gas: bigint;
  to: string;
  value: string;
  data: Uint8Array;
  v: Uint8Array;
  r: Uint8Array;
  s: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTx {
  $typeUrl?: string;
  /** chain_id of the destination EVM chain */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: bigint;
  /** gas_price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: bigint;
  /** to is the recipient address in hex format */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface AccessListTxProtoMsg {
  typeUrl: "/ethermint.evm.v1.AccessListTx";
  value: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTxAmino {
  /** chain_id of the destination EVM chain */
  chain_id: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: string;
  /** gas_price defines the value for each gas unit */
  gas_price: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: string;
  /** to is the recipient address in hex format */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTupleAmino[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface AccessListTxAminoMsg {
  type: "/ethermint.evm.v1.AccessListTx";
  value: AccessListTxAmino;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTxSDKType {
  $typeUrl?: string;
  chain_id: string;
  nonce: bigint;
  gas_price: string;
  gas: bigint;
  to: string;
  value: string;
  data: Uint8Array;
  accesses: AccessTupleSDKType[];
  v: Uint8Array;
  r: Uint8Array;
  s: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTx {
  $typeUrl?: string;
  /** chain_id of the destination EVM chain */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: bigint;
  /** gas_tip_cap defines the max value for the gas tip */
  gasTipCap: string;
  /** gas_fee_cap defines the max value for the gas fee */
  gasFeeCap: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: bigint;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface DynamicFeeTxProtoMsg {
  typeUrl: "/ethermint.evm.v1.DynamicFeeTx";
  value: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTxAmino {
  /** chain_id of the destination EVM chain */
  chain_id: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: string;
  /** gas_tip_cap defines the max value for the gas tip */
  gas_tip_cap: string;
  /** gas_fee_cap defines the max value for the gas fee */
  gas_fee_cap: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: string;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTupleAmino[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface DynamicFeeTxAminoMsg {
  type: "/ethermint.evm.v1.DynamicFeeTx";
  value: DynamicFeeTxAmino;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTxSDKType {
  $typeUrl?: string;
  chain_id: string;
  nonce: bigint;
  gas_tip_cap: string;
  gas_fee_cap: string;
  gas: bigint;
  to: string;
  value: string;
  data: Uint8Array;
  accesses: AccessTupleSDKType[];
  v: Uint8Array;
  r: Uint8Array;
  s: Uint8Array;
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTx {}
export interface ExtensionOptionsEthereumTxProtoMsg {
  typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx";
  value: Uint8Array;
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTxAmino {}
export interface ExtensionOptionsEthereumTxAminoMsg {
  type: "/ethermint.evm.v1.ExtensionOptionsEthereumTx";
  value: ExtensionOptionsEthereumTxAmino;
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTxSDKType {}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
  /**
   * hash of the ethereum transaction in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs: Log[];
  /**
   * ret is the returned data from evm function (result or data supplied with revert
   * opcode)
   */
  ret: Uint8Array;
  /** vm_error is the error returned by vm execution */
  vmError: string;
  /** gas_used specifies how much gas was consumed by the transaction */
  gasUsed: bigint;
}
export interface MsgEthereumTxResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse";
  value: Uint8Array;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponseAmino {
  /**
   * hash of the ethereum transaction in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs: LogAmino[];
  /**
   * ret is the returned data from evm function (result or data supplied with revert
   * opcode)
   */
  ret: Uint8Array;
  /** vm_error is the error returned by vm execution */
  vm_error: string;
  /** gas_used specifies how much gas was consumed by the transaction */
  gas_used: string;
}
export interface MsgEthereumTxResponseAminoMsg {
  type: "/ethermint.evm.v1.MsgEthereumTxResponse";
  value: MsgEthereumTxResponseAmino;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponseSDKType {
  hash: string;
  logs: LogSDKType[];
  ret: Uint8Array;
  vm_error: string;
  gas_used: bigint;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/evm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/ethermint.evm.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/evm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/ethermint.evm.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/ethermint.evm.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgEthereumTx(): MsgEthereumTx {
  return {
    data: Any.fromPartial({}),
    size: 0,
    hash: "",
    from: ""
  };
}
export const MsgEthereumTx = {
  typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
  encode(message: MsgEthereumTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgEthereumTx {
    return {
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      size: isSet(object.size) ? Number(object.size) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgEthereumTx>): MsgEthereumTx {
    const message = createBaseMsgEthereumTx();
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.size = object.size ?? 0;
    message.hash = object.hash ?? "";
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgEthereumTxAmino): MsgEthereumTx {
    return {
      data: object?.data ? Any.fromAmino(object.data) : undefined,
      size: object.size,
      hash: object.hash,
      from: object.from
    };
  },
  toAmino(message: MsgEthereumTx): MsgEthereumTxAmino {
    const obj: any = {};
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    obj.size = message.size;
    obj.hash = message.hash;
    obj.from = message.from;
    return obj;
  },
  fromAminoMsg(object: MsgEthereumTxAminoMsg): MsgEthereumTx {
    return MsgEthereumTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEthereumTxProtoMsg): MsgEthereumTx {
    return MsgEthereumTx.decode(message.value);
  },
  toProto(message: MsgEthereumTx): Uint8Array {
    return MsgEthereumTx.encode(message).finish();
  },
  toProtoMsg(message: MsgEthereumTx): MsgEthereumTxProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
      value: MsgEthereumTx.encode(message).finish()
    };
  }
};
function createBaseLegacyTx(): LegacyTx {
  return {
    $typeUrl: "/ethermint.evm.v1.LegacyTx",
    nonce: BigInt(0),
    gasPrice: "",
    gas: BigInt(0),
    to: "",
    value: "",
    data: new Uint8Array(),
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}
export const LegacyTx = {
  typeUrl: "/ethermint.evm.v1.LegacyTx",
  encode(message: LegacyTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.gasPrice !== "") {
      writer.uint32(18).string(message.gasPrice);
    }
    if (message.gas !== BigInt(0)) {
      writer.uint32(24).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.v.length !== 0) {
      writer.uint32(58).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(66).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(74).bytes(message.s);
    }
    return writer;
  },
  fromJSON(object: any): LegacyTx {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
      gas: isSet(object.gas) ? BigInt(object.gas.toString()) : BigInt(0),
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<LegacyTx>): LegacyTx {
    const message = createBaseLegacyTx();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.gasPrice = object.gasPrice ?? "";
    message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
  fromAmino(object: LegacyTxAmino): LegacyTx {
    return {
      nonce: BigInt(object.nonce),
      gasPrice: object.gas_price,
      gas: BigInt(object.gas),
      to: object.to,
      value: object.value,
      data: object.data,
      v: object.v,
      r: object.r,
      s: object.s
    };
  },
  toAmino(message: LegacyTx): LegacyTxAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.gas_price = message.gasPrice;
    obj.gas = message.gas ? message.gas.toString() : undefined;
    obj.to = message.to;
    obj.value = message.value;
    obj.data = message.data;
    obj.v = message.v;
    obj.r = message.r;
    obj.s = message.s;
    return obj;
  },
  fromAminoMsg(object: LegacyTxAminoMsg): LegacyTx {
    return LegacyTx.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyTxProtoMsg): LegacyTx {
    return LegacyTx.decode(message.value);
  },
  toProto(message: LegacyTx): Uint8Array {
    return LegacyTx.encode(message).finish();
  },
  toProtoMsg(message: LegacyTx): LegacyTxProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.LegacyTx",
      value: LegacyTx.encode(message).finish()
    };
  }
};
function createBaseAccessListTx(): AccessListTx {
  return {
    $typeUrl: "/ethermint.evm.v1.AccessListTx",
    chainId: "",
    nonce: BigInt(0),
    gasPrice: "",
    gas: BigInt(0),
    to: "",
    value: "",
    data: new Uint8Array(),
    accesses: [],
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}
export const AccessListTx = {
  typeUrl: "/ethermint.evm.v1.AccessListTx",
  encode(message: AccessListTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }
    if (message.gas !== BigInt(0)) {
      writer.uint32(32).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(74).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(82).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(90).bytes(message.s);
    }
    return writer;
  },
  fromJSON(object: any): AccessListTx {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
      gas: isSet(object.gas) ? BigInt(object.gas.toString()) : BigInt(0),
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromJSON(e)) : [],
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<AccessListTx>): AccessListTx {
    const message = createBaseAccessListTx();
    message.chainId = object.chainId ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.gasPrice = object.gasPrice ?? "";
    message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AccessListTxAmino): AccessListTx {
    return {
      chainId: object.chain_id,
      nonce: BigInt(object.nonce),
      gasPrice: object.gas_price,
      gas: BigInt(object.gas),
      to: object.to,
      value: object.value,
      data: object.data,
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromAmino(e)) : [],
      v: object.v,
      r: object.r,
      s: object.s
    };
  },
  toAmino(message: AccessListTx): AccessListTxAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.gas_price = message.gasPrice;
    obj.gas = message.gas ? message.gas.toString() : undefined;
    obj.to = message.to;
    obj.value = message.value;
    obj.data = message.data;
    if (message.accesses) {
      obj.accesses = message.accesses.map(e => e ? AccessTuple.toAmino(e) : undefined);
    } else {
      obj.accesses = [];
    }
    obj.v = message.v;
    obj.r = message.r;
    obj.s = message.s;
    return obj;
  },
  fromAminoMsg(object: AccessListTxAminoMsg): AccessListTx {
    return AccessListTx.fromAmino(object.value);
  },
  fromProtoMsg(message: AccessListTxProtoMsg): AccessListTx {
    return AccessListTx.decode(message.value);
  },
  toProto(message: AccessListTx): Uint8Array {
    return AccessListTx.encode(message).finish();
  },
  toProtoMsg(message: AccessListTx): AccessListTxProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.AccessListTx",
      value: AccessListTx.encode(message).finish()
    };
  }
};
function createBaseDynamicFeeTx(): DynamicFeeTx {
  return {
    $typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
    chainId: "",
    nonce: BigInt(0),
    gasTipCap: "",
    gasFeeCap: "",
    gas: BigInt(0),
    to: "",
    value: "",
    data: new Uint8Array(),
    accesses: [],
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}
export const DynamicFeeTx = {
  typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
  encode(message: DynamicFeeTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasTipCap !== "") {
      writer.uint32(26).string(message.gasTipCap);
    }
    if (message.gasFeeCap !== "") {
      writer.uint32(34).string(message.gasFeeCap);
    }
    if (message.gas !== BigInt(0)) {
      writer.uint32(40).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(58).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(66).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(82).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(90).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(98).bytes(message.s);
    }
    return writer;
  },
  fromJSON(object: any): DynamicFeeTx {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      gasTipCap: isSet(object.gasTipCap) ? String(object.gasTipCap) : "",
      gasFeeCap: isSet(object.gasFeeCap) ? String(object.gasFeeCap) : "",
      gas: isSet(object.gas) ? BigInt(object.gas.toString()) : BigInt(0),
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromJSON(e)) : [],
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DynamicFeeTx>): DynamicFeeTx {
    const message = createBaseDynamicFeeTx();
    message.chainId = object.chainId ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.gasTipCap = object.gasTipCap ?? "";
    message.gasFeeCap = object.gasFeeCap ?? "";
    message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array();
    message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DynamicFeeTxAmino): DynamicFeeTx {
    return {
      chainId: object.chain_id,
      nonce: BigInt(object.nonce),
      gasTipCap: object.gas_tip_cap,
      gasFeeCap: object.gas_fee_cap,
      gas: BigInt(object.gas),
      to: object.to,
      value: object.value,
      data: object.data,
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromAmino(e)) : [],
      v: object.v,
      r: object.r,
      s: object.s
    };
  },
  toAmino(message: DynamicFeeTx): DynamicFeeTxAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.gas_tip_cap = message.gasTipCap;
    obj.gas_fee_cap = message.gasFeeCap;
    obj.gas = message.gas ? message.gas.toString() : undefined;
    obj.to = message.to;
    obj.value = message.value;
    obj.data = message.data;
    if (message.accesses) {
      obj.accesses = message.accesses.map(e => e ? AccessTuple.toAmino(e) : undefined);
    } else {
      obj.accesses = [];
    }
    obj.v = message.v;
    obj.r = message.r;
    obj.s = message.s;
    return obj;
  },
  fromAminoMsg(object: DynamicFeeTxAminoMsg): DynamicFeeTx {
    return DynamicFeeTx.fromAmino(object.value);
  },
  fromProtoMsg(message: DynamicFeeTxProtoMsg): DynamicFeeTx {
    return DynamicFeeTx.decode(message.value);
  },
  toProto(message: DynamicFeeTx): Uint8Array {
    return DynamicFeeTx.encode(message).finish();
  },
  toProtoMsg(message: DynamicFeeTx): DynamicFeeTxProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
      value: DynamicFeeTx.encode(message).finish()
    };
  }
};
function createBaseExtensionOptionsEthereumTx(): ExtensionOptionsEthereumTx {
  return {};
}
export const ExtensionOptionsEthereumTx = {
  typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx",
  encode(_: ExtensionOptionsEthereumTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ExtensionOptionsEthereumTx {
    return {};
  },
  fromPartial(_: Partial<ExtensionOptionsEthereumTx>): ExtensionOptionsEthereumTx {
    const message = createBaseExtensionOptionsEthereumTx();
    return message;
  },
  fromAmino(_: ExtensionOptionsEthereumTxAmino): ExtensionOptionsEthereumTx {
    return {};
  },
  toAmino(_: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ExtensionOptionsEthereumTxAminoMsg): ExtensionOptionsEthereumTx {
    return ExtensionOptionsEthereumTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionOptionsEthereumTxProtoMsg): ExtensionOptionsEthereumTx {
    return ExtensionOptionsEthereumTx.decode(message.value);
  },
  toProto(message: ExtensionOptionsEthereumTx): Uint8Array {
    return ExtensionOptionsEthereumTx.encode(message).finish();
  },
  toProtoMsg(message: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx",
      value: ExtensionOptionsEthereumTx.encode(message).finish()
    };
  }
};
function createBaseMsgEthereumTxResponse(): MsgEthereumTxResponse {
  return {
    hash: "",
    logs: [],
    ret: new Uint8Array(),
    vmError: "",
    gasUsed: BigInt(0)
  };
}
export const MsgEthereumTxResponse = {
  typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse",
  encode(message: MsgEthereumTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(26).bytes(message.ret);
    }
    if (message.vmError !== "") {
      writer.uint32(34).string(message.vmError);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(40).uint64(message.gasUsed);
    }
    return writer;
  },
  fromJSON(object: any): MsgEthereumTxResponse {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : [],
      ret: isSet(object.ret) ? bytesFromBase64(object.ret) : new Uint8Array(),
      vmError: isSet(object.vmError) ? String(object.vmError) : "",
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgEthereumTxResponse>): MsgEthereumTxResponse {
    const message = createBaseMsgEthereumTxResponse();
    message.hash = object.hash ?? "";
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    message.ret = object.ret ?? new Uint8Array();
    message.vmError = object.vmError ?? "";
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgEthereumTxResponseAmino): MsgEthereumTxResponse {
    return {
      hash: object.hash,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromAmino(e)) : [],
      ret: object.ret,
      vmError: object.vm_error,
      gasUsed: BigInt(object.gas_used)
    };
  },
  toAmino(message: MsgEthereumTxResponse): MsgEthereumTxResponseAmino {
    const obj: any = {};
    obj.hash = message.hash;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
    } else {
      obj.logs = [];
    }
    obj.ret = message.ret;
    obj.vm_error = message.vmError;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEthereumTxResponseAminoMsg): MsgEthereumTxResponse {
    return MsgEthereumTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEthereumTxResponseProtoMsg): MsgEthereumTxResponse {
    return MsgEthereumTxResponse.decode(message.value);
  },
  toProto(message: MsgEthereumTxResponse): Uint8Array {
    return MsgEthereumTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEthereumTxResponse): MsgEthereumTxResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse",
      value: MsgEthereumTxResponse.encode(message).finish()
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
  typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
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
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
      typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse",
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
    return {};
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
      typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};