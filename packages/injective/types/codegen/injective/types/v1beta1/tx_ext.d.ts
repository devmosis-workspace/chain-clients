import { BinaryWriter } from "../../../binary";
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
export declare const ExtensionOptionsWeb3Tx: {
    typeUrl: string;
    encode(message: ExtensionOptionsWeb3Tx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExtensionOptionsWeb3Tx;
    fromPartial(object: Partial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx;
    fromAmino(object: ExtensionOptionsWeb3TxAmino): ExtensionOptionsWeb3Tx;
    toAmino(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxAmino;
    fromAminoMsg(object: ExtensionOptionsWeb3TxAminoMsg): ExtensionOptionsWeb3Tx;
    fromProtoMsg(message: ExtensionOptionsWeb3TxProtoMsg): ExtensionOptionsWeb3Tx;
    toProto(message: ExtensionOptionsWeb3Tx): Uint8Array;
    toProtoMsg(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxProtoMsg;
};
