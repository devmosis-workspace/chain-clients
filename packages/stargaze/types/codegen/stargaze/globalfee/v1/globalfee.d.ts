import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the globalfee module. */
export interface Params {
    /** Addresses which are whitelisted to modify the gas free operations */
    privilegedAddresses: string[];
    /** Minimum stores the minimum gas price(s) for all TX on the chain. */
    minimumGasPrices: DecCoin[];
}
/** Params holds parameters for the globalfee module. */
export interface ParamsSDKType {
    privileged_addresses: string[];
    minimum_gas_prices: DecCoinSDKType[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorization {
    /** authorized code ids */
    codeId: Long;
    /** authorized contract operation methods */
    methods: string[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationSDKType {
    code_id: Long;
    methods: string[];
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorization {
    /** authorized contract addresses */
    contractAddress: string;
    /** authorized contract operation methods */
    methods: string[];
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorizationSDKType {
    contract_address: string;
    methods: string[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const CodeAuthorization: {
    encode(message: CodeAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CodeAuthorization;
    fromPartial(object: Partial<CodeAuthorization>): CodeAuthorization;
};
export declare const ContractAuthorization: {
    encode(message: ContractAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractAuthorization;
    fromPartial(object: Partial<ContractAuthorization>): ContractAuthorization;
};
