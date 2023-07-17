import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Cork {
    /** call body containing the ABI encoded bytes to send to the contract */
    encodedContractCall: Uint8Array;
    /** address of the contract to send the call */
    targetContractAddress: string;
}
export interface CorkSDKType {
    encoded_contract_call: Uint8Array;
    target_contract_address: string;
}
export interface ValidatorCork {
    cork?: Cork;
    validator: string;
}
export interface ValidatorCorkSDKType {
    cork?: CorkSDKType;
    validator: string;
}
export interface ScheduledCork {
    cork?: Cork;
    blockHeight: Long;
    validator: string;
}
export interface ScheduledCorkSDKType {
    cork?: CorkSDKType;
    block_height: Long;
    validator: string;
}
export interface CellarIDSet {
    ids: string[];
}
export interface CellarIDSetSDKType {
    ids: string[];
}
export declare const Cork: {
    encode(message: Cork, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Cork;
    fromPartial(object: Partial<Cork>): Cork;
};
export declare const ValidatorCork: {
    encode(message: ValidatorCork, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ValidatorCork;
    fromPartial(object: Partial<ValidatorCork>): ValidatorCork;
};
export declare const ScheduledCork: {
    encode(message: ScheduledCork, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ScheduledCork;
    fromPartial(object: Partial<ScheduledCork>): ScheduledCork;
};
export declare const CellarIDSet: {
    encode(message: CellarIDSet, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CellarIDSet;
    fromPartial(object: Partial<CellarIDSet>): CellarIDSet;
};
