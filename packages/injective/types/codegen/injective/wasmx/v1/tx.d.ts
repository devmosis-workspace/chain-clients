import { Params, ParamsSDKType } from "./wasmx";
import { ContractRegistrationRequest, ContractRegistrationRequestSDKType } from "./proposal";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompat {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: string;
    /** Funds coins that are transferred to the contract on execution */
    funds: string;
}
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompatSDKType {
    sender: string;
    contract: string;
    msg: string;
    funds: string;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponseSDKType {
    data: Uint8Array;
}
export interface MsgUpdateContract {
    sender: string;
    /** Unique Identifier for contract instance to be registered. */
    contractAddress: string;
    /** Maximum gas to be used for the smart contract execution. */
    gasLimit: Long;
    /** gas price to be used for the smart contract execution. */
    gasPrice: Long;
    /** optional - admin account that will be allowed to perform any changes */
    adminAddress: string;
}
export interface MsgUpdateContractSDKType {
    sender: string;
    contract_address: string;
    gas_limit: Long;
    gas_price: Long;
    admin_address: string;
}
export interface MsgUpdateContractResponse {
}
export interface MsgUpdateContractResponseSDKType {
}
export interface MsgActivateContract {
    sender: string;
    /** Unique Identifier for contract instance to be activated. */
    contractAddress: string;
}
export interface MsgActivateContractSDKType {
    sender: string;
    contract_address: string;
}
export interface MsgActivateContractResponse {
}
export interface MsgActivateContractResponseSDKType {
}
export interface MsgDeactivateContract {
    sender: string;
    /** Unique Identifier for contract instance to be deactivated. */
    contractAddress: string;
}
export interface MsgDeactivateContractSDKType {
    sender: string;
    contract_address: string;
}
export interface MsgDeactivateContractResponse {
}
export interface MsgDeactivateContractResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the wasmx parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgRegisterContract {
    sender: string;
    contractRegistrationRequest?: ContractRegistrationRequest;
}
export interface MsgRegisterContractSDKType {
    sender: string;
    contract_registration_request?: ContractRegistrationRequestSDKType;
}
export interface MsgRegisterContractResponse {
}
export interface MsgRegisterContractResponseSDKType {
}
export declare const MsgExecuteContractCompat: {
    encode(message: MsgExecuteContractCompat, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExecuteContractCompat;
    fromPartial(object: Partial<MsgExecuteContractCompat>): MsgExecuteContractCompat;
};
export declare const MsgExecuteContractCompatResponse: {
    encode(message: MsgExecuteContractCompatResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExecuteContractCompatResponse;
    fromPartial(object: Partial<MsgExecuteContractCompatResponse>): MsgExecuteContractCompatResponse;
};
export declare const MsgUpdateContract: {
    encode(message: MsgUpdateContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateContract;
    fromPartial(object: Partial<MsgUpdateContract>): MsgUpdateContract;
};
export declare const MsgUpdateContractResponse: {
    encode(_: MsgUpdateContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateContractResponse;
    fromPartial(_: Partial<MsgUpdateContractResponse>): MsgUpdateContractResponse;
};
export declare const MsgActivateContract: {
    encode(message: MsgActivateContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgActivateContract;
    fromPartial(object: Partial<MsgActivateContract>): MsgActivateContract;
};
export declare const MsgActivateContractResponse: {
    encode(_: MsgActivateContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgActivateContractResponse;
    fromPartial(_: Partial<MsgActivateContractResponse>): MsgActivateContractResponse;
};
export declare const MsgDeactivateContract: {
    encode(message: MsgDeactivateContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeactivateContract;
    fromPartial(object: Partial<MsgDeactivateContract>): MsgDeactivateContract;
};
export declare const MsgDeactivateContractResponse: {
    encode(_: MsgDeactivateContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeactivateContractResponse;
    fromPartial(_: Partial<MsgDeactivateContractResponse>): MsgDeactivateContractResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgRegisterContract: {
    encode(message: MsgRegisterContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterContract;
    fromPartial(object: Partial<MsgRegisterContract>): MsgRegisterContract;
};
export declare const MsgRegisterContractResponse: {
    encode(_: MsgRegisterContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterContractResponse;
    fromPartial(_: Partial<MsgRegisterContractResponse>): MsgRegisterContractResponse;
};
