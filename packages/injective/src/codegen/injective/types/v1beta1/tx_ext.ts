import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface ExtensionOptionsWeb3Tx {
  /**
   * typedDataChainID used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainID: bigint;
  /**
   * feePayer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  feePayer: string;
  /**
   * feePayerSig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  feePayerSig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxProtoMsg {
  typeUrl: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx";
  value: Uint8Array;
}
export interface ExtensionOptionsWeb3TxAmino {
  /**
   * typedDataChainID used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainID: string;
  /**
   * feePayer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  feePayer: string;
  /**
   * feePayerSig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  feePayerSig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxAminoMsg {
  type: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx";
  value: ExtensionOptionsWeb3TxAmino;
}
export interface ExtensionOptionsWeb3TxSDKType {
  typedDataChainID: bigint;
  feePayer: string;
  feePayerSig: Uint8Array;
}
function createBaseExtensionOptionsWeb3Tx(): ExtensionOptionsWeb3Tx {
  return {
    typedDataChainID: BigInt(0),
    feePayer: "",
    feePayerSig: new Uint8Array()
  };
}
export const ExtensionOptionsWeb3Tx = {
  typeUrl: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx",
  encode(message: ExtensionOptionsWeb3Tx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typedDataChainID !== BigInt(0)) {
      writer.uint32(8).uint64(message.typedDataChainID);
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
      typedDataChainID: isSet(object.typedDataChainID) ? BigInt(object.typedDataChainID.toString()) : BigInt(0),
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    message.typedDataChainID = object.typedDataChainID !== undefined && object.typedDataChainID !== null ? BigInt(object.typedDataChainID.toString()) : BigInt(0);
    message.feePayer = object.feePayer ?? "";
    message.feePayerSig = object.feePayerSig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ExtensionOptionsWeb3TxAmino): ExtensionOptionsWeb3Tx {
    return {
      typedDataChainID: BigInt(object.typedDataChainID),
      feePayer: object.feePayer,
      feePayerSig: object.feePayerSig
    };
  },
  toAmino(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxAmino {
    const obj: any = {};
    obj.typedDataChainID = message.typedDataChainID ? message.typedDataChainID.toString() : undefined;
    obj.feePayer = message.feePayer;
    obj.feePayerSig = message.feePayerSig;
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
      typeUrl: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx",
      value: ExtensionOptionsWeb3Tx.encode(message).finish()
    };
  }
};