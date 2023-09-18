import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3Tx {
  /**
   * typed_data_chain_id is used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainId: bigint;
  /**
   * fee_payer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  feePayer: string;
  /**
   * fee_payer_sig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  feePayerSig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxProtoMsg {
  typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx";
  value: Uint8Array;
}
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3TxAmino {
  /**
   * typed_data_chain_id is used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typed_data_chain_id: string;
  /**
   * fee_payer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  fee_payer: string;
  /**
   * fee_payer_sig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  fee_payer_sig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxAminoMsg {
  type: "/ethermint.types.v1.ExtensionOptionsWeb3Tx";
  value: ExtensionOptionsWeb3TxAmino;
}
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3TxSDKType {
  typed_data_chain_id: bigint;
  fee_payer: string;
  fee_payer_sig: Uint8Array;
}
function createBaseExtensionOptionsWeb3Tx(): ExtensionOptionsWeb3Tx {
  return {
    typedDataChainId: BigInt(0),
    feePayer: "",
    feePayerSig: new Uint8Array()
  };
}
export const ExtensionOptionsWeb3Tx = {
  typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
  encode(message: ExtensionOptionsWeb3Tx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typedDataChainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.typedDataChainId);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.feePayerSig.length !== 0) {
      writer.uint32(26).bytes(message.feePayerSig);
    }
    return writer;
  },
  fromJSON(object: any): ExtensionOptionsWeb3Tx {
    return {
      typedDataChainId: isSet(object.typedDataChainId) ? BigInt(object.typedDataChainId.toString()) : BigInt(0),
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    message.typedDataChainId = object.typedDataChainId !== undefined && object.typedDataChainId !== null ? BigInt(object.typedDataChainId.toString()) : BigInt(0);
    message.feePayer = object.feePayer ?? "";
    message.feePayerSig = object.feePayerSig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ExtensionOptionsWeb3TxAmino): ExtensionOptionsWeb3Tx {
    return {
      typedDataChainId: BigInt(object.typed_data_chain_id),
      feePayer: object.fee_payer,
      feePayerSig: object.fee_payer_sig
    };
  },
  toAmino(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxAmino {
    const obj: any = {};
    obj.typed_data_chain_id = message.typedDataChainId ? message.typedDataChainId.toString() : undefined;
    obj.fee_payer = message.feePayer;
    obj.fee_payer_sig = message.feePayerSig;
    return obj;
  },
  fromAminoMsg(object: ExtensionOptionsWeb3TxAminoMsg): ExtensionOptionsWeb3Tx {
    return ExtensionOptionsWeb3Tx.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionOptionsWeb3TxProtoMsg): ExtensionOptionsWeb3Tx {
    return ExtensionOptionsWeb3Tx.decode(message.value);
  },
  toProto(message: ExtensionOptionsWeb3Tx): Uint8Array {
    return ExtensionOptionsWeb3Tx.encode(message).finish();
  },
  toProtoMsg(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxProtoMsg {
    return {
      typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
      value: ExtensionOptionsWeb3Tx.encode(message).finish()
    };
  }
};