import { AminoMsg } from "@cosmjs/amino";
import { MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export interface MsgConvertCoinAminoType extends AminoMsg {
    type: "/evmos.erc20.v1.MsgConvertCoin";
    value: {
        coin: {
            denom: string;
            amount: string;
        };
        receiver: string;
        sender: string;
    };
}
export interface MsgConvertERC20AminoType extends AminoMsg {
    type: "/evmos.erc20.v1.MsgConvertERC20";
    value: {
        contract_address: string;
        amount: string;
        receiver: string;
        sender: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/evmos.erc20.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            enable_erc20: boolean;
            enable_evm_hook: boolean;
        };
    };
}
export declare const AminoConverter: {
    "/evmos.erc20.v1.MsgConvertCoin": {
        aminoType: string;
        toAmino: ({ coin, receiver, sender }: MsgConvertCoin) => MsgConvertCoinAminoType["value"];
        fromAmino: ({ coin, receiver, sender }: MsgConvertCoinAminoType["value"]) => MsgConvertCoin;
    };
    "/evmos.erc20.v1.MsgConvertERC20": {
        aminoType: string;
        toAmino: ({ contractAddress, amount, receiver, sender }: MsgConvertERC20) => MsgConvertERC20AminoType["value"];
        fromAmino: ({ contract_address, amount, receiver, sender }: MsgConvertERC20AminoType["value"]) => MsgConvertERC20;
    };
    "/evmos.erc20.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
