import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface AddressUnbonding {
    address: string;
    receiver: string;
    unbondingEstimatedTime: string;
    amount: string;
    denom: string;
    claimIsPending: boolean;
    epochNumber: Long;
}
export interface AddressUnbondingSDKType {
    address: string;
    receiver: string;
    unbonding_estimated_time: string;
    amount: string;
    denom: string;
    claim_is_pending: boolean;
    epoch_number: Long;
}
export declare const AddressUnbonding: {
    encode(message: AddressUnbonding, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AddressUnbonding;
    fromPartial(object: Partial<AddressUnbonding>): AddressUnbonding;
};
