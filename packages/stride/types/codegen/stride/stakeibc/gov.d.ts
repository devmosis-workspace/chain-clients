import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
export interface AddValidatorsProposal {
    title: string;
    description: string;
    hostZone: string;
    validators: Validator[];
    deposit: string;
}
export interface AddValidatorsProposalSDKType {
    title: string;
    description: string;
    host_zone: string;
    validators: ValidatorSDKType[];
    deposit: string;
}
export declare const AddValidatorsProposal: {
    encode(message: AddValidatorsProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AddValidatorsProposal;
    fromPartial(object: Partial<AddValidatorsProposal>): AddValidatorsProposal;
};
