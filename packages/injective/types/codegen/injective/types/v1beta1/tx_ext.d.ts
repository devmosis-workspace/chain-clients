import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ExtensionOptionsWeb3Tx {
    /**
     * typedDataChainID used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     */
    typedDataChainID: Long;
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
export interface ExtensionOptionsWeb3TxSDKType {
    typedDataChainID: Long;
    feePayer: string;
    feePayerSig: Uint8Array;
}
export declare const ExtensionOptionsWeb3Tx: {
    encode(message: ExtensionOptionsWeb3Tx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExtensionOptionsWeb3Tx;
    fromPartial(object: Partial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx;
};
