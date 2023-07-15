import * as _m0 from "protobufjs/minimal";
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTx {
    /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
    maxPriorityPrice: string;
}
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTxSDKType {
    max_priority_price: string;
}
export declare const ExtensionOptionDynamicFeeTx: {
    encode(message: ExtensionOptionDynamicFeeTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExtensionOptionDynamicFeeTx;
    fromPartial(object: Partial<ExtensionOptionDynamicFeeTx>): ExtensionOptionDynamicFeeTx;
};
