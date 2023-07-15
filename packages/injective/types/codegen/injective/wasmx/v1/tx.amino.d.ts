import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export interface MsgUpdateContractAminoType extends AminoMsg {
    type: "/injective.wasmx.v1.MsgUpdateContract";
    value: {
        sender: string;
        contract_address: string;
        gas_limit: string;
        gas_price: string;
        admin_address: string;
    };
}
export interface MsgActivateContractAminoType extends AminoMsg {
    type: "/injective.wasmx.v1.MsgActivateContract";
    value: {
        sender: string;
        contract_address: string;
    };
}
export interface MsgDeactivateContractAminoType extends AminoMsg {
    type: "/injective.wasmx.v1.MsgDeactivateContract";
    value: {
        sender: string;
        contract_address: string;
    };
}
export interface MsgExecuteContractCompatAminoType extends AminoMsg {
    type: "/injective.wasmx.v1.MsgExecuteContractCompat";
    value: {
        sender: string;
        contract: string;
        msg: string;
        funds: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.wasmx.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            is_execution_enabled: boolean;
            max_begin_block_total_gas: string;
            max_contract_gas_limit: string;
            min_gas_price: string;
        };
    };
}
export interface MsgRegisterContractAminoType extends AminoMsg {
    type: "/injective.wasmx.v1.MsgRegisterContract";
    value: {
        sender: string;
        contract_registration_request: {
            contract_address: string;
            gas_limit: string;
            gas_price: string;
            should_pin_contract: boolean;
            is_migration_allowed: boolean;
            code_id: string;
            admin_address: string;
            granter_address: string;
            funding_mode: number;
        };
    };
}
export declare const AminoConverter: {
    "/injective.wasmx.v1.MsgUpdateContract": {
        aminoType: string;
        toAmino: ({ sender, contractAddress, gasLimit, gasPrice, adminAddress }: MsgUpdateContract) => MsgUpdateContractAminoType["value"];
        fromAmino: ({ sender, contract_address, gas_limit, gas_price, admin_address }: MsgUpdateContractAminoType["value"]) => MsgUpdateContract;
    };
    "/injective.wasmx.v1.MsgActivateContract": {
        aminoType: string;
        toAmino: ({ sender, contractAddress }: MsgActivateContract) => MsgActivateContractAminoType["value"];
        fromAmino: ({ sender, contract_address }: MsgActivateContractAminoType["value"]) => MsgActivateContract;
    };
    "/injective.wasmx.v1.MsgDeactivateContract": {
        aminoType: string;
        toAmino: ({ sender, contractAddress }: MsgDeactivateContract) => MsgDeactivateContractAminoType["value"];
        fromAmino: ({ sender, contract_address }: MsgDeactivateContractAminoType["value"]) => MsgDeactivateContract;
    };
    "/injective.wasmx.v1.MsgExecuteContractCompat": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds }: MsgExecuteContractCompat) => MsgExecuteContractCompatAminoType["value"];
        fromAmino: ({ sender, contract, msg, funds }: MsgExecuteContractCompatAminoType["value"]) => MsgExecuteContractCompat;
    };
    "/injective.wasmx.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/injective.wasmx.v1.MsgRegisterContract": {
        aminoType: string;
        toAmino: ({ sender, contractRegistrationRequest }: MsgRegisterContract) => MsgRegisterContractAminoType["value"];
        fromAmino: ({ sender, contract_registration_request }: MsgRegisterContractAminoType["value"]) => MsgRegisterContract;
    };
};
