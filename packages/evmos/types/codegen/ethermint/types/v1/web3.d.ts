import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3Tx {
    /**
     * typed_data_chain_id is used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     */
    typedDataChainId: Long;
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
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3TxSDKType {
    typed_data_chain_id: Long;
    fee_payer: string;
    fee_payer_sig: Uint8Array;
}
export declare const ExtensionOptionsWeb3Tx: {
    encode(message: ExtensionOptionsWeb3Tx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExtensionOptionsWeb3Tx;
    fromPartial(object: Partial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx;
};
