import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
    accounts: Account[];
    payments: FractionalPayment[];
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
    accounts: AccountSDKType[];
    payments: FractionalPaymentSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
