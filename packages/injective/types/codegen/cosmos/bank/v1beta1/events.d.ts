import * as _m0 from "protobufjs/minimal";
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalances {
    balanceUpdates: BalanceUpdate[];
}
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalancesSDKType {
    balance_updates: BalanceUpdateSDKType[];
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdate {
    addr: Uint8Array;
    denom: Uint8Array;
    /** the latest amount */
    amt: string;
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdateSDKType {
    addr: Uint8Array;
    denom: Uint8Array;
    amt: string;
}
export declare const EventSetBalances: {
    encode(message: EventSetBalances, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSetBalances;
    fromPartial(object: Partial<EventSetBalances>): EventSetBalances;
};
export declare const BalanceUpdate: {
    encode(message: BalanceUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BalanceUpdate;
    fromPartial(object: Partial<BalanceUpdate>): BalanceUpdate;
};
