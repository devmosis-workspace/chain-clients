import { AminoMsg } from "@cosmjs/amino";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./msg";
export interface MsgStoreCodeAminoType extends AminoMsg {
    type: "/secret.compute.v1beta1.MsgStoreCode";
    value: {
        sender: Uint8Array;
        wasm_byte_code: string;
        source: string;
        builder: string;
    };
}
export interface MsgInstantiateContractAminoType extends AminoMsg {
    type: "/secret.compute.v1beta1.MsgInstantiateContract";
    value: {
        sender: Uint8Array;
        callback_code_hash: string;
        code_id: string;
        label: string;
        init_msg: Uint8Array;
        init_funds: {
            denom: string;
            amount: string;
        }[];
        callback_sig: Uint8Array;
    };
}
export interface MsgExecuteContractAminoType extends AminoMsg {
    type: "/secret.compute.v1beta1.MsgExecuteContract";
    value: {
        sender: Uint8Array;
        contract: Uint8Array;
        msg: Uint8Array;
        callback_code_hash: string;
        sent_funds: {
            denom: string;
            amount: string;
        }[];
        callback_sig: Uint8Array;
    };
}
export declare const AminoConverter: {
    "/secret.compute.v1beta1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode, source, builder }: MsgStoreCode) => MsgStoreCodeAminoType["value"];
        fromAmino: ({ sender, wasm_byte_code, source, builder }: MsgStoreCodeAminoType["value"]) => MsgStoreCode;
    };
    "/secret.compute.v1beta1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, callbackCodeHash, codeId, label, initMsg, initFunds, callbackSig }: MsgInstantiateContract) => MsgInstantiateContractAminoType["value"];
        fromAmino: ({ sender, callback_code_hash, code_id, label, init_msg, init_funds, callback_sig }: MsgInstantiateContractAminoType["value"]) => MsgInstantiateContract;
    };
    "/secret.compute.v1beta1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, callbackCodeHash, sentFunds, callbackSig }: MsgExecuteContract) => MsgExecuteContractAminoType["value"];
        fromAmino: ({ sender, contract, msg, callback_code_hash, sent_funds, callback_sig }: MsgExecuteContractAminoType["value"]) => MsgExecuteContract;
    };
};
