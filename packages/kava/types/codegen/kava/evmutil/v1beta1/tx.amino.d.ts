import { AminoMsg } from "@cosmjs/amino";
import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin, MsgConvertCosmosCoinToERC20, MsgConvertCosmosCoinFromERC20 } from "./tx";
export interface MsgConvertCoinToERC20AminoType extends AminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20";
    value: {
        initiator: string;
        receiver: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgConvertERC20ToCoinAminoType extends AminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
    value: {
        initiator: string;
        receiver: string;
        kava_erc20_address: string;
        amount: string;
    };
}
export interface MsgConvertCosmosCoinToERC20AminoType extends AminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20";
    value: {
        initiator: string;
        receiver: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgConvertCosmosCoinFromERC20AminoType extends AminoMsg {
    type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20";
    value: {
        initiator: string;
        receiver: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
        aminoType: string;
        toAmino: ({ initiator, receiver, amount }: MsgConvertCoinToERC20) => MsgConvertCoinToERC20AminoType["value"];
        fromAmino: ({ initiator, receiver, amount }: MsgConvertCoinToERC20AminoType["value"]) => MsgConvertCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
        aminoType: string;
        toAmino: ({ initiator, receiver, kavaErc20Address, amount }: MsgConvertERC20ToCoin) => MsgConvertERC20ToCoinAminoType["value"];
        fromAmino: ({ initiator, receiver, kava_erc20_address, amount }: MsgConvertERC20ToCoinAminoType["value"]) => MsgConvertERC20ToCoin;
    };
    "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
        aminoType: string;
        toAmino: ({ initiator, receiver, amount }: MsgConvertCosmosCoinToERC20) => MsgConvertCosmosCoinToERC20AminoType["value"];
        fromAmino: ({ initiator, receiver, amount }: MsgConvertCosmosCoinToERC20AminoType["value"]) => MsgConvertCosmosCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
        aminoType: string;
        toAmino: ({ initiator, receiver, amount }: MsgConvertCosmosCoinFromERC20) => MsgConvertCosmosCoinFromERC20AminoType["value"];
        fromAmino: ({ initiator, receiver, amount }: MsgConvertCosmosCoinFromERC20AminoType["value"]) => MsgConvertCosmosCoinFromERC20;
    };
};
