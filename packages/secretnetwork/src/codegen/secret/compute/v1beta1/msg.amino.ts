import { AminoMsg } from "@cosmjs/amino";
import { toBase64, fromBase64 } from "@cosmjs/encoding";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/secret.compute.v1beta1.MsgStoreCode": {
    aminoType: "/secret.compute.v1beta1.MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode,
      source,
      builder
    }: MsgStoreCode): MsgStoreCodeAminoType["value"] => {
      return {
        sender,
        wasm_byte_code: toBase64(wasmByteCode),
        source,
        builder
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      source,
      builder
    }: MsgStoreCodeAminoType["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: fromBase64(wasm_byte_code),
        source,
        builder
      };
    }
  },
  "/secret.compute.v1beta1.MsgInstantiateContract": {
    aminoType: "/secret.compute.v1beta1.MsgInstantiateContract",
    toAmino: ({
      sender,
      callbackCodeHash,
      codeId,
      label,
      initMsg,
      initFunds,
      callbackSig
    }: MsgInstantiateContract): MsgInstantiateContractAminoType["value"] => {
      return {
        sender,
        callback_code_hash: callbackCodeHash,
        code_id: codeId.toString(),
        label,
        init_msg: initMsg,
        init_funds: initFunds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        callback_sig: callbackSig
      };
    },
    fromAmino: ({
      sender,
      callback_code_hash,
      code_id,
      label,
      init_msg,
      init_funds,
      callback_sig
    }: MsgInstantiateContractAminoType["value"]): MsgInstantiateContract => {
      return {
        sender,
        callbackCodeHash: callback_code_hash,
        codeId: Long.fromString(code_id),
        label,
        initMsg: init_msg,
        initFunds: init_funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        callbackSig: callback_sig
      };
    }
  },
  "/secret.compute.v1beta1.MsgExecuteContract": {
    aminoType: "/secret.compute.v1beta1.MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      callbackCodeHash,
      sentFunds,
      callbackSig
    }: MsgExecuteContract): MsgExecuteContractAminoType["value"] => {
      return {
        sender,
        contract,
        msg,
        callback_code_hash: callbackCodeHash,
        sent_funds: sentFunds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        callback_sig: callbackSig
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      callback_code_hash,
      sent_funds,
      callback_sig
    }: MsgExecuteContractAminoType["value"]): MsgExecuteContract => {
      return {
        sender,
        contract,
        msg,
        callbackCodeHash: callback_code_hash,
        sentFunds: sent_funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        callbackSig: callback_sig
      };
    }
  }
};